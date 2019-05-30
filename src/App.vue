<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Transcript/>
  </div>
</template>

<script>
import Transcript from './components/Transcript.vue'

export default {
  name: 'app',
  components: {
    Transcript
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
