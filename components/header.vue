<template>
  <nav class="w-full text-xl bg-white border-b border-black font-inknut fixed z-50 ">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
      <div class="flex justify-center w-36 shrink-0 lg:mx-0 mx-auto lg:hidden">
        <NuxtLink to="/">
          <img src="assets/logo.png" alt="Logo" class="h-12" />
        </NuxtLink>
      </div>

      <div class="hidden lg:flex flex-1">
        <ul class="flex items-center gap-x-8">
       <li class="relative group">
  <div class="mr-24 text-xl whitespace-nowrap cursor-pointer text-gray-500 hover:text-black transition-all duration-300 ease-in-out">
    Women
  </div>

  <div
    class="transition-all duration-500 ease-in-out
           overflow-hidden opacity-0 group-hover:opacity-100
           translate-y-2 group-hover:translate-y-0
           max-h-0 group-hover:max-h-40
           relative left-0 -ml-10 "
  >
    <div class="text-sm z-50  py-1 flex items-center">
      <a href="/woman-main" class="text-gray-500 hover:text-black">Mainboard</a>
      <span>|</span>
      <a href="/woman-development" class="text-gray-500 hover:text-black">Development</a>
    </div>
  </div>
</li>


            <li class="relative group">
  <div class="mr-24 text-xl whitespace-nowrap cursor-pointer text-gray-500 hover:text-black transition-all duration-300 ease-in-out">
    Men
  </div>

  <div
    class="transition-all duration-500 ease-in-out
           overflow-hidden opacity-0 group-hover:opacity-100
           translate-y-2 group-hover:translate-y-0
           max-h-0 group-hover:max-h-40
           relative left-0 -ml-14 "
  >
    <div class="text-sm z-50  py-1 flex items-center">
      <a href="/men-main" class="text-gray-500 hover:text-black">Mainboard</a>
      <span>|</span>
      <a href="/men-development" class="text-gray-500 hover:text-black">Development</a>
    </div>
  </div>
</li>

          <li>
            <NuxtLink to="/talent" class="text-xl  text-gray-500 hover:text-black">Talent</NuxtLink>
          </li>
        </ul>
      </div>


      <div class="hidden lg:flex justify-center w-36 shrink-0">
        <NuxtLink to="/">
          <img src="assets/logo.png" alt="Logo" class="h-16" />
        </NuxtLink>
      </div>

      <div class="hidden lg:flex flex-1 justify-end items-center">
        <ul class="flex items-center gap-x-8 xl:gap-x-12">
          <li><NuxtLink to="/get-scouted" class="text-gray-500 hover:text-black font-medium px-3 py-2">Get Scouted</NuxtLink></li>
          <li><NuxtLink to="/" class="text-gray-500 hover:text-black font-medium px-3 py-2">About us</NuxtLink></li>
          <li><NuxtLink to="/academy" class="text-gray-500 hover:text-black font-medium px-3 py-2">Academy</NuxtLink></li>
        </ul>
      </div>

      <div class="lg:hidden flex items-center">
        <button @click="isOpen = !isOpen" class="text-gray-500 hover:text-black focus:outline-none">
          <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 10C6.89544 10 6 10.8954 6 12C6 13.1046 6.89544 14 8 14H40C41.1046 14 42 13.1046 42 12C42 10.8954 41.1046 10 40 10H8ZM14 24C14 22.8954 14.8954 22 16 22H40C41.1046 22 42 22.8954 42 24C42 25.1046 41.1046 26 40 26H16C14.8954 26 14 25.1046 14 24ZM26 36C26 34.8954 26.8954 34 28 34H40C41.1046 34 42 34.8954 42 36C42 37.1046 41.1046 38 40 38H28C26.8954 38 26 37.1046 26 36Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>

    <div v-if="isOpen" class="lg:hidden bg-white border-t border-gray-200">
      <div class="px-2 pt-2 pb-4 space-y-1">
        <NuxtLink to="#" class="block px-3 py-2 text-gray-500 hover:text-black font-medium">Women</NuxtLink>
        <NuxtLink to="#" class="block px-3 py-2 text-gray-500 hover:text-black font-medium">Men</NuxtLink>
        <NuxtLink to="/talent" class="block px-3 py-2 text-gray-500 hover:text-black font-medium">Talent</NuxtLink>
        <NuxtLink to="/get-scouted" class="block px-3 py-2 text-gray-500 hover:text-black font-medium">Get Scouted</NuxtLink>
        <NuxtLink to="#" class="block px-3 py-2 text-gray-500 hover:text-black font-medium">About us</NuxtLink>
        <NuxtLink to="/academy" class="block px-3 py-2 text-gray-500 hover:text-black font-medium">Academy</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const isOpen = ref(false);
</script>

<style>
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>