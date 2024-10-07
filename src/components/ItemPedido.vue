<script setup>
defineProps(['id', 'quantidade', 'nome', 'preco', ])
import { useProdutoStore } from '@/stores/produto'
const produto = useProdutoStore();

</script>
<template>
    <div>
        <p>{{ quantidade }}</p>
        <p>{{ nome }}</p>
        <p>{{ preco }}</p>
        <button @click="produto.removeProduct(id)">deletar</button>
    </div>
</template>
<style scoped>
</style>