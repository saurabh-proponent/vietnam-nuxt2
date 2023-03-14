<template>
  <div>
    <Header />
    <Mainbanner />
    <CategoryProducts />
    <RequirementEnqury />
    <CategoryProducts />
    <CategoryProducts />
    <BuyerCategories />
    <CustomerReviews />
    <RequirementEnqury />
    <FooterPart />
  </div>
</template>

<script>
import Mainbanner from "../components/Mainbanner.vue";
import CategoryProducts from "../components/CategoryProducts.vue";
import RequirementEnqury from "../components/RequirementEnqury.vue";
import BuyerCategories from "../components/BuyerCategories.vue";
import CustomerReviews from "../components/CustomerReviews.vue";
import FooterPart from "../components/FooterPart.vue";
import Vue from 'vue';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

Vue.use(VueTelInput);

export default {
  name: "IndexPage",
  components: { Mainbanner, CategoryProducts, RequirementEnqury, BuyerCategories, CustomerReviews, FooterPart},
};
</script>
