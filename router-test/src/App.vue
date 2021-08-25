/* TO DO:  1. Dont't show Signup on every page
        2. Make navigation Bar presentable
        3. Make Signup button presentable 
        4. Hide Signup button when user is Loged in
        5. Login button

 */

/* Pros se sxesh me katharh html+css:
    1. h taxhthta me thn opoia 
    fortwnoyn oi selides (ligotera requests)
    2. Navigation bar se oles tis selides (routing)
    3. Diaxwrismos tmhmatwn kwdika se components. Ayto praktika shmainei pio katharos kwdikas kai oti mporoyme na 
    epana-xrhsimpoihsoyme ta components (p.x. navbar, Signup form) se alla shmeia sto site h se allo project
    4. +++++
*/



<template>
  <!-- to navbar brisketai se kathe selida tou main arxeiou kai apla allazei to periexomeno pou deixnoyme(views) mesw routing
  o skopos mou einai na kanw thn kathe "selida" ena view to opoio mesa na periexei ta diafora components poy xreiazetai gia na trexei
  -->
  <div >
    <Navbar />
  </div>
  


</template>

<script>
import Navbar from "./components/Navbar.vue"

export default 
{
  name:'App',
  components: {Navbar},
   data()
    {
        return{
            
        }

    }
  
}
</script>

<style lang="scss">

#app {
  font-family: 'Roboto', sans-serif;
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
  background: #f1f1f1
}

</style>
