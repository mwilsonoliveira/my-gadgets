import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.css'
const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')
