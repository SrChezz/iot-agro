<template>
  <div class="dashboard p-6 bg-gray-100 min-h-screen">
    <h1 class="text-2xl font-bold mb-6 text-center text-gray-800 ">Analytics Dashboard</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Gráfico de barras -->
      <div class="bg-white  rounded-lg shadow-md p-4">
        <h2 class="text-lg font-semibold mb-2 text-gray-700 ">Revenue by Category</h2>
        <v-chart class="chart" :option="barChartOption" autoresize />
      </div>
      
      <!-- Gauge -->
      <div class="bg-white  rounded-lg shadow-md p-4">
        <h2 class="text-lg font-semibold mb-2 text-gray-700 ">Performance Score</h2>
        <v-chart class="chart" :option="gaugeOption" autoresize />
      </div>
      
      <!-- Heatmap -->
      <div class="bg-white  rounded-lg shadow-md p-4 col-span-1 md:col-span-2 lg:col-span-3">
        <h2 class="text-lg font-semibold mb-2 text-gray-700 ">User Activity by Hour & Day</h2>
        <v-chart class="chart-wide" :option="heatmapOption" autoresize />
      </div>
      
      <!-- Pie Chart (Tu gráfico original) -->
      <div class="bg-white rounded-lg shadow-md p-4 col-span-1 md:col-span-2 lg:col-span-3">
        <h2 class="text-lg font-semibold mb-2 text-gray-700">Traffic Sources</h2>
        <v-chart class="chart" :option="pieChartOption" autoresize />
      </div>
    </div>
  </div>
</template>

<script setup>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart, PieChart, GaugeChart, HeatmapChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DataZoomComponent,
  VisualMapComponent
} from 'echarts/components';
import VChart from 'vue-echarts';
import { ref, provide } from 'vue';

// Registrar componentes necesarios de ECharts
use([
  CanvasRenderer,
  BarChart,
  PieChart,
  GaugeChart,
  HeatmapChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DataZoomComponent,
  VisualMapComponent
]);

//

// Datos para gráfico de barras
const barChartOption = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    axisLabel: {
      rotate: 30
    }
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Revenue',
      type: 'bar',
      data: [320, 332, 301, 334, 390, 330],
      itemStyle: {
        color: '#91cc75'
      }
    }
  ]
});

// Datos para gráfico gauge
const gaugeOption = ref({
  series: [
    {
      type: 'gauge',
      progress: {
        show: true,
        width: 18
      },
      axisLine: {
        lineStyle: {
          width: 18
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        length: 15,
        lineStyle: {
          width: 2,
          color: '#999'
        }
      },
      axisLabel: {
        distance: 25,
        color: '#999',
        fontSize: 12
      },
      anchor: {
        show: true,
        showAbove: true,
        size: 25,
        itemStyle: {
          borderWidth: 10
        }
      },
      title: {
        show: true,
        fontSize: 14
      },
      detail: {
        valueAnimation: true,
        fontSize: 30,
        offsetCenter: [0, '70%']
      },
      data: [
        {
          value: 70,
          name: 'Performance'
        }
      ]
    }
  ]
});

// Datos para heatmap
const heatmapOption = ref({
  tooltip: {
    position: 'top'
  },
  grid: {
    top: '12%',
    left: '3%',
    right: '10%',
    bottom: '10%'
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    splitArea: {
      show: true
    }
  },
  yAxis: {
    type: 'category',
    data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
    splitArea: {
      show: true
    }
  },
  visualMap: {
    min: 0,
    max: 100,
    calculable: true,
    orient: 'horizontal',
    left: 'center',
    bottom: '0%',
    inRange: {
      color: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127']
    }
  },
  series: [{
    name: 'User Activity',
    type: 'heatmap',
    data: [
      // Coordenadas: [x, y, valor]
      [0, 0, 10], [0, 1, 19], [0, 2, 35], [0, 3, 42], [0, 4, 67], [0, 5, 20],
      [1, 0, 15], [1, 1, 22], [1, 2, 38], [1, 3, 44], [1, 4, 65], [1, 5, 25],
      [2, 0, 12], [2, 1, 25], [2, 2, 40], [2, 3, 47], [2, 4, 70], [2, 5, 30],
      [3, 0, 18], [3, 1, 28], [3, 2, 45], [3, 3, 52], [3, 4, 75], [3, 5, 35],
      [4, 0, 20], [4, 1, 30], [4, 2, 48], [4, 3, 55], [4, 4, 80], [4, 5, 40],
      [5, 0, 25], [5, 1, 35], [5, 2, 50], [5, 3, 58], [5, 4, 82], [5, 5, 45],
      [6, 0, 15], [6, 1, 25], [6, 2, 30], [6, 3, 48], [6, 4, 55], [6, 5, 25]
    ],
    label: {
      show: false
    },
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }]
});

// Tu gráfico original de pie
const pieChartOption = ref({
  title: {
    text: 'Traffic Sources',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    orient: 'horizontal',
    bottom: 'bottom',
    data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
  },
  series: [
    {
      name: 'Traffic Sources',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: [
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 234, name: 'Ad Networks' },
        { value: 135, name: 'Video Ads' },
        { value: 1548, name: 'Search Engines' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
});
</script>

<style scoped>
.dashboard {
  font-family: 'Inter', sans-serif;
}

.chart {
  height: 300px;
}

.chart-wide {
  height: 400px;
}
</style>