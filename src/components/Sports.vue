<template>
  <div>

  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'sports',

  data() {
    return {
      sports: []
    }
  },

  methods: {
    populateSports() {
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


    }
  },

  mounted() {
    this.populateSports();
  }
}
</script>

<style scoped>

</style>
