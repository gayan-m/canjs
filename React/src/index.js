import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';

import "./app.css";

function App() {
  return (
    <div className="App">
      <h1>Eyepax JavaScript Hackathon</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />
, rootElement);

