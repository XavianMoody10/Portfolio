import italianos from "../assets/projects/italianos.png";
import bestfit from "../assets/projects/bestfit.png";
import modernMuseum from "../assets/projects/modern-museum.png";
import destinize from "../assets/projects/destinize.png";
import gameTradeCenter from "../assets/projects/gametradecenter.png";

export const projects = [
  {
    id: 0,
    title: "ITALIANOS",
    image: italianos,
    desc: "A static website to promote and Italian restraunt",
    links: {
      code: "https://github.com/XavianMoody10/Italianos",
      live: "https://italianos.vercel.app/",
    },
    techs: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 1,
    title: "BESTFIT",
    image: bestfit,
    desc: "Its a E-commerce website that sells clothing products for men.",
    links: {
      code: "https://github.com/XavianMoody10/Bestfit",
      live: "https://bestfit.vercel.app/",
    },
    techs: ["ReactJS", "NodeJS", "ExpressJS", "CSS Modules"],
  },
  {
    id: 2,
    title: "Modern Museum",
    image: modernMuseum,
    desc: "A landing page of a museum website",
    links: {
      code: "https://github.com/XavianMoody10/Modern-Museum-Website",
      live: "https://modern-museum-website.vercel.app/",
    },
    techs: ["ReactJS", "CSS Modules"],
  },
  {
    id: 3,
    title: "Destinize",
    image: destinize,
    desc: "A portfolio website for traveling to Indoneisha, Asia",
    links: {
      code: "https://github.com/XavianMoody10/Destinize",
      live: "https://destinize-cyan.vercel.app/",
    },
    techs: ["ReactJS", "CSS Modules"],
  },
  {
    id: 4,
    title: "Game Trade Center",
    image: gameTradeCenter,
    desc: "A application used for trading games",
    links: {
      code: "https://github.com/XavianMoody10/GameTradeCenter",
      live: "https://game-trade-center.vercel.app/",
    },
    techs: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Tailwind"],
  },
];
