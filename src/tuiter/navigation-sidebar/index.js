import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import {FaHashtag} from "react-icons/fa";
import {FaBell, FaList,  FaUserAlt, FaEllipsisH} from "react-icons/fa";
import  {BsEnvelopeFill,BsBookmarkFill} from "react-icons/bs";




const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const [ignore, tuiter, active] = pathname.split("/");
  const links = [
    { to: "/tuiter/home", label: "Home", icon: AiFillHome },
    { to: "/tuiter/explore", label: "Explore", icon: FaHashtag },
    { to: "/tuiter/notifications", label: "Notifications", icon: FaBell },
    { to: "/tuiter/messages", label: "Messages", icon: BsEnvelopeFill },
    { to: "/tuiter/bookmarks", label: "Bookmarks", icon: BsBookmarkFill },
    { to: "/tuiter/lists", label: "Lists", icon: FaList },
    { to: "/tuiter/profile", label: "Profile", icon: FaUserAlt },
    { to: "/tuiter/more", label: "More", icon: FaEllipsisH },
  ];

  return (
    <div className="list-group">
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.to}
          className={`list-group-item text-capitalize ${
            active === link.to.split("/")[2] ? "active" : ""
          }`}
        >
          {React.createElement(link.icon, { className: "me-2" })}
          {link.label}
        </Link>
      ))}
      <p className="text-white fs-6">{ignore}</p>
      <p className="text-white fs-6">{tuiter}</p>
    </div>
  );
};

export default NavigationSidebar;
