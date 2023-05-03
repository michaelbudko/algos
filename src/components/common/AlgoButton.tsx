import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

interface AlgoButtonProps {
    name: string;
    link: string;
  }
  

function AlgoButton(props: AlgoButtonProps) {
    return (
        <div>
            <h1>{props.name}</h1>
            <Link to={props.link}>
            <button className="square-button">
                {props.name}
            </button>
            </Link>
        </div>
      );
}

export default AlgoButton;