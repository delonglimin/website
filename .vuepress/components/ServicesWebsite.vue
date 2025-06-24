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

const catagoryName = ref('网站业务');
// 服务数据
const services = ref([
  {
    title: '网站开发',
    description: '企业网站建设，形象建设',
    icon: '/1.svg'
  },
  {
    title: '网站维护',
    description: '服务器、网站代维护',
    icon: '/1.svg'
  },
  {
    title: '网站优化',
    description: 'seo.咨询，网站排名、体验、速度优化',
    icon: '/1.svg'
  },
]);
</script>

<style scoped>
/* 可选：添加自定义样式或覆盖Tailwind默认值 */
</style>
    