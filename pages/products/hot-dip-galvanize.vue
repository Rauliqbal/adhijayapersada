<script setup>
const data = {
   title: "Hot Dip Galvanize",
   thumbnail: "hotdip-galvanize.jpg",
   images: ["hotdipgalvanize1.png", "hotdipgalvanize2.png", "hotdipgalvanize3.png", "hotdipgalvanize4.png"],
};
</script>
<template>
   <main>
      <header>
         <div class="flex items-center relative justify-center bg-header bg-cover bg-no-repeat bg-center h-64 mt-[80px]">
            <div class="bg-black/60 inset-0 absolute"></div>
            <div class="z-10 text-center">
               <h2 class="text-xl text-red-600 tracking-wide font-bold mb-4">HOT DIP GALVANIZE</h2>
               <h1 class="text-3xl md:text-4xl text-white font-bold">Adhi Jaya Persada</h1>
            </div>
         </div>
      </header>
      <section class="container">
         <div class="max-h-[480px] rounded-3xl overflow-hidden group flex items-center relative">
            <img class="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500 ease-out" :src="'/images/' + data.thumbnail" :alt="'Foto produk' + data.title" />
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition duration-500 ease-out"></div>
         </div>

         <h2 class="text-3xl md:text-4xl font-bold mt-20 mb-6">{{ data.title }}</h2>
         <div class="h-1 w-20 mt-6 bg-blue-700"></div>

         <p class="paragraph mt-4">
            Hot Dip Galvanize (pelapisan secara celup panas) adalah suatu proses pelapisan dimana logam pelapisnya dipanaskan terlebih dahulu hingga mencair, kemudian logam yang akan dilapisi yang biasa disebut logam dasar dicelupkan ke
            dalam bak galvaniz yang telah berisi seng cair tadi, sehingga dalam beberapa saat logam tersebut akan terlapisi oleh lapisan berupa lapisan paduan antara logam pelapis (seng) dengan logam dasar dalam bentuk ikatan metalurgi yang
            kuat dan tersusun secara berlapis-lapis yang disebut fasa. Pelapisan dengan metode Hot Dip Galvanizing sering juga disebut dengan proses pelapisan logam dengan logam lain yang lebih anodik sesuai dengan deret galvanis.
         </p>
         <img class="w-full mt-8" src="~/assets/images/hotdipgalvanize-info.webp" :alt="'Adhi Jaya Persada' + data.title" />

         <h2 class="text-3xl md:text-4xl font-bold mt-20 mb-6">{{ data.title }} Product</h2>
         <div class="h-1 w-20 mt-6 bg-blue-700"></div>
         <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div v-for="image in data.images" :key="image">
               <img class="w-full h-full object-cover gap-8 rounded-3xl" :src="'/images/' + image" alt="" />
            </div>
         </div>
      </section>
   </main>
</template>
