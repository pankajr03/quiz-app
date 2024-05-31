import React from 'react'
import quizLogo from './../assets/quiz-logo.png'
const Header = () => {
  return (
    <header>
      <h1>Quiz</h1>
      <img src={quizLogo} alt='Quiz logo' />
    </header>
  )
}

export default Header
