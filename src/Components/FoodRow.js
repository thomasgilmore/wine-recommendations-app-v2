import React from 'react';

class FoodRow extends React.Component {
    render() {
        return <table key={this.props.food}>
        <tbody>
          <tr>
            <td>
              {this.props.info}
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default FoodRow