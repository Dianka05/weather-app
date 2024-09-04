import { fetchLocations, fetchWeatherForecast } from './weather';

export const handleLocation = (loc, setLocations, setWeatherForecast) => {
    setLocations([]);
    fetchWeatherForecast({
        cityName: loc.name,
        days: '7'
    }).then(data => {
        setWeatherForecast(data || {});
    }).catch(error => {
        console.error('Error fetching location weather data:', error);
    });
};

export const handleSearch = (e, setLocations) => {
    const value = e.target.value;
    if (value && value.length > 2) {
        fetchLocations({ cityName: value }).then(data => {
            setLocations(data || []);
        }).catch(error => {
            console.error('Error fetching locations:', error);
            setLocations([]);
        });
    } else {
        setLocations([]);
    }
};


export const fetchWeatherData = async (setWeatherForecast) => {
    try {
        const data = await fetchWeatherForecast({
            cityName: 'Prague',
            days: '7'
        })
        setWeatherForecast(data);
    } catch (error) {
        
    }
}