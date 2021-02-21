import React from "react";
import PropTypes from "prop-types";
import "./StepButton.scss";
import Icon from "../../Icon";

const StepButton = ({ step, name, status, onClick }) => {
  const getNumberModifier = () => {
    let modifier = "";

    if (status === "current") {
      modifier = "step-button__number--current";
    } else if (status === "complete") {
      modifier = "step-button__number--complete";
    }
    return modifier;
  };

  const renderContent = () => (
    <div className="step-button" onClick={onClick}>
      <div className={`step-button__number ${getNumberModifier()}`}>
        {status === "complete" ? <Icon icon="checkmark" /> : step}
      </div>
      <div className="step-button__name">{name}</div>
    </div>
  );

  return renderContent();
};

StepButton.defaultProps = {
  status: "pending",
  onClick: () => {},
};

StepButton.propTypes = {
  step: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["pending", "current", "complete"]),
  onClick: PropTypes.func,
};

export default StepButton;
