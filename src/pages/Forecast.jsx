import React, { useContext, useState } from 'react'
import { handleSearch, handleLocation } from '../api';
import { WeatherContext } from '../components/WeatherProvider';
import calendar from '/icons/calendar.png';
import { Link } from 'react-router-dom';

export const Forecast = () => {   
    const [locations, setLocations] = useState([]);
    const { weatherForecast, setWeatherForecast } = useContext(WeatherContext);

    const {current, forecast} = weatherForecast;
    const {location} = locations

    function formatDate(dateString) {
        const date = new Date(dateString);
    
        const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
        const day = date.toLocaleDateString('en-US', { day: 'numeric' });
    
        return `${weekday}, ${day}`;
    }
  return (
    <main className='w-full min-h-[100vh] flex flex-col items-center justify-start p-4 gap-5 bg-gray-100'>
        <h1 className='mt-[80px] text-4xl font-extrabold text-orange-600'>Forecast</h1>
        <div className='mt-4 flex flex-col items-center'>
            <input onChange={(e) => handleSearch(e, setLocations)} className='outline-none border border-orange-500 p-3 w-full max-w-md rounded-md text-gray-700 placeholder-gray-500' placeholder='Enter city'/>
            {location && (
                <div className='border border-orange-500 p-3 mt-4 rounded-md w-full max-w-md'>
                    <button className='hover:bg-orange-100 transition-colors duration-300 p-3 w-full text-left rounded-md' onClick={() => handleLocation(location, setLocations, setWeatherForecast)}>
                    {location.name}
                    </button>
                </div>
            )}
           
        </div>
        <div className='w-full flex flex-col items-center mt-6'>
            <h2 className='text-center text-3xl font-bold text-orange-600'><span id='forecastCity'>{weatherForecast?.location?.name}</span>, {weatherForecast?.location?.country}</h2>
            <img src={current?.condition?.icon} alt="forecast img" className='w-24 h-24 mt-2' />
            <span className='text-2xl font-bold text-orange-600'>{current?.temp_c}°</span>
        </div>

        <div className='flex flex-col gap-4 items-center mt-6'>
            <div className='flex justify-center items-center'>
                <img src={calendar} alt="calundar icon" />
                <h3 className='text-xl font-semibold text-orange-600'>Daily Forecast</h3>
            </div>
            <div className='flex gap-4 flex-wrap justify-center'>
            {forecast?.forecastday.map(day => {
                return (
                <div key={day.date} className='border border-orange-500 flex flex-col items-center w-[150px] py-2 rounded-lg shadow-md'>
                    <h3 className='text-lg font-semibold'>{formatDate(day.date)}</h3>
                    <img src={day.day.condition.icon} alt="forecast img" className='w-24 h-24 mt-2' />
                    <span className='font-bold text-orange-600'>{day.day.avgtemp_c}°</span>
                </div>
                )
            })}
            </div>
        </div>
        <Link to={'/weather-info'} className='bg-orange-500 text-white p-2 rounded-md block hover:bg-gray-100 hover:border-orange-500 hover:border-2 mb-5 hover:text-orange-500 transition-colors duration-300'>Expanded Weather Information</Link>
    </main>
  )
}
