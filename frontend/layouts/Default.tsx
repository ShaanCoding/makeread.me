import { Outlet } from "react-router-dom"

import Footer from "../components/Home/Footer"
import Navbar from "../components/Home/Navbar"

export default function DefaultLayout() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col h-screen justify-between">
      <div className="mx-20">
        <Navbar />
        <div className="w-full flex relative">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}
