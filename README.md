# Podium Predictions
This project aims to predict whether a driver in a Formula 1 race will finish in the top 3 at a specific circuit by using a decision tree classifier model. The model uses telemetry data transmitted between a team and their car, with the driver&apos;s average lap time for the circuit as one of the key features. The dataset is gathered using Ergast&apos;s API and includes data from the constructors, results, races, and circuit tables available in the Ergast database.

## Installation
Note: A deployed version of this application exists [here](https://podium-ebon.vercel.app/) 

Before running the development server install dependancies by running this command in the root directory
```bash
# Requires Node.js to be installed
npm install
# or
yarn install
```

## Run the development server
```bash
npm run dev
# or
yarn dev
```

## Use
To test the model:
<ol>
    <li>Navigate to the 'Predict' tab or click the view circuits button from the home page</li>
    <li>Select a circuit</li>
    <li>Enter a lap time (ex. 1:20.293) and hit 'Submit'</li>
</ol>

Note:
Lap times must follow the format MM:SS, where MM are minutes and SS are seconds (fractions of a second work aswell).
