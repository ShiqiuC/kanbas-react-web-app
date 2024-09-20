import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          {" "}
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/cloud.jpg" width={200} />
            <div>
              <h5>CS1235 Cloud Computing</h5>
              <p className="wd-dashboard-course-title">Cloud</p>
              <button> Go </button>
            </div>
          </Link>{" "}
        </div>
        <div className="wd-dashboard-course">
          {" "}
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/database.jpg" width={200} />
            <div>
              <h5>CS1236 Database</h5>
              <p className="wd-dashboard-course-title">Database Study</p>
              <button> Go </button>
            </div>
          </Link>{" "}
        </div>
        <div className="wd-dashboard-course">
          {" "}
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/java.jpg" width={200} />
            <div>
              <h5>CS1237 Java</h5>
              <p className="wd-dashboard-course-title">Java study</p>
              <button> Go </button>
            </div>
          </Link>{" "}
        </div>
        <div className="wd-dashboard-course">
          {" "}
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/math.jpg" width={200} />
            <div>
              <h5>CS1238 Discrete Math</h5>
              <p className="wd-dashboard-course-title">Discrete Math Study</p>
              <button> Go </button>
            </div>
          </Link>{" "}
        </div>
        <div className="wd-dashboard-course">
          {" "}
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/network.jpg" width={200} />
            <div>
              <h5>CS1239 Newtwork</h5>
              <p className="wd-dashboard-course-title">Network Study</p>
              <button> Go </button>
            </div>
          </Link>{" "}
        </div>
        <div className="wd-dashboard-course">
          {" "}
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>CS1240 Python</h5>
              <p className="wd-dashboard-course-title">Python Study</p>
              <button> Go </button>
            </div>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}
