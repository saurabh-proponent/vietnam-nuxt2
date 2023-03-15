<template>
    <section class="hero-wrap">
        <div class="container">
            <div class="row gy-3">
                <div class="col-lg-8">
                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <img src="../assets/img/slider/slider-1.jpg" class="img-fluid" alt="..." />
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src="../assets/img/slider/slider-1.jpg" class="img-fluid" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/img/slider/slider-1.jpg" class="img-fluid" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="aside-right">
                                <div class="row">
                                    <div class="col-md-4 d-flex align-items-center justify-content-center">
                                        <img src="../assets/img/slider/rubber.png" class="img-fluid" alt="" />
                                    </div>
                                    <div class="col-md-8">
                                        <h3 class="heading">NATURAL RUBBER SVRL 3L</h3>
                                        <p class="text">
                                            SVRL 3L rubber (equivalent to TSR 3L technical rubber)
                                        </p>
                                        <a href="" class="detail-link">+ Get Detail</a>
                                    </div>
                                </div>
                            </div>
                            <div class="aside-right">
                                <div class="row">
                                    <div class="col-md-4 d-flex align-items-center justify-content-center">
                                        <img src="../assets/img/slider/wet-wipes.png" class="img-fluid" alt="" />
                                    </div>
                                    <div class="col-md-8">
                                        <h3 class="heading">Wet wipes</h3>
                                        <p class="text">
                                            Baby care wet wipes 80 sheets do not use Phenoxyethanol
                                            preservatives, banned Parabens.
                                        </p>
                                        <a href="" class="detail-link">+ Get Detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main categories  -->
            <div class="desktop-product-wrap">
                <div class="row border my-4 mx-0 d-flex align-items-center">
                    <div class="col-lg-2 col-md-4 col-6" v-for="(item, index) in categories.slice(0, 6)" :key="index">
                        <nuxt-link :to="item.slug">
                            <div class="product-wrap">
                                <img :src="item.image" class="img-fluid" alt="" />
                                <span class="product-name">{{ item.title }}</span>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <!-- Main categories end -->

            <div class="mobile-product-wrap">
                <ul class="product-list">
                    <li class="item">
                        <a href="">
                            <div class="product-wrap">
                                <img src="../assets/img/icons/byuer-leads/medical.png" class="img-fluid" alt="" />
                            </div>
                        </a>
                        <span class="product-name">Medical</span>
                    </li>
                    <li class="item">
                        <a href="">
                            <div class="product-wrap">
                                <img src="../assets/img/icons/byuer-leads/food.png" class="img-fluid" alt="" />
                            </div>
                            <span class="product-name">Food</span>
                        </a>
                    </li>
                    <li class="item">
                        <a href="">
                            <div class="product-wrap">
                                <img src="../assets/img/icons/byuer-leads/industrial.png" class="img-fluid" alt="" />
                            </div>
                            <span class="product-name">Industrial</span>
                        </a>
                    </li>
                    <li class="item">
                        <a href="">
                            <div class="product-wrap">
                                <img src="../assets/img/icons/byuer-leads/fashion.png" class="img-fluid" alt="" />
                            </div>
                            <span class="product-name">Fashion</span>
                        </a>
                    </li>
                    <li class="item">
                        <a href="">
                            <div class="product-wrap">
                                <img src="../assets/img/icons/byuer-leads/cosmetic.png" class="img-fluid" alt="" />
                            </div>
                            <span class="product-name">Cosmetic</span>
                        </a>
                    </li>
                    <li class="item">
                        <a href="">
                            <div class="product-wrap">
                                <img src="../assets/img/icons/byuer-leads/furniture.png" class="img-fluid" alt="" />
                            </div>
                            <span class="product-name">Furniture</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="row">
                <div class="col">
                    <div class="box-wraper">
                        <div class="icons-box">
                            <img src="../assets/img/icons/sg-support.png" alt="" class="img-fluid" />
                            <h2 class="heading">sgs support</h2>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="box-wraper">
                        <div class="icons-box">
                            <img src="../assets/img/icons/tuv-support.png" class="img-fluid" alt="" />
                            <h2 class="heading">TUV SUPPORT</h2>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="box-wraper">
                        <div class="icons-box">
                            <img src="../assets/img/icons/safe-trade.png" class="img-fluid" alt="" />
                            <h2 class="heading">SAFE TRADE</h2>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="box-wraper">
                        <div class="icons-box">
                            <img src="../assets/img/icons/verified-supplier.png" class="img-fluid" alt="" />
                            <h2 class="heading">VERIFIED SUPPLIER</h2>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="box-wraper">
                        <div class="icons-box">
                            <img src="../assets/img/icons/globalnetwork.png" class="img-fluid" alt="" />
                            <h2 class="heading">GLOBAL NETWORK</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import MainCategoyBox from './shared/MainCategoyBox.vue';
export default {
    name: "Mainbanner",
    components: { MainCategoyBox },
    props: ["categories"],
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
    mounted() {

    },
};
</script>
