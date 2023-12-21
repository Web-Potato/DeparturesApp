# DeparturesApp


## About
DeparturesApp is a Vue.js-based application designed to show real-time departure information. Its primary goal is to assist users in tracking flight statuses, including times and other relevant details, using a responsive and intuitive interface.

The app's functionality is centered around displaying flight departures in real-time, with features such as status highlighting and status editing to enhance user interaction and experience. This allows users to not only view flight details but also to interact with the data, such as updating flight statuses. The responsive design ensures that the app is accessible across various devices, catering to a broad range of users.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Features

**Real-Time Flight Information**: Displays up-to-date departure details.  
**Responsive Design**: Adapts seamlessly to various screen sizes.  
**Status Highlighting**: Color-codes flights based on their status for easy identification.  
**Status Editing**: Editing of Flight Status with form with option to add free text

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Running Unit Tests with Vitest

```sh
npm run test
```

## Dependencies

**Vue 3** Progressive JavaScript framework for building user interfaces.  
**Naive UI** Vue 3 component library  
**Axios** Promise-based HTTP client for making HTTP requests.  
**Vitest** For unit testing


### My Solution for the App

* Single page app  
* Uses Vue3  
* Supports major browsers (Chrome, Safari, Firefox, Edge)  
* Is responsive  
* Has Partial test coverage with Unit Tests  
* Error handling - if API call fails that sends message on screen to the user  
* Includes form that allows for status changing by user  


### Additional Features

* Board uses interval to show City and Country(from arrivalAirport.countryName)  
* Board uses interval to show Airline and Flight Number (from flightNumber)  
* Before cards are rendered animated loader is showing on screen, additionally there is a mock delay function included in the code if viewing of the loader is required  


### Unit Test Coverage

* FlightBoard - testing of component and data displayed within  
* FlightCard - testing of data are being sent as props to card component  
* StatusForm - testing if form is rendering  
* Fallback - testing if loader is displayed  
* useFlightData - simulation of successful data fetching


## What would I do next?

* Add feature to remove cards with flight information manually and animate removal  
* Add refreshing of data fetching for every 60/30seconds. This would make checks for any manually changed flight to be left and data from API to be ignored if status of that flight was not changed in most recent call.  
* Add more flair to the overall presentation.


