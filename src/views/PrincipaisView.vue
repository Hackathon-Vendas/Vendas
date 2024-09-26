<script setup>
import ItemPrincipais from '@/components/others/itensCardapio/ItemPrincipais.vue';
import { ref } from "vue"

const comida = ref([
  { name: 'Sashimi de Salmão', unit: '(10 unidades)', description: 'Fatias frescas de salmão, acompanhadas de wasabi e gengibre.', price: 'R$64,50', image: '/public/sushi1.svg' },
  { name: 'Sashimi de Atum', unit: '(10 unidades)', description: 'Filés de atum acompanhados de wasabi e gengibre.', price: 'R$50,00', image: '/public/sushi2.svg' },
  { name: 'Yakissoba', unit: '(1 unidade)', description: 'Macarrão japonês salteado com camarões, lula e legumes.', price: 'R$55,90', image: '/public/sushi3.svg' },
  { name: 'Urumaki Califórnia', description: 'Arroz japonês envolto em alga nori, recheado com kani, pepino e manga.', unit: '(5 unidades)', price: 'R$35,90', image: '/public/sushi4.svg' },
  { name: 'Temaki de Atum', description: 'Cone de alga recheado com atum fresco, arroz e cebolinha, perfeito para saborear com as mãos.', unit: '(A partir de:)', price: 'R$35,50', image: '/public/sushi5.svg' },
])
</script>
<template>
  <div v-for="item in comida" :key="item">
    <ItemPrincipais :title="item.name" :descricao="item.description" :quantia="item.unit" :valor="item.price"
      :imagem="item.image" />
  </div>
</template>