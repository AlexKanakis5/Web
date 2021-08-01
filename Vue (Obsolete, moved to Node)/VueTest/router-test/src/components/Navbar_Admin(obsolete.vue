<template>
  <div id="nav">
    <router-link :to="{ name: 'Home'}">Home</router-link> |
    <router-link :to="{ name: 'About'}">About</router-link> |
    <router-link :to="{ name: 'User'}">User</router-link> 

    


  </div>

<router-view/>
</template>

<script>
export default {
  data()
    {
       /* allakse to username ston onoma toy user
       an bgaloume thn default timh tote den emfanizei tipota
       xrhsimo ama theloume na to krypsoyme otan den einai syndedemenos 
       o xrhsths 
       */ 
        return{
            username: ''
        }

    }

}
</script>

<style scoped>
figure
{
    
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 10px;
  margin-inline-end: 0;
}

body
{
  margin: 0;
  
}

#nav a.router-link-exact-active 
{
 border-bottom: 3px solid;  
}
#nav 
{   

    padding: 16px;
    font-size: 14px; 
    background-color: white;
    width: 100%;
    box-shadow: 3px 3px 4px #aaa;
    
   
}
#nav a 
{
    font-size: 1.34rem;
    text-align: center;
    font-weight: bold;
    padding: 10px;
    text-decoration: none;
    border-radius: 4px;
    color:black;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
    font-weight: 400;

}

</style>