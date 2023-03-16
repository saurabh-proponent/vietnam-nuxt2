
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
                                <option value="">Product</option>
                                <option value="">Buy Lead</option>
                            </select>
                            <input class="form-control" type="search" placeholder="what you are looking for"
                                aria-label="Search">
                            <button class="search-btn" type="submit"><i class="fa fa-search"></i>
                                <span>Search</span></button>
                        </form>
                    </div>
                    <div class="col-lg-4">
                        <ul class="top-list">
                            <li>
                                <a href="">
                                    <i class="fa-solid fa-flag-usa"></i>
                                    <p class="text">ENGLISH</p>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fa-solid fa-cart-plus"></i>
                                    <p class="text">SELL</p>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fa-solid fa-circle-info"></i>
                                    <p class="text">HELP</p>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fa-regular fa-envelope-open"></i>
                                    <p class="text">MESSAGE</p>
                                </a>
                            </li>
                            <li>
                                <button class="sign-in top">
                                    <i class="fa-solid fa-user-plus"></i>
                                    <p class="text">SIGN IN</p>
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
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
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
                    <ul class="navbar-nav">

                        <!-- dropdown -->
                        <li class="nav-item dropdown">
                            <nuxt-link to="" class="nav-link dropdown-toggle p-0" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            </nuxt-link>
                            <ul class="dropdown-menu">
                                <li v-for="item in categories" :key="item.id">
                                    <nuxt-link class="dropdown-item" :to="item.slug">{{ item.title }}</nuxt-link>
                                </li>

                            </ul>
                        </li>
                        <!-- dropdown end -->



                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="">All</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Buyers Leads</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Consultant Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">About Us</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav social-nav ms-auto">
                        <li class="list-item">
                            <a class="nav-link" href="">Tell Us Your Requirement</a>
                        </li>
                        <li class="list-item">
                            <ul class="social-handle">
                                <li class="nav-item">Follow us on</li>
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
    computed: {
        ...mapState('categories', ['categories']),
    },
};
</script>





<style scoped></style>


