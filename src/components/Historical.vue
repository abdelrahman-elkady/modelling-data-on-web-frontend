<template>
  <div>
    <!-- RADIO BUTTONS -->
    <div class="ui form">
      <div class="grouped fields">
        <label>Historical Search</label>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="constants.SORT_TYPE_RANKING" :value="constants.SORT_TYPE_RANKING" v-model="Historic_search">
            <label>Sorted by Ranking</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="constants.DAY_LIGHT" :value="constants.DAY_LIGHT" v-model="Historic_search">
            <label>{{constants.DAY_LIGHT}}</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="constants.NIGHT" :value="constants.NIGHT" v-model="Historic_search">
          <label>{{constants.NIGHT}}</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="constants.SORT_TYPE_PRICE" :value="constants.SORT_TYPE_PRICE" v-model="Historic_search">
          <label>{{constants.SORT_TYPE_PRICE}}</label>
          </div>
        </div>
         <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="constants.SORT_TYPE_PRICE_SORTED" :value="constants.SORT_TYPE_PRICE_SORTED" v-model="Historic_search">
          <label>{{constants.SORT_TYPE_PRICE_SORTED}}</label>
          </div>
        </div>

      </div>


    </div>
    <!-- END RADIO BUTTONS -->

    <input v-model="Ranking" placeholder="enter a ranking"><button v-on:click="ranking">submit</button>
    






    <div class="ui bulleted list">
      <h5 class="item" v-for="activity in activities">
        {{activity}}
      </h5>
    </div>

    <button class="ui button right floated green" v-on:click="search">Display</button>
</div>

</template>

<script>

import constants from '@/constants'
import _ from 'lodash'
import queries from '@/Queries';


export default {
  name: 'Historical',
  data() {
    return {
      name: 'Historical',
      Historic_search: '',
      Ranking:'',
      activities: [],
      constants
    }
  },

  methods: {
    search() {

      let query = '';

      switch(this.Historic_search) {
        case constants.SORT_TYPE_RANKING:
          query = queries.constantQueries.LIST_Historical_By_Ranking_Sorted;
          break;
        case constants.DAY_LIGHT:
          query = queries.constantQueries.LIST_Historical_By_DayLight;
          break;
        case constants.NIGHT:
          query = queries.constantQueries.LIST_Historical_By_Night;
          break;
        case constants.SORT_TYPE_PRICE:
          query = queries.constantQueries.LIST_Historical_By_Price;
          break;
          case constants.SORT_TYPE_PRICE_SORTED:
          query = queries.constantQueries.LIST_Historical_By_Price_Sorted;
          break;
      }


    let body = {query, output: 'json'};

    this.$http.post('http://localhost:3030/ds/query', body).then(
      response => {
        let body = JSON.parse(response.body);
     
        let activityURIs = '' ;

         switch(this.Historic_search) {
        case constants.SORT_TYPE_PRICE : activityURIs = _.map(body.results.bindings, entry => entry.attraction.value  + "        price:       "+entry.price.value);
          break;
          case constants.SORT_TYPE_PRICE_SORTED : activityURIs = _.map(body.results.bindings, entry => entry.attraction.value  + "        price:       "+entry.price.value);
          break;
          default :   activityURIs = _.map(body.results.bindings, entry => entry.attraction.value );
        }

       

        // Getting the name after the Hash !
        let activityNames = _.map(activityURIs, uri => uri.split('#')[1]);
                
        this.activities = activityNames;

      },
      err => console.error(err)
    );
    },
    ranking(){
       let query = '';
        query = queries.variableQueries.SHOW_Specific_Historical_By_Ranking(this.Ranking);


       let body = {query, output: 'json'};
       console.log(body);
    this.$http.post('http://localhost:3030/ds/query', body).then(
      response => {
        let body = JSON.parse(response.body);

        let activityURIs = '' ;

          activityURIs = _.map(body.results.bindings, entry => entry.attraction.value );
        

       

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

  }
<style scoped>

</style>
