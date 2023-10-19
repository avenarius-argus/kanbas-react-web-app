import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { FaCheckCircle } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import "../../../style.css"
import "bootstrap/dist/css/bootstrap.min.css"
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
                <div class="container">

<div class="row">
    <div class="col">

        
        <div class="float-end pb-3">
            
        <FaCheckCircle style={{ color: "green " }} />
            <span class="grn me-3"> Published</span>


            
            <button type="button" class="btn btn-outline-secondary btn-sm">
                <FaEllipsisV/>
            </button>
        </div>
        <hr style={{ clear: "both" }} />

    </div>
</div>
      Assignment Name
      <input value={assignment.title}
             className="form-control mb-2" />
             <hr/>
            <div class="row">
                <div class="col">
                    <div class="float-end">
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-secondary me-2">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-danger ">
        Save
      </button>
      </div>
      </div>
      </div>
        <hr/>
      </div>
    </div>
  );
}


export default AssignmentEditor;