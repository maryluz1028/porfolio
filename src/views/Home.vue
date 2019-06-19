<template> 
  <div> 
    <svg class="morphsvg" id="morphsvg" width="100%" height="100%" viewBox="0 0 1366 660" preserveAspectRatio="none">
      <path class="morph" d="M0,0H1366V52.367s-121.5,10.47-320,9.579S770,50.135,592,49.91s-169.606,2.519-324,3.565C115.371,54.514,0,49.019,0,49.019Z" fill="#183661"></path>
    </svg> 
    <Header/> 
    <Banner/> 
    <main class="main">
      <v-container >
         <v-layout row wrap>
           <v-flex xs12>  
            <h2 id="Conocimientos" class="text-xs-center mt-5 mb-4" >Conocimientos</h2>
            <Knowledge/>
            <h2 id="Experencias" class="text-xs-center mt-5 mb-4" >Experencias</h2>
            <Experencies/>
             <h2 id="Casosdeexito" class="text-xs-center mt-5 mb-4">Casos de Exito</h2>
             <Success/>
            </v-flex>
         </v-layout>
      </v-container>
    </main>
    <Footer/> 
</div>
</template>

 
<script>

 import Header from '../components/Header'
 import Banner from '../components/Banner'
 import Knowledge from '../components/Knowledge'
 import Experencies from '../components/Experencies'
 import Success from '../components/Success'
 import Footer from '../components/Footer' 
 export default {
  components:{
      Knowledge,
      Header,
      Banner,
      Experencies,
      Success,
      Footer  
  },
  data() { 
    return {   
    }
  }
}
 
</script> 
<style lang="scss">  
// Breakpoints  
:root{ 
--xl: 1904px;
--lg: 1264px;
--md: 959px;
--sm: 960px;
--xs: 600px;  
}
$md: 959px;  
* {
  font-family: 'Raleway', sans-serif !important; 
}
* i{ font-family: 'Material Icons' !important; }
.morphsvg{ 
    width:100%;
    height:690px;
    position:absolute;  
    top:0;
    left:0;
    right:0;
    pointer-events:none; 
    z-index: 1;
    // @media (max-width:$md){
    //   height:26%; 
    // }
    // @media (max-width:960px){
    //   height:26%; 
    // }
    @media (max-width:650px){
      height:700px; 
      path.morph{
       d: path("M0,0H1366V500s-178.5,58-376,58-225.5-50-408-58-214.5,12-360,12S0,500,0,500Z");
     }
    }  
    @media (max-width:250px){
       height:810px;  
    } 
    @media (max-width:220px){
       height:8%;  
    } 
  
}  
.main{
  margin-top:1em;  
} 

</style>