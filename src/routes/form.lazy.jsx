import { useState } from "react";
import { createLazyFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, UserPlus } from "lucide-react";
import { addDoc, collection } from "firebase/firestore";
import db from "../firebaseConfig";
import MemberFormItem from "../components/MemberFormItem";

export const Route = createLazyFileRoute("/form")({
  component: Form,
});

function Form() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    key: "2222",
    familyName: "",
    wazeLocation: "",
    members: [
      { name: "", phone: "", role: "אב" },
      { name: "", phone: "", role: "אם" },
    ],
  });

  const [isGettingLocation, setIsGettingLocation] = useState(false);

  const getCurrentLocation = () => {
    setIsGettingLocation(true);
    if (!navigator.geolocation) {
      alert("הדפדפן שלך לא תומך במיקום אוטומטי");
      setIsGettingLocation(false);
      return;
    }

    const options = {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 60000,
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude.toFixed(6);
        const lng = position.coords.longitude.toFixed(6);
        const locationString = `${lat},${lng}`;
        setFormData((prev) => ({
          ...prev,
          wazeLocation: locationString,
        }));
        setIsGettingLocation(false);
      },
      (error) => {
        setIsGettingLocation(false);
        let errorMessage = "לא הצלחנו לקבל את המיקום. ";
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage +=
              "נדחתה הגישה למיקום. אנא אפשר גישה למיקום בהגדרות הדפדפן.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage += "מידע המיקום לא זמין.";
            break;
          case error.TIMEOUT:
            errorMessage += "תם הזמן לקבלת המיקום. נסה שוב.";
            break;
          default:
            errorMessage += "שגיאה לא ידועה.";
            break;
        }
        alert(errorMessage);
      },
      options,
    );
  };

  const addFamilyMember = () => {
    setFormData({
      ...formData,
      members: [...formData.members, { name: "", phone: "", role: "ילד/ה" }],
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const hasValidMembers = formData.members.some((member) =>
      member.name.trim(),
    );

    if (formData.familyName && formData.wazeLocation && hasValidMembers) {
      const newFamily = {
        familyName: formData.familyName,
        wazeLocation: formData.wazeLocation,
        members: formData.members.filter((member) => member.name.trim()),
        submittedAt: new Date().toLocaleString("he-IL"),
      };
      try {
        await addDoc(collection(db, "families"), newFamily);

        setFormData({
          familyName: "",
          wazeLocation: "",
          members: [
            { key: "1", name: "", phone: "", role: "אב" },
            { key: "2", name: "", phone: "", role: "אם" },
          ],
        });
        navigate({ to: "/" });
      } catch (error) {
        console.error("Error adding document: ", error);
        alert("אירעה שגיאה בעת שליחת הטופס. אנא נסה שוב מאוחר יותר.");
      }
    } else {
      alert("נא למלא לפחות שם משפחה, מיקום ובן משפחה אחד עם שם");
    }
  };

  const handleFamilyInputChange = (field, value) => {
    if (field === "wazeLocation" && value.includes("google.com/maps")) {
      value = handleGoogleMapsLink(value);
    }
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleMemberChange = (index, field, value) => {
    const newMembers = [...formData.members];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setFormData({ ...formData, members: newMembers });
  };

  const removeFamilyMember = (index) => {
    if (formData.members.length > 1) {
      const newMembers = formData.members.filter((_, i) => i !== index);
      setFormData({ ...formData, members: newMembers });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <header className="d-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0">רישום משפחה חדשה</h1>
        <Link
          to={"/"}
          className="btn btn-link text-decoration-none d-flex align-items-center gap-2"
        >
          <ArrowLeft size={20} />
          חזור לרשימה
        </Link>
      </header>

      <form className="row g-4" onSubmit={handleFormSubmit}>
        <div className="col-12">
          <label className="form-label">שם המשפחה *</label>
          <input
            type="text"
            value={formData.familyName}
            onChange={(e) => {
              handleFamilyInputChange("familyName", e.target.value);
            }}
            className="form-control"
            placeholder="הכנס את שם המשפחה"
          />
        </div>

        <div className="col-12">
          <label className="form-label">מיקום בוויז *</label>
          <input
            type="text"
            value={formData.wazeLocation}
            onChange={(e) =>
              handleFamilyInputChange("wazeLocation", e.target.value)
            }
            className="form-control mb-3"
            placeholder="כתובת מלאה או הדבק קישור מגוגל מפות"
          />
          <button
            onClick={getCurrentLocation}
            disabled={isGettingLocation}
            className="btn btn-outline-primary mb-3"
          >
            {isGettingLocation ? "מקבל מיקום..." : "קבל מיקום נוכחי"}
          </button>
          <div className="alert alert-info">
            <strong className="d-block mb-2">
              💡 דרכים לקבל את המיקום שלך:
            </strong>
            <ul className="mb-0">
              <li>פתח גוגל מפות בטלפון → שתף מיקום → העתק קישור</li>
              <li>בוויז: לחץ על הבית → שתף → העתק קישור</li>
              <li>כתוב כתובת מלאה: "רחוב 123, עיר"</li>
              <li>בגוגל: חפש את הכתובת שלך → העתק הקואורדינטות</li>
            </ul>
          </div>
        </div>

        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <label className="form-label">בני המשפחה *</label>
            <button
              type="button"
              onClick={addFamilyMember}
              className="btn btn-success btn-sm d-flex align-items-center gap-2"
            >
              <UserPlus size={16} />
              הוסף בן משפחה
            </button>
          </div>

          {formData.members.map((member, index) => (
            <MemberFormItem
              key={member.id}
              member={member}
              index={index}
              membersTotal={formData.members.length}
              removeFamilyMember={removeFamilyMember}
              handleMemberChange={handleMemberChange}
            />
          ))}
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-success w-100">
            שלח טופס משפחה
          </button>
        </div>
      </form>
    </div>
  );
}
