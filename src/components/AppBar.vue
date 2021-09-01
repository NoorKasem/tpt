<template>
  <v-app-bar dark fixed>
    <v-img contain width="50" height="50" src="~@/assets/logo.png"></v-img>
    <v-btn x-large icon>
      <v-icon color="#ffc400">mdi-lightbulb-on</v-icon>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn v-scroll-to="'#services'" class="btn" text x-large>Services</v-btn>
    <v-btn v-scroll-to="'#d2'" class="btn" text x-large>Why Choose Us</v-btn>
    <v-btn v-scroll-to="'#footer'" class="btn" text x-large>Contact</v-btn>

    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-btn class="img-nav" icon>
      <v-icon color="blue">mdi-facebook</v-icon>
    </v-btn>

    <v-btn class="img-nav" icon>
      <v-icon color="red">mdi-gmail</v-icon>
    </v-btn>
    
  </v-app-bar>
</template>




<style  >
.btn {
  font-family: Comic sans ms;
}
.btn:hover {
  border-bottom: 4px solid #ffc400;
  border-top: 4px solid #ffc400;
}
.img-nav {
  border-radius: 50%;
  transition: all 0.2s linear;
}
.img-nav:hover {
  transform: scale(1.1);
  cursor: pointer;
}
</style>