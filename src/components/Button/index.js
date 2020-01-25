import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ name, style, onClick, disabled, onFocus, onBlur }) => {
  return (
    <button
      className="btn"
      style={style}
      onClick={onClick}
      disabled={disabled}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <span>{name}</span>
    </button>
  );
};

Button.defaultProps = {
  style: {},
  onClick: () => {},
  onFocus: () => { },
  onBlur: () => {},
  disabled: false
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
