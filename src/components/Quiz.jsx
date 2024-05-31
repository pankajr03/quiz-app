import React, { act, useState } from 'react'
import QUESTIONS from '../questions'
import quizCompletedImg from '../assets/quiz-complete.png'
const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([])
    const activeQuestioinIndex = userAnswers.length
   
       
    const handleSelectedAnswer = (selectedAnswer) => {
        setUserAnswers((prevUserAnswers)=> {
            return [...prevUserAnswers, shuffledAnswers]
        })
    }


    const shuffledAnswers = QUESTIONS[activeQuestioinIndex].answers
    const quizCompleted  = activeQuestioinIndex === shuffledAnswers.length
    if (quizCompleted) {
        return (
            <div id="summary">
                <h2>Quiz completed</h2>
                <img src={quizCompletedImg} alt='Completed' />
            </div>
        )
    }
    shuffledAnswers.sort(() => Math.random() - 0.5)


  return (
    <div id="quiz">
        <div id="questions">
        <h2>{QUESTIONS[activeQuestioinIndex].text}</h2>
        <ul id="answers">
            {shuffledAnswers.map((answer, key)=> {
                return (
                    <li className='answer' key={answer}>
                        <button onClick={()=> handleSelectedAnswer(answer)}>{answer}</button>
                    </li>
                )
            })}
        </ul>
        </div>
    </div>
  )
}

export default Quiz