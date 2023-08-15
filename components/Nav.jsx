"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { languages, crafts, tools, countries } from "@constants/index";
import classNames from "classnames";

const DropDown = ({ element, toggleDropdown, dropdown, isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className={dropdown}>
          {element.map((e, index) => (
            <Link
              href="/"
              className="dropdown_link w-full outline_btn"
              key={index}
              onClick={toggleDropdown}
            >
              {e}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

const Nav = () => {
  const user = true;
  const [openDropdownIndex, setOpenDropdownIndex] = useState(0);

  const handleDropdownToggle = (index) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(-1);
    } else {
      setOpenDropdownIndex(index);
    }
  };

  const [navColor, setNavColor] = useState("#242424");
  const [textColor, setTextColor] = useState("#e6e6e7");
  const [scrolled, setScrolled] = useState(false);

  const listenScrollEvent = () => {
    // Change colors when scroll down
    // Check if scrolled
    const scrollThreshold = 10;
    window.scrollY > 10 ? setNavColor("#fff") : setNavColor("#242424");
    window.scrollY > 10 ? setTextColor("#242424") : setTextColor("#e6e6e7");
    setScrolled(window.scrollY > scrollThreshold);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <nav
      style={{
        backgroundColor: navColor,
        transition: "all 300ms",
      }}
      // only show shadow if scrolled down (white background)
      className={classNames(
        "sticky",
        scrolled ? "shadow-md" : "",
        "top-0 flex justify-between items-center w-full p-3 bg-transparent"
      )}
    >
      <div className="flex max-[400px]:w-[100%] w-[55%] xl:w-[60%] lg:w-[70%] justify-between">
        <div className="flex sm:w-[200px] w-[50px] ">
          <Link href="/" className="flex gap-2 justify-center items-center">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={50}
              height={50}
              className=" invert"
            />
            <p
              style={{ color: textColor }}
              className="max-sm:hidden font-semibold text-lg tracking-wide;"
            >
              Craftsmith
            </p>
          </Link>
        </div>
        <div className="sm:flex ml-5 max-[400px]:-ml-1 w-[80%] items-center  justify-between">
          <div className=" justify-between w-full flex items-center">
            <div className="hidden lg:flex  w-[60%]  justify-around items-center">
              <p
                style={{ color: textColor }}
                className="hidden  2xl:block max-sm:hidden font-semibold text-lg text-grayish tracking-wide;"
              >
                Browse by:
              </p>
              <div className="flex relative">
                <button
                  type="button"
                  onClick={() => handleDropdownToggle(1)}
                  className=" w-full black_btn"
                >
                  Crafts
                </button>
                <DropDown
                  dropdown={"dropdown"}
                  element={crafts}
                  isOpen={openDropdownIndex === 1}
                  toggleDropdown={() => handleDropdownToggle(1)}
                />
              </div>
              <div className="flex relative">
                <button
                  type="button"
                  onClick={() => handleDropdownToggle(2)}
                  className=" w-full black_btn"
                >
                  Tools
                </button>
                <DropDown
                  dropdown={"dropdown"}
                  element={tools}
                  isOpen={openDropdownIndex === 2}
                  toggleDropdown={() => handleDropdownToggle(2)}
                />
              </div>
              <div className="flex relative">
                <button
                  type="button"
                  onClick={() => handleDropdownToggle(3)}
                  className=" w-full black_btn"
                >
                  Countries
                </button>
                <DropDown
                  dropdown={"dropdown"}
                  element={countries}
                  isOpen={openDropdownIndex === 3}
                  toggleDropdown={() => handleDropdownToggle(3)}
                />
              </div>
            </div>
            <div className="  ml-2 flex lg:w-[50%] w-[100%] px-2 items-center bg-grayish rounded-lg">
              <input
                type="text"
                placeholder="search"
                className=" w-[100%] pl-4 p-2 -ml-2 focus:outline-none  text-black- border-none bg-transparent placeholder-black- "
              />
              <SearchIcon
                className="outline-btn hover:text-rose-500"
                color="action"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-[400px]:w-[65%] items-center justify-end">
        <div className="flex relative max-[400px]:-mr-[10px]">
          <LanguageIcon
            className="max-sm:hidden button-hover  mr-5 active:scale-[0.9] cursor-pointer text-black"
            onClick={() => handleDropdownToggle(4)}
            style={{ color: textColor }}
          />
          <DropDown
            dropdown={"dropdown"}
            element={languages}
            isOpen={openDropdownIndex === 4}
            toggleDropdown={() => handleDropdownToggle(4)}
          />
        </div>
        {user ? (
          <div className="flex gap-3 md:gap-5 items-center">
            {/* sm screen size */}
            <ArrowDropDownIcon
              className="sm:hidden text-3xl "
              style={{ color: textColor }}
              onClick={() => handleDropdownToggle(5)}
            />
            <div className="flex relative mt-10">
              {openDropdownIndex === 5 && (
                <div className="dropdown2">
                  <div className="flex relative flex-col max-[400px]:-mr-[10px]">
                    <div className="flex">
                      <LanguageIcon
                        className="button-hover mb-5 active:scale-[0.9] cursor-pointer text-black"
                        onClick={() => handleDropdownToggle(4)}
                      />
                      <p
                        className="font-extrabold hover:text-rose-500 ml-2 cursor-pointer"
                        onClick={() => handleDropdownToggle(4)}
                      >
                        Language
                      </p>
                      <DropDown
                        dropdown={"dropdown"}
                        element={languages}
                        isOpen={openDropdownIndex === 4}
                        toggleDropdown={() => handleDropdownToggle(4)}
                      />
                    </div>
                    <div className="flex">
                      <NotificationsIcon
                        className="button-hover cursor-pointer"
                      />
                      <p
                        className="font-extrabold hover:text-rose-500 cursor-pointer"
                      >
                        Notifications
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <NotificationsIcon
              className="max-sm:hidden button-hover cursor-pointer"
              style={{ color: textColor }}
            />
            <Image
              src={user.image || "/assets/default.jpg"}
              width={37}
              height={37}
              className="rounded-full cursor-pointer"
              alt="profile"
              onClick={() => handleDropdownToggle(6)}
            />
            <div className="flex relative mt-10">
              {openDropdownIndex === 6 && (
                <div className="dropdown1">
                  <Link
                    href="/"
                    className="w-full outline_btn"
                    onClick={() => handleDropdownToggle(6)}
                  >
                    My Profile
                  </Link>

                  <Link
                    href="/"
                    className="w-full black_btn"
                    onClick={() => handleDropdownToggle(6)}
                  >
                    Create Post
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDropdownToggle(6)}
                    className=" w-full black_btn"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <button
              type="button"
              className="button-hover mr-5 outline_btn"
              style={{ color: textColor }}
            >
              Log in
            </button>
            <button type="button" className="black_btn">
              Sign up
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
