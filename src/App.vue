<template>
  <div id="app">
    <Gallery v-bind:title="galleryTitle" />
    <h1>Glitch Text</h1>
    <GlitchText :text="this.revealString" :speed="100" /><br>
    <GlitchText :text="this.revealString" :speed="200" /><br>
    <GlitchText :text="this.revealString" :speed="300" /><br>
    <button @click="changeText">change the Text</button> <br>

    <Computed /><br>
    <CustomDirecive /><br> 
    <Form /><br>
  </div>
</template>

<script>
import Gallery from './components/Gallery.vue';
import GlitchText from './components/GlitchText.vue';
import Computed from './components/Computed.vue';
import CustomDirecive from './components/CustomDirective';
import Form from './components/Form.vue';

export default {
  name: 'App',
  components: {
    Gallery,
    GlitchText,
    Computed,
    CustomDirecive,
    Form
  },
  data() {
    return {
      galleryTitle: 'Photography Gallery',
      revealString: 'New Jersey, United States, 1990'
    }
  },
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
