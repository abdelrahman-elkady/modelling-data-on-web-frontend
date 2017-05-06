<template>
  <div>
    <div class="ui green segment">
      <h1 class="centered">Luxor</h1>
      <city-detail city-name="Luxor"/>
    </div>
    <div class="ui green segment">
      <h1 class="centered">Hawaii</h1>
      <city-detail city-name="Hawaii"/>
    </div>
    <div class="ui green segment">
      <h1 class="centered">New York</h1>
      <city-detail city-name="New_York"/>
    </div>
    <div class="ui green segment">
      <h1 class="centered">Dubai</h1>
      <city-detail city-name="Dubai"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cities',

  data() {
    return {

    }
  },

  methods: {

  }
}
</script>

<style scoped>
  .ui.segment {
    margin: 0 auto;
    margin-bottom: 30px;
    padding: 20px;
  }
</style>
