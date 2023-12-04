import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaUser, FaTachometerAlt, FaBook, FaCalendarAlt, FaInbox, FaHistory, FaPalette, FaUsers, FaQuestionCircle } from 'react-icons/fa';
import './index.css'
import { TbLogin2 } from "react-icons/tb";

function KanbasNavigation() 
{
    const links = ["Account", "Dashboard", "Courses", "Calendar","Inbox","History","Studio","Commons","Help","Signin"];
    const { pathname } = useLocation();

    const getIcon = (link) => {
        switch (link) {
          case "Account":
            return <FaUser />;
          case "Dashboard":
            return <FaTachometerAlt />;
          case "Courses":
            return <FaBook />;
          case "Calendar":
            return <FaCalendarAlt />;
          case "Inbox":
            return <FaInbox />;
          case "History":
            return <FaHistory />;
          case "Studio":
            return <FaPalette />;
          case "Commons":
            return <FaUsers />;
          case "Help":
            return <FaQuestionCircle />;
          case "Signin":
            return <TbLogin2 />;
          default:
            return null;
        }
      };
    
      return (
        <ul className="kbnav-ul">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={`/Kanbas/${link}`}
              className={`kbnav-user list-group-item ${pathname.includes(link) ? "kbnav-active" : ""}`}
            >
              {getIcon(link)}
              {link}
            </Link>
          </li>
        ))}
      </ul>

      );
    }
    
    export default KanbasNavigation;