//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  const [inputVal,setInputVal] = useState("the text here changes");
  let Change = (event) =>{
    setInputVal(event.target.value);
  }
  const [counter,setCounter] = useState(0);
  let Click = () =>{
    setCounter(counter+1);
  }
  return (
    <div className="App">
      <h1> Learning Use States </h1>
      <input type="text" onChange= {Change}></input>
        {inputVal}
        <br></br>
      {counter}
      <button onClick={Click}> counters</button>
    </div>
  );
}

export default App;
