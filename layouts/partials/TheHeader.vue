
<template>
    <header class="header">
        <div class="top-header">
            <div class="container-fluid">
                <div class="row d-flex align-items-center">
                    <div class="col-lg-3">
                        <nuxt-link to="/" class="navbar-brand">
                            <img src="../../assets/img/logos/logo.svg" class="img-fluid logo" alt="">
                        </nuxt-link>
                    </div>
                    <div class="col-lg-5">
                        <form class="d-flex" role="search">
                            <select name="" id="" class="form-select">
                                <option value="">{{ $t("Products") }}</option>
                                <option value="">{{ $t('Buyers Leads') }}</option>
                            </select>
                            <input class="form-control" type="search" :placeholder="$t('Looking for')" aria-label="Search">
                            <button class="search-btn" type="submit"><i class="fa fa-search"></i>
                                <span>{{ $t("Search") }}</span></button>
                        </form>
                    </div>
                    <div class="col-lg-4">
                        <ul class="top-list">
                            <!-- LANGUAGE TRANSLATION  -->
                            <li>
                                <a href="#" @click.prevent.stop="changeLang()">
                                    <img :alt="activeLang" class="flagIcon"
                                        :src="require(`~/assets/images/languages/${this.activeLanguage}.svg`)" />
                                    <p class="text">{{ this.activeLanguage === "en" ? "ENGLISH" : "VIETNAME" }} </p>
                                </a>
                            </li>
                            <!-- LANGUAGE TRANSLATION END -->
                            <li>
                                <a href="">
                                    <i class="fa-solid fa-cart-plus"></i>
                                    <p class="text">{{ $t("Sell") }}</p>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fa-solid fa-circle-info"></i>
                                    <p class="text">{{ $t('Help') }}</p>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fa-regular fa-envelope-open"></i>
                                    <p class="text">{{ $t("Message") }}</p>
                                </a>
                            </li>
                            <li>
                                <button class="sign-in top">
                                    <i class="fa-solid fa-user-plus"></i>
                                    <p class="text">{{ $t("Sign In") }}</p>
                                </button>

                                <div id="sign-form" class="form">
                                    <button type="button" class="sign-in btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                    <form class="contact-form">
                                        <div class="field-wrapper">
                                            <label>E-mail Address</label>
                                            <input type="email" class="text-field-input">
                                        </div>
                                        <div class="field-wrapper">
                                            <label>Password</label>
                                            <input type="password" class="text-field-input">
                                        </div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                            <label class="form-check-label" for="exampleCheck1">Remember me</label>
                                        </div>
                                        <div class="mb-3 form-check">
                                            <a href="">Forget your password?</a>
                                        </div>
                                        <div class="btn-wraper mb-3">
                                            <button type="submit" class="btn-primary"> LOG IN</button>
                                        </div>
                                        <div class="not-sign">
                                            <p>Not Signed up Yet?</p>
                                            <a href="">SIGN UP</a>
                                        </div>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="hamburger">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <!-- dropdown -->
                        <li class="nav-item dropdown">
                            <nuxt-link to="" class="nav-link dropdown-toggle p-0" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            </nuxt-link>
                            <ul class="dropdown-menu">
                                <li v-for="item in categories" :key="item.id">
                                    <nuxt-link class="dropdown-item" :to="'/categories/' + item.slug">{{
                                        item.title }}</nuxt-link>
                                </li>
                            </ul>
                        </li>
                        <!-- dropdown end -->

                        <li class="nav-item">

                            <a class="nav-link" aria-current="page" href="">{{ $t('All') }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">{{ $t("Products") }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">{{ $t('Buyers Leads') }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">{{ $t('Consultant Services') }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">{{ $t('Pricing') }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">{{ $t('About Us') }}</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav social-nav ms-auto">
                        <li class="list-item">
                            <a class="nav-link" href="">{{ $t('Tell Us Your Requirement') }}</a>
                        </li>
                        <li class="list-item">
                            <ul class="social-handle">
                                <li class="nav-item">{{ $t('Follow us on') }}</li>
                                <li class="nav-item"><a href="" class="nav-link"><i class="fa-brands fa-facebook-f"></i></a>
                                </li>
                                <li class="nav-item"><a href="" class="nav-link"><i class="fa-brands fa-instagram"></i></a>
                                </li>
                                <li class="nav-item"><a href="" class="nav-link"><i class="fa-brands fa-twitter"></i></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "TheHeader",
    components: {},
    data() {
        return {
            activeLang: "",
        };
    },
    computed: {
        ...mapState('categories', ['categories', 'isLoaded']),
        availableLocales() {
            return this.$i18n.locales;
        },
        activeLanguage() {
            return this.$i18n.locale;
        },
    },
    methods: {
        changeLang() {
            if (this.activeLang == 'en') {
                this.activeLang = 'vn'
                localStorage.setItem("lang", this.activeLang)
            } else {
                this.activeLang = 'en'
                localStorage.setItem("lang", this.activeLang)
            }
            this.$i18n.setLocale(this.activeLang);

        },

        setLang() {
            this.activeLang = localStorage.getItem("lang")
            this.$i18n.setLocale(this.activeLang);

        },

    },
    mounted() {
        this.setLang()
    },
    mounted() {
        if (process.client) {
            const header = document.querySelector('.header')

            window.addEventListener('scroll', () => {
                const scroll = window.pageYOffset

                if (scroll >= 100) {
                    header.classList.add('sticky')
                } else {
                    header.classList.remove('sticky')
                }
            })
        }
    },
};

</script>





<style scoped></style>


