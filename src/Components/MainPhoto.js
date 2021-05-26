import React, { Component } from 'react';
import './mainphoto.css';
import mainPhoto from '../img/louis-hansel-SQfLjVmZkDY-unsplash.jpg';

export default class MainPhoto extends Component {
    render() {
        return (
            <div className="imageContainer">
                <img src={mainPhoto} className="mainPhoto" alt="Wine and Food courtesy of Unsplash.com" />
            </div>
        )
    }
}
