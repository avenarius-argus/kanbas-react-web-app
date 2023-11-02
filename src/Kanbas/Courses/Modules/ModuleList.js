import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaCheckCircle } from "react-icons/fa";
import { FaEllipsisV, FaPlus, FaGripVertical } from "react-icons/fa";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div className="row pb-3">
      <div className="col">
        <ul className="list-group">
          <li className="list-group-item">
            Module name
            <input
              className="form-control"
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }
            />
            Module description
            <textarea
              className="form-control"
              value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              }
            />
            <button
              onClick={() =>
                dispatch(addModule({ ...module, course: courseId }))
              }
              className="btn btn-outline-secondary btn-sm me-1 "
            >
              Add
            </button>
            <button
              onClick={() => dispatch(updateModule(module))}
              className="btn btn-outline-secondary btn-sm me-1"
            >
              Update
            </button>
          </li>

          <div class="col">
            <div class="float-end pb-3">
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm me-1"
              >
                Collapse All
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm me-1"
              >
                View Progress
              </button>
              <span class="dropdown">
                <button
                  class="btn btn-outline-secondary dropdown-toggle btn-sm"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaCheckCircle style={{ color: "green" }} />
                  Publish All
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </span>
              <button
                onClick={() => {
                  addModule(module);
                }}
                type="button"
                class="btn btn-danger btn-sm"
              >
                <FaPlus />
                Module
              </button>
              <button type="button" class="btn btn-outline-secondary btn-sm">
                <FaEllipsisV />
              </button>
            </div>
            <hr style={{ clear: "both" }} />
          </div>

          {modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <>
                <li
                  key={index}
                  className="list-group-item-secondary list-group-item"
                >
                  <FaGripVertical />

                  {module.name}
                  <span class="float-end ">
                    <FaCheckCircle style={{ color: "green" }} />
                    <FaPlus /> <FaEllipsisV />
                  </span>
                  <button
                    className="float-end btn btn-outline-secondary btn-sm me-1"
                    onClick={() => dispatch(deleteModule(module._id))}
                  >
                    Delete
                  </button>
                  <button
                    className="float-end btn btn-outline-secondary btn-sm me-1"
                    onClick={() => dispatch(setModule(module))}
                  >
                    Edit
                  </button>
                </li>
                <li key={index} className="list-group-item list-group-item">
                  {module.description}
                </li>
              </>
            ))}
        </ul>
      </div>
    </div>
  );
}
export default ModuleList;
