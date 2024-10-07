<script setup>
import PedidosVue from '@/components/PedidosVue.vue'
import { ref } from 'vue';
const showPedidos = ref(false);
</script>

<template>
    <header>
        <div class="container">
            <img class="logo-principal" src="/public/logoH.png">
            <img class="logo-secundaria" src="/public/logo-sushi.svg">
        <div class="cart-icon">
            <div>
                <button @click="showPedidos = !showPedidos"><img src="/public/logo-carrinho.svg" />
                </button>
            </div>
        </div>
        <div v-if="showPedidos">
            <PedidosVue />
        </div>
    </div>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    padding: 7px;
    margin: auto;
    background-color: #1a1818e8;
    position: fixed;
}

.container {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
}

.logo-principal {
    height: 54px;
    width: 268px;
}

.logo-secundaria {
    height: 17px;
    width: 100px;
}

.cart-icon {
    position: absolute;
    top: 30px;
    right: 25px;
}

.cart-icon img {
    width: 40px;
    height: auto;
    cursor: pointer;
}
</style>
