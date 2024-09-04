import { apiKey } from "./constants";


const forecastEndpoint = (params) => 
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`;

const locationEndpoint = (params) => 
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}`;

const apiCall = async (endpoint) => {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error(response, 'Error fetching weather');

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching weather data: ${error}`);
        return null;
    }
}

export const fetchWeatherForecast = async (params) => {
    return await apiCall(forecastEndpoint(params)) || {};
}

export const fetchLocations = async (params) => {
    return await apiCall(locationEndpoint(params)) || {};
}