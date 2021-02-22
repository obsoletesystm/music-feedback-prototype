import React from "react";
import PropTypes from "prop-types";
import Icon from "../../Icon";
import "./StepButton.scss";

const StepButton = ({ stepNumber, name, currentStep, onClick }) => {
  const getNumberModifier = () => {
    let modifier = "";

    if (stepNumber === currentStep) {
      modifier = "step-button__number--current";
    } else if (stepNumber < currentStep) {
      modifier = "step-button__number--complete";
    }
    return modifier;
  };

  const renderContent = () => (
    <div className="step-button" onClick={onClick}>
      <div className={`step-button__number ${getNumberModifier()}`}>
        {stepNumber < currentStep ? <Icon icon="checkmark" /> : stepNumber}
      </div>
      <div className="step-button__name">{name}</div>
    </div>
  );

  return renderContent();
};

StepButton.defaultProps = {
  onClick: () => {},
};

StepButton.propTypes = {
  stepNumber: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  currentStep: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default StepButton;
