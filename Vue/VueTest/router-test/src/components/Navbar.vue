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
    color: red;
}
#nav 
{
    padding: 30px;
    font-size: 1.34rem; 
    background-color: black;
    width: 100%;

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