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
    <div class="pagConta">
        <div class="conta">
            <div v-for="conta in contas" :key="conta.id">
                <p>{{ conta.unidade }}, {{ conta.produto }}, {{ conta.valor }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pagConta    {
    position: absolute;
    width: 40%;
    height: 80%;
    top: 186px;
    background-color: blue;
    border-radius: 8px;
}
</style>
