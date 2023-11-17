<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <div
        class="container d-flex justify-content-center align-items-center"
        style="height: 500px"
    >
        <div class="row">
            <div class="col col-4 p-3">
                <span>
                    <img :src="store.pawPrint" alt="" />
                    Review & Rating
                </span>
                <div>
                    <h3 class="py-3">Over 8000 Customers With 5-Star Review</h3>
                    <p class="gray">
                        It is a long established fact that a reader will be
                        distructed by the readable content of a page when
                        looking at its layout
                    </p>
                    <span class="stars">
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                    </span>
                </div>
            </div>
            <div class="col col-4">
                <div class="background_gray p-3">
                    <span class="stars">
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                    </span>
                    <div class="pt-2">
                        <h5 class="py-2">Great Place</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Minima odio sint aspernatur fugit quaerat,
                            totam blanditiis animi hic, maxime iusto
                            necessitatibus deleniti odit quasi impedit pariatur
                            iste quae officia eos!
                        </p>
                    </div>
                    <div class="d-flex pe-3">
                        <img
                            class="rounded-circle"
                            style="width: 60px; height: 60px"
                            src="t1.png"
                            alt=""
                        />
                        <div class="px-3">
                            <h5>Tobias May</h5>
                            <p>UI/UX Designer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-4">
                <div class="background_gray p-3">
                    <span class="stars">
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                    </span>
                    <div class="pt-2">
                        <h5 class="py-2">Great Place</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Minima odio sint aspernatur fugit quaerat,
                            totam blanditiis animi hic, maxime iusto
                            necessitatibus deleniti odit quasi impedit pariatur
                            iste quae officia eos!
                        </p>
                    </div>
                    <div class="d-flex pe-3">
                        <img
                            class="rounded-circle"
                            style="width: 60px; height: 60px"
                            src="t1.png"
                            alt=""
                        />
                        <div class="px-3">
                            <h5>Tobias May</h5>
                            <p>UI/UX Designer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-end p-3">
                <div class="background_orange m-1">
                    <img class="arrow" src="left-arrow.png" alt="" />
                </div>
                <div class="background_orange m-1">
                    <img class="arrow" src="next.png" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use './style/partials/variables' as *;
.stars {
    color: $yellow;
}

.arrow {
    width: 40px;
}
</style>
