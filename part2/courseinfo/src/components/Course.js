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

export default Course;