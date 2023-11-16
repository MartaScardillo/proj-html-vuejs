<script>
import { store } from '../store';
import ServiceCard from './ServiceCard.vue';

export default {
    data() {
        return {
            store,
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
    <div class="container-fluid background py-5 right">
        <div class="container-fluid left">
            <div class="container">
                <div class="text-center d-flex flex-column align-items-center">
                    <span class="pb-4 gray">Service</span>
                    <h1 class="fs-3 service_text">
                        DogMilo Pet Care Service For Your Best Friends.
                    </h1>
                </div>
                <div class="row justify-content-center mt-5">
                    <ServiceCard
                        v-for="service in store.services"
                        :serviceData="service"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use './style/partials/variables' as *;

.background {
    background-color: $darkerWhite;

    .left {
        background-image: url('dog-left.png');
        background-position-x: left;
        background-repeat: no-repeat;
    }

    &.right {
        background-image: url('dog-logo.png');
        background-position-x: right;
    }
}

.service_text {
    inline-size: 350px;
}
</style>
