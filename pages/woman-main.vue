
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
 const isSticky = ref(false)
 
const alphabet = [
  'a','b','c','d','e','f','g','h','i','j','k','l',
  'm','n','o','p','q','r','s','t','u','v','w','x','y','z',
  'All'
]
const activeLetter = ref('All')
const allImages = [
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
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/cef51f9ddad880f2e056479ea5789e05/7/5/7501829-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T063023Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=21db8c353530ea210157dd61579e9e6e1dd70caa10e1f4f030aff3f10e7a725c",
    alt: "Description image 4",
    name: "Model 4",
    slug: "jessie",
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/77fff45eb14df082228499186283653e/7/4/7436640-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T063023Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=8cf7a7a8e9c000b29426ef0d1448d26549526b091d37a3f81271bf4035544555",
    alt: "Description image 5",
    name: "Model 5",
    slug: "maki",  
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/544c65466ec704ed77015a6190071474/7/4/7487518-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T063023Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=cb3cae3caef0bbaf1db9a035b310545239c0185062e8c39c0a82ec9fcd105c4a",
    alt: "Description image 6",
    name: "Model 6",
    slug: "marit-s",
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/59446560ee4d03956eee274b290107ec/7/5/7501749-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T063023Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=04ab6bdf174ee34117d499a0ecb075be2af1db257c5f42a3a7faf8281d57bda4",
    alt: "Description image 7",
    name: "Model 7",
    slug: "marleen-n",
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/f03897c6bd98a5692175b13797534609/7/4/7464329-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T063023Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=02f53d331bc7c68cf7d38b4af3985ff5b6745101ea45b1f053821d9926349bf3",
    alt: "Description image 8",
    name: "Model 8",
    slug: "mila-z-zbinkonska",
  },
  {
    src:
      "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/c618a4f255b50332b96b3f68b301adc1/7/4/7464035-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T063024Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=90114533d60c272cfd6d67a67d0e43f90ec3b7f440a67a8419c4fa645d916f18",
    alt: "Description image 9",
    name: "Model 9",    
    slug: "momoe-motoyoshi",
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/452656a5d980728bd0d964e8676c5e40/7/4/7464230-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T063024Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=4063877440f95fcf75c0a071161fe5d0ff67a0ec0ac930517b0361b2a623af03",
    alt: "Description image 10",
    name: "Model 10",
    slug: "charlotte-tosca",
  },

];


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

</script>
