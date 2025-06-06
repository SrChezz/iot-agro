<template>
  <header
    class="bg-white border-b border-gray-200 px-6 py-3 flex justify-between items-center"
  >
  <div class="p-4 flex items-center gap-2">
      <i-material-symbols-agriculture
        class="w-8 h-8 rounded-md bg-green-500 flex items-center justify-center text-white p-1"
      />
      <span class="text-lg font-semibold">Agro & IoT</span>
    </div>

    <div class="flex items-center gap-4">
      <button class="p-2 rounded-full hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-gray-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      </button>

      <div class="flex items-center gap-2 border rounded-md px-2 py-1">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          class="w-8 h-8 rounded-full"
        />
        <div>
          <div class="text-sm font-medium">Braulio Ortega</div>
          <div class="text-xs text-gray-500">braulio@gmail.com</div>
        </div>
        <i-icon-park-outline:down class="text-gray-400 cursor-pointer" />
      </div>
    </div>
  </header>
</template>
