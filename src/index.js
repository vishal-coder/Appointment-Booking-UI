import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./features/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <SocketContext.Provider value={socket}> */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
      {/* </SocketContext.Provider> */}
    </BrowserRouter>
  </Provider>
);
