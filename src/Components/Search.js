import React, { Component } from 'react';
import FoodRow from './FoodRow';
import $ from 'jquery';

require('dotenv').config()

export class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {}

        this.performSearch()
    }

    performSearch(searchTerm) {
        console.log("Perform search using spoonacular")
        const urlString = "https://api.spoonacular.com/food/wine/dishes?apiKey=" + process.env.REACT_APP_API_KEY + "&wine=" + searchTerm;
        $.ajax({
          url: urlString,
          success: (searchResults) => {
            console.log("Fetched data successfully")
            console.log(searchResults)
            // const results = searchResults
            const pairings = searchResults.pairings
            const text = searchResults.text
            // console.log(results)
    
            var foodRows = []

            const foodRow = <FoodRow key={pairings} food={pairings} info={text} />
            foodRows.push(foodRow)
    
            // results.forEach((food) => {
            //   console.log(food)
            //   const wineRow = <WineRow key={food} food={food} />
            //   wineRows.push(wineRow)
            // })
    
            this.setState({rows: foodRows})
          },
          error: (xhr, status, err) => {
            console.log("Failed to fetch data")
          }
        })
      }
    
      searchChangeHandler(event) {
        // console.log(event.target.value);
        const boundObject = this
        const searchTerm = event.target.value;
        boundObject.performSearch(searchTerm);
      }
    
      render() {
      return (
        <div>
    
          <input style={{
            fontSize: 24,
            display: 'block',
            width: '98%',
            margin: 5,
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16,
            paddingRight: -16,
            borderRadius: 10
          }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term" />
    
          {this.state.rows}
            
    
        </div>
      );
      }

}