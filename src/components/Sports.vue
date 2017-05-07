<template>
  <div>

    <div class="ui green segment">
      <button class="ui green button" v-on:click="listAllSports">All</button>
      <button class="ui blue button" v-on:click="listWaterSports">Water sports</button>
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
  name: 'sports',

  data() {
    return {
      sports: []
    }
  },

  methods: {
    listAllSports() {
      let query = `
      PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
      SELECT ?attraction ?price  WHERE {?attraction rdf:type <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#Sports>.
      ?attraction onto:price ?price}
      `;

      let body = {query, output: 'json'};

      this.$http.post('http://localhost:3030/ds/query', body).then(
        response => {
          let body = JSON.parse(response.body);

          let sports = _.map(
            _.map(body.results.bindings, entry => ({uri: entry.attraction.value, price: entry.price.value})),
            sport => ({name: sport.uri.split('#')[1], price: sport.price})
          );


          this.sports = sports;

        },
        err => console.error(err)
      );

    },

    listWaterSports() {
      let query = queries.constantQueries.LIST_SPORTS_WITH_WATER;
      let body = {query, output: 'json'};

      this.$http.post('http://localhost:3030/ds/query', body).then(
        response => {
          let body = JSON.parse(response.body);

          let sports = _.map(
            _.map(body.results.bindings, entry => ({uri: entry.waterSport.value})),
            sport => ({name: sport.uri.split('#')[1]})
          );

          this.sports = sports;

        },
        err => console.error(err)
      );
    }
  },

  mounted() {
    this.listAllSports();
  }
}
</script>

<style scoped>

</style>
