import React from 'react';
import './App.css';
import person, { males, females } from "./file2"

const {firstName, email} = person;



function App2() {
    console.log(...males,"Kurt",...females,"Tina");
   
    return (
    <div className="App">
        <h1>Exercise 2</h1>
        <p>Name: {firstName}, E-mail: {email}</p>
    </div>
  );
}

export default App2;    