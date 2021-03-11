import React from 'react';
import './info.css';

class FoodRow extends React.Component {
    render() {
        return <p className="info" key={this.props.food}>
              {this.props.info}
            </p>
    }
}

export default FoodRow