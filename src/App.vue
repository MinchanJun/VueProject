<template>
  <div id="app">

    <div class="products">
      <Product  v-for="product in products"
                :key="product.id"
                :id="product.id"
                :name="product.name"
                :price="product.price"
      />
    </div>
    <Cart />

    <Gallery v-bind:title="hihihihihihihi" />
    <!-- <Gallery v-bind:title="galleryTitle" /> -->
    <h1>Glitch Text</h1>

    <GlitchText :text="hihihihihihihi" :speed="100" /><br>
    <!-- <GlitchText :text="this.revealString" :speed="100" /><br> -->
    <!-- <GlitchText :text="this.revealString" :speed="200" /><br> -->
    <!-- <GlitchText :text="this.revealString" :speed="300" /><br> --> 
    
    <button @click="changeText">change the Text</button> <br>

    <Computed /><br>

    <Form /><br>
    <!-- Custom Directive practice -->
    <CustomDirecive /><br> 

    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>

    <!-- Mixin Practice -->
    <div>
      <p>Hello World</p>
      <HelloWorld msg="Hi I am Hello World" />
      <HelloWorld msg="Hi I am Hello World" />
      <HelloWorld msg="Hi I am Hello World" />
      <p>Hello Universe</p>
      <HelloUniverse msg="Hi I am Hello Universe" />
      <HelloUniverse msg="Hi I am Hello Universe" />
      <HelloUniverse msg="Hi I am Hello Universe" />
    </div>

  </div>
</template>

<script>
import Gallery from './components/Gallery.vue';
import GlitchText from './components/GlitchText.vue';
import Computed from './components/Computed.vue';
import CustomDirecive from './components/CustomDirective';
import Form from './components/Form.vue';

import store from '@/store.js';
import Product from './components/Product.vue';
import Cart from './components/Cart.vue';

import HelloWorld from './components/HelloWorld.vue';
import HelloUniverse from './components/HelloUniverse.vue';


export default {
  name: 'App',
  store,
  components: {
    Gallery,
    GlitchText,
    Computed,
    CustomDirecive,
    Form,
    Product,
    Cart,
    HelloWorld,
    HelloUniverse
  },
  data() {
    return store.state;
  },
  // Testing Vuex to return store only
  // data() {
  //   return {
  //     galleryTitle: 'Photography Gallery',
  //     revealString: 'New Jersey, United States, 1990',
  //   }
  // },
  methods: {
    changeText() {
      this.revealString = 'Seoul, Korea 1991'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
