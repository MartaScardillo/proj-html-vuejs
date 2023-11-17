<script>
import MainCallToAction from './MainCallToAction.vue';
import MainAboutUs from './MainAboutUs.vue';
import MainChooseUs from './MainChooseUs.vue';
import MainHero from './MainHero.vue';
import MainReview from './MainReview.vue';
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
        MainReview,
        MainCallToAction,
    },
};
</script>

<template>
    <MainHero />
    <MainAboutUs />
    <MainService />
    <MainChooseUs />
    <MainReview />
    <MainCallToAction />
</template>

<style></style>
