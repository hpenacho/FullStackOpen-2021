import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const Course = ({ course }) => {

    const Header = ({ course }) => {
      return (
        <h1>{course.name}</h1>
      )
    }

    const Part = (props) => {
      return (
        <p>
          {props.part.name} {props.part.exercises}
        </p>
      )
    }

    const Content = ({ course }) => {
      return (
        course.parts.map(part => <ul key={part.id}> <Part part={part} /> </ul>)
      )
    }

    const Total = ({ course }) => {

      const exercisesArray = course.parts.map((part) => part.exercises);
      const reducer = (accumulator, currentValue) => accumulator + currentValue;

      return (
        <b><p>Total exercises: {exercisesArray.reduce(reducer)}</p></b>
      )
    }

    return (<div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>)
  }

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    courses.map(course =>
      <div key={course.id}> <Course course={course} /> </div>
    )
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;
