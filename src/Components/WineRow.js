import React from 'react';
import './info.css';

class WineRow extends React.Component {
    render() {
        return <p key={this.props.wine} className="info">&emsp;{this.props.info}</p>
    }
}

export default WineRow