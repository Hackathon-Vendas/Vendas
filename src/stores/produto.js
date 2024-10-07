import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useProdutoStore = defineStore('produtos', () => {
  const products = ref([
    { id: 1, nome: 'Produto 1', price: 19.99 },
    { id: 2, nome: 'Produto 2', price: 29.99 },
    { id: 3, nome: 'Produto 3', price: 39.99 },
  ]);

  function removeProduct(id) {
    const index = products.value.findIndex((product) => product.id === id);
    products.value.splice(index, 1);
  }
  return { products, removeProduct };
});