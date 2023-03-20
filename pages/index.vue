<template  >
  <div v-if="isLoaded">
    <Mainbanner />
    <!-- medical suplies -->
    <HomeCategories :category="categories[0]" />
    <RequirementEnqury />
    <HomeCategories :category="categories[1]" />
    <HomeCategories :category="categories[2]" />
    <BuyerCategories />
    <CustomerReviews />
    <RequirementEnqury />
  </div>
  <div v-else>
    <Loading />
  </div>
</template>

<script>
import Vue from 'vue';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';
import { mapState } from "vuex";

import Mainbanner from "../components/Mainbanner.vue";
import HomeCategories from "../components/HomeCategories.vue";
import RequirementEnqury from "../components/shared/RequirementEnqury.vue";
import BuyerCategories from "../components/BuyerCategories.vue";
import CustomerReviews from "../components/CustomerReviews.vue";
import Loading from '../components/shared/Loading.vue';
import { BCarousel } from 'bootstrap-vue';
import { CarouselPlugin } from 'bootstrap-vue';


Vue.use(VueTelInput);
Vue.component('b-carousel', BCarousel);
Vue.use(CarouselPlugin);


export default {
  name: "IndexPage",
  components: { Mainbanner, HomeCategories, RequirementEnqury, BuyerCategories, CustomerReviews, Loading,},
  head() {
    return {
      title: 'VietnamFactoryb2b.com | Vietnam To The World',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'We offer vietnam to the world.'
        },

      ]
    };
  },
  data() {
    return {

    }
  },

  computed: {
    ...mapState('categories', ['categories', 'isLoaded']),
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },



};
</script>

