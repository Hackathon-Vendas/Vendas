<script setup>
import { ref } from 'vue';
</script>

<template>
  <main>
   
  </main>
</template>

<style scoped>
main{
  width: 50%;
  margin: auto;
  display: flex;
}
.sidebar {
  height: 100vh;
  width: 200px;
  position: fixed;
  top: 9,5vh;
  left: 0;
  background-color: #333;
  padding-top: 20px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar ul li {
  padding: 15px;
  text-align: center;
}

.sidebar ul li a {
  text-decoration: none;
  color: white;
  display: block;
  font-size: 18px;
}

</style>