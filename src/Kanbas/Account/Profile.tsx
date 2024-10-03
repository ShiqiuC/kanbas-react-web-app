import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1 className="text-start mb-4">Profile</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-md-30">
          <div className="form-group mb-3">
            <input
              id="wd-username"
              className="form-control"
              value="alice"
              placeholder="Username"
            />
          </div>
          <div className="form-group mb-3">
            <input
              id="wd-password"
              className="form-control"
              value="123"
              placeholder="Password"
              type="password"
            />
          </div>
          <div className="form-group mb-3">
            <input
              id="wd-firstname"
              className="form-control"
              value="Alice"
              placeholder="First Name"
            />
          </div>
          <div className="form-group mb-3">
            <input
              id="wd-lastname"
              className="form-control"
              value="Wonderland"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group mb-3">
            <input
              id="wd-dob"
              className="form-control"
              value="2000-01-01"
              type="date"
              placeholder="Date of Birth"
            />
          </div>
          <div className="form-group mb-3">
            <input
              id="wd-email"
              className="form-control"
              value="alice@wonderland.com"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group mb-4">
            <select id="wd-role" className="form-control">
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </select>
          </div>
          <div className="text-end">
            <Link to="/Kanbas/Account/Signin">
              <button className="btn btn-danger w-100">Signout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
