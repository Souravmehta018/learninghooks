//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';



function App() {
  const [counter,setCounter] = useState(0);
  let Click = () =>{
    setCounter(counter+1);
  }
  useEffect(() => {
    console.log("the API was successfully called")
  }, [counter])

  return(
    <div>
      <br/>
      <br/>        
      {counter}
      <button onClick={Click}> counters</button>
    </div>

)
  }

export default App;
