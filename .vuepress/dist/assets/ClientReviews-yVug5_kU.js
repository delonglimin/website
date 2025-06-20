import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, o as openBlock, F as Fragment, f as renderList, g as createBlock, h as withCtx, a as createBaseVNode, t as toDisplayString, u as useMagicCard } from "./app-BU2-FGbb.js";
const _sfc_main = {
  name: "ClientReviews",
  data() {
    return {
      reviews: [
        {
          name: "张建国",
          title: "某机械制造企业 信息化总监",
          avatar: "https://picsum.photos/60/60?random=1",
          content: "聊软信息科技为我们定制开发的生产管理ERP系统，完美解决了多车间协同管理难题。从需求调研到系统上线，团队不仅技术专业，更难得的是对我们制造业业务流程有深入理解，真正做到了贴合实际需求。本地团队响应速度快，售后运维也很到位！"
        },
        {
          name: "李美玲",
          title: "某电商平台 运营总监",
          avatar: "https://picsum.photos/60/60?random=2",
          content: "选择聊软信息科技开发我们的电商平台小程序和管理系统是非常正确的决定。他们不仅实现了我们想要的所有功能，还在用户体验设计上给出了很多专业建议。作为聊城本地企业，沟通效率极高，项目进度把控精准，一站式服务让我们省时又省心！"
        },
        {
          name: "王志强",
          title: "某政府部门 信息中心主任",
          avatar: "https://picsum.photos/60/60?random=3",
          content: "聊软信息科技为我们开发的数字大屏可视化系统，将分散在各部门的数据进行了高效整合与直观展示，极大提升了决策效率。团队在数据安全和系统稳定性方面表现专业，从开发到运维的全程跟进服务，让我们感受到了本地技术团队的可靠与负责。"
        }
      ]
    };
  },
  mounted() {
    console.log("=================");
    const { initMagicCard } = useMagicCard();
    initMagicCard();
  }
};
const _hoisted_1 = { class: "features__container" };
const _hoisted_2 = { class: "flex mb-4 items-center" };
const _hoisted_3 = ["src", "alt"];
const _hoisted_4 = { class: "" };
const _hoisted_5 = { class: "mb-4" };
const _hoisted_6 = { class: "" };
const _hoisted_7 = { class: "relative pl-6" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MagicCard = resolveComponent("MagicCard");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($data.reviews, (review, index) => {
      return openBlock(), createBlock(_component_MagicCard, {
        class: "features__item",
        key: index
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("img", {
              class: "w-16 h-16 rounded-full mr-4",
              src: review.avatar,
              alt: review.name + "的头像"
            }, null, 8, _hoisted_3),
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, toDisplayString(review.name), 1),
              createBaseVNode("div", _hoisted_6, toDisplayString(review.title), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_7, [
            _cache[0] || (_cache[0] = createBaseVNode("div", { class: "opacity-30 absolute -top-2 left-0 font-serif" }, " “ ", -1)),
            createBaseVNode("p", null, toDisplayString(review.content), 1)
          ])
        ]),
        _: 2
      }, 1024);
    }), 128))
  ]);
}
const ClientReviews = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5d3e7620"], ["__file", "ClientReviews.vue"]]);
export {
  ClientReviews as default
};
