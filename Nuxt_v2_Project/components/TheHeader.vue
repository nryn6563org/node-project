<template>
  <header class="bg-white shadow">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center">
        <NuxtLink to="/" class="text-xl font-bold text-gray-800 hover:text-blue-600 transition duration-300">
          Nuxt Project
        </NuxtLink>
      </div>
      <nav>
        <ul class="flex space-x-6">
          <li>
            <NuxtLink to="/" class="text-gray-600 hover:text-blue-600 transition duration-300">
              Home
            </NuxtLink>
          </li>
          <li>
            <a href="#" class="text-gray-600 hover:text-blue-600 transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-600 hover:text-blue-600 transition duration-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>
