import React, { useState } from "react"
import personService from '../services/Persons'

const PersonForm = ({ persons, setPersons, setNotification, setNotificationType }) => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        let submittedPerson = persons.find(person => person.name === newName);
        if (persons.includes(submittedPerson)) {
            let confirmation = window.confirm(`${submittedPerson.name} is already on the list, replace the old number with this new one?`);
            if (confirmation) {
                const modifiedPersonObj = { ...submittedPerson, number: newNumber }
                personService
                    .update(modifiedPersonObj.id, modifiedPersonObj)
                    .then(returnedPerson => {
                        setPersons(persons.map(person => person.id !== modifiedPersonObj.id ? person : returnedPerson))
                        setNotification(
                            `${modifiedPersonObj.name}'s number was changed to ${newNumber}`
                        )
                        setNotificationType('successfulOperation')
                    })
                    .catch(error => {
                        setNotification(
                            `${modifiedPersonObj.name}'s information has been removed from server`
                        )
                        setTimeout(() => {
                            setNotification(null)
                        }, 5000)
                        setNotificationType('error')
                        console.log(error)
                    })

            }
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
                    setNotification(
                        `${newName} was added to the phonebook sucessfully!`
                    )
                    setTimeout(() => {
                        setNotification(null)
                    }, 5000)
                    setNotificationType('successfulOperation')
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