<template>
  <!-- Potato Field -->
  <div
    class="col-span-12 bg-white rounded-lg border border-gray-200 overflow-hidden"
  >
    <div
      class="h-48 bg-cover bg-center"
      style="background-image: url('/parcel_bad.png')"
    ></div>

    <div class="p-4">
      <div class="flex justify-between items-center mb-4">
        <div class="flex items-center gap-1">
          <span class="font-medium">Cultivo de Papas</span>
        </div>

        <div class="flex items-center gap-1 text-sm text-gray-600">
          <span>Detalles</span>
          <i-lucide:info class="text-gray-500 cursor-pointer" />
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4">
        <div>
          <div class="text-sm text-gray-500">Estado</div>
          <div class="mt-1 flex items-center gap-1">
            <span class="w-2 h-2 rounded-full bg-green-500"></span>
            <span>Optimo</span>
          </div>
        </div>

        <div>
          <div class="text-sm text-gray-500">Fecha de Sembrado</div>
          <div class="mt-1">16 Feb, 2025</div>
        </div>

        <div>
          <div class="text-sm text-gray-500">Abono</div>
          <div class="mt-1 flex items-center gap-1">
            <span class="w-2 h-2 rounded-full bg-orange-500"></span>
            <span>Bajo</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
