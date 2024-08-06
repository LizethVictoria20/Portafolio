import '../styles/About.css'

const About = () => {
  return (
    <>
      <div className="mt-20 blur-sm w-2/4">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e8acc5] to-[#a6a3da] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        </div>
        <div className="z-40 relative w-2/4 m-auto">
          <h1 className="text-6xl font-bold">About me</h1>
          <p className= "mt-11 text-xl">Passionate about everything I do, I&apos;m willing to face challenges, lover of everything that indicates digital transformation and accessibility to achieve true inclusion. My journey spans over 1 years in web development. At the moment I am studying systems engineering at the Technological University of Pereira.</p>
        </div>
        <div className="absolute h-4/5 inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#e8acc5] to-[#a6a3da] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" ></div>
        </div>
    </>
  )
}

export default About;
