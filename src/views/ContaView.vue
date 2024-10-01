<script setup>
import { ref } from 'vue'
const contas = ref([
    {
        id: '1', 
        unidade: 'Unidade 1',
        produto: 'Produto A',
        valor: '100',
    },
    {
        id: '2', 
        unidade: 'Unidade 2',
        produto: 'Produto B',
        valor: '200',
    }
]);

</script>

<template>
    <div class="container">
        <h1>CONTA</h1>
        <div v-for="conta in contas" :key="conta.id">
            <p>{{ conta.unidade }}, {{ conta.produto }}, {{ conta.valor }}</p>
        </div>
    </div>
</template>

<style scoped>

.container{
    position: absolute;
width: 1170px;
height: 1584px;
left: 152px;
top: 186px;
background-color: blue;
}



</style>
