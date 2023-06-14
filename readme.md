# Weather App

The Weather App is a command-line application that allows users to get weather information for a specific city. It provides real-time weather data such as temperature, humidity, and wind speed.

## Features

- **City Suggestion**: The app provides city suggestions as the user types, making it easier to select the desired city.
- **Multiple City Support**: Users can add and save multiple cities to check the weather for each of them.
- **Weather Information**: The app fetches weather data from the OpenWeatherMap API, displaying details like temperature, feels like temperature, humidity, and wind speed.

## Technologies Used

- JavaScript
- Node.js
- npm packages:
    - `axios` for making HTTP requests to the OpenWeatherMap API
    - `readline` for handling user input in the command line
    - `keypress` for capturing keypress events
    - `colors` for adding colors to the console output
    - `fs` for reading and writing data to a file

## Getting Started

1. Clone the repository:

   ```bash
   https://github.com/Harisabdullah/CLI-weather.git
2. Install dependencies:

   ```bash
   cd CLI-weather
   npm install

## Usage

- Run the application and follow the prompts to perform the desired actions:
  - Enter a city name to get the weather information for that city.
  - Add new cities to your saved cities list.
  - Delete cities from your saved cities list.
  - See the weather information for all the saved cities.
  - Quit the application.