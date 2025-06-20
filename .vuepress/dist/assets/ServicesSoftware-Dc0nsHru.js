import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createBaseVNode, t as toDisplayString, F as Fragment, f as renderList, q as ref } from "./app-BU2-FGbb.js";
const _sfc_main = {
  __name: "ServicesSoftware",
  setup(__props, { expose: __expose }) {
    __expose();
    const catagoryName = ref("其他服务");
    const services = ref([
      {
        title: "地图标注",
        description: "百度、高德、腾讯三大地图厂商标注服务",
        icon: "/1.svg"
      },
      {
        title: "网络推广",
        description: "提供网络营销，推广服务，让客户来找您",
        icon: "/1.svg"
      },
      {
        title: "软件服务",
        description: "资源下载，电脑手机一系列和软件相关的问题",
        icon: "/1.svg"
      },
      {
        title: "网店咨询",
        description: "国内以及境外电商网店开通服务咨询",
        icon: "/1.svg"
      },
      {
        title: "chatgpt",
        description: "提供chatgpt接入服务，让工作效率快到飞起",
        icon: "/1.svg"
      },
      {
        title: "软件工具",
        description: "音乐下载，视频下载，去水印，音频合成，数字人等一系列提效工具",
        icon: "/1.svg"
      },
      {
        title: "数据分析",
        description: "专业的数据统计和分析服务，提供决策支持",
        icon: "/1.svg"
      },
      {
        title: "技术咨询",
        description: "提供专业的IT技术咨询和解决方案",
        icon: "/1.svg"
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
const ServicesSoftware = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ec0005f8"], ["__file", "ServicesSoftware.vue"]]);
export {
  ServicesSoftware as default
};
