import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contacto
          </p>
          <p className="py-6">Envíe el siguiente formulario para ponerse en contacto conmigo</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/72c07f1a-0481-479f-bd64-f96fa88e3a9a"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Introduzca su nombre"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Introduzca su correo electrónico"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Ingrese su mensaje"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
            Conversemos
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
