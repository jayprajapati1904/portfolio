import React from "react";
import CallToAction from "../components/CallToAction";

const About = () => {
  return (
    <section className="mt-10 min-h-screen flex items-center justify-center bg-[#10172a]">
      <div className="max-w-2xl mx-auto p-3 text-center text-white">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">
            About{" "}
            <span className="text-yellow-300 font-bold">Jay Prajapati</span>
          </h1>
          <div className="text-md text-gray-200 flex flex-col gap-6">
            <p>
              Welcome to my portfolio! I'm{" "}
              <span className="text-yellow-300 font-bold">Jay Prajapati</span>,
              a{" "}
              <span className="text-yellow-300 font-bold">
                Computer Engineering
              </span>{" "}
              student with a passion for backend development and data analytics.
              I specialize in the{" "}
              <span className="text-yellow-300 font-bold">MERN Stack</span> and
              love solving problems using Python and Excel.
            </p>

            <p>
              On this portfolio, you'll find various projects I've worked on,
              ranging from web development applications to data analysis
              projects. I'm always eager to learn new technologies and share my
              knowledge with others. My focus is on{" "}
              <span className="text-yellow-300 font-bold">collaboration</span>{" "}
              and continuous learning.
            </p>

            <p>
              I believe in the power of collaboration and community. Feel free
              to browse my work, and connect with me. I'm always open to new
              opportunities and collaborations!
            </p>
          </div>
        </div>
        <div className="my-7">
          <CallToAction />
        </div>
      </div>
    </section>
  );
};

export default About;
