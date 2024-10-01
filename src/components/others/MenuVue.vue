<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
</script>
<template>
  <main>
    <div class="sidebar">
      <ul>
        <li><button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"><img
              src="/public/logo-alacarte.svg">Á la carte
            <span class="caret"></span></button>
            <ul class="dropdown-menu">
            <li><RouterLink to="">Entadas</RouterLink></li>
            <li><RouterLink to="/">Pratos Principais</RouterLink></li>
          </ul>
          </li>
        <li><button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"><img
              src="/public/logo-rodizio.svg">Rodízio
            <span class="caret"></span></button>
            <ul class="dropdown-menu">
            <li><RouterLink to="/entradas">Entadas</RouterLink></li>
            <li><RouterLink to="/principais">Pratos Principais</RouterLink></li>
          </ul>
          </li>
        <li><button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"><img
              src="/public/logo-bebida.svg">Bebidas
            <span class="caret"></span></button>
          <ul class="dropdown-menu">
            <li><RouterLink to="/nalcolicas">Não alcóolicas</RouterLink></li>
            <li><RouterLink to="/alcolicas">Alcóolicas</RouterLink></li>
          </ul>
        </li>
        <li><button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"><img
              src="/public/logo-alacarte.svg"><img src="/public/logo-sobremesa.svg">Sobremesas<span
              class="caret"></span></button>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css");

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

.btn .btn-primary .dropdown-toggle{
  background-color: #333;
}
</style>
