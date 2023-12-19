<script setup>
import { defineProps } from "vue";

const props = defineProps({
    message: String
})

</script>

<template>
    <div class="board-container">
        <div class="error-container">
            <h2>{{ message }}</h2>
        </div>
    </div>
</template>

<style scoped>
.board-container {
    display: flex;
    flex-direction: column;
    -ms-flex-item-align: start;
    width: 70%;
    height: 800px;
    padding: 15px 0;
    background: rgb(71,71,71);
    background: linear-gradient(90deg, rgba(71,71,71,1) 0%, rgba(0,0,0,1) 99%);
}
.error-container {
    width: 70%;
    height: 150px;
    margin: auto;
    margin-top: 30px;
    border: 2px solid #fff;
    border-radius: 10px;
    background-color: none;
    align-items: center;
    padding: 5%;
}

.error-container h2 {
    color: #fff;
}
</style>