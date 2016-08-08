<template>
    <div class="about">{{message}}</div>
</template>

<script>
    export default {
        ready () {
            this.$http.get('/api/view');
        },
        data () {
            return {
                message: 'I am a about page!'
            };
        }
    };
</script>

<style>
    .about {
        color: #f00;
    }
</style>
