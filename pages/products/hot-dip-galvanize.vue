<script setup>
const data = {
   title: "Hot Dip Galvanize",
   image: "hotdip-galvanize.jpg",
   description:
      "Hot Dip Galvanizing (pelapisan secara celup panas) adalah suatu proses pelapisan dimana logam  pelapisnya dipanaskan terlebih dahulu hingga mencair, kemudian logam yang akan dilapisi yang biasa disebut logam dasar dicelupkan ke dalam bak galvaniz yang telah berisi seng cair tadi, sehingga dalam beberapa saat logam tersebut akan terlapisi oleh lapisan berupa lapisan paduan antara logam pelapis (seng) dengan logam dasar dalam bentuk ikatan metalurgi yang kuat dan tersusun secara berlapis-lapis yang disebut fasa. Pelapisan dengan metode Hot Dip Galvanizing sering juga disebut dengan proses pelapisan logam dengan logam lain yang lebih anodik sesuai dengan deret galvanis.",
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
         <div class="max-h-[440px] rounded-3xl overflow-hidden group flex items-center relative">
            <img class="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500 ease-out" :src="'/images/' + data.image" :alt="'Foto produk' + data.title" />
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition duration-500 ease-out"></div>
         </div>

         <h2 class="text-4xl font-bold mt-8 mb-6">{{ data.title }}</h2>
         <p class="paragraph mt-4">{{ data.description }}</p>
         <img class="w-full mt-8" src="~/assets/images/hotdipgalvanize-info.webp" :alt="'Adhi Jaya Persada' + data.title" />
      </section>
   </main>
</template>
