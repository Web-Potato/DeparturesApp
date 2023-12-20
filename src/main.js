import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'


import { NButton, NRadioGroup, NRadio, NSelect, NInput } from 'naive-ui'

const app = createApp(App)

// for global registration of Naive UI components 
app.component('NButton', NButton);
app.component('NRadioGroup', NRadioGroup);
app.component('NRadio', NRadio);
app.component('NSelect', NSelect);
app.component('NInput', NInput);

 // Function to convert time
app.config.globalProperties.$formatTime = (time) => {
        const date = new Date(time);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}.${minutes}`;
};


app.mount('#app')
