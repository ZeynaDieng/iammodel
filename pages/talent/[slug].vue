<template>
  <div class="">
    <div class="relative w-full">
      <div class="min-h-[400px]">
        <img
          src="https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/cef51f9ddad880f2e056479ea5789e05/7/5/7524579-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T045332Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=b4743e396523091c6c79831b5bca764f6056bc5d1e8f7053c370907592318590"
          class="object-cover"
          alt=""
        />
      </div>
      <div
        class="absolute top-0 left-0 w-full h-full bg-black opacity-50"
      ></div>
      <div
        class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
      >
        <div
          class="flex flex-col items-center justify-center text-center z-10 text-white"
        >
          <div>
            <h1
              class="text-8xl semifont-bold uppercase font-serif tracking-[0.2em] font-light"
            >
              {{ name }}
            </h1>
          </div>
          <div
            class="text-lg font-semibold bottom-0 mb-48 absolute font-inknut"
          >
            <span
              >Height 179 cm / 5'10.5" - Bust 81 cm / 32" - Waist 60 cm / 23.5"
              - Hips 90 cm / 35.5" - Shoe 8 us / 6 uk / 39 eu - Eyes Blue - Hair
              Dark Brown</span
            >
          </div>
        </div>
      </div>
    </div>
    <div>
  <div class="sticky top-[90px] z-40 bg-white h-24 flex justify-between items-center px-4 text-4xl font-inknut">
        <div class="flex justify-start">
          <NuxtLink to="/talent" class="text-black hover:text-gray-500 uppercase">Book</NuxtLink>
        </div>
        <div class="flex justify-end">
          <NuxtLink to="/talent/pdf" class="text-gray-500 hover:text-black">PDF</NuxtLink>
        </div>
      </div>
      <div class=" bg-fixed relative min-h-screen bg-[url('~/assets/bgImage.svg')] bg-cover bg-center bg-no-repeat bg-full font-inknut">
      <div>
     
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 h-auto"
      >
       <div
          v-for="(image, index) in images"
          :key="index"
          class="relative group cursor-pointer"
        >
          <img
            :src="image.src"
            :alt="image.alt || `Slide ${index + 1}`"
            class="w-full h-full object-cover"
            
            loading="lazy"
          />
     </div>
          </div>
        </div>
       </div>
      </div>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const slug = route.params.slug;
const name = "Jessie"; 
const images = [
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/cef51f9ddad880f2e056479ea5789e05/7/5/7501829-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T045331Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=e304f0a62088e1d4f9c62ff8f8944477803d7b23c591fa902201ff049d3d0cd8",
    alt: "Description image 1",
    name: "Jessie",
    slug: slug
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/cef51f9ddad880f2e056479ea5789e05/7/5/7501828-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T045331Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=939123b04b04440baf46935a144a98a4dece5e482c850e0fa565daa7b3332406",
    alt: "Description image 2",
    name: "Jessie",
    slug: slug
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/cef51f9ddad880f2e056479ea5789e05/7/5/7501827-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T045331Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=ee90f1e380c12375bec74ec251382590116a5a5a272bd189fe43d6f76ead0ba3",
    alt: "Description image 3",
    name: "Jessie",
    slug: slug
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/cef51f9ddad880f2e056479ea5789e05/7/5/7501826-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T045331Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=a3a90c085c5a4c354f73d7580faab05e6aa955ab61208dfd37b238b79d798dca",
    alt: "Description image 4",
    name: "Jessie",
    slug: slug
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/cef51f9ddad880f2e056479ea5789e05/7/5/7501825-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T045331Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=6307bdde8bbc17835f0c96e472d6dec61514b8e3c54eb01aa4a29dd319c8227c",
    alt: "Description image 5",
    name: "Jessie",
    slug: slug
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/cef51f9ddad880f2e056479ea5789e05/7/5/7501824-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T045331Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=5985378127ef279b348130289b9ac0c1ad889894570782385fa823925eda27e2",
    alt: "Description image 6",
    name: "Jessie",
    slug: slug
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/cef51f9ddad880f2e056479ea5789e05/7/5/7501822-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T045331Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=78d87458c45a43e0f484e213ab199e7c12c05a72732f5fa612e36c8fe337e759",
    alt: "Description image 7",
    name: "Jessie",
    slug: slug
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/cef51f9ddad880f2e056479ea5789e05/7/5/7501816-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T045331Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=6595166fddc937c49450fcbcef28981235866a5f63e3d42d5dd24dae584bff42",
    alt: "Description image 8",
    name: "Jessie",
    slug: slug
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/cef51f9ddad880f2e056479ea5789e05/7/5/7501815-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T045331Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=c71e93214513175c5527735203fb467051e0813d7395f6ae4a29196909005640",
    alt: "Description image 9",
    name: "Jessie",
    slug: slug
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/cef51f9ddad880f2e056479ea5789e05/7/5/7501814-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T045331Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=a341a9baa3dddf31380a37f9696d1b70233ce90967de6cdc08942271db46f6bc",
    alt: "Description image 10",
    name: "Jessie",
    slug: slug
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/cef51f9ddad880f2e056479ea5789e05/7/5/7501813-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T045331Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=0e332c219db36eaa32e526c39afe5a75aba8bbed5183ea68dc84dc0247e85d03",
    alt: "Description image 11",
    name: "Jessie",
    slug: slug
  },  
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/cef51f9ddad880f2e056479ea5789e05/7/5/7501811-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T045331Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=208d859494e7dc2ec97c944073cf13a2488b277bc662e1b5cdb5b044cd23bbcb",
    alt: "Description image 12",
    name: "Jessie",
    slug: slug
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/cef51f9ddad880f2e056479ea5789e05/7/5/7501809-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T045331Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=b5d6cbcdbc4b884c5fa57a618151938a7141016c1136f6be0d99044e06e72838",
    alt: "Description image 13",
    name: "Jessie",
    slug: slug
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/cef51f9ddad880f2e056479ea5789e05/7/5/7501807-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T045331Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=bf049aa1465f737bf5b2f7f13616992593d6d362d3476facdbe7e3812d01abdc",
    alt: "Description image 14",
    name: "Jessie",
    slug: slug
  },
  {
    src: "https://bucket-prod-01.s3.eu-west-1.amazonaws.com/uploads/content/125adbcb36f44a2ffef339d40bb314ca/talent/image/cef51f9ddad880f2e056479ea5789e05/7/5/7501808-big.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY55CGH2VAKKZFUPC%2F20250526%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250526T045331Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Signature=aa5536af3d60de8785e116a397a779a327ebef741a5e1c5861335d25db758d7c",
    alt: "Description image 15",
    name: "Jessie",
    slug: slug
  }


];
</script>

<style scoped>
:root {
  --font-javanese-text: "Javanese Text", "Inknut Antiqua", sans-serif;
}
</style>
