<template>
  <div class="flex flex-col h-screen w-full font-sans">
    <header class="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md z-10 shrink-0">
         <div class="font-bold text-xl tracking-tight">ThinkPool App</div>
         <nav>
            <span class="text-gray-300 text-sm">Welcome</span>
         </nav>
    </header>
    <div class="flex flex-1 overflow-hidden">
        <aside class="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
          <div class="p-4 uppercase text-xs font-semibold text-gray-500 tracking-wider">
            Menu
          </div>
          <nav class="flex-1 px-2 space-y-1">
             <nuxt-link to="/" exact class="block px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:bg-gray-200 hover:text-gray-900" exact-active-class="!bg-blue-600 !text-white">
               Home
             </nuxt-link>
             <nuxt-link to="/project1" class="block px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:bg-gray-200 hover:text-gray-900" active-class="!bg-blue-600 !text-white">
               Project 1
             </nuxt-link>
             <nuxt-link to="/project2" class="block px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:bg-gray-200 hover:text-gray-900" active-class="!bg-blue-600 !text-white">
               Project 2
             </nuxt-link>
             <nuxt-link to="/project3" class="block px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:bg-gray-200 hover:text-gray-900" active-class="!bg-blue-600 !text-white">
               Project 3
             </nuxt-link>
          </nav>
        </aside>
        <main class="flex-1 overflow-y-auto bg-white p-8">
           <nuxt />
        </main>
    </div>
    <footer class="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-500 shrink-0">
        &copy; 2026 ThinkPool Project. All rights reserved.
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
