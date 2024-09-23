<script setup>
import { ref } from 'vue';
import HeaderVue from '@/components/others/HeaderVue.vue';
const pratos = [{
    imagem: '',
    titulo: 'temaki',
    descricao: 'ishsofhs'
}]
</script>

<template>
    <HeaderVue />
    <div class="container">
        <h2>Entradas</h2>
        <div class="cardapio">
            <div class="pratos">
                <div class="ingredientes"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>