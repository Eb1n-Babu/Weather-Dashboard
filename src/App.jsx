import { useState } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import ChartSection from './components/ChartSection';

function App() {
    const [unit, setUnit] = useState('metric');

    const toggleUnit = () => {
        setUnit((prev) => (prev === 'metric' ? 'imperial' : 'metric'));
    };

    return (
        <div className="App">
            <h1>🌦 Weather Dashboard</h1>
            <button onClick={toggleUnit}>
                Switch to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
            </button>
            <WeatherCard unit={unit} />
            <ChartSection />
        </div>
    );
}

export default App;