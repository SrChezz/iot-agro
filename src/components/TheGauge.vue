<template>
  <div class="col-span-8 bg-white rounded-lg border border-gray-200 p-4">
    <div class="flex justify-between items-center mb-4">
      <h3 class="font-semibold text-lg">
        <i-lucide:coins class="text-yellow-500 inline" /> Puntaje
      </h3>

      <div class="border rounded-md px-3 py-1 flex items-center gap-1">
        <span class="text-sm">Anual</span>
        <i-icon-park-outline:down class="text-gray-400 cursor-pointer" />
      </div>
    </div>

    <div class="flex flex-col items-center">
      <div ref="gaugeChart" class="w-full h-40"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const gaugeChart = ref<HTMLElement | null>(null);

onMounted(() => {
  // Initialize Gauge Chart
  if (gaugeChart.value) {
    const chart = echarts.init(gaugeChart.value);

    const option = {
      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 1500,
          radius: '100%',
          center: ['50%', '60%'],
          progress: {
            show: true,
            width: 30,
          },
          pointer: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              width: 30,
              color: [
                [0.3, '#5B8FF9'],
                [0.5, '#9F7BE1'],
                [1, '#4CAF50'],
              ],
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          detail: {
            valueAnimation: true,
            fontSize: 24,
            offsetCenter: [0, '20%'],
            formatter: '{value} Tons',
            color: '#333',
          },
          data: [
            {
              value: 1000,
            },
          ],
        },
      ],
    };

    chart.setOption(option);

    // Handle window resize
    window.addEventListener('resize', () => {
      chart.resize();
    });
  }
});
</script>
