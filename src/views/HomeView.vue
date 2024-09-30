<script>
import { ref } from 'vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      showWelcomeScreen: true,

      items: [
        { image: '/Group 35.jpg', },
        { image: '/Group 36.jpg', },
        { image: '/Group 37.jpg', },
        { image: '/group 38.jpg', },
      ],
    };
  },
  methods: {
    closeWelcomeScreen() {
      this.showWelcomeScreen = false;
    }
  }
};
</script>

<template>
  <main>

    <div v-if="showWelcomeScreen" class="welcome-screen">
      <div class="welcome-content">
        <h1>BEM-VINDO AO</h1>
        <img class="logo-principal" src="/public/logoH.png">
        <img class="logo-secundaria" src="/public/logo-sushi.svg">
        <button @click="closeWelcomeScreen" class="continue-button">CONTINUAR</button>
      </div>
    </div>

    <div class="img">
      <img class="imagem-1" src="/public/sushi.webp">
    </div>

    <div class="carousel-container">

      <h1 class="carousel-heading">Especiais da Casa</h1>

      <div class="carousel-wrapper">
        <swiper :slides-per-view="4" space-between="10" navigation pagination class="my-swiper">
          <swiper-slide v-for="(item, index) in items" :key="index" class="swiper-slide">
            <img :src="item.image" :alt="item.title" />
            <div class="carousel-caption">
              <p>{{ item.title }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');


main {
  width: 90%;
  margin: auto;
  display: flex;
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
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: px;
  justify-content: center;
  align-items: center;
  height: 105px;
  width: 444px;

}

.logo-secundaria {
  height: 20px;
  width: 195px;
}

.welcome-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.welcome-content {
  text-align: center;
  color: white;
  font-family: 'Roboto Mono', monospace;
}

.welcome-content h1 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.welcome-content h2 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
}

.continue-button {
  display: flex;
  margin: auto;
  margin-top: 10px;
  height: 46px ;
  width: 130px;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  background-color: #000000;
  border: 2px solid #ffffff;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.continue-button:hover {
  background-color: #e63e3e;
}

.logo {
  height: 50px;
  width: 50px;

}

.imagem-1 {
  position: absolute;
  width: 791px;
  height: 439px;
  left: 27vh;
  top: 15vh;
  border-radius: 8px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);
}

.carousel-heading {
  position: fixed;
  left: 206px;
  bottom: 156px;
  font-size: 20px;
  color: white;
  margin-bottom: 20px;
  font-family: "Roboto Mono", monospace;
  ;
}

.carousel-wrapper {
  position: fixed;
  left: 190px;
  bottom: 20px;
  width: 95%;
  padding: 10px 16px;
  border-radius: 8px;
}


.swiper-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.swiper-slide img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.carousel-caption {
  margin-top: 8px;
  font-weight: bold;
}

</style>