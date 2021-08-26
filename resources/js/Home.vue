<template>
    <div>
        <h1>Hello SSR</h1>
        <h3>URL: {{ location }}</h3>
    </div>
</template>

<script>
export default {
    name: "Home",
    computed: {
        location(){
            return this.$route.meta.title;
        }
    }
}
</script>

<style scoped>

</style>
