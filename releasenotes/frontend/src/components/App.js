import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import Dashboard from "./notes/Dashboard";

import { Provider } from "react-redux";
import store from "../store";

//Responsible for rendering the app in the DOM from Header (layout > Header.js) and Dashboard (notes > Dashboard.js) components. Also imports Redux store from store.js.

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <div className="container">
            <Dashboard />
          </div>
        </Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
