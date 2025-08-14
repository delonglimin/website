<template>
    <div class="friendship-link-container">
      <MagicCard
        class="friendship-link-item"
        v-for="(item, index) in friendshipLinks"
        :key="index"
        @click="() => handlClick(item.pinyin)"
      >
        <div class="logo">
          <img src="/logo.png" />
        </div>
        <span class="title">{{ item.name }}</span>
      </MagicCard>
    </div>
</template>

<script setup lang="ts">


import { ref ,onMounted} from 'vue';
import { useMagicCard } from "vuepress-theme-reco/lib/client/composables/index.js";

const friendshipLinks = ref([
     {"name": "济南", "pinyin": "jinan"},
    {"name": "青岛", "pinyin": "qingdao"},
    {"name": "淄博", "pinyin": "zibo"},
    {"name": "枣庄", "pinyin": "zaozhuang"},
    {"name": "东营", "pinyin": "dongying"},
    {"name": "烟台", "pinyin": "yantai"},
    {"name": "潍坊", "pinyin": "weifang"},
    {"name": "济宁", "pinyin": "jining"},
    {"name": "泰安", "pinyin": "taian"},
    {"name": "威海", "pinyin": "weihai"},
    {"name": "日照", "pinyin": "rizhao"},
    {"name": "临沂", "pinyin": "linyi"},
    {"name": "德州", "pinyin": "dezhou"},
    {"name": "聊城", "pinyin": "liaocheng"},
    {"name": "滨州", "pinyin": "binzhou"},
    {"name": "菏泽", "pinyin": "heze"}
  
]);
const { initMagicCard } = useMagicCard()
onMounted(() => {
  initMagicCard()
})

const handlClick = (pinyin) => {
  window.open(`/citys/${pinyin}.html`, '_blank');
};

</script>
