import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./root";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import {MailList} from "./context/mailContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MailList>
      <Root />
    </MailList>
  </React.StrictMode>
);
