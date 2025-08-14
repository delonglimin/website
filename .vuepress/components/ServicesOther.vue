<template>
  <div class="container mx-auto px-4 py-12">
    <!-- <div class="text-3xl md:text-4xl font-bold text-center mb-8 ">{{catagoryName}}</div> -->
    <div class="features__container">
      <MagicCard 
        class="features__item"
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
      </MagicCard>
    </div>
  </div>
</template>

<script setup>
import { ref ,onMounted} from 'vue';
import { useMagicCard } from "vuepress-theme-reco/lib/client/composables/index.js";

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
onMounted(() => {
  // 初始化MagicCard效果
  const { initMagicCard } = useMagicCard();
  initMagicCard();
});
</script>

<style scoped>
/* 可选：添加自定义样式或覆盖Tailwind默认值 */
@import "@vuepress-reco/tailwindcss-config/lib/client/styles/tailwindcss-base.css";
.features__container {
  @apply grid grid-cols-1 gap-4 max-w-screen-xl mx-auto my-16 px-6;
  @apply md:grid-cols-3;
  .features__item {
    @apply py-4 px-6 cursor-pointer;
    h4 {
      @apply mt-0 mb-0 pt-0;
    }
    p {
      @apply my-4 text-lighter;
    }
  }
}
</style>
    