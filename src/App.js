import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './Persons';
import Actors from './Actors.js';
import MovieDetails from './MovieDetails.js';
import { Route, Link, HashRouter as Router } from 'react-router-dom';
import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';
import Controls from './Controls';
import Persons from './Persons';
import CustomizedSelects from './tomer';
import './back.css';




class App extends Component {
  render() {
    return (
      
      <div className="App">
<h1>Tinder</h1>
        <Router>
          <div>
            
             <Route path="/"             component={CustomizedSelects} exact />
             <Route path="/persons"             component={Persons}  />



{/* <Route path="/persons" component={MovieDetails} />         */}

            {/* <Route path="/"             component={Movies} exact />
            <Route path="/actors"       component={Actors} />
            <Route path="/moviedetails" component={MovieDetails} />
            <h1>Some footer</h1> */}
            
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
