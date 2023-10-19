import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaCheckCircle } from "react-icons/fa";
import { FaEllipsisV, FaPlus,FaGripVertical } from 'react-icons/fa';

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group">
      <div class="col">
                    <div class="float-end pb-3">
                        <button type="button" class="btn btn-outline-secondary btn-sm me-1">Collapse All</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm me-1">View Progress</button>
                        <span class="dropdown">
                            <button class="btn btn-outline-secondary dropdown-toggle btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FaCheckCircle style={{ color: 'green' }}/>
                                Publish All
                            </button>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="#">Action</a></li>
                              <li><a class="dropdown-item" href="#">Another action</a></li>
                              <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </span>
                        <button type="button" class="btn btn-danger btn-sm">
                            <FaPlus />
                            Module</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm">
                          <FaEllipsisV />
                        </button>
                    </div>
                    <hr style={{ clear: "both" }} />
                </div>


      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
          
           <><li key={index} className="list-group-item-secondary list-group-item">
             <FaGripVertical />

             {module.name}
             <span class="float-end ">
               <FaCheckCircle style={{ color: 'green' }}/><FaPlus />    <FaEllipsisV />
             </span>
           </li><li key={index} className="list-group-item list-group-item">

               {module.description}
             </li>
             
             </>
      ))
      }
    </ul>
  );
}
export default ModuleList;