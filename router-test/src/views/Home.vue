<template>
    <!-- Signup form pou emfanizetai me to pathma toy koumpioy signup me th xrhsh toy toggleSignup.
  otan patietai to koumpi, h methodos toggleSignup kaleitai kai antistrefei thn timh ShowSignup (true/false)
  me ton idio tropo, otan o xrhsths pataei sto blur (sto gkri) h timh toy ShowSignup pali antistrefetai (->false)
  kai h forma signup eksafanizetai
  -->
  <div class="home">
              <!----- LOGO ----->
    <img alt="Vue logo" src="../assets/logo.png">

    <br>
    <button  @click="toggleSignup">Sign up</button>
    <div v-if="ShowSignup">
      <Signup @cancelSignup="toggleSignup" />
    </div>

    <br>
    <button  @click="toggleLogin">Login</button>
    <div v-if="ShowLogin">
      <Login @cancelLogin="toggleLogin" />
    </div>

    <br>


  </div>



</template>

<script>
import Signup from "@/components/Signup.vue"
import Login from "@/components/Login.vue"

export default {
  name: 'Home',
  components: {Signup, Login},
    
  data()
  {
    return {
      ShowSignup: false,
      ShowLogin: false,
   
    }

  },
  methods:
  {
    toggleSignup ()
    {
      this.ShowSignup = !this.ShowSignup
    },
    toggleLogin ()
    {
      this.ShowLogin = !this.ShowLogin
    }



    
  }
}
</script>

<style scoped>
button
{
  text-align: center;
  border-radius: 10px;
	border: 0px solid lightslategray;;
	background-color: #242526;
	color: white;
	font-size: 20px;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
  transition: transform 80ms ease-in;
  margin: 10px;
  padding: 10px 10px;
  box-shadow: 3px 3px 4px lightslategray;

  
}
img
{
  padding: 30px;
  height: 230px;
  width: 230px;
}


</style>