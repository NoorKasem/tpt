<template>
  <v-app >
    <v-app-bar fixed> 
      <AppBar/>
    </v-app-bar>

    <v-main>
      <HeroSection/>
      <Services />
    </v-main>
  </v-app>
</template>

<script>
import Services from "./components/Services";
import AppBar from "./components/AppBar.vue";
import HeroSection from "./components/HeroSection.vue"
export default {
  name: "App",

  components: {
    Services,
    AppBar,
    HeroSection,
  },

  data: () => ({
    //
  }),
};
</script>
