<script setup>
useHead({
   title: "Corrugated Steel Pipe - Adhi Jaya Persada",
   meta: [{ name: "keywords", content: "gorong gorong baja" }],
});

const data = {
   title: "Corrugated Steel Pipe",
   image: "corrugated-steel.jpg",

   images: ["aramco1.jpg", "aramco2.jpg", "aramco3.jpg", "aramco4.jpg"],
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
         <p class="paragraph mt-4">
            Pipa yang terbuat dari lembaran baja yang telah mengalami proses pembentukan gelombang (Corrugating) dan pelengkungan (Curving). Untuk hasil akhir yang lebih baik, Pipa Baja Bergelombang akan di lapisi dengan Zinc (Galvanizing),
            untuk memastikan resistensi terhadap korosi. Corrugated Steel Pipe biasa di gunakan untuk kontruksi gorong-gorong, saluran, jembatan, terowongan, penutup atas conveyor.
         </p>

         <p class="paragraph mt-4">Keunggulan lain dari Currogated Steel Pipe antara lain :</p>

         <ul class="list-decimal pl-6 mt-4">
            <li class="pl-4 paragraph">Dapat menyerap getaran dari beban di atasnya</li>
            <li class="pl-4 paragraph">Tahan terhadap gempa</li>
            <li class="pl-4 paragraph">Sesuai untuk kondisi tanah lembek</li>
            <li class="pl-4 paragraph">Pondasi lebih ringan</li>
            <li class="pl-4 paragraph">Mengurangi biaya pemeliharaan dan penggantian</li>
            <li class="pl-4 paragraph">Pemasangan mudah dan cepat</li>
            <li class="pl-4 paragraph">Tidak memerlukan tenaga spesialis dan hanya menggunakan peralatan yang sederhana</li>
         </ul>
         <p class="paragraph mt-4">Corrugated Steel memiliki 2 tipe :</p>
         <ul class="list-decimal pl-6 mt-4">
            <li class="pl-4 paragraph font-semibold">Tipe Nestable Flange ( Dua Tangkup)</li>
            <p class="paragraph mt-2">
               Adalah bentuk yang paling sederhana dan serba guna. Tipe ini dapat digunakan untuk gorong-gorong, saluran, jembatan kecil dan tutup konveyor. Tipe Nestable Flange ini memiliki dimensi dengan diameter mulai dari 450 mm sampai
               1800 mm dengan ketebalan plat 2 mm sampai 3,5 mm.
            </p>

            <li class="pl-4 paragraph mt-4 font-semibold">Tipe Multi Plate</li>
            <p class="paragraph mt-2">
               Tipe ini adalah pipa baja bergelombang yang dibuat dari lembaran-lembaran plat baja yang telah di galvanis dan dirakit menggunakan High Tensile Bolt. Tipe ini terdiri atas beberapa jenis : Multi Plate Pipe (Bulat), Multi Pipe
               Plate Arches (Oval), Multi Plate Arches, Multi Plate Underpass (oval) dan Multi Plate Super Span.
            </p>
         </ul>

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
