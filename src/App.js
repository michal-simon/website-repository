import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Nav from "./components/Navigation";
import Professional from "./components/Professional";
import Personal from "./components/Personal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aintmuch from "./components/aintmuch.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faReact,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/professional" component={Professional} />
          <Route path="/personal" component={Personal} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="home-page">
    <div>
      <img src={Aintmuch} alt="Ain't much but its' honest work meme" />
    </div>
    <br />
    <div className="intro">
      <p>
        My name is Cristina Dobre, and this is my first project.
        <br /> I have used in here:
      </p>

      <ul>
        <li>
          <a className="prog" href="https://github.com/" target="blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </a>
        </li>
        <br />
        <li>
          <a className="prog" href="https://reactjs.org/" target="blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faReact} />
            React
          </a>
        </li>
        <br />
        <li>
          <a
            className="prog"
            href="https://www.w3schools.com/html/"
            target="blank" rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faHtml5} />
            HTML
          </a>
        </li>
        <br />
        <li>
          <a
            className="prog"
            href="https://www.w3schools.com/css/"
            target="blank" rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faCss3} />
            CSS
          </a>
        </li>
        <br />
      </ul>
    </div>
  </div>
);

export default App;
