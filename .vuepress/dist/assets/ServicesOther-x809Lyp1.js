import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createBaseVNode, t as toDisplayString, F as Fragment, g as renderList, B as ref } from "./app-DaUf0y40.js";
const _sfc_main = {
  __name: "ServicesOther",
  setup(__props, { expose: __expose }) {
    __expose();
    const catagoryName = ref("人工智能AI");
    const services = ref([
      {
        title: "RAG（检索增强生成）",
        description: "智能客服、知识问答、内容创作等场景",
        icon: "/2.svg"
      },
      {
        title: "MCP",
        description: "结合自身业务，让AI更智能",
        icon: "/2.svg"
      },
      {
        title: "模型微调",
        description: "基于通用预训练大模型，进行企业针对性优化",
        icon: "/2.svg"
      },
      {
        title: "AI 应用、智能体开发",
        description: "更专注的AI助手",
        icon: "/2.svg"
      },
      {
        title: "企业培训",
        description: "为企业提供市面上主流AI工具的培训服务",
        icon: "/2.svg"
      },
      {
        title: "AI自动化",
        description: "结合RPA技术，自动化模拟人类真实操作",
        icon: "/2.svg"
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
const ServicesOther = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-227ef2f0"], ["__file", "ServicesOther.vue"]]);
export {
  ServicesOther as default
};
