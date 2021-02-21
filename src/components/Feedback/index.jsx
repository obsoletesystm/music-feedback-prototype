import { connect } from "react-redux";

import { getSubtotal, getTaxRate } from "../../redux/modules/orderDetails";
import Feedback from "./components/Feedback";

const mapStateToProps = (state) => ({
  subtotal: getSubtotal(state),
  taxRate: getTaxRate(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
