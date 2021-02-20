import React from "react";
import PropTypes from "prop-types";
import StepButton from "./StepButton";
import Form from "./Form";
import "./Feedback.scss";

const Feedback = () => {
  const renderContent = () => (
    <div className="feedback">
      <div className="feedback__header">
        <span className="feedback__header__details">ORDER DETAILS</span>
        <StepButton step={1} name="Details" status="current" />
        <StepButton step={2} name="Pay & Complete" />
        <StepButton step={3} name="Upload Your Songs" />
      </div>
      <div className="feedback__body">
        <Form />
        <div className="feedback__body__sumary"></div>
      </div>
    </div>
  );

  return renderContent();
};

export default Feedback;
