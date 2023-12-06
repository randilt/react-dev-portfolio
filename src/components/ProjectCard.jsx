import PropTypes from "prop-types";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <div className="project-img">
        <img src="https://via.placeholder.com/300" alt={props.name} />
      </div>
      <div className="project-title">
        <h2>{props.name}</h2>
      </div>
      <div className="project-description">
        <p>{props.description}</p>
      </div>
      {/* <div className="project-tags">
        <div className="project-tag">
          {projects.stack.map((project, index) => (
            <p key={index}>hello</p>
          ))}
        </div>
      </div> */}
    </div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ProjectCard;
