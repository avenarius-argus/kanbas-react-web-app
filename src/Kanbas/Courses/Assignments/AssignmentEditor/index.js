import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { FaCheckCircle } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import "../../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";

import {
  addAssignment,
  updateAssignment,
  setAssignment,
} from "../assignmentsReducer";
function AssignmentEditor() {
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();

  const { courseId } = useParams();

  const { assignmentId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    if (assignmentId === "newAssignment") {
      dispatch(addAssignment({ ...assignment, course: courseId }));
    } else {
      dispatch(updateAssignment(assignment));
    }
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
                <FaEllipsisV />
              </button>
            </div>
            <hr />
          </div>
        </div>
        Assignment Name
        <input
          value={assignment.title}
          className="form-control mb-2"
          onChange={(e) =>
            dispatch(setAssignment({ ...assignment, title: e.target.value }))
          }
        />
        <hr />
        <div class="row">
          <div class="col">
            Assignment Description
            <textarea
              value={assignment.description}
              className="form-control mb-2"
              onChange={(e) =>
                dispatch(
                  setAssignment({ ...assignment, description: e.target.value })
                )
              }
            />
            Due Date
            <input
              className="form-control"
              type="date"
              value={assignment.dueDate}
              onChange={(e) =>
                dispatch(
                  setAssignment({
                    ...assignment,
                    dueDate: e.target.value,
                  })
                )
              }
            />
            Available From Date
            <input
              className="form-control"
              type="date"
              value={assignment.availableFromDate}
              onChange={(e) =>
                dispatch(
                  setAssignment({
                    ...assignment,
                    availableFromDate: e.target.value,
                  })
                )
              }
            />
          </div>
          <hr />
          Until
          <input
            className="form-control"
            type="date"
            value={assignment.availableUntilDate}
            onChange={(e) =>
              dispatch(
                setAssignment({
                  ...assignment,
                  availableUntilDate: e.target.value,
                })
              )
            }
          />
          <hr />
          <div class="float-end">
            <Link
              to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-outline-secondary me-2"
            >
              Cancel
            </Link>
            <button onClick={() => handleSave()} className="btn btn-danger">
              Save
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default AssignmentEditor;
