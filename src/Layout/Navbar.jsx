import { useEffect, useRef, useState } from "react";
import {NavLink } from "react-router-dom";

const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  const HoverEffect = (
    <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
  );

  const desktopCSS = "group flex  cursor-pointer flex-col";

  const desktopMenu = (
    <>
      <li className={desktopCSS}>
        <NavLink
          to={`/`}
          className={({ isActive, isPending }) =>
            isActive ? `text-sky-500 ${desktopCSS}` : isPending ? desktopCSS : desktopCSS
          }
        >
          Home
        </NavLink>
        {HoverEffect}

      </li>
      <li className={desktopCSS}>
      <NavLink
          to={`/shop`}
          className={({ isActive, isPending }) =>
            isActive ? `text-sky-500 ${desktopCSS}` : isPending ? desktopCSS : desktopCSS
          }
        >
          Shop
        </NavLink>
        {HoverEffect}
      </li>
      <li className={desktopCSS}>
      <NavLink
          to={`/about`}
          className={({ isActive, isPending }) =>
            isActive ? `text-sky-500 ${desktopCSS}` : isPending ? desktopCSS : desktopCSS
          }
        >
          About
        </NavLink>
        {HoverEffect}
      </li>

      <li className={desktopCSS}>
      <NavLink
          to={`/signin`}
          className={({ isActive, isPending }) =>
            isActive ? `text-sky-500 ${desktopCSS}` : isPending ? desktopCSS : desktopCSS
          }
        >
          Login
        </NavLink>
        {HoverEffect}
      </li>
    </>
  );

  const mobileCSS =
    "cursor-pointer  px-4 my-2 text-white border-b-2 border-transparent rounded-t-lg hover:border-sky-600 ";

  const mobileMenu = (
    <>
      <li className={mobileCSS}>
      <NavLink
          to={`/`}
          className={({ isActive, isPending }) =>
            isActive ? `text-sky-300` : isPending ? "" : "" 
          }
        >
          Home
        </NavLink>
      </li>
      <li className={mobileCSS}>
      <NavLink
          to={`/shop`}
          className={({ isActive, isPending }) =>
            isActive ? `text-sky-300` : isPending ? "" : "" 
          }
        >
          Shop
        </NavLink>
      </li>
      <li className={mobileCSS}>
      <NavLink
          to={`/about`}
          className={({ isActive, isPending }) =>
            isActive ? `text-sky-300` : isPending ? "" : "" 
          }
        >
          About
        </NavLink>
      </li>

      <li className={mobileCSS}>
      <NavLink
          to={`/signin`}
          className={({ isActive, isPending }) =>
            isActive ? `text-sky-300` : isPending ? "" : "" 
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white">
      <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
        <h2>MobileDokan</h2>
      </div>
      <ul className="hidden items-center justify-between gap-10 md:flex">
        {desktopMenu}
      </ul>
      <div
        ref={dropDownMenuRef}
        onClick={() => setDropDownState(!dropDownState)}
        className="relative flex transition-transform md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="cursor-pointer"
        >
          {" "}
          <line x1="4" x2="20" y1="12" y2="12" />{" "}
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />{" "}
        </svg>
        {dropDownState && (
          <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
            {mobileMenu}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
