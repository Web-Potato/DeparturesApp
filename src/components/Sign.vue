<script setup>

</script>

<template>

    <div class="sign">
        <div class="sign-text">
            <img src="../assets/icon.svg" alt="Departures Icon" srcset="">
            <h1>Departures</h1>
        </div>
    </div>

</template>

<style scoped>

 .sign {
  width: 70%;
  height: 112px;
  margin-bottom: 10px;
  background: rgb(234,210,81);
  background: linear-gradient(90deg, rgba(234,210,81,1) 0%, rgba(205,177,20,1) 99%);
  display: flex;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 15px -2px, rgba(0, 0, 0, 0.2) 0px 3px 4px 1px;
 }

 .sign h1 {
    font-weight: 700;
    font-size: 2.5rem;
    color: #000;
    margin-left: 8%;
 }

 .sign-text {
    margin-left: 5%;
    display: flex;
    align-items: center;
    height: 2.5rem;
 }
 .sign-text img {
    width: 2.5rem;
    height: auto;
 }
 /* responsive */
 @media (max-width: 768px) { 
    .sign {
        width: 100%;
        height: auto;
        margin-bottom: 5px;
      }
    .sign h1 {
      font-size: 1.5rem;
    }
  
    .sign-text img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

@media (max-width: 992px) { 
      .sign {
        width: 100%;
        height: 66px;
        margin-bottom: 5px;
      }
    
      .sign h1 {
        font-size: 1.2rem;
      }
    
      .sign-text img {
        width: 1.2rem;
        height: 1.2rem;
      }
    }


@media (max-width: 1200px) { 
    /* styles here */
}
</style>
