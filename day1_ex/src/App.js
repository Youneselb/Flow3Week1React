import './App.css';
import upper, {text1,text2, text3} from "./file1";
import person, {males, females} from "./file2";

const {firstName, email} = person;









function App() {
 
  return (

<div className="App">
     <h1>Exercise 1</h1>
      <p>{upper("Please uppercase me!")}</p>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <h2>Excercise 2</h2>
    console.log(...males,"Peter",...females,"Janne");
      <p>Name: {firstName}, E-mail: {email}</p>
   

    </div>
  );


}

export default App;
