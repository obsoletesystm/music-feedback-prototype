import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { UpAndComing, Ambitious } from "../../../resources/itemTypes";
import "./OrderItem.scss";

const OrderItem = ({ type, price, quantity, modifyQtyFn, upgradeItemFn }) => {
  const isBaseItem = type === UpAndComing;
  const currentDate = moment();
  const expeditedDate = currentDate.add(1, "days");
  const standardDate = isBaseItem ? currentDate.add(7, "days") : expeditedDate;

  const renderUpgrade = () => (
    <div className="order-item__upgrade">
      <span className="order-item__upgrade__pitch">
        If you want to receive feedback as early as{" "}
        <b>
          {expeditedDate.format("MMMM")} {expeditedDate.format("D")}
        </b>
        , upgrade your plan.
      </span>
      <div className="order-item__upgrade__buttons">
        {Array(quantity)
          .fill()
          .map(() => (
            <div
              className="order-item__upgrade__buttons__button"
              onClick={upgradeItemFn}
            >
              THE AMBITIOUS PRODUCER +$10.00
            </div>
          ))}
      </div>
    </div>
  );

  const renderContent = () => (
    <div className="order-item">
      <div className="order-item__header">
        <span>
          {isBaseItem ? "THE UP-AND-COMING PRODUCER" : "THE AMBITIOUS PRODUCER"}
        </span>
        <span>${price}</span>
      </div>
      <div className="order-item__quantity-picker">
        <div
          className="order-item__quantity-picker__subtract-button"
          onClick={() => modifyQtyFn(-1)}
        >
          -
        </div>
        {quantity}
        <div
          className="order-item__quantity-picker__add-button"
          onClick={() => modifyQtyFn(1)}
        >
          +
        </div>
      </div>
      <div className="order-item__remove">Remove</div>
      {isBaseItem && renderUpgrade()}
      <div className="order-item__completion">
        <b>ESTIMATED FEEDBACK COMPLETION DATE</b>
        <div className="order-item__completion__calendar">
          <div className="order-item__completion__calendar__top">
            {standardDate.format("dddd")}
          </div>
          <div className="order-item__completion__calendar__bottom">
            <div className="order-item__completion__calendar__bottom__month">
              {standardDate.format("MMMM")}
            </div>
            <div className="order-item__completion__calendar__bottom__day">
              {standardDate.format("D")}
            </div>
          </div>
        </div>
        <span className="order-item__completion__timer">
          If your songs are submitted within: <b>2 hours 30 minutes</b>
        </span>
      </div>
    </div>
  );

  return renderContent();
};

OrderItem.defaultProps = {
  upgradeItemFn: () => {},
};

OrderItem.propTypes = {
  type: PropTypes.oneOf([UpAndComing, Ambitious]).isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  modifyQtyFn: PropTypes.func.isRequired,
  upgradeItemFn: PropTypes.func,
};

export default OrderItem;
