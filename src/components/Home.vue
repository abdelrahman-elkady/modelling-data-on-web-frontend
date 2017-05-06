<template>
  <div>
    <img class="ui centered medium circular image logo" src="/static/logo.png"/>

    <button class="ui button huge" v-on:click="fetchSummerCities">Cities in Season</button>
  </div>
</template>

<script>
import queries from '@/Queries';

export default {
  name: 'home',

  data () {
    return {

    }
  },

  methods: {
    fetchSummerCities () {
      let body = {query: queries.LIST_SUMMER_CITIES, output: 'json'};

      this.$http.post('http://localhost:3030/ds/query', body).then(
        response => {
          console.log(response)
        },
        err => console.error(err)
      );
    }
  }
}
</script>

<style scoped>
  /*Those are SCOPED styles, works only in this component*/
  .logo {
    margin-top: 5vh;
  }

  .ui.button {
    margin-top: 20px;
  }
</style>
