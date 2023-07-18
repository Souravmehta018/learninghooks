//import logo from './logo.svg';
import { useEffect, useLayoutEffect, useRef } from 'react';
import './App.css';
// useLayoutEffect is used sames as useEffect just it loads before useEffect

function App() {
  useEffect(() => {
    console.log('useEffect')
  })
  useLayoutEffect(() =>{
    console.log('useLayoutEffect')
  })
  return(
    <div>
      
      
    </div>

)
  }

export default App;
