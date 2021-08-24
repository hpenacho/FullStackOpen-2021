import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('')

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  useEffect(hook, [])

  return (
    <div>
      <h2> Country Finder</h2>
      <Filter filter={filter} setFilter={setFilter} /><hr></hr>
      <Countries countries={countries} filter={filter} setFilter={setFilter} />
    </div>

  )
}

export default App;
