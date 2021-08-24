import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Weather = ({ city }) => {
    const [weather, setWeather] = useState({});
    const api_key = '?access_key=' + process.env.REACT_APP_API_KEY;
    const api_query = '&query=' + city

    const hook = () => {
        axios
            .get('http://api.weatherstack.com/current' + api_key + api_query)
            .then(response => {
                setWeather(response.data.current)
            })
    }
    useEffect(hook, [api_key, api_query])

    return (
        <div>
            <p>Current Weather in {city}</p>
            <p>Temperature: {weather.temperature}</p>
            <span>Icon: </span><img src={weather.weather_icons} width="75" height="auto" border="2px" alt="Weather icon"></img>
            <p>Wind: {weather.wind_speed} km's at direction {weather.wind_degree} ({weather.wind_dir}) </p>
        </div>
    )

}
export default Weather;