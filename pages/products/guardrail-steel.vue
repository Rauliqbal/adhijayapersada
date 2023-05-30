<script setup>
useHead({
   title: "Guardrail Steel - Adhi Jaya Persada",
   meta: [{ name: "keywords", content: "guardrail steel, pembatas jalan" }],
});

const data = {
   title: "Guardrail Steel",
   image: "guard-rail.jpeg",

   images: ["guard-rail.jpeg", "hotdipgalvanize3.jpg"],
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
            Guard Rail adalah nama lain dari pagar pembatas jalan yang sudah sering anda lihat di jalan tol atau jalan raya biasa. Pagar pembatas jalan ini memiliki fungsi utama sebagai peredam energi kinetik jika sebuah kendaraan menabrak
            pembatas jalan. Redaman energi kinetik ini membuat mobil paling tidak terbalik atau terpelanting jauh dari lokasi kecelakaan.
         </p>
         <p class="paragraph mt-4">
            Guard Rail terbuat dari bahan baja yang dibentuk dengan mesin cold-roll sehingga menghasilkan beam baja berkualitas yang disebut dengan W-Beam. Sifat dari guard rail ini adalah anti karat sehingga tidak akan terpengaruh sama
            sekali dengan cuaca ekstrem yang ada di luar ruangan. Guard Rail sudah dilapisi dengan lapisan anti karat (lapisan galvanis) yang tahan terhadap panas matahari dan air hujan. Panas dan hujan yang biasanya menjadi musuh utama
            material logam bisa diatasi dengan baik oleh Guard Rail.
         </p>
         <p class="paragraph mt-4">Sampai saat ini teknologi Guard Rail bisa dikatakan yang paling aman untuk digunakan sebagai pembatas jalan. Alat ini bisa membuat kendaraan tidak terlempar ke luar jalur saat mengalami kecelakaan</p>
         <p class="paragraph mt-4">Komponen-komponen Guardrail (Standard SNI)</p>
         <ul class="list-decimal pl-6 mt-4">
            <li class="pl-4 paragraph">Beam 4320 x 312 x 2.7 mm</li>
            <li class="pl-4 paragraph">Post 1800 x 176 x 74 x 6.0 mm</li>
            <li class="pl-4 paragraph">Post 1800 x 176 x 74 x 4.5 mm</li>
            <li class="pl-4 paragraph">Blocking Piece 350 x 176 x 74 x 6.0 mm</li>
            <li class="pl-4 paragraph">Blocking Piece 350 x 176 x 74 x 4.5 mm</li>
            <li class="pl-4 paragraph">Terminal End (Sleeve Beam) 725 x 312 x 2.7 mm</li>
         </ul>
         <p class="paragraph mt-4">Komponen-komponen Guardrail (Standard AASHTO)</p>
         <ul class="list-decimal pl-6 mt-4">
            <li class="pl-4 paragraph">Beam 4320 x 312 x 2.7 mm</li>
            <li class="pl-4 paragraph">Post 1800 x 176 x 74 x 6.0 mm</li>
            <li class="pl-4 paragraph">Post 1800 x 176 x 74 x 4.5 mm</li>
            <li class="pl-4 paragraph">Blocking Piece 350 x 176 x 74 x 6.0 mm</li>
            <li class="pl-4 paragraph">Blocking Piece 350 x 176 x 74 x 4.5 mm</li>
            <li class="pl-4 paragraph">Terminal End (Sleeve Beam) 725 x 312 x 2.7 mm</li>
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
