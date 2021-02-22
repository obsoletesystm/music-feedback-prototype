import React from "react";
import PropTypes from "prop-types";
import "./Icon.scss";

const Icon = ({ icon, label, dark }) => (
  <div className={`icon ${label ? "icon--with-label" : ""}`}>
    <span className={`material-icons ${dark ? "icon--dark" : ""}`}>{icon}</span>
    {label && <span className="icon__label">{label}</span>}
  </div>
);

Icon.defaultProps = {
  label: null,
  dark: false,
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string,
  dark: PropTypes.bool,
};

export default Icon;
