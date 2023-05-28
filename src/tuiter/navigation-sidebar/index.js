import React from "react";
import { Link, useLocation } from "react-router-dom";
const NavigationSidebar = () => {
 const { pathname } = useLocation();
 const [ignore, tuiter, active] = pathname.split("/");
 const links = ["home",     "explore",   "notifications", "messages", "bookmarks", "lists", "profile",  "more"];
 return (
   <div className="list-group">
     {links.map((link) => 
         <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
           {link}
         </Link>
     )}
     <p className="text-white fs-6">{ignore}</p>
      <p className="text-white fs-6">{tuiter}</p>
   </div>
 );
};
export default NavigationSidebar;

