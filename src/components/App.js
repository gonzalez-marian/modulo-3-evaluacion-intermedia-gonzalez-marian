import React from 'react';
import '../stylesheet/App.scss';
import Data from '../api/data';
import PokeList from './PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="title-general">Mi Lista de Pokemon</h1>
        <PokeList pokes={this.state.Data} />
      </div>
    );
  }
}

export default App;
