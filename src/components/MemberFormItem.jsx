import { User, X } from "lucide-react";

const MemberFormItem = ({
  member,
  index,
  membersTotal,
  removeFamilyMember,
  handleMemberChange,
}) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex align-items-center gap-2">
            <User size={20} />
            <span className="fw-medium">בן משפחה {index + 1}</span>
          </div>
          {membersTotal > 1 && (
            <button
              type="button"
              onClick={() => removeFamilyMember(index)}
              className="btn btn-link text-danger p-0"
            >
              <X size={16} />
            </button>
          )}
        </div>
        <div className="row g-3">
          <div className="col-md-4">
            <input
              type="text"
              value={member.role}
              onChange={(e) =>
                handleMemberChange(index, "role", e.target.value)
              }
              className="form-control"
              placeholder="תפקיד (אב/אם/ילד)"
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              value={member.name}
              onChange={(e) =>
                handleMemberChange(index, "name", e.target.value)
              }
              className="form-control"
              placeholder="שם פרטי"
            />
          </div>
          <div className="col-md-4">
            <input
              type="tel"
              value={member.phone}
              onChange={(e) =>
                handleMemberChange(index, "phone", e.target.value)
              }
              className="form-control"
              placeholder="טלפון"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberFormItem;
