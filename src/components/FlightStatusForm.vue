<script setup> 

</script>

<template>
    <div class="form-container">
        <h2>Flight Status Form</h2>
        <div class="flight-select">
            <select name="flight-selection" id="flight-selection">
                <option value="">select a flight</option>
                <option></option>
            </select>
        </div>
    </div>

</template>

<style scoped>
    .form-container {
        text-align: center;
        width: 70%;
        height: 400px;
        border: 1px solid #000;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .flight-select {
        margin-top: 20px;
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 50%;
        border: 1px solid #000;
        border-radius: 5px;
        padding: 10px;
    }

    select {
        width: 100%;
        height: 30px;
    }
</style>