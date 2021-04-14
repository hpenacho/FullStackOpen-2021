import React, { useState } from 'react'


const NextAnecdoteButton = (props) => (
  <div>
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  </div>
)

const VoteButton = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const DisplayVoteCount = (props) => (
  <p>This joke has {props.votesQty} votes.</p>
)

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleVote = (anecdoteIndex) => {
  
  const newVotes = [...votes]
  newVotes[anecdoteIndex] += 1
  setVotes(newVotes);
  }

  return (
    <div>
      {anecdotes[selected]}
      <hr></hr>
      <NextAnecdoteButton handleClick={() => setSelected(generateRandomNumber(0, anecdotes.length - 1))} text='Next Anecdote'> </NextAnecdoteButton>
      <VoteButton handleClick={() => handleVote(selected)} text='Vote'> </VoteButton>
      <DisplayVoteCount votesQty= {votes[selected]}></DisplayVoteCount>
      <hr></hr>
    </div>
  )
}

export default App
