<template>
    <div>
        <h1>Hello SSR</h1>
        <h3>URL: {{ location }}</h3>
    </div>

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
