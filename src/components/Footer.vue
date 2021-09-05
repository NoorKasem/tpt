<template>
<!-- this is footer -->
  <v-footer
    style="background-color: black !important"
    class="indigo text-center"
    dark
    padless
  >
    <v-container>
      <v-col style="display: inline-flex" cols="12">
        <v-col cols="4">
          <v-card
            style="background-color: black !important; display: table-caption"
            class="indigo"
          >
            <v-card-title class="pa-5" > Contact Us: </v-card-title>
            <v-card-subtitle class="pa-5"> +9630937035762 +9630992360698</v-card-subtitle>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-img
            style="margin: 0 auto"
            contain
            width="120"
            height="120"
            src="~@/assets/logo.png"
          ></v-img>
          <v-card-text style="margin: 0 auto" class="white--text">
            <v-icon>mdi-copyright</v-icon> {{ new Date().getFullYear() }} —
            <strong> TPT COMPANY</strong>
          </v-card-text>
        </v-col>
        <v-col cols="4">
          <v-card   style="background-color: black !important; display: inline-grid;" class="indigo text-center">
            
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 white--text"
                icon
                x-large
              >
                <v-icon size="24px">
                  {{ icon }}
                </v-icon>
              </v-btn>
            
          </v-card>
        </v-col>
      </v-col>

      <v-divider></v-divider>
    </v-container>
  </v-footer>
</template>



<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-gmail", "mdi-instagram"],
  }),
};
</script>
