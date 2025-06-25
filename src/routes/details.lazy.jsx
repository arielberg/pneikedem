import { useContext } from "react";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { FamilyContext } from "../contexts";
import {
  Phone,
  Users,
  User,
  ArrowLeft,
  MessageCircle,
  Navigation,
} from "lucide-react";
// feel free to change en-US / USD to your locale

export const Route = createLazyFileRoute("/details")({
  component: Details,
});

function Details() {
  const isAdmin = false;
  const [selectedFamily] = useContext(FamilyContext);

  const handleCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  const handleWhatsApp = (phoneNumber) => {
    const cleanPhone = phoneNumber.replace(/[-\s]/g, "");
    const internationalPhone = cleanPhone.startsWith("0")
      ? "972" + cleanPhone.substring(1)
      : cleanPhone;
    window.open(`https://wa.me/${internationalPhone}`, "_blank");
  };

  const handleNavigate = (wazeLocation) => {
    window.open(
      `https://waze.com/ul?q=${encodeURIComponent(wazeLocation)}`,
      "_blank",
    );
  };

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <div>
          <div>
            <header className="d-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0">משפחת {selectedFamily.familyName}</h1>
              <Link
                to={"/"}
                className="btn btn-link text-decoration-none d-flex align-items-center gap-2"
              >
                <ArrowLeft size={20} />
                חזור לרשימה
              </Link>
            </header>

            <section className="row g-4">
              <div className="col-12 text-center">
                <div className="card">
                  <div className="card-body">
                    <div
                      className="avatar-circle bg-primary text-white rounded-circle mx-auto mb-3"
                      style={{
                        padding: "15px 5px",
                        width: "80px",
                        height: "80px",
                        fontSize: "32px",
                      }}
                    >
                      <Users size={45} />
                    </div>
                    <h2 className="h4 mb-2">
                      משפחת {selectedFamily.familyName}
                    </h2>
                    <p className="text-muted">
                      נרשם: {selectedFamily.submittedAt}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="card">
                  <div className="card-body d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <Navigation size={24} />
                      <div>
                        <p className="fw-semibold mb-1">מיקום</p>
                        <p className="text-muted">
                          {selectedFamily.wazeLocation}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        handleNavigate(selectedFamily.wazeLocation)
                      }
                      className="btn btn-primary d-flex align-items-center gap-2"
                    >
                      <Navigation size={16} />
                      נווט
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <h3 className="h5 mb-3">בני המשפחה</h3>
                <div className="row row-cols-1 g-4">
                  {selectedFamily.members.map((member, index) => (
                    <div key={index} className="col">
                      <div className="card">
                        <div className="card-body d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-3">
                            <div
                              className="avatar-circle bg-primary-subtle text-primary rounded-circle"
                              style={{
                                padding: "4px 5px",
                                width: "40px",
                                height: "40px",
                                fontSize: "16px",
                              }}
                            >
                              <User size={30} />
                            </div>
                            <div>
                              <p className="fw-semibold mb-1">
                                {member.name || "ללא שם"}
                              </p>
                              <p className="text-muted small">{member.role}</p>
                              {member.phone && (
                                <p className="text-muted">{member.phone}</p>
                              )}
                            </div>
                          </div>
                        </div>
                        {member.phone && (
                          <div className="gap-2">
                            <button
                              onClick={() => handleWhatsApp(member.phone)}
                              className="btn btn-success"
                              style={{ width: "50%", borderRadius: "0 0 4px" }}
                            >
                              <MessageCircle size={16} />
                              <span style={{ marginRight: "5px" }}>ווטסאפ</span>
                            </button>
                            <button
                              onClick={() => handleCall(member.phone)}
                              className="btn btn-primary"
                              style={{
                                width: "50%",
                                borderRadius: "0 0 0 4px",
                              }}
                            >
                              <Phone size={16} />
                              <span style={{ marginRight: "5px" }}>התקשר</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
