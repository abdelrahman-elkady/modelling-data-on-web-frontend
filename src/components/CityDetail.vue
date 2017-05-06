<template>
  <div>
    <!-- RADIO BUTTONS -->
    <div class="ui form">
      <div class="grouped fields">
        <label>Display attractions in city</label>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="attraction" :value="constants.ATTRACTION_HISTORICAL" v-model="attractionFilter">
            <label>Historical</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="attraction" :value="constants.ATTRACTION_SPORTS" v-model="attractionFilter">
            <label>Sports</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="attraction" :value="constants.ATTRACTION_ENTERTAINMENT" v-model="attractionFilter">
            <label>Entertainment</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="attraction" :value="constants.ATTRACTION_FOOD" v-model="attractionFilter">
            <label>Food</label>
          </div>
        </div>
      </div>
    </div>
    <!-- END RADIO BUTTONS -->


    <div class="ui bulleted list">
      <h2 class="item" v-for="activity in activities">
        {{activity}}
      </h2>
    </div>

    <button class="ui button right floated green" v-on:click="search">Display</button>
</div>

</template>

<script>

import constants from '@/constants'
import _ from 'lodash'

export default {
  name: 'city-detail',
  props: ['cityName'],
  data() {
    return {
      name: '',
      attractionFilter: undefined,
      sorted: undefined,
      activities: [],

      constants
    }
  },

  methods: {
    search() {

    let query = `
    PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    SELECT ?attraction ?city WHERE {?attraction rdf:type <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#${this.attractionFilter}>.
    <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#${this.cityName}> <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#has> ?attraction}
    `
    let body = {query, output: 'json'};

    this.$http.post('http://localhost:3030/ds/query', body).then(
      response => {
        let body = JSON.parse(response.body);

        let activityURIs = _.map(body.results.bindings, entry => entry.attraction.value);

        // Getting the name after the Hash !
        let activityNames = _.map(activityURIs, uri => uri.split('#')[1]);
        this.activities = activityNames;

      },
      err => console.error(err)
    );
    }
  }
}
</script>

<style scoped>

</style>
