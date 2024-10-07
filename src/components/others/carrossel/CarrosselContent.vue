<script setup>
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
</script>
<template>
<swiper-container slides-per-view="1" speed="500" loop="true" auto css-mode="true"
>
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper-container>
</template>