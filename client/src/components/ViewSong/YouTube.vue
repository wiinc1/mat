<template>
  <panel title="YouTube Video">
    <youtube
      :video-id="youtubeId"
      :player-width="500"
      :player-height="245">
    </youtube>
  </panel>
</template>

<script>
import VueYouTubeEmbed from 'vue-youtube-embed'

export default {
  props: [
    'youtubeId'
  ],
  components: {
    VueYouTubeEmbed
  }
}
</script>


<style scoped>

</style>
