import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiPhp,
  SiSymfony,
  SiMysql,
  SiMariadb,
  SiSqlite,
  SiDocker,
  SiPostman,
  SiGithub,
  SiApachenetbeanside,
  SiDotnet,
  SiUnity,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skills = [
  { name: "HTML", level: 95, category: "frontend", icon: <SiHtml5 /> },
  { name: "CSS", level: 95, category: "frontend", icon: <SiCss3 /> },
  { name: "JavaScript", level: 90, category: "frontend", icon: <SiJavascript /> },
  { name: "Typescript", level: 90, category: "frontend", icon: <SiTypescript /> },
  { name: "React", level: 85, category: "frontend", icon: <SiReact /> },
  { name: "C#", level: 85, category: "backend", icon: <SiDotnet className="text-[#00ff00]" /> },
  { name: "Java", level: 80, category: "backend", icon: <FaJava className="text-[#00ff00]" /> },
  { name: "PHP", level: 80, category: "backend", icon: <SiPhp /> },
  { name: "Symfony", level: 75, category: "backend", icon: <SiSymfony /> },
  { name: "MySQL", level: 85, category: "database", icon: <SiMysql /> },
  { name: "MariaDB", level: 85, category: "database", icon: <SiMariadb /> },
  { name: "SQLite", level: 70, category: "database", icon: <SiSqlite /> },
  { name: "APIs Rest", level: 80, category: "backend", icon: <SiApachenetbeanside /> },
  { name: "Docker", level: 75, category: "utilities", icon: <SiDocker /> },
  { name: "GitHub", level: 90, category: "utilities", icon: <SiGithub /> },
];

const categories = [
  { label: "Todas", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Sistemas Gestores BD", value: "database" },
  { label: "Utilidades", value: "utilities" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filtrar habilidades basadas en la categoría seleccionada
  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  // Ordenar habilidades seleccionadas para que aparezcan al principio
  const orderedSkills = [
    ...filteredSkills,
    ...skills.filter((skill) => !filteredSkills.includes(skill)),
  ];

  return (
    <section id="skills" className="py-30 px-4 relative bg-secondary/30">
      <div className="pt-8 pb-30 container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mis <span className="text-primary">Habilidades</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveCategory(value)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {orderedSkills.map((skill, index) => {
            const isSkillVisible = filteredSkills.includes(skill);

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isSkillVisible ? 1 : 0,
                  y: isSkillVisible ? 0 : 50, // Hace un pequeño desplazamiento para la animación
                }}
                transition={{
                  duration: 0.5,
                  delay: isSkillVisible ? index * 0.1 : 0, // Aparece con un retraso secuencial
                }}
                className={cn(
                  "p-6 rounded-lg shadow-sm bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg",
                  !isSkillVisible ? "invisible opacity-0" : "opacity-100"
                )}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl text-[#00ff00]">{skill.icon}</div>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden relative">
                  <div
                    className="bg-primary h-2 rounded-full origin-left transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
