import React from 'react'

export const AboutApp = () => {
  return (
    <main className='w-full h-[100vh] p-4 flex flex-col items-center justify-center bg-gray-100 gap-3'>
      <h1 className='text-4xl font-extrabold text-orange-600 mb-4'>About This App</h1>
      <p className='text-lg text-gray-700 max-w-3xl text-center'>
        This app provides comprehensive weather data, including hourly and daily forecasts, along with astronomical information. Designed with a modern and user-friendly interface, it ensures a seamless experience for users seeking detailed and accurate weather insights.
      </p>
      <a href="https://my-portfolio-website-rho-ruddy.vercel.app/" className='underline text-xl text-orange-500'>Developer website</a>
    </main>
  )
}
