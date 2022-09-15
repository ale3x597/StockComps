
import Card from '../shared/Card'
import Plot from 'react-plotly.js';
import React, { Component } from 'react'

export class IBM extends Component {
  constructor(props) {
    super(props)
    this.state ={
      stockChartXValues: [],
      stockChartYValues : []
    }
  }
  
  componentDidMount() {
    this.fetchStock();
  }
  fetchStock (){
    const pointToThis= this;
    console.log(pointToThis);

    const key = 'BTUQMAFLD01TSMOM.'
    const stock = 'IBM'
    let url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock}&outputsize=compact&apikey=${key}`;

    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(url)
    .then (
      function(response) {
        return response.json();
      }
    )
    .then (
      function(data){
       console.log(data)

       for(var key in data['Time Series (Daily)']){
        stockChartXValuesFunction.push(key);
        stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
       }
       pointToThis.setState({
        stockChartXValues : stockChartXValuesFunction,
        stockChartYValues : stockChartYValuesFunction
       })
      }
    )
  }

  render() {
    return (
     
        <Card>
          <Plot
            data={[
              {
                x: this.state.stockChartXValues,
                y: this.state.stockChartYValues,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'blue'},
              }
            ]}
            layout={ {width: 520, height: 440, title: 'IBM Stock Graph'} }
          />
        </Card>
    )
  }
}

export default IBM



