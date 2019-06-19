<template>
    <div>  
        <v-timeline align-top >
                <v-timeline-item  color="red lighten-1" fill-dot
                large  md12 data-aos="fade-up"  data-aos-offset="200"  data-aos-once="true">
                <template v-slot:icon>
                    <v-avatar>
                    <img :src="require('../assets/igclogo.png')">
                    </v-avatar>
                </template>
                <template v-slot:opposite  align-start >
                    <span >Deciembre 2018 - Mayo 2019</span>
                </template>

                <v-card color="red lighten-1"
                    dark 
                >
                    <v-card-title class="title">Instituto de Gerencia Intercontinental (IGC)</v-card-title>
                        <v-card-text class="white text--primary">
                            <h3>Cargo:</h3>
                            <p>Desarrollador Web</p>
                            <h3>Funciones:</h3>
                            <p>- Diseñar</p>
                            <p>- Maquetar</p>
                            <p>- Programar</p>
                            <p>- Testear</p>
                            <p>- Subir a producción</p>
                            <h3>Logros:</h3>
                            <p>- Desarrolle la pagina web: https://igc.edu.pe</p>
                            <p>- Implemente Aula virtual: https://aulavirtual.igc.edu.pe</p>
                            <v-btn
                                color="red lighten-1"
                                class="mx-0"
                                outline
                                href="https://igc.edu.pe"
                                target="_blank"
                                round
                            >
                                Ver Página
                            </v-btn>  
                            <v-btn
                                color="red lighten-1" 
                                outline
                                href="https://aulavirtual.igc.edu.pe"
                                target="_blank"
                                round
                            >
                                Ver Aula Virtual
                            </v-btn>
                        </v-card-text>  
                    </v-card>
            </v-timeline-item>

           <v-timeline-item  color="success" md12
            fill-dot large key="2" data-aos="fade-up"  data-aos-offset="200"  data-aos-once="true">
            <template v-slot:icon>
                <v-avatar>
                <img :src="require('../assets/iberoteclogo.png')">
                </v-avatar>
            </template>
            <template v-slot:opposite  align-start >
                <span >Septiembre 2016 - Diciembre 2016</span>
            </template>

            <v-card color="success"
                dark 
            >
                <v-card-title class="title">Instituto de Tecnología y Gestión Iberotec</v-card-title>
                    <v-card-text class="white text--primary">
                        <h3>Cargo:</h3>
                        <p>Practicante Web</p>
                        <h3>Funciones:</h3>
                        <p>- Diseño de componentes de la web </p>
                        <p>- Maquetación de paginas </p>
                        <p>- Actualización de información en la web</p> 
                        <p>- Actualizar información en Aula virtual</p>  
                        <p>- Apoyo en el area de soporte técnico</p> 
                        <h3>Logros:</h3>
                        <p>- Entregas con éxito las tareas asignadas</p> 
                        <p>- Adquire buena experiencia en el desarrollo web </p> 
                        
                        <v-alert type="info" :value="true">
                          Actualmente el instituto Iberotec pertenece a IDAT.
                        </v-alert> 
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
<style>
    
</style>