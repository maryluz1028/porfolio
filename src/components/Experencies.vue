<template>
    <div>  
        <v-timeline align-top  :dense="$vuetify.breakpoint.smAndDown"   >
            <v-timeline-item   color="primary lighten-1 experencie"  fill-dot 
                large  data-aos="fade-up"  data-aos-offset="200"  data-aos-once="true"  >
                <template v-slot:icon  color="red" >
                    <v-avatar >
                    <img :src="require('../assets/tendenzelogo.png')">
                    </v-avatar>
                </template>
                <template v-slot:opposite  align-start >
                    <span >Deciembre 2018 - Junio 2019</span>
                </template>

                <v-card color="white lighten-1 pt-4 experencie-card "
                    dark 
                >
                    <v-card-title class="title primary px-5 py-2  experencie-title line-left  "   >Grupo Tendenze Comunicaciones</v-card-title>
                        <v-card-text class="white text--primary">
                            <h2 class="black--text subtitle-span ">Cargo: <span>Desarollador Web</span></h2> 
                            <h2 class="black--text mt-3 " >Funciones:</h2  >  
                            <ul class="list mt-2" >
                                <li>Maquetar webs y landings</li>
                                <li>Programar webs</li>
                                <li>Optimizar webs y tiendas online</li>
                                <li>Maquetar emailings</li>
                                <li> Subir a producción</li> 
                            </ul>
                            <h2  class="black--text mt-3 " >Logros:</h2>
                             <ul class="list list-success mt-2" >
                                <li>Nuevo mundo espacios: <a  class="list-link" href="http://www.nuevomundoespacios.com.pe/" target="_blank" >http://www.nuevomundoespacios.com.pe/</a> </li>
                                <li>Tendenze Perú: <a  class="list-link" href="https://nuevo.tendenzeperu.com/" target="_blank" >https://nuevo.tendenzeperu.com</a> </li>
                                <li>Luna de miel: <a  class="list-link" href="https://www.lunademiel.com.pe/" target="_blank" >https://www.lunademiel.com.pe</a> </li>
                                <li>Ferias Digitales: <a  class="list-link" href="https://feriasdigitales.pe/" target="_blank" >https://feriasdigitales.pe/</a> </li>
                                <li>Ilmagazzino: <a  class="list-link" href="https://maga.tendenzeperu.com/" target="_blank" >https://ilmagazzinodellesorelle.com</a> </li>
                            </ul> 
                          
                        </v-card-text>  
                    </v-card>
            </v-timeline-item>
            <v-timeline-item   color="primary lighten-1 experencie" fill-dot 
                large  data-aos="fade-up"  data-aos-offset="200"  data-aos-once="true" >
                <template v-slot:icon>
                    <v-avatar>
                    <img :src="require('../assets/igclogo.png')">
                    </v-avatar>
                </template>
                <template v-slot:opposite  align-start >
                    <span >Deciembre 2018 - Junio 2019</span>
                </template>

                <v-card color="white  lighten-1 pt-4 experencie-card"
                    dark 
                >
                    <v-card-title class="title primary px-5 py-2  experencie-title line-right ">Instituto de Gerencia Intercontinental (IGC)</v-card-title>
                    <v-card-text class="white text--primary"> 
                        <h2 class="black--text subtitle-span ">Cargo: <span>Desarollador Web</span></h2> 
                        <h2 class="black--text mt-3" >Funciones:</h2> 
                        <ul class="list mt-2" >
                            <li>Diseñar Web</li>
                            <li>Maquetar Web </li>
                            <li>Programar</li>
                            <li>Maquetar mailings</li>
                            <li>Subir a producción</li> 
                        </ul>
                        <h2 class="black--text mt-3" >Logros:</h2> 
                        <ul class="list list-success mt-2" >
                            <li>IGC: <a  class="list-link" href="https://igc.edu.pe" target="_blank" >https://igc.edu.pe</a> </li>
                            <li>Aula virtual: <a  class="list-link" href="https://aulavirtual.igc.edu.pe" target="_blank" >https://aulavirtual.igc.edu.pe</a> </li>
                         </ul>  
                    </v-card-text>  
                    </v-card>
            </v-timeline-item>

           <v-timeline-item  color="  primary lighten-1  experencie " md12  
            fill-dot large key="2" data-aos="fade-up"  data-aos-offset="200"  data-aos-once="true">
            <template v-slot:icon>
                <v-avatar>
                <img :src="require('../assets/iberoteclogo.png')">
                </v-avatar>
            </template>
            <template v-slot:opposite  align-start >
                <span >Septiembre 2016 - Diciembre 2016</span>
            </template>

            <v-card color="white lighten-1 pt-4 experencie-card "
                dark 
            >
                <v-card-title class="title primary px-5 py-2  experencie-title line-left ">Instituto de Tecnología y Gestión Iberotec</v-card-title>
                    <v-card-text class="white text--primary   "> 
                        <h2 class="black--text subtitle-span ">Cargo: <span>Practicante Web</span></h2> 
                        <h2 class="black--text mt-3 " >Funciones:</h2  >  
                        <ul class="list mt-2" >
                            <li>Diseño de componentes de la web</li>
                            <li>Maquetación de paginas</li>
                            <li>Actualización de información en la web</li>
                            <li>Actualizar información en Aula virtual</li>
                            <li>Apoyo en el area de soporte técnico</li> 
                        </ul>
                        <h2  class="black--text mt-3 " >Logros:</h2>
                            <ul class="list list-success mt-2" >
                             <li>Brinde apoyo al equipo de sistemas para cumplir el objetivo de facilitar información a los alumnos en las distintas plataformas de la institución. </li>
                             <li>Ahora Idat es dueño de Iberotec: <a  class="list-link" href="https://web.facebook.com/Iberotec/?_rdc=1&_rdr" target="_blank" >https://web.facebook.com/Iberotec/?_rdc=1&_rdr</a> </li>
                           </ul>   
                    </v-card-text>  
                </v-card>
            </v-timeline-item>
        </v-timeline> 
 
    </div>
