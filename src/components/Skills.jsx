// Skills.jsx
import React, { useState, useEffect } from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      icon: <FaReact className="w-8 h-8 text-blue-500" />,
      percentage: 90,
      colors: "from-blue-300 to-blue-500",
    },
    {
      icon: <FaNodeJs className="w-8 h-8 text-green-500" />,
      percentage: 85,
      colors: "from-green-300 to-green-500",
    },
    {
      icon: <FaPython className="w-8 h-8 text-yellow-500" />,
      percentage: 80,
      colors: "from-yellow-300 to-yellow-500",
    },
    {
      icon: <SiMongodb className="w-8 h-8 text-green-700" />,
      percentage: 75,
      colors: "from-green-400 to-green-700",
    },
    {
      icon: <SiTailwindcss className="w-8 h-8 text-blue-400" />,
      percentage: 95,
      colors: "from-blue-200 to-blue-400",
    },
    {
      icon: <SiFirebase className="w-8 h-8 text-yellow-400" />,
      percentage: 65,
      colors: "from-yellow-200 to-yellow-400",
    },
    {
      icon: <FaGithub className="w-8 h-8 text-gray-800" />,
      percentage: 95,
      colors: "from-gray-500 to-gray-800",
    },
    {
      icon: <FaJava className="w-8 h-8 text-orange-300" />,
      percentage: 70,
      colors: "from-orange-300 to-orange-500",
    },
  ];

  return (
    <div id="skills" className="skills-container">
      <section>
        <h2 className="text-3xl font-bold mb-10 text-white text-center">
          My <span className="text-red-600">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </div>
      </section>
    </div>
  );
};

const SkillBar = ({ skill }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    const increment = skill.percentage / 50; // Speed: Higher divisor = slower animation
    const interval = setInterval(() => {
      setCurrentPercentage((prev) => {
        if (prev >= skill.percentage) {
          clearInterval(interval);
          return skill.percentage;
        }
        return Math.min(prev + increment, skill.percentage);
      });
    }, 100); // Update every 20ms
    return () => clearInterval(interval);
  }, [skill.percentage]);

  return (
    <div className="flex items-center bg-gradient-to-r from-red-500 to-green-500 rounded-full shadow-md p-6">
      {/* Skill Icon */}
      <div className="flex-shrink-0 mr-4">{skill.icon}</div>

      {/* Percentage Scale */}
      <div className="flex-grow">
        <div className="w-full bg-gray-300 rounded-full h-3">
          <div
            className={`h-3 rounded-full bg-gradient-to-r ${skill.colors}`}
            style={{ width: `${currentPercentage}%` }}
          ></div>
        </div>
        <p className="text-white font-medium mt-2">
          {Math.round(currentPercentage)}%
        </p>
      </div>
    </div>
  );
};

export default Skills;
