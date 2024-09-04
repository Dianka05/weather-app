import { Forecast } from './pages/Forecast'
import { Sidebar } from './components/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AboutApp } from './pages/AboutApp'
import { ExpandedWeatherInfo } from './pages/ExpandedWeatherInfo'
import { useState } from 'react'
import { Header } from './components/Header'
import { WeatherProvider } from './components/WeatherProvider'
import { Analytics } from '@vercel/analytics/react'

function App() {  
  const [toggle, setToggle] = useState(false)
  
  return (
  <WeatherProvider>
      <Router>
          <Analytics />
          <Header setToggle={setToggle} />
          <Sidebar toggle={toggle} setToggle={setToggle}/>
          <Routes>
            <Route path='/' Component={Forecast} />
            <Route path='/about' Component={AboutApp}  />
            <Route path='/weather-info' Component={ExpandedWeatherInfo} />
          </Routes>
      </Router>
  </WeatherProvider>
  )
}

export default App