</template>
<script>
export default {
    data: () => ({  
    })
}
</script>
<style lang="scss" >

$primary:#202aab;
:root{ 
    --shadow-lg: -15px 15px 40px rgba(0, 0, 0, 0.03), -28px 16px 22px rgba(0, 0, 0, 0.01), -9px 31px 15px rgba(0, 0, 0, 0.01), 0 0 0 1px rgba(0, 0, 0, 0.03);
}
.shadow{
    &-lg{
    box-shadow: -15px 15px 40px rgba(0, 0, 0, 0.03), -28px 16px 22px rgba(0, 0, 0, 0.01), -9px 31px 15px rgba(0, 0, 0, 0.005);
    }
} 
.v-card__text{
    padding: 2.5em 3.5em;
     @media (max-width:400px){ 
        padding: 2em 2.5em;
    } 
}

@media (max-width:400px){ 
    .v-timeline--dense:before, .v-timeline-item__dot,.v-timeline-item__opposite{
        left:50% !important ;
        transform:translateX(-50%);
    }
    .v-timeline-item__body{
        max-width: 100% !important ;
        margin: 8.5em 0 2em 0;
    }
    .v-timeline-item__opposite{
        display: block !important;
        position: absolute;
        top: 6em;
        width: 100%;
        max-width: 100%;
        text-align: center !important;
        margin-left: 0 !important;
    }
}

