<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
            contacts: [
                {
                    icon: ['fas', 'location-arrow'],
                    info: '4500 Mercantile plaza, suite 300, fort worth, TX, 76137, USA',
                },
                {
                    icon: ['fas', 'phone'],
                    info: '+1(817)901 3377',
                },
                {
                    icon: ['fas', 'envelope'],
                    info: 'info@example.com',
                },
            ],
        };
    },

    props: {
        informationData: Object,
    },
};
</script>

<template>
    <div
        class="footer d-flex justify-content-center align-items-center flex-column"
    >
        <div class="container-fluid p-5 mt-5 brd">
            <div class="container">
                <div class="row">
                    <div class="col col-3">
                        <h4 class="orange pb-3">Get In Touch</h4>
                        <p class="light-gray">
                            Have a Question for us? <br />
                            We'll answer your problem here!
                        </p>
                        <ul class="d-flex text-white">
                            <li
                                class="list_item"
                                v-for="social in store.socials"
                            >
                                <a href=""
                                    ><font-awesome-icon
                                        class="social rounded p-1"
                                        :icon="social.class"
                                        :style="{ background: social.color }"
                                    ></font-awesome-icon
                                ></a>
                            </li>
                        </ul>
                    </div>
                    <div
                        class="col col-2"
                        v-for="information in store.informations"
                    >
                        <ul>
                            <h4 class="orange pb-3">
                                {{ information.title }}
                            </h4>
                            <li
                                class="light-gray mb-2"
                                v-for="link in information.links"
                            >
                                <a href="#">
                                    {{ link }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col col-3">
                        <ul>
                            <h4 class="orange pb-3">Contact Me</h4>
                            <li
                                class="light-gray mb-2 d-flex align-items-center"
                                v-for="contact in contacts"
                            >
                                <font-awesome-icon
                                    class="pe-2 orange"
                                    :icon="contact.icon"
                                ></font-awesome-icon>
                                <span>{{ contact.info }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-4">
            <span class="text-white">Copyright 2022 by AttDogMilo.com</span>
        </div>
    </div>
</template>

<style>
.footer {
    background-color: black;
    margin-top: -100px;
    height: 500px;
}

.brd {
    border-bottom: 1px rgba(128, 128, 128, 0.289) solid;
}
</style>
