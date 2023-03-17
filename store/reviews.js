export const actions = {
    async fetchReviews({ commit }, params) {
        try {
            const res = await this.$axios.get('/reviews')
            if (res.data) {
                commit('FETCH_REVIEWS', res.data.reviews);
            }
        } catch (err) {
            this.$toast.error(err)
        }
    }
}

export const mutations = {
    FETCH_REVIEWS(state, reviews) {
        state.reviews = reviews;
        state.isReviews = true
    },
}

export const state = () => ({
    reviews: [],
    isReviews: false,
    error: ""

});
