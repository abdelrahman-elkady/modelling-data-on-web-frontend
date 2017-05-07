<template>
  <div>
    <h3 class="ui horizontal divider header"><i class="umbrella icon"></i> Search by season</h3>

    <!-- RADIO BUTTONS -->
    <div class="ui form centered">
      <div class="grouped fields">
        <label>Select the season for your visit</label>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="season" value="summer" v-model="season">
            <label>Summer</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="season" value="winter" v-model="season">
            <label>Winter</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="season" value="fall" v-model="season">
            <label>Fall</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="season" value="spring" v-model="season">
            <label>Spring</label>
          </div>
        </div>
      </div>
    </div>
    <!-- END RADIO BUTTONS -->

    <button class="ui button right floated green" v-on:click="filterCitiesBySeason">Search</button>

    <div class="ui bulleted list">
      <h5 class="item" v-for="city in cities">
        {{city}}
      </h5>
    </div>


    <div class="category-section">
      <h3 class="ui horizontal divider header"><i class="motorcycle icon"></i> Search by category</h3>
      <Category />
    </div>


  </div>
</template>

<script>
import queries from '@/Queries';
import _ from 'lodash';

export default {
  name: 'season',

  data () {
    return {
      season: '',
      cities: []
    }
  },

  methods: {
    filterCitiesBySeason () {
      let query = '';

      switch(this.season) {
        case 'summer':
          query = queries.constantQueries.LIST_SUMMER_CITIES;
          break;
        case 'winter':
          query = queries.constantQueries.LIST_WINTER_CITIES;
          break;
        case 'fall':
          query = queries.constantQueries.LIST_FALL_CITIES;
          break;
        case 'spring':
          query = queries.constantQueries.LIST_SPRING_CITIES;
          break;
      }

      let body = {query, output: 'json'};

      this.$http.post('http://localhost:3030/ds/query', body).then(
        response => {
          let body = JSON.parse(response.body);

          let citiesURIs = _.map(body.results.bindings, entry => entry.city.value);

          // Getting the name after the Hash !
          let cityNames = _.map(citiesURIs, uri => uri.split('#')[1]);
          this.cities = cityNames;


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

  .ui.form {
    padding-top: 20px;
  }

  .category-section {
    margin-top: 120px;
  }

  h5.item {
    max-width: 80%;
    padding-bottom: 0;
    margin-bottom: 0;
    max-height: 15px;
  }
</style>
