<template>
  <div class="col-span-4 bg-white rounded-lg border border-gray-200 p-4">
    <div class="flex justify-between items-center mb-4">
      <h3 class="font-semibold text-lg">
        <i-lucide:coins class="text-yellow-500 inline" /> Ubicación del análisis
      </h3>

      <!-- <div class="border rounded-md px-3 py-1 flex items-center gap-1">
        <span class="text-sm">Anual</span>
        <i-icon-park-outline:down class="text-gray-400 cursor-pointer" />
      </div> -->
    </div>

    <div class="flex flex-col items-center w-full h-10/12">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9911.231724830825!2d-75.26028740525264!3d-11.941216998037305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910eb9503c304a93%3A0xa77fbe833de9415!2sQuilcas!5e0!3m2!1ses!2spe!4v1749160006589!5m2!1ses!2spe" className="h-full w-full rounded-sm" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
