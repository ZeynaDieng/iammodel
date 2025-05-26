
<template>
  <div
    class="relative bg-[url('~/assets/bgImage.svg')] bg-fixed bg-cover bg-center bg-no-repeat font-inknut"
  >
    <div class="p-8">
      <h1
        class="mb-8 mt-24 text-center text-2xl text-black md:mb-2 lg:text-4xl uppercase font-inknut"
      >
Mainboard      </h1>

<div 
  
  class="flex items-center justify-center space-x-2 px-4 py-2 mb-2 sticky top-[90px] z-40 md:px-8 font-inknut transition-all duration-300"
>
    <button
      v-for="letter in alphabet"
      :key="letter"
      @click="filterByLetter(letter)"
      :class="[
        'text-xl font-medium',
        activeLetter === letter ? 

          'text-black font-bold underline'
          : availableLetters.has(letter) || letter === 'All'
            ? 'text-black'
            : 'text-gray-400 cursor-not-allowed'
      ]"
    >
      {{ letter }}
    </button>
  </div>

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


const alphabet = [
  'a','b','c','d','e','f','g','h','i','j','k','l',
  'm','n','o','p','q','r','s','t','u','v','w','x','y','z',
  'All'
]
const activeLetter = ref('All')
const availableLetters = computed(() => {
  const letters = new Set<string>()
  allImages.forEach(image => {
    const firstLetter = image.slug.charAt(0).toLowerCase()
    letters.add(firstLetter)
  })
  return letters
})

const images = computed(() => {
  if (activeLetter.value === 'All') {
    return allImages
  }
  return allImages.filter(image =>
    image.slug.toLowerCase().startsWith(activeLetter.value.toLowerCase())
  )
})

function filterByLetter(letter: string) {
  if (letter === 'All' || availableLetters.value.has(letter)) {
    activeLetter.value = letter
  }
}
const allImages = [
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/de0ac168ba519d0906eea9ee1836bc27/7/4/7464053-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T065338Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=8ad7cb5d3c32e157463c50102e7c5930da31eb1ee5e8816505877669d9a5e9e3",
    alt: "Description image 1",
    name: "Model 1",
       slug: "blessing-o",
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/95d8a46f6ff21b08a8b001c6d6b388c0/7/4/7464302-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T065338Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=5980faa02f125ab885abe49d192c16617104c26efa1f0ef31f2ea5bdcaa26da7",
    alt: "Description image 3",
    name: "Model 3",
    slug: "baba-mbow-gueye-mbaye",
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/c7d9ddd603590e14fb66798be8476632/7/4/7464244-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T065338Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=3d8fe8bd326875be8d696b8685c78dc9cd435589f440fab82d18f500aa9e42b6",
    alt: "Description image 4",
    name: "Model 4",
    slug: "bartosh-gorecki",
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/c177283b6e1152b8d2e907b30f3bbb06/7/5/7529144-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T065338Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=cd7aee3972e139ae3260bf4f58f1245efcbab315fc0cc57887d7079f92e3d64e",
    alt: "Description image 5",
    name: "Model 5",
    slug: "geelay-b",  
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/c76d94b4eb6302824ab918d84d37b2e0/7/4/7464215-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T065338Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=e2ce4d5a0aa900b3e2d310777877c22c56e754a7fab34ff6c56eda291264de82",
    alt: "Description image 6",
    name: "Model 6",
    slug: "kirill-null",
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/6091b62cda71899b025fd4ecf72c5f65/7/5/7526992-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T065338Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=5b50df0a9e4cecb18d821b40c415f08cae241bd8eba0df3b0623d8068f290f23",
    alt: "Description image 7",
    name: "Model 7",
    slug: "melle-schram",
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/f9295818deba1eb9285c88f6673bb40c/7/4/7464072-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T065338Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=3cd05ee03f0abca555e6590b57dd2ee570c763e0348e83f23b9874e526ac17ff",
    alt: "Description image 8",
    name: "Model 8",
    slug: "micha-b",
  },
  {
    src:
      "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/c88ec0e5ee0a4792ba93ba14b1b6df47/7/5/7558300-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T065338Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=5174ce242ab5254ecfeb354bd7a7bfde47f052868f6e3f148608d8d3e3148f52",
    alt: "Description image 9",
    name: "Model 9",    
    slug: "roland-rich",
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/ea292275b92e0441b65a46681e4ff5cc/7/4/7464305-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T065338Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=8e03f87033b58e6b2f4e48e26648f610d8d7b1e392671991ee16dba02f0f033b",
    alt: "Description image 10",
    name: "Model 10",
    slug: "derrick-m",
  },

];
</script>
