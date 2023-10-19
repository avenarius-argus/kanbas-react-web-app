import { Link } from "react-router-dom";
import db from "../Database";
import KanbasNavigation from "../KanbasNavigation";
import {FaEdit} from "react-icons/fa";
import "./index.css"
function Dashboard() {
  const courses = db.courses;
  return (
    <div>
    <div class="div-container">

<div class="side-by-side">
            <div class="row">
                <h1>Dashboard</h1>
            </div>
            <hr/>
            
            <div class="row">
                <h2>Published Courses ({courses.length})</h2>
            </div>

            <div class="row flex-row flex-wrap">
              {courses.map((course) => (
                <div class="card card-width card-margin">
                <div class="card-img-top" style={{ backgroundColor: 'blue', height: '150px' }}></div>

                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} 
                                className="card">

                                  <h5 class="card-title"><a href="#" class="card-link">{course.name}</a></h5>
                                  </Link>
                        <div class="card-text">
                 
                     
                        <p className="card-subtitle mb-2 text-body-secondary">{course.number}</p>
                        <p className="card-text">{course.startDate} - {course.endDate}</p>
                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} 
                                className="card">
                        <FaEdit/>
                                </Link>
                        </div>
                        <a href="#"><i class="BiEdit"></i></a>
                </div>
                
                ))}
              </div>
          </div>
        </div>
    </div>
  );
}
export default Dashboard;