import React from 'react';
//import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';
import RouteButton from './RouteButton.js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Persons from './Persons.js';
const styles = theme => ({
    button: {
    // margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });
  const MyLink = props => <Link to="/persons" data={this.state} />
class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: null,
            nimAge: null,
            maxAge:null,
            
        }
        this.getGender = this.getGender.bind(this);
        this.getMinAge=this.getMinAge.bind(this);
        this.getMaxAge=this.getMaxAge.bind(this);

       // this.Search = this.Search.bind(this);
}

getGender(evt) {
        this.setState({gender: evt.target.value});
}
getMinAge(evt){
    this.setState({nimAge: evt.target.value});
}
getMaxAge(evt){
    this.setState({maxAge: evt.target.value});
}



// handleErrors = (response) => {
//     if (!response.ok) {
//         throw Error(response.statusText);
//     }
//     return response;
// }

// Search() {
//     const api_key = '161d130b6575207c8c50e85fd94ac56d';
//     let url = 'http://api.themoviedb.org/3/';
//     const mode = 'search/movie?query=';
//     const movieName = '&query=' + encodeURI(this.state.txt);
//     const key = '&api_key=' + api_key;

//     url = url + mode + key + movieName;

//     fetch(url)
//       .then(this.handleErrors)
//       .then(response => response.json())
//       .then(data  => this.props.getMovies(data))
//       .catch(error => this.setState({error:"There was an error in getting the movie"}));
//   }

    render() {
       
      
        return(
            <div>
              <h1>Tinder </h1>
              
             {/* <form>
            <FormGroup controlId="formControlsSelect">
      <ControlLabel>Choose partner gender:</ControlLabel>
      <FormControl componentClass="select" placeholder="select" onChange={this.getGender}>
        <option value="select">select</option>
        <option value="Male">male</option>
        <option value="Female">female</option>
      </FormControl>
    </FormGroup>
    
    <FormGroup>
    <ControlLabel>Choose partner age:</ControlLabel>
    <ControlLabel>Between</ControlLabel>
    <FormControl type="text"  onChange={this.getMinAge}  />
    <ControlLabel>And</ControlLabel>
    <FormControl type="text" onChange={this.getMaxAge}  />
  </FormGroup>
    </form>
     */}
  
    <Button  component={MyLink}  >
  find
</Button>
    {/* <RouteButton value="find"  pathname="/persons" data={this.state} /> */}
     {/* <Route path="/persons"             component={Persons} exact />  */}
 
            </div>
        )
    }
  }

  export default (styles)(Controls);