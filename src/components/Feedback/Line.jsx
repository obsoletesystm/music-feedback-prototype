import React from "react";
import PropTypes from "prop-types";
import "./Line.scss";

const Line = ({ length, blue }) => (
  <div
    className={`line ${blue ? "line--blue" : ""}`}
    style={{ width: length }}
  />
);

Line.defaultProps = {
  length: "inherit",
  blue: false,
};

Line.propTypes = {
  length: PropTypes.string,
  blue: PropTypes.bool,
};

export default Line;
