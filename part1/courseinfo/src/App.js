import React from 'react'

const Header = (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.courseName}</h1>
    </>
  );
}

const Content = (props) => {
  console.log(props);
  return (
    <>
      <p>
        {props.partObj.name} {props.partObj.exercises}
      </p>
    </>
  )
}

const Total = (props) => {
  console.log(props);
  return (
    <>
      <p>Total number of exercises: {props.totalExercises}</p>
    </>
  )

}

const App = () => {
  
  const course = "Half Stack Application Development";
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header courseName={course} />
      <Content partObj={part1} />
      <Content partObj={part2} />
      <Content partObj={part3} />
      <Total totalExercises={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )

}

export default App