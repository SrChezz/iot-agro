<template>
  <div class="col-span-4 bg-white rounded-lg border border-gray-200 p-4">
    <h3 class="font-semibold text-lg text-center">Status de Minerales</h3>
    <div ref="radarChart" class="w-full h-80"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const radarChart = ref<HTMLElement | null>(null);

onMounted(() => {
  // Initialize Line Chart
  if (radarChart.value) {
    const chart = echarts.init(radarChart.value);

    const option = {
      legend: {
        data: ['Lote A', 'Lote B'],
        padding: [5, 10],
        orient: 'horizontal',
        bottom: 0, // Posiciona la leyenda en la parte inferior
        left: 'center', // Centra la leyenda horizontalmente
      },
      radar: {
        // center: ['50%', '50%'], // Centra el radar en el contenedor
        radius: '65%', // Ajusta el tamaño del radar
        indicator: [
          { name: 'Nitrogeno', max: 6500 },
          { name: 'Fosforo', max: 16000 },
          { name: 'Potasio', max: 30000 },
          { name: 'Conductividad', max: 38000 },
          { name: 'Temperatura', max: 52000 },
          { name: 'PH', max: 25000 },
        ],
        splitArea: {
          areaStyle: {
            color: ['rgba(114, 172, 209, 0.1)', 'rgba(114, 172, 209, 0.2)'],
          },
        },
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: 'Lote A',
              lineStyle: {
                width: 2,
              },
              areaStyle: {
                opacity: 0.3,
              },
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: 'Lote B',
              lineStyle: {
                width: 2,
              },
              areaStyle: {
                opacity: 0.3,
              },
            },
          ],
        },
      ],
      color: ['#6366f1', '#86efac'],
      grid: {
        top: 80, // Espacio extra para el título
        bottom: 40, // Espacio extra para la leyenda
      },
    };

    chart.setOption(option);

    // Handle window resize
    window.addEventListener('resize', () => {
      chart.resize();
    });
  }
});
</script>
