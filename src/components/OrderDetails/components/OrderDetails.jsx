import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { UpAndComing, Ambitious } from "../../../resources/itemTypes";
import OrderItem from "./OrderItem";

const OrderDetails = ({
  feedbacks,
  expeditedFeedbacks,
  basePrice,
  expeditedPrice,
  modifyQuantity,
  modifyExpedited,
}) => {
  const upgradeItem = () => {
    modifyQuantity(-1);
    modifyExpedited(1);
  };

  const renderContent = () => (
    <Fragment>
      <OrderItem
        type={UpAndComing}
        price={basePrice}
        quantity={feedbacks}
        modifyQtyFn={modifyQuantity}
        upgradeItemFn={upgradeItem}
      />
      {expeditedFeedbacks && (
        <OrderItem
          type={Ambitious}
          price={expeditedPrice}
          quantity={expeditedFeedbacks}
          modifyQtyFn={modifyExpedited}
        />
      )}
    </Fragment>
  );

  return renderContent();
};

export default OrderDetails;
