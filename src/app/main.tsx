import "bootstrap-sass";
import "../styles/main.scss";

import * as React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {render} from "react-dom";
import counterApp from "./reducers";
import App from "./components/App";


let store = createStore(counterApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("injected-content"));
