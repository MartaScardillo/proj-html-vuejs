<script>
import MainAboutUs from './MainAboutUs.vue';
import MainChooseUs from './MainChooseUs.vue';
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
        MainChooseUs,
    },
};
</script>

<template>
    <MainHero />
    <MainAboutUs />
    <MainService />
    <MainChooseUs />
</template>

<style></style>
