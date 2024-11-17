import React from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "MERN-Blog App",
      description:
        "Built a feature-rich blogging application using the MERN stack, with admin and user roles, authentication (sign-in/sign-up), post creation, updates, and user management.",
      image: "/images/blog.png",
      link: "https://github.com/jayprajapati1904/mern---project",
    },
    {
      title: "Portfolio Website",
      description:
        "Developed a React-based portfolio website featuring a stunning design with Tailwind CSS and Node libraries for layout and styling.",
      image: "/images/portfolio.png",
      link: "https://github.com/jayprajapati1904/portfolio",
    },
    {
      title: "Hotel Booking Cancellation Analysis",
      description:
        "A data analytics project analyzing hotel booking cancellation trends using Excel.",
      image: "/images/DashBoard.png",
      link: "https://github.com/jayprajapati1904/Hotel-Booking-Cancellaction-Data-Analytics-Project-",
    },
    {
      title: "Sundown Studio Website",
      description:
        "Developed a dynamic Sundown Studio website using HTML, CSS, JavaScript, and GSAP for smooth animations and interactive design",
      image: "/images/sundown.png",
      link: "https://github.com/jayprajapati1904/Sundown-Website",
    },
  ];

  return (
    <div id="projects" className="projects-container">
      <section className=" bg-[#10172a]">
        <div className="container mx-auto text-center px-3">
          <h2 className="text-3xl font-bold mb-10 text-white ">
            My <span className="text-green-300">Projects</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-400 to-green-500 p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_4px_20px_0_rgba(56,189,248,0.5)]"
              >
                {project.image && (
                  <div className="rounded-md">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 rounded-md md:object-cover transition-transform duration-300 transform hover:scale-110 hover:shadow-[10px_4px_10px_10px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                )}

                <h3 className="text-xl font-bold text-white mt-4 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-4">{project.description}</p>

                <a
                  href={project.link}
                  className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore the project on
                  <FaGithub className="ml-2 w-5 h-5" />
                </a>
              </div>
            ))}
          </div>

          <a
            href="https://github.com/jayprajapati1904"
            className="mt-10 px-3 flex items-center justify-center bg-gradient-to-r from-green-400 to-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore More project on
            <FaGithub className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
