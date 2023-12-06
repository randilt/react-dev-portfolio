import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Hero = (props) => {
  return (
    <div className="container">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="pfp"
      >
        <img src={props.img} alt="" />
      </motion.div>

      <div className="button-effect">
        <button className="glowing-btn">
          <span className="glowing-txt">
            <span className="faulty-letter">IAM</span>
          </span>
        </button>
        <br />
        <button className="glowing-btn">
          <span className="glowing-txt">
            <span className="faulty-letter">R</span>ANDIL
            <span className="faulty-letter">T</span>HARUSHA
          </span>
        </button>
        <div className="hero-text">
          <h1>{props.title}</h1>

          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
Hero.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
