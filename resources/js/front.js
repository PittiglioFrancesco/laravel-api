require ('./boostrap');

window.Vue = require ('vue');
window.axios = require('axios');

// import Vue from 'vue';
// import axios from 'axios';
import App from './views/App';

const App = new Vue()({
    el: '#root',
    render: h => h(App)
});