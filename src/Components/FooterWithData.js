import React, { Component } from 'react';
import './footerwithdata.css';

export default class FooterWithData extends Component {
    render() {
        return (
            <div className="icons8">
                Wine Recommendations App by <a target="_blank" href="https://github.com/thomasgilmore95" rel="noreferrer">Thomas</a>. API used for Wine Recommendations App by <a target="_blank" href="https://spoonacular.com/food-api" rel="noreferrer">Spoonacular</a>. Main picture from <a target="_blank" href="https://unsplash.com/">Unsplash</a>. Food and Wine Pictures from <a target="_blank" href="https://pixabay.com/sk/service/about/api/">Pixabay</a>. <a target="_blank" href="https://icons8.com/icons/set/wine-glass--v2" rel="noreferrer">Wine Glass icon</a> by <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a>
            </div>
        )
    }
}
