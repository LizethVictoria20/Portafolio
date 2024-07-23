import '../styles/About.css'
import WaveT from '../assets/waveT.svg'
import WaveB from '../assets/waveB.svg'

const About = () => {
  return (
    <>
      <div className="mt-20 blur-sm w-2/4">
        <div className="img-wave">
          <img src={WaveT} alt=""/>
          <img src={WaveB} alt=""/>
        </div>
        </div>
        <div className="z-40 relative w-2/4 m-auto">
          <h1 className="text-6xl font-bold">About me</h1>
          <p className= "mt-11 text-xl">Passionate about everything I do, I&apos;m willing to face challenges, lover of everything that indicates digital transformation and accessibility to achieve true inclusion. My journey spans over 1 years in web development. At the moment I am studying systems engineering at the Technological University of Pereira.</p>
        </div>
    </>
  )
}

export default About;
