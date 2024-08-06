import React from '../assets/react.svg';
import JavaScript from '../assets/javascript.svg';
import HTML from '../assets/html.svg'
import CSS from '../assets/css.svg'
import Git from '../assets/git.svg'
import Bootstrap from '../assets/bootstrap.svg';
import Tailwind from '../assets/Tailwindcss.svg';
import Figma from '../assets/figma.svg';
import Firebase from '../assets/firebase.svg';
import Wordpress from '../assets/wordpress.svg';
import '../styles/Skills.css';

const Skill = () => {
  return (
    <>
      <h1 className="text-6xl font-bold mt-32 mb-14">Skills</h1>
      <div className="p-5 m-auto rounded-md container-skills shadow-2xl">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e8acc5] to-[#a6a3da] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="grid grid-cols-5 gap-4 w-4/5 m-auto drop-shadow-xl">
          <div>
            <img src={React} alt="React logo" />
          </div>
          <div>
            <img src={JavaScript} alt="JavaScript logo" />
          </div>
          <div>
            <img src={HTML} alt="HTML logo" />
          </div>
          <div>
            <img src={CSS} alt="CSS logo" />
          </div>
          <div>
            <img src={Git} alt="Git logo" />
          </div>
          <div>
            <img src={Bootstrap} alt="Bootstrap logo" />
          </div>
          <div>
            <img src={Tailwind} alt="Tailwind logo" />
          </div>
          <div>
            <img src={Figma} alt="Figma logo" />
          </div>
          <div>
            <img src={Firebase} alt="Firebase logo" />
          </div>
          <div>
          <img src={Wordpress} alt="Wordpress logo" />
          </div>
        </div>
      </div>
      <div className="absolute h-4/5 inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#e8acc5] to-[#a6a3da] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" ></div>
      </div>
    </>
  )
}

export default Skill;