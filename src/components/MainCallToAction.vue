<script>
export default {
    data() {
        return {};
    },
};
</script>

<template>
    <div class="container rounded-4 call background_orange">
        <div class="d-flex align-items-center justify-content-center">
            <img class="subscribe" src="news.png" alt="" />
            <div class="p-5">
                <h3 class="text-white">Subscribe to Our Newsletter</h3>
                <input
                    class="form-control p-3"
                    type="email"
                    placeholder="Your Email Here"
                    style="position: relative"
                />
                <div
                    class="background_orange p-3 rounded d-flex align-items-center justify-content-center"
                    style="
                        position: absolute;
                        top: 48%;
                        left: 83%;
                        width: 50px;
                        height: 50px;
                    "
                >
                    <font-awesome-icon
                        class="text-white fs-4"
                        :icon="['fas', 'at']"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 350px;
}

.call {
    width: 900px;
    position: relative;
    z-index: 40;
}

.subscribe {
    margin-top: -100px;
}
</style>
