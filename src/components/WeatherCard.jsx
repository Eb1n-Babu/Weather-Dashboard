import React, { useState } from 'react';

const API_KEY = import.meta.env.VITE_API_KEY;

function WeatherCard({ unit }) {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const fetchWeather = async () => {
        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
            );
            const data = await res.json();

            if (data.cod !== 200) {
                setError(data.message);
                setWeather(null);
                return;
            }

            setError('');
            setWeather(data);
        } catch (err) {
            console.error('Error fetching weather:', err);
            setError('Something went wrong');
            setWeather(null);
        }
    };

    return (
        <div>
            <label>
                Enter City Name:
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g., Tokyo"
                />
            </label>
            <button onClick={fetchWeather}>Fetch Weather</button>

            {error && <p style={{ color: 'red' }}>⚠️ {error}</p>}

            {weather && (
                <div>
                    <h2>{weather.name}</h2>
                    <p>{weather.weather[0].description}</p>
                    <p>
                        Temp: {weather.main.temp}°{unit === 'metric' ? 'C' : 'F'}
                    </p>
                    <img
                        alt={weather.weather[0].description}
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    />
                </div>
            )}
        </div>
    );
}

export default WeatherCard;