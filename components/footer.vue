<script setup>
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

const contacts = ["brian.sanadi78@gmail.com", "0813 8911 3001", "Jl. Markisa 2 Blok D9/19, Perum Telaga Murni, Kec. Cikarang Barat, Kab. Bekasi, Jawa Barat 17520"];

const date = new Date();
</script>
<template>
   <footer>
      <div class="bg-white py-20">
         <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
               <div class="col-span-2">
                  <img class="w-48" src="~/assets/images/logo-ajp_wide.png" alt="Adhi Jaya Persada supplier gorong gorong baja" />
                  <p class="paragraph mt-4"><span class="font-semibold">ADHI JAYA PERSADA</span> berkomitmen membangun reputasi yang nyata dengan menyediakan layanan profesional dan inovatif</p>
               </div>
               <div class="col-span-3">
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <!-- Tentang Kami -->
                     <div>
                        <h4 class="text-xl font-semibold text-blue-700">Tentang</h4>
                        <ul class="mt-4 inline-flex flex-col gap-4">
                           <li class="text-gray-500 hover:text-red-600 font-medium transition duration-200 ease-out"><a href="about">Profile</a></li>
                           <li class="text-gray-500 hover:text-red-600 font-medium transition duration-200 ease-out"><a href="">Visi & Misi</a></li>
                           <li class="text-gray-500 hover:text-red-600 font-medium transition duration-200 ease-out"><a href="">Sertifikat / Legalitas</a></li>
                        </ul>
                     </div>

                     <!-- Produk Kami -->
                     <div>
                        <h4 class="text-xl font-semibold text-blue-700">Produk</h4>
                        <ul class="mt-4 inline-flex flex-col gap-4">
                           <li v-for="product in products" :key="product" class="text-gray-500 hover:text-red-600 font-medium transition duration-200 ease-out">
                              <NuxtLink :to="/products/ + product.url">{{ product.title }}</NuxtLink>
                           </li>
                        </ul>
                     </div>

                     <!-- Kontak Kami-->
                     <div>
                        <h4 class="text-xl font-semibold text-blue-700">Tentang Kami</h4>
                        <ul class="mt-4 inline-flex flex-col gap-4">
                           <li v-for="contact in contacts" :key="contact" class="text-gray-500 font-medium ease-out">
                              {{ contact }}
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="py-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-center">
         <h4 class="font-medium text-white">Copyright &#169; 2018 - {{ date.getFullYear() }} • All rights reserved</h4>
      </div>
   </footer>
</template>
