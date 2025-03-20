<template>
  <div class="w-64 bg-white border-r border-gray-200">
    <div class="p-4 flex items-center gap-2">
      <i-material-symbols-agriculture
        class="w-8 h-8 rounded-md bg-green-500 flex items-center justify-center text-white p-1"
      />
      <span class="text-lg font-semibold">Agro & IoT</span>
    </div>

    <div class="mt-4 px-2">
      <div class="relative">
        <input
          type="text"
          placeholder="Search menu..."
          class="w-full pl-8 pr-4 py-2 text-sm bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-gray-400 absolute left-2.5 top-2.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
    </div>

    <nav class="mt-6">
      <div class="px-2">
        <div
          class="bg-green-50 text-green-700 rounded-md px-3 py-2 flex items-center gap-3"
        >
          <i-gala:menu-left />
          <span class="font-medium">Dashboard</span>
        </div>

        <div
          v-for="(item, index) in menuItems"
          :key="index"
          class="text-gray-600 hover:bg-gray-100 rounded-md px-3 py-2 mt-1 flex items-center gap-3 cursor-point"
        >
          <i-lucide:dot />

          <span>{{ item.name }}</span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
const menuItems = [
  { name: 'Clima' },
  { name: 'Analisis de cultivos' },
  { name: 'Gráficos' },
  { name: 'Reportes Mensuales' },
  { name: 'Estado' },
];
</script>
