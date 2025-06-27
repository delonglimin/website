import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createBaseVNode, t as toDisplayString, F as Fragment, g as renderList, B as ref } from "./app-DaUf0y40.js";
const _sfc_main = {
  __name: "ServicesEnterprise",
  setup(__props, { expose: __expose }) {
    __expose();
    const catagoryName = ref("企业数字化服务");
    const services = ref([
      {
        title: "ERP",
        description: "ERP（企业资源计划）软件是一套集成的信息系统，它能够帮助企业管理和自动化多个业务流程，包括采购、生产、库存、销售、财务、人力资源等",
        icon: "/5.svg"
      },
      {
        title: "MES",
        description: "MES（制造执行系统）软件是专门为制造业设计的实时信息系统，它位于企业资源计划（ERP）系统与工业控制系统（ICS）之间，专注于生产车间的管理和优化",
        icon: "/5.svg"
      },
      {
        title: "CRM",
        description: "CRM（客户关系管理）软件是一种帮助企业管理与客户之间互动的工具。它通过收集、组织和分析客户数据，旨在提升客户服务、增强客户满意度和忠诚度，以及优化销售和营销活动",
        icon: "/5.svg"
      },
      {
        title: "SRM",
        description: "SRM（供应商关系管理）软件是一种帮助企业管理和优化与供应商之间关系的工具。这种软件通常包括采购流程、供应商评估、合同管理、供应链协作等功能",
        icon: "/5.svg"
      },
      {
        title: "WMS",
        description: "WMS（仓库管理系统）软件是一种用于优化仓库运营和库存管理的工具。它通过集成仓库流程、提高库存准确性以及提升操作效率来帮助企业管理其存储和分销活动",
        icon: "/5.svg"
      },
      {
        title: "软件工具",
        description: "音乐下载，视频下载，去水印，音频合成，数字人等一系列提效工具",
        icon: "/5.svg"
      },
      {
        title: "APS",
        description: "APS（高级计划与排程）软件是一种用于帮助企业优化生产计划与排程的工具。它通过综合考虑资源、能力、物料和时间等因素，生成最优的生产计划。",
        icon: "/5.svg"
      },
      {
        title: "QMS",
        description: "QMS（质量管理系统）软件是一种帮助企业管理和维护产品质量、符合相关标准和法规的计算机程序。它通常包含文档管理、流程控制、审计管理、纠正和预防措施等模块",
        icon: "/5.svg"
      },
      {
        title: "PLC采集",
        description: "支持针对各大PLC品牌做数据采集，数据可视化，数据分析，数据统计，从而实现自动化控制，提高生产效率，提高运营效率，降低企业人力成本",
        icon: "/5.svg"
      },
      {
        title: "传感器采集",
        description: "自持各类传感器的数据采集，温湿度，噪音，压力，气体，红外线，电磁波，光电等支持标准工业传输协议modbus的所有设备以及标准智能电表协议数据采集",
        icon: "/5.svg"
      },
      {
        title: "工业物联网",
        description: "工业物联网平台，scanda hmi组态，各种工业协议对接modbus-tcp，rtu，opc-ua，mqtt、lora ，zigbee、蓝牙、4G、wifi等等",
        icon: "/5.svg"
      }
    ]);
    const __returned__ = { catagoryName, services, ref };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1 = { class: "container mx-auto px-4 py-12" };
const _hoisted_2 = { class: "text-3xl md:text-4xl font-bold text-center mb-8" };
const _hoisted_3 = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" };
const _hoisted_4 = { class: "flex justify-center mb-4" };
const _hoisted_5 = { class: "flex items-center justify-center" };
const _hoisted_6 = ["src", "alt"];
const _hoisted_7 = { class: "text-xl font-semibold mb-3 text-center" };
const _hoisted_8 = { class: "text-center leading-relaxed" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, toDisplayString($setup.catagoryName), 1),
    createBaseVNode("div", _hoisted_3, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.services, (item, index) => {
        return openBlock(), createElementBlock("div", {
          class: "border-block bg-block magic-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-6",
          key: index
        }, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("img", {
                src: item.icon,
                alt: item.title,
                class: "w-20 h-20"
              }, null, 8, _hoisted_6)
            ])
          ]),
          createBaseVNode("h3", _hoisted_7, toDisplayString(item.title), 1),
          createBaseVNode("p", _hoisted_8, toDisplayString(item.description), 1)
        ]);
      }), 128))
    ])
  ]);
}
const ServicesEnterprise = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-31cc2086"], ["__file", "ServicesEnterprise.vue"]]);
export {
  ServicesEnterprise as default
};
