import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
// import App from "./App"
import Routercomponent from "./RouterComponent"

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Routercomponent,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
