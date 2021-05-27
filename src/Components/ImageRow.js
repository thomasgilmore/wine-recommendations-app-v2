import React from 'react';
import './imagerow.css';

class ImageRow extends React.Component {
    render() {
        return <img src={this.props.image} className="recommendationPictures" alt=" " />
    }
}

export default ImageRow