import { useState } from 'react'
import './App.css'
import WeatherCard from "./components/WeatherCard.jsx";
import ChartSection from "./components/ChartSection.jsx";

function App() {
  const [units, setUnits] = useState('metrics')

    const  ToggleUnit = () => {
        setUnits((prev)=>(prev === 'metrics' ? 'imperial' : 'metrics'));
    }

    return (
      <div className="App">
          <h1>🌦 Weather Dashboard</h1>
          <button onClick={ToggleUnit}>Switch to {units === 'metrics'? 'Fahrenheit' : 'Celsius'}</button>
          <WeatherCard unit={units}/>
          <ChartSection/>
      </div>

  )
}

export default App
