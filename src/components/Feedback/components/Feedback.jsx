import React from "react";
import PropTypes from "prop-types";
import StepButton from "./StepButton";
import OrderDetails from "../../OrderDetails";
import Payment from "../../Payment";
import Line from "./Line";
import "./Feedback.scss";

const Feedback = ({ step, setStep, subtotal, taxRate }) => {
  const taxes = subtotal * taxRate;

  const summaryButtonText =
    step === 1 ? "Continue to Payment" : "Pay & Complete";

  const renderStep = () => {
    let result = <OrderDetails />;

    if (step === 2) {
      result = <Payment />;
    } else if (step === 3) {
      result = null;
    }

    return result;
  };

  const renderContent = () => (
    <div className="feedback">
      <div className="feedback__header">
        <span className="feedback__header__details">ORDER DETAILS</span>
        <StepButton
          stepNumber={1}
          name="Details"
          currentStep={step}
          onClick={step === 2 ? () => setStep(1) : () => {}}
        />
        <div className="feedback__header__line">
          <Line length="25px" />
        </div>
        <StepButton stepNumber={2} name="Pay & Complete" currentStep={step} />
        <div className="feedback__header__line">
          <Line length="25px" />
        </div>
        <StepButton
          stepNumber={3}
          name="Upload Your Songs"
          currentStep={step}
        />
      </div>
      <div className="feedback__line">
        <Line blue length="100px" />
      </div>
      <div className="feedback__body">
        <div className="feedback__body__form">{renderStep()}</div>
        <div className="feedback__body__summary">
          <div className="feedback__body__summary__heading">ORDER SUMMARY</div>
          <div className="feedback__body__summary__item">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="feedback__body__summary__item">
            <span>Taxes</span>
            <span>${taxes.toFixed(2)}</span>
          </div>
          <div className="feedback__body__summary__line">
            <Line />
          </div>
          <div className="feedback__body__summary__item feedback__body__summary__item--total">
            <span>Total</span>
            <span>
              ${(subtotal + taxes).toFixed(2)}
              <span className="feedback__body__summary__item__currency">
                {" "}
                CAD
              </span>
            </span>
          </div>
          <div
            className="feedback__body__summary__button"
            onClick={() => setStep(step + 1)}
          >
            {summaryButtonText}
          </div>
        </div>
      </div>
    </div>
  );

  return renderContent();
};

Feedback.propTypes = {
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
  subtotal: PropTypes.number.isRequired,
  taxRate: PropTypes.number.isRequired,
};

export default Feedback;
