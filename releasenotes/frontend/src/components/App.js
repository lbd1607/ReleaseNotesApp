import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from "./layout/Header";
import Dashboard from "./notes/Dashboard";
import Alerts from "./layout/Alerts";

import { Provider } from "react-redux";
import store from "../store";

//Alert options
const alertOptions = {
  timeout: 3000,
  position: "bottom center"
};

//Responsible for rendering the app in the DOM from Header (layout > Header.js) and Dashboard (notes > Dashboard.js) components. Also imports Redux store from store.js and alerts.

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Fragment>
            <Header />
            <Alerts />
            <div className="container">
              <Dashboard />
            </div>
          </Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
