import React, { useState } from "react"
import personService from '../services/Persons'

const PersonForm = ({ persons, setPersons }) => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (persons.includes(persons.find(personName => personName.name === newName))) {
            alert(`${newName} is already in the phonebook`)
        }
        else {
            const personObject = {
                name: newName,
                number: newNumber,
                id: persons.length + 1
            }
            personService
                .create(personObject)
                .then(createdPerson => {
                    setPersons(persons.concat(createdPerson));
                    console.log(createdPerson);
                })
        }
        setNewName('');
        setNewNumber('');
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm;