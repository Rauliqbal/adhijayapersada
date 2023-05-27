<script setup>
const products = [
   {
      title: "Hot Dip Galvanize",
      url: "/products",
      image: "hotdip-galvanize.jpg",
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
   {
      title: "Tiang PJU",
      url: "/products",
      image: "tiang-pju.jpg ",
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
            delay: 2000,
            disableOnInteraction: true,
         }"
         :breakpoints="{
            768: {
               slidesPerView: 2,
            },
         }"
      >
         <SwiperSlide class="pb-8" v-for="product in products" :key="product">
            <div class="relative rounded-3xl overflow-hidden group">
               <img class="group-hover:blur-sm transition duration-200 ease-out" :src="'/images/' + product.image" alt="" />
               <div class="absolute inset-0 group-hover:bg-black/30 p-8 flex items-end transition duration-300 ease-out">
                  <div class="translate-y-[32rem] group-hover:translate-y-0 transition duration-300 ease-in-out">
                     <h4 class="text-white text-3xl font-semibold">{{ product.title }}</h4>
                     <NuxtLink to="/products" class="mt-4 text-red-600 text-lg font-bold group/btn">Liat Produk<i class="ai-chevron-right group-hover/btn:pl-1 transition-all duration-300"></i></NuxtLink>
                  </div>
               </div>
            </div>
         </SwiperSlide>
      </Swiper>
   </section>
</template>
