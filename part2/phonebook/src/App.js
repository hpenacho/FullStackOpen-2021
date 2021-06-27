import React, { useState } from 'react'

const Person = ({ person, number }) => {
  return (
    <li>
      {person} - {number}
    </li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123456789' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [searchedName, setNewSearchName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchNameChange = (event) => {
    setNewSearchName(event.target.value)
  }

  const filterCheck = () => {
    if (persons.includes(persons.find(personName => personName.name === searchedName)))
      setShowAll(false)
    else
      setShowAll(true)
  }

  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.name === searchedName)


  const addPerson = (event) => {
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
      setPersons(persons.concat(personObject));
    }
    setNewName('');
    setNewNumber('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={searchedName} onChange={handleSearchNameChange} />
      </div> <button onClick={filterCheck}> Search </button>

      <h3>Add a new Contact</h3>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>debug: {newName}</div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <ul>
        {personsToShow.map(person =>
          <Person key={person.name} person={person.name} number={person.number} />
        )}
      </ul>
    </div>
  )
}

export default App
