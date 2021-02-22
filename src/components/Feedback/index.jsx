import { connect } from "react-redux";

import { getSubtotal, getTaxRate } from "../../redux/modules/orderDetails";
import { getStep, setStep } from "../../redux/modules/step";
import Feedback from "./components/Feedback";

const mapStateToProps = (state) => ({
  step: getStep(state),
  subtotal: getSubtotal(state),
  taxRate: getTaxRate(state),
});

const mapDispatchToProps = {
  setStep,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
