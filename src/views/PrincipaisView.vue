<script setup>
import ItemPrincipais from '@/components/others/itensCardapio/ItemPrincipais.vue';
import { ref } from "vue"

const comida = ref([
  { name: 'Destilados', unit:'(A partir de:)', description: ' Bebidas alcoólicas obtidas por destilação, geralmente mais fortes, feitas a partir de grãos, frutas ou cana-de-açúcar.', price: 'R$40,00', image: '/public/sushi1.svg' },
  { name: 'Vinhos', unit:'(A partir de:)', description: 'Bebidas fermentadas feitas a partir de uvas.', price: 'R$70,00', image: '/public/sushi2.svg' },
  { name: 'Drinks', unit:'(A partir de:)', description: 'Misturas de bebidas alcoólicas com outros ingredientes.', price: 'R$25,50', image: '/public/sushi3.svg' },
  {name: 'Cervejas', description: 'Bebidas fermentadas à base de cevada e lúpulo, com estilos variados.', unit:'(A partir de:)', price: 'R$12,50', image: '/public/sushi4.svg' },
  {name: 'Cervejas', description: 'Bebidas fermentadas à base de cevada e lúpulo, com estilos variados.', unit:'(A partir de:)', price: 'R$12,50', image: '/public/sushi5.svg' },
])
</script>
<template>
    <div v-for="item in comida" :key="item">
    <ItemPrincipais :title="item.name" :descricao="item.description" :quantia="item.unit" :valor="item.price" :imagem="item.image"/>
    </div>
</template>