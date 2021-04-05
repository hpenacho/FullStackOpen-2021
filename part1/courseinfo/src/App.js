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
  console.log(props.partArray[0].name);
  const results = props.partArray.map(value => <p> {value.name} - {value.exercises} </p>)
   
  return (
    <>
      {results}
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
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header courseName={course.name} />
      <Content partArray={course.parts} />
      <Total totalExercises={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )

}

export default App