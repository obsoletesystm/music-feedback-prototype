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

OrderDetails.propTypes = {
  feedbacks: PropTypes.number.isRequired,
  expeditedFeedbacks: PropTypes.number.isRequired,
  basePrice: PropTypes.number.isRequired,
  expeditedPrice: PropTypes.number.isRequired,
  modifyQuantity: PropTypes.func.isRequired,
  modifyExpedited: PropTypes.func.isRequired,
};

export default OrderDetails;
