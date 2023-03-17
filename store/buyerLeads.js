export const actions = {
    async fetchBuyerLeads({ commit }, params) {
        try {
            const res = await this.$axios.get('/buyer-leads')
            if (res.data) {
                commit('FETCH_BUYERLEADS', res.data);
            }
        } catch (err) {
            this.$toast.error(err)
        }
    }
}

export const mutations = {
    FETCH_BUYERLEADS(state, buyerLeads) {
        state.buyerLeads = buyerLeads.buyer_leads;
        state.totalLeads = buyerLeads.totalLeads;
        state.totalPages = buyerLeads.totalPages;
        state.currentPage = buyerLeads.currentPage;
        state.isBuyerLeads = true
    },
}

export const state = () => ({
    buyerLeads: [],
    totalLeads: 0,
    totalPages: 0,
    currentPage: 0,
    isBuyerLeads: false,
    error: ""
});
