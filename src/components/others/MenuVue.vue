<script setup>
<<<<<<< HEAD
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
=======
>>>>>>> af803c59ca55737df649d37c9c75ad11b0ba1fb9
</script>

<template>
  <main>
   <div class="sidebar">
   <ul>
<<<<<<< HEAD
    <li><img src="/public/logo-alacarte.svg"><RouterLink to="/entradasgti ">À la carte</RouterLink></li>
    <li><img src="/public/logo-rodizio.svg"><RouterLink to="/rodizio">Rodízio</RouterLink></li>
    <li><img src="/public/logo-bebida.svg"><RouterLink to="/alcolicas">Bebidas</RouterLink></li>
    <li><img src="/public/logo-sobremesa.svg"><RouterLink to="/nalcolicas">Sobremesas</RouterLink></li>
=======
    <li><img src="/public/logo-alacarte.svg"><RouterLink to="/entradas">À la carte</RouterLink></li>
    <li><img src="/public/logo-rodizio.svg"><a href="#">Rodízio</a></li>
    <li><img src="/public/logo-bebida.svg"><a href="#">Bebidas</a></li>
    <li><img src="/public/logo-sobremesa.svg"><a href="#">Sobremesas</a></li>
>>>>>>> af803c59ca55737df649d37c9c75ad11b0ba1fb9
   </ul>
   </div>
  </main>
</template>

<style scoped>

<<<<<<< HEAD
main {
=======
main{
>>>>>>> af803c59ca55737df649d37c9c75ad11b0ba1fb9
  width: 90%;
  margin: auto;
  display: flex;
}
<<<<<<< HEAD

=======
>>>>>>> af803c59ca55737df649d37c9c75ad11b0ba1fb9
.sidebar {
  height: 100vh;
  width: 200px;
  position: fixed;
<<<<<<< HEAD
  top: 19%;
=======
  top: 9,5vh;
>>>>>>> af803c59ca55737df649d37c9c75ad11b0ba1fb9
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