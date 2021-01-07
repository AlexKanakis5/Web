<template>
  <div id="nav">
    <router-link :to="{ name: 'Home'}">Home</router-link> |
    <router-link :to="{ name: 'About'}">About</router-link>
    <router-link :to="{ name: 'User'}">User</router-link> 
  </div>
  <router-view/>
</template>

<script>
export default {

}
</script>

<style scoped>

#nav a.router-link-exact-active
{
    color: red;
}
#nav 
{
    padding: 30px;
    font-size: 1.34rem; 

}
#nav a 
{
    font-size: 1.34rem;
    text-align: center;
    font-weight: bold;
    padding: 10px;
    text-decoration: none;
    border-radius: 4px;

}

</style>