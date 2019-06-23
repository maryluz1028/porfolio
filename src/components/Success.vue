<template>
<v-container grid-list-md>
  <v-layout row  wrap align-content-space-between="true">
    <template v-for="page in pages">  
      <v-flex xs12 sm12 md6 lg6 :key="page.sertor"> 
        <v-card class="card">
          <v-img
            class="white--text"
            height="300px"
            :src="require(`../assets/${page.imgUrl}`)" 
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <!-- <span class="headline">Top 10 Australian beaches</span> -->
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <div class="card-description">
              <v-card-title >
              <div>
                <span class="font-weight-bold">{{page.name}}</span> 
                <p class="grey--text">{{page.sector}}</p>
                <span></span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn ml-5 round="true"  color="orange" class="white--text" :href="page.link" target="_blank">Ver Página</v-btn> 
          </v-card-actions>
          </div>
        </v-card>
      </v-flex>
    </template>
  </v-layout>
</v-container>
  
</template>
<script>
export default {
    data(){
      return{
        pages:[
          {
            imgUrl:'igcscreenshot.png',
            name:'IGC',
            sector:'Eduación',
            description:'Brinda programas de Educación Ejecutiva y Gerencial en Gestión Pública',
            link:'https://igc.edu.pe'
          },
          {
            imgUrl:'iberotecscreenshot.png',
            name:'Iberotec',
            sector:'Eduación',
            description:'Instituto de tecnologia del Perú',
            link:'https://aulavirtual.iberotec.edu.pe/'
          } 
          ]
      }
    }
}
</script>
<style lang="scss" >
  .card{
    border-radius: 10px;
    &-description{
      padding: 1em;
    }
  }

</style>