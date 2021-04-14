import React, { useState } from 'react'

const NextAnecdoteButton = (props) => <button onClick={props.handleClick}> {props.text} </button>
  
const VoteButton = (props) => <button onClick={props.handleClick}> {props.text} </button>

const DisplayVoteCount = (props) => <p>This joke has {props.votesQty} votes.</p>

const DisplayTopAnecdote = (props) => {
  const maxVotes = Math.max(...props.votesArray);
  const topAnecIndex = props.votesArray.indexOf(maxVotes);

  if(maxVotes > 0)
    return <p>{props.anecdotesArray[topAnecIndex]}</p> 
  
  else
    return <p>No anectodes have been voted so far.</p>
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const generateRandomNumber = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

  const handleVote = (anecdoteIndex) => {
    const newVotes = [...votes];
    newVotes[anecdoteIndex] += 1;
    setVotes(newVotes);
  }

  return (
    <div>
      <h2> Daily Anecdote </h2>
      <p>{anecdotes[selected]}</p>
      <hr></hr>
      <NextAnecdoteButton handleClick={() => setSelected(generateRandomNumber(0, anecdotes.length - 1))} text='Next Anecdote'> </NextAnecdoteButton>
      <VoteButton handleClick={() => handleVote(selected)} text='Vote'> </VoteButton>
      <DisplayVoteCount votesQty={votes[selected]}></DisplayVoteCount>
      <hr></hr>
      <h2> Most Voted Anecdote </h2>
      <DisplayTopAnecdote anecdotesArray = {anecdotes} votesArray = {votes}></DisplayTopAnecdote>
    </div>
  )
}

export default App
