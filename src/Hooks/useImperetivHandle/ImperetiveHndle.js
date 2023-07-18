import React from 'react';
import { useEffect, useLayoutEffect, useRef } from 'react';
import './App.css';
import child from './Hooks/useImperetivHandle/child';
// this is basically used to allow a parent component to access child component's properties.
//eg. if you click on a button in parent component it accesses the child component's properties and effect it.

function App() {
  const buttonRef = useRef(null)

  return(
    <div>
      <button onClick={() => {buttonRef.current.alterToggle}}> Parent Button</button>
      <child ref={buttonRef}/>
    </div>

)
  }

export default App;
