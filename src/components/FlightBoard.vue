<script setup>
import FlightCard from "./FlightCard.vue"
import axios from "axios"
import { ref } from "vue"

const allDepartures = ref([])
const isDataLoaded = ref(false)

// const res = await axios.get("https://6315ae3e5b85ba9b11e4cb85.mockapi.io/departures/Flightdata");
const res = await axios.get("https://b4a042cf-25ec-4e21-abb8-a67f5191582c.mock.pstmn.io/departures"); //postman test api
allDepartures.value = res.data.allDepartures;
// console.log(res.data)

// Function to convert time
const formatTime = (timeString) => {
  const date = new Date(timeString);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}.${minutes}`;
};

// Function to determine the border color based on status
const getBorderColor = (status) => {
    if (status.includes("Departed")) {
        return "#d67b27";
    } else if (status.includes("Go to Gate")) {
        return "#3677f5";
    } else if (status.includes("Wait in Lounge")) {
        return "#1ea945";
    } else if (status.includes("Final Call")) {
        return "#ea1e1e";
    } else if (status.includes("Scheduled") || status.includes("Departing at")) {
        return "#f5d836";
    } else {
        return "#cecaca";
    }
};

allDepartures.value = res.data.allDepartures.map(flight => ({
    ...flight,
    borderColor: getBorderColor(flight.status)
}));



</script>

<template>

    <div class="board-container">
        <div class="table-header">
            <p>Departure time</p>
            <p>City Name</p>
            <p>Code</p>
            <p>Airline</p>
            <p>Gate</p>
            <p>Status</p>
        </div>
        <div :class="{ 'animate-items': isDataLoaded }">
        
        <FlightCard 
            v-for="flight in allDepartures" 
            :key="flight.flightNumber"
            :time="formatTime(flight.scheduledDepartureDateTime)"
            :city="flight.arrivalAirport.cityName"
            :code="flight.arrivalAirport.code"
            :airline="flight.airline.name"
            :gate="flight.departureGate ? flight.departureGate.number : 'N/A'"
            :status="flight.status"
            :borderColor="flight.borderColor"
        />
        </div>
    </div>

</template>

<style scoped>
    .board-container {
        display: flex;
        flex-direction: column;
        width: 70%;
        height: 800px;
        overflow: scroll;
        padding: 30px 0;
        background: rgb(71,71,71);
        background: linear-gradient(90deg, rgba(71,71,71,1) 0%, rgba(0,0,0,1) 99%);
    }

    .table-header {
        width: 92%;
        height: 56px;
        border-radius: 10px;
        background: rgb(253,253,253);
        background: linear-gradient(90deg, rgba(253,253,253,1) 0%, rgba(174,188,202,1) 83%);
        display: grid; 
        grid-template-columns: 2fr 2fr 1fr 3fr 1fr 3fr;
        gap: 0px 10px; 
        align-items: center;
        padding: 1% 1% 1% 2%;
        margin: 0 auto;
    }
    .table-header p {
        font-size: 1.2rem;
        font-weight: 600;
        color: #000;
    }
    /* responsive */
    @media (max-width: 768px) { 
      
        .table-header {
            grid-template-columns: 5fr 4fr 4fr;
            padding: 0 2%;
        }

        .table-header p {
            font-size: 0.8rem;
        }
      }

    @media (max-width: 992px) { 
        .board-container {
            width: 100%;
            height: auto;
          }
        .table-header {
            padding: 0 2%;
            grid-template-columns: 5fr 4fr 4fr;
        }
        .table-header p {
            font-size: 0.9rem;
        }
    }
    
    @media (max-width: 1200px) { 
        .table-header {
            padding: 0 3%;
        }
        .table-header p {
            font-size: 1rem;
        }
    }

    @media (max-width: 1400px) { 
        
        .table-header {
            padding: 0 3%;
            height: 56px;
        }
        .table-header p {
            font-size: 1.2rem;
          }
    }

    /* Transition for Cards */


</style>