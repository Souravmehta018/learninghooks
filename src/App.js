//import logo from './logo.svg';
//import { useState } from 'react';
import './App.css';
import { useReducer } from 'react';

const reducer = (allStates, action) =>{
  switch(action.type){
    case 'increment':
            return {...allStates, count: allStates.count + 1};
          case 'decrement':
            return {...allStates, count: allStates.count - 1};
          case'toggleShowText':
            return {...allStates, showText:!allStates.showText};
          default:
            return allStates;
  }
}
function App() {
  const [allStates, dispatch] = useReducer(reducer, {count: 0 , showText: true});
const clicked = () =>{
    dispatch({type: 'increment'});
    dispatch({type: 'toggleShowText'});
}
  return(
    <div className="app">
      <h1>{allStates.count}</h1>
      <button onClick={clicked}> Click here </button>
      {allStates.showText && <p> This is the text </p>}
    </div>
  )
  }

  // const [cntr, setCntr] = useState(0)
  // const [text, setText] = useState(true)
  // let onClick = () => {
//       setCntr(cntr + 1)
//       setText(!text)
//   }

// return (
//   <div>
//       {cntr}
//       <button onClick={onClick}>Click</button>
//       {text && <p> This is the text </p>} {/*If text=true?"this is the text" : " " */}
//   </div>
// )


export default App;
