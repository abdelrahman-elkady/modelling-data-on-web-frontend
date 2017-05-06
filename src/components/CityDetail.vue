<template>
  <!-- RADIO BUTTONS -->
  <div class="ui form">
    <div class="grouped fields">
      <label>Display attraction in city</label>
      <div class="field">
        <div class="ui radio checkbox">
          <input type="radio" name="attraction" :value="constants.ATTRACTION_HISTORICAL" v-model="attraction">
          <label>Historical</label>
        </div>
      </div>
      <div class="field">
        <div class="ui radio checkbox">
          <input type="radio" name="attraction" :value="constants.ATTRACTION_SPORTS" v-model="attraction">
          <label>Sports</label>
        </div>
      </div>
      <div class="field">
        <div class="ui radio checkbox">
          <input type="radio" name="attraction" :value="constants.ATTRACTION_ENTERTAINMENT" v-model="attraction">
          <label>Entertainment</label>
        </div>
      </div>
      <div class="field">
        <div class="ui radio checkbox">
          <input type="radio" name="attraction" :value="constants.ATTRACTION_FOOD" v-model="attraction">
          <label>Food</label>
        </div>
      </div>
    </div>
  </div>
  <!-- END RADIO BUTTONS -->
</template>

<script>

import constants from '@/constants'

export default {
  name: 'city-detail',

  data() {
    return {
      name: '',
      attraction: undefined,
      sorted: undefined,


      constants
    }
  },

  methods: {

  }
}
</script>

<style scoped>

</style>
