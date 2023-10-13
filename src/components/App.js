import React, { useEffect, useState } from "react";
 import "../styles/App.css";

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const App = () => {
   const [data, setData]= useState("")
   const [loading, setloading] = useState(false);
  const getData=async()=>{
    setloading(true)
   const res = await fetch("https://api.quotable.io/random");
   const data = await res.json();
   setData(data)
   setloading(false)
  }
  useEffect(()=>{
   getData()
  },[])

    return (
      <div id="main">
      {loading?<div style={{color: "white"}}>Loading Data....</div>:<div id="wrapper">
          <div className="quote-text">{data.content}</div>
          <div className="quote-author">{data.author}</div>
          <button id="new-quote" className="button" onClick={() => getData()}>Next Quote</button>
        </div>}
      </div>
    );
};

export default App;
