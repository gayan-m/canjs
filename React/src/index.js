import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./app.css";

import Header from "./Header";
import Loader from "./Loader";
import RantList from "./RantList";
import RantDetails from "./RantDetails";
import Login from "./Login";

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="page">
        <Header />
        <section className="main layout--center">
          <div className="main__content layout--wrapped">
            <Loader 
              isLoading={false}
            />
            <Route exact path="/" component={RantList} />
            <Route exact path="/rant/:rant_id" component={RantDetails} />
            <Route exact path="/login" component={Login} />
          </div>
        </section>
      </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("äpp");
ReactDOM.render(
<App />
, rootElement);
