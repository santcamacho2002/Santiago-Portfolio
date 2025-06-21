import { useState } from "react";
import {
  FaCode,
  FaLanguage,
  FaPython,
  FaJava,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import {
  SiSpring,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiMongodb,
  SiPostgresql,
  SiAngular,
  SiFlutter,
} from "react-icons/si";

import TitleHeader from "../components/TitleHeader";
import { AnimatePresence, motion } from "framer-motion";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technologies");
  const [tabKey, setTabKey] = useState(0); // para forzar rerender

  const tabs = [
    { key: "technologies", label: "Technologies", icon: <FaCode /> },
    { key: "languages", label: "Languages", icon: <FaLanguage /> },
  ];

  const skillsWithIcons = {
    technologies: [
      { name: "Java", icon: <FaJava /> },
      { name: "C++", icon: <span className="text-xl">🧮</span> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Python", icon: <FaPython /> },
      { name: "SQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Power BI", icon: <span className="text-xl">📊</span> },
      { name: "Angular", icon: <SiAngular /> },
      { name: "Spring Boot", icon: <SiSpring /> },
      { name: "React", icon: <SiReact /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "GitHub", icon: <FaGithub /> },
    ],
    languages: [
      { name: "Spanish – Native", icon: <span>🇪🇸</span> },
      { name: "English – C1 Advanced", icon: <span>🇺🇸</span> },
    ],
  };

  const handleTabChange = (key) => {
    setActiveTab(key);
    setTabKey((prev) => prev + 1); // fuerza un rerender visual

    document.getElementById("skills")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="skills"
      className="flex-center section-padding mt-16 scroll-mt-28 md:mt-40 xl:px-0"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Skills" sub="🛠️ What I Can Do" />

        {/* Tabs */}
        <div className="flex justify-center items-center gap-4 mt-6 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`flex items-center gap-2 px-4 py-2 rounded-t-md font-medium border-b-2 transition-colors ${
                activeTab === tab.key
                  ? "border-white text-white"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
              onClick={() => handleTabChange(tab.key)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Animated Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${tabKey}`} // fuerza rerender
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {skillsWithIcons[activeTab].map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium shadow-sm transition-shadow bg-white dark:bg-zinc-800"
              >
                <span className="text-xl">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
