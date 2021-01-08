/* TO DO:  1. Dont't show Signup on every page
        2. Make navigation Bar presentable
        3. Make Signup button prettier 
        4. Hide Signup button when user is Loged in
        5. Login button

 */

<template>
  <div>
    <Navbar />
  </div>
  <button  @click="toggleSignup">Signup</button>
  <div v-if="ShowSignup">
    <Signup @cancel="toggleSignup" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Signup from "./components/Signup.vue"
export default 
{
  name:'App',
  components: {Navbar, Signup},
  data()
  {
    return {ShowSignup: false}
  },
  methods:
  {
    toggleSignup ()
    {
      this.ShowSignup = !this.ShowSignup
    }
    
  }
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav
{
  padding: 30px;
}
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


</style>
