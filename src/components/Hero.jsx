import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Heading from "./Heading";
import socials from "../content/socials";
import Typewriter from "typewriter-effect";

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
        whileHover={{ scale: 1.3, rotate: 10 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%",
        }}
        className="pfp"
      >
        <img src={props.img} alt="" />
      </motion.div>

      <Heading firstWord="Who" secondWord="AmI?" />
      <div className="hero-typewriter">
        <h3>I am</h3>
        <Typewriter
          options={{
            strings: [
              "An Aspiring Developer",
              "An AI & ML Enthusiast",
              "An IoT Enthusiast",
              "A Student",
            ],
            autoStart: true,
            loop: true,
          }}
          className="typewriter"
        />
      </div>
      {/* <HeroHeading /> */}
      <div className="button-effect">
        {/* <button className="glowing-btn">
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
        </button> */}
        <div className="hero-text">
          <p className="hero-desc">{props.description}</p>
        </div>
        <br />
        <br />
        Find me on:
        <div className="hero-socials">
          {socials.map((social, index) => (
            <a key={index} href={social.url}>
              <img src={`/socials/${social.icon}`} alt="" />
            </a>
          ))}
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
