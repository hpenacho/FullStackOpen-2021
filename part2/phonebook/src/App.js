import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/Persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  const hook = () => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }

  useEffect(hook, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />

      <h3>Add a new Contact</h3>
      <PersonForm persons={persons} setPersons={setPersons} />

      <h3>Contacts</h3>
      <Persons persons={persons} filter={filter} setPersons={setPersons}></Persons>

    </div>
  )
}

export default App
