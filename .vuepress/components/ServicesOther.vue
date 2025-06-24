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

const catagoryName = ref('人工智能AI');
// 服务数据
const services = ref([
  {
    title: 'RAG（检索增强生成）',
    description: '智能客服、知识问答、内容创作等场景',
    icon: '/2.svg'
  },
  {
    title: 'MCP',
    description: '结合自身业务，让AI更智能',
    icon: '/2.svg'
  },
  {
    title: '模型微调',
    description: '基于通用预训练大模型，进行企业针对性优化',
    icon: '/2.svg'
  },
  {
    title: 'AI 应用、智能体开发',
    description: '更专注的AI助手',
    icon: '/2.svg'
  },
  {
    title: '企业培训',
    description: '为企业提供市面上主流AI工具的培训服务',
    icon: '/2.svg'
  },
  {
    title: 'AI自动化',
    description: '结合RPA技术，自动化模拟人类真实操作',
    icon: '/2.svg'
  }
]);
</script>

<style scoped>
/* 可选：添加自定义样式或覆盖Tailwind默认值 */
</style>
    