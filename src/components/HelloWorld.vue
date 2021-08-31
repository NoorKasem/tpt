<template>
  <!-- this is services section -->
  <section style="background-color: #f6f3f3">
    <div style="padding-bottom: 100px">
      <v-container>
        <div>
          <h1
            class="d-flex justify-center"
            style="color: #ffc400; font-size: 45px"
          >
            OUR SERVICES
          </h1>

          <h3 class="d-flex justify-center" style="color: #424242">
            TPT team will assist you through all stages, from planning, design,
            development, And launching!
          </h3>
          <br />
        </div>
        <v-row>
          <v-col style="display: inline-flex" cols="12">
            <v-col class="hover" cols="4">
              <v-card max-width="100%" style="background-color: WHITE">
                <v-img src="~@/assets/ux.gif"></v-img>

                <v-card-title style="font-size: 20px" class="text-center"
                  >Design (UI/UX)</v-card-title
                >
                <v-card-subtitle style="font-size: 14px" class="text-center"
                  >UI designers work closely with UX designers to reflect their
                  vision with the graphics designers to showcase your design in
                  clever way !.
                </v-card-subtitle>
              </v-card>
            </v-col>
            <v-col class="hover" cols="4">
              <v-card max-width="100%" style="background-color: WHITE">
                <v-img src="~@/assets/72856-software-development.gif"></v-img>

                <v-card-title style="font-size: 20px" class="text-center"
                  >Front-End Development</v-card-title
                >

                <v-card-subtitle style="font-size: 14px" class="text-center">
                  Front-end developers who specialize in designing websites. The
                  duties of a front-end developer include designing pages in a
                  modern way !.
                </v-card-subtitle>
              </v-card>
            </v-col>
            <v-col class="hover" cols="4">
              <v-card max-width="100%" style="background-color: WHITE">
                <v-img src="~@/assets/back.gif"></v-img>
                <v-card-title style="font-size: 20px" class="text-center"
                  >Back-End Development</v-card-title
                >
                <v-card-subtitle style="font-size: 14px" class="text-center"
                  >We provide back-end web development that create, code,
                  improve the server, server-side applications, and databases
                  entry !.
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-col>
          <v-col style="display: inline-flex" cols="12">
            <v-col class="hover" cols="4">
              <v-card max-width="100%" style="background-color: WHITE">
                <v-img
                  src="~@/assets/55562-boy-using-social-media-on-phone.gif"
                ></v-img>

                <v-card-title style="font-size: 20px" class="text-center"
                  >Mobile Applications</v-card-title
                >
                <v-card-subtitle style="font-size: 14px" class="text-center"
                  >Mobile development team has an exceptional experience in
                  creating native, hybrid mobile apps.
                </v-card-subtitle>
              </v-card>
            </v-col>
            <v-col class="hover" cols="4">
              <v-card max-width="100%" style="background-color: WHITE">
                <v-img src="~@/assets/animation_500_kszqt9wi.gif"></v-img>

                <v-card-title style="font-size: 20px" class="text-center"
                  >Hosting & Servers Services</v-card-title
                >

                <v-card-subtitle style="font-size: 14px" class="text-center">
                  You can book a server and host your website in competitive
                  prices and comfortable way.
                </v-card-subtitle>
              </v-card>
            </v-col>
            <v-col class="hover" cols="4">
              <v-card max-width="100%" style="background-color: WHITE">
                <v-img src="~@/assets/animation_500_ksz4snpq.gif"></v-img>
                <v-card-title style="font-size: 20px" class="text-center"
                  >Cloud Storage</v-card-title
                >
                <v-card-subtitle style="font-size: 14px" class="text-center"
                  >We provide a method for storing, retrieving and sharing data
                  in a simple, reliable and scalable way.
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-parallax dark style="background-color: #ffc400; height: 250px">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 style="color: black; font: revert" class="text-h2 mb-4">
            Have a project in mind?!
          </h1>
          <h4 style="color: black" class="text-h5 mb-4">Let's get to work</h4>
          <v-btn style="border: 2px black solid" tile elevation="2" x-large text
            >Contact Us</v-btn
          >
        </v-col>
      </v-row>
    </v-parallax>
  </section>
</template>
<style>
.v-card__title {
  display: block !important;
}
.hover:hover {
  box-shadow: 5px 10px 8px 10px #888888;
}
</style>
