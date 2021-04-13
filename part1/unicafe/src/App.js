import React, { useState } from 'react'

const Statistics = (props) => {
const good = props.feedback[0];
const neutral = props.feedback[1];
const bad = props.feedback[2];

  const total = () => {
    return good + neutral + bad;
  }

  const average = () => {
    return (good-bad) / total();
  }

  const positiveRatio = () =>{ 
    return (good * 100) / total()
  }

  return (
  <>
  <div>
        <h3>Feedback Statistics</h3>
        <p>Good - {good}</p>
        <p>Neutral - {neutral}</p>
        <p>Bad - {bad}</p>
  </div>

      <div>
        <p> Total Feedback: {total()} </p>
        <p> Average Feedback: {average()} </p>
        <p> Positive ratio: {positiveRatio()} % </p>        
      </div>
  </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const feedbackArray = [good, neutral, bad];

  return (
    <>
    <div>
      <h3>Give us feedback!</h3>
      <button onClick={() => setGood(good + 1)}>
        Good
      </button>

      <button onClick={() => setNeutral(neutral + 1)}>
        Neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        Bad
      </button>
      </div>

      <div>
        <Statistics feedback={feedbackArray}></Statistics>
        </div>
      
    </>

  )
}

export default App