import "./App.css";
import Hero from "./components/Hero";
import information from "./content/information";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import Heading from "./components/Heading";
import projects from "./content/projects";
import Skill from "./components/Skill";
import skills from "./content/skills";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
function App() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Adjust the stagger duration as needed
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <Navbar
        firstName={information.userData.firstName}
        lastName={information.userData.lastName}
      />
      <Hero
        img={information.userData.img}
        description={information.userData.description}
        title={information.userData.title}
      />
      <div className="hr"></div>

      <section id="projects">
        <Heading text="<My Projects/>" />
        <motion.div
          className="project-map"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard
                name={project.name}
                description={project.description}
              />
            </div>
          ))}
        </motion.div>
      </section>
      <section id="skills">
        <Heading text="<Skills and Tools/>" />
        <motion.div
          className="skill-map"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={skillVariants}>
              <Skill skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </section>
      <Footer />
    </>
  );
}

export default App;
