/* TODO:
 
 
*/

/* Η διαφορά αυτού του signup form από αυτό που είχαμε με κλασική html+css 
βρίσκεται στο ότι μπορούμε να αποθηκεύουμε αυτά που γράφει ο χρήστης στα 
input fields και ισως να τα χειριστούμε στη βάση δεδομένων  
*/


<template>

    <!-- olo to signup form brisketai mesa se ena "blur" stoixeio to opoio emfanizetai sto app.vue, 
    sto main arxeio dhladh, otan o xrhsths pataei to button signup
    -->

    <div class="blur" @click.self="cancelSignup" >


      <form >
          <h1> Signup Form </h1>
          <label>Username:</label>
          <input type="username" required v-model="username">
          <label>Password:</label>
          <input type="password" required v-model="password">
          <label>Email:</label>
          <input type="email" required v-model="email">
      </form>

        <!--ayta ta paragraphs einai apla gia na emfanizoyme o,ti grafei o xrhsths sta input fields
        den exoyn kapoia praktikh xrhsimothta akoma alla deixnw oti tha einai eykolo na syndesoyme
        to signup form me th bash dedomenwn argotera
        -->       
        <p>Username: {{username}}</p>
        <p>Password: {{password}}</p>
        <p>Email: {{email}}</p>
    </div>
</template>

<script>
export default {
    data()
    {
        return{
            email: '',
            username: '',
            password: ''
        }

    },
    methods:
    {
        /*h cancel signup kaleitai apo blur oti o xrhsths kanei click se ayto to sthxeio, dhladh sto gkrizo blur poy emfanizetai
        otan brisketai sto signup form kai thelei na kanei cancel
        Sthn oysia dhmioyrgoume ena custom event gia to opoio "akouei" h App.vue (@cancel="toggleSignup")
        */
        cancelSignup()
        {
            this.$emit('cancel')
        }
    }

}
</script>

<style scoped>
    .blur
    {
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.8);
        width: 100%;
        height: 100%
    }
    h1{
        text-align: center;
        padding: 20px;
        margin-top: auto;
    }
    form
    {
        max-width: 420px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }
    label 
    {
      
      color: #aaa;
      display: inline-block;
      margin: 25px 0 15px;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
      
    }
    input
    {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;

    }

</style>