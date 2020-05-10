<template>
<v-container class="banner banner-content"  id="Acercademi"> 

  <v-layout row wrap>  
    <v-flex xs12 sm12 md4 lg4 xl4 > 
      
      <div class="banner-bio">
        <h2>Hola, Soy Wilber</h2>
        <p>Técnico profesional de Informática y Sistemas. Soy una persona apasionado por el maravilloso mundo del desarrollo Web y tengo la capacidad de desarrollar páginas Web responsive, páginas personalizadas con Wordpress, tiendas online con WooCommerce y también tengo conocimiento intermedio de desarrollo en el Backend. Dispuesto a investigar nuevas funcionalidades de la web y aprender, asumir nuevos retos y superarme como profesional.</p>
      </div>
      
      <v-btn class="banner-btn secondary "  round  data-aos="fade-up"  data-aos-offset="200"  data-aos-once="true" href="https://drive.google.com/file/d/1HtHsHc4pxJf7QvyRH0tbGRQkEpU4vhkS/view" target="_blank"   >Descargar CV </v-btn>
      <v-btn class="banner-btn  banner-btn--whatsapp" dark="false" round  color="secondary"    outline data-aos="fade-up"  data-aos-offset="200" data-aos-delay="300" data-aos-once="true" href="https://api.whatsapp.com/send?phone=51938343796&text=Hola" target="_blank" >Enviar mensaje </v-btn>
    </v-flex>
    <v-flex xs12 sm12 md8 lg8 xl8>  
      <div class=" banner-image text-sx-center text-sm-center text-md-center text-lg-right" >
        <img :src="require('../assets/me.svg')" data-aos="fade-up"  data-aos-offset="200"  data-aos-once="true">
      </div>
      </v-flex>
  </v-layout> 
</v-container>
</template>
<script>

export default {
    data(){
      return{
     
      }
    } 
}
</script>
<style lang="scss">
 
$md: 959px; 
.banner{
  &-content{
    position:relative;
    z-index: 5;
  }
  &-bio{
    h2{
      margin-top:2em;
      margin-bottom:.8em;
    }
    color:#fff;
  }
  
  &-btn{
    font-size:14px;
    color:#ffffff;
    text-transform:none;
    padding:0 1.5em;
    margin-left:0;    
    &--whatsapp{
      border-width: 2px !important;
    }
  }
  &-image{
    margin-top:3.5em;
     img{
       @media (max-width:$md){
          width:50%; 
        }
      //  @media (max-width:var(--sm)){
      //     width:20%; 
      //   }
     }
   @media (min-width:360px) and  (max-width:645px) {
      margin-top:7em;
   }
  }
}
</style>
