<script setup>
</script>

<template>
  <main>
   <div class="sidebar">
   <ul>
    <li><img src="/public/logo-alacarte.svg"><RouterLink to="/entradas">À la carte</RouterLink></li>
    <li><img src="/public/logo-rodizio.svg"><a href="#">Rodízio</a></li>
    <li><img src="/public/logo-bebida.svg"><a href="#">Bebidas</a></li>
    <li><img src="/public/logo-sobremesa.svg"><a href="#">Sobremesas</a></li>
   </ul>
   </div>
  </main>
</template>

<style scoped>

main{
  width: 90%;
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