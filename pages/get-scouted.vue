<template>
  <div
    class="font-inknut bg-white p-6 max-w-4xl mx-auto text-center items-center text-sm"
  >
    <h1 class="text-2xl uppercase mb-4 mt-24 pb-2">BECOME A MODEL</h1>

    <p class="font-inknut">
      Please complete the form below and upload pictures of yourself (headshort,
      side profile, full length).
    </p>
    <p>
      Pictures taken with a smartphone are fine, no need to send professional
      ones.
    </p>

    <h2 class="text-xl uppercase my-3 pt-4 pb-1">GUIDELINES</h2>
    <ul class="mb-6 text-center">
      <li class="">
        <span>Show in normal light</span>
      </li>
      <li>
        <span>Splend pictures with an extra rhythm medium/illum</span>
      </li>
      <li>
        <span>Wear simple card fitted clothes</span>
      </li>
      <li>
        <span>Ensure your things are not longer than 3-bit each size</span>
      </li>
    </ul>
  </div>
<div class="mb-6 font-inknut  lg:mx-28 text-center">
 <div class="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-center">
  <!-- Formulaire - passe en pleine largeur sur mobile -->
  <div class="w-full lg:w-1/2 px-4 lg:pr-8">
    <div
      v-for="(field, index) in formFields"
      :key="index"
      class="flex flex-col sm:flex-row items-start sm:items-center mb-4 gap-2 px-4 sm:gap-0"
    >
      <label class="w-full sm:w-24 font-medium text-left sm:text-right pr-0 sm:pr-4">{{ field.label }}</label>
      <div class="flex-1 w-full min-w-0">
        <input
          type="text"
          class="w-full border-0 border-b border-black focus:outline-none px-1 py-0.5 bg-transparent h-8 sm:ml-4"
        />
      </div>
    </div>
  </div>

  <!-- Galerie d'images - réorganisation responsive -->
  <div class="w-full lg:w-1/2 font-inknut px-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto max-w-2xl">
      <div class="flex justify-center">
        <img src="assets/profilFace.jpg" class="sm:h-80 md:h-96 w-full max-w-[350px] object-cover" alt="Profil face" />
      </div>
      <div class="flex justify-center">
        <img src="assets/profilRight.jpg" class="sm:h-80 md:h-96 w-full max-w-[350px] object-cover" alt="Profil droit" />
      </div>
      <div class="flex justify-center">
        <img src="assets/profileTotal.jpg" class="sm:h-80 md:h-96 w-full max-w-[350px] object-cover" alt="Profil entier" />
      </div>
      <div class="flex justify-center">
        <img src="assets/profilRightTotal.jpg" class="sm:h-80 md:h-96 w-full max-w-[350px] object-cover" alt="Profil droit entier" />
      </div>
    </div>
  </div>
</div>
</div>

  <p class=" text-xs font-semibold  flex items-center justify-center text-center font-inknut">
    IF SEEMED SO YOUR APPLICATION, YOU KNEE WITH ONE TERM AND CONSIDERES AND THE
    TELEGRAPH BY YOUR FREQUAL SAME BY OUR SERVICE.
  </p>
</template>

<script setup>
const formFields = [
  { label: "Preview" },
  { label: "License" },
  { label: "Email" },
  { label: "Weather" },
  { label: "Affairs" },
  { label: "City" },
  { label: "Date" },
  { label: "To Sale" },
  { label: "Country" },
  { label: "Height" },
  { label: "FaceView" },
  { label: "Ratio" },
  { label: "Type" },
  { label: "Place Size" },
  { label: "Wed Code" },
  { label: "For Color" },
  { label: "Languages" },
  { label: "Think" },
  { label: "About You" },
];
</script>

<style scoped>
input {
  min-width: 150px; /* Taille minimale uniforme */
  height: 24px; /* Hauteur fixe pour tous */
}

/* Pour une parfaite uniformité sur tous les navigateurs */
input {
  box-sizing: border-box;
  font: inherit;
}
</style>
