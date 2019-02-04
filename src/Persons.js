import React from 'react';
import RouteButton from './RouteButton.js';
import SearchMovie from './SearchMovie';
import Hobby from './Hobby';
//import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './image.css';


const styles = {
    card: {
      maxWidth: 345,
      margin:'0 auto',
    },
    media: {
      height: 317,
    },
  };
var temp=[];
// const persondetails = [
//     {id : 0, name : "Dizza Beimal", gender: "female", age: 55, height: 162, location: "Michmoret",
//     hobbies: ["Ceramics", "Pilatis"],
//     image:"https://content.iospress.com/media/hsm/2016/35-3/hsm-35-3-hsm0870/hsm-35-hsm0870-g010.jpg",
//     premium : true
//   },
//   {id : 1, name : "Benny Bornfeld", gender: "male", age: 53, height: 180, location: "Ein Sarid",
//   image:"http://www.links.org.il/sites/default/files/images/portrates/benny.jpg"
//   },
//   {id : 2, name : "Dana Lazovsky", gender: "female", age: 26, height: 160, location: "zikron",
//   image:"https://www.supersonas.com/tm-content/themes/persona/view/images/persona-card-img.png"
//   },
//   {id : 3, name : "Noam Weissberg ", gender: "female", age: 26, height: 160, location: "binyamina",
//   image:"http://www.studiobama.com/uploads/image/1_(6)172.jpg"
//   },
//   {id : 4, name : "Shoam Barkai ", gender: "male", age: 27, height: 180, location: "maagan michael",
//   image:"https://batsheva.co.il/public/uploads/ae2df207d5e9e27605969790e25bc51371eaa7f5.jpg"
//   },
//   {id : 5, name : "Gili Chen ", gender: "female", age: 28, height: 170, location: "maagan michael",
//   image:"https://images1.ynet.co.il/PicServer5/2017/12/20/8228906/9700475_9713178_rumble.jpg"
//   },
//   {id : 6, name : "Sapir Chen ", gender: "female", age: 27, height: 170, location: "hifa",
//   image:"https://www.barosh.co.il/wp-content/uploads/2017/07/1Z3_anisoh11111.jpg"
//   },
//   {id :7, name : "Yosef Zrno ", gender: "male", age: 35, height: 178, location: "tel aviv",
//   image:"http://www.news1.co.il/uploadimages/NEWS1Y-964199244976044.jpg"
//   },
//   {id :8, name : "Liat Shalom ", gender: "female", age: 40, height: 178, location: "tel aviv",
//   image:"http://www.womenwagepeace.org.il/wp-content/uploads/d79cd799d790d7aa-d790d7a8d791d79c.jpg"
//   },
//   {id :9, name : "Omer Choen ", gender: "male", age: 45, height: 192, location: "natania",
//   image:"https://www.dr-yarden.co.il/wp-content/uploads/2016/12/The_staff3.png"
//   },
//   {id :10, name : "Aviv Shagan ", gender: "female", age: 25, height: 160, location: "hadera",
//   image:"https://img.styleriver.co.il/product/316/143609-01_271.jpg"
//   },
// ]

var temp=[];
class Persons extends React.Component {

    constructor(props) {
        super(props);
        this.state={
           i:0,
           error: null,
           data:null
        }
        this.geti = this.geti.bind(this);
        // this.Search = this.Search.bind(this);

    }
   
    handleErrors = (response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    componentDidMount() {
        if(window.location.hostname === "localhost"){
          fetch('http://localhost:52839/api/persons')
          .then(this.handleErrors)
          .then(response => response.json())
          .then(data  => this.setState({data}))
          .catch(error => this.setState({error:"There was an error in getting the person"}));
        // const api_key = '161d130b6575207c8c50e85fd94ac56d';
        //let url = 'http://localhost:52839/api/persons';
        // const mode = 'search/movie?query=';
        // const movieName = '&query=' + encodeURI(this.state.txt);
        // const key = '&api_key=' + api_key;
        }
    else{
        // url = url + mode + key + movieName;
       
        fetch('http://proj.ruppin.ac.il/bgroup71/test1/tar3/api/persons')
          .then(this.handleErrors)
          .then(response => response.json())
          .then(data  => this.setState({data}))
          .catch(error => this.setState({error:"There was an error in getting the person"}));
      
        }}
geti=()=>{
if(this.state.i<temp.length-1){
    this.setState({i:this.state.i+1});
}
else{
    this.setState({i:0})
}

}

    render() {
        const { classes } = this.props;
        if(this.state.data!=null){
        var genderr=this.props.location.data.gender;
        var agemin=parseInt(this.props.location.data.minAge);
        var agemax=parseInt(this.props.location.data.maxAge);
         temp = this.state.data.filter((ent) => ent.Gender==genderr && ent.Age>=agemin && ent.Age<=agemax); 
   if(temp==0){
     return (<div><h1>sorry we didn't found love for you</h1>
     <img src="https://brachot.net/images/category_images/234.png" className="im"></img>
     </div>)
   }

        var path="//proj.ruppin.ac.il/bgroup71/test1/tar3/"+temp[this.state.i].Image
       
     
        return (

        <Card className={classes.card}>
        <CardActionArea  >
          <CardMedia 
            className={classes.media}
            image = {path}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              {temp[this.state.i].Name} {temp[this.state.i].FamilyName}
            </Typography>
            {/* <Typography component="p"> */}
            Age: {temp[this.state.i].Age} , Height: {temp[this.state.i].Height}, 
            Location: {temp[this.state.i].Address}, {(temp[this.state.i].Premium) && <p>Hobbies:{temp[this.state.i].Hobbiess.map((hobby,index)=> <Hobby hobby={hobby} key={index}/>)}</p>}

            {/* </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" variant="outlined"  className={classes.button} onClick={this.geti}>
            like
          </Button>
          <Button size="small" color="secondary" variant="outlined"  className={classes.button}  onClick={this.geti}>
            next
          </Button>
          <RouteButton value="home"  pathname="/" data={this.state} />
        </CardActions>
      </Card>
            )}
else{
return (
<div>
    <h1>loading</h1>
    
    </div>
)
}

        
    }

}

Persons.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(Persons);