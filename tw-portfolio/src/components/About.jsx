import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-l mt-10">
          Soy Cristian Hernández, Ingeniero en Informática con experiencia en
          programación web y movil, soporte técnico y desarrollo de APIs. Trabajé para
          empresas como Arrigoni, Clip Tecnología y Oxeean. Mi objetivo es seguir creciendo y mejorar la vida de las
          personas a través de la tecnología.
        </p>

        <br />

        <p className="text-l">
          Me destaco por mi pasión y
          entusiasmo por la tecnología. Me encanta explorar nuevas soluciones y
          tecnologías para resolver problemas y mejorar la eficiencia.
        </p>
        <br />
        <p className="text-l"
        >
          Mis valores incluyen: honestidad, responsabilidad, ética de trabajo,
          perseverancia, curiosidad y una constante motivación por aprender y
          mejorar. Valoro la transparencia en las relaciones profesionales y
          personales, y trato a todos con respeto y consideración. Me esfuerzo
          por ser una persona integra y trabajar con dedicación en cada proyecto
          en el que participo.
        </p>
      </div>
    </div>
  );
};

export default About;
