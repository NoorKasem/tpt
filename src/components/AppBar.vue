<template>
  <div>
    <v-app>
      <v-app-bar dense style="color: transparent !important" fixed>
        
        <!-- <v-img width="5" height="5" src="~@/assets/logo.png"></v-img> -->

        <v-spacer></v-spacer>

        <v-btn class="btn" text x-large>Services</v-btn>
        <v-btn class="btn" text x-large>Why Choose Us</v-btn>
        <v-btn class="btn" text x-large>Contact</v-btn>

        <v-spacer></v-spacer>
        <v-btn class="img-nav" icon>
          <v-icon color="blue">mdi-facebook</v-icon>
        </v-btn>

        <v-btn class="img-nav" icon>
          <v-icon color="red">mdi-gmail</v-icon>
        </v-btn>
      </v-app-bar>
    </v-app>
  </div>
</template>




<style  >
.btn {
  font-family: Comic sans ms;
}
.btn:hover {
  border-bottom: 5px solid #ffc400;
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