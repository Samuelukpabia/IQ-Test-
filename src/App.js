import React, { useState, useContext } from "react";
import Login from "./component/Login";
import Menu from "./component/Menu"
import Question from "./component/Question"
import Results from "./component/Results"
import { Context } from "./helpers/Context";
import "./App.css"

function App() {

  const [aawApp, setAawApp] = useState("login")
  const [userName, setUserName] = useState("")
  const [score, setScore] = useState(0)


  return (
    <div className="App">

    <h1>Test IQ...</h1>
    
    <Context.Provider value={{aawApp, setAawApp, userName, setUserName, score, setScore}}>
    {aawApp === "login" && <Login />}
    {aawApp === "menu" && <Menu />}
    {aawApp === "question" && <Question />}
    {aawApp === "results" && <Results />}
    </Context.Provider>
    

    </div>
  );
}

export default App;
