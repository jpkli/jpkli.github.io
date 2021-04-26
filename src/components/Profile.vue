<template>
  <v-row id="profile">
    <v-col cols="12" sm="3" class="pa-2">
      <v-img class="portrait my-3" style="max-width: 200px;" :src="profile.photo" />
      <!-- <router-link class="pa caption" to="mailto:jpkelvinli@gmail.com">
        <v-icon small color="blue darken-2">email</v-icon>
        jpkelvinli@gmail.com
      </router-link> -->
    </v-col>
    <v-col cols="12" sm="9" class="text-left px-0">
      <v-card flat class="pa-3">
        <v-card-title class="pa-2">
          {{profile.greeting}}
          <v-spacer />

          <v-btn icon class="contact-link" href="mailto:jpkelvinli@gmail.com">
            <v-icon color="blue darken-2">email</v-icon>
          </v-btn>
          <v-btn icon class="contact-link" href="https://github.com/jpkli">
            <v-icon color="blue darken-2">fa fa-github</v-icon>
          </v-btn>
          <v-btn icon class="contact-link" href="https://twitter.com/jpli1221">
            <v-icon color="blue darken-2">fa fa-linkedin</v-icon>
          </v-btn>
          <v-btn icon class="contact-link" href="https://twitter.com/jpli1221">
            <v-icon color="blue darken-2">fa fa-twitter</v-icon>
          </v-btn>
          <v-btn icon class="contact-link" href="https://scholar.google.com/citations?user=B1fFBKEAAAAJ">
            <v-avatar
              color="primary"
              size="24"
            >
              <img src="../assets/google-scholar.jpg" alt="gscholar" />
            </v-avatar>
          </v-btn>
          <v-btn icon to="cv">
            <v-avatar
              color="primary"
              size="24"
            >
              <span class="white--text">CV</span>
            </v-avatar>
          </v-btn>


        </v-card-title>
        <template v-for="(intro, index) in profile.introductions">
          <v-card-text :key=index class="pa-1">
            <p class="text-left subtitle-2 ma-1" v-html="intro"></p>
          </v-card-text>
        </template>
        <v-card-actions class="mx-0 px-0">
          <!-- <v-btn text class="contact-link" to="projects">Projects</v-btn>
          <v-btn text class="contact-link">Publications</v-btn>
          <v-btn text class="contact-link">Presentations</v-btn> -->
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'Profile',
  props: {
    profile: Object
  }
}
</script>

<style scoped>
#profile {
  background-color: #fff;
}

.contact-link {
  text-transform: none;
  color: #3498db!important;
}
</style>