import React, { Component } from 'react';
import './description.css';

export default class Description extends Component {
    render() {
        return (
            <div className="descriptionDiv">
                <div className="textDiv">
                    <p className="description">&emsp;Find a dish that goes well with a given wine (ex. Malbec, Pinot Grigio, Rose Wine, ... etc.).&nbsp; Also you can find a wine that goes well with a food.&nbsp; Food can be a dish name ("steak"), an ingredient name ("salmon"), or a cuisine ("Italian").</p>
                </div>
            </div>
        )
    }
}
