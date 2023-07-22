import React from "react"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="w-full my-16 flex items-center justify-between">
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
  )
}

export default Navbar
