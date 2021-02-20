import React from "react";
import PropTypes from "prop-types";
import "./Form.scss";

const Form = () => {
  const renderContent = () => (
    <div className="form">
      <div className="form__header">
        <span>THE UP-AND-COMING PRODUCER</span>
        <span>$15</span>
      </div>
    </div>
  );

  return renderContent();
};

export default Form;
