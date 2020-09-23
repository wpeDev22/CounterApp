import React from 'react';
import logo from './logo.svg';
import Counter from './counter';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="container">
      <div className="row  col-md-6 offset-md-3  justify-content-center">

        <Counter />



      </div>
    </div>
  );
}

export default App;
