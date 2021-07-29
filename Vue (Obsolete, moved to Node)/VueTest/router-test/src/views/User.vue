<template>
    <div class="user">
        <input id="fileUpload" type="file" hidden>
        <button @click="chooseFiles()">Browse</button>

    


        <br>
        <button  @click="toggleSignup">Update Password</button>

        <div v-if="ShowSignup">
        <UpdatePassword @cancelSignup="toggleSignup" />
        </div>


    </div>       


</template>









<script>
import UpdatePassword from "@/components/UpdatePassword.vue"


export default {
    name: 'User',
    components: {UpdatePassword},

    data()
    {
        return{
            ShowSignup: false
        }
    },
    methods: {
    toggleSignup ()
    {
      this.ShowSignup = !this.ShowSignup
    },
    chooseFiles() {
            document.getElementById("fileUpload").click()
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
</style>