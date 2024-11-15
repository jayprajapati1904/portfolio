import React from "react";

const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-r from-purple-600 to-blue-500 text-white flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm <span className="text-yellow-300">Jay Prajapati</span>
      </h1>
      <p className="text-xl mb-6">
        Computer Engineering Student | MERN Stack Developer
      </p>
      <button className="bg-yellow-300 text-gray-800 px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400">
        View My Work
      </button>
    </section>
  );
};

export default Hero;
