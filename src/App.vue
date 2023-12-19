<script setup>
import { ref } from "vue";
import Sign from "./components/Sign.vue"
import FlightBoard from "./components/FlightBoard.vue"
import Fallback from "./components/Fallback.vue"
// import FlightStatusForm from "./components/FlightStatusForm.vue"
import Error from "./components/Error.vue"

const hasError = ref(false);
const errorMessage = ref("");

const handleError = (error) => {
  console.error(error);
  hasError.value = true;
  errorMessage.value = error.message || "An unknown error occurred"; // Storing the error message
};

// for the form
const selectedStatus = ref('');

</script>

<template>
  <main>
    <div class="container">
      <Sign />
      <Suspense>
        <template #default>
          <!-- if error occurs while data is loaded from API, it trigger error handler -->
          <FlightBoard @error="handleError"/> 
        </template>
        <template #fallback>
          <!-- Fallback component shows while data is being fetched -->
          <Fallback />
        </template>
      </Suspense>
      <!-- Show error component if error occurs, error message passed as a prop to component -->
      <Error v-if="hasError" :message="errorMessage"/>
      <!-- <FlightStatusForm /> -->
      <div class="form-container">
        <form>
          <h2>Flight Status Form</h2>
          <div class="flight-select">
              <select name="flight-selection" id="flight-selection">
                  <option value="">select a flight</option>
                  <option></option>
              </select>
          </div>
          <div class="form-radio">
            <h2>Edit Flight Details</h2>
            <div class="radio-container">
              <div class="form-radio-input">
                <label for="free-text">Free Text</label>
                <input type="radio" name="status-change" id="free-text" value="free-text" v-model="selectedStatus">
              </div>
              <div class="form-radio-input">
                <label for="departed">Departed</label>
                <input type="radio" name="status-change" id="departed" value="departed" v-model="selectedStatus">
              </div>
              <div class="form-radio-input">
                <label for="diverted">Diverted</label>
                <input type="radio" name="status-change" id="diverted" value="diverted" v-model="selectedStatus">
              </div>
              <div class="form-radio-input">
                <label for="delayed">Delayed</label>
                <input type="radio" name="status-change" id="delayed" value="delayed" v-model="selectedStatus">
              </div>
              <div class="form-radio-input">
                <label for="cancelled">Cancelled</label>
                <input type="radio" name="status-change" id="cancelled" value="cancelled" v-model="selectedStatus">
              </div>
            </div>
            <div class="status-text-input">
              <input type="text" id="free-text-input" :disabled="selectedStatus !== 'free-text'">
            </div>
          </div>
        </form>
      </div>
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

@media (max-width: 1200px) { 
  /* styles here */
}

/* form styles*/
.form-container {
  width: 70%;
  height: 400px;
  border: 1px solid #000;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 20px;
}

.flight-select {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 50%;
  border-radius: 5px;
  padding: 10px;
}

select {
  width: 100%;
  height: 30px;
}

.form-radio {
  margin-top: 20px;
  margin-left: 20px;
}

.radio-container {
  display: flex;
  flex-direction: row;
}

.radio-container div {
  margin-right: 20px;
}

input[type="radio"] {
  margin-left: 10px;
}
.status-text-input{
  margin-top: 20px;
}
.status-text-input input {
  width: 400px;
  padding: 10px
}
</style>
