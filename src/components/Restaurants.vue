<template>
  <div>

    <div class="ui green segment">
      <button class="ui green button" v-on:click="listAllResturants">All</button>
      <button class="ui blue button" v-on:click="listWaterSports">Water sports</button>

      <div class="ui icon input">
        <input type="text" placeholder="Search with price" v-model="filterPrice">
        <i class="circular search link icon" v-on:click="filterWithPrice"></i>
      </div>
    </div>

    <div class="ui segments" v-for="sport in sports">
      <div class="ui segment">
        <div class="item">
          <div class="content">
            <h5 class="ui header">{{sport.name}}</h5>
            <div class="meta">
              <span v-if="sport.price !== undefined">price: {{sport.price}}</span>
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
      sports: [],
      filterPrice: ''
    }
  },

  methods: {
    listAllResturants() {
      let query = queries.constantQueries.LIST_RESTAURANT_WITH_CUISINE;

      let body = {query, output: 'json'};

      this.$http.post('http://localhost:3030/ds/query', body).then(
        response => {
          let body = JSON.parse(response.body);
          console.log(body);

          let sports = _.map(
            _.map(body.results.bindings, entry => ({uri: entry.restaurant.value, cuisine: entry.cuisine.value})),
            sport => ({name: sport.uri.split('#')[1], price: sport.price})
          );


          this.sports = sports;

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
