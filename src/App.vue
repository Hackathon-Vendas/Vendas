<script setup>
import {  RouterView } from 'vue-router'
import HeaderVue from '@/components/others/HeaderVue.vue'
import MenuVue from '@/components/others/MenuVue.vue'

</script>

<template>
  <HeaderVue />
  <MenuVue />
  <main>
    <RouterView />
  </main>
  
</template>

<style scoped>
main {
  margin-left: 100px;
}
</style>