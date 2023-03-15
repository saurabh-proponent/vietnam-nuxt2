

// export const actions = {
//     async fetchCategories({ commit }, params) {
//         console.log(params);
//         return new Promise((resolve, reject) => {
//             this.$request.get('/categories', { params })
//                 .then((response) => {
//                     commit('FETCH_CATEGORIES', response.data.products);
//                     resolve(response);
//                 }).catch(error => {
//                     reject(error)
//                 });
//         });
//     }
// }

// export const mutations = {
//     FETCH_CATEGORIES(state, products) {
//         state.products = products;
//     },
// }

// export const state = () => ({
//     products: []
// });
