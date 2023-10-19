import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import { useState, useEffect } from "react";

function CourseNavigation({ updateActivePageName }) {
  const links = ["Home", "Modules", "Assignments", "Grades"];
  const { courseId } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    // Logic to determine the active page name based on the pathname
    for (const link of links) {
      if (pathname.includes(link)) {
        updateActivePageName(link); // Call the function to update activePageName in Courses
        break; // Stop searching when a match is found
      }
    }
  }, [pathname]);

  return (
    <div className="csnav-i">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/kanbas/Courses/${courseId}/${link}`}
          className={`csnav-i ${pathname.includes(link) && "active"}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;