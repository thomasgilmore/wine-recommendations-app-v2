import React from 'react';
// import './info.css';

class ImageRow extends React.Component {
    render() {
        return <img src={this.props.image} alt=" " />
    }
}

export default ImageRow