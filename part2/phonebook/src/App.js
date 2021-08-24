import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import axios from 'axios';

const promise = axios.get('http://localhost:3001/persons')
console.log(promise)

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
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
      <Persons persons={persons} filter={filter}></Persons>

    </div>
  )
}

export default App
