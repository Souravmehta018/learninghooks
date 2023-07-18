import { forwardRef, useImperativeHandle } from "react"
import React, {useState}from 'react'


const child = forwardRef((props, ref) => {

    const [toggle, setToggle] = useState(false)
    
    useImperativeHandle(ref, () => ({
      alterToggle() {
        setToggle(!toggle)
      },
    }))   //a function to handel parts of this component, which can be accessed outside is created
  return (
    <div>
        <button> Child Button </button>
        {toggle && <span> Toggle </span>}
    </div>
  )
})

export default child