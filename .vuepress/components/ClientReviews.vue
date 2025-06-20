<template>
    <div class="features__container">
      <!-- 客户评价1：制造业企业 -->
      <MagicCard
        class="features__item"
        v-for="(review, index) in reviews"
        :key="index"
      >
        <div class="flex mb-4 items-center">
          <img
            class="w-16 h-16 rounded-full mr-4"
            :src="review.avatar"
            :alt="review.name + '的头像'"
          />
          <div class="">
            <div class="mb-4">{{ review.name }}</div>
            <div class="">{{ review.title }}</div>
          </div>
        </div>
        <div class="relative pl-6">
          <div class="opacity-30 absolute -top-2 left-0 font-serif">
            &ldquo;
          </div>
          <p >{{ review.content }}</p>
        </div>
      </MagicCard>
    </div>
</template>

<script>
import { useMagicCard } from "vuepress-theme-reco/lib/client/composables/index.js";
export default {
  name: "ClientReviews",
  data() {
    return {
      reviews: [
        {
          name: "张建国",
          title: "某机械制造企业 信息化总监",
          avatar: "https://picsum.photos/60/60?random=1",
          content:
            "聊软信息科技为我们定制开发的生产管理ERP系统，完美解决了多车间协同管理难题。从需求调研到系统上线，团队不仅技术专业，更难得的是对我们制造业业务流程有深入理解，真正做到了贴合实际需求。本地团队响应速度快，售后运维也很到位！",
        },
        {
          name: "李美玲",
          title: "某电商平台 运营总监",
          avatar: "https://picsum.photos/60/60?random=2",
          content:
            "选择聊软信息科技开发我们的电商平台小程序和管理系统是非常正确的决定。他们不仅实现了我们想要的所有功能，还在用户体验设计上给出了很多专业建议。作为聊城本地企业，沟通效率极高，项目进度把控精准，一站式服务让我们省时又省心！",
        },
        {
          name: "王志强",
          title: "某政府部门 信息中心主任",
          avatar: "https://picsum.photos/60/60?random=3",
          content:
            "聊软信息科技为我们开发的数字大屏可视化系统，将分散在各部门的数据进行了高效整合与直观展示，极大提升了决策效率。团队在数据安全和系统稳定性方面表现专业，从开发到运维的全程跟进服务，让我们感受到了本地技术团队的可靠与负责。",
        },
      ],
    };
  },
  mounted() {
    console.log("=================");
    const { initMagicCard } = useMagicCard();
    initMagicCard();
  },
};
</script>

<style scoped>
@import "@vuepress-reco/tailwindcss-config/lib/client/styles/tailwindcss-base.css";

/* 自定义Tailwind工具类 */

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
