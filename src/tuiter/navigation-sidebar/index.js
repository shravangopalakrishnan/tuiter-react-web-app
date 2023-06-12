import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiFillHome } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import { FaBell, FaList, FaUserAlt, FaEllipsisH } from "react-icons/fa";
import { BsEnvelopeFill, BsBookmarkFill } from "react-icons/bs";
import { GrLogin } from "react-icons/gr";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const [ignore, tuiter, active] = pathname.split("/");
  const { currentUser } = useSelector((state) => state.user);
  const links = [
    { to: "/tuiter/home", label: "Home", icon: AiFillHome },
    { to: "/tuiter/explore", label: "Explore", icon: FaHashtag },
    { to: "/tuiter/notifications", label: "Notifications", icon: FaBell },
    { to: "/tuiter/messages", label: "Messages", icon: BsEnvelopeFill },
    { to: "/tuiter/bookmarks", label: "Bookmarks", icon: BsBookmarkFill },
    { to: "/tuiter/lists", label: "Lists", icon: FaList },
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
          <span className="d-none d-xl-inline">
          {link.label}
          </span>
        </Link>
      ))}  
      {!currentUser && (
        <>
          <Link className="list-group-item" to="/tuiter/login">
            <GrLogin className="me-2" />
            <span className="d-none d-xl-inline">
            Login
            </span>
          </Link>
          <Link className="list-group-item" to="/tuiter/register">
            <FaUserAlt className="me-2" />
            <span className="d-none d-xl-inline">
            Register
            </span>
          </Link>
        </>
      )}
      {currentUser && (
        <Link className="list-group-item" to="/tuiter/profile">
          <FaUserAlt className="me-2" />
          <span className="d-none d-xl-inline">
          Profile
          </span>
        </Link>
      )}
    </div>
  );
};

export default NavigationSidebar;
