import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Users, Plus } from "lucide-react";
import { getDocs, collection } from "firebase/firestore"; // Import addDoc and collection
import db from "../firebaseConfig";

import FamilyItem from "../components/FamilyItem";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const [families, setFamilies] = useState([]);
  const [filteredFamilies, setFilteredFamilies] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const ADMIN_PASSWORD = "1234";

  // Fetch families from Firestore on component mount
  useEffect(() => {
    const fetchFamilies = async () => {
      const familiesCollection = collection(db, "families");
      const familiesSnapshot = await getDocs(familiesCollection);
      const familiesData = familiesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFamilies(familiesData);
      setFilteredFamilies(familiesData);
    };

    fetchFamilies();
  }, []);

  const filter = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const result = families.filter((family) => {
      if ((family.familyName || "").toLowerCase().includes(searchTerm))
        return true;

      // Optionally include this line to also search in members' names:
      if (
        family.members.some((member) =>
          (member.name || "").toLowerCase().includes(searchTerm),
        )
      )
        return true;

      return false; // fallback if no match
    });
    setFilteredFamilies(result);
  };

  return (
    <div style={{ padding: "20px 0" }}>
      <div className="" style={{ padding: "10px 20px" }}>
        <div className="topbar">
          <h1 className="h3 mb-0">
            <Users className="me-3" size={32} />
            <span style={{ marginRight: "10px" }}>משפחות הישוב</span>
          </h1>
        </div>
        <div>
          <input
            type="text"
            className="form-control mb-3"
            onKeyUp={filter}
            style={{ margin: "10px" }}
            placeholder="חפש משפחה לפי שם"
          />
        </div>
        <div className="d-flex align-items-center gap-3">
          <Link
            to={"/form"}
            className="btn btn-primary d-flex align-items-center gap-2"
            style={{ margin: "10px 0" }}
          >
            <Plus size={20} />
            הוסף משפחה חדשה
          </Link>
        </div>
      </div>
      <div className="rows">
        {filteredFamilies.map((family) => (
          <FamilyItem key={family.id} data={family} isAdmin={isAdmin} />
        ))}
      </div>
    </div>
  );
}
