<template>
    <div class="blur" @click.self="cancelSignup" >
        <div class="signup">
          <p>hey</p>
        </div>

    </div>
</template>

<script>
export default {
    methods:
    {
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
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%
    }
    .signup
    {
        font-size: 50px;
    }

</style>