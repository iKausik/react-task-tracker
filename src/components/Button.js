import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, color, btnClick }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={btnClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

Button.prototype = {
  text: PropTypes.string,
  color: PropTypes.string,
  btnClick: PropTypes.func.isRequired,
};

export default Button;
