
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RoomProvider } from "./context";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <RoomProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RoomProvider>
);

// reportWebVitals();