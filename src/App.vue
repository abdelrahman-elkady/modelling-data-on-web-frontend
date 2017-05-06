<template>
  <div id="app">

    <div class="ui left demo vertical inverted visible sidebar labeled icon menu">

      <router-link to="/" class="item">
        <i class="home icon"></i>
        Home
      </router-link>

      <router-link to="/seasons" class="item">
        <i class="umbrella icon"></i>
        Search by seasons
      </router-link>

    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',

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
