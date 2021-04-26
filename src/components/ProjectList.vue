<template>
  <div>
    <h2 v-if="headline" class="title">{{headline}}</h2>
    <v-row class="pa-0 ma-0">
        <v-col 
          v-for="(project, index) in projects" :key="index"
          class="pa-0" cols="12" sm="6" :lg="compact ? 3 : 4"
        >
          <v-card flat class="pa-3" :class="{frame: panelView, 'ma-1': compact, 'ma-2': !compact}">
            <v-card-title 
              class="pa-0 text-truncate font-weight-bold"
              :class="{'subtitle-1': compact}"
              v-text="project.name"
            />
            <v-row>
              <v-col :cols="panelView ? 12: 5">
                <v-img
                  class="thumb"
                  height="120"
                  aspect-ratio="1"
                  :src="project.img"
                />
              </v-col>
              <v-col :cols="panelView ? 12: 7" class="py-0">
                <v-card-text class="pa-0 caption project-text">
                  {{project.description}}
                </v-card-text>
                  <v-card-text
                    class="px-3 py-0"
                  >
                    <v-row v-if="project.apps" class="project-icons text-center my-1" justify="center" align="end">
                      <strong>Apps: </strong>
                      <a 
                        v-for="app in project.apps"
                        v-text="app.name"
                        :key="app.name" 
                        :href="app.url" 
                        class="mx-2"
                        target="_blank"
                      />
                    </v-row>
                    <v-row v-else-if="project.papers" class="project-icons text-center my-1" justify="center" align="end">
                      <strong class="mr-1">Publications: </strong>
                      <a 
                        v-for="paper in project.papers"
                        :key="paper.id"
                        v-text="paper.name"
                        to="publications"
                        class="ml-1"
                        @click="getPublication(paper.id)"
                      />
                    </v-row>
                    <v-row v-else class="project-icons" align="end">
                      <v-btn 
                        v-for="resource in getResources(project)"
                        :key="resource"
                        :href="project[resource]"
                        text x-small
                        class="pa-0 my-0 mr-2"
                      
                      >
                        <v-icon color="blue darken-2" :title="resource" v-text="icons[resource]" />
                        {{resource}}
                      </v-btn>
                    </v-row>
                  </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
    </v-row>
    <v-dialog
        v-model="dialog"
        width="68%"
        style="max-width: 800px;"
      >
      <v-card class="px-6 py-10 text-left" v-if="selectedPaper">
        <PublicationList :publications="[selectedPaper]" :compact="true" />
        <v-card-text v-if="selectedPaper.abstract" class="pa-3">
          <h3>Abstract: </h3>
          {{selectedPaper.abstract}}
        </v-card-text>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
import icons from '@/assets/icons'
import PublicationList from '@/components/PublicationList'

export default {
  name: 'ProjectList',
  components: {PublicationList},
  props: {
    headline: String,
    projects: Array,
    panelView: Boolean,
    compact: Boolean,
    publications: Array,
  },
  data () {
    return {
      icons,
      dialog: false,
      selectedPaper: null
    }
  },
  methods: {
    getResources (project) {
      return Object.keys(project).filter(p => Object.keys(this.icons).indexOf(p) !== -1)
    },
    getPublication (paperId) {
      if (!this.publications) {
        return null
      }
      let selectedPaper = this.publications.find(p => p.id === paperId)
      this.selectedPaper = selectedPaper
      this.dialog = true
    }
  }
}
</script>

<style scoped>
.frame {
  border: 1px solid #ccc!important;
}

.project-title {
  font-weight: bold;
  font-size: 1.2em;
  text-align: left;
  /* margin: 0 auto; */
  /* margin-left: 0.5em; */
}


.project-text {
  text-align: left;
  min-height: 6em;
  max-height: 10em;
  /* font-size: 0.9em; */
  /* margin: 0 0 0 1.2em; */
}

.project-icons {
  min-height: 3.5em;
  font-size: 0.8rem;
}

.project-icons > .v-btn {
  margin-right: 0.8em;
  text-transform: capitalize;
  color: steelblue;
  font-weight: bold;
}

.project-icons i {
  margin-right: 0.2em;
  font-size: 0.9rem!important;
}

</style>
