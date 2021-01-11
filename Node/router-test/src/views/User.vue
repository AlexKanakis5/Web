/* Ayto to view den eixe kati mesa opote prosorina to xrhsimopoisa gia na testarw th diadromh
database(mongo)-server(node)-forntend(vue)
gia na to katalabete kalytera diabaste kai ta sxoleia sto arxeia app.js ston server
 */

<template>
<div class="user">
  <h1>Here are all the dogs you have</h1>
  <ul>
    <li v-for="dog in dogs" :key="dog.id">{{dog.name}} {{dog._id}}</li>
  </ul>
</div>

</template>



<script>



export default {

    // dhlwse enan pinaka dogs 
    // to url /api/dogs periexei enan pinaka ousiastika
    // diabaste ta sxolia sto arxeio app.js tou server

    data(){
        return { 
            dogs:[]
            }
    },

    //to beforeMount() ksexasa ti kanei prepei na to thymhthw 
    beforeMount(){
        
        //ftiaxe epestrepse ena response me o,ti periexei to url http://localhost:3000/api/dogs 
       
       fetch('/api/dogs').then(response => {
            return response.json()
        })

        //twra ayton ton pinaka pou brhkes sto url /api/dogs balton ston pinaka dogs 
        //opote sthn lista pio panw emfanizontai (kapoia apo) ta stoixeia tou pinaka dogs
        //pou sthn ousia einai ola osa periexei h bash dedomenwn!!

        .then(dogs => {
            this.dogs = dogs
        })

        //etsi blepoume pws mporeis na xrhsimopoihseis dedomena ths bashs sto front end!
    }
}
</script>

<style>

</style>