import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./index.css";
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App />
        <ToastContainer />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
