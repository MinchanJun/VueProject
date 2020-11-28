import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        products: [
            {
                id: 1,
                name: "balloon",
                price: 10
            },
            {
                id: 2,
                name: "ballan2",
                price: 3
            },
            {
                id: 3,
                name: "ballaon3",
                price: 4
            }
        ],
        cart: [
            {
                id: 1,
                name: "balloon",
                price: 10,
                amount: 0
            },
            {
                id: 2,
                name: "ballan2",
                price: 3,
                amount: 0
            },
            {
                id: 3,
                name: "ballaon3",
                price: 4,
                amount: 0
            }
        ]
    },
    mutations: {
        addOneToCart: (state, productId) => {
            console.log(`mutation: addOneToCart with productId: ${productId}`);
            const newState = { ...state };
            newState.cart = state.cart.map(element => {
                if (productId === element.id) {
                    element.amount++;
                    return element;
                }
                return element;
            });
            return newState;
        },
        removeAllFromCart: (state, productId) => {
            console.log(`mutation: removeAllFromCart with productId: ${productId}`);
            const newState = { ...state };
            newState.cart = state.cart.map(element => {
                if (productId !== element.id) {
                    return element;
                }
                element.amount = 0;
                return element;
            });
            return newState;
        }
    }
});

export default store;