<script setup>
import { ref } from 'vue';
import MenuVue from '@/components/others/MenuVue.vue';

const pratos = [{
    imagem: '/public/imagem sumono.jpg',
    titulo: 'Sunomono',
    descricao: 'Salada refrescante de pepino agridoce com gergelim torrado.'
},
{
    imagem: '/public/imagem sumono.jpg',
    titulo: 'temaki',
    descricao: 'ishsofhs'
}]
</script>

<template>
    <MenuVue />
    <div class="container">
        <h2>Entradas</h2>
        <div class="cardapio">
            <div v-for="prato in pratos" :key="prato.titulo">
                <div class="pratos">
                    <img :src="prato.imagem" :alt="prato.titulo" class="Menu">
                    <div class="descricao">
                    <h3>{{ prato.titulo }}</h3>
                    <p>{{ prato.descricao }}</p>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cardapio {
    justify-content: center;
}

.descricao{
    padding-top: 2%;
}

.pratos {
    display: flex;
    border-radius: 8px;
    margin-left: 25%;
    width: 70%;
    background-color: #454545;
    margin-top: 2%;
    color: #FFFFFF;
}

.Menu {
    margin: 2%;
    width: 18%;
    border-radius: 8px;

}

main {
    width: 90%;
    margin: auto;
    display: flex;
}

.sidebar {
    height: 100vh;
    width: 200px;
    position: fixed;
    top: 9, 5vh;
    left: 0;
    background-color: #333;
    padding-top: 20px;
}

.sidebar ul {
    list-style-type: none;
    padding: 0;
}

.sidebar ul li {
    padding: 15px;
    text-align: center;
}

.sidebar ul li a {
    text-decoration: none;
    color: white;
    display: block;
    font-size: 18px;
}
</style>