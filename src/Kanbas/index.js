import {Link, Route, Routes, Navigate} from "react-router-dom";



import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import db from "./Database";
import { useState } from "react";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>

    <div className="d-flex">
      <KanbasNavigation />
      <div className="flex-grow-1">
        <Routes>
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={
            <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
          } />
          <Route path="Courses/:courseId/*" element={
            <Courses courses={courses} />} />



        <Route path="/Kanbas/Inbox" element={ <h1>Inbox</h1>}/>
        <Route path="/Kanbas/History" element={ <h1>History</h1>}/>
        <Route path="/Kanbas/Studio" element={ <h1>Studio</h1>}/>
        <Route path="/Kanbas/Commons" element={ <h1>Commons</h1>}/>
        <Route path="/Kanbas/Help" element={ <h1>Help</h1>}/>
        
        </Routes>
      </div>
    </div>
    </Provider>

  );
}
export default Kanbas;