<template>
  <!-- Main Content -->
  <div class="flex-1 overflow-auto">
    <!-- Dashboard Content -->
    <div class="p-6">
      <!-- Welcome Section -->
      <div class="flex justify-between items-center mb-6">
        <div>
          <h2 class="text-2xl font-semibold flex items-center gap-2">
            ¡Buenos días! <span class="text-yellow-400">🌞</span>
          </h2>
          <p class="text-gray-600 mt-1">
            Optimiza tus cultivos con información en tiempo real
          </p>
        </div>

        <div class="flex items-center gap-3">
          <div class="border rounded-md px-3 py-1.5 flex items-center gap-2">
            <i-lucide:calendar class="text-gray-600" />
            <span>Nov, 2024</span>
            <i-icon-park-outline:down class="text-gray-400 cursor-pointer" />
          </div>

          <button
            class="bg-green-500 text-white px-4 py-1.5 rounded-md flex items-center gap-2"
          >
            <i-lucide:download />
            Export
          </button>
        </div>
      </div>

      <!-- Overview Section -->
      <div class="grid grid-cols-12 gap-6">
        <TheWeather />
        <TheGauge />
        <TheRadarChart />
      </div>

      <!-- Metrics and Charts Section -->
      <div class="grid grid-cols-12 gap-6 mt-6">
        <KPICards />

        <!-- Month Yield Analysis -->
        <div class="col-span-6 flex flex-col gap-6">
          <h2 class="text-2xl font-semibold flex items-center">
            Parcela mala <span class="text-yellow-400"> 🌾</span>
          </h2>
          <div class="flex gap-6">
            <KPICard title="Registros" value="3233" /><KPICard
              title="PH Promedio"
              value="8.07"
            /><KPICard title="RH Promedio" value="0.28" />
          </div>
          <!-- <TheBarChart />  -->
          <TheLineChart jsonPath="/csvjsonmaladata.json"/>
          <TheTableChart jsonPath="/csvjsonmaladata.json"/>
        </div>
      </div>

      <!-- Crop Statud Card -->
      <div class="grid grid-cols-12 gap-6">
        <StatusCard />
      </div>
    </div>
  </div>
</template>
