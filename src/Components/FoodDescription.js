import React, { Component } from 'react';
import './description.css';

export default class FoodDescription extends Component {
    render() {
        return (
            <div>
                <p className="description">&emsp;Find a wine that goes well with food. Food can be a dish name ("steak"), an ingredient name ("salmon"), or a cuisine ("Italian").</p>
            </div>
        )
    }
}
