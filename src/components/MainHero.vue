<script>
export default {
    data() {
        return {
            heroBkg: 'b.png',
            heroPlay: 'play.png',
        };
    },
};
</script>

<template>
    <div
        class="hero d-flex align-items-center"
        :style="{ backgroundImage: `url(${heroBkg})` }"
    >
        <div class="container text-white">
            <div class="hero_text">
                <h1>Welcome to</h1>
                <h1>DogMilo Pets</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                    doloribus veritatis beatae cumque maiores autem.
                </p>
                <ul class="list d-flex align-items-center">
                    <li class="list_item">
                        <span
                            class="blue_hover px-4 py-3 text-white background_orange rounded-pill"
                            >Get Started</span
                        >
                    </li>
                    <li class="list_item">
                        <img
                            class="hero_play p-2 rounded"
                            :src="heroPlay"
                            alt=""
                        />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.hero {
    height: 600px;
    background-size: cover;
}

.hero_text {
    inline-size: 500px;
}

.hero_play {
    width: 45px;
    background-color: #73cfee;
}
</style>
