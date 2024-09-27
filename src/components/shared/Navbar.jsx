import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import userImg from "../../assets/user.png";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { GrMenu } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";

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
  const { user, logOut } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  // console.log(user);
  const navlinks = (
    <>
      <li className="py-2 px-4 bg-pink-700 text-white">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="py-2 px-4 bg-pink-700 text-white">
        <NavLink to="/addproduct">Add Product</NavLink>
      </li>
      <li className="py-2 px-4 bg-pink-700 text-white">
        <NavLink to="/aboutUs">About Us</NavLink>
      </li>
      <li className="py-2 px-4 bg-pink-700 text-white">
        <NavLink to="/mycart">My Cart</NavLink>
      </li>
    </>
  );

  const SignOut = () => {
    logOut().then().catch();
  };
  return (
    <HideOnScroll>
      <div>
        <nav className="flex relative justify-between gap-6 items-center h-16 px-4 mx-auto  bg-white shadow-md">
          <div className="flex gap-4 items-center">
            <button className="text-2xl md:hidden" onClick={toggleMenu}>
              {!openMenu ? <GrMenu /> : <RxCross2/>}
            </button>
            <Link to="/">
              <img
                alt="Tech Radar"
                className="h-10 w-10"
                src="https://res.cloudinary.com/dskj2w40u/image/upload/v1684637311/TechRadar_logo_x8k7a2.png"
              />
            </Link>
          </div>
          <div>
            <ul className="hidden md:flex gap-6">{navlinks}</ul>
          </div>
          {openMenu && (
            <div className="flex flex-col gap-4 absolute left-0 top-16 p-6 z-20 bg-base-300 w-full ">
              <ul className="mx-auto text-center">
                <li className="space-y-4">{navlinks}</li>
              </ul>
            </div>
          )}
          {user ? (
            <div className="relative">
              <div className="w-10 rounded-full" onClick={toggleDropdown}>
                <img
                  alt="user photo"
                  src={user.photoURL ? user.photoURL : userImg}
                  className="cursor-pointer rounded-full"
                />
              </div>
              {dropdownOpen && (
                <ul className="absolute bg-white rounded-lg shadow-lg px-4 py-2 right-0 mt-2 space-y-3">
                  <li className="">{user.email}</li>
                  <li>
                    <a
                      className="text-[16px] cursor-pointer rounded-lg py-1 hover:my-1 hover:px-6 hover:shadow-md hover:bg-pink-700 hover:text-white"
                      onClick={SignOut}
                    >
                      Log out
                    </a>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <Link to="/login">
              <button className="px-6 py-2 shadow-md bg-pink-700 text-white rounded-md">
                Sign In
              </button>
            </Link>
          )}
        </nav>
      </div>
    </HideOnScroll>
  );
};

export default Navbar;
