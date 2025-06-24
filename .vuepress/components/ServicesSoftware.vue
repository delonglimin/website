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

const catagoryName = ref('软件业务');
// 服务数据
const services = ref([
  {
    title: 'app开发',
    description: 'app定制，app开发，支持uniapp，flutter 原生3种技术方案',
    icon: '/3.svg'
  },
  {
    title: '小程序开发',
    description: '小程序开发，微信小程序，抖音小程序，支持跨端多平台方案',
    icon: '/3.svg'
  },
  {
    title: '系统开发',
    description: '教育、视频、娱乐需求发布等各种系统，软件，工具定制，二次开发，从零开发',
    icon: '/3.svg'
  },
  {
    title: '系统运维',
    description: '系统、服务器代运维',
    icon: '/3.svg'
  },
  {
    title: '系统集成',
    description: 'OA系统、ERP系统、CRM等系统集成',
    icon: '/3.svg'
  },
  {
    title: '系统对接',
    description: '浪潮、金蝶、用友等各大厂商系统对接',
    icon: '/3.svg'
  }
  
]);
</script>

<style scoped>
/* 可选：添加自定义样式或覆盖Tailwind默认值 */
</style>
    