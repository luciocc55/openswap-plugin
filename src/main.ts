import { createApp } from 'vue';
import App from './App.vue';
import 'virtual:windi.css';
import { createPinia } from 'pinia';

// We cant use router on lib mode it doesnt work 
createApp(App).use(createPinia()).mount('#openswap-plugin');
