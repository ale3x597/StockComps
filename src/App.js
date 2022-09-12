import Header from './Components/Header';
import './App.css';
import Search from './Components/Search';
//import axios from 'axios';
//import React, {useState, useEffect} from 'react';
import Stock from './Components/Stock';

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
      <Stock/>
    </div>
  );
}

export default App;

// BTUQMAFLD01TSMOM. 