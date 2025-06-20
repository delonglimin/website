<template>
  <div class="container mx-auto px-4 py-12">
    <div class="text-3xl md:text-4xl font-bold text-center mb-8 ">{{catagoryName}}</div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        class="border-block bg-block magic-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-6"
        v-for="(item, index) in services" 
        :key="index"
      >
        <div class="flex justify-center mb-4">
          <div class="  flex items-center justify-center">
            <img :src="item.icon" :alt="item.title" class="w-20 h-20" />
          </div>
        </div>
        <h3 class="text-xl font-semibold mb-3 text-center">{{ item.title }}</h3>
        <p class="text-center leading-relaxed">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const catagoryName = ref('其他服务');
// 服务数据
const services = ref([
  {
    title: '地图标注',
    description: '百度、高德、腾讯三大地图厂商标注服务',
    icon: '/1.svg'
  },
  {
    title: '网络推广',
    description: '提供网络营销，推广服务，让客户来找您',
    icon: '/1.svg'
  },
  {
    title: '软件服务',
    description: '资源下载，电脑手机一系列和软件相关的问题',
    icon: '/1.svg'
  },
  {
    title: '网店咨询',
    description: '国内以及境外电商网店开通服务咨询',
    icon: '/1.svg'
  },
  {
    title: 'chatgpt',
    description: '提供chatgpt接入服务，让工作效率快到飞起',
    icon: '/1.svg'
  },
  {
    title: '软件工具',
    description: '音乐下载，视频下载，去水印，音频合成，数字人等一系列提效工具',
    icon: '/1.svg'
  },
  {
    title: '数据分析',
    description: '专业的数据统计和分析服务，提供决策支持',
    icon: '/1.svg'
  },
  {
    title: '技术咨询',
    description: '提供专业的IT技术咨询和解决方案',
    icon: '/1.svg'
  }
]);
</script>

<style scoped>
/* 可选：添加自定义样式或覆盖Tailwind默认值 */
</style>
    