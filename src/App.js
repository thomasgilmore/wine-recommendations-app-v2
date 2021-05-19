// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Title from './Components/Title';
import Description from './Components/Description';
import NewSearch from './Components/NewSearch';
import { Search } from './Components/Search';
import { SearchFood } from './Components/SearchFood';
// import { Button } from './Components/Button';
import Footer from './Components/Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      check: true
    };
  }

  handleChangeDishPairingForWine() {
    this.setState({
      check: true
    });
  }

  handleChangeWinePairing() {
    this.setState({
      check: false
    });
  }

  render() {
  return (
    <div>
      <Title />
      <Description />
      <NewSearch />
      <Footer />
    </div>
  );
}
}

// export default App;
