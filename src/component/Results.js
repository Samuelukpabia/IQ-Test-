import React, {useContext} from 'react'
import { Context } from '../helpers/Context'
import { questionList } from '../helpers/QuestionList'

function Results() {

  const {score, setScore, setAawApp} = useContext(Context)

  function returnBack(){
    setAawApp("login")
    setScore(0)
  }

  return (
    <div className='results'>
      <h1>Results</h1>
      <h2>{score} / {questionList.length}</h2>
      <button onClick={returnBack}>click</button>
    </div>
  )
}

export default Results