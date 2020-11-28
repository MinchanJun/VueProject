<template>
    <div>
        {{ name }} - {{ price }} USD <button v-on:click="addToCart(id)">Add To Cart</button>
    </div>
</template>

<script>
import store from "@/store.js";

export default {
    name: 'Product',
    props: ["price", "name", "id"],
    data() {
        // use the store for all state in this component
        return store;
    },
    methods: {
        addToCart(productId) {
            store.commit("addOneToCart", productId);
            // store.cart.forEach(element => {
            //     if (element.id === productId) {
            //         element.amount++;
            //     }
            // });
            // console.log("adding to cart", productId);
        }
    }
}
</script>