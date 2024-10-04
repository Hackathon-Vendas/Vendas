<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const showAlacarte = ref(false);
const showRodizio = ref(false);
const showBebidas = ref(false);

</script>
<template>
  <main>
    <div class="sidebar">
      <ul>
        <li><button @click="showAlacarte = !showAlacarte"><img src="/public/logo-alacarte.svg">
            <p>Á la carte</p>
          </button>
          <div v-if="showAlacarte">
            <ul>
              <li>
                <RouterLink to="/entradas">Entadas</RouterLink>
              </li>
              <li>
                <RouterLink to="/principais">Pratos Principais</RouterLink>
              </li>
            </ul>
          </div>
        </li>
        <li><button @click="showRodizio = !showRodizio"><img src="/public/logo-rodizio.svg">
            <p>Rodízio</p>
          </button>
          <div v-if="showRodizio">
            <ul>
              <li>
                <RouterLink to="/">Entadas</RouterLink>
              </li>
              <li>
                <RouterLink to="/">Pratos Principais</RouterLink>
              </li>
            </ul>
          </div>
        </li>
        <li><button @click="showBebidas = !showBebidas"><img src="/public/logo-bebida.svg">
            <p>Bebidas</p>
          </button></li>
        <div v-if="showBebidas">
          <ul>
            <li>
              <RouterLink to="/nalcolicas">Não alcóolicas</RouterLink>
            </li>
            <li>
              <RouterLink to="/alcolicas">Alcóolicas</RouterLink>
            </li>
          </ul>
        </div>
        <li>
          <RouterLink to="/sobremesas"><img src="/public/logo-sobremesa.svg">Sobremesas</RouterLink>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  position: static;
}

.sidebar {
  width: 200px;
  top: 16%;
  top: 9, 5vh;
  left: 0;
  background-color: rgba(40, 40, 40, 1);
  padding-top: 20px;
  position: absolute;
  z-index: 10;
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
  top: 354px;
  font-family: 'Inter', normal, sans-serif;
  font-weight: 900;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  filter: drop-shadow(-1px 6.5px 25px rgba(0, 0, 0, 0.44));
  margin-top: 20px;
}

.sidebar button {
  width: 100%;
  background-color: rgba(40, 40, 40, 1);
  border: #333;
  transition: 0.3s ease;
}

 
button p {
  font-family: 'Inter', normal, sans-serif;
  font-weight: 900;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  margin-top: 0.3%;
}

button :hover  {
  background-color: rgba(156, 156, 156, 1);
}

img{
  margin-bottom: 20%;
}


/* Group 24 

position: absolute;
width: 195px;
height: 904px;
left: 0px;
top: 120px;

filter: drop-shadow(33px 4px 40px rgba(0, 0, 0, 0.47));


position: absolute;
width: 195px;
height: 195px;
left: 0px;
top: 663px;

filter: drop-shadow(-1px 6.5px 25px rgba(0, 0, 0, 0.44));

*/
</style>
