<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage'

export default {
  name: 'App',
  components: {
    LandingPage
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
  margin-top: 3vh;
}
</style>


