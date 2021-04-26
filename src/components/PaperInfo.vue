<template>
    <v-dialog
      v-model="toggle"
      width="68%"
      style="max-width: 800px;"
    >
    <v-card class="px-6 py-10 text-left" v-if="selectedPaper">
      <Publications :publications="[selectedPaper]" :compact="true" />
      <v-card-text v-if="selectedPaper.abstract" class="pa-3">
        <h3>Abstract: </h3>
        {{selectedPaper.abstract}}
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import Publications from './components/PublicationList'

export default {
  name: 'PaperInfo',
  components: {Publications},
  props: {
    dialog: Boolean,
    selectedPaper: Object
  },
  data () {
    return {
      toggle: false
    }
  },
  watch: {
    dialog () {
      this.toggle == this.dialog
    }
  }
}
</script>
