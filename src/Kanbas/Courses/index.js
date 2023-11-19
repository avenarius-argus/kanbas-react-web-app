
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaGlasses } from "react-icons/fa";
import "../style.css";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses() {

  const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000/api';
  const COURSES_URL = `${API_BASE}/courses`;
  const URL = COURSES_URL;

  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  const [activePageName, setActivePageName] = useState(""); // Initialize activePageName as a state variable

  const updateActivePageName = (name) => {
    setActivePageName(name);
  };
  return (

    <div class="div-container">
      <div >
      <CourseNavigation updateActivePageName={updateActivePageName} />
      </div>
        <div class="container-fluid ">
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
      );
    }
    
    export default Courses;