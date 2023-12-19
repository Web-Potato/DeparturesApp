<script setup>
import Sign from "./components/Sign.vue"
import FlightBoard from "./components/FlightBoard.vue"
import Fallback from "./components/Fallback.vue"
import FlightStatusForm from "./components/FlightStatusForm.vue"



</script>

<template>
  <main>
    <div class="container">
      <Sign />
      <Suspense>
        <template #default>
          <FlightBoard /> 
        </template>
        <template #fallback>
          <Fallback />
        </template>
      </Suspense>
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

