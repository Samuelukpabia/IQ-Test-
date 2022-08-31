import React, { useContext, useState }from 'react'
import {Context} from "../helpers/Context"

function Login() {
    const { setUserName, setAawApp} = useContext(Context)


  return (
    <div className='login'>
      <h2>Enter User</h2>
        <input type="text" placeholder="user name" onChange={(event)=>{
            setUserName(event.target.value)
        }}/>
        <input type="password" placeholder="password" />
        <button onClick={()=>{
            setAawApp("menu")
        }}>Login</button>
    </div>
  )
}

export default Login
