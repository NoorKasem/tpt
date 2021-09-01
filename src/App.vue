<template>
  <v-app id="app">
    <v-app-bar> 
      <AppBar/>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import AppBar from "./components/AppBar.vue";

export default {
  name: "App",

  components: {
    HelloWorld,
    AppBar,
  },

  data: () => ({
    //
  }),
};
</script>
