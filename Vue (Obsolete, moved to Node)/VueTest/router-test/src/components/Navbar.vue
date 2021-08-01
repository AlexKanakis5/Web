<!--
   Πρόσθεσα 3 μεταβλητές: show, is_admin, is_user
   show: οταν θέλουμε να δείξουμε την αρχική σελίδα, δηλαδή όταν ο χρήστης δεν είναι συνδεδεμένος
   show_admin: όταν θέλουμε να δείξουμε τη σελίδα του admin
   show_user: όταν θέλουμε να δείξουμε τη σελίδα του user

   Αναλόγως την τιμή της κάθε μεταβλητής true/false ενεργοποιείται το κατάλληλο div

   Αυτό σημαίνει ότι τελικά δεν χρειάζεται το δεύτερο navbar για τον admin


 -->


<template>
  <div v-if="show" class="nav" >
      <router-link :to="{ name: 'Home'}">Home</router-link> |
      <router-link :to="{ name: 'About'}">About</router-link> |
  </div>
  
  <div v-if="is_user" class="nav">
          <router-link :to="{ name: 'User'}">User</router-link> |
  </div>

  <div v-if="is_admin" class="nav">
      <router-link :to="{ name: 'Admin'}">Admin</router-link> |
      <router-link :to="{ name: 'Basic_info'}">Info</router-link> |
      <router-link :to="{ name: 'Analyse_time'}">Time</router-link> |
      <router-link :to="{ name: 'Analyse_http'}">HTTP</router-link> |
      <router-link :to="{ name: 'Entries'}">Entries</router-link> 
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
            username: '',
            show: false,
            is_admin: true,
            is_user: false,
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

.nav a.router-link-exact-active 
{
 border-bottom: 3px solid;  
}
.nav 
{
    padding: 16px;
    font-size: 14px; 
    background-color: #242526;
    width: 100%;
    box-shadow: 3px 3px 4px #aaa;
   
}
.nav a 
{
    font-size: 1.34rem;
    text-align: center;
    font-weight: bold;
    padding: 10px;
    text-decoration: none;
    border-radius: 4px;
    color: white;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
    font-weight: 400;

}

</style>