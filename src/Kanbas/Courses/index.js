import db from "../Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { useState } from "react";

import { FaGlasses } from "react-icons/fa";
import "../style.css";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";



function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const [activePageName, setActivePageName] = useState(""); // Initialize activePageName as a state variable
 
  const updateActivePageName = (name) => {
    setActivePageName(name);
  };

  return (

<div>
<div class="div-container">
  <div className="side-by-side" style={{ display: 'inline-block', verticalAlign: 'top' }}>
  <CourseNavigation updateActivePageName={updateActivePageName} />
  </div>
  <div className="side-by-side" style={{ width: '100em', display: 'inline-block', verticalAlign: 'top' }}>
    <div class="container-fluid side-by-side">
      <div class="float-end">
        <button type="button" class="btn btn-outline-secondary btn-sm">
          <FaGlasses />
          Student View
        </button>
      </div>
      <nav style={{ '--bs-breadcrumb-divider': 'var(--bs-breadcrumb-divider)' }} aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#" class="hlink">{course.name}</a></li>
          <li class="breadcrumb-item active" aria-current="page">{activePageName}</li>
        </ol>
      </nav>
      <hr />
    </div>
    <Routes>
      <Route path="/" element={<Navigate to="Home" />} />
      <Route path="Home" element={<Home />} />
      <Route path="Modules" element={<Modules />} />
      <Route path="Assignments" element={<Assignments />} />
      <Route path="Assignments/:assignmentId" 
                         element={<AssignmentEditor/>}/>
      <Route path="Grades" element={<Grades />} />
    </Routes>
  </div>
</div>
</div>
  );
}

export default Courses;