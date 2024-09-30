<script setup>
defineProps(['title', 'descricao', 'imagem', 'quantia', 'valor']);
</script>
<template>
    <main>
        <div class="container">
            <img :src=imagem>
            <div class="textos">
                <div class="titulo">
                    <div>
                        <h2>{{ title }}</h2>
                        <p>{{ quantia }}</p>
                    </div>
                    <p>{{ valor }}</p>
                </div>
                <p class="desc">{{ descricao }}</p>
            </div>
        </div>
    </main>
</template>
<style scoped>
.container {
    justify-content: space-around;
    color: white;
    margin: 15% 15%;
    font-family: 'Inter';
    display: flex;
    background-color: #454545;
    padding: 1rem;
    border-radius: 8px;
    height: 50%;
    width: 50%;
}

img {
    width: 30%;
    filter: brightness(0.6);
}

.textos {
    width: 65%;
}

.titulo {
    width: 100%;
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
}

.titulo > div {
    display: flex;
    align-items: center;
}

.desc {
    width: 100%;
    margin: 1rem 0;
}
</style>