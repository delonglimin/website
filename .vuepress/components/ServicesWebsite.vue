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
    