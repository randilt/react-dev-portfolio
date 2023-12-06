import PropTypes from "prop-types";

const Heading = (props) => {
  return (
    <div className="heading hero-text">
      <h1>{props.text}</h1>
    </div>
  );
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
