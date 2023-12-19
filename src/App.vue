<script setup>
import { ref } from "vue";
import Sign from "./components/Sign.vue"
import FlightBoard from "./components/FlightBoard.vue"
import Fallback from "./components/Fallback.vue"
import FlightStatusForm from "./components/FlightStatusForm.vue"
import Error from "./components/Error.vue"

const hasError = ref(false);
const errorMessage = ref("");

const handleError = (error) => {
  console.error(error);
  hasError.value = true;
  errorMessage.value = error.message || "An unknown error occurred"; // Storing the error message
};


</script>

<template>
  <main>
    <div class="container">
      <Sign />
      <Suspense>
        <template #default>
          <FlightBoard @error="handleError"/> 
        </template>
        <template #fallback>
          <Fallback />
        </template>
      </Suspense>
      <Error v-if="hasError" :message="errorMessage"/>
      <FlightStatusForm />
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
</style>

