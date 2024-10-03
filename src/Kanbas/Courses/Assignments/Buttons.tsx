import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function SearchAndButtons() {
  return (
    <div id="wd-search-and-buttons" className="d-flex align-items-center mb-3">
      <div className="position-relative me-4" style={{ maxWidth: "300px" }}>
        <CiSearch
          className="search-icon"
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "18px",
            color: "#6c757d",
          }}
        />
        <input
          type="text"
          id="wd-search-input"
          className="form-control"
          placeholder="Search..."
          style={{ paddingLeft: "35px" }}
        />
      </div>

      <div className="d-flex ms-auto">
        <button
          id="wd-add-group-btn"
          className="btn btn-outline-secondary me-2"
        >
          +Group
        </button>

        <button id="wd-add-assignment-btn" className="btn btn-danger">
          <FaPlus className="me-1" />
          Assignment
        </button>
      </div>
    </div>
  );
}
