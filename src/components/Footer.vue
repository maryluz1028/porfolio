<template> 
  <v-footer
    dark
    height="auto" id="Contactos" class="mt-5"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="primary">
        <v-container >
          <v-layout row wrap>
            <v-flex xs12 sm12 md6 lg6 xl6>
              <div>
                <h2>Contactos</h2>
                <h4>Correo: <span class="font-weight-light">parionahuaraca@gmail.com</span></h4>
                <h4>Celecular: <span class="font-weight-light">995871015</span></h4>
                <h4>Lugar de recidencia: <span class="font-weight-light">Lince - Lima - Perú</span></h4>
               
              </div> 
            </v-flex> 
            <v-flex xs12 sm12 md6 lg6 xl6 d-flex align-center="true" >
              <v-layout row wrap justify-center="true"  >
                <v-flex xs10 sm12 md10 lg8 xl7 align-self-end="true"> 
                  <v-btn
                    v-for="social in socials"
                    :key="social"
                    class="mx-3"
                    dark
                    icon
                    :href="social.link"
                    target="_blank"
                  >
                    <v-icon size="24px">{{ social.icon }}</v-icon>
                  </v-btn>  
                </v-flex>
              </v-layout> 
            </v-flex> 
          </v-layout>
        </v-container>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center"> 
        &copy;{{ new Date().toISOString().substr(0, 4)}} — <strong>  Wilber Pariona</strong>
      </v-card-actions>
    </v-card>
  </v-footer> 
</template>
<script>
export default {
      data: () => ({ 
      socials: [ 
        {icon:'fab fa-github',link:'https://github.com/WilberCode/'},
        {icon:'fab fa-facebook',link:'https://www.facebook.com/wilberparionah'},
        {icon:'fab fa-twitter',link:'https://twitter.com/ParionaDeivis'},
        {icon:'fab fa-linkedin',link:'https://www.linkedin.com/in/wilber-pariona-huaraca-69971713a/'},
        {icon:'fab fa-instagram',link:'https://github.com/WilberCode/'}
      ]
    })
}
</script>
<style>
    
</style>