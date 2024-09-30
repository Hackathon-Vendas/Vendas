<script setup>
import { ref } from 'vue'
import mochi from '../assets/Mochi.png';
import sorvete from '../assets/Sorvete.png';
import petitgateau from '../assets/PetitGateau.png';
import tempura from '../assets/TempuradeSorvete.png';
import dorayaki from '../assets/Dorayaki.png';
import anmitsu from '../assets/Anmitsu.png';

const desserts = ref([
  { name: 'Mochi', unit: '(2 unidades)', description: 'Doce japonês tradicional de massa de arroz, recheado.', price: 'R$32,50', image: mochi },
  { name: 'Sorvete', unit: '(1 unidade)', description: 'Sobremesa cremosa com o sabor suave e característico', price: 'R$30,00', image: sorvete },
  { name: 'Petit Gâteau', unit: '(1 unidade)', description: 'Pequeno bolo de chocolate com recheio cremoso, servido com sorvete de creme.', price: 'R$30,00', image: petitgateau },
  { name: 'Dorayaki', description: 'Panqueca japonesa recheada com doce de feijão azuki, uma combinação de texturas e sabores.', unit: '(2 unidades)', price: 'R$25,00', image: dorayaki  },
  { name: 'Tempurá de Sorvete', description: 'Sorvete envolto em uma crosta crocante de tempurá, frito rapidamente e servido quente por fora e gelado por dentro.', unit: '(1 unidades)', price: 'R$30,00', image: tempura  },
  { name: 'Anmitsu', description: 'Doce tradicional japonês com cubos de gelatina de ágar, frutas, pasta de feijão doce e sorvete de chá verde, servido com calda de açúcar mascavo.', unit: '(1 unidades)', price: 'R$45,00', image: anmitsu },
])
</script>

<template>
  <main>


    <img src="../assets/bannerSobremesas.png" alt="Banner Sobremesas" class="banner">
    <h2>Sobremesas</h2>

    <div class="bebidas">
      <div v-for="desserts in desserts" :key="desserts.name" class="desserts-item">
        <img :src="desserts.image" :alt="desserts.name" class="desserts-image">
        <div class="desserts-details">
          <div class="title">
            <h3>{{ desserts.name }}</h3>
            <p class="unit">{{ desserts.unit }}</p>
            <p class="price">{{ desserts.price }}</p>
          </div>

          <p class="description">{{ desserts.description }}</p>

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
  margin-top: 8%;
  margin-left: 27%;
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

.desserts-item {
  display: flex;
  align-items: center;
  border-radius: 14px;
  width: 100%;
  height: 200px;
  background-color: rgba(69, 69, 69, 1);
  color: rgba(255, 255, 255, 1);
  margin-top: 3%;
}

.desserts-image {
  width: 250px;
  height: 230px;
  border-radius: 18px;
  margin-top: 19px;
}

.desserts-details h3 {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 1000;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  margin-bottom: 2%;
}

.desserts-details .price {
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

.desserts-details .unit {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  margin-left: 10px;
}

.desserts-details .description {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  margin-top: 5%;
}

.desserts-details {
  height: 80%;
}

.title {
  display: flex;
  flex-wrap: wrap;
}

h2 {
  position: absolute;
  top: 270px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.25em;
  color: #FFFFFF;
}
</style>