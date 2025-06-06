<template>
  <div class="col-span-4 bg-white rounded-lg border border-gray-200 p-4 flex flex-col">
    <div class="flex items-center gap-4 mb-4">
      <div class="flex items-center gap-1 text-green-600">
        <i-lucide:clock />
        <span>{{ city }}, {{ country }}</span>
      </div>
    </div>

    <div class="flex items-center justify-between gap-5">
      <div>
        <div class="text-gray-600">{{ dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)}}</div>
        <div class="text-sm text-gray-500">{{ formattedDate }}</div>

        <div class="mt-4 flex items-end">
          <span class="text-4xl font-semibold">{{ weather.temp }}° C</span>
        </div>

        <div class="mt-2 text-sm text-gray-500">Max: {{ weather.max }}° Min: {{ weather.min }}°</div>
      </div>

      <div class="flex flex-col items-center">
        <div class="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
          <i-lucide:sun class="h-12 w-12 text-yellow-400" />
        </div>
        <span class="font-medium">{{ weather.description }}</span>
        <span class="text-sm text-gray-500">Sensación {{ weather.feels_like }}°</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const city = 'Huancayo'
const country = 'Perú'
const weather = ref({
  temp: 0,
  max: 0,
  min: 0,
  feels_like: 0,
  description: ''
})

const dayOfWeek = new Intl.DateTimeFormat('es-PE', { weekday: 'long' }).format(new Date())
const formattedDate = new Intl.DateTimeFormat('es-PE', {
  day: '2-digit',
  month: 'short',
  year: 'numeric'
}).format(new Date())

const fetchWeather = async () => {
  const apiKey = 'a85fdc39ec56d7804c58c87136ac0cb4' // Reemplaza esto por tu clave de OpenWeatherMap
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=lima,PE&units=metric&lang=es&appid=${apiKey}`)
  const data = await response.json()

  weather.value = {
    temp: Math.round(data.main.temp),
    max: Math.round(data.main.temp_max),
    min: Math.round(data.main.temp_min),
    feels_like: Math.round(data.main.feels_like),
    description: data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)
  }
}

onMounted(fetchWeather)
</script>
