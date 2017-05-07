<template>
  <div id="app">

    <div class="ui left demo vertical inverted visible sidebar labeled icon menu">

      <router-link to="/" class="item">
        <i class="home icon"></i>
        Home
      </router-link>

      <router-link to="/cities" class="item">
        <i class="map icon"></i>
        Cities
      </router-link>



      <router-link to="/cities/filter" class="item">
        <i class="marker icon"></i>
        Filter Cities
      </router-link>

      <router-link to="/sports" class="item">
        <i class="bicycle icon"></i>
        Sports
      </router-link>

      <router-link to="/historical" class="item">
        <i class="book icon"></i>
        Historical
      </router-link>

      <router-link to="/restaurants" class="item">
        <i class="food icon"></i>
        Restaurants
      </router-link>

      <router-link to="/entertainment" class="item">
        <i class="umbrella icon"></i>
        Search Entertainment 
      </router-link>




    </div>

    <div class="ui container">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',

}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 142px;
}
</style>
