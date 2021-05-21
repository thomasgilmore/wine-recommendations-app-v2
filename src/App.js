import React from 'react';
import './App.css';
import Title from './Components/Title';
import { Button } from './Components/Button';
import FoodDescription from './Components/FoodDescription';
import WineDescription from './Components/WineDescription';
import FoodSearch from './Components/FoodSearch';
import WineSearch from './Components/WineSearch';
import Footer from './Components/Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wineSearch: true
    };

  }

  handleChangeWinePairing() {
    this.setState({
      wineSearch: true
    });
  }

  handleChangeFoodPairing() {
    this.setState({
      wineSearch: false
    });
  }

  render() {
  return (
    <div>
      <Title />
      <div className="buttonDiv">
        {this.state.wineSearch ? <div><Button buttonStyle="wineSearch" onClick={this.handleChangeWinePairing.bind(this)}>Wine Search</Button>
          <Button buttonStyle="foodSearch" onClick={this.handleChangeFoodPairing.bind(this)}>Food Search</Button></div>
        : <div><Button buttonStyle="wineSearchFoodClicked" onClick={this.handleChangeWinePairing.bind(this)}>Wine Search</Button>
        <Button buttonStyle="foodSearchFoodClicked" onClick={this.handleChangeFoodPairing.bind(this)}>Food Search</Button></div> }
      </div>
      {this.state.wineSearch ? <WineDescription /> : <FoodDescription />}
      {this.state.wineSearch ? <WineSearch /> : <FoodSearch />}
      <Footer />
    </div>
  );
}
}

// export default App;
