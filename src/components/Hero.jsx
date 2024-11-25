import React from "react";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="home" className="hero-container">
      <section
        className="min-h-screen bg-[#10172a] text-white flex flex-col md:flex-row justify-center items-center px-4 md:px-16 md:mt-10 text-center md:text-left "
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
          <Link
            to="projects" // This should be the ID of your "Projects" section
            smooth={true}
            duration={800} // Duration of scroll in ms
            offset={-70} // Optional, adjust the offset if needed
          >
            <Button
              type="primary"
              size="large"
              className="bg-yellow-300 text-gray-800 hover:bg-yellow-400 shadow-lg px-6 py-3"
              icon={<ArrowRightOutlined />}
            >
              View My Work
            </Button>
          </Link>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start space-x-4 mt-8 lg:mt-10 lg:gap-6">
            {[
              {
                href: "https://www.instagram.com/j_a_y_1245/",
                icon: (
                  <FaInstagram
                    size={24}
                    style={{ color: "rgba(236, 72, 153, 0.7)" }}
                  />
                ), // Default Pink
                hoverColor: "rgba(236, 72, 153, 1)", // Pink on Hover
              },
              {
                href: "https://x.com/jayprajapa1908",
                icon: (
                  <FaTwitter
                    size={24}
                    style={{ color: "rgba(56, 161, 243, 0.7)" }}
                  />
                ), // Default Light Blue
                hoverColor: "rgba(56, 161, 243, 1)", // Light Blue on Hover
              },
              {
                href: "https://www.linkedin.com/in/jay-prajapati-768213277/",
                icon: (
                  <FaLinkedin
                    size={24}
                    style={{ color: "rgba(10, 102, 194, 0.7)" }}
                  />
                ), // Default Dark Blue
                hoverColor: "rgba(10, 102, 194, 1)", // Dark Blue on Hover
              },
              {
                href: "https://github.com/jayprajapati1904",
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
        <div className="flex-1 mt-8 md:mt-0 mb-9">
          <div className="rounded-xl p-[3px] bg-gradient-to-r from-purple-600 to-blue-500 shadow-[0px_15px_30px_rgba(147,51,234,0.5)]">
            <div className="bg-[#10172a] rounded-xl p-[5px]">
              <img
                src="/images/_5.jpg"
                alt="Hero Illustration of my portfolio project"
                className="w-full sm:w-3/4 md:w-4/5 mx-auto max-h-80 sm:max-h-80 object-contain transition-transform duration-300 hover:scale-105 rounded-xl "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
