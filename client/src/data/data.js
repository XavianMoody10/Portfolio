import italianos from "../assets/projects/italianos.png";
import bestfit from "../assets/projects/bestfit.png";
import modernMuseum from "../assets/projects/modern-museum.png";
import destinize from "../assets/projects/destinize.png";

const projects = [
  {
    id: 0,
    title: "ITALIANOS",
    image: italianos,
    desc: "A static website to promote and Italian restraunt",
    links: {
      code: "https://github.com/XavianMoody10/Italianos",
      live: "https://italianos.vercel.app/",
    },
    techs: ["html", "css", "javascript"],
  },
  {
    id: 1,
    title: "BESTFIT",
    image: bestfit,
    desc: "Its a E-commerce website that sells clothing products for men.",
    links: {
      code: "https://github.com/XavianMoody10/Bestfit",
      live: "https://bestfitstore.netlify.app/",
    },
    techs: ["react", "node", "express"],
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
    techs: ["react"],
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
    techs: ["react"],
  },
];

export default { projects };
