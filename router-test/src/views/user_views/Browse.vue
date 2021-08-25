<template>
  <div class="user">
        <input id="fileUpload" type="file" hidden>
        <button @click="chooseFiles()">Browse</button>
</div>
</template>

<script>
export default {
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

<style>

</style>