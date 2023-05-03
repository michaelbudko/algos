import React from 'react';
import { Link } from 'react-router-dom';
import AlgoButton from '../common/AlgoButton';

function Home() {
    const algos = [
        {
         name: "Linear Regression",
         link: "/LinearRegression"
        }
    ]
    return (
      <div className="App">
        <h1>Choose an Algorithm</h1>
        {algos.map((algo) => (
            <AlgoButton name={algo.name} link={algo.link}/>
        ))}
      </div>
    );
  }
  
  export default Home;
  