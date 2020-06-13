import React, { Component } from 'react'

//const fetch = require("node-fetch");

class Trades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trades: [1],
      error: '',
    };
  }

  componentDidMount() {
    let list = [1,2,3];
    console.log('Hello There');
    fetch('http://localhost:5000/get', {
      mode: 'cors',
    })
    .then(response => response.json())
    .then(object => {
      console.log('object:', Object.entries(object[0]))
      // take each key, value pair of the first object in the fetched array 
      //as an array and push to the array.
      Object.entries(object[0]).forEach(([key, value]) => {
        list.push([key, value])
      })
      console.log('pushed list:', list)
    })
    .then(() => {
      console.log('this is the state before:', this.state.trades)
      this.setState({trades: list})
      console.log('this is the state:', this.state.trades)
    })
  }

  render() {
    return (
        <div>
            {this.state.trades}
            {this.state.error}
        </div>
    );
  }
}

export default Trades