.experencie{
    &-card{
        border-color: var(--v-primary-base)!important; 
        box-shadow: var(--shadow-lg);
        border-radius: 22px; 
        &::before, &::after{
            top: 32px !important;
        }
      
        @media (max-width:400px){ 
            h2{
                font-size: 15px; 
                span{
                    font-size: 14px; 

                }
            }
        } 
    }
    @at-root{
        .v-timeline--align-top .v-timeline-item__dot--large{
            top: 15px !important;  
        }
    }
    &-title {
        border-radius: 0 !important;
        position: relative; 
        @media (max-width:400px){ 
            padding: .8em 2.5em !important;
            font-size: 16px !important;
            box-shadow: 10px 0 0 0 var(--v-primary-base),-10px 0 0 0 var(--v-primary-base);
        } 
        &::before{
            content: '';
            position: absolute;
            height: 100%;
            width: 10px; 
            background: var(--v-primary-base); 
            
        }
        &::after{
            content: '';
            position: absolute;
        }
        &.line-left::before{
             left: -10px;
            @media (max-width:959px){  
                right: -10px;
                left: initial;

            }
            @media (max-width:400px){ 
                    height: auto;
                    width: auto;
                    left: -7px;
                    right: initial;
                    bottom: -7px;
                    border-style: solid;
                    border-spacing: 20px;
                    transform: rotate(-133deg);
                    border-width: 7px;
                    border-color: darken($color: $primary , $amount: 8)  transparent transparent;  
                    background: transparent;
           }
        }
        &.line-left::after{
            left: -7px;
            bottom: -7px;
            border-style: solid;
            border-spacing: 20px;
            transform: rotate(-133deg);
            border-width: 7px;
            border-color: darken($color: $primary , $amount: 8)  transparent transparent;  
            @media (max-width:959px){ 
                right: -7px;
                left: initial; 
                transform: rotate(133deg);

            }
        }
       
        &.line-right::before{
            right: -10px;
             @media (max-width:400px){ 
                    height: auto;
                    width: auto;
                    left: -7px;
                    bottom: -7px;
                    border-style: solid;
                    border-spacing: 20px;
                    transform: rotate(-133deg);
                    border-width: 7px;
                    border-color: darken($color: $primary , $amount: 8)  transparent transparent;  
                    background: transparent;
                    right: initial;
           }
            
        }
        &.line-right::after{
            right: -7px;
            bottom: -7px;
            border-style: solid;
            border-spacing: 20px;
            transform: rotate(133deg);
            border-width: 7px;
            border-color: darken($color: $primary , $amount: 8)  transparent transparent;  
        }
        
    }
}
.list{ 
    li{
        position: relative;
        display: flex;
        align-items: center;
        font-weight: 500 ; 
        font-size: 16px ;
        color: black;
        margin-bottom: 4px;
        @media (max-width:400px){
            font-size: 14px ;

        }
        &::before{
            content: '';
            position: absolute;
            left: -1.4em; 
            background: linear-gradient( lighten($color: $primary, $amount: 12) , darken($color: $primary, $amount: 18)) ;
            width: 16px;
            height: 16px; 
            clip-path: polygon(50% 0%, 95% 26%, 95% 76%, 50% 100%, 5% 75%, 5% 25%);
            transform: rotate(60deg); 
        }
    }
    &-success{
        li{
            display: flex;
            align-items: center; 
            justify-content: space-between;
            &::before{
            background: linear-gradient( lighten($color: #91ff00, $amount: 12) , darken($color: #91ff00, $amount: 18)) ; 
        }
        }
    }
    &-link{
        border: 2px solid  var(--v-primary-base) ;
        padding: 4px 3.2em 4px 8px;
        border-radius: 4px;
        position: relative;
        color: #000;
        text-decoration: none;
        font-size: 12px;
        word-break:normal;  
        width: 100%;
        max-width: 170px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden; 
        @media (max-width:400px){
             max-width: 120px;
             font-size: 9px;

        }
         
        &::after{
            content: 'ver'; 
            color: white;
            background:var(--v-primary-base); 
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;  
            display: flex;
            align-items: center;
            padding: 0 1em;
        }
    }
}

.subtitle-span  span{
    font-size: 16px;
    font-weight: 500;
}

    
</style>