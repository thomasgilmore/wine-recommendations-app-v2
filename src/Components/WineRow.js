import React from 'react';
import './info.css';

class WineRow extends React.Component {
    render() {
        return <p className="info">&emsp;{this.props.text}</p>
    }
}

export default WineRow