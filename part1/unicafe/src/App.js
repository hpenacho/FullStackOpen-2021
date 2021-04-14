import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
        {props.text}
  </button>
)

const Statistic = (props) => {
  return(
   <tbody> 
     <tr> 
      <td>{props.text}:</td><td>{props.value}</td>
    </tr>
    </tbody>
        )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + bad + neutral;

  const stats = (tot) => {
    if(tot > 0){
    return (
      <>
      <table>
        <Statistic text="Good" value={good}></Statistic>
        <Statistic text="Neutral" value={neutral}></Statistic>
        <Statistic text="Bad" value={bad}></Statistic>
        <Statistic text="Total" value = {total}></Statistic>
        <Statistic text="Average" value =  {(good-bad) / total}></Statistic>
        <Statistic text="Positive Ratio" value = {(good * 100) / total}></Statistic>
        </table>
    </>
    )}
    else
    return <p>No Feedback received yet.</p>
  }
  
  return (
    <>
    <div>
      <h3>Give us feedback!</h3>
      <Button handleClick={() => setGood(good + 1)} text="Good"></Button>
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral"></Button>
      <Button handleClick={() => setBad(bad + 1)} text="Bad"></Button>
      </div>

      <div>
      <h3>Feedback Statistics</h3>    
      {stats(total)}            
        </div>    
    </>
  )
}

export default App