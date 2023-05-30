<script setup>
const lists = [
   {
      title: "VISI",
      desc: "Menjadi suplier terbaik di Indonesia",
      image: "bg-[url('/images/visi.jpeg')]",
   },
   {
      title: "MISI",
      desc: "Melayani dengan hati, tepat waktu, dan di percaya",
      image: "bg-[url('/images/misi.jpeg')]",
   },
   {
      title: "MOTTO",
      desc: "Menjadi suplier yang bermanfaat untuk customer",
      image: "bg-[url('/images/motto.jpeg')]",
   },
];
</script>
<template>
   <section class="container">
      <h3 class="section-title">TENTANG KAMI</h3>
      <h2 class="section-subtitle">Adhi Jaya Persada</h2>
      <div class="h-1 w-20 mt-6 bg-blue-700"></div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 items-center">
         <div>
            <img class="rounded-3xl drop-shadow-xl" src="~/assets/images/about-image.png" alt="Adhi Jaya Persada, menyediakan semua produk baja galvanis" />
         </div>
         <div>
            <p class="paragraph">
               Gencarnya pembangunan infrastruktur di Indonesia saat ini membutuhkan material/bahan baku yang sangat besar volumenya. Hampir setiap pembangunan proyek baru membutuhkan material dasar seperti semen, besi, pasir, batu coral
               dan lain-lain.
            </p>
            <p class="paragraph mt-4">
               Menyikapi hal tersebut, kami tidak ingin kehilangan kesempatan dalam memperoleh benefit/keuntungan dari setiap proyek yang dikerjakan oleh pemerintah pusat, pemerintah daerah maupun pihak swasta. Meskipun tidak terjun
               langsung dari setiap proyek yang dikerjakan, kami berusaha hadir memenuhi setiap kebutuhan proyek, utamanya besi/baja galvanis dan sejenisnya.
            </p>
            <p class="paragraph mt-4">
               <span class="font-semibold">ADHI JAYA PERSADA </span>menyediakan hampir semua produk baja galvanis untuk kebutuhan proyek infrastruktur seperti Corrugated Steel (gorong-gorong), Hot Dip Galvanize, Steel Grating, Flex Beam
               Guard Rail dan lain-lain. Kami menjamin produk kami berkualitas dan tepat waktu dalam pengiriman.
            </p>
            <p class="paragraph mt-4"><span class="font-semibold">ADHI JAYA PERSADA berkomitmen</span> membangun reputasi yang nyata dengan menyediakan layanan profesional dan invatif untuk customer di seluruh Indonesia.</p>
         </div>
      </div>

      <div id="visi-misi" class="container mt-[120px] scroll-mt-32">
         <Swiper
            :pagination="{
               clickable: true,
            }"
            :slides-per-view="'1'"
            :loop="true"
            :space-between="'32'"
            :modules="[SwiperPagination, SwiperAutoplay]"
            :autoplay="{
               delay: 4000,
               disableOnInteraction: true,
            }"
         >
            <SwiperSlide v-for="list in lists" :key="list">
               <div :class="'h-80 bg-no-repeat bg-center bg-cover rounded-3xl overflow-hidden relative ' + list.image">
                  <div class="bg-gradient-to-t from-black to-black/40 absolute inset-0 flex flex-col justify-center items-center">
                     <h4 class="text-4xl lg:text-5xl text-white font-semibold">{{ list.title }}</h4>
                     <p class="paragraph text-white mt-2 md:mt-4 text-center px-2">{{ list.desc }}</p>
                  </div>
                  <div></div>
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   </section>
</template>
