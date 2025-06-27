import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createBaseVNode, t as toDisplayString, F as Fragment, g as renderList, B as ref } from "./app-DaUf0y40.js";
const _sfc_main = {
  __name: "ServicesSoftware",
  setup(__props, { expose: __expose }) {
    __expose();
    const catagoryName = ref("软件业务");
    const services = ref([
      {
        title: "app开发",
        description: "app定制，app开发，支持uniapp，flutter 原生3种技术方案",
        icon: "/3.svg"
      },
      {
        title: "小程序开发",
        description: "小程序开发，微信小程序，抖音小程序，支持跨端多平台方案",
        icon: "/3.svg"
      },
      {
        title: "系统开发",
        description: "教育、视频、娱乐需求发布等各种系统，软件，工具定制，二次开发，从零开发",
        icon: "/3.svg"
      },
      {
        title: "系统运维",
        description: "系统、服务器代运维",
        icon: "/3.svg"
      },
      {
        title: "系统集成",
        description: "OA系统、ERP系统、CRM等系统集成",
        icon: "/3.svg"
      },
      {
        title: "系统对接",
        description: "浪潮、金蝶、用友等各大厂商系统对接",
        icon: "/3.svg"
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
const ServicesSoftware = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7edd9436"], ["__file", "ServicesSoftware.vue"]]);
export {
  ServicesSoftware as default
};
