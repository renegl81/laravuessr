<template>

   <h1>Hello {{ toto }}</h1>
</template>

<script>
export default {
    name: "AppTest",
    data(){
        return {

        }
    },
    computed:{
        toto(){
            return window.location.href;
        }
    }
}
</script>

<style scoped>

</style>
