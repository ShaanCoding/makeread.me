const CallToAction = () => {
  return (
    <div className="relative w-full select-text py-[100px]">
      <div className="absolute inset-y-0 left-24 flex w-[1200px] flex-col items-start justify-center">
        <h1 className="font-poppins mb-[50px] text-6xl font-bold leading-[120%] text-white">
          Ready to create professional-quality ReadMEs for your projects?
        </h1>

        <button
          className="text-themeGreen font-poppins rounded-[10px] bg-white px-6 py-4 font-semibold hover:opacity-90"
          // onClick={() => {
          // navigate("/generator")
          // }}
        >
          Begin Your ReadME Journey
        </button>
      </div>
      <div className="h-auto w-full">
        <img
          className="pointer-events-none h-auto w-full select-none"
          src="/icons/home/CallToAction.svg"
          alt="Call To Action - Background"
        />
      </div>
    </div>
  )
}

export default CallToAction
