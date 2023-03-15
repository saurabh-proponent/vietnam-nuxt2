<template  >
  <div v-if="isLoaded">
    <Mainbanner :categories="categories" />

    <!-- medical suplies -->
    <HomeCategories :category="categories[0]" />
    <RequirementEnqury />
    <HomeCategories :category="categories[1]" />
    <HomeCategories :category="categories[2]" />
    <BuyerCategories :categories="categories" />
    <CustomerReviews />
    <RequirementEnqury />


  </div>
</template>

<script>

import { mapActions, mapState } from "vuex";

import Mainbanner from "../components/Mainbanner.vue";
import HomeCategories from "../components/HomeCategories.vue";
import RequirementEnqury from "../components/shared/RequirementEnqury.vue";
import BuyerCategories from "../components/BuyerCategories.vue";
import CustomerReviews from "../components/CustomerReviews.vue";
import Vue from 'vue';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

Vue.use(VueTelInput);

export default {
  name: "IndexPage",
  components: { Mainbanner, HomeCategories, RequirementEnqury, BuyerCategories, CustomerReviews, },
  data() {
    return {
      isLoaded: false,
      categories: []
    }
  },
  methods: {
    // ...mapActions('categories', ['fetchCategories']),
    async getCategory() {
      try {
        const res = await this.$axios.get('/categories')
        if (res.data) {
          this.isLoaded = true
          this.categories = res.data.categories
          console.log(res.data.categories)

        }

      } catch (e) {
        console.log(e)
      }
    },
  },
  mounted() {
    this.getCategory()
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }



};
</script>
