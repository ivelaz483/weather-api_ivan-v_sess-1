import { useEffect, useState } from "react";
import Search from './search'

import cloud from './cloud.png'
import humid from './humid.png'
import pressure from './pressure.png'

function App() {
    const [weather, setWeather] = useState('')
    const [searchwet, setSearchwet] = useState('')
    const [render, setRender] = useState(true);

    useEffect(() => {
        const getStuff = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchwet},us&APPID=027b22d7ed3efe9ead555f1a253c763d`)
            const json = await response.json();
            console.log(json.weather.description);
            setWeather(json)
        }

        getStuff(searchwet)
    }, [searchwet])

    return (
      <div className="wet">

        <div className="scale">
        <div className="search">
        Search by city: <br/>
        <Search searchweather={searchwet} setSearchwet={setSearchwet} /><br/>
        </div>
        <div className="st1">
        {weather.name}<br/>
        {weather.main.temp} F 
        
        {weather.weather.map(weather => (
        <p className="desc">{weather.description}</p>))}
        </div>

        <div className="flex-container">
        <div><img src={cloud}></img></div>
        <div>Wind: {weather.wind.speed} mph <br/></div>
        </div>

        <div className="flex-container">
        <div><img src={humid}></img></div>
        <div>Humidity: {weather.main.humidity}% <br/></div>
        </div>
        
        <div className="flex-container">
        <div><img src={pressure}></img></div>
        <div>Wind: {weather.main.pressure} inHg <br/></div>
        </div>
        
        </div>
      </div>
    )
}

export default App

//{weather.weather.map()}

/*{weather.weather.map(weather => (
  Desc: {weather.weather.main}
))}*/

/*{weather.weather.map(weather => (
  <p>Desc: {weather.weather.main}</p>)}*/