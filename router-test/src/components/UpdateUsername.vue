<!-- Αμα θελει καποιος να το φτιαξει αλλιως θα το κανω εγω -->

<template>
 <div class="blur" @click.self="cancelSignup" >


      <form @submit.prevent="HandleSubmit">
        <h1> Update Username</h1>

        <div class="form_labels">
            <label>Current Username:</label>
            <input type="username" required v-model="old_username">
            <label>New Username:</label>
            <input type="username" required v-model="username">

        </div> <!-- end form_labels-->
         
        <div class="submit">
            <button>Update Username</button>
        </div>

      </form>
    </div>
</template>
        
<script>
export default {
    data()
    {
        return{
            old_username: '',
            username:''
        }

    },
    methods:
    {
        cancelSignup()
        {
            this.$emit('cancelSignup')
        },
 HandleSubmit ()
        {
         
            this.UsernameValidation()
       
       
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
        text-shadow: 1px 1px  #aaa;

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
        box-shadow: 2px 2px 4px lightslategray;
    }
    .submit
    {
        text-align: center;
    }
    .perror
    {
        color: red;
        font-size: 0.9rem;
        margin-top: 10px;
        font-weight: bold;
    }
    p
    {
        color: white
    }
</style>