<script setup>
import { ref } from 'vue'
import Sunomono from '../assets/Sunomono.png';
import Gyoza from '../assets/gyoza.png';
import Tataki from '../assets/tatakiAtum.png';


const entries = ref([
  { name: 'Sunomono', unit: '(1 unidade)', description: ' Salada refrescante de pepino agridoce com gergelim torrado.', price: 'R$22,50', image: Sunomono },
  { name: 'Gyoza', unit: '(4 unidades)', description: 'Delicados pasteizinhos recheados com carne suína, servidos com molho especial.', price: 'R$33,50', image: Gyoza },
  { name: 'Tataki de Atum', unit: '(8 unidades)', description: 'Finas fatias de atum levemente selado, servidas com molho cítrico ponzu.', price: 'R$45,90', image: Tataki },
])
</script>

<template>
  <main>


    <img src="../assets/bannerEntradas.png" alt="Banner Entradas" class="banner">
    <h2>Entradas</h2>

    <div class="entries">
      <div v-for="entries in entries" :key="entries.name" class="entries-item">
        <img :src="entries.image" :alt="entries.name" class="entries-image">
        <div class="entries-details">
          <div class="title">
            <h3>{{ entries.name }}</h3>
            <p class="unit">{{ entries.unit }}</p>
            <p class="price">{{ entries.price }}</p>
          </div>

          <p class="description">{{ entries.description }}</p>

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
  margin-top: 8%;
}

.banner {
  width: 100%;
  margin-bottom: 20px;
}

.entries{
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.entries-item {
  display: flex;
  align-items: center;
  border-radius: 14px;
  width: 100%;
  height: 200px;
  background-color: rgba(69, 69, 69, 1);
  color: rgba(255, 255, 255, 1);
  margin-top: 3%;
}

.entries-image {
  width: 250px;
  height: 230px;
  border-radius: 18px;
  margin-top: 19px;
}

.entries-details h3 {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 1000;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  margin-bottom: 2%;
}

.entries-details .price {
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

.entries-details .unit {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  margin-left: 10px;
}

.entries-details .description {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  margin-top: 5%;
}

.entries-details {
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
