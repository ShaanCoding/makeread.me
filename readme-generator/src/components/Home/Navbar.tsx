import React from "react"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="w-full my-16 relative">
      <div className="w-full flex items-center justify-between">
        <h1 className="w-1/3 text-white font-poppins text-xl font-bold">
          ReadME Generator
        </h1>
        <div className="w-2/3 flex justify-end items-center">
          <div className="mx-8">
            <Link
              href="/"
              className="text-white font-poppins text-xl font-normal"
            >
              Home
            </Link>
          </div>
          <div className="mx-8">
            <Link
              href="/"
              className="text-white font-poppins text-xl font-normal"
            >
              ReadME Editor
            </Link>
          </div>
          <div className="mx-8">
            <Link
              href="/"
              className="text-white font-poppins text-xl font-normal"
            >
              Contact Us
            </Link>
          </div>
          <div className="mx-8">
            <Link
              href="/"
              className="text-white font-poppins text-xl font-normal"
            >
              ReadME Examples
            </Link>
          </div>
          <div className="mx-8">
            <Link
              href="/"
              className="text-white font-poppins text-xl font-normal"
            >
              Guides
            </Link>
          </div>
        </div>
      </div>
      <div
        className="absolute bg-themeGreen top-0 left-0
      w-[371px] h-[371px] rounded-[371px] opacity-50 blur-[175px] z-[-1]
      "
      ></div>
    </div>
  )
}

// width: 50%;
// height: 1000px;
// background: #8d3bf421;
// filter: blur(316px);
// position: absolute;
// pointer-events: none;

export default Navbar
