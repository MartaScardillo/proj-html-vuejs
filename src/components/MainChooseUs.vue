<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
            dogImg: 'why.png',
            pawImg: 'dog-icon.png',
        };
    },
};
</script>

<template>
    <div class="row">
        <div class="col-6">
            <img style="height: 1000px" :src="dogImg" alt="" />
        </div>
        <div class="col-6">
            <div class="mt-5 p-3">
                <span class="gray">
                    <img style="width: 55px" :src="pawImg" alt="" />
                    Choose us
                </span>
                <h1>Why Choose Us?</h1>
                <ul>
                    <li
                        class="d-flex align-items-center"
                        :style="{ marginLeft: index * 150 + 'px' }"
                        v-for="(reason, index) in store.reasons"
                    >
                        <div>
                            <img class="img" :src="reason.img" alt="" />
                        </div>
                        <div class="mx-5">
                            <h4>{{ reason.title }}</h4>
                            <p>{{ reason.text }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>
