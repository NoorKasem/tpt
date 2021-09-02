// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#ffc400',
                secondary: '#f6f3f3',
                anchor: '#424242',
                bas:'#ffffff',

            },
            dark: {
                primary: '#ffc400',
                secondary: '#000000',
                anchor: '#000000',
                bas:'#000000'
            },
        },
    },
})

export default vuetify