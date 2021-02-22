import React, { Fragment } from "react";
import Icon from "../../Icon";
import Creditcard from "./Creditcard";
import "./Payment.scss";

const Payment = () => {
  const renderContent = () => (
    <div className="payment">
      <Icon icon="radio_button_checked" label="Credit Card" dark />
      <div className="payment__full-line" />
      <Creditcard />
    </div>
  );

  return renderContent();
};

export default Payment;
