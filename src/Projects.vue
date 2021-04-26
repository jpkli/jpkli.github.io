<template>
  <v-app>
    <v-content>
      <v-container class="page-container">
        <Header/>
        <v-row class="px-5 py-8">

            <ProjectList 
              :projects="projects"
              :panelView="true"
              :publications="publications"
            />

          <!-- <v-col cols="2" class="hidden-sm-and-down">
             <Selection :filters="filters"/>
          </v-col> -->
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ProjectList from './components/ProjectList'
import Header from './components/Header'
// import Selection from './components/Selection'
import jsYaml from 'js-yaml'

export default {
name: 'ProjectPage',
  components: {
    ProjectList,
    Header,
    // Selection
  },
  data () {
    return {
      projects: null,
      publications: null,
      filters: []
    }
  },
  async created () {
    this.projects = jsYaml.load(await (await fetch('yaml/projects.yaml')).text())
    this.publications = jsYaml.load(await (await fetch('yaml/publications.yaml')).text())
    // let languages = this.projects.map(p => p.languages).reduce((pre, cur) => pre.concat(cur))
    // this.filters[0] = {name: 'Languages', selections: languages}
    // let libraries = projects.filter(p => p.libraries).map(p => p.libraries).reduce((pre, cur) => pre.concat(cur))
    // this.filters[1] = {name: 'Libraries/Frameworks', selections: libraries}
    this.$ga.page('/projects')
  },
  mounted() {
  
  }
}
</script>

<style>
</style>
