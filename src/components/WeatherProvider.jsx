import React, { createContext, useEffect, useState } from 'react';
import { fetchWeatherData } from '../api';

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
    const [weatherForecast, setWeatherForecast] = useState({});
    useEffect(() => {
        fetchWeatherData(setWeatherForecast)
    }, []);
    return (
        <WeatherContext.Provider value={{ weatherForecast, setWeatherForecast }}>
            {children}
        </WeatherContext.Provider>
    );
}