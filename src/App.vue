<script setup>
import { ref, computed, onMounted, getCurrentInstance, watch } from 'vue';
import Sign from './components/Sign.vue';
import FlightBoard from './components/FlightBoard.vue';
import Fallback from './components/Fallback.vue';
import Error from './components/Error.vue';
import { NSelect, NRadioGroup, NRadioButton, NInput, NButton } from 'naive-ui';

//for manual status change with form
import useFlightData from './composables/useFlightData';
const { fetchData, updateFlightStatus, allDepartures } = useFlightData();
const selectedFlightNumber = ref('');
const freeTextInput = ref('');
const selectedStatus = ref('');
const instance = getCurrentInstance();

const formattedFlights = computed(() => allDepartures.value.map(flight => ({
  label: `${instance.appContext.config.globalProperties.$formatTime(flight.scheduledDepartureDateTime)} - ${flight.flightNumber} - ${flight.airline.name}`,
  value: flight.flightNumber
})));

// state for error message from the form
const formError = ref('');
//state for status update message
const formSuccess = ref('');


const handleFormSubmit = () => {
  formError.value = ''; 
  if (!selectedFlightNumber.value && !selectedStatus.value) {
    formError.value = 'Please select a Flight and a Status';
  } else if (!selectedFlightNumber.value) {
    formError.value = 'Please select a Flight';
  } else if (!selectedStatus.value) {
    formError.value = 'Please select a Status';
  } else {
    let statusToUpdate = selectedStatus.value === 'free-text' ? freeTextInput.value : selectedStatus.value;
    updateFlightStatus(selectedFlightNumber.value, statusToUpdate, () => {
      formSuccess.value = `Status updated successfully for flight ${selectedFlightNumber.value}`;
    });
  }
};

//watcher that resets error/success messages
watch(selectedFlightNumber, () => {
  formError.value = '';
  formSuccess.value = '';
});

//end of manual status change via form

//states for error handling
const hasError = ref(false);
const errorMessage = ref('');
// new state for tracking loading status
const isLoading = ref(false);

// for simulation of delay in data fetching
// const delay = ms => new Promise(resolve => setTimeout(resolve, ms)); //to remove later - just for testing

onMounted(async () => {
  isLoading.value = true;  // Start loading
  try {
    // await delay(3000); // fake 3 sec delay (to remove)
    await fetchData();
  } catch (error) {
    console.error(error);
    hasError.value = true;
    errorMessage.value = error.message || "An unknown error occurred";
  } finally {
    isLoading.value = false;  // Stop loading
  }
});

const handleError = (error) => {
  console.error(error);
  hasError.value = true;
  errorMessage.value = error.message || 'An unknown error occurred';
};
</script>

<template>
  <main>
    <div class="container">
      <Sign />
        <!-- Fallback component shows while isLoading is true -->
      <Fallback v-if="isLoading"/>
        <!-- only show FlightBoard if its not loading and no errors // passing allDepartures as a prop to FlightBoard // if error occurs while data is loaded from API, it triggers error handler -->
      <FlightBoard v-if="!isLoading && !hasError" :all-departures="allDepartures" @error="handleError"/>
        <!-- Show error component if error occurs, error message passed as a prop to component -->
      <Error v-if="hasError" :message="errorMessage"/>
        <form @submit.prevent="handleFormSubmit" class="form-container">
          <h2>Flight Status Form</h2>
          <!-- Select for Flight Selection -->
          <n-select 
            v-model:value="selectedFlightNumber"
            :options="formattedFlights"
            placeholder="Select a flight"
            class="flight-select"
          />
  
          <div class="form-radio">
            <h3>Select Flight Status</h3>
            <n-radio-group v-model:value="selectedStatus" class="radio-container">
              <n-radio-button label="Departed" value="Departed" />
              <n-radio-button label="Diverted" value="Diverted" />
              <n-radio-button label="Delayed" value="Delayed" />
              <n-radio-button label="Cancelled" value="Cancelled" />
              <n-radio-button label="Free Text" value="free-text" />
            </n-radio-group>
          
            <n-input 
              v-if="selectedStatus === 'free-text'"
              v-model:value="freeTextInput"
              placeholder="Enter text"
              maxlength="30"
              class="status-text-input"
            />
            <div v-if="formError" class="error-message">{{ formError }}</div>
            <div v-if="formSuccess" class="success-message">{{ formSuccess }}</div>

          </div>
          <n-button type="primary" @click="handleFormSubmit">Apply Status</n-button>
        </form>
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  margin-top: 10px;
 }
 /* responsive */
 @media (max-width: 768px) { 

}

@media (max-width: 992px) { 
  .container {
    padding: 20px;
  }
}

/* form styles*/
.form-container {
  display: flex;
  flex-direction: column;
  width: 500px;

  border: 2px solid #636262;
  border-radius: 5px;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 20px;
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 15px -2px, rgba(0, 0, 0, 0.2) 0px 3px 4px 1px;
}

.flight-select {
  margin-top: 20px;
}

.form-radio {
  margin-top: 20px;
  margin-bottom: 20px;
}
.radio-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.radio-container div {
  margin-top: 10px
}
.status-text-input{
  margin-top: 20px;
}

form button {
  padding: 10px;
  font-weight: 600;
  background-color: #636262;
  color: #fff;
  border: 1px solid;
  border-radius: 5px;
}

.error-message {
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
  color: #C00000;
}
.success-message {
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
  color: #36AD6A;
}
</style>
