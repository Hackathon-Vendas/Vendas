<script setup>
import ItemPedido from './ItemPedido.vue';
import { useProdutoStore } from '../stores/produto';
const produtos = useProdutoStore();
</script>

<template>
   <div class="sidebar-container">
    <div class="pedido">
        <div v-for="item in produtos.products" :key="item.id">
            <ItemPedido :id="item.id" :quantidade="item.id" :nome="item.nome" :preco="item.price" />
        </div>
    </div>
   </div>
</template>

<style scoped>
.sidebar-container{
    background-color: white;
    position: absolute;
    height: 100%;
    width: 50%;
    } 
*{
    color: white;
}
</style>