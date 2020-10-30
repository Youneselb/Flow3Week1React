import React,{ useState, useEffect } from 'react';
import './App.css';
import MemberDemo from "./ListDemo";

function Buttons(props) {

  const [count, setCount] = useState(props.update);
  
  return (
    <div>
      <p> PRESS A BUTTON! {count} </p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + props.update)}>
        Press button to increment!
      </button>
      
      <button onClick={() => setCount(count - props.update)}>
      Press button to decrement!
      </button>
    </div>
  );
}

function GetChuckJoke(){

  let urlChuck =  'https://api.chucknorris.io/jokes/random'; 
  let urlDad = 'https://icanhazdadjoke.com/';
 
  const [fetchedJoke, setFetchedJoke] = useState([]);
  const[dadJoke, setDadJoke] = useState([]);
 
 
  const jokeHandler = () => {
      fetch(urlChuck)
      .then(res => res.json())
      .then(data => {
      setFetchedJoke(data);
      });
  };
  
 
  useEffect(() => {
   const interval = setInterval(() => {
     setDadJoke(
       fetch(urlDad, {
         headers: new Headers({
           accept: "application/json"
         })
       })
         .then(res => res.json())
         .then(data => {
           setDadJoke(data);
         })
     );
   }, 10000);
   return () => clearInterval(interval);
 }, []);
 
 
  return (
    <div>
    <button onClick={jokeHandler}>ChuckJoke</button>
    <p>{fetchedJoke.value}</p>
    <h3>Here Comes the Dad Jokes every 10'th second</h3>
    <p>{dadJoke.joke}</p>
    
    </div>
  );
 
 }
 
 function App() {
  return (
    <div className="App">
     
     <h1>Exercise 1</h1>
     <Buttons update = {5}/>
     
      <h2>Exercise 2</h2>
       <GetChuckJoke/>
       
       <h3>Exercise 3</h3>
          <MemberDemo/>
  
      
    </div>
  );
}

  



export default App;
