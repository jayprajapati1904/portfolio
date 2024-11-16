import React from "react";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-r from-purple-600 to-blue-500 text-white flex flex-col md:flex-row justify-center items-center px-4 md:px-16 text-center md:text-left ">
      {/* Left Content */}
      <div className="flex-1 sm:mt-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-yellow-300">Jay Prajapati</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Computer Engineering Student | MERN Stack Developer
        </p>
        <Button
          type="primary"
          size="large"
          className="bg-yellow-300 text-gray-800 hover:bg-yellow-400 shadow-lg px-6 py-3"
          icon={<ArrowRightOutlined />}
        >
          View My Work
        </Button>
      </div>

      {/* Right Content - Illustration */}
      <div className="flex-1 mt-8 md:mt-0">
        <img
          src=".././public/images/_5.jpg"
          alt="Hero Illustration"
          className="w-full sm:w-3/4 md:w-4/5 mx-auto rounded-lg shadow-lg max-h-64 sm:max-h-80 md:max-h-full object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
