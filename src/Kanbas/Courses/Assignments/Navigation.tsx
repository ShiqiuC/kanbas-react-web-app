import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Assignments from "./index";
import AssignmentEditor from "./Editor";

export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/assignments/editor" element={<AssignmentEditor />} />
      </Routes>
    </Router>
  );
}
