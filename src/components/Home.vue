<template>
  <div>
    <img class="ui centered medium circular image logo" src="/static/logo.png"/>

    <button class="ui button huge">Cities in Season</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  /*Those are SCOPED styles, works only in this component*/
  .logo {
    margin-top: 5vh;
  }

  .button {
    margin-top: 10px;
  }
</style>
