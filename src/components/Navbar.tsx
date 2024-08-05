"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Logo from "../assets/Logo.png";
import MenuBar from "../assets/menu.svg";
import Link from "next/link";

export default function Navbar() {
  const [subMenu, setSubMenu] = useState(false);

  return (
    <>
      <nav className="bg-[#427aa1] h-16 w-full flex justify-between items-center sticky top-0">
        <Image
          src={Logo}
          alt="Pixel Escapes Logo"
          width={200}
          height={200}
          className="h-full w-auto"
        ></Image>
        <Image
          src={MenuBar}
          alt="Menu Bar"
          width={200}
          height={200}
          className="h-[60px] w-[60px] mr-[10px] cursor-pointer md:hidden"
          onClick={() => setSubMenu(!subMenu)}
        ></Image>
        <div className="hidden bg-[#427aa1] h-full w-1/2 min-w-[500px] max-w-[600px] md:flex flex-row">
          <Link
            href={"/"}
            className="h-full bg-[#427aa1] flex justify-center items-center w-1/4 nav-button"
          >
            Home
          </Link>
          <Link
            href={"/about-us"}
            className="h-full bg-[#427aa1] flex justify-center items-center w-1/4 nav-button"
          >
            About Us
          </Link>
          <Link
            href={"/virtual-destinations"}
            className="h-full bg-[#427aa1] flex justify-center items-center w-1/4 nav-button"
          >
            Virtual Destinations
          </Link>
          <Link
            href={"/our-team"}
            className="h-full bg-[#427aa1] flex justify-center items-center w-1/4 nav-button"
          >
            Our Team
          </Link>
        </div>
      </nav>

      <div
        className={`bg-gray-600 full-vh w-1/3 absolute right-0 z-20 md:hidden ${
          subMenu
            ? "translate-x-0 transition duration-300"
            : "translate-x-full transition duration-300"
        }`}
      >
        <Link href="/" className="h-12 bg-slate-300 flex items-center px-4">
          Home
        </Link>
        <Link
          href={"/about-us"}
          className="h-12 bg-slate-200 flex items-center px-4"
        >
          About Us
        </Link>
        <Link
          href={"/virtual-destinations"}
          className="h-12 bg-slate-300 flex items-center px-4"
        >
          Virtual Destinations
        </Link>
        <Link
          href={"/our-team"}
          className="h-12 bg-slate-200 flex items-center px-4"
        >
          Our Team
        </Link>
      </div>
    </>
  );
}

// export default Navbar;
