<template>
  <div class="relative min-h-screen bg-[url('~/assets/bgImage.svg')] bg-cover bg-center bg-no-repeat bg-full">
    <swiper
      :slidesPerView="3"
      :spaceBetween="10"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
        dynamicBullets: true,
      }"
      :breakpoints="{
        '640': { slidesPerView: 1, spaceBetween: 20 },
        '768': { slidesPerView: 2, spaceBetween: 40 },
        '1024': { slidesPerView: 3, spaceBetween: 50 }
      }"
      :modules="modules"
      class="w-full py-12"
    >
      <swiper-slide 
        v-for="(image, index) in images"
        :key="index"
        class="md:h-[500px] overflow-hidden items-center my-10 "
      >
        <img
          :src="image.src"
          :alt="image.alt || `Slide ${index + 1}`"
          class="w-full h-[650px]  object-cover   transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] transform border-2 border-black"
          loading="lazy"
          sizes="sm:100vw md:50vw lg:400px"
          format="webp"
          quality="80"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import {Autoplay ,EffectCreative} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const modules = [ Autoplay,EffectCreative]

const images = [
  { src: 'https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/c88ec0e5ee0a4792ba93ba14b1b6df47/7/5/7558300-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T021259Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=8d8c3332296c21ec77e516ae46f11f19e2423123ad343a8c82c4ec02004a2965', alt: 'Description image 1' },
  { src: 'https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/19bfdea8290c855655dd1381e206d9c7/7/4/7479895-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T021259Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=b56b0cc5e9370daface6a180124444674c84128ac38a1bd6ea0ed6bab7693130', alt: 'Description image 2' },
  { src: 'https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/95d8a46f6ff21b08a8b001c6d6b388c0/7/4/7464297-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T021259Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=41ae94937e4b8a1ac01c9512e8c2c4ecab52f4ef53c91b0bc4fe5f69bb23287f', alt: 'Description image 3' },
  { src: 'https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/website_image/a8f52561b4f241cf762fe38dddfeddc6/39900db047f87fbace8c717ea9ea121a/12167.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250525%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250525T202850Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=4e8620ef72ddf9450a2f5e7f98dc5a3e4f26c312e0bd0a46beb0198105422ea3', alt: 'Description image 4' },
  { src: 'https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/website_image/a8f52561b4f241cf762fe38dddfeddc6/39900db047f87fbace8c717ea9ea121a/12166.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250525%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250525T202850Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=539ecf0adee299ccb811ab3643c5943f76181a2266f71b2572bbb9634efcfd21', alt: 'Description image 5' },
  { src: 'https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/website_image/a8f52561b4f241cf762fe38dddfeddc6/39900db047f87fbace8c717ea9ea121a/12167.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250525%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250525T202850Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=4e8620ef72ddf9450a2f5e7f98dc5a3e4f26c312e0bd0a46beb0198105422ea3', alt: 'Description image 6' }
]
</script>

<style>
.swiper-slide {
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}

img {
  will-change: transform;
  backface-visibility: hidden;
}
</style>