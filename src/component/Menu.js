import React, { useContext }from 'react'
import {Context} from "../helpers/Context"

function Menu() {
const { userName, setAawApp } = useContext(Context)

  return (
    <div className='menu'>
        <h2>Wellcome: {userName}</h2>
        <button onClick={()=>{
            setAawApp("question")
        }}>Start</button>
    </div>
  )
}

export default Menu