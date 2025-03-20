<template>
  <div class="col-span-4 bg-white rounded-lg border border-gray-200 p-4">
    <div class="flex items-center gap-2 mb-4">
      <div class="flex items-center gap-1 text-green-600">
        <i-lucide:clock />
        <span>Huancayo, Perú</span>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div>
        <div class="text-gray-600">Jueves</div>
        <div class="text-sm text-gray-500">20 Mar, 2025</div>

        <div class="mt-4 flex items-end">
          <span class="text-4xl font-semibold">28° C</span>
        </div>

        <div class="mt-2 text-sm text-gray-500">Max: 32° Min: 12°</div>
      </div>

      <div class="flex flex-col items-center">
        <div
          class="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-2"
        >
          <i-lucide:sun class="h-12 w-12 text-yellow-400" />
        </div>
        <span class="font-medium">Soleado</span>
        <span class="text-sm text-gray-500">Sensación 31°</span>
      </div>
    </div>
  </div>
</template>
