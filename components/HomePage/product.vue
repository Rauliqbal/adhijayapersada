<script setup>
const products = [
   {
      title: "Hot Dip Galvanize",
      url: "/products",
      image: "hotdeep-galvanize.jpg",
   },
   {
      title: "Steel Grating",
      url: "/products",
      image: "steel-grating.jpg",
   },
   {
      title: "Guardrail way Steel",
      url: "/products",
      image: "guard-rail.jpg ",
   },
   {
      title: "Corrugated Steel / Aramco",
      url: "/products",
      image: "aramco.jpg ",
   },
];
</script>
<template>
   <section class="container">
      <h3 class="section-title">PRODUCT KAMI</h3>
      <h2 class="section-subtitle">Hight Quality</h2>
      <div class="h-1 w-20 mt-6 bg-blue-700"></div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-8">
         <div class="bg-white card-shadow rounded-3xl transition-all shadow-xl shadow-gray-100" v-for="product in products" :key="product">
            <div class="p-6 flex flex-col md:flex-row gap-4 md:gap-8 md:items-center">
               <img class="w-full md:w-40 h-60 sm:h-72 md:h-40 object-cover rounded-2xl" :src="'/images/' + product.image" alt="Product Gorong gorong" />
               <div>
                  <h4 class="text-2xl font-bold mb-4">{{ product.title }}</h4>
                  <NuxtLink to="/products" class="text-red-500 text-lg font-bold group">Liat <i class="ai-chevron-right group-hover:pl-1 transition-all duration-300"></i></NuxtLink>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
