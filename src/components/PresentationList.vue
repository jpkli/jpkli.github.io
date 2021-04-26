<template>
  <v-list class="pa-0">
    <h2  v-if="headline" class="title text-left">{{headline}}</h2>
    <template v-for="(talk, index) in talks">
      <v-list-item class="text-left"
        :key=index
      >
        <v-list-item-action class="pa-0 my-0 mr-2">
          <v-list-item-action-text style="color: #666; width: 60px;">{{ talk.date }}</v-list-item-action-text>
        </v-list-item-action>
        <v-list-item-content class="pa-0 text-left caption">
          {{ talk.for }}, {{ talk.location }}
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
export default {
  name: 'PresentationList',
  props: {
    headline: String,
    talks: Array
  }
}
</script>

<style>

.talk-authors {
  text-align: left;
  font-style: italic;
  color: #333;
  font-size: 0.9em;
}

.author-is-me {
  font-weight: bold;
  text-decoration: underline;
}
</style>
