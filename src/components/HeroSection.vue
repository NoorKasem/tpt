<template>
  <v-main class="claBackGrou " fill-height fluid>
      <v-container class="fill-height" fluid>
    <v-flex class="text-center">
        <v-row class="text-center">
          <v-col cols="10" class="mx-auto">
            <v-flex class="pa-10 pb-8">
              <h1 class="textHero">WEB DEVELOPMENT & SUPPORT SERVICES</h1>
              <h1 class="textHero">TO Your WEBSITE</h1>
              <v-btn
                v-scroll-to="'#Di1'"
                class="mt-6"
                depressed
                color="primary"
                x-large
              >
                Let's Start
              </v-btn>
            </v-flex>
          </v-col>
        </v-row>
    </v-flex>
      </v-container>
    <div id="Di1"></div>
  </v-main>
</template>

<style scoped>
.claBackGrou {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('~@/assets/Hero.jpg');
  background-size: cover;
  width: 100%;
  height: 100vh;
}
.textHero {
  color: white;
  font-size: 300%;
  font-family: Comic Sans MS;
}
</style>