import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MenuIcon from 'vue-material-design-icons/Menu.vue';

components: {
  MenuIcon;
}



createApp(App).use(router).mount('#app')
