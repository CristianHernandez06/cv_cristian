import React from "react";
import eaventas from "../assets/portfolio/eaventas.png";
import helpdesk from "../assets/portfolio/helpdesk.png";
import eltiempoch from "../assets/portfolio/eltiempoch.png";
import buscamegif from "../assets/portfolio/buscamegif.png";
import mundolibros from "../assets/portfolio/mundolibros.png";
import blogdecafe from "../assets/portfolio/blogdecafe.png";

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: eaventas,
      demo: "https://eltiempoch.netlify.app",
      code: "https://github.com/array-destruct",
    },
    {
      id: 2,
      src: helpdesk,
      demo: "https://blogdecafech.netlify.app",
      code: "https://github.com/array-destruct",
    },
    {
      id: 3,
      src: eltiempoch,
      demo: "https://buscame-gif.netlify.app",
      code: "https://github.com/array-destruct",
    },
    {
      id: 4,
      src: buscamegif,
      demo: "https://demo-array-destruct.com",
      code: "https://github.com/array-destruct",
    },
    {
      id: 5,
      src: mundolibros,
      demo: "https://demo-array-destruct.com",
      code: "https://github.com/array-destruct",
    },
    {
      id: 6,
      src: blogdecafe,
      demo: "https://demo-array-destruct.com",
      code: "https://github.com/array-destruct",
    },
  ];

 

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="  text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Mira algunos de mis trabajos aquí</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
                
                
              />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>

                <a href={code} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
