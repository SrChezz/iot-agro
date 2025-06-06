<template>
    <div class="col-span-6 bg-white rounded-lg border border-gray-200 p-4">
      <div class="flex justify-between items-center mb-4">
        <h3 class="font-semibold text-lg">Tabla de datos de sensores</h3>
  
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
  
      <!-- Scroll horizontal y vertical -->
      <div class="overflow-auto max-h-[300px]">
        <table class="min-w-full text-sm border">
          <thead class="bg-gray-100 text-left sticky top-0 z-10">
            <tr>
              <th class="p-2 border bg-gray-100">Fecha</th>
              <th class="p-2 border bg-gray-100">Hora</th>
              <th class="p-2 border bg-gray-100">pH</th>
              <th class="p-2 border bg-gray-100">Humedad (%)</th>
              <th class="p-2 border bg-gray-100">Temperatura (°C)</th>
              <th class="p-2 border bg-gray-100">N</th>
              <th class="p-2 border bg-gray-100">P</th>
              <th class="p-2 border bg-gray-100">K</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in limitedData" :key="index">
              <td class="p-2 border">{{ formatDateToDDMMYYYY(row.date) }}</td>
              <td class="p-2 border">{{ row.time }}</td>
              <td class="p-2 border">{{ row.ph }}</td>
              <td class="p-2 border">{{ row.rh }}</td>
              <td class="p-2 border">{{ row.temperature }}</td>
              <td class="p-2 border">{{ row.n }}</td>
              <td class="p-2 border">{{ row.p }}</td>
              <td class="p-2 border">{{ row.k }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  
  <script setup lang="ts">
  import { ref, onMounted, watch, defineProps, computed } from 'vue';
  
  const props = defineProps<{
    jsonPath: string;
  }>();
  
  const data = ref<any[]>([]);
  const recordLimit = ref(500);
  
  // Computed para limitar los datos según el selector
  const limitedData = computed(() => data.value.slice(0, recordLimit.value));
  
  const formatDateToDDMMYYYY = (dateStr: string) => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  
  const fetchData = async () => {
    try {
      const response = await fetch(props.jsonPath);
      const json = await response.json();
      data.value = json;
    } catch (error) {
      console.error('Error al cargar el JSON:', error);
    }
  };
  
  onMounted(fetchData);
  watch(() => props.jsonPath, fetchData);
  </script>
  