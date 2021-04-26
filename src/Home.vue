<template>
  <v-app id="homepage">
    <!-- <v-toolbar app></v-toolbar> -->
    <v-content>
      <v-container class="page-container pa-1">
        <Profile v-if="profile" :profile="profile" />
        <v-flex class="text-left">
          <v-row class="mx-2 home-headline" justify="center" align="center">
            Featured Projects
            <v-spacer />
            <router-link :to="'projects'" class="title-link">
              Show all {{numProjects}} projects
            </router-link>
          </v-row>
          <Projects
            v-if="projects"
            :compact="false"
            :projects="projects.filter(p => p.featured)"
            :panelView="true"
            :publications="publications"
          />
        </v-flex>
        <div>
        <v-row class="my-6">
          <v-col cols="12" sm="7" md="8"  class="text-left">
          <v-row class="mx-2 home-headline" justify="center" align="center">
            Selected Publications
            <v-spacer />
            <router-link to="publications" class="title-link mr-2">
              Show all {{numPapers}} publications
            </router-link>
          </v-row>
            <Publications 
              v-if="publications"
              :publications="publications.filter(p => p.featured)" 
              :compact="true"
              class="mt-4"
            />
          </v-col>
          <v-col cols="12" sm="5" md="4" class="text-left">
            <v-row class="mx-2 home-headline" justify="center" align="center">
              Talks
              <v-spacer />
              <router-link to="talks" class="title-link mr-2">
                Show on map
              </router-link>
            </v-row>
            <Talks :talks="talks" />
          </v-col>
        </v-row>
        </div>


      </v-container>
    </v-content>
    <v-footer
      id="footer"
      height="38"
      color="#fff"
    >
      <v-row justify="center" align="center" class="pa-2 body-2 page-container" style="margin: 0 auto; border-top: 1px solid #eee">
        See All 
        <router-link
          v-for="link in links"
          :key="link.name"
          text
          class="ml-3  subtitle-2"
          :to="link.url"
          style="text-transform: none; color: steelblue"
        >
          {{ link.name }}
        </router-link>
        <v-spacer></v-spacer>
          Updated on April 2021, 
          <!-- &copy;2020   -->
          Jianping Kelvin Li
      </v-row>
    </v-footer>

  </v-app>
</template>

<script>
import Profile from './components/Profile'
import Projects from './components/ProjectList'
import Publications from './components/PublicationList'
import Talks from './components/PresentationList'
import jsYaml from 'js-yaml'

export default {
  name: 'Home',
  components: {
    Profile,
    Projects,
    Publications,
    Talks
  },
  data () {
    return {
      profile: null,
      publications: null,
      projects: null,
      talks: null,
      links: [
        {name: 'Projects', url: 'projects'},
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
    this.projects = jsYaml.load(await (await fetch('yaml/projects.yaml')).text())
    this.publications = jsYaml.load(await (await fetch('yaml/publications.yaml')).text())
    this.talks = jsYaml.load(await (await fetch('yaml/talks.yaml')).text())
    this.$ga.page('/')
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
</style>
