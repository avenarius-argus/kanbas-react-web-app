import { Link } from "react-router-dom";
import { React, useState } from "react";

import db from "../Database";
import KanbasNavigation from "../KanbasNavigation";
import { FaEdit } from "react-icons/fa";
import "./index.css";
function Dashboard() {
  const [courses, setCourses] = useState(db.courses);

  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });
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

  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime() }]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  return (
    <div>
      <div class="div-container">
        <div class="side-by-side">
          <div class="row">
            <h1>Dashboard</h1>
          </div>
          <h5>Course</h5>
          <input
            value={course.name}
            className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course.number}
            className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <input
            value={course.startDate}
            className="form-control"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
          <input
            value={course.endDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
          <button className="btn btn-secondary mb-2" onClick={addNewCourse}>Add</button>
          <button className="btn btn-secondary mb-2" onClick={updateCourse}>Update</button>

          <div class="row">
            <h2>Published Courses ({courses.length})</h2>
          </div>

          <div class="row flex-row flex-wrap">
            {courses.map((course) => (
              <div class="card card-width card-margin">
                <div
                  class="card-img-top"
                  style={{ backgroundColor: "blue", height: "150px" }}
                ></div>

                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="card"
                >
                  <h5 class="card-title">
                      {course.name}
                  </h5>
                </Link>
                <div class="card-text">
                  <p className="card-subtitle mb-2 text-body-secondary">
                    {course.number}
                  </p>
                  <p className="card-text">
                    {course.startDate} - {course.endDate}
                  </p>
                  <Link
                    key={course._id}
                    to={`/Kanbas/Courses/${course._id}`}
                    className="card"
                  >
                    <button
                      className="btn btn-secondary mb-2"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                    >
                      <FaEdit />
                      Edit
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                    >
                      <span className="hilnk">Delete</span>
                    </button>
                  </Link>
                </div>
                <a href="#">
                  <i class="BiEdit"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
