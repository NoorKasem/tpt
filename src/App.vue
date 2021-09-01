<template>
  <v-app id="app">
    <v-app-bar> 
      <AppBar/>
    </v-app-bar>

    <v-main>
      <HeroSection/>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import AppBar from "./components/AppBar.vue";
import HeroSection from "./components/HeroSection.vue"
export default {
  name: "App",

  components: {
    HelloWorld,
    AppBar,
    HeroSection,
  },

  data: () => ({
    //
  }),
};
</script>
