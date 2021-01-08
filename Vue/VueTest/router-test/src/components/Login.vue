


<template>


    <div class="blur" @click.self="cancelLogin" >


      <form >
        <h1> Login </h1>

        <div class="form_labels">
            <label>Username:</label>
            <input type="username" required v-model="username">
            <label>Password:</label>
            <input type="password" required v-model="password">
        </div> <!-- end form_labels-->
         
        <div class="submit">
            <button>Login</button>
        </div>

      </form>

      

        <!--ayta ta paragraphs einai apla gia na emfanizoyme o,ti grafei o xrhsths sta input fields
        den exoyn kapoia praktikh xrhsimothta akoma alla deixnw oti tha einai eykolo na syndesoyme
        to signup form me th bash dedomenwn argotera
        -->       
        <p>Username: {{username}}</p>
        <p>Password: {{password}}</p>
    </div>
</template>

<script>
export default {
    data()
    {
        return{
            username: '',
            password: ''
        }

    },
    methods:
    {
   
        cancelLogin()
        {
            this.$emit('cancelLogin')
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
        font-size: 30px;
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
    button
    {
        background: #303874;
        border: 0;
        padding: 10px 20px;
        margin-top: 50px;
        color: white;
        border-radius: 20px;
        font-size: 15px;
    }
    .submit
    {
        text-align: center;
    }
</style>