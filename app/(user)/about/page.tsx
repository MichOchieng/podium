import React from 'react'

const AboutPage = () => {
  return (
    <div className='text-center'>
      <p>
      This project aims to predict whether a driver in a Formula 1 race will finish in the top 3 at a specific circuit by using a decision tree classifier model. The model uses telemetry data transmitted between a team and their car, with the driver&apos;s average lap time for the circuit as one of the key features. The dataset is gathered using Ergast&apos;s API and includes data from the constructors, results, races, and circuit tables available in the Ergast database.
      </p>
    </div>
  )
}

export default AboutPage