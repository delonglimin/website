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
import { ref,onMounted } from 'vue';
import { useMagicCard } from "vuepress-theme-reco/lib/client/composables/index.js";
const catagoryName = ref('免费信息咨询');
// 服务数据
const services = ref([
  {
    title: '信息化建设',
    description: '企业信息化建设咨询',
    icon: '/4.svg'
  },
  {
    title: '企业数字化转型',
    description: '提供企业数字化转型咨询服务',
    icon: '/4.svg'
  },
  {
    title: '新媒体营销',
    description: '各大自媒体平台新媒体营销、开户咨询',
    icon: '/4.svg'
  },
  {
    title: '电商网店咨询',
    description: '国内以及境外电商网店开通服务咨询',
    icon: '/4.svg'
  },
  {
    title: '软件工具',
    description: '提供一系列软件工具和工具服务',
    icon: '/4.svg'
  },
  {
    title: '技术咨询',
    description: '提供专业的IT技术咨询和解决方案',
    icon: '/4.svg'
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
    