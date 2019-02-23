import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./app.css";

import RantList from "./RantList";
import Header from "./Header";
import Loader from "./Loader";

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <Header />
        <section className="main layout--center">
          <div className="main__content layout--wrapped">
            <Loader 
              isLoading={true}
            />
            <RantList />
          </div>
        </section>
      </div>
    );
  }
}

const rootElement = document.getElementById("äpp");
ReactDOM.render(<App />, rootElement);
