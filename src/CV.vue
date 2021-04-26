<template>
  <v-app id="homepage">
    <!-- <v-toolbar app></v-toolbar> -->
    <v-content>
      <v-container class="page-container pa-10">
        <v-card flat class="px-5 mx-8">
          <v-card-title class="px-0">
            {{profile.name}}
            <v-spacer />
            <v-btn text class="small contact-link" href="mailto:jpkelvinli@gmail.com">
              <v-icon small class="mr-1" color="blue darken-2">email</v-icon>
              jpkelvinli@gmail.com
            </v-btn>
          </v-card-title>
          <template v-for="(intro, index) in profile.introductions">
            <v-card-text :key=index class="pa-1">
              <p class="text-left subtitle-2 ma-1" v-html="intro"></p>
            </v-card-text>
          </template>
          <!-- <v-card-actions class="mx-0 px-0">
            <v-btn text class="small contact-link" href="mailto:jpkelvinli@gmail.com">
              <v-icon small class="mr-1" color="blue darken-2">email</v-icon>
              jpkelvinli@gmail.com
            </v-btn>
          </v-card-actions> -->
        </v-card>

        <v-card flat class="mx-8 text-left">
          <v-card-title class="pb-0">Education</v-card-title>
          <v-card-text class="my-2 mx-3 subtitle-2" v-html="profile.education.join('<br />')" />
        </v-card>
        <v-card flat class="mx-8 text-left">
          <v-card-title class="pb-0">Work Experience</v-card-title>
          <v-card-text v-for="(work, wi) in profile.works" :key="wi" class="py-1 px-8">
          <strong v-text="work.position" />, 
          <strong v-text="work.organization" />
          {{work.date}}
          <ul>
            <li 
              v-for="(item, wii) in work.description" 
              :key="wii"
              v-text="item"
            />
          </ul>
          </v-card-text>
        </v-card>
        <v-card flat class="mx-8">
          <v-card-title class="pb-0">Publications</v-card-title>
          <v-card-text>
            <Publications 
              v-if="publications"
              :publications="publications" 
              :compact="true"
              class="mt-4"
            />
          </v-card-text>
        </v-card>
        <v-card flat class="mx-8 text-left">
          <v-card-title class="pb-0">Services</v-card-title>
          <v-card-text class="py-1 px-8">
          <ul>
            <li 
              v-for="(service, si) in profile.services" 
              :key="si"
              v-text="service"
            />
          </ul>
          </v-card-text>
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Publications from './components/PublicationList'
import jsYaml from 'js-yaml'

export default {
  name: 'Home',
  components: {
    Publications
  },
  data () {
    return {
      profile: null,
      publications: null,
      projects: null,
      talks: null,
      links: [
        {name: 'Porjects', url: 'projects'},
        {name: 'Publications', url: 'publications'},
        {name: 'Presentations', url: 'talks'}
      ]
    }
  },
  computed: {
    numProjects () {
      return this.projects ? this.projects.length : 0
    },
    numPapers () {
      return this.publications ? this.publications.length : 0
    },
  },
  async created () {
    this.profile = jsYaml.load(await (await fetch('yaml/profile.yaml')).text())
    this.publications = jsYaml.load(await (await fetch('yaml/publications.yaml')).text())
    this.$ga.page('/cv')
  }
}
</script>

<style scoped>
#homepage {
  background-color: #fff;
}

.title-link {
  font-size: 0.66em;
  color: steelblue;
}

.home-headline {
  font-size: 1.28em;
  font-weight: bold!important;
  margin: 0.25em 0;
}

.contact-link {
  text-transform: none;
  color: #3498db!important;
}
</style>
