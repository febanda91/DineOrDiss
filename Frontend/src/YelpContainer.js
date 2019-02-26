import React, { Component } from "react";
import axios from "axios";
import { API_KEY } from "./constants";
import RestaurantList from "./RestaurantList"






const config = {
    method: 'GET',
    headers: {'Authorization': `Bearer ${API_KEY}`},
    params: {
        term: 'pasta',
        latitude: 29.760799,
        longitude: -95.369507,
        sort_by: 'distance',
        limit: 10
    }
}

export class YelpContainer extends Component {

    constructor(){
        super()
        this.state = {
            restaurants: [],
            isLoading: false,
            
            
        }
    }


// axios uses 
  componentWillMount(){
    
      axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', config)
      .then(res => {
          this.setState({
              restaurants: res.data.businesses,
              isLoading: true
          })
      })
  }

//   sendToDetail = (selectedRestaurant) => {
//       console.log(selectedRestaurant)
//   }

  render() {
      console.log(this.state.restaurants)
    return (
        <div>
          {this.state.isLoading ?  <h1>Choose a place to eat!</h1> : <h1>Loading...</h1>}
            <RestaurantList restaurants={this.state.restaurants} info={this.sendToDetail}/>
        </div>
    );
  }
}

export default YelpContainer;
