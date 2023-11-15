<script>
import { store } from '../../store.js';

export default {
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <div class="info background_brown white">
        <div class="container">
            <ul class="d-flex justify-between">
                <li>
                    <ul class="d-flex">
                        <li
                            class="list_item"
                            v-for="(info, index) in store.infos"
                        >
                            <font-awesome-icon
                                class="icon"
                                :icon="store.icons[index]"
                            ></font-awesome-icon>
                            <a href="#">{{ info }}</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul class="d-flex">
                        <li class="list_item" v-for="social in store.socials">
                            <a href=""
                                ><font-awesome-icon
                                    class="social"
                                    :icon="social.class"
                                    :style="{ background: social.color }"
                                ></font-awesome-icon
                            ></a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
@use '../style/partials/common';

.info {
    min-height: 30px;
    font-size: 15px;
}

.list_item {
    padding: 15px 5px;
}

.social {
    // background-color: blue;
    width: 15px;
    height: 15px;
    padding: 5px;
    border-radius: 4px;
}
</style>
