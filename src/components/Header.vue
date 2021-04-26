<template>
  <v-toolbar flat dense color="white" >
    <img width="30" src="image/me.jpg" style="border-radius: 50%"/>
    <v-toolbar-title class="ma-2 mr-5">
      JPKLi
    </v-toolbar-title>
      <router-link
        v-for="link in links"
        :key="link.label"
        text
        :class="{active: link.active}"
        :to="{ path: link.url }"
        style="text-transform: none; color: #888;"
        active-class
        class="px-3 mx-3 py-2 my-0 header-link"
      >
        {{ link.label }}
      </router-link>

  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      links: [
        {label: 'Profile', url: '/', active: false},
        {label: 'Projects', url: '/projects', active: false},
        {label: 'Publications', url: '/publications', active: false},
        {label: 'Presentations', url: '/talks', active: false}
      ]
    }
  },
  mounted () {
    // let path = window.location.pathname
    let path = window.location.hash.substr(1);
    this.links.filter(link => link.url == path)[0].active = true
  }
}
</script>

<style scoped>


.active {
  border-bottom: 3px solid steelblue;
  background-color: #fff!important;
  font-weight: bold;
  color: steelblue!important;
}


.active:hover {
  text-decoration: none;
}

.header-links:hover { 
  color: #000!important;
  text-transform: none;
  background-color: #fff!important;
}
</style>
