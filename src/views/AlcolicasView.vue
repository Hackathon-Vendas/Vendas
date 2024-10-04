<script setup>
import { ref } from 'vue'
import destilados from '../assets/destilados.png';
import vinhos from '../assets/vinhos.png';
import drinks from '../assets/drinks.png';
import cervejas from '../assets/cervejas.png';


const drink = ref([
  { name: 'Destilados', unit: '(A partir de:)', description: ' Bebidas alcoólicas obtidas por destilação, geralmente mais fortes, feitas a partir de grãos, frutas ou cana-de-açúcar.', price: 'R$40,00', image: destilados },
  { name: 'Vinhos', unit: '(A partir de:)', description: 'Bebidas fermentadas feitas a partir de uvas.', price: 'R$70,00', image: vinhos },
  { name: 'Drinks', unit: '(A partir de:)', description: 'Misturas de bebidas alcoólicas com outros ingredientes.', price: 'R$25,50', image: drinks },
  { name: 'Cervejas', description: 'Bebidas fermentadas à base de cevada e lúpulo, com estilos variados.', unit: '(A partir de:)', price: 'R$12,50', image: cervejas },
])
</script>

<template>
  <main>


    <img src="../assets/bannerAlccolicas.png" alt="Banner Bebidas" class="banner">
    <h2>Bebidas</h2>

    <div class="bebidas">
      <div v-for="drink in drink" :key="drink.name" class="drink-item">
        <img :src="drink.image" :alt="drink.name" class="drink-image">
        <div class="drink-details">
          <div class="title">
            <h3>{{ drink.name }}</h3>
            <p class="unit">{{ drink.unit }}</p>
            <p class="price">{{ drink.price }}</p>
          </div>

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
  margin-left: 27%;
  position: static;
  margin-top: 1%;
}

.banner {
  width: 100%;
  margin-bottom: 20px;
}

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
  border-radius: 8px;
  width: 100%;
  height: 200px;
  background-color: rgba(69, 69, 69, 1);
  color: rgba(255, 255, 255, 1);
  margin-top: 3%;
}

.drink-image {
  width: 350px;
  height: 230px;
  border-radius: 18px;
  margin-top: 19px;
}

.drink-details h3 {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 1000;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  margin-bottom: 2%;
}

.drink-details .price {
  font-family: 'Inter', sans-serif, sans-serif;
  font-style: normal;
  font-weight: 1000;
  font-size: 14px;
  line-height: 27px;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  position: absolute;
  right: 15%;

}

.drink-details .unit {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  margin-left: 10px;
}

.drink-details .description {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  margin-top: 5%;
}

.drink-details {
  height: 80%;
}

.title {
  display: flex;
  flex-wrap: wrap;
}

h2 {
  position: absolute;
  top: 42%;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.25em;
  color: #FFFFFF;
}

/* Rectangle 61 

position: absolute;
width: 1243px;
height: 902px;
left: 197px;
bottom: 0px;

background: #1E1E1E;
*/
</style>