import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";

import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Roboto", "sans-serif"]
  }
});

ReactDOM.render(<App />, document.getElementById("root"));
