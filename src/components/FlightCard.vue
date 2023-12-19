<script setup>
import { defineProps } from "vue"

const { time, city, code, airline, gate, status, borderColor} = defineProps([
    'time',
    'city',
    'code',
    'airline',
    'gate',
    'status',
    'borderColor'
])

</script>

<template>

    <div class="card-container">
        <div class="card">
            <p class="p1" :src="time">{{ time }}</p>
            <p class="p2" :src="city">{{ city}}</p>
            <p class="p1" :src="code">{{ code }}</p>
            <p class="p1" :src="airline">{{ airline }}</p>
            <p class="p2" :src="gate">{{ gate }}</p>
            <div class="status" :src="status">
                <div class="status-text" :style="{ 'borderLeftColor': borderColor }">
                    {{ status }}
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
    .card-container {
        width: 92%;
        margin: auto;
    }

    .card {
        width: 100%;
        height: 85px;
        margin-top: 15px;
        border: 2px solid #fff;
        border-radius: 10px;
        background-color: none;
        display: grid; 
        grid-template-columns: 2fr 2fr 1fr 3fr 1fr 3fr; 
        gap: 0px 10px; 
        align-items: center;
        padding: 0 1% 0 2%;

    }
    .card p {
        font-size: 1.4rem;
        font-weight: 600;
        color: #f5d836;
    }
    .card .p1 {
        color: #fff;
    }
    .card .p2 {
        color: #f5d836;
    }
    .status {
        display: inline-flex;
        
        height: 60%;
    }

    .status-text {
        display: flex;
        justify-content: start;
        align-items: center;
        margin-left: 10px;
        padding: 0 6% 0 4%;
        background-color: #fff;
        border-left: 10px solid #f5d836;
        border-radius: 25px 40px 40px 25px;
        height: 100%;
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 1.2rem;
        color: #000;
    }

    /* responsive */
    @media (max-width: 768px) { 
        .card {
          grid-template-columns: 5fr 4fr 4fr;
          padding: 0 2%;
        }
      
        .card p {
          font-size: 0.8rem;
        }
      
        .status {
          height: 35px;
        }
      
        .status-text {
          font-size: 0.5rem;
          line-height: 0.5rem;
        }
      }

    @media (max-width: 992px) { 
        .card {
            grid-template-columns: 5fr 4fr 4fr;
            padding: 0 3%;
        }
        .card p {
            font-size: 0.8rem;
          }
        .status-text {
            font-size: 0.7rem;
            line-height: 0.8rem;
          }
    }
    
    @media (max-width: 1200px) { 
        .card {
            padding: 0 2%;
            gap: 1px;
        }
        .card p {
            font-size: 1rem;
          }
        .status-text {
            font-size: 0.8rem;
            line-height: 0.8rem;
            margin-left: 0;
          }
    }

    @media (max-width: 1400px) { 
        .card {
            padding: 0 3%;
        }
        .card p {
            font-size: 1.1rem;
          }
        .status-text {
            font-size: 1.1rem;
            line-height: 1.1rem;
            padding-left: 4%;
          }
    }

    @media (max-width: 1600px) { 
        .card {
            padding: 0 2%;
        }
        .card p {
            font-size: 1.1rem;
          }
        .status-text {
            font-size: 1.1rem;
            line-height: 1.1rem;
            padding-left: 3%;
          }
    }
</style>