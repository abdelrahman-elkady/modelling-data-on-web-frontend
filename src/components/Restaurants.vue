<template>
  <div>

    <div class="ui green segment">
      <button class="ui green button" v-on:click="listAllResturants">All</button>
      <button class="ui blue button" v-on:click="listRestaurantsWithRate">Restaurants rate</button>

      <div class="ui icon input">
        <input type="text" placeholder="Search with cuisine" v-model="filterCuisine">
        <i class="circular search link icon" v-on:click="listRestaurantsWithCuisine"></i>
      </div>

      <div class="ui checkbox">
        <input type="checkbox" v-model="cheapOnly">
        <label>Only cheap restaurants</label>
      </div>
    </div>

    <div class="ui segments" v-for="restaurant in restaurants">
      <div class="ui segment">
        <div class="item">
          <div class="content">
            <h5 class="ui header">{{restaurant.name}}</h5>
            <div class="meta">
              <span v-if="restaurant.cuisine !== undefined">cuisine: {{restaurant.cuisine}}</span>
              <span v-if="restaurant.rate !== undefined">rate: {{restaurant.rate}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import _ from 'lodash';
import queries from '@/Queries';

export default {
  name: 'restaurants',

  data() {
    return {
      restaurants: [],
      filterCuisine: '',
      cheapOnly: false
    }
  },

  methods: {
    listAllResturants() {
      // Reset like a boss B|
      this.cheapOnly = false;

      let query = queries.constantQueries.LIST_RESTAURANT_WITH_CUISINE;

      let body = {query, output: 'json'};

      this.$http.post('http://localhost:3030/ds/query', body).then(
        response => {
          let body = JSON.parse(response.body);

          let restaurants = _.map(
            _.map(body.results.bindings, entry => ({uri: entry.restaurant.value, cuisine: entry.cuisine.value})),
            restaurant => ({name: restaurant.uri.split('#')[1], cuisine: restaurant.cuisine})
          );


          this.restaurants = restaurants;

        },
        err => console.error(err)
      );

    },

    listRestaurantsWithCuisine() {
      let cuisine = this.filterCuisine.charAt(0).toUpperCase() + this.filterCuisine.slice(1).toLowerCase();

      let query = '';

      if(this.cheapOnly) {
        query = queries.variableQueries.LIST_RESTAURANTS_WITH_SPECIFIC_CUISINE_CHEAP(cuisine);
      } else {
        query = queries.variableQueries.LIST_RESTAURANTS_WITH_SPECIFIC_CUISINE(cuisine);
      }

      let body = {query, output: 'json'};

      this.$http.post('http://localhost:3030/ds/query', body).then(
        response => {
          let body = JSON.parse(response.body);

          let restaurants = _.map(
            _.map(body.results.bindings, entry => ({uri: entry.restaurant.value})),
            restaurant => ({name: restaurant.uri.split('#')[1]})
          );


          this.restaurants = restaurants;

        },
        err => console.error(err)
      );
    },

    listRestaurantsWithRate() {
      let query = queries.constantQueries.LIST_RESTAURANTS_RATE;

      let body = {query, output: 'json'};

      this.$http.post('http://localhost:3030/ds/query', body).then(
        response => {
          let body = JSON.parse(response.body);

          let restaurants = _.map(
            _.map(body.results.bindings, entry => ({uri: entry.restaurant.value, rate: entry.rate.value})),
            restaurant => ({name: restaurant.uri.split('#')[1], rate: restaurant.rate})
          );

          this.restaurants = restaurants;

        },
        err => console.error(err)
      );
    }
  },

  mounted() {
    this.listAllResturants();
  }
}
</script>

<style scoped>

</style>
