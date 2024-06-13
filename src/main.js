import { createApp } from 'vue';
import App from './App.vue';
import './assets/app.css';

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from './plugins/fontawesome';

const app = createApp(App);

// Register the FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Disable Vue Devtools and Production Tip in Production
if (process.env.NODE_ENV === 'production') {
  app.config.devtools = false;
  app.config.productionTip = false;
}

app.mount('#app');
