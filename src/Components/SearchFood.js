import React, { Component } from 'react';
import WineRow from './WineRow';
import $ from 'jquery';

require('dotenv').config()

export class SearchFood extends Component {

    constructor(props) {
        super(props)
        this.state = {}

        this.performSearch()
    }

    performSearch(searchTerm) {
        console.log("Perform search using spoonacular")
        const urlString = "https://api.spoonacular.com/food/wine/pairing?apiKey=" + process.env.REACT_APP_API_KEY + "&food=" + searchTerm;
        $.ajax({
          url: urlString,
          success: (searchResults) => {
            console.log("Fetched data successfully")
            console.log(searchResults)
            // const results = searchResults
            const pairedWines = searchResults.pairedWines
            const pairingText = searchResults.pairingText
            const productMatches = searchResults.productMatches
            // console.log(results)
    
            var wineRows = []

            const wineRow = <WineRow key={pairedWines} wine={pairedWines} info={pairingText} product={productMatches} />
            wineRows.push(wineRow)
    
            // results.forEach((food) => {
            //   console.log(food)
            //   const wineRow = <WineRow key={food} food={food} />
            //   wineRows.push(wineRow)
            // })
    
            this.setState({rows: wineRows})
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