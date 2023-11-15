<script>
export default {
    data() {
        return {
            logo: 'logo.png',
            tabs: [
                'Home',
                'About',
                'Services',
                'Training',
                'Blogs',
                'Get In Touch!',
            ],
        };
    },
};
</script>

<template>
    <div class="container">
        <ul class="d-flex align-items-center justify-content-between">
            <li class="list_item"><img :src="logo" alt="" /></li>
            <li>
                <ul class="d-flex align-items-center fs-5">
                    <li class="list_item p-4" v-for="(tab, index) in tabs">
                        <span class="orange" v-if="index == 0">{{ tab }}</span>
                        <span
                            class="blue_hover px-4 py-3 text-white background_orange rounded-pill"
                            v-else-if="index == 5"
                            >{{ tab }}</span
                        >
                        <span class="orange_hover light-gray" v-else>{{
                            tab
                        }}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
@use '../style/partials/common' as *;
</style>
