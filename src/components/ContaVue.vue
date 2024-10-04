<script setup>
// import { ref } from 'vue'
// const contas = ref([
//     {
//         id: '1', 
//         unidade: 'Unidade 1',
//         produto: 'Produto A',
//         valor: '100',
//     },
//     {
//         id: '2', 
//         unidade: 'Unidade 2',
//         produto: 'Produto B',
//         valor: '200',
//     }
// ]);

</script>

<template>
    <div class="container">
        <div class="conta">
            <div v-for="conta in contas" :key="conta.id">
                <p>{{ conta.unidade }}, {{ conta.produto }}, {{ conta.valor }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    position: absolute;
    width: 400px;
    height: 500%;
    top: 186px;
    background-color: blue;
}
</style>
