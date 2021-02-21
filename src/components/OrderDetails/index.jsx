import { connect } from "react-redux";
import {
  getQuantity,
  getExpedited,
  getBasePrice,
  getExpeditedPrice,
  modifyQuantity,
  modifyExpedited,
} from "../../redux/modules/orderDetails";

import OrderDetails from "./components/OrderDetails";

const mapStateToProps = (state) => ({
  feedbacks: getQuantity(state),
  expeditedFeedbacks: getExpedited(state),
  basePrice: getBasePrice(state),
  expeditedPrice: getExpeditedPrice(state),
});

const mapDispatchToProps = {
  modifyQuantity,
  modifyExpedited,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
