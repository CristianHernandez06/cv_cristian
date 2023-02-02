import React from "react";
import personalimg from "../assets/personalImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full"
        >
          <h2 className="text-4xl text-white sm:text-6xl font-bold"
          >I'm a Full Stack Developer</h2>
          <p className="text-gray-500 py-2 max-w-md"
          >
          "Un desarrollador chileno con
            experiencia en el campo de la tecnología. Mi habilidad para resolver
            problemas y mi pasión por el aprendizaje."
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-amber-500 to-amber-800 cursor-pointer "
            >
              Portfolio 
              <span className="group-hover:rotate-90 duration-700 animate-pulse"
              >
                <MdOutlineKeyboardArrowRight size={30}
                className="ml-1"/>
              </span>
            </button>
          </div>
        </div>

        <div className="mb-4" 
        >
          <img src={personalimg} 
          alt=""
          className="rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
