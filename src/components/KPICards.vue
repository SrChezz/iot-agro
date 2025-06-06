<script setup lang="ts">
import TheTableChart from './TheTableChart.vue';

</script>

<template>
  <!-- Metrics Cards -->
  <div class="col-span-6 row-span-2 space-y-6">
    <h2 class="text-2xl font-semibold flex items-center gap-2">
      Parcela buena <span class="text-yellow-400">🌾</span>
    </h2>

    <div class="flex gap-6">
      <KPICard title="Registros" value="3.233K" /><KPICard
        title="PH Promedio"
        value="8.74"
      /><KPICard title="RH Promedio" value="0.29" />
    </div>
    <!-- Total Land Area -->
    <TheLineChart jsonPath="/public/csvjsonbuenadata.json"/>
    <TheTableChart jsonPath="/public/csvjsonbuenadata.json"/>
  </div>
</template>
