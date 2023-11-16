<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        };
    },

    props: {
        serviceData: Object,
    },
};
</script>

<template>
    <div class="col col-2">
        <div
            class="card rounded-pill background_orange d-flex justify-content-center align-items-center text-center text-white p-4"
        >
            <div>
                <img class="p-3" :src="serviceData.img" alt="" />
            </div>

            <h5>{{ serviceData.title }}</h5>
            <p>{{ serviceData.text }}</p>
            <div
                class="background_yellow p-2 rounded-circle arrow d-flex justify-content-center align-items-center"
            >
                <img style="width: 15px" src="right.png" alt="" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use './style/partials/variables' as *;
img {
    width: 100px;
}

.card {
    height: 300px;

    &:hover {
        background-color: $brown;
    }
}

.arrow {
    width: 40px;
    height: 40px;
}
</style>
