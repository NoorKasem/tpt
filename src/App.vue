<template>
  <v-app >
    <v-app-bar fixed> 
      <AppBar/>
    </v-app-bar>

    <v-main>
      <HeroSection/>
      <Services />
      <Footer/>
       <v-flex xs12>
       <v-btn
            v-scroll="onScroll"
            v-show="fab"
            fab
            dark
            fixed
            bottom
            right
            color="#ffc400"
            @click="toTop"
          >
            <v-icon color="black">mdi-arrow-up</v-icon>
          </v-btn>
       </v-flex>
    </v-main>
  </v-app>
</template>

<script>
import Services from "./components/Services";
import AppBar from "./components/AppBar.vue";
import HeroSection from "./components/HeroSection.vue"
import Footer from "./components/Footer.vue"
export default {
  name: "App",

  components: {
    Services,
    AppBar,
    HeroSection,
    Footer,
  },

  data: () => ({
    fab: false
  }),

  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }

};
</script>
