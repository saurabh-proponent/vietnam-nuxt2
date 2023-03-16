export const actions = {
    async fetchCategories({ commit }, params) {
        try {
            const res = await this.$axios.get('/categories')
            if (res.data) {
                commit('FETCH_CATEGORIES', res.data.categories);
            }
        } catch (err) {
            this.$toast.error(err)
        }
    }
}

export const mutations = {
    FETCH_CATEGORIES(state, categories) {
        state.categories = categories;
        state.isLoaded = true
    },
}

export const state = () => ({
    categories: [],
    isLoaded: false,
    error:""

});
