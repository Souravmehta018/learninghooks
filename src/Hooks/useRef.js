//import logo from './logo.svg';
import { useEffect, useState, useRef } from 'react';
import './App.css';

//useRef is used to manupulate or add functionality to DOM elements manually.
// eg: getting the value of an input element when button is clicked.
//eg: movingthe courcer to input element once the button is clicked.
//eg: deleting value when the button is clicked.

function App() {
  const inputRef = useRef(null)

  const onClick = () =>{
    console.log(inputRef.current.value)
    inputRef.current.focus()
  }
  const deleteInput = () =>{
    inputRef.current.value = "";
  }
  return(
    <div>
      <h1>useRef</h1>
      <br />
      <br />
      <input type="text" ref={inputRef} placeholder='Eg...' />
      <button onClick={onClick}> Get Value </button>
      <button onClick={deleteInput}> Delete Value </button>
    </div>

)
  }

export default App;
