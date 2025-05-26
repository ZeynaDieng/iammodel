
<template>
  <div
    class="relative bg-[url('~/assets/bgImage.svg')] bg-fixed bg-cover bg-center bg-no-repeat font-inknut"
  >
    <div class="p-8">
      <h1
        class="mb-8 mt-24 text-center text-2xl text-black md:mb-12 lg:text-4xl uppercase font-inknut"
      >
Developpement     </h1>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <NuxtLink
          v-for="(image, index) in images"
          :key="index"
          :to="`/talent/${image.slug}`"
          class="relative group cursor-pointer"
        >
          <img
            :src="image.src"
            :alt="image.alt || `Slide ${index + 1}`"
            class="w-full h-full object-cover"
            loading="lazy"
          />
          <div
            class="absolute inset-0 hidden sm:flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-3"
            :style="{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backgroundBlendMode: 'overlay',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
            }"
          >
            <div
              
              class="absolute inset-0 hidden sm:flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-3"
              :style="{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backgroundBlendMode: 'overlay',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
              }"
            >
              <ul class="text-xs lg:text-base space-y-2">
                <li class="grid grid-cols-12 justify-center gap-x-2">
                  <span class="col-span-5 text-right w-full tracking-[0.08em]"
                    >Height</span
                  >
                  <span class="col-span-6 tracking-[0.02em]"
                    >180 cm / 5.11"</span
                  >
                </li>
                <li class="grid grid-cols-12 justify-center gap-x-2">
                  <span class="col-span-5 text-right w-full tracking-[0.08em]"
                    >Bust</span
                  >
                  <span class="col-span-6 tracking-[0.02em]"
                    >83 cm / 32.5"</span
                  >
                </li>
                <li class="grid grid-cols-12 justify-center gap-x-2">
                  <span class="col-span-5 text-right w-full tracking-[0.08em]"
                    >Waist</span
                  >
                  <span class="col-span-6 tracking-[0.02em]">64 cm / 25"</span>
                </li>
                <li class="grid grid-cols-12 justify-center gap-x-2">
                  <span class="col-span-5 text-right w-full tracking-[0.08em]"
                    >Hips</span
                  >
                  <span class="col-span-6 tracking-[0.02em]"
                    >90 cm / 35.5"</span
                  >
                </li>
                <li class="grid grid-cols-12 justify-center gap-x-2">
                  <span class="col-span-5 text-right w-full tracking-[0.08em]"
                    >Shoe</span
                  >
                  <span class="col-span-6 tracking-[0.02em]"
                    >8 us / 6 uk / 39 eu</span
                  >
                </li>
              </ul>
            </div>
            <div>

              <h1
                class="text-sm sm:text-base text-right mt-2 text-gray-800 font-semibold uppercase"
              >
                {{ image.name }}
              </h1>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const images = [
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/f03886e6b79ce41917d78f28a3ee552b/7/4/7464189-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T063023Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=910a67bb48135b1c1e2038bf4b2f2291b5e43621cac34a65342b185dc5cb974b",
    alt: "Description image 1",
    name: "Model 1",
       slug: "blessing-o",
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/8d8be878da4bbe2621d83339bd43092e/7/4/7480083-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T063023Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=7c64921a30cb57fdfbd67194de979f6df38e52693d8406332abd6bfbce31ef83",
    alt: "Description image 3",
    name: "Model 3",
    slug: "charlotte-tosca",
  },

];
</script>
