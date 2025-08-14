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
const catagoryName = ref('企业数字化服务');
// 服务数据
const services = ref([
  {
    title: 'ERP',
    description: 'ERP（企业资源计划）软件是一套集成的信息系统，它能够帮助企业管理和自动化多个业务流程，包括采购、生产、库存、销售、财务、人力资源等',
    icon: '/5.svg'
  },
  {
    title: 'MES',
    description: 'MES（制造执行系统）软件是专门为制造业设计的实时信息系统，它位于企业资源计划（ERP）系统与工业控制系统（ICS）之间，专注于生产车间的管理和优化',
    icon: '/5.svg'
  },
  {
    title: 'CRM',
    description: 'CRM（客户关系管理）软件是一种帮助企业管理与客户之间互动的工具。它通过收集、组织和分析客户数据，旨在提升客户服务、增强客户满意度和忠诚度，以及优化销售和营销活动',
    icon: '/5.svg'
  },
  {
    title: 'SRM',
    description: 'SRM（供应商关系管理）软件是一种帮助企业管理和优化与供应商之间关系的工具。这种软件通常包括采购流程、供应商评估、合同管理、供应链协作等功能',
    icon: '/5.svg'
  },
  {
    title: 'WMS',
    description: 'WMS（仓库管理系统）软件是一种用于优化仓库运营和库存管理的工具。它通过集成仓库流程、提高库存准确性以及提升操作效率来帮助企业管理其存储和分销活动',
    icon: '/5.svg'
  },
  {
    title: '软件工具',
    description: '音乐下载，视频下载，去水印，音频合成，数字人等一系列提效工具',
    icon: '/5.svg'
  },
  {
    title: 'APS',
    description: 'APS（高级计划与排程）软件是一种用于帮助企业优化生产计划与排程的工具。它通过综合考虑资源、能力、物料和时间等因素，生成最优的生产计划。',
    icon: '/5.svg'
  },
  {
    title: 'QMS',
    description: 'QMS（质量管理系统）软件是一种帮助企业管理和维护产品质量、符合相关标准和法规的计算机程序。它通常包含文档管理、流程控制、审计管理、纠正和预防措施等模块',
    icon: '/5.svg'
  },
  {
    title: 'PLC采集',
    description: '支持针对各大PLC品牌做数据采集，数据可视化，数据分析，数据统计，从而实现自动化控制，提高生产效率，提高运营效率，降低企业人力成本',
    icon: '/5.svg'
  },
  {
    title: '传感器采集',
    description: '自持各类传感器的数据采集，温湿度，噪音，压力，气体，红外线，电磁波，光电等支持标准工业传输协议modbus的所有设备以及标准智能电表协议数据采集',
    icon: '/5.svg'
  },
  {
    title: '工业物联网',
    description: '工业物联网平台，scanda hmi组态，各种工业协议对接modbus-tcp，rtu，opc-ua，mqtt、lora ，zigbee、蓝牙、4G、wifi等等',
    icon: '/5.svg'
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
    