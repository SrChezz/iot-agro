<template>
  <div class="col-span-8 bg-white rounded-lg border border-gray-200 p-4">
    <div class="flex justify-between items-center mb-4">
      <h3 class="font-semibold text-lg">Análisis Mensual</h3>

      <div class="flex items-center gap-2">
        <div class="border rounded-md px-3 py-1 flex items-center gap-1">
          <span class="text-sm">Papas</span>
        </div>

        <div class="border rounded-md px-3 py-1 flex items-center gap-1">
          <span class="text-sm">2023</span>
          <i-icon-park-outline:down class="text-gray-400 cursor-pointer" />
        </div>
      </div>
    </div>

    <div ref="barChart" class="w-full h-64"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const barChart = ref<HTMLElement | null>(null);

onMounted(() => {
  // Initialize Line Chart
  if (barChart.value) {
    const chart = echarts.init(barChart.value);

    const option = {
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['product', '2015', '2016', '2017'],
          ['Matcha ', 43.3, 85.8, 93.7],
          ['Milk ', 83.1, 73.4, 55.1],
          ['Cheese ', 86.4, 65.2, 82.5],
          ['Walnut ', 72.4, 53.9, 39.1],
        ],
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
    };

    chart.setOption(option);

    // Handle window resize
    window.addEventListener('resize', () => {
      chart.resize();
    });
  }
});
</script>
