import { BsGripVertical, BsPlusLg } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import Buttons from "./Buttons";
import { RiFileEditFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import "./styles.css";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function Assignments() {
  return (
    <div className="container mt-4">
      <div className="mb-4">
        <Buttons />
      </div>

      <div id="wd-assignments">
        <div className="d-flex justify-content-between align-items-center bg-light p-3 border rounded mb-3">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2" style={{ fontSize: "24px" }} />
            <FaAngleDown className="me-2" style={{ fontSize: "20px" }} />
            <h5 className="m-0">ASSIGNMENTS</h5>
          </div>
          <div className="d-flex align-items-center">
            <div className="px-3 py-1 border border-secondary rounded-pill me-2">
              40% of Total
            </div>
            <BsPlusLg className="fs-4 me-2" />
            <IoEllipsisVertical className="fs-4" />
          </div>
        </div>

        <div className="assignment-list border-start border-4 border-success ps-3">
          <div className="d-flex align-items-center justify-content-between border-bottom py-3 mb-2">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2" style={{ fontSize: "24px" }} />
              <RiFileEditFill
                className="me-3"
                style={{ color: "green", fontSize: "24px" }}
              />
              <div>
                <Link
                  to="/Kanbas/Courses/1234/Assignments/Editor"
                  className="text-decoration-none text-dark"
                >
                  <h6 className="m-0 fw-bold">A1</h6>
                </Link>
                <div className="text-muted">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <span>
                    <span className="fw-bold">Not available until</span> May 6
                    at 12:00am |
                  </span>
                </div>
                <div className="text-muted">
                  <span className="fw-bold">Due </span>May 13 at 11:59pm | 100
                  pts
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center ms-3">
              <GreenCheckmark />
              <IoEllipsisVertical style={{ fontSize: "24px" }} />
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between border-bottom py-3 mb-2">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2" style={{ fontSize: "24px" }} />
              <RiFileEditFill
                className="me-3"
                style={{ color: "green", fontSize: "24px" }}
              />
              <div>
                <Link
                  to="/Kanbas/Courses/1234/Assignments/Editor"
                  className="text-decoration-none text-dark"
                >
                  <h6 className="m-0 fw-bold">A2</h6>
                </Link>
                <div className="text-muted">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <span>
                    <span className="fw-bold">Not available until </span>May 6
                    at 12:00am |
                  </span>
                </div>
                <div className="text-muted">
                  <span className="fw-bold">Due </span>May 20 at 11:59pm | 100
                  pts
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center ms-3">
              <GreenCheckmark />
              <IoEllipsisVertical style={{ fontSize: "24px" }} />
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between border-bottom py-3 mb-2">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2" style={{ fontSize: "24px" }} />
              <RiFileEditFill
                className="me-3"
                style={{ color: "green", fontSize: "24px" }}
              />
              <div>
                <Link
                  to="/Kanbas/Courses/1234/Assignments/Editor"
                  className="text-decoration-none text-dark"
                >
                  <h6 className="m-0 fw-bold">A3</h6>
                </Link>
                <div className="text-muted">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <span className="fw-bold">Not available until </span>{" "}
                  <span>May 6 at 12:00am</span> |
                </div>
                <div className="text-muted">
                  <span className="fw-bold">Due </span>May 27 at 11:59pm | 100
                  pts
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center ms-3">
              <GreenCheckmark />
              <IoEllipsisVertical style={{ fontSize: "24px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
