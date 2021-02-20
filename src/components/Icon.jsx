import React from "react";
import PropTypes from 'prop-types';
import "./Icon.scss";

const Icon = ({ icon, label }) => (
  <div className="icon">
    <span className="material-icons material-icons.md-light">
      {icon}
    </span>
    {label && <span className="icon__label">{label}</span>}
  </div>
);

Icon.defaultProps = {
  label: null,
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default Icon;