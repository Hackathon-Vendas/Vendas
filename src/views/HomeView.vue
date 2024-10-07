<script>
import CarrosselContent from '@/components/others/carrossel/CarrosselContent.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
// import CarrosselContent from '@/components/others/carrossel/CarrosselContent.vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    CarrosselContent
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

    <CarrosselContent />

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

</style>