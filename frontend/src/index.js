import React from "react";
import reactDOM from "react-dom";
import "./fonts/Cormorant/Cormorant-SemiBoldItalic.ttf";
import "./index.css";
import App from "./components/App";
import {BrowserRouter} from "react-router-dom";

reactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById("root"));