<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
   <div class="sidebar">
   <ul>
    <li><img src="/public/logo-alacarte.svg"><RouterLink to="/entradas">Entadas</RouterLink></li>
    <li><img src="/public/logo-alacarte.svg"><RouterLink to="/principais">Pratos Principais</RouterLink></li>
    <li><img src="/public/logo-rodizio.svg"><RouterLink to="/nalcolicas">Não Alcóolicas</RouterLink></li>
    <li><img src="/public/logo-bebida.svg"><RouterLink to="/alcolicas">Bebidas Alcóolicas</RouterLink></li>
    <li><img src="/public/logo-sobremesa.svg"><RouterLink to="/sobremesas">Sobremesas</RouterLink></li>
   </ul>
   </div>
  </main>
</template>

<style scoped>
main {
  width: 90%;
  margin: auto;
  display: flex;
}
.sidebar {
  height: 100vh;
  width: 200px;
  position: absolute;
  top: 19%;
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

