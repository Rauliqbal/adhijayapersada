<script setup>
const catalogs = [
   {
      title: "Hot Dip Galvanize",
      url: "hot-dip-galvanize",
      image: "hotdip-galvanize.jpeg",
      class: "col-span-full md:col-span-2",
   },
   {
      title: "Steel Grating",
      url: "steel-grating",
      image: "steel-grating.jpeg",
      class: "col-span-full md:col-span-1",
   },
   {
      title: "Guardrail way Steel",
      url: "guardrail-steel",
      image: "guard-rail.jpeg ",
      class: "col-span-full md:col-span-1",
   },
   {
      title: "Corrugated Steel",
      url: "corrugated-steel",
      image: "aramco.jpeg ",
      class: "col-span-full md:col-span-1",
   },
   {
      title: "Tiang PJU",
      url: "tiang-pju",
      image: "tiang-pju.jpeg ",
      class: "col-span-full md:col-span-1",
   },
];
</script>
<template>
   <section class="container">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
         <NuxtLink :to="'/products/' + catalog.url" v-for="catalog in catalogs" :key="catalog" :class="'h-64 md:h-96 w-full rounded-3xl overflow-hidden group relative ' + catalog.class">
            <img class="w-full h-full object-cover group-hover:scale-110 transition-all duration-300" :src="'/images/' + catalog.image" alt="" />
            <div class="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-black to-transparent">
               <h4 class="text-xl font-semibold text-white">{{ catalog.title }}</h4>
               <div class="h-1 w-0 group-hover:w-20 transtion duration-300 ease-in-out mt-4 bg-red-700"></div>
            </div>
         </NuxtLink>
      </div>
   </section>
</template>
