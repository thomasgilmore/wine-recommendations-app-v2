import React from 'react';
// import './App.css';
import Title from './Components/Title';
// import MainPhoto from './Components/MainPhoto';
// import { Button } from './Components/Button';
import Description from './Components/Description';
// import FoodDescription from './Components/FoodDescription';
// import WineDescription from './Components/WineDescription';
// import FoodSearch from './Components/FoodSearch';
import WineSearch from './Components/WineSearch';
// import Footer from './Components/Footer';

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
      <Description />
      <WineSearch />
    </div>
  );
}
}

// export default App;
