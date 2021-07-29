<template>

    <div class="admin">



        
        <!-- escape button -->
        <button class="escape" @click="escape">X</button>

        <!-- show basic info button -->
        <button class="basic_info" @click="toggle_info"> INFO </button>

        <!-- basic info -->
        <div class="info" v-if="show_info">
            <img alt="piechart" src="../assets/piechart.png">
        </div>

        <!-- analyse time -->
        
        <button class="basic_info" @click="toggle_anal_time"> TIME </button>

        <div class="anal_time" v-if="show_anal_time">
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tenetur magni est, reprehenderit quod omnis numquam libero quibusdam sit, optio, ea nulla delectus vel repudiandae esse quia similique. Animi, earum corrupti enim molestiae fuga aliquam quos repellendus vero reiciendis quis voluptatibus! Quasi incidunt aliquam ratione voluptatibus quos quia consequatur minima ex! Dolores dignissimos voluptates harum, iusto totam quis maxime officia tenetur inventore labore corporis quo nostrum? Excepturi ducimus et consequuntur. Assumenda, nobis? Non voluptatum cum laboriosam officiis debitis nostrum? Iure expedita, animi consequatur reiciendis natus veritatis id saepe dolor molestiae soluta facere cumque impedit sunt cum eaque voluptatum laborum ducimus nostrum similique quos, illo dolorem! Consequatur quia libero officiis quae voluptate! Quibusdam exercitationem asperiores quia totam iure temporibus, est mollitia dignissimos reprehenderit praesentium minima fuga tempora libero culpa rem saepe aspernatur velit facilis architecto sed optio aperiam hic ea. Aperiam facilis praesentium repellat id porro quae amet? Error tempore nam dolore molestiae temporibus dolores doloribus? Id velit vel enim libero dolorem! Odit quibusdam molestiae unde ad animi velit, dolorem nemo iure excepturi eveniet nihil quia dignissimos, aut ea earum ab. Molestias impedit voluptates iste assumenda tenetur! Quidem, repellat, aut dignissimos ipsa iste quod, quos asperiores eveniet amet quia omnis officiis.</p>
        </div>
     

    </div>

</template>

<script>


export default {

    name: 'Admin',
    data() 
    {
        return{
            show_info: false,
            show_anal_time: false
        }
        
     
    },

    methods:
    {
        escape()
        {
         this.$emit('cancelAdmin')   
        },

        toggle_info()
        {
            this.show_info = !this.show_info
        },

        toggle_anal_time()
        {
            this.show_anal_time = !this.show_anal_time
        }
    }
}

</script>


<style scoped>
    
    .admin
    {
        top: 0;
        position: fixed;
        background: rgba(0,0,0,1);

    }
    .escape
    {
       top:0;
       left:98%;
       position: absolute;
       z-index: 2;
    }
    .button

</style>