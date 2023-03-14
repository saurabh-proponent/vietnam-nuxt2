<template  >
  <div v-if="isLoaded">
    <Mainbanner />
    <CategoryProducts />
    <RequirementEnqury />
    <CategoryProducts />
    <CategoryProducts />
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
      isLoaded: false
    }
  },
  methods: {
    ...mapActions('categories', ['fetchCategories']),
    async getCategory() {
      try {
        const res = await this.$axios.get('/categories')
        if (res.data) {
          this.isLoaded = true
          console.log(res)

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
