import "bootstrap-sass";
import "../styles/main.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";

import Counter from "./components/Counter";

ReactDOM.render(
    <Counter />,
    document.getElementById("injected-content"));
