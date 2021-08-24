import Country from "./Country"
import Weather from "./Weather"
const Countries = ({ countries, filter, setFilter }) => {

    const filteredCountries = countries.filter(country => country.name.includes(filter))

    if (filteredCountries.length === 1)
        return (<div>
            <Country countryDetail={filteredCountries[0]} /> <hr></hr>
            <Weather city={filteredCountries[0].capital} />
        </div>)

    if (filteredCountries.length > 10)
        return (<p>Please narrow your search criteria</p>)

    return (
        <div>
            {filteredCountries.map(country => (
                <div key={country.alpha3Code}>
                    <span>{country.name} - ({country.alpha3Code})</span>
                    <button onClick={() => setFilter(country.name)}> Show more </button>
                </div>
            ))}
        </div>
    )
}

export default Countries;