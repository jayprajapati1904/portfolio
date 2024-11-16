import React from "react";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/projects");
  };

  return (
    <section
      className="h-screen bg-gradient-to-r from-purple-600 to-blue-500 text-white flex flex-col md:flex-row justify-center items-center px-4 md:px-16 md:mt-10 text-center md:text-left overflow-y-scroll"
      style={{ marginTop: "55px" }} // Adjust margin based on Navbar height
    >
      {/* Left Content */}
      <div className="flex-1 mt-10 ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="text-yellow-300">
            <Typewriter
              words={[
                "Jay Prajapati",
                "A MERN Stack Developer",
                "A Web Developer",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={20}
              delaySpeed={2000}
            />
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Computer Engineering Student | MERN Stack Developer
        </p>
        <Button
          type="primary"
          size="large"
          className="bg-yellow-300 text-gray-800 hover:bg-yellow-400 shadow-lg px-6 py-3"
          icon={<ArrowRightOutlined />}
          onClick={handleNavigate}
        >
          View My Work
        </Button>

        {/* Social Media Links */}
        <div className="flex justify-center md:justify-start space-x-4 mt-8 lg:mt-10 lg:gap-6">
          {[
            {
              href: "https://instagram.com/",
              icon: (
                <FaInstagram
                  size={24}
                  style={{ color: "rgba(236, 72, 153, 0.7)" }}
                />
              ), // Default Pink
              hoverColor: "rgba(236, 72, 153, 1)", // Pink on Hover
            },
            {
              href: "https://twitter.com/",
              icon: (
                <FaTwitter
                  size={24}
                  style={{ color: "rgba(56, 161, 243, 0.7)" }}
                />
              ), // Default Light Blue
              hoverColor: "rgba(56, 161, 243, 1)", // Light Blue on Hover
            },
            {
              href: "https://linkedin.com/",
              icon: (
                <FaLinkedin
                  size={24}
                  style={{ color: "rgba(10, 102, 194, 0.7)" }}
                />
              ), // Default Dark Blue
              hoverColor: "rgba(10, 102, 194, 1)", // Dark Blue on Hover
            },
            {
              href: "https://github.com/",
              icon: (
                <FaGithub
                  size={24}
                  style={{ color: "rgba(203, 213, 225, 0.7)" }}
                />
              ), // Default Light Gray
              hoverColor: "rgba(203, 213, 225, 1)", // Light Gray on Hover
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-10 rounded-full p-3 transition duration-300 transform"
              style={{
                boxShadow: "0px 0px 15px 5px rgba(94, 129, 244, 0.5)", // Shadow similar to hero background
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.2)"; // Scale up
                e.currentTarget.style.color = item.hoverColor; // Change icon color
                e.currentTarget.style.boxShadow = `0px 0px 25px 10px ${item.hoverColor}`; // Glow on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"; // Reset scale
                e.currentTarget.style.color = "white"; // Reset color
                e.currentTarget.style.boxShadow =
                  "0px 0px 15px 5px rgba(94, 129, 244, 0.5)"; // Reset shadow
              }}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      {/* Right Content - Illustration */}
      <div className="flex-1 mt-8 md:mt-0">
        <img
          src="/images/_5.jpg"
          alt="Hero Illustration of my portfolio project"
          className="w-full sm:w-3/4 md:w-4/5 mx-auto rounded-lg max-h-60 sm:max-h-80 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Hero;
