import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../App.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {


    const {user,setLoading} = useContext(AuthContext);

    const links1 = (
    <>
      <li>
        <NavLink to="/" className="btn btn-outline btn-sm btn-info">
          Product
        </NavLink>
      </li>

        <li>
          <NavLink to="/joinAsEmployee" className="btn btn-outline btn-sm btn-info ml-2">
            Features
          </NavLink>
        </li>
      
      
        <li>
          <NavLink to="/joinAsHR" className="btn btn-outline btn-sm btn-info ml-2">
            Pricing
          </NavLink>
        </li>
      

      
        <li>
          <NavLink to="/dashBoard" className="btn btn-outline btn-sm btn-info ml-2">
            DashBoard
          </NavLink>
        </li>

      
      <li>
        <NavLink to="/" className="btn btn-outline btn-sm btn-info ml-2">
          Resources
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar fixed top-0 z-20 backdrop-blur-lg border border-gray/30 px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links1}
          </ul>
        </div>
        {/* {userInfo?.email && (
          <div className="avatar">
            <div className="mask mask-hexagon w-8 lg:w-14">
              <img src={userInfo.companyLogo} />
            </div>
          </div>
        )} */}
        <Link
          to="/"
          className="btn btn-ghost text-lg text-[#1bc] font-xtrabold lg:text-xl"
        >
         Any Task
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links1}</ul>
      </div>
      <div className="navbar-end">
        <h1 className="mr-2 hidden text-xsm lg:text-md">{user?.email}</h1>
        {user?.email? (
          <NavLink onClick={userLogOut} className="btn btn-outline btn-sm btn-info">
            Logout
          </NavLink>
        ) : (
          <div>
            <NavLink to="/login" className="btn btn-outline btn-sm btn-info">
              Login
            </NavLink>
            <NavLink to='/register' className="btn btn-outline btn-sm btn-info ml-2">Register</NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
