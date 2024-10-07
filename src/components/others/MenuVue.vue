<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { RouterLink } from 'vue-router';
import router from '@/router';



const alacarte = ref(false);

function showAlacarte() {
  rodizio.value = false
  bebidas.value = false
  alacarte.value = true
}

function showRodizio() {
  rodizio.value = true
  bebidas.value = false
  alacarte.value = false
}
function showBebidas() {
  rodizio.value = false
  bebidas.value = true
  alacarte.value = false
}

const rodizio = ref(false);
const bebidas = ref(false);


const teste2 = computed(() => router.currentRoute.value)
const teste3 = ref("")

onMounted(() => {
  setTimeout(() => {
    teste3.value = teste2.value.fullPath
    console.log(teste3)
  }, "1");
})

watch(router.currentRoute, () => {
  teste3.value = teste2.value.fullPath
})
</script>
<template>
  <main>
    <div class="sidebar">
      <ul>
        <li><button @click="showAlacarte()" :class="{ 'selectedMenu': alacarte == true }"><img
              src="/public/logo-alacarte.svg">
            <p>Á la carte</p>
          </button></li>
        <div v-if="alacarte">
          <ul>
            <li class="router" :class="[{ 'selectedMenu': (teste3 == '/entradas') }]">
              <RouterLink to="/entradas">Entradas</RouterLink>
            </li>
            <li class="router" :class="{ 'selectedMenu': (teste3 == '/principais') }">
              <RouterLink to="/principais">Pratos Principais</RouterLink>
            </li>
          </ul>
        </div>

        <li><button @click="showRodizio()" :class="{ 'selectedMenu': rodizio == true }"><img
              src="/public/logo-rodizio.svg">
            <p>Rodízio</p>
          </button></li>
        <div v-if="rodizio">
          <ul>
            <li class="router" :class="{ 'selectedMenu': (teste3 == '/') }">
              <RouterLink to="/">Entradas</RouterLink>
            </li>
            <li class="router" :class="{ 'selectedMenu': (teste3 == '/2') }">
              <RouterLink to="/">Pratos Principais</RouterLink>
            </li>
            <li class="router" :class="{ 'selectedMenu': (teste3 == '/1') }">
              <RouterLink to="/">Sobremesas</RouterLink>

            </li>
          </ul>
        </div>

        <li><button @click="showBebidas()" :class="{ 'selectedMenu': bebidas == true }"><img
              src="/public/logo-bebida.svg">
            <p>Bebidas</p>
          </button></li>
        <div v-if="bebidas">
          <ul>
            <li class="router" :class="{ 'selectedMenu': (teste3 == '/nalcolicas') }">
              <RouterLink to="/nalcolicas">Não alcóolicas</RouterLink>
            </li>
            <li class="router" :class="{ 'selectedMenu': (teste3 == '/alcolicas') }">
              <RouterLink to="/alcolicas">Alcóolicas</RouterLink>
            </li>
          </ul>
        </div>
        <li :class="{ 'selectedMenu': (teste3 = '/sobremesas') }">
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
  top: 15.7 vh;
  left: 0;
  background-color: rgba(40, 40, 40, 1);
  position: absolute;

}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  transition: 0.3s;
}

.sidebar ul li {
  text-align: center;
  height: 100%;
}

.sidebar ul li a {
  text-decoration: none;
  display: block;
  top: 354px;
  font-family: 'Inter', normal, sans-serif;
  font-weight: 900;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  filter: drop-shadow(-1px 6.5px 25px rgba(0, 0, 0, 0.84));
  padding: 25px;
}

button {
  width: 100%;
  background-color: rgba(40, 40, 40, 1);
  border: none;
  transition: 0.3s;
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
  margin-bottom: 20%;
}

img {
  margin-bottom: 20%;
  margin-top: 20%;
}

li button:hover {
  background-color: rgba(94, 94, 94, 1);
}

li:hover {
  margin: 0;
  background-color: rgba(94, 94, 94, 1);
}

.selectedMenu {
  margin: 0;
  background-color: rgba(94, 94, 94, 1);
  border-right: rgba(156, 156, 156, 1) 3px solid;
}



.router {
  width: 100%;
  height: 100px;
  text-decoration: none;
  display: block;
  top: 354px;
  font-family: 'Inter', normal, sans-serif;
  font-weight: 900;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  filter: drop-shadow(-1px 6.5px 25px rgba(0, 0, 0, 0.84));
  background-color: rgba(69, 69, 69, 1);
  padding: 20px;
}
</style>
