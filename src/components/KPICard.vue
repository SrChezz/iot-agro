<template>
  <!-- Single Metric Card -->
  <div class="bg-white rounded-lg border border-gray-200 p-4 w-1/3">
    <div class="flex justify-between items-start">
      <div>
        <div class="flex items-center gap-1 text-gray-500 text-sm">
          <span>{{ title }}</span>
          <!-- <i-lucide:info class="text-gray-500 cursor-pointer" /> -->
        </div>
        <div class="mt-2 text-2xl font-semibold">{{ value }}</div>
        <div class="mt-1 text-sm text-green-600">{{ subtitle }}</div>
      </div>

      <div
        class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center"
      >
        <i-lucide:map-pin class="text-green-600" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MetricCard',
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
