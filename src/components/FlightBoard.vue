<script setup>
import FlightCard from "./FlightCard.vue"
import { ref, defineProps, defineEmits, onMounted, onUnmounted } from "vue";

const emits = defineEmits(['error']);

//defining prop from App.vue with allDepartures
const props = defineProps({
  allDepartures: Array
});

// for changing of labels
const label1 = ref("Airline");
const label2 = ref("City Name");

let intervalId1;
let intervalId2;

// sets intervals for displaying information on the board
onMounted(() => {
    intervalId1 = setInterval (() => {
        label1.value = label1.value === "Airline" ? "Flight Number" : "Airline";
    }, 3000);
    intervalId2 = setInterval (() => {
        label2.value = label2.value === "City Name" ? "Country" : "City Name";
    }, 3000);
});

//removes above intervals
onUnmounted(() => {
    clearInterval(intervalId1);
    clearInterval(intervalId2);
})

</script>

<template>
    <div class="board-container">
        <div class="table-header">
            <p>Departure time</p>
            <p :src="label2">{{ label2 }}</p>
            <p>Code</p>
            <p :src="label1">{{ label1 }}</p>
            <p>Gate</p>
            <p>Status</p>
        </div>
        <div class="flightCard-container">
            <!-- loading of component and passing props to it with data -->
            <FlightCard 
                v-for="flight in props.allDepartures" 
                :key="flight.flightNumber"
                :time="$formatTime(flight.scheduledDepartureDateTime)"
                :city="flight.arrivalAirport.cityName"
                :country="flight.arrivalAirport.countryName"
                :code="flight.arrivalAirport.code"
                :airline="flight.airline.name"
                :gate="flight.departureGate ? flight.departureGate.number : 'N/A'"
                :status="flight.status"
                :flightNumber="flight.flightNumber"
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
        min-height: 50px;
        max-height: 800px;
        padding: 15px 0;
        background: rgb(71,71,71);
        background: linear-gradient(90deg, rgba(71,71,71,1) 0%, rgba(0,0,0,1) 99%);
    }

    .flightCard-container {
        margin-top: 5px;
        overflow: scroll;
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
            padding: 0 2%;
        }
        .table-header p {
            font-size: 1rem;
        }
    }

    @media (max-width: 1400px) { 
        
        .table-header {
            padding: 0 2%;
            height: 56px;
        }
        .table-header p {
            font-size: 1.2rem;
          }
    }
</style>