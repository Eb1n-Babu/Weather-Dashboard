import React from 'react';

function WeatherCard({unit}) {
    const [city, setCity] = React.useState('');
    const [weather, setWeather] = React.useState(null);

    const fetchWeather = async () => {
        try{
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${process.env.REACT_APP_API_KEY}`);
            const data = await res.json();
            setWeather(data);
        }catch(err){
            console.error("Error fetching weather", err);
        }
    }
    return(
        <div>
            <label>Enter City Name
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)}
            placeholder="Enter City Name"/>
            </label>
            <button onClick={fetchWeather}>Fetch Weather</button>
            {weather && (
                <div>
                    <h1>{weather.name}</h1>
                    <p>{weather.weather[0].description}</p>
                    <p>Temp: {weather.main.temp}°{unit === 'metric'? 'C':'F'}</p>
                    <img alt={weather.weather[0].description}
                     src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
                </div>)}
        </div>
    );
    }

export default WeatherCard;