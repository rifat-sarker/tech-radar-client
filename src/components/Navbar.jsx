import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addproduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to='/mycart'>My Cart</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-400 my-4">
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
            className="menu font-bold menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52"
          >
            {navlinks}
            
          </ul>
        </div>
        <img className="h-12 w-auto rounded-lg " src="https://i.ibb.co/ZNB0tPp/Tech-Radar-logo-RGB.png" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu  font-bold menu-horizontal px-1">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/login' className="btn">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
