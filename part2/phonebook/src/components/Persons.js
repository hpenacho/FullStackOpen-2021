import Person from "./Person"
import personService from '../services/Persons'



const Persons = ({ persons, filter, setPersons }) => {

    const handleRemoval = (id) => {
        let confirmation = window.confirm("Do you wish to delete this user?");

        if (confirmation) {
            personService
                .remove(id)
                .then(response => {
                    setPersons(persons.filter(person => person.id !== id))
                })
        }
    }

    return (
        <ul>
            {persons.filter(p => p.name.includes(filter)).map(person =>
                <div>
                    <Person key={person.id} person={person.name} number={person.number} />
                    <button onClick={() => handleRemoval(person.id)}> remove </button>
                </div>
            )}
        </ul>
    )
}

export default Persons;