import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.courseName}</h1>
    </>
  );
}

const Content = (props) => {
  return (
    <>
      <p>
        {props.partName} {props.qtyExercises}
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Total number of exercises: {props.totalExercises}</p>
    </>
  )

}

const App = () => {
  const course = 'Half Stack application development' //header
  const part1 = 'Fundamentals of React' // content
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header courseName={course} />
      <Content partName={part1} qtyExercises={exercises1} />
      <Content partName={part2} qtyExercises={exercises2} />
      <Content partName={part3} qtyExercises={exercises3} />
      <Total totalExercises={exercises1 + exercises2 + exercises3} />
    </div>
  )

}

export default App