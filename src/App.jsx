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

function App() {
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
      <Heading text="<Projects/>" />
      <section id="projects">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
          />
        ))}
      </section>
      <section id="skills">
        <Heading text="<Skills/>" />
        <div className="skill-map">
          {skills.map((skill, index) => (
            <Skill skill={skill} key={index} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
