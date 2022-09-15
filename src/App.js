import Header from './Components/Header';
import './App.css';
import Search from './Components/Search';
//import axios from 'axios';
//import React, {useState, useEffect} from 'react';
import Graph1 from './Components/Stocks/IBM';
import Graph2 from './Components/Stocks/Tesla';

function App() {
 


  // useEffect(()=> {
  //   axios.get(url)
  //   .then(res => {
  //     setStock(res.data)
  //   }).catch(error => console.log(error))
  // }, [])

  return (
    <div className="container">
      <Header/>
      <Search/>
      <Graph1/>
      <Graph2/>
    </div>
  );
}

export default App;

// BTUQMAFLD01TSMOM. 