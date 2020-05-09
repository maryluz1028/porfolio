<template>
<v-container grid-list-md mb-4 >
  <v-layout row  wrap align-content-space-between="true" class="card-wrap" >
    <template v-for="page in pages">  
      <v-flex xs12 sm12 md6 lg6  px-3 py-3  :key="page.sertor"> 
        <v-card class="card">
          <v-img
            class="white--text" 
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
                <a  class="list-link py-2 pr-5" :href="page.link" target="_blank" >{{page.link}}</a> 
              </div>
            </v-card-title> 
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
            name:'IGC - Instituto de Gerencia y Gestión',
            sector:'Eduación', 
            link:'https://igc.edu.pe'
          }, 
          {
            imgUrl:'tendenzescreenshot.png',
            name:'Tendenze Perú',
            sector:'Agencia de Marketing',
            link:'https://nuevo.tendenzeperu.com'
          },
          {
            imgUrl:'nmscreenshot.png',
            name:'Nuevo Mundo Espacios',
            sector:'Inmobiliaria',
            link:'http://www.nuevomundoespacios.com.pe/'
          },
          {
            imgUrl:'feriasdigitalescreenshot.png',
            name:'Ferias Digitales',
            sector:'Agencia de Marketing', 
            link:'https://feriasdigitales.pe/'
          } 
          ]
      }
    }
}
</script>
<style lang="scss" >
  .card{
    &-wrap{
      margin:0 -40px !important;
      @media (max-width:900px){ 
           margin:0 -34px !important;

      }
    } 
    border-radius: 10px;
    box-shadow: var(--shadow-lg);
    &-description{
      padding: 1em;
    }
  }

</style>