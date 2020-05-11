<template>
<v-container class="banner banner-content"  id="Acercademi"> 

  <v-layout row wrap>  
    <v-flex xs12 sm12 md4 lg4 xl4 >  
      <div class="banner-bio">
        <h2>Hola, Soy Wilber</h2>
        <p>Especialista en Desarrollo Web con experencia.
          Tengo la capacidad de crear páginas Web resposive,
          plantillas perzonalizadas para Wordpress,
          tiendas online con WooCommerce, optimización de velocidad de 
          carga de una web, configuración esencial de posicionamiento SEO, 
          emailings perzonalizadas. Dispuesto a investigar 
          nuevas funcionalidades de la web y aprender, asumir 
          nuevos retos y superarme como profesional.</p>
      </div>
      
      <v-btn class="banner-btn secondary "  round  data-aos="fade-up"  data-aos-offset="200"  data-aos-once="true" href="https://drive.google.com/file/d/1HtHsHc4pxJf7QvyRH0tbGRQkEpU4vhkS/view" target="_blank"   >Descargar CV </v-btn>
      <v-btn class="banner-btn  banner-btn--whatsapp" dark="false" round  color="secondary"    outline data-aos="fade-up"  data-aos-offset="200" data-aos-delay="300" data-aos-once="true" href="https://api.whatsapp.com/send?phone=51938343796&text=Hola" target="_blank" >Enviar mensaje </v-btn>
      <div class="banner-avatar d-inline-flex py-3 px-4" >
        <div  class="banner-avatar-image" >
          <img  class=" " src="../assets/wilberpariona.jpg" alt="">
        </div>
        <div class="d-flex  align-center" >
           <div class="ml-4">
             <p class="mb-2 font-weight-bold banner-avatar-number	">+51938343796</p>  
             <p  class="mb-0 " >Lima- Perú</p>
           </div>
        </div>
      </div>
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
  &-avatar{

    box-shadow: var(--shadow-lg);
    border-radius: 6px;
    overflow: hidden;
    background: #fff; 
    width: 100%;
    max-width: 350px;
    margin-top: 2em;
    &-image{
      flex: initial !important;
    }
    &-number{
      font-size: 15px;
    }
    img{
      width: 80px; 
      display: block;
      border-radius: 50%;
      background:var(--v-primary-lighten5);
    }
  }
  &-image{
    margin-top:3.5em ;
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
