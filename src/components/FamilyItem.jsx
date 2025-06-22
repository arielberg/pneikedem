import { useContext } from "react";
import { FamilyContext } from "../contexts";
import { useNavigate } from "@tanstack/react-router";

function FamilyItem({ data: family, isAdmin }) {
  const navigate = useNavigate();
  const [, setSelectedFamily] = useContext(FamilyContext);
  return (
    <div className="col">
      <div
        style={{
          backgroundColor: "#fff",
          borderBottom: "3px solid #aaa",
          margin: "0px 0px 10px",
          padding: "10px 19px",
        }}
      >
        <div
          onClick={() => {
            setSelectedFamily(family);
            navigate({ to: `/details` }); // Navigate to details page with family ID
          }}
        >
          <div>
            <h5 className="card-title mb-1">
              משפחת {family.familyName} (
              {family.members
                .filter((s) => s.role == "אב" || s.role == "אם")
                .map((s) => s.name)
                .join(",")}
              )
            </h5>
            <p className="card-text text-muted">
              {family.members.length} בני משפחה
            </p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-2">
          {isAdmin && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteFamily(family.id, family.familyName);
              }}
              className="btn btn-danger btn-sm"
              title="מחק משפחה"
            >
              <Trash2 size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default FamilyItem;
