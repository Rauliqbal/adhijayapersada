<script setup>
const abouts = [
   {
      title: "Profil",
      url: "/about",
   },
   {
      title: "Visi & Misi",
      url: "/about#visi-misi",
   },
];

const products = [
   {
      title: "Hot Dip Galvanize",
      url: "hot-dip-galvanize",
   },
   {
      title: "Steel Grating",
      url: "steel-grating",
   },
   {
      title: "Guardrail Steel",
      url: "guardrail-steel",
   },
   {
      title: "Corrugated Steel",
      url: "corrugated-steel",
   },
   {
      title: "Tiang PJU",
      url: "tiang-pju",
   },
];

const contacts = [
   { title: "brian.sanadi78@gmail.com", url: "mailto:brian.sanadi78@gmail.com" },
   { title: "0813 8911 3001", url: "https://wa.me/+6281389113001?text= " },
   { title: "Jl. Markisa 2 Blok D9/19, Perum Telaga Murni, Kec. Cikarang Barat, Kab. Bekasi, Jawa Barat 17520", url: "https://goo.gl/maps/48VXRr2DYPhC7AVx9" },
];

const date = new Date();
</script>
<template>
   <footer>
      <div class="bg-white py-20">
         <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
               <div class="col-span-2">
                  <img class="w-48" src="~/assets/images/logo-ajp_wide.svg" alt="Adhi Jaya Persada supplier gorong gorong baja" />
                  <p class="paragraph mt-4"><span class="font-semibold">ADHI JAYA PERSADA</span> berkomitmen membangun reputasi yang nyata dengan menyediakan layanan profesional dan inovatif</p>

                  <div class="flex items-center gap-4 mt-6">
                     <a
                        href="https://www.instagram.com/ajp.trading78"
                        target="_blank"
                        class="flex items-center justify-center w-12 h-12 rounded-full text-blue-600 hover:text-white hover:bg-blue-600 bg-gray-200 p-4 transition duration-300 ease-out"
                     >
                        <i class="text-3xl ai-instagram-fill"></i>
                     </a>
                     <a
                        href="https://web.facebook.com/adhi.j.persada/"
                        target="_blank"
                        class="flex items-center justify-center w-12 h-12 rounded-full text-blue-600 hover:text-white hover:bg-blue-600 bg-gray-200 p-4 transition duration-300 ease-out"
                     >
                        <i class="text-3xl ai-facebook-fill"></i>
                     </a>
                  </div>
               </div>
               <div class="col-span-3">
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <!-- Tentang Kami -->
                     <div>
                        <h4 class="text-xl font-semibold text-red-600">Tentang</h4>
                        <ul class="mt-4 inline-flex flex-col gap-4">
                           <li class="text-gray-500 hover:text-red-800 font-medium transition duration-200 ease-out" v-for="about in abouts" :key="about">
                              <NuxtLink :to="about.url">{{ about.title }}</NuxtLink>
                           </li>
                        </ul>
                     </div>

                     <!-- Produk Kami -->
                     <div>
                        <h4 class="text-xl font-semibold text-red-600">Produk</h4>
                        <ul class="mt-4 inline-flex flex-col gap-4">
                           <li v-for="product in products" :key="product" class="text-gray-500 hover:text-red-800 font-medium transition duration-200 ease-out">
                              <NuxtLink :to="/products/ + product.url">{{ product.title }}</NuxtLink>
                           </li>
                        </ul>
                     </div>

                     <!-- Kontak Kami-->
                     <div>
                        <h4 class="text-xl font-semibold text-red-600">Tentang Kami</h4>
                        <ul class="mt-4 inline-flex flex-col gap-4">
                           <li v-for="contact in contacts" :key="contact" class="text-gray-500 hover:text-red-800 font-medium transition duration-200 ease-out">
                              <a :href="contact.url" target="_blank">{{ contact.title }}</a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="py-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-center">
         <h4 class="font-medium text-white text-sm md:text-base">Copyright &#169; 2018 - {{ date.getFullYear() }} • All rights reserved</h4>
      </div>
   </footer>
</template>
