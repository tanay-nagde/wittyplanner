import React, { useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/loogoo.png";
import { gsap } from "gsap";

const NavBar = () => {
  const { loginWithRedirect } = useAuth0();
  const navRef = useRef(null);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: "-100%",
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  function onClick() {
    loginWithRedirect();
  }

  return (
    <nav
      ref={navRef}
      className="h-12 bg-[#dbeafe] text-black flex justify-between px-14 items-center"
    >
      <div className="flex text-2xl font-bold items-center">
        <img className="h-11 w-11" src={logo} alt="Logo" />
        <p>WittyPlanner</p>
      </div>
      <ul className="flex justify-evenly items-center gap-10 text-xl w-[30rem]">
        <li className="my-2 hover:font-bold">
          <Link to="/">Home</Link>
        </li>
        <li className="my-2 hover:font-bold">
          <Link to="/blogs">Blogs</Link>
        </li>
        <li className="my-2 hover:font-bold">
          <button onClick={onClick}>Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
