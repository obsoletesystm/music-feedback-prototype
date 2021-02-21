import React from "react";
import PropTypes from "prop-types";
import StepButton from "./StepButton";
import OrderDetails from "../../OrderDetails";
import Line from "./Line";
import "./Feedback.scss";

const Feedback = ({
  basePrice,
  expeditedPrice,
  feedbackQty,
  expeditedQty,
  subtotal,
  taxRate,
}) => {
  const taxes = subtotal * taxRate;

  const renderContent = () => (
    <div className="feedback">
      <div className="feedback__header">
        <span className="feedback__header__details">ORDER DETAILS</span>
        <StepButton step={1} name="Details" status="current" />
        <div className="feedback__header__line">
          <Line length="25px" />
        </div>
        <StepButton step={2} name="Pay & Complete" />
        <div className="feedback__header__line">
          <Line length="25px" />
        </div>
        <StepButton step={3} name="Upload Your Songs" />
      </div>
      <div className="feedback__line">
        <Line blue length="75px" />
      </div>
      <div className="feedback__body">
        <div className="feedback__body__form">
          <OrderDetails />
        </div>
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
          <div className="feedback__body__summary__button">
            Continue to Payment
          </div>
        </div>
      </div>
    </div>
  );

  return renderContent();
};

Feedback.propTypes = {
  basePrice: PropTypes.number.isRequired,
  expeditedPrice: PropTypes.number.isRequired,
  feedbackQty: PropTypes.number.isRequired,
  expeditedQty: PropTypes.number.isRequired,
  subtotal: PropTypes.number.isRequired,
  taxRate: PropTypes.number.isRequired,
};

export default Feedback;
