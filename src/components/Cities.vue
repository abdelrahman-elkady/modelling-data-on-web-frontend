<template>
  <div>
    <div class="ui green segment">
      <h1 class="centered">Luxor</h1>
      <city-detail />
    </div>
    <div class="ui green segment">
      <h1 class="centered">Hawaii</h1>
      <city-detail />
    </div>
    <div class="ui green segment">
      <h1 class="centered">New York</h1>
      <city-detail />
    </div>
    <div class="ui green segment">
      <h1 class="centered">Dubai</h1>
      <city-detail />
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
