import React, { useState } from "react";
import Header from "./Header";
import { RiSearchLine } from "react-icons/ri";
import { TbBell } from "react-icons/tb";
import Avatar from "../images/avatar.png";
import Login from "../pages/Login";
import { Link, useNavigate } from "react-router-dom";
import Menu from "../images/Featured-icon.svg";
import Logo from "../images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { logout, navClick } from "../redux/UtilSlice";
import SearchModel from "./SearchModel";
import ProfileModel from "./ProfileModel";
import useAuth from "../Hooks/useAuth";

const Navbar = ({ Headervalue, textValue }) => {
  let users = JSON.parse(localStorage.getItem("details"));

  const [openLogin, setOpenLogin] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const open = useSelector((state) => state.Util.navOpen);
  const { user_id } = useAuth();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    setOpenSearch(!openSearch);
  };

  const handleProfile = () => {
    setOpenProfile(!openProfile);
  };

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleLogout = () => {
    dispatch(logout());
    window.location.reload(true);
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-between bg-[#121212] z-[999] md:relative fixed px-4 md:px-0 top-0 py-3 md:py-0 w-[100%] md:w-auto left-0 items-center">
        <div className="hidden md:block">
          <Header
            headerClass={"text-white text-[20px] lg:text-[23px] font-semibold "}
            value={Headervalue}
            text={textValue}
          />
        </div>

        <div className="flex items-center md:hidden">
          <img
            onClick={() => dispatch(navClick(!open))}
            className="size-10 cursor-pointer mr-3"
            src={Menu}
            alt=""
          />

          <img className="w-[80px]" src={Logo} alt="" />
        </div>

        <div className="flex lg:justify-between justify-end md:w-[360px] lg:w-fit items-center gap-x-4">
          <div
            onClick={handleSearch}
            className={`bg-[#0A0A0A] ${
              !user_id && "hidden"
            } p-2 md:py-3 md:px-4 rounded-full md:rounded-lg md:w-[40%] lg:w-[45%] md:flex`}
          >
            <RiSearchLine className="text-[#DADADA] size-8 md:size-6" />
            <input
              className="bg-transparent pl-4 w-full hidden md:block placeholder-[#00CCCB] text-[14px] text-[#00CCCB]"
              type="search"
              name=""
              id=""
              placeholder="Search for Escort"
            />
          </div>
          {user_id && (
            <button className="bg-[#E9CB50] hidden lg:block text-[#171717] font-medium rounded-xl py-3 px-4">
              See Coins
            </button>
          )}
          <div className="bg-[#0A0A0A] hidden lg:block cursor-pointer p-3 rounded-full">
            <TbBell className=" text-[#DADADA] size-7" />
          </div>

          {user_id && (
            <div className="relative">
              <img
                onClick={handleProfile}
                className="size-[48px] object-cover rounded-full cursor-pointer"
                src={`https://room35backend.onrender.com${
                  users?.image ?? users?.user?.image
                }`}
                alt=""
              />
              <div
                className={`absolute ${
                  openProfile ? "translate-y-0" : "-translate-y-[100vh]"
                } duration-700 top-14 bg-[#0A0A0A] w-[140px] h-[140px] text-[#FFF5F5] flex flex-col justify-between text-[15px] right-0 rounded-xl py-3 px-3`}
              >
                <Link
                  to={"/profile"}
                  className="cursor-pointer hover:text-[#E9CB50] duration-300"
                >
                  Profile
                </Link>
                {users?.user_type == "client" && (
                  <p
                    onClick={handleMenu}
                    className="cursor-pointer hover:text-[#E9CB50] duration-300"
                  >
                    Profile Menu
                  </p>
                )}
                <p className="cursor-pointer hover:text-[#E9CB50] duration-300">
                  Switch Account
                </p>
                <p
                  onClick={handleLogout}
                  className="cursor-pointer hover:text-[#E9CB50] duration-300"
                >
                  Logout
                </p>
              </div>
            </div>
          )}

          {!user_id && (
            <div className="flex ">
              <Link
                to={"/signup"}
                className="bg-[#1B1717] text-center block text-white font-medium h-[40px] md:h-auto rounded-xl py-3 w-[90px] mr-3"
              >
                Sign Up
              </Link>
              <button
                onClick={() => setOpenLogin(!openLogin)}
                className="bg-[#E9CB50] text-[#171717] font-medium rounded-xl w-[70px] h-[40px] md:h-auto md:py-3 md:w-[90px]"
              >
                Login
              </button>
            </div>
          )}
        </div>

        <Login
          loginClass={`${!openLogin ? "translate-x-[120vw]" : "translate-x-0"}`}
          loginControl={setOpenLogin}
        />
      </div>
      {/* <SearchModel
        SearchClass={`${!openSearch ? "translate-x-[120vw]" : "translate-x-0"}`}
        handleSearch={handleSearch}
      /> */}
      <ProfileModel
        handleMenu={handleMenu}
        menuClass={`${!openMenu ? "translate-x-[120vw]" : "translate-x-0"}`}
      />
    </>
  );
};

export default Navbar;
