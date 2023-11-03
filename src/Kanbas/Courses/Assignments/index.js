import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {
  FaGlasses,
  FaPlus,
  FaEllipsisV,
  FaGripVertical,
  FaEdit,
  FaCheckCircle,
} from "react-icons/fa";
import "../../style.css";
import { deleteAssignment, setAssignment } from "./assignmentsReducer";
import { useSelector, useDispatch } from "react-redux";

function Assignments() {
  const { courseId } = useParams();
  const courseAssignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  ).filter((assignment) => assignment.course === courseId);
  const dispatch = useDispatch();
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col">
            <span>
              <input
                class="form-control float-start pe-5"
                style={{ width: "50%" }}
                type="text"
                placeholder="Search for Assignments"
              />
            </span>
            <div class="float-end pb-3">
              <button type="button" class="btn btn-outline-secondary btn-sm">
                <FaPlus />
                Group
              </button>
              <Link
                to={`/Kanbas/Courses/${courseId}/Assignments/newAssignment`}
                onClick={() => {
                  dispatch(setAssignment(false));
                }}
              >
                <button type="button" class="btn btn-danger btn-sm">
                  <FaPlus />
                  Assignment
                </button>
              </Link>
              <button type="button" class="btn btn-outline-secondary btn-sm">
                <FaEllipsisV />
              </button>
            </div>
            <hr style={{ clear: "both" }}></hr>
          </div>
        </div>

        <ul class="list-group ">
          <li class="list-group-item-secondary list-group-item">
            <FaGripVertical style={{ color: "grey ", fontSize: "1.5em" }} />
            Assignments
            <span class="float-end ">
              <span class="border-secondary border rounded-pill p-1 mb-1 ">
                40% of Total
              </span>
              <FaPlus style={{ color: "grey ", fontSize: "1.5em" }} />
              <FaEllipsisV style={{ color: "grey ", fontSize: "1.5em" }} />
            </span>
          </li>

          {assignments.map((assignment, index) => (
            <li class="list-group-item" key={index}>
              <div class="row">
                <span class="col pt-4">
                  <i class="fas fa-grip-vertical pe-2"></i>
                  <FaGripVertical
                    style={{ color: "grey ", fontSize: "1.5em" }}
                  />
                  <i class="fas fa-edit grn "></i>
                  <FaEdit style={{ color: "green ", fontSize: "1.5em" }} />
                </span>

                <div class="col-10">
                  <Link
                    key={assignment._id}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    class="hlink text-dark"
                    onClick={() => dispatch(setAssignment(assignment))}
                  >
                    <h5>{assignment.title}</h5>
                  </Link>

                  <p class="m-0 text-secondary">{assignment.description}</p>

                  <p class="m-0 pb-1 text-secondary">
                    Due {assignment.dueDate} at 11:59pm |availableFrom {assignment.availableFromDate} at 12:00am | Until {assignment.availableUntilDate} at 11:59pm
                  </p>
                </div>
                <div class="col pt-4">
                  <span class="float-end">
                    <button
                      type="button"
                      onClick={() => dispatch(deleteAssignment(assignment._id))}
                      class="btn btn-danger"
                    >
                      Delete
                    </button>

                    <FaCheckCircle
                      style={{ color: "green ", fontSize: "1.5em" }}
                    />

                    <FaEllipsisV
                      style={{ color: "grey ", fontSize: "1.5em" }}
                    />
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Assignments;
