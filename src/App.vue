<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.thumb div {
  object-fit: cover;
  background-position: top left!important;
	-webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .7s ease-in-out;
	transition: .7s ease-in-out;
}

.thumb:hover div{
	background-position: right!important;
}


#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: Lato;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #fff;
  /* color: #2c3e50; */
  /* border-top: 3px solid steelblue; */
}

#footer {
  text-transform: none;
}


.page-container {
  max-width: 1028px!important;
  padding-top: 1em!important;
  margin: auto;
}

@media screen and (max-width: 1264px) {
.page-container {
  max-width: 880px!important;
  padding-top: 1em!important;
  margin: auto;
}
}

.portrait {
  text-align: center;
  margin: auto;
}

.portrait div{
  border-radius: 50%;
  margin: auto;
}
</style>

