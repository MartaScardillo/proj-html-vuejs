import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
    faEnvelope,
    faPhone,
    faStar,
    faAt,
} from '@fortawesome/free-solid-svg-icons';

import {} from '@fortawesome/free-regular-svg-icons';

import {
    faLinkedinIn,
    faSquareFacebook,
    faInstagram,
    faPinterestP,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';

library.add(
    faEnvelope,
    faPhone,
    faSquareFacebook,
    faPinterestP,
    faTwitter,
    faLinkedinIn,
    faInstagram,
    faStar,
    faAt
);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
