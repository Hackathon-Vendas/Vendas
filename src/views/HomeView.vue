<script setup>
import { ref } from 'vue';
</script>

<template>
  <main>
    <div class="sidebar">
      <ul>
        <li><img src="/public/logo-alacarte.svg"><a href="#">À la carte</a></li>
        <li><img src="/public/logo-rodizio.svg"><a href="#">Rodízio</a></li>
        <li><img src="/public/logo-bebida.svg"><a href="#">Bebidas</a></li>
        <li><img src="/public/logo-sobremesa.svg"><a href="#">Sobremesas</a></li>
      </ul>
    </div>
     <div class="img">
    <img class="imagem-1" src="/public/sushi.webp">
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
  width: 150px;
  position: fixed;
  top: 9, 5vh;
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

.imagem-1 {
position: absolute;
width: 1200px;
height: 500px;
left: 30vh;
top: 18vh;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.44), rgba(0, 0, 0, 0.44)), url(image.png);
border-radius: 8px;
}
</style>