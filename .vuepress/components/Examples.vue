<template>
  <div class="examples__container">
    <div
      class="examples__item"
      v-for="(item, index) in examplesOfCurrentPage"
      :key="index"
      :style="{ backgroundImage: `url(${item.thumbnail})`}"
    >
      <div
        class="examples__item__btn"
        :style="{ backgroundImage: `url(${item.avator})` }"
      >
        <span
          class="btn--go"
          @click="jumpLink(item,index)"
        >Go</span>
      </div>
    </div>
  </div>

  <!-- <Pagation
    :currentPage="currentPage"
    :total="examplesData.length"
    @change="handlePagation"
  /> -->
</template>

<script setup lang="ts">
import { ref, computed, onMounted ,onUnmounted} from 'vue';
import examplesData from '../data/examples';
import Pagation from 'vuepress-theme-reco/lib/client/components/Pagation.vue';
import { createPhotoSwipe } from '@vuepress/plugin-photo-swipe/client'
const jumpLink = (item?: any,index?: number) => {
  if (item.link && item.link !== '/') {
    window.open(item.link, '_blank')
  }else{
    openPhotoSwipe(index || 1)
  }
}

let state:any = null

const openPhotoSwipe = (index: number): void => {
  state?.open(index)
}
onMounted(async () => {
  // 通过图片链接创建一个新的 PhotoSwipe 实例
  const imgs = examplesData.map((item: any) => {
    return item.thumbnail
  })
  state = await createPhotoSwipe(
    imgs,
    {
      // PhotoSwipe 选项
    },
  )
})

onUnmounted(() => {
  state?.destroy()
})
const currentPage = ref(1)
const perPage = 13
const examplesOfCurrentPage = computed(() => {
  const start = (currentPage.value - 1) * perPage
  const end = currentPage.value * perPage

  return (examplesData || []).slice(start, end)
})

let handlePagation = (page) => {
  currentPage.value = page
}
// @ts-ignore
if (!__VUEPRESS_SSR__) {
  handlePagation = (page) => {
    currentPage.value = page

    setTimeout(() => {
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
    }, 100)
  }
}
</script>

<style scoped>
@import '@vuepress-reco/tailwindcss-config/lib/client/styles/tailwindcss-base.css';

.examples__container {
  @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4;
 
  @apply relative;
  @apply overflow-hidden;
  .examples__item {
    @apply relative w-full h-48 border-block overflow-hidden bg-cover bg-center;
    @apply hover:border-0 hover:border-primary hover:shadow-2xl hover:shadow-reco-primary;
    transition: box-shadow 0.4s;
    @apply md:h-40;
    &:nth-child(3n+2) {
      
      /* @apply mx-0;
      @apply md:mx-8; */
    }
    &:hover {
      .examples__item__btn {
        @apply bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2 shadow shadow-reco-primary;
        .btn--go {
          @apply block;
        }
      }
    }
    .examples__item__btn {
      @apply absolute right-4 bottom-4 w-10 h-10 overflow-hidden bg-cover bg-center;
      @apply transition-all duration-500 ease-in-out;
      border-radius: 50%;
      .btn--go {
        @apply hidden w-full h-full text-center leading-10 cursor-pointer bg-reco-primary text-reco-text-darkmode;
        @apply hover:font-bold;
      }
    }
  }
}
</style>
