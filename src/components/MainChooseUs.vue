<script>
export default {
    data() {
        return {
            dogImg: 'why.png',
        };
    },
};
</script>

<template>
    <div class="row">
        <div class="col-6">
            <img :src="dogImg" alt="" />
        </div>
        <div class="col-6"></div>
    </div>
</template>

<style lang="scss"></style>
