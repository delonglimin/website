import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createBaseVNode, t as toDisplayString, F as Fragment, g as renderList, B as ref } from "./app-DaUf0y40.js";
const _sfc_main = {
  __name: "ServicesInformation",
  setup(__props, { expose: __expose }) {
    __expose();
    const catagoryName = ref("免费信息咨询");
    const services = ref([
      {
        title: "信息化建设",
        description: "企业信息化建设咨询",
        icon: "/4.svg"
      },
      {
        title: "企业数字化转型",
        description: "提供企业数字化转型咨询服务",
        icon: "/4.svg"
      },
      {
        title: "新媒体营销",
        description: "各大自媒体平台新媒体营销、开户咨询",
        icon: "/4.svg"
      },
      {
        title: "电商网店咨询",
        description: "国内以及境外电商网店开通服务咨询",
        icon: "/4.svg"
      },
      {
        title: "软件工具",
        description: "提供一系列软件工具和工具服务",
        icon: "/4.svg"
      },
      {
        title: "技术咨询",
        description: "提供专业的IT技术咨询和解决方案",
        icon: "/4.svg"
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
const ServicesInformation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-841b29db"], ["__file", "ServicesInformation.vue"]]);
export {
  ServicesInformation as default
};
