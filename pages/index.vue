<template  >
  <div v-if="isLoaded">
    <Mainbanner :category="categories" />

    <!-- medical suplies -->
    <CategoryProducts :category="categories[0]" />
    <RequirementEnqury />
    <CategoryProducts :category="categories[1]" />
    <CategoryProducts :category="categories[2]" />

    <BuyerCategories />
    <CustomerReviews />
    <RequirementEnqury />


  </div>
</template>

<script>

import { mapActions, mapState } from "vuex";

import Mainbanner from "../components/Mainbanner.vue";
import CategoryProducts from "../components/CategoryProducts.vue";
import RequirementEnqury from "../components/RequirementEnqury.vue";
import BuyerCategories from "../components/BuyerCategories.vue";
import CustomerReviews from "../components/CustomerReviews.vue";
import Vue from 'vue';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

Vue.use(VueTelInput);

export default {
  name: "IndexPage",
  components: { Mainbanner, CategoryProducts, RequirementEnqury, BuyerCategories, CustomerReviews, },
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
