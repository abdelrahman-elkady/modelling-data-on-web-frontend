<template>
<div>
    <h1>Search by Category !</h1>
  <div>
    <!-- RADIO BUTTONS -->
    <div class="ui form">
      <div class="grouped fields">
        <label>Display cities in attraction</label>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="attraction" :value="constants.CITY_TYPE_Historic" v-model="attraction">
            <label>{{constants.CITY_TYPE_Historic}}</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="attraction" :value="constants.CITY_TYPE_Entertainment" v-model="attraction">
            <label>{{constants.CITY_TYPE_Entertainment}}</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="attraction" :value="constants.CITY_TYPE_Nature" v-model="attraction">
            <label>{{constants.CITY_TYPE_Nature}}</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="attraction" :value="constants.CITY_TYPE_Relaxation" v-model="attraction">
            <label>{{constants.CITY_TYPE_Relaxation}}</label>
          </div>
        </div>
      </div>
    </div>
    <!-- END RADIO BUTTONS -->


    <div class="ui bulleted list">
      <h5 class="item" v-for="city in cities">
        {{city}}
      </h5>
    </div>

    <button class="ui button right floated green" v-on:click="filterCitiesByCategory">Search</button>
  </div>
</div>

</template>


<script>

import queries from '@/Queries';
import constants from '@/constants'
import _ from 'lodash'

export default {
  name: 'Category',
  data() {
    return {
      attraction: '',
      cities: [],
      constants
    }
  },

  methods: {


    filterCitiesByCategory () {
      let query = '';

      query = queries.variableQueries.LIST_Cities_Specific_category(this.attraction);

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

  h5.item {
    max-width: 80%;
    padding-bottom: 0;
    margin-bottom: 0;
    max-height: 15px;
  }
</style>
