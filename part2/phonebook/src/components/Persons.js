import Person from "./Person"

const Persons = ({ persons, filter }) => {

    return (
        <ul>
            {persons.filter(p => p.name.includes(filter)).map(person =>
                <div>
                    <Person key={person.id} person={person.name} number={person.number} />
                </div>
            )}
        </ul>
    )
}

export default Persons;