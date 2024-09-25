<template>
    <div class="bebidas">
      <h1>Bebidas</h1>
      <div class="drink" v-for="drink in drinks" :key="drink.name">
        <img :src="drink.image" alt="Drink Image" />
        <div>{{ drink.name }}</div>
        <div>{{ drink.price }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Nalcoolicas',
    data() {
      return {
        drinks: [
          { name: 'Água Mineral Sem Gás - 510ml', price: 'R$8,00', image: 'path-to-image1' },
          { name: 'Água com Gás - 510ml', price: 'R$8,00', image: 'path-to-image2' }
        ]
      }
    }
  }
  </script>
  
  <style>
  .bebidas {
    display: flex;
    flex-direction: column;
  }
  
  .drink {
    margin: 20px 0;
    display: flex;
    align-items: center;
  }
  
  .drink img {
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }
  </style>
  