<template>
<v-container class="banner banner-content"  id="Acercademi"> 

  <v-layout row wrap>  
    <v-flex xs12 sm12 md4 lg4 xl4 >  
      <div class="banner-bio">
        <h2>Hola, Soy Wilber</h2>
        <p>Especialista en Desarrollo Web con más de 3 años de experiencia. Desarrollo páginas web estáticas, páginas web dinámicas con WordPress bien personalizadas, tiendas online personalizadas con WordPress + WooCommerce, creo landing pages, optimizo la velocidad de la web y también configuro posicionamiento de SEO esencial. Dispuesto a investigar nuevas funcionalidades de la web, aprender y asumir nuevos retos.</p>
      </div>
       
      <v-btn class="banner-btn secondary "  round  data-aos="fade-up"  data-aos-offset="200" data-aos-delay="800"  data-aos-once="true" href="https://drive.google.com/file/d/1HtHsHc4pxJf7QvyRH0tbGRQkEpU4vhkS/view" target="_blank"   >Descargar CV </v-btn>
      <v-btn class="banner-btn  banner-btn--whatsapp" dark="false" round  color="secondary"    outline data-aos="fade-up"  data-aos-offset="200" data-aos-delay="1200" data-aos-once="true" href="https://api.whatsapp.com/send?phone=51938343796&text=Hola" target="_blank" >Enviar mensaje </v-btn>
      <div class="banner-avatar d-inline-flex py-3 px-4" outline data-aos="fade-up"  data-aos-offset="200" data-aos-delay="1500"  >
        <div  class="banner-avatar-image" >
          <img  class=" " src="../assets/wilberpariona.jpg" alt="Github"> 
              <v-btn class="mx-2 social-icon " href="https://github.com/WilberCode"  >
                <v-icon size="18px"> {{'fab fa-github'}} </v-icon>
             </v-btn> 
        </div>
        <div class="d-flex  align-center" >
           <div class="ml-4">
             <p class="mb-2 font-weight-bold banner-avatar-number	">+51938343796</p>  
             <p  class="mb-0 " >Lima - Perú</p> 
           </div>
        </div>
      </div>
    </v-flex>
    <v-flex xs12 sm12 md8 lg8 xl8>  
      <div class=" banner-image text-sx-center relative text-sm-center text-md-center text-lg-right" >
        <img :src="require('../assets/me.svg')" data-aos="fade-up"  data-aos-offset="200"  data-aos-once="true" data-aos-delay="1800" >
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
      margin-top:1em;
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
      position: relative;
      .social-icon {
          width: 38px !important;
          height: 38px !important;
          position: absolute;
          bottom: -15px;
          left: -8px;
          background: #000;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          border-radius: 100%;
          min-width: auto;
          border:2px solid #000; 
           box-shadow: none !important; 
           background-color: #fff !important;
      }
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
