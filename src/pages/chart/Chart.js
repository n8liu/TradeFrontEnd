import React, { Component } from 'react'
import Plot from 'react-plotly.js';

import './Chart.css'

//const fetch = require("node-fetch");

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: [],
      c: [],
      h: [],
      l: [],
      o: [],
      width: window.innerWidth,
      height: window.innerHeight,
      plot_data: [],
    };
  }

  componentDidMount() {
    let candle_number = '10';
    let x_c = [];
    let open_c = [];
    let high_c = [];
    let low_c = [];
    let close_c = [];
    const url = new URL("https://api-fxpractice.oanda.com/v3/instruments/EUR_USD/candles"), 
        params = {count:candle_number, price:'M', granularity:'M15'}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer b49191216090934ce298693219969d04-c6b5d3de45e6474d0a4834c6b3355845',
        }
    })
    .then(resp => resp.json())
    .then(data => {
        for (let i=0; i<Number(candle_number); i++) {
          x_c.push(data['candles'][i]['time']);
          open_c.push(Number(data['candles'][i]['mid']['o']));
          high_c.push(Number(data['candles'][i]['mid']['h']));
          low_c.push(Number(data['candles'][i]['mid']['l']));
          close_c.push(Number(data['candles'][i]['mid']['c']));
        }
        this.setState({time: x_c});
        this.setState({o: open_c});
        this.setState({h: high_c});
        this.setState({l: low_c});
        this.setState({c: close_c});
        this.setState({
          plot_data: [
            {
              x: this.state.time,
              close: this.state.c,
              high: this.state.h,
              low: this.state.l,
              open: this.state.o,
              type: 'candlestick',
              xaxis: 'x',
              yaxis: 'y',
            },
            {
              x: this.state.time,
              y: [1.13, 1.12, 1.13, 1.12],
              mode: 'markers',
              type: 'scatter'
            }
          ]
        })
    })
    .catch(function(error) {
        console.log(error);
    });
  }

  render() {
    return (
        <Plot data= {this.state.plot_data}
        layout={ {
            plot_bgcolor: '#EDF5E1',
            paper_bgcolor: '#EDF5E1',
            width: this.state.width, 
            height: this.state.height, 
            title: 'EUR/USD',
        } }
        />
    );
  }
}

export default Chart