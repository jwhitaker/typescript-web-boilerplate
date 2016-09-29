import "bootstrap-sass";
import "../styles/main.scss";

import * as React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import * as ReactDOM from "react-dom";

import {Counter, reducer} from "./components/Counter";


let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>,
    document.getElementById("injected-content"));
