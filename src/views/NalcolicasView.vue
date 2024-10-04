<script setup>
import { ref } from 'vue'
import aguasg from '../assets/aguasg.png';
import aguacg from '../assets/aguacg.png';
import refri from '../assets/refri.png';
import sucos from '../assets/sucos.png';

const drinks = ref([
  { name: 'Àgua sem gás', unit: '(Unidade 1)', description: 'Água Mineral Sem Gás - 510ml', price: 'R$8,00', image: aguasg },
  { name: 'Àgua com Gás', unit: '(Unidade 1)', description: 'Água Mineral Com Gás - 510ml', price: 'R$8,00', image: aguacg },
  { name: 'Refri', unit: '(Unidade 1)', description: 'Refrigerantes diversos. 220ml', price: 'R$6,50', image: refri },
  { name: 'Sucos', description: 'Sucos naturais de frutos. 250ml', price: 'R$11,00', image: sucos },
])
</script>

<template>
  <main>

    <img src="../assets/BannerBebidas.png" alt="Banner Bebidas" class="banner">
    <h2>Bebidas</h2>

    <div class="bebidas">
      <div v-for="drink in drinks" :key="drink.name" class="drink-item">
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
  width: 250350pxpx;
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
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  margin-bottom: 3%;
}
</style>