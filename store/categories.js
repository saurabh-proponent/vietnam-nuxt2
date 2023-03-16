export const actions = {
    async fetchCategories({ commit }, params) {
        try {
            const res = await this.$axios.get('/categories')
            if (res.data) {
                commit('FETCH_CATEGORIES', res.data.categories);
                console.log("store action", res.data.categories)
            }
            return res.data
        } catch (e) {
            return e
        }
    }
}

export const mutations = {
    FETCH_CATEGORIES(state, categories) {

        console.log("in mutation +++++++++++++++++", categories)
        console.log("in mutation state +++++++++++++++++", state)
        state.categories = categories;
    },
}

export const state = () => ({
    categories: []
});
