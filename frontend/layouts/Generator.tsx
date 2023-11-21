import { Outlet } from "react-router-dom"

import GeneratorNavbar from "../components/Generator/GeneratorNavbar"

const GeneratorLayout = () => {
  return (
    <div className="min-h-screen w-full">
      <GeneratorNavbar />
      <div className="flex items-center justify-between px-[60px] py-[25px]">
        <Outlet />
      </div>
    </div>
  )
}

export default GeneratorLayout
