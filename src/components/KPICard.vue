<template>
  <!-- Single Metric Card -->
  <div class="bg-white rounded-lg border border-gray-200 p-4">
    <div class="flex justify-between items-start">
      <div>
        <div class="flex items-center gap-1 text-gray-500 text-sm">
          <span>Area total</span>
          <i-lucide:info class="text-gray-500 cursor-pointer" />
        </div>
        <div class="mt-2 text-2xl font-semibold">1200 ha</div>
        <div class="mt-1 text-sm text-green-600">+16% sobre el último mes</div>
      </div>

      <div
        class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center"
      >
        <i-lucide:map-pin class="text-green-600" />
      </div>
    </div>
  </div>
</template>
