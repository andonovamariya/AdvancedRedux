import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import store from "./components/store/index";

import App from "./App";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);