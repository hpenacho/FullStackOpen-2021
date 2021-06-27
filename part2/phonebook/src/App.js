import React, { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />

      <h3>Add a new Contact</h3>
      <PersonForm persons={persons} setPersons={setPersons} />

      <h3>Contacts</h3>
      <Persons persons={persons} filter={filter}></Persons>

    </div>
  )
}

export default App
