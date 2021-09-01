<template>
  <v-main class="claBackGrou fill-height" fluid>
        <v-img src="~@/assets/Hero.jpg" class="fill-height" fluid></v-img>
    <v-flex class="text-center">
      <v-container class="fill-height" fluid>
        <v-row>
          <v-col cols="10" class="mx-auto">
            <v-flex class="pa-10 pb-8 text-center">
              <h1 class="textHero">WEB DEVELOPMENT & SUPPORT SERVICE</h1>
              <h1 class="textHero">For Your WEBSITE</h1>
              <v-btn
                v-scroll-to="'#Di1'"
                class="mt-6"
                depressed
                color="primary"
              >
                Lets Start
              </v-btn>
            </v-flex>
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
    <div id="Di1"></div>
  </v-main>
</template>

<style scoped>
.claBackGrou {
  /* background-image: url("~@/assets/Hero.jpg"); */
  background-size: cover;
  width: 100%;
  max-height: 95vh;
}
.textHero {
  color: white;
  font-size: 300%;
  font-family: Comic Sans MS;
}
</style>