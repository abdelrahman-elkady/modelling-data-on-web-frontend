<template>
  <div>
    <img class="ui centered medium circular image logo" src="/static/logo.png"/>

    <button class="ui button huge" v-on:click="fetchSummerCities">Cities in Summer (EXAMPLE)</button>
  </div>
</template>

<script>
import queries from '@/Queries';
import _ from 'lodash';

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
          let body = JSON.parse(response.body);

          let citiesURIs = _.map(body.results.bindings, entry => entry.city.value);

          // Getting the name after the Hash !
          let cityNames = _.map(citiesURIs, uri => uri.split('#')[1]);
          console.log(cityNames);


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
