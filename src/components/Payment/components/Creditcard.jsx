import React from "react";
import PropTypes from "prop-types";
import "./Creditcard.scss";

const Creditcard = () => (
  <div className="creditcard">
    <div className="creditcard__box">
      <span className="creditcard__box__header">CARD INFORMATION</span>
      <span className="creditcard__box__message">
        We accept the following cards.
      </span>
      <img src="creditcards.png" width="128px" />
      <div className="creditcard__box__row">
        <div className="creditcard__box__row__input">
          <span className="creditcard__box__row__input__label">
            Card Number
          </span>
          <input type="text" className="creditcard__box__row__input__field" />
        </div>
      </div>
      <div className="creditcard__box__row">
        <div className="creditcard__box__row__input">
          <span className="creditcard__box__row__input__label">
            Cardholder Name
          </span>
          <input type="text" className="creditcard__box__row__input__field" />
        </div>
      </div>
      <div className="creditcard__box__row">
        <div className="creditcard__box__row__input">
          <span className="creditcard__box__row__input__label">
            Expiry Date
          </span>
          <select className="creditcard__box__row__input__select" />
        </div>
        <div className="creditcard__box__row__input">
          <span className="creditcard__box__row__input__label">CVV</span>
          <input
            type="text"
            className="creditcard__box__row__input__field creditcard__box__row__input__field--small"
          />
        </div>
      </div>
    </div>
    <div className="creditcard__box">
      <span className="creditcard__box__header">BILLING ADDRESS</span>
      <div className="creditcard__box__row">
        <div className="creditcard__box__row__input">
          <span className="creditcard__box__row__input__label">First Name</span>
          <input type="text" className="creditcard__box__row__input__field" />
        </div>
        <div className="creditcard__box__row__input">
          <span className="creditcard__box__row__input__label">Last Name</span>
          <input type="text" className="creditcard__box__row__input__field" />
        </div>
      </div>
      <div className="creditcard__box__row">
        <div className="creditcard__box__row__input">
          <span className="creditcard__box__row__input__label">Address</span>
          <input
            type="text"
            className="creditcard__box__row__input__field creditcard__box__row__input__field--large"
          />
        </div>
      </div>
      <div className="creditcard__box__row">
        <div className="creditcard__box__row__input">
          <span className="creditcard__box__row__input__label">City</span>
          <input type="text" className="creditcard__box__row__input__field" />
        </div>
        <div className="creditcard__box__row__input">
          <span className="creditcard__box__row__input__label">Province</span>
          <select className="creditcard__box__row__input__select" />
        </div>
        <div className="creditcard__box__row__input">
          <span className="creditcard__box__row__input__label">
            Postal Code
          </span>
          <input
            type="text"
            className="creditcard__box__row__input__field creditcard__box__row__input__field--small"
          />
        </div>
      </div>
      <div className="creditcard__box__row">
        <div className="creditcard__box__row__input">
          <span className="creditcard__box__row__input__label">Country</span>
          <select className="creditcard__box__row__input__select" />
        </div>
      </div>
    </div>
  </div>
);

export default Creditcard;
