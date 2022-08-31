import React, { useState, useContext } from 'react'
import { Context } from "../helpers/Context";
import { questionList } from '../helpers/QuestionList'

function Question() {

  const {score, setScore, setAawApp} = useContext(Context)

  const [showQuestion, setShowQuestion] = useState(0)
  const [OptionChosen, setOptionChosen] = useState("")

  function next(){
    if(questionList[showQuestion].Answer === OptionChosen){
      setScore(score + 1)
    }
    setShowQuestion(showQuestion + 1)
  }
  function finished(){
    if(showQuestion === questionList[showQuestion].Answer){
      setScore(score + 1)
    }
    setAawApp("results")
  }


  return (
    <div className='question'>
        <h2>{questionList[showQuestion].ques}</h2>

        <div className='question-btn'>
        <button onClick={()=>{
          setOptionChosen("A")
        }}>{questionList[showQuestion].OptionA}</button>
        <button  onClick={()=>{
          setOptionChosen("B")
        }}>{questionList[showQuestion].OptionB}</button>
        <button  onClick={()=>{
          setOptionChosen("C")
        }}>{questionList[showQuestion].OptionC}</button>
        <button  onClick={()=>{
          setOptionChosen("D")
        }}>{questionList[showQuestion].OptionD}</button>
        </div>
        
        {showQuestion === questionList.length - 1 ? 
          <button className='btn-2' onClick={finished}>Submit</button> :
          <button className='btn-2' onClick={next}>Next</button>
        }
        
        
    </div>
  )
}

export default Question