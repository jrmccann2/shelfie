import React, { Component } from 'react';
// import './reset.css';
import './App.css';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: []
    }
    this.getInventory = this.getInventory.bind(this)
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory() {
    axios.get('/api/inventory')
    .then( (res) => {
      this.setState({inventory: res.data})
      console.log(this.state.inventory)
    })
  }

  render() {
    return (
      <div className="App">
        <Dashboard inventory={this.state.inventory} refreshInventory={this.getInventory}/>
        <Form refreshInventory={this.getInventory}/>
        <Header />
      </div>
    );
  }
}

export default App;
