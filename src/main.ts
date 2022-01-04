import { createApp } from 'vue';
import App from './App.vue';
import 'lib-flexible/flexible'
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'vant/lib/index.css';
import { Button, Form, Field, CellGroup, NavBar, ShareSheet, Card, Uploader } from "vant";

const app = createApp(App);
app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(NavBar);
app.use(ShareSheet);
app.use(Card);
app.use(Uploader);
app.use(store).use(router).mount('#app');
