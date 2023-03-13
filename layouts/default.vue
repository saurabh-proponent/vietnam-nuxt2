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






export default {
    data() {
        return {
            loaded: false,
        }
    },
    name: 'defaultPage',
    components: { TheHeader, TheFooter, },
    methods: {
    },
}
</script>

<style scoped></style>
