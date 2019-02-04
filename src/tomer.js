import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import React from 'react';
import RouteButton from './RouteButton.js';
import Persons from './Persons.js';


const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 80px 10px 50px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const styles = theme => ({
  root: {
    // display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});
class CustomizedSelects extends React.Component {
    state = {
        gender:'',
        minAge:'',
        maxAge:'',
    };
  
    handleChange = (event) => {
      
      const {name,value,id}=event.target
      this.setState({ [name]:value})
     
    };
  
    render() {
      const { classes } = this.props;
  
      return (
        <div>
        
        <form className={classes.root} autoComplete="off">
        
                <FormControl className={classes.margin}>
          <InputLabel htmlFor="age-customized-select" className={classes.bootstrapFormLabel}>
            Gender
          </InputLabel>
          <Select
            value={this.state.gender}
            onChange={this.handleChange}
            input={<BootstrapInput name="gender" id="age-customized-select" />}
          >
            <MenuItem value="">
              <em></em>
            </MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            
          </Select>
        </FormControl>
             
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="age-customized-select" className={classes.bootstrapFormLabel}>
            Min Age
          </InputLabel>
          <BootstrapInput 
           value={this.state.minAge}
           name='minAge'
           onChange={this.handleChange}/>
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="age-customized-select" className={classes.bootstrapFormLabel}>
            max Age
          </InputLabel>
          <BootstrapInput 
           value={this.state.maxAge}
           name='maxAge'
           onChange={this.handleChange}/>
        </FormControl>

        
      </form>
        <RouteButton value="find"  pathname="/persons" data={this.state} /> 
      </div>
    );
  }
}
  
  CustomizedSelects.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(CustomizedSelects);