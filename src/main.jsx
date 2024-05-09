import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProvider } from "./context/context.jsx";
import { Provider } from "react-redux";
import store from "./store/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <ChakraProvider>
          <Router>
            <App />
          </Router>
        </ChakraProvider>
      </AppProvider>
    </Provider>
  </React.StrictMode>
);
