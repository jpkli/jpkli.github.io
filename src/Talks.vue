<template>
  <v-app>
    <v-content>
      <v-container class="page-container">
        <Header/>
        <v-row class="my-8" justify="center" align="center">
          <v-col cols="8" class="px-0">
            <div id="wmap"></div>
          </v-col>
          <v-col cols="4">
             <PresentationList ref="Talks" :talks="talks" headline=""/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import PresentationList from './components/PresentationList'
import Header from './components/Header'
import jsYaml from 'js-yaml'
import {vis} from 'p3.js'

export default {
  name: 'TalkPage',
  components: {
    PresentationList,
    Header,
  },
  data () {
    return {
      filters: [],
      talks: null
    }
  },
  methods: {
    getHistogram (array) {
      let histogram = {}
      for(let item of array) {
        if (histogram[item]) {
          histogram[item] += 1
        } else {
          histogram[item] = 1
        }
      }
      return Object.keys(histogram).map(k => { return {name: k, count: histogram[k]} })
    }
  },
  async created () {
    this.$ga.page('/')
  },
  async mounted () {
    let talks = jsYaml.load(await (await fetch('yaml/talks.yaml')).text())
    let countriesVisted = this.getHistogram(talks.map(t => t.country))
 
    let data = {
        json: countriesVisted,
        zero: true,
        join: {
            field: 'name',
            type: 'code'
        },
        vmap: {
            color: 'count'
        }
    };

    let view = {
        container: '#wmap',
        width: 600,
        height: 400,
        scale: 90,
        exponent: 0.5,
        defaultColor: '#ddd',
        projection: 'Mercator',
        padding: {left: 50, right: 50, top: 50, bottom: 50},
    }

    let talkMap = new vis.GeoMap(data, view).render();
    talks.forEach(talk => {
      talkMap.addMarker({
        coordinate: talk.coordinate,
        title: [talk.date, talk.for, talk.location].join(', ')
      });
    })
    
    this.talks = talks
  }
}
</script>

<style>
i:hover {
  color: #E00!important;
}
</style>
