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

    <div ref="lineChart" class="w-full h-64"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const lineChart = ref<HTMLElement | null>(null);

onMounted(() => {
  // Initialize Line Chart
  if (lineChart.value) {
    const chart = echarts.init(lineChart.value);

    const option = {
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value}',
        },
      },
      series: [
        {
          name: 'Yield',
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 3,
            color: '#4CAF50',
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(76, 175, 80, 0.3)',
                },
                {
                  offset: 1,
                  color: 'rgba(76, 175, 80, 0.1)',
                },
              ],
            },
          },
          data: [100, 200, 300, 250, 420, 380, 350, 400, 380],
          markPoint: {
            data: [
              {
                name: 'Max',
                value: 420,
                coord: [4, 420],
                symbolSize: 40,
                itemStyle: {
                  color: '#333',
                },
                label: {
                  formatter: '420T',
                },
              },
            ],
          },
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
