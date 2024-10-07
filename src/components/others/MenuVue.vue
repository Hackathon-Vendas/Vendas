<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const showAlacarte = ref(false);
const showRodizio = ref(false);
const showBebidas = ref(false);

</script>
<template>
  <aside>
    <div class="sidebar">
      <ul>
        <li><button @click="showAlacarte = !showAlacarte"><img src="/public/logo-alacarte.svg">
            <p>Á la carte</p>
          </button></li>
          <div v-if="showAlacarte">
            <ul>
              <li class="router">
                <RouterLink to="/entradas">Entradas</RouterLink>
              </li>
              <li class="router">
                <RouterLink to="/principais">Pratos Principais</RouterLink>
              </li>
            </ul>
          </div>
        
        <li><button @click="showRodizio = !showRodizio"><img src="/public/logo-rodizio.svg">
            <p>Rodízio</p>
          </button></li>
          <div v-if="showRodizio">
            <ul>
              <li class="router">
                <RouterLink to="/">Entradas</RouterLink>
              </li >
              <li class="router">
                <RouterLink to="/">Pratos Principais</RouterLink>
              </li>
              <li class="router">
                <RouterLink to="/">Sobremesas</RouterLink>

              </li>
            </ul>
          </div>
        
        <li><button @click="showBebidas = !showBebidas"><img src="/public/logo-bebida.svg">
            <p>Bebidas</p>
          </button></li>
        <div v-if="showBebidas">
          <ul>
            <li class="router">
              <RouterLink to="/nalcolicas" >Não alcóolicas</RouterLink>
            </li>
            <li class="router">
              <RouterLink to="/alcolicas">Alcóolicas</RouterLink>
            </li>
          </ul>
        </div>
        <li>
          <RouterLink to="/sobremesas"><img src="/public/logo-sobremesa.svg">Sobremesas</RouterLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
aside {
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  position: static;
  }

.sidebar {
  width: 200px;
  top: 15.7vh;
  left: 0;
  background-color: rgba(40, 40, 40, 1);
  position: absolute;

}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  transition: 0.7s;
}

.sidebar ul li {
  text-align: center;  
  height: 100%;
}

.sidebar ul li a{
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
  border: rgba(40, 40, 40, 1);
  transition: 0.7s;
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

img{
  margin-bottom: 20%;
  margin-top: 20%;
}
li button:hover{
  background-color: rgba(94, 94, 94, 1);
}

li:hover{
  margin: 0;
  background-color: rgba(94, 94, 94, 1);
}

.sidebar li:hover{
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
  background-color: rgba(69, 69, 69, 1) ;
  padding: 20px;
}

</style>
