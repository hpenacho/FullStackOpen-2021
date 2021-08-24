const Country = ({ countryDetail }) => {
    return (
        <div>
            <p>Country Name: {countryDetail.name}</p>
            <p>Capital: {countryDetail.capital}</p>
            <p>Population: {countryDetail.population}</p>

            <span>Languages: </span>
            {countryDetail.languages.map((language) => (
                <li key={language.iso639_1}>
                    {language.name}
                </li>))}

            <span>Flag: </span><img src={countryDetail.flag} width="100" height="auto" border="2px" alt="whatever"></img>
        </div>
    )
}

export default Country;