<script setup>
function showHide() {
   document.getElementById("hamburger").checked = false;
}

const links = [
   {
      title: "Home",
      url: "/",
   },
   {
      title: "Produk",
      url: "/products",
   },
   {
      title: "Tentang Kami",
      url: "/about",
   },
   {
      title: "Contact",
      url: "/contact",
   },
];
</script>

<template>
   <nav class="fixed inset-x-0 top-0 z-30 py-4 md:py-6 bg-white shadow-md">
      <div class="container">
         <div class="flex items-center justify-between">
            <div class="relative">
               <NuxtLink to="/">
                  <img class="h-8 hidden lg:block" src="~/assets/images/logo-ajp_wide.svg" alt="Kami menyediakan semua produk baja galvanis" />
                  <img class="w-16 lg:hidden" src="~/assets/images/logo-ajp_square.svg" alt="Kami menyediakan semua produk baja galvanis" />
               </NuxtLink>
            </div>
            <div class="flex items-center">
               <input type="checkbox" class="peer hidden" name="hamburger" id="hamburger" />
               <label for="hamburger" class="peer-checked:hamburger z-50 p-4 block cursor-pointer md:hidden">
                  <span class="transition duration-200 inline-block w-7 h-1 bg-black rounded-xl after:rounded-xl before:rounded-xl"></span>
               </label>
               <div @click="showHide" class="z-30 absolute inset-0 h-screen bg-gray-900/30 backdrop-blur-sm opacity-0 hidden peer-checked:opacity-100 peer-checked:block transition-all duration-300 md:peer-checked:hidden"></div>
               <div class="peer-checked:translate-x-0 w-72 fixed top-0 right-0 bottom-0 translate-x-full transition duration-300 md:w-auto md:static md:translate-x-0 z-40 ease-out">
                  <div class="flex flex-col md:items-center md:flex-row h-full">
                     <ul class="bg-white flex px-7 pt-28 md:pb-0 pb-[38rem] space-y-8 md:px-0 md:space-y-0 flex-col md:flex-row md:space-x-12 md:pt-0">
                        <li v-for="link in links" :key="link">
                           <NuxtLink @click="showHide" class="capitalize font-semibold tracking-wide hover:text-blue-700 transition ease-out duration-200 text-gray-500" :to="link.url">{{ link.title }}</NuxtLink>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </nav>
</template>

<style>
#hamburger ~ label span::after,
#hamburger ~ label span::before {
   background: #000;
   transition-delay: 0.2s, 0s;
   transition-duration: 0.1s;
   transition-property: margin, transform;
   content: "";
   position: absolute;
   width: 28px;
   height: 4px;
}

#hamburger ~ label span::after {
   margin-top: 10px;
}

#hamburger ~ label span::before {
   margin-top: -10px;
}

#hamburger:checked ~ label span {
   background-color: transparent;
}

#hamburger:checked ~ label span:before,
#hamburger:checked ~ label span:after {
   transition-delay: 0s, 0.2s;
   margin-top: 0;
}

#hamburger:checked ~ label span:before {
   transform: rotate(45deg);
}

#hamburger:checked ~ label span:after {
   transform: rotate(-45deg);
}
</style>
