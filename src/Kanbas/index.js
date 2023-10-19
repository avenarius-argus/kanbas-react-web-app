import {Link, Route, Routes, Navigate} from "react-router-dom";



import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";

import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div>
        <Routes>
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />         
          <Route path="Courses/:courseId/*" element={<Courses />} />


        <Route path="/Kanbas/Inbox" element={ <h1>Inbox</h1>}/>
        <Route path="/Kanbas/History" element={ <h1>History</h1>}/>
        <Route path="/Kanbas/Studio" element={ <h1>Studio</h1>}/>
        <Route path="/Kanbas/Commons" element={ <h1>Commons</h1>}/>
        <Route path="/Kanbas/Help" element={ <h1>Help</h1>}/>
        
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;