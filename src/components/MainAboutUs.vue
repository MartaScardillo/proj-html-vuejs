<script>
export default {
    data() {
        return {
            dogBkg: 'dog-logo.png',
            aboutImg: 'about.png',
            pawPrint: 'dog-icon.png',
        };
    },
};
</script>

<template>
    <div
        class="container-fluid background"
        :style="{ backgroundImage: `url(${dogBkg})` }"
    >
        <div class="container my-5">
            <div class="row justify-content-around align-items-center">
                <div class="col-5">
                    <img :src="aboutImg" alt="" />
                </div>
                <div class="col-5">
                    <span class="gray"
                        ><img class="pe-3" :src="pawPrint" alt="" />About
                        us</span
                    >
                    <h1 class="my-4">Welcome DogMilo Pets</h1>
                    <div class="gray">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ducimus amet assumenda nisi dicta iure
                            incidunt nostrum sit inventore perspiciatis
                            exercitationem itaque consectetur vel porro fuga
                            debitis quo impedit, ut eveniet?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corrupti, amet? Saepe adipisci, ad quae
                            similique ipsam accusantium magnam reprehenderit
                            quibusdam non in facilis corporis nisi vero. Velit
                            necessitatibus maxime et!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.background {
    background-repeat: no-repeat;
    background-position-x: right;
}
</style>
