import PropTypes from "prop-types";

import { FaExternalLinkAlt } from "react-icons/fa";
// import { motion } from "framer-motion";
const BlogPost = (props) => {
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1, transition: { duration: 0.8 } },
  // };
  return (
    <div className="project-card post-card">
      <div className="project-img">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="project-title">
        <h2 className="post-title">{props.title}</h2>
      </div>
      <div className="project-description">
        <p className="post-desc">{props.date}</p>
      </div>
      <div className="project-links">
        <a href={props.read}>
          Read More <FaExternalLinkAlt />
        </a>
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

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  read: PropTypes.string.isRequired,
};

export default BlogPost;
