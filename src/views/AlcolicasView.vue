<script setup>
import { ref } from 'vue'
import aguasg from '../assets/aguasg.png';
import aguacg from '../assets/aguacg.png';
import refri from '../assets/refri.png';
import sucos from '../assets/sucos.png';


// Data for drinks (you can replace with your dynamic data)
const drinks = ref([
  { name: 'Àgua sem gás', unit:'(Unidade 1)', description: 'Água Mineral Sem Gás - 510ml', price: 'R$8,00', image: aguasg },
  { name: 'Àgua com Gás', unit:'(Unidade 1)', description: 'Água Mineral Com Gás - 510ml', price: 'R$8,00', image: aguacg },
  { name: 'Refri', unit:'(Unidade 1)', description: 'Refrigerantes diversos. 220ml', price: 'R$6,50', image: refri },
  {name: 'Sucos', description: 'Sucos naturais de frutos. 250ml', price: 'R$11,00', image: sucos },
])
</script>

<template>
  <main>
   

    <img src="../assets/BannerBebidas.png" alt="Banner Bebidas">
    
    <!-- Drinks Section -->
    <div class="bebidas">
      <div v-for="drink in drinks" :key="drink.name" class="drink-item">
        <img :src="drink.image" :alt="drink.name" class="drink-image">
        <div class="drink-details">
          <h3>{{ drink.name }}</h3> <p class="unit">{{ drink.unit }}</p>
          <p class="description">{{ drink.description }}</p>
          <p>{{ drink.price }}</p>
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
  margin-top: 10%;
  margin-left: 30%;
}

/* Banner Image Styling */
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
  height: auto;
  margin-bottom: 10px;
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
font-size: 20px;
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
line-height: 24px;
letter-spacing: 0.25em;
margin-bottom: 2%;
color: #FFFFFF;


}
</style>