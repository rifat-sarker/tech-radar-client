import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import userImg from "../../assets/user.png"
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const { user, logOut, } = useContext(AuthContext);



  // console.log(user);
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addproduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/mycart">My Cart</NavLink>
      </li>
    </>
  );

   

  const SignOut = () => {
    logOut().then().catch();
  };
  return (
    <HideOnScroll>
      <div
        id="navbar"
        className="navbar fixed  top-0 z-20 text-white  bg-slate-950 "
      >
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
              className="menu font-bold menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black  rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <img
            className="h-12 w-auto rounded-lg "
            src="https://i.ibb.co/ZNB0tPp/Tech-Radar-logo-RGB.png"
            alt="logo"
          />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu cursor-context-menu gap-2 font-bold menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="flex ml-4 gap-2 ">
          <input
            type="text"
            placeholder="Search"
            className="rounded text-black   mx-auto w-24 px-4 py-2 sm:w-auto"
          />
          <button   className="block mx-auto lg:mx-0 rounded text-white  bg-rose-500 px-6 py-[11px] text-sm font-medium  hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto ">
            Search
          </button>
        </div>
        <div className="navbar-end p-2">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="user photo" src={`${user.photoURL ? user.photoURL : userImg}`} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1]  text-[16px] font-bold  p-2  shadow-lg menu menu-sm dropdown-content bg-slate-950 rounded-box w-52"
                >
                  <li className=" rounded-lg py-1 my-1 shadow-lg px-2">{user.email}</li>
                  <li>
                    <a className="text-[16px] " onClick={SignOut}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link to="/login">
              <button className="font-bold">Login</button>
            </Link>
          )}
        </div>
      </div>
    </HideOnScroll>
  );
};

export default Navbar;
