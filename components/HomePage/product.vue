<script setup>
const products = [
   {
      title: "Hot Dip Galvanize",
      url: "hot-dip-galvanize",
      image: "hotdip-galvanize.jpeg",
   },
   {
      title: "Steel Grating",
      url: "steel-grating",
      image: "steel-grating.jpeg",
   },
   {
      title: "Guardrail way Steel",
      url: "guardrail-steel",
      image: "guard-rail.jpeg ",
   },
   {
      title: "Corrugated Steel / Aramco",
      url: "corrugated-steel",
      image: "aramco.jpeg ",
   },
   {
      title: "Tiang PJU",
      url: "/products",
      image: "tiang-pju.jpeg ",
   },
];
</script>
<template>
   <section class="container">
      <h3 class="section-title">PRODUCT KAMI</h3>
      <h2 class="section-subtitle">Hight Quality</h2>
      <div class="h-1 w-20 mt-6 bg-blue-700"></div>

      <Swiper
         class="mySwiper mt-8"
         :pagination="{
            clickable: true,
         }"
         :slides-per-view="'1'"
         :loop="true"
         :space-between="'32'"
         :modules="[SwiperPagination, SwiperAutoplay]"
         :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
         }"
         :breakpoints="{
            768: {
               slidesPerView: 2,
            },
         }"
      >
         <SwiperSlide class="pb-10" v-for="product in products" :key="product">
            <div class="relative rounded-3xl overflow-hidden group">
               <img class="group-hover:blur-sm transition duration-200 ease-out" :src="'/images/' + product.image" alt="" />
               <div class="absolute inset-0 group-hover:bg-black/30 p-4 md:p-8 flex items-end transition duration-300 ease-out">
                  <div class="translate-y-[32rem] group-hover:translate-y-0 transition duration-300 ease-in-out">
                     <h4 class="text-white text-2xl md:text-3xl font-semibold">{{ product.title }}</h4>
                     <NuxtLink :to="'/products/' + product.url" class="mt-4 text-red-500 text-lg font-bold group/btn">Lihat Produk<i class="ai-chevron-right group-hover/btn:pl-1 transition-all duration-300"></i></NuxtLink>
                  </div>
               </div>
            </div>
         </SwiperSlide>
      </Swiper>
   </section>
</template>
