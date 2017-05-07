<template>
  <div>
    <!-- RADIO BUTTONS -->
    <div class="ui form">
      <div class="grouped fields">
        <label>Historical Search</label>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="constants.ALL_ENTERTAINMENT" :value="constants.ALL_ENTERTAINMENT" v-model="Entertainment_search">
            <label>View all Entertainments</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="constants.DAY_LIGHT" :value="constants.DAY_LIGHT" v-model="Entertainment_search">
            <label>{{constants.DAY_LIGHT}}</label>
          </div>
        </div>



      </div>


    </div>
    <!-- END RADIO BUTTONS -->

    <input v-model="price" placeholder="enter max price(daylight)"><button v-on:click="price">submit</button>
    <input v-model="duration" placeholder="enter duration(daylight)"><button v-on:click="duration">submit</button>
    <br></br>
    <input v-model="interest" placeholder="enter your name here">
    <input v-model="interest2" placeholder="enter Entertainment type">
    <button v-on:click="interest">submit</button>







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
      name: 'Entertainment',
      Entertainment_search: '',
      interest:'',
      interest2:'',
      duration:'',
      price:'',
      activities: [],
      constants
    }
  },

  methods: {
    search() {

      let query = '';

      switch(this.Entertainment_search) {
        case constants.ALL_ENTERTAINMENT:
          query = queries.constantQueries.LIST_Intertainment;
          break;
        case constants.DAY_LIGHT:
          query = queries.constantQueries.LIST_Intertainment_By_DayLight;
          break;
      }


    let body = {query, output: 'json'};

    this.$http.post('http://localhost:3030/ds/query', body).then(
      response => {
        let body = JSON.parse(response.body);

        let activityURIs = '' ;

        activityURIs = _.map(body.results.bindings, entry => entry.entertainment.value );

        // Getting the name after the Hash !
        let activityNames = _.map(activityURIs, uri => uri.split('#')[1]);

        this.activities = activityNames;

      },
      err => console.error(err)
    );
    },
    price(){
       let query = '';
        query = queries.variableQueries.LIST_Intertainment_By_DayLight_LessThan_SpecificValue(this.price);


       let body = {query, output: 'json'};
       console.log(body);
    this.$http.post('http://localhost:3030/ds/query', body).then(
      response => {
        let body = JSON.parse(response.body);

        let activityURIs = '' ;

        activityURIs = _.map(body.results.bindings, entry => entry.attraction.value  + "        price:       "+entry.price.value);



        // Getting the name after the Hash !
        let activityNames = _.map(activityURIs, uri => uri.split('#')[1]);

        this.activities = activityNames;

      },
      err => console.error(err)
    );
    },
    interest(){
       let query = '';
        query = queries.variableQueries.LIST_Entertainment_By_MyInterest(this.price);


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
    },
    duration(){
       let query = '';
        query = queries.variableQueries.LIST_Intertainment_By_DayLight_SpecificDurationTime(this.duration);


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
