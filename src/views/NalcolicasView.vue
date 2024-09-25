<script setup>
import { ref } from 'vue'
import destilados from '../assets/destilados.png';
import vinhos from '../assets/vinhos.png';
import drinks from '../assets/drinks.png';
import cervejas from '../assets/cervejas.png';


const drink = ref([
  { name: 'Destilados', unit:'(A partir de:)', description: ' Bebidas alcoólicas obtidas por destilação, geralmente mais fortes, feitas a partir de grãos, frutas ou cana-de-açúcar.', price: 'R$40,00', image: destilados },
  { name: 'Vinhos', unit:'(A partir de:)', description: 'Bebidas fermentadas feitas a partir de uvas.', price: 'R$70,00', image: vinhos },
  { name: 'Drinks', unit:'(A partir de:)', description: 'Misturas de bebidas alcoólicas com outros ingredientes.', price: 'R$25,50', image: drinks },
  {name: 'Cervejas', description: 'Bebidas fermentadas à base de cevada e lúpulo, com estilos variados.', unit:'(A partir de:)', price: 'R$12,50', image: cervejas },
])
</script>

<template>
  <main>
   

    <img src="../assets/bannerAlccolicas.png" alt="Banner Bebidas">
    
    <div class="bebidas">
      <div v-for="drink in drink" :key="drink.name" class="drink-item">
        <img :src="drink.image" :alt="drink.name" class="drink-image">
        <div class="drink-details">
          <h3>{{ drink.name }}</h3> <p class="unit">{{ drink.unit }}</p>
          <p>{{ drink.price }}</p>
          <p class="description">{{ drink.description }}</p>
          
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 9%;
  margin-left: 30%;
}

/* Banner Image  */
img {
  width: 100%;
  margin-bottom: 20px;
}

/* Drinks Section */
.bebidas {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.drink-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5%;
  width: 100%;
  background-color: rgba(69, 69, 69, 1);
  color: rgba(255, 255, 255, 1);
}

.drink-image {
  /*image*/
  width: 200px;
  height: 200px;
  margin: auto;
}

.drink-details h3 {
/*name*/
font-family: 'Inter';
font-family: sans-serif;
font-style: normal;
font-weight: 1000;
font-size: px;
line-height: 27px;
/* identical to box height */
letter-spacing: 0.25em;
color: #FFFFFF;
margin-bottom: 2%;
}

.drink-details p {
/*price*/
font-family: 'Inter';
font-family: sans-serif;
font-style: normal;
font-weight: 1000;
font-size: px;
line-height: 27px;
/* identical to box height */
letter-spacing: 0.25em;
color: #FFFFFF;
margin-bottom: 2%;


}
/*unit*/
.drink-details .unit {
font-family: 'Inter';
font-family: sans-serif;
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.25em;
color: #FFFFFF;
}

.drink-details .description {
/*description*/
font-family: 'Inter';
font-family: sans-serif;
font-style: normal;
font-weight: 550;
font-size: 20px;
line-height: 20px;
letter-spacing: 0.25em;
color: #FFFFFF;


}
</style>