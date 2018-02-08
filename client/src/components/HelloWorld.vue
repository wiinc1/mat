<template>
  <div id="app">
    <img src='@/static/logos.png'>
    <router-view/>
  </div>
</template>

<script>
import Panel from '@/components/globals/Panel'

export default {
  data () {
    return {
      components: {
        Panel
      }
    }
  }
}
</script>


<style scoped>
</style>
