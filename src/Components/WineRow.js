import React from 'react';

class WineRow extends React.Component {
    render() {
        return <table key={this.props.wine}>
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

export default WineRow