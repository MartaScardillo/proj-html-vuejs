<script>
import { store } from '../store';
import ServiceCard from './ServiceCard.vue';

export default {
    data() {
        return {
            dogBkg: 'dog-logo.png',
            leftBkg: 'dog-left.png',
        };
    },

    components: {
        ServiceCard,
    },
};
</script>

<template>
    <div
        class="container-fluid background py-5"
        :style="{
            backgroundImage: `url(${dogBkg})`,
        }"
    >
        <div class="container">
            <div class="text-center d-flex flex-column align-items-center">
                <span>Service</span>
                <h1 class="fs-3 service_text">
                    DogMilo Pet Care Service For Your Best Friends.
                </h1>
            </div>
            <ServiceCard />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use './style/partials/variables' as *;

.background {
    height: 600px;
    background-color: $darkerWhite;
    background-repeat: no-repeat;
}

.service_text {
    inline-size: 350px;
}
</style>
