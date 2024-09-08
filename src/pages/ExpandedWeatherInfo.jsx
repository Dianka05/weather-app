import React, { useContext, useEffect, useState } from 'react'
import { WeatherContext } from '../components/WeatherProvider';
// import { fetchLocations } from '../api/weather';
import wind from '/icons/windy.png';
import calendar from '/icons/morning.png';
import sunset from '/icons/sunset.png';
import sunrise from '/icons/sunrise.png';
import moonset from '/icons/moonset.png';
import moonrise from '/icons/moonrise.png';
import humidityIcon from '/icons/humidity.png';

export const ExpandedWeatherInfo = () => {
  const { weatherForecast } = useContext(WeatherContext);
  // const [locations, setLocations] = useState({});
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false 
  };
  const date = new Date();
  const hour = date.getHours();

  // useEffect(() => {
  //  fetchLocations({ cityName: weatherForecast?.location?.name }).then(data => {
  //     setLocations(data || []);
  //   }).catch(error => {
  //     // console.error('Error fetching locations:', error);
  //     setLocations([]);
  //   });
  // }, []);

  const {forecast, location} = weatherForecast;
  const parseTime = (timeStr) => {
    if (!timeStr) return 'N/A';
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    
    if (modifier === 'PM' && hours !== 12) hours += 12;
    if (modifier === 'AM' && hours === 12) hours = 0;
  
    const now = new Date();
    return new Date(now.setHours(hours, minutes, 0, 0)).toLocaleTimeString('en-US', options); 
  };
  return (
    <main className='w-full h-full flex flex-col items-center justify-center p-4 bg-gray-100'>
    {location ? <h1 className='mt-[80px] text-4xl font-extrabold text-orange-600 text-center'>{location?.name}, {location?.country}</h1> : <h1 className='mt-[80px] text-4xl font-extrabold text-orange-600'>N/A</h1>}
  
    <section className='mt-6 p-4 bg-white shadow-md rounded-lg w-full max-w-3xl'>
      <h2 className='text-xl font-semibold text-orange-500'>Astro Information</h2>
      <div className='mt-2 flex items-center md:justify-center sm:gap-5 sm:flex-nowrap flex-wrap justify-between'>
        <div className='flex items-center justify-start sm:gap-3 flex-grow sm:flex-grow-0'>
          <img src={sunrise} width={40} height={40} alt="sunrise icon" />
          <p className='text-gray-700'>Sunrise: {parseTime(forecast?.forecastday[0]?.astro?.sunrise)}</p>
        </div>
        <div className='flex items-center justify-start sm:gap-3 flex-grow sm:flex-grow-0'>
          <img src={sunset} width={40} height={40} alt="sunset icon" />
          <p className='text-gray-700'>Sunset: {parseTime(forecast?.forecastday[0]?.astro?.sunset)}</p>
        </div>
        <div className='flex items-center justify-start sm:gap-3 flex-grow sm:flex-grow-0'>
          <img src={moonrise} width={40} height={40} alt="moonrise icon" />
          <p className='text-gray-700'>Moonrise: {parseTime(forecast?.forecastday[0]?.astro?.moonrise)}</p>
        </div>
        <div className='flex items-center justify-start sm:gap-3 flex-grow sm:flex-grow-0'>
          <img src={moonset} width={40} height={40} alt="moonset icon" />
          <p className='text-gray-700'>Moonset: {parseTime(forecast?.forecastday[0]?.astro?.moonset)}</p>
        </div>
      </div>
    </section>
  
    <section className='mt-6 text-center'>
      <img src={calendar} alt="calendar" className='w-12 h-12 mx-auto' />
      <span className='text-xl font-semibold text-orange-500'>Hourly Forecast</span>
    </section>
  
    <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4'>
      {forecast?.forecastday[0].hour.map(({
        temp_c,
        time,
        condition,
        feelslike_c,
        wind_kph,
        humidity,
        gust_kph
      }) => {
        const forecastHour = new Date(time).getHours();
        const thisHour = new Date(time).toLocaleTimeString('en-US', options);
        const isCurrentHour = hour === forecastHour;
        return (
          <div key={time} className={`p-4 flex flex-col items-center justify-center border rounded-lg shadow-md ${isCurrentHour ? 'bg-orange-400 text-white' : 'bg-gray-200 text-gray-700'}`}>
            <span className={isCurrentHour ? 'block text-white' : 'hidden'}>Now</span>
            <h2 className='text-lg font-semibold'>{thisHour}</h2>
            <img src={condition.icon} alt={condition.text} width={100} height={100}/>
            <div className='flex flex-col items-start'>
              <p>Current: {temp_c}°C</p>
              <p>Feels like: {feelslike_c}°C</p>
              <div className='flex items-center gap-2'>
                <img src={wind} alt="wind" width={20} height={20} />
                <span>Min: {wind_kph} km/h || Max: {gust_kph} km/h</span>
              </div>
              <div className='flex items-center gap-2'>
                <img src={humidityIcon} alt="humidity" width={20} height={20} />
                <span>{humidity} %</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  </main>
  )
}
