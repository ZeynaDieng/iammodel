<template>
  <div
    class="relative bg-[url('~/assets/bgImage.svg')] bg-fixed bg-cover bg-center bg-no-repeat font-inknut"
  >
    <div class="">
      <div class="p-8">
<h1
        class="mt-20 text-center text-2xl text-black md:mb-2 lg:text-4xl uppercase font-inknut"
      >
Talents      </h1>
      </div>
      

      <div
        class="md:flex flex-wrap bg-white w-full items-center justify-center space-x-2 px-4 py-2 mb-2 sticky top-[80px] md:top-[90px] z-40 md:px-8 font-inknut transition-all duration-300"
      >
        <button
          v-for="letter in alphabet"
          :key="letter"
          @click="filterByLetter(letter)"
          :class="[
            'text-xl font-medium',
            activeLetter === letter
              ? 'text-black font-bold underline'
              : availableLetters.has(letter) || letter === 'All'
              ? 'text-black'
              : 'text-gray-400 cursor-not-allowed',
          ]"
        >
          {{ letter }}
        </button>
      </div>

      <div
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8"
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
              backgroundImage: `url('${bgImages[0].src}')`,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backgroundBlendMode: 'overlay',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
            }"
          >
            <div
              v-for="(item, index) in bgImages"
              :key="index"
              class="absolute inset-0 hidden sm:flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-3"
              :style="{
                backgroundImage: `url('${item.src}')`,
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
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "All",
];
const activeLetter = ref("All");
const availableLetters = computed(() => {
  const letters = new Set<string>();
  allImages.forEach((image) => {
    const firstLetter = image.slug.charAt(0).toLowerCase();
    letters.add(firstLetter);
  });
  return letters;
});

const images = computed(() => {
  if (activeLetter.value === "All") {
    return allImages;
  }
  return allImages.filter((image) =>
    image.slug.toLowerCase().startsWith(activeLetter.value.toLowerCase())
  );
});

function filterByLetter(letter: string) {
  if (letter === "All" || availableLetters.value.has(letter)) {
    activeLetter.value = letter;
  }
}
const allImages = [
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/c88ec0e5ee0a4792ba93ba14b1b6df47/7/5/7558300-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T021259Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=8d8c3332296c21ec77e516ae46f11f19e2423123ad343a8c82c4ec02004a2965",
    alt: "Description image 1",
    name: "Model 1",
    slug: "roland-rich",
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/19bfdea8290c855655dd1381e206d9c7/7/4/7479895-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T021259Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=b56b0cc5e9370daface6a180124444674c84128ac38a1bd6ea0ed6bab7693130",
    alt: "Description image 2",
    name: "Model 2",
    slug: "jessie",
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/95d8a46f6ff21b08a8b001c6d6b388c0/7/4/7464297-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T021259Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=41ae94937e4b8a1ac01c9512e8c2c4ecab52f4ef53c91b0bc4fe5f69bb23287f",
    alt: "Description image 3",
    name: "Model 3",
    slug: "baba-mbow-gueye-mbaye",
  },
];
const bgImages = [
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/19bfdea8290c855655dd1381e206d9c7/7/4/7479883-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T021259Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=1f05c460df8e75b88c11cae1e30636916eea39bd689dc04c85da3926e1dd0e0b",
  },
];
</script>

<style scoped></style>
