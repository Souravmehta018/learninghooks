import React, { useState } from 'react'

function useReducr() {

    const [cntr, setCntr] = useState(0)
    const [text, setText] = useState(true)
    let onClick = () => {
        setCntr(cntr + 1)
        setText(!text)
    }

  return (
    <div>
        {cntr}
        <button onClick={onClick}>Click</button>
        {text && <p> This is the text </p>} {/*If text=true?"this is the text" : " " */}
        <p> "dhfjfcgvjkhbj"</p>
    </div>
  )
}

export default useReducr