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
                        <h2 id="title">{{ title }}</h2>
                        <p id="quantia">{{ quantia }}</p>
                    </div>
                    <p id="valor">{{ valor }}</p>
                </div>
                <p id="desc">{{ descricao }}</p>
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
    /* height: 20%; */
    width: 80%;
}

#valor{
    font-size: 20px;
    font-weight: 800;
    letter-spacing: 5px
}

#title{
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 4px
}

#quantia {
    font-size: 20px;
    font-weight: 200;
    letter-spacing: 5.3px;
}

#desc {
    font-size: 20px;
    letter-spacing: 4.5px;
    margin: 1rem 0;
}

img {
    width: 40%;
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

</style>