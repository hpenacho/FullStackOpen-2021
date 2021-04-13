import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good+neutral+bad;

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
        <h3>Feedback Statistics</h3>
        <p>Good - {good}</p>
        <p>Neutral - {neutral}</p>
        <p>Bad - {bad}</p>
      </div>

      <div>
        <p> Total Feedback: {total} </p>
        <p> Average Feedback: {(good - bad) / total} </p>
        <p> Positive ratio: {(good * 100) / total} % </p>
        </div>
      
    </>

  )
}

export default App