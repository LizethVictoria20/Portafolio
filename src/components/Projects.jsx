import { useEffect } from 'react';
import { GUI } from 'https://cdn.skypack.dev/dat.gui';
import ProjectJSON from '../projects.json';
import { Link } from "react-router-dom";
import '../styles/Projects.css'


const GlowEffect = () => {
  useEffect(() => {
    const CONTAINER = document.querySelector('.container');
    const CARDS = document.querySelectorAll('article');

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 20,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event) => {
      for (const CARD of CARDS) {
        const CARD_BOUNDS = CARD.getBoundingClientRect();
        if (
          event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
          event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
          event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          CARD.style.setProperty('--active', 1);
        } else {
          CARD.style.setProperty('--active', CONFIG.opacity);
        }
        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];
        let ANGLE = (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) * 180) / Math.PI;
        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;
        CARD.style.setProperty('--start', ANGLE + 90);
      }
    };

    document.body.addEventListener('pointermove', UPDATE);

    const RESTYLE = () => {
      CONTAINER.style.setProperty('--gap', CONFIG.gap);
      CONTAINER.style.setProperty('--blur', CONFIG.blur);
      CONTAINER.style.setProperty('--spread', CONFIG.spread);
      CONTAINER.style.setProperty('--direction', CONFIG.vertical ? 'column' : 'row');
    };

    const CTRL = new GUI({ width: 340 });
    CTRL.add(CONFIG, 'spread', 10, 180, 1).name('Spread (deg)').onChange(RESTYLE);
    CTRL.add(CONFIG, 'proximity', 10, 180, 1).name('Active Proximity (px)').onChange(RESTYLE);
    CTRL.add(CONFIG, 'gap', 10, 100, 1).name('Gap (px)').onChange(RESTYLE);
    CTRL.add(CONFIG, 'blur', 0, 50, 1).name('Blur (px)').onChange(RESTYLE);
    CTRL.add(CONFIG, 'opacity', 0, 1, 0.01).name('Inactive Opacity').onChange(RESTYLE);
    CTRL.add(CONFIG, 'vertical').name('Vertical Layout').onChange(RESTYLE);

    RESTYLE();
    UPDATE();

    // Ocultar el contenedor de dat.gui
    const guiContainer = document.querySelector('.ac');
    if (guiContainer) {
      guiContainer.style.display = 'none';
    }

    return () => {
      document.body.removeEventListener('pointermove', UPDATE);
    };
  }, []);

  return (
    <div className="mt-40 ">
      <div className="absolute inset-x-0 top-full -z-10 transform-gpu overflow-hidden blur-3xl sm:top-160" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e8acc5] to-[#a6a3da] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
            <h1 className="text-6xl font-bold">Projects</h1>
      <div className="container">
      {
        ProjectJSON.map((item) => (
          <article key={item.id} className="shadow-xl border border-zinc-300 ">
          <div className="glows"></div>
          <div>
            <img src={item.image} alt="" />
          </div>
          <h2>{item.projectName}</h2>
          <div className="decription-project px-8">
            <p className="text-xs text-left">{item.description}</p>
            <span className="badge w-28">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183A.75.75 0 0116.5 15z"
                clipRule="evenodd"
              />
            </svg>
            <Link to={item.linkProject}>See project</Link>
          </span>
          </div>

        </article>
        ))
      }
      </div>
    </div>
  );
};

export default GlowEffect;
