<template>
    <section class="review-wraper global-space" v-if="isReviews">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="heading-wrap">
                        <h1 class="main-heading">CUSTOMER REVIEWS</h1>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div id="carousel-review" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carousel-review" data-bs-slide-to="0" class="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carousel-review" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carousel-review" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">

                            <div class="carousel-item active" data-bs-interval="10000" v-for="(item, index) in reviews"
                                :key="index">
                                <img :src="item.image" class="img-fluid" alt="">
                                <h5 class="name">{{ item.name }}</h5>
                                <p class="designation">{{ item.position }}</p>
                                <i class="fa-solid fa-quote-left"></i>
                                <span>{{ item.description }}</span>
                                <i class="fa-solid fa-quote-right"></i>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import MainCategoyBox from './shared/MainCategoyBox.vue';
export default {
    name: "Mainbanner",
    components: { MainCategoyBox },
    props: [""],
    data() {
        return {
        };
    },
    methods: {
        toggleItem(index) {
            if (this.active === index) {
                this.active = null;
            } else {
                this.active = index;
            }
        },
    },
    computed: {
        ...mapState('reviews', ['reviews', 'isReviews']),
    },
};
</script>
