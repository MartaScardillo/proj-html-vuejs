<script>
import MainAboutUs from './MainAboutUs.vue';
import MainHero from './MainHero.vue';
import MainService from './MainService.vue';
export default {
    data() {
        return {};
    },

    components: {
        MainHero,
        MainAboutUs,
        MainService,
    },
};
</script>

<template>
    <MainHero />
    <MainAboutUs />
    <MainService />
</template>

<style></style>
