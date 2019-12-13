import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './App'
import Learn from './learn'

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/learn/:DATE" component={Learn} />
      </div>
    </Router>
  );

ReactDOM.render(routing, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById("root"));
