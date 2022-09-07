import React, { useState } from 'react'
import axios from 'axios'
import ShowTemp from './ShowTemp'
import '../Components/Assets/Style.css'

function SearchWeather() {
    const [city, setCity] = useState("")
    const [data, setData] = useState({
        description: "",
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        humidity: 0,
        sunrise: 0,
        sunset: 0,
        country: ""
    })


    const handleClick = () => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ed5843205bd62cee02c8c80b9ea0df59')
            .then((Response) => {
                setData({
                    description:Response.data.weather[0],
                    temp:Response.data.main.temp,
                    temp_max: Response.data.main.temp_max,
                    temp_min: Response.data.main.temp_min,
                    humidity: Response.data.main.humidity,
                    sunrise: Response.data.sys.sunrise,
                    sunset: Response.data.sys.sunset,
                    country: Response.data.sys.country,

                })
            })
    }


    return (
        <>
        <div className='container text-center my-2'>
            <h1>Weather App Using react JS</h1>
            <input type="text" className='from-control' placeholder='Enter Country Name' value={city} onChange={(e) => {
                setCity(e.target.value)
            }} />
            <button className='btn btn-primary mx-2' type='submit' onClick={handleClick}>Search Weather</button>
            {/* <div>
                {data.temp}
            </div> */}
        </div>
        <ShowTemp text={data}></ShowTemp>
        </>
    )
}

export default SearchWeather
