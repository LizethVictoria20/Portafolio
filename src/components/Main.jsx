import '../styles/Main.css'

const Main = () => {
  return (
    <>
      <div className="relative isolate px-6 pt-40 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e8acc5] to-[#a6a3da] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-5xl py-14 sm:py-18 lg:pt-16 lg:pb-28">
          <div className="text-center">
            <h5 className="text-6xl tracking-tight">Hey, I&apos;m Liz Victoria</h5>
            <h2 className="mt-6 mb-10 text-lg leading-8 sm:text-7xl font-bold">Junior Web Developer</h2>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#contact" className="rounded-md px-3.5 py-2.5 text-base font-semibold text-white mt-10 button-main">Contact me!</a>
            </div>
          </div>
        </div>
        <div className="absolute h-4/5 inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#e8acc5] to-[#a6a3da] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" ></div>
        </div>
      </div>
    </>
  )
}

export default Main