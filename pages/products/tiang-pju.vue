<script setup>
useHead({
   title: "Steel Grating - Adhi Jaya Persada",
   meta: [{ name: "keywords", content: "penutup gorong gorong, gorong gorong baja" }],
});

const data = {
   title: "Tiang PJU",
   image: "tiang-pju.jpeg",

   images: ["tiang-pju1.jpg", "tiang-pju2.jpg"],
};
</script>
<template>
   <main>
      <header>
         <div class="flex items-center relative justify-center bg-header bg-cover bg-no-repeat bg-center h-64 mt-[80px]">
            <div class="bg-black/60 inset-0 absolute"></div>
            <div class="z-10 text-center">
               <h3 class="text-xl text-red-600 tracking-wide font-bold mb-4">{{ data.title }}</h3>
               <h2 class="text-3xl md:text-4xl text-white font-bold">Adhi Jaya Persada</h2>
            </div>
         </div>
      </header>
      <section class="container">
         <div class="max-h-[440px] rounded-3xl overflow-hidden group flex items-center relative">
            <img class="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500 ease-out" :src="'/images/' + data.image" :alt="'Foto produk' + data.title" />
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition duration-500 ease-out"></div>
         </div>

         <h2 class="text-4xl font-bold mt-8 mb-6">{{ data.title }}</h2>
         <div class="h-1 w-20 mt-6 bg-red-700"></div>

         <p class="paragraph mt-4">
            Penerangan Jalan Umum (PJU) dirancang dan diproduksi untuk daya tahan, ketahanan korosi, dan daya tarik visual. Kami mulai dengan bahan berkualitas tinggi untuk desain baja kami untuk membuat tiang dan penyangga yang memenuhi
            spesifikasi Anda dan melebihi ekspektasi Anda untuk penerangan jalan dan sejumlah aplikasi lainnya.
         </p>
         <p class="paragraph mt-4">Keunggulannya antara lain :</p>

         <ul class="list-decimal pl-6 mt-4">
            <li class="paragraph pl-4">Hot dip galvanis secara internal dan eksternal</li>
            <li class="paragraph pl-4">Ramah lingkungan</li>
            <li class="paragraph pl-4">Ringan dan hemat biaya</li>
            <li class="paragraph pl-4">Kemudahan perawatan</li>
            <li class="paragraph pl-4">Mudah di installasi</li>
            <li class="paragraph pl-4">Tahan lama</li>
            <li class="paragprah pl-4">Kuat</li>
         </ul>

         <h2 class="text-3xl md:text-4xl font-bold mt-20 mb-6">{{ data.title }} Product</h2>
         <div class="h-1 w-20 mt-6 bg-red-700"></div>

         <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div v-for="image in data.images" :key="image">
               <img class="w-full h-full object-cover gap-8 rounded-3xl" :src="'/images/' + image" alt="" />
            </div>
         </div>
      </section>
   </main>
</template>
