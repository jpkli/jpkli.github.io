<template>
  <v-app>
    <v-content>
      <v-container class="page-container">
        <h2 class="mt-6" v-text="title"></h2>
        <h3 v-text="description"></h3>
        <v-row class="my-6">
          <v-col class="pa-2" cols="4"  v-for="(project, index) in projects" :key="index">
            <v-card flat class="ma-1 pa-3 frame">
               <v-card-text class="pa-0 subtitle-2 font-weight-bold" v-text="project.name"  />
              <v-row>
                <v-col :cols="12">
                  <v-img
                    class="thumb"
                    style="height: 148px;"
                    :src="project.img"
                  />
                </v-col>
                <v-col :cols="12" class="py-0">
                  <v-card-text class="pa-0 caption project-text">
                    {{project.description}}
                  </v-card-text>
                  <v-card-actions class="px-1 project-icons" color="blue darken-2">
                    <a v-if="project.paper" :href="project.paper"><v-icon color="blue darken-2" title="paper">fa fa-file-pdf-o</v-icon>paper</a>
                    <a v-if="project.website" :href="project.website"><v-icon color="blue darken-2" title="homepage">fa fa-link</v-icon>website</a>
                    <a v-if="project.video" :href="project.video"><v-icon color="blue darken-2" title="video">fa fa-film</v-icon>video</a>
                    <a v-if="project.code" :href="project.code"><v-icon class="small" color="blue darken-2" title="code">fa fa-github</v-icon>code</a>
                    <a v-if="project.demo" :href="project.demo"><v-icon color="blue darken-2" title="demo">fa fa-laptop</v-icon>demo</a>
                    <a v-if="project.slides" :href="project.slides"><v-icon color="blue darken-2" title="demo">fa fa-indent</v-icon>slides</a>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import jsYaml from 'js-yaml'

export default {
name: 'ProjectPage',
  data () {
    return {
      projects: null,
      title: null,
      description: null
    }
  },
  async created () {
    let projectBundle = jsYaml.load(await (await fetch('yaml/pix.yaml')).text())
    this.title = projectBundle.title
    this.description = projectBundle.description
    this.projects = projectBundle.items
  },
  mounted() {
  
  }
}
</script>

<style scoped>


.frame {
  border: 1px solid #ccc!important;
  border-radius: 10px;
}

.project-title {
  font-weight: bold;
  font-size: 1.2em;
  text-align: left;
  /* margin: 0 auto; */
  /* margin-left: 0.5em; */
}

.thumb div {
  object-fit: cover;
  background-position: top left!important;
	-webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .5s ease-in-out;
	transition: .5s ease-in-out;
}

.thumb:hover div{
	background-position: right!important;
}

.project-text {
  text-align: left;
  min-height: 3em;
  max-height: 6em;
  /* font-size: 0.9em; */
  /* margin: 0 0 0 1.2em; */
}

.project-icons {
  text-align: left;
  font-size: 0.8rem;

}

.project-icons a {
  margin-right: 0.7em;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.project-icons i {
  margin-right: 0.2em;
  font-size: 1rem!important;
}

</style>

