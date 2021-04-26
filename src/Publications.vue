<template>
  <v-app>
    <v-content>
      <v-container class="page-container">
        <Header/>
        <v-row class="mt-2">
          <v-col sm="12" md="10" grow class="px-0 mx-0 my-2">
            <h2 class="text-left title my-2">
              Selected Publications 
              <!--: <span class="font-italic">Greatest + Latest</span> -->
            </h2>
            <PublicationList 
              v-if="publications"
              :publications="selectedPapers"
             
            />

            <h2 class="text-left title mt-8 mb-2">Other Publications</h2>
            <PublicationList
              v-if="publications"
              :publications="otherPapers"
            />

          </v-col>
          <v-col sm="0" md="2" class="text-left pl-2 pr-0 my-3"  :class="{hidden: $vuetify.breakpoint.smAndDown}">
            <Selection v-if="publications && publications.length" :groups="filters" :total="publications.length" />
          </v-col>

        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import PublicationList from './components/PublicationList'
import Header from './components/Header'
import Selection from './components/Selection'
import jsYaml from 'js-yaml'

export default {
  name: 'PublicationsPage',
  components: {
    PublicationList,
    Header,
    Selection
  },
  data () {
    return {
      publications: null,
      filters: []
    }
  },
  computed: {
    selectedPapers () {
      return this.publications
        .filter(p => p.selected)
        .sort((a, b) => a.selected - b.selected)
    },
    otherPapers () {
        return this.publications.filter(p => !p.selected)   
    }
  },
  async created () {
    this.publications = jsYaml.load(await (await fetch('yaml/publications.yaml')).text())
    // let attrs = ['year', 'type', 'keywords']
    // let histograms = {}
    // for (let attr of attrs) {
    //   histograms[attr] = getHistogram(publications.map(p => ))
    // }
    this.filters[0] = {name: 'paper type', selections: this.publications.map(p => p.type)}
    this.filters[1] = {name: 'year', selections: this.publications.map(p => p.year), sort: 'name', order: 'desc'}
    // let authors = publications.map(p => p.authors).reduce((pre, cur) => pre.concat(cur))
    // authors = authors.map(author => author.replace('*', ''))
    let keywords = this.publications.map(p => p.keywords).reduce((pre, cur) => pre.concat(cur))
    this.filters[2] = {name: 'keywords', selections: keywords}
    this.$ga.page('/publications')
  }
}
</script>

<style scoped>
.hidden {
  display: none;
}
</style>


