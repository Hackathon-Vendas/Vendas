<script setup>
import { ref } from 'vue';
import ContaView from '@/components/ContaVue.vue';
const showConta = ref(false);

</script>
<template>
  <header>
    <div class="container">
      <img class="logo-principal" src="/public/logoH.png">
      <img class="logo" src="/public/logo-sushi.svg">
      <div class="cart-icon">
        <div>
          <button @click="showConta = !showConta"><img src="/public/logo-carrinho.svg" alt="Carrinho de Compras" />
          </button>
        </div>
      </div>
      <div v-if="showConta">
        <ContaView />
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  padding: 20px;
  margin: auto;
  background-color: #1a1818e8;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
