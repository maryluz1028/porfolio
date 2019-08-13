<template>  
<div data-aos="fade-up"  data-aos-offset="200"  data-aos-once="true" data-aos-id="knoledgeaos"> 
        <div class="text-xs-center">
          <v-container grid-list-sm>
            <v-layout row wrap>
              <v-flex xs12 sm6 md4 lg3 xl3>
                 <v-progress-circular
                :rotate="360"
                :size="100"
                :width="15"
                :value="valueProgress-5"
                color="teal"
                >
                {{ valueProgress-5 }}%
                </v-progress-circular>
                <p>Html5, Pug, Css3 & Sass</p>
              </v-flex>
              <v-flex xs12 sm6 md4 lg3 xl3>  
                <v-progress-circular
                :rotate="180"
                :size="100"
                :width="15"
                :value="valueProgress-5"
                color="orange"
                >
                {{ valueProgress-5 }}%
                </v-progress-circular>  
                <p>Tailwindcss, Bootstrap, Materializecss, Fundation & EDgrid</p>
              </v-flex>
               <v-flex xs12 sm6 md4 lg3 xl3>  
                <v-progress-circular
                :rotate="180"
                :size="100"
                :width="15"
                :value="valueProgress-10"
                color="pink"
                >
                {{ valueProgress-10 }}%
                </v-progress-circular>  
                <p>Wordpress(CMS) & WooCommerce</p>
              </v-flex>
              <v-flex xs12 sm6 md4 lg3 xl3>
                 <v-progress-circular
                :rotate="-90"
                :size="100"
                :width="15"
                :value="valueProgress-15"
                color="primary"
                >
                {{ valueProgress-15 }}%
                </v-progress-circular>
                <p>JavaScript, Ajax & JSON</p> 
              </v-flex>
              <v-flex xs12 sm6 md4 lg3 xl3>  
                <v-progress-circular
                :rotate="180"
                :size="100"
                :width="15"
                :value="valueProgress-20"
                color="green"
                >
                {{ valueProgress-20 }}%
                </v-progress-circular>  
                <p>Markdown, Git, GitHub & GitLab</p>
              </v-flex>
              <v-flex xs12 sm6 md4 lg3 xl3> 
                <v-progress-circular
                :rotate="90"
                :size="100"
                :width="15"
                :value="valueProgress-25"
                color="red"
                >
                {{ valueProgress-25 }}%
                </v-progress-circular>
                <p>JQuery, Vue.js, Babel & Webpack</p>
              </v-flex>  
               <v-flex xs12 sm6 md4 lg3 xl3>  
                <v-progress-circular
                :rotate="180"
                :size="100"
                :width="15"
                :value="valueProgress-25"
                color="light-blue darken-2"
                >
                {{ valueProgress-25 }}%
                </v-progress-circular>  
                <p>Adove XD, Photoshop & Illustrator</p>
              </v-flex> 
              <v-flex xs12 sm6 md4 lg3 xl3>  
                <v-progress-circular
                :rotate="180"
                :size="100"
                :width="15"
                :value="valueProgress-30"
                color="teal darken-1"
                >
                {{ valueProgress-30 }}%
                </v-progress-circular>  
                <p>SQL, MySQL, MongoDB & Firebase</p>
              </v-flex> 
              <v-flex xs12 sm6 md4 lg3 xl3>  
                <v-progress-circular
                :rotate="180"
                :size="100"
                :width="15"
                :value="valueProgress-50"
                color="lime darken-1"
                >
                {{ valueProgress-50 }}%
                </v-progress-circular>  
                <p>Node, NPM, Gulp & React</p>
              </v-flex> 
              <v-flex xs12 sm6 md4 lg3 xl3>  
                <v-progress-circular
                :rotate="180"
                :size="100"
                :width="15"
                :value="valueProgress-50"
                color="cyan darken-2"
                >
                {{ valueProgress-50 }}%
                </v-progress-circular>  
                <p>PHP, Java & Android Studio</p>
              </v-flex>
            </v-layout>
          </v-container>  

    </div>
    </div>
</template>
<script>  

 export default {
    data () {
      return {
        interval: {},
        valueProgress: 0,  
      }
    },
    mounted () { 
    this.getValue()   
    },
    methods:{
       getValue(){
           document.addEventListener('aos:in:knoledgeaos', () => { 
             this.valueProgress = 100
            
          });  
       } 
    } 
     
  }  
   
</script>
<style lang="scss">
    .v-progress-circular{ 
        margin: 1rem
    }
</style>