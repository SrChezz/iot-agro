<template>
  <div class="col-span-6 bg-white rounded-lg border border-gray-200 p-4">
    <div class="flex justify-between items-center mb-4">
      <h3 class="font-semibold text-lg">Media de nutrientes</h3>

      <div class="flex items-center gap-2">
        <div class="border rounded-md px-3 py-1 flex items-center gap-1">
          <span class="text-sm">Papas</span>
        </div>

        <!-- Selector de número de registros -->
        <div class="border rounded-md px-3 py-1 flex items-center gap-1">
          <span class="text-sm">Registros</span>
          <select v-model="recordLimit" class="text-sm bg-transparent outline-none">
            <option :value="100">100</option>
            <option :value="500">500</option>
            <option :value="1000">1000</option>
            <option :value="2000">2000</option>
            <option :value="3000">3000</option>
          </select>
        </div>
      </div>
    </div>

    <div ref="lineChart" class="w-full h-64"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, defineProps } from 'vue';
import * as echarts from 'echarts';
import { formatDateToDDMMYYYY } from '@/utils/formatDate';

const props = defineProps<{
  jsonPath: string;
}>();

const lineChart = ref<HTMLElement | null>(null);
const chartInstance = ref<echarts.ECharts | null>(null);
const recordLimit = ref(500); // Valor inicial

const fetchAndRenderChart = async () => {
  try {
    const response = await fetch(props.jsonPath);
    const data = await response.json();

    const slicedData = data.slice(0, recordLimit.value); // Limita los registros

    const months = slicedData.map((d: any, idx: number) => d.month || `${formatDateToDDMMYYYY(d.date)}`);
    const nValues = slicedData.map((d: any) => d.n);
    const pValues = slicedData.map((d: any) => d.p);
    const kValues = slicedData.map((d: any) => d.k);

    if (lineChart.value) {
      // Reutilizar instancia o crear nueva
      if (!chartInstance.value) {
        chartInstance.value = echarts.init(lineChart.value);
        window.addEventListener('resize', () => chartInstance.value?.resize());
      }

      const option = {
        tooltip: { trigger: 'axis' },
        legend: { data: ['N', 'P', 'K'] },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: { type: 'category', data: months },
        yAxis: { type: 'value' },
        series: [
          {
            name: 'N',
            type: 'line',
            data: nValues,
            smooth: false,
            lineStyle: { color: '#4CAF50', width: 2 },
          },
          {
            name: 'P',
            type: 'line',
            data: pValues,
            smooth: false,
            lineStyle: { color: '#2196F3', width: 2 },
          },
          {
            name: 'K',
            type: 'line',
            data: kValues,
            smooth: false,
            lineStyle: { color: '#FFC107', width: 2 },
          },
        ],
      };

      chartInstance.value.setOption(option);
    }
  } catch (err) {
    console.error('Error al cargar el archivo JSON:', err);
  }
};

// Cargar gráfico inicial y reaccionar a cambios
onMounted(fetchAndRenderChart);
watch(() => props.jsonPath, fetchAndRenderChart);
watch(recordLimit, fetchAndRenderChart);
</script>
