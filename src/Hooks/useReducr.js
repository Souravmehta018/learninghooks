import React, { useState } from 'react'

function useReducr() {

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
  //   const [cntr, setCntr] = useState(0)
  //   const [text, setText] = useState(true)
  //   let onClick = () => {
  //       setCntr(cntr + 1)
  //       setText(!text)
  //   }

  // return (
  //   <div>
  //       {cntr}
  //       <button onClick={onClick}>Click</button>
  //       {text && <p> This is the text </p>} {/*If text=true?"this is the text" : " " */}
  //       <p> "dhfjfcgvjkhbj"</p>
  //   </div>
  // )
}

export default useReducr