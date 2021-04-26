<template>
  <div>
    <h2 v-if="headline" class="title text-left">{{headline}}</h2>
      <v-row 
        v-for="(publication, index) in publications"
        :key="index" 
        justify="start" 
        align="center"
        class="pl-3"
      >
        <v-col v-if="!compact && $vuetify.breakpoint.smAndUp" cols="6" sm="4" md="3" class="py-0 px-2">
          <v-img
            class="thumb my-2"
            height="110"
            aspect-ratio="1"
            style="border: 1px solid #ccc;"
            :src="publication.img"
          />
        </v-col>
        <v-col :col="12" :sm="compact ? 12 : 8" :md="compact ? 12 : 9" class="pa-0">
          <v-card flat class="ma-1 px-2 py-0 text-left" >
            <!-- <v-card-text v-if="compact" class="pa-0 ma-0 text-left">
              <span class="publication-title mr-2" v-text="publication.title" />
              <span class="publication-authors mr-2" v-html="listAuthors(publication)" />
              <span v-html="publication.venue.name" />
              <span v-html="publication.year" />
            </v-card-text> -->
            <v-card-text class="pa-0 ma-0 text-left publication-title" :class="{'text-truncate': compact}"  v-text="publication.title" />
            <v-card-text class="publication-authors pa-0 font-regular text-truncate" v-html="listAuthors(publication)" />
            <v-card-text class="pa-0 font-italic">{{publication.venue.name}}, {{publication.year}}</v-card-text>
            <v-card-actions class="px-1 py-1 card-icons" color="blue darken-2">
              <v-btn
                v-for="resource in getResources(publication)" 
                :key="resource" 
                :href="publication[resource]"
                text x-small
                class="pa-0 my-0 mr-2"
              >
                <v-icon color="blue darken-2" :title="resource">{{icons[resource]}}</v-icon>{{resource}}
              </v-btn>
              <a
                v-if="!publication.PDF && publication.link"
                :href="publication.link"
                class="caption"
                v-text="'doi: '+ publication.doi"
              />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

  </div>
</template>

<script>
import icons from '@/assets/icons'
export default {
  name: 'PublicationList',
  props: {
    headline: String,
    publications: Array,
    compact: Boolean
  },
  data () {
    return {
      icons
    }
  },
  methods: {
    getResources (project) {
      return Object.keys(project).filter(p => Object.keys(this.icons).indexOf(p) !== -1)
    },
    listAuthors (pub) {
      let authors = pub.authors.map( author => {
        if (author.slice(0,8) == 'Jianping' && !this.compact) {
          return '<span class="author-is-me">' + author + '</span>'
        } else {
          return '<span>' + author + '</span>'
        }
      }).join(', ')
      if (pub.note) {
        authors += '<span class="ml-2 caption">' + pub.note + '</span>'
      }
      return authors
    }
  }
}
</script>

<style scoped>
.publication-title {
  font-size: 15px;
  font-weight: bold;
  color: #333!important;
}

.publication-authors {
  text-align: left;
  /* font-style: italic; */
  color: #333;
  font-size: 0.88em;
}

.author-is-me {
  font-weight: bold;
  text-decoration: underline;
  text-decoration-style: dotted;
}

.card-icons {
  text-align: left;
}

.card-icons > .v-btn {
  margin-right: 0.8em;
  text-transform: capitalize;
  color: steelblue;
  font-weight: bold;
}

.card-icons i {
  margin-right: 0.2em;
  font-size: 0.9rem!important;
}

</style>
