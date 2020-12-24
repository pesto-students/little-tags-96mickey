import React from "react";
import { Route, Switch } from "react-router-dom";
import { NotFound, Header, Footer } from "components";
import { connect } from "react-redux";
import { simpleAction } from "./actions";
import { Home } from "containers";

const contactInfoData = [
  { key: "Phone:", value: "(+91) 9876 543 210" },
  {
    key: "Address:",
    value:
      "1418 Riverwood Drive, Suite 3245 Cottonwood, CA 96052, United State",
  },
];

const cardUrls = [
  require("./assets/images/mastercard_inverse.svg").default,
  require("./assets/images/jcb_inverse.svg").default,
  require("./assets/images/paypal_inverse.svg").default,
  require("./assets/images/visa_inverse.svg").default,
  require("./assets/images/amazon_inverse.svg").default,
];

const categories = [
  { key: "Accessories", value: "(45)", goTo: "/prod" },
  { key: "Jeans", value: "(278)", goTo: "/prod" },
  { key: "Tops", value: "(64)", goTo: "" },
  { key: "Jactkets", value: "(3)", goTo: "" },
];

const mapDispatchToProps = (dispatch) => ({
  simpleAction: () => dispatch(simpleAction()),
});

const mapStateToProps = (state) => ({
  ...state,
});

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route component={NotFound} />
      </Switch>
      <Footer {...{ contactInfoData, cardUrls, categories }} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
