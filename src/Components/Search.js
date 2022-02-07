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
            const pairings = searchResults.pairings
            const text = searchResults.text

            var foodRows = []

            const foodRow = <FoodRow key={pairings} food={pairings} info={text} />
            foodRows.push(foodRow)

            this.setState({rows: foodRows})
          },
          error: (xhr, status, err) => {
            console.log("Failed to fetch data")
          }
        })
      }

      searchChangeHandler(event) {
        const boundObject = this
        const searchTerm = event.target.value;
        boundObject.performSearch(searchTerm);
      }

      render() {
      return (
        <div>

          <input style={{
            backgroundColor: '#FFFFFF',
            borderColor: '#FFFFFF',
            fontSize: 24,
            display: 'block',
            width: '94%',
            margin: '1% 3% 1% 2%',
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: '1%',
            borderRadius: 10
          }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term" />

          {this.state.rows}


        </div>
      );
      }

}