import React, { useContext, useEffect, useState } from "react";
import { FaFirefoxBrowser } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../FireBase/AuthProvider";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

function Navbar() {
  const { users, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const linkClass = ({ isActive }) => {
    if (isActive) {
      return `border-b-2 border-purple-600 font-semibold ${
        theme === "light" ? "text-black" : "text-white"
      }`;
    }
    return "hover:text-purple-800 dark:hover:text-purple-300 transition duration-200";
  };
  

  return (
    <div className={`navbar fixed top-0 left-0 z-50 w-full shadow-md px-4 md:px-10 py-3 transition-all duration-300 ${theme === "light" ? "bg-white text-purple-700" : "bg-black text-white"}`}>
      <div className="navbar-start">
        <Link className="text-xl font-bold flex items-center gap-2">
          <FaFirefoxBrowser className={`text-2xl ${theme === "light" ? "text-purple-700" : "text-white"}`} />
          <span className={theme === "light" ? "text-purple-700" : "text-white"}>PlanMake</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-6 items-center text-sm font-medium">
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/allCamp" className={linkClass}>All Campaign</NavLink></li>
          <li><NavLink to="/aboutus" className={linkClass}>About us</NavLink></li>
          <li><NavLink to="/contactus" className={linkClass}>Contact us</NavLink></li>
          {users && (
            <>
              <li><NavLink to="/addNewCamp" className={linkClass}>Add Campaign</NavLink></li>
              <li><NavLink to={`/myCamp/${users?.email}`} className={linkClass}>My Campaign</NavLink></li>
              <li><NavLink to={`/myDonation/${users?.email}`} className={linkClass}>My Donations</NavLink></li>
            </>
          )}
        </ul>
      </div>

      <div className="navbar-end gap-3">
        {/* Dark Mode Toggle */}
        <button onClick={changeTheme} className="btn btn-sm btn-ghost tooltip border border-purple-500" data-tip="Toggle Theme">
          {theme === "light"  ? <MdDarkMode />: <CiDark />
          }
        </button>

        {/* User Avatar & Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip" data-tip={users?.displayName}>
            <div className="w-10 rounded-full border">
              <img src={users?.photoURL || "/src/assets/noUser.png"} alt="user" />
            </div>
          </div>
          <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow rounded-box w-52 text-sm ${theme === "light" ? "bg-white text-purple-700" : "bg-black text-white"}`}>
            <li><div className="font-medium">{users?.displayName || "Guest"}</div></li>
            <li>
              {users ? (
                <button onClick={signOutUser} className="btn btn-sm mt-2 bg-red-500 text-white hover:bg-red-600">Logout</button>
              ) : (
                <div className="flex flex-col gap-2 mt-2">
                  <NavLink to="/login" className="btn btn-sm ">Log In</NavLink>
                  <NavLink to="/register" className="btn btn-sm">Register</NavLink>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Auth Buttons (for large screen) */}
        <div className="hidden lg:flex gap-2">
          {!users && (
            <>
              <NavLink to="/login" className="btn btn-sm border border-purple-600 text-black hover:bg-white">Log In</NavLink>
              <NavLink to="/register" className="btn btn-sm bg-purple-500 text-white hover:bg-purple-600">Register</NavLink>
            </>
          )}
        </div>

        {/* Mobile Nav */}
        <div className="dropdown lg:hidden relative">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul className={`menu dropdown-content absolute right-0 mt-3 z-[1] p-3 shadow rounded-box w-52 ${theme === "light" ? "bg-white text-purple-700" : "bg-black text-white"}`}>
            <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
            <li><NavLink to="/allCamp" className={linkClass}>All Campaign</NavLink></li>
            <li><NavLink to="/aboutus" className={linkClass}>About us</NavLink></li>
          <li><NavLink to="/contactus" className={linkClass}>Contact us</NavLink></li>
            {users && (
              <>
                <li><NavLink to="/addNewCamp" className={linkClass}>Add Campaign</NavLink></li>
                <li><NavLink to={`/myCamp/${users?.email}`} className={linkClass}>My Campaign</NavLink></li>
                <li><NavLink to={`/myDonation/${users?.email}`} className={linkClass}>My Donations</NavLink></li>
              </>
            )}
            <li><button onClick={changeTheme} className="btn btn-sm mt-2">Toggle Theme</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
