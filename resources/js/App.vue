<template>
    <router-view></router-view>

</template>

<script>
export default {
    name: "App",
    computed: {
        location(){
            return window.location.href
        }
    }
}
</script>

<style scoped>

</style>
