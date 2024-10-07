<script setup>
import ItemPrincipais from '@/components/others/itensCardapio/ItemPrincipais.vue';
import { ref } from "vue"

defineProps(['titulo'])

const comida = ref([
  { name: 'Sashimi de Salmão', unit: '(10 unidades)', description: 'Fatias frescas de salmão, acompanhadas de wasabi e gengibre.', price: 'R$64,50', image: '/public/sushi1.svg' },
  { name: 'Sashimi de Atum', unit: '(10 unidades)', description: 'Filés de atum acompanhados de wasabi e gengibre.', price: 'R$50,00', image: '/public/sushi2.svg' },
  { name: 'Yakissoba', unit: '(1 unidade)', description: 'Macarrão japonês salteado com camarões, lula e legumes.', price: 'R$55,90', image: '/public/sushi3.svg' },
  { name: 'Urumaki Califórnia', description: 'Arroz japonês envolto em alga nori, recheado com kani, pepino e manga.', unit: '(5 unidades)', price: 'R$35,90', image: '/public/sushi4.svg' },
  { name: 'Temaki de Atum', description: 'Cone de alga recheado com atum fresco, arroz e cebolinha, perfeito para saborear com as mãos.', unit: '(A partir de:)', price: 'R$35,50', image: '/public/sushi5.svg' },
])
</script>
<template>
  <main>
    <div class="banner">
      <img src="/public/imagem sumono.jpg">
    </div>
    <div class="tit">
      <h1 id="title">{{ titulo }}</h1>
    </div>
  <div v-for="item in comida" :key="item">
    <ItemPrincipais :title="item.name" :descricao="item.description" :quantia="item.unit" :valor="item.price"
      :imagem="item.image" />
  </div>
</main>
</template>
<style scoped>
#title{
    color: white;
    font-family: 'Inter';
}
main {
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8%;
  margin-left: 25%;
}

.banner img{
  width: 64vw;
  align-items: center;
}

.banner{
  justify-content: center;
  display: flex;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 70%);
  max-height: 230px;
  margin-left: 11%;
}

</style>