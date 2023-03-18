<template>
    <div>
        <TheHeader />
        <main>
            <nuxt />
        </main>
        <TheFooter />
    </div>
</template>

<script>

import TheHeader from './partials/TheHeader.vue';
import TheFooter from './partials/TheFooter.vue';
import { mapActions } from "vuex";


export default {
    data() {
        return {
            loaded: false,
        }
    },
    name: 'defaultPage',
    components: { TheHeader, TheFooter, },
    methods: {
        ...mapActions('categories', ['fetchCategories']),
        ...mapActions('buyerLeads', ['fetchBuyerLeads']),
        ...mapActions('reviews', ['fetchReviews']),
    },
    async created() {
    await this.fetchCategories()
    await this.fetchBuyerLeads()
    await this.fetchReviews()
  }
}
</script>

<style scoped></style>
