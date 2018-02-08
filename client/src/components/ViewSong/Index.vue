<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>
      <v-flex xs6 class="ml-4">
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>
    <br>
    <v-layout>
      <v-flex xs6>
        <lyrics :song="song" />
      </v-flex>
      <v-flex xs6 class="ml-4">
        <tab :song="song" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Lyrics from '@/components/ViewSong/Lyrics'
import Tab from '@/components/ViewSong/Tab'
import SongMetadata from '@/components/ViewSong/SongMetadata'
import YouTube from '@/components/ViewSong/YouTube'
import SongService from '@/services/SongService'
import Panel from '@/components/globals/Panel'

export default {
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongService.show(songId)).data
  },
  components: {
    Panel,
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>


<style scoped>

</style>
