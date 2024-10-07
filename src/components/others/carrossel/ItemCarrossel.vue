<script setup>
import { ref } from 'vue';
defineProps(['img']);
</script>
<template>
<div class="container">
    <img :src=img alt="">
</div>
</template>
<style scoped>
.container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
img{
    width: 100%;
    height: 100%;
}
</style>