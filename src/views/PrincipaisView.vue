<script setup>
import ItemPrincipais from '@/components/others/itensCardapio/ItemPrincipais.vue';
import { ref } from "vue"
import sushi1 from '../assets/sushi1.svg';
import sushi2 from '../assets/sushi2.svg';
import sushi3 from '../assets/sushi3.svg';
import sushi4 from '../assets/sushi4.svg';
import sushi5 from '../assets/sushi5.svg';



const comida = ref([
  { name: 'Destilados', unit:'(A partir de:)', description: ' Bebidas alcoólicas obtidas por destilação, geralmente mais fortes, feitas a partir de grãos, frutas ou cana-de-açúcar.', price: 'R$40,00', image: sushi1 },
  { name: 'Vinhos', unit:'(A partir de:)', description: 'Bebidas fermentadas feitas a partir de uvas.', price: 'R$70,00', image: sushi2 },
  { name: 'Drinks', unit:'(A partir de:)', description: 'Misturas de bebidas alcoólicas com outros ingredientes.', price: 'R$25,50', image: sushi3 },
  {name: 'Cervejas', description: 'Bebidas fermentadas à base de cevada e lúpulo, com estilos variados.', unit:'(A partir de:)', price: 'R$12,50', image: sushi4 },
  {name: 'Cervejas', description: 'Bebidas fermentadas à base de cevada e lúpulo, com estilos variados.', unit:'(A partir de:)', price: 'R$12,50', image: sushi5 }
])
</script>
<template>
    <div v-for="item in comida" :key="item">
    <ItemPrincipais :title="item.name" :descricao="item.description" :quantia="item.unit" :valor="item.price" :imagem="item.image"/>
    </div>
</template>