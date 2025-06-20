import { i as defineComponent, q as ref, k as computed, P as Pagation, _ as _export_sfc, c as createElementBlock, o as openBlock, a as createBaseVNode, b as createVNode, F as Fragment, f as renderList, p as normalizeStyle } from "./app-BU2-FGbb.js";
const examplesData = [
  {
    name: "邻家大龙猫",
    link: "https://bigtotoro.cn",
    desc: "邻家大龙猫的个人学习笔记",
    thumbail: "https://bigtotoro.cn/doc_notes/assets/banner_keqing-BwW0pNet.png"
  },
  {
    thumbnail: "https://avatars.githubusercontent.com/u/87223862?v=4",
    link: "https://zzh.4everland.website/",
    avator: "https://vue3-xiao-admin.4everland.app/static/png/logo-22eeabbe.png"
  },
  {
    name: "QFluentWidgets",
    desc: "无需书写 QSS，拖拽即可快速构建美观的界面",
    link: "https://qfluentwidgets.com",
    thumbnail: "https://raw.githubusercontent.com/zhiyiYo/QMaterialWidgets/master/docs/source/_static/Interface.jpg"
  },
  {
    name: "明",
    desc: "全栈分享",
    link: "https://www.stucoding.com/",
    thumbnail: "https://www.stucoding.com/assets/mybatis/1/1-1.png"
  },
  {
    thumbnail: "https://pic.imgdb.cn/item/64ffbee3661c6c8e54af2462.png",
    link: "https://sloving.top",
    avator: "https://sloving.top/head.png"
  },
  {
    thumbnail: "https://oss.bakerchen.top/img/2023-07-18-20-59-20.jpg",
    link: "https://www.bakerchen.top",
    avator: "https://www.bakerchen.top/logo.png"
  },
  {
    thumbnail: "https://user-images.githubusercontent.com/18067907/234058377-28a7e909-ae5c-4e7d-a35b-2968848bef89.png",
    link: "https://www.recoluan.com",
    avator: "https://www.recoluan.com/head.png"
  },
  {
    thumbnail: "https://oisr.top/banner.svg",
    link: "https://oisr.top",
    avator: "https://oisr.top/head.jpg"
  },
  {
    thumbnail: "https://qian-shen.github.io/images/wiki.png",
    link: "https://qian-shen.github.io/",
    avator: "https://qian-shen.github.io/icons/logo.png"
  },
  {
    thumbnail: "https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/home.png",
    link: "https://www.licodeao.top",
    avator: "https://www.licodeao.top/avatar.jpg"
  },
  {
    thumbnail: "https://github-production-user-asset-6210df.s3.amazonaws.com/75941562/241768717-21953f79-fe88-4dca-bfaf-306d4a8c1dac.png",
    link: "https://www.yixiangzhilv.com/",
    avator: "https://www.yixiangzhilv.com/head.png"
  },
  {
    thumbnail: "https://blog.latteandcat.cn/bg.jpg",
    link: "https://blog.latteandcat.cn/",
    avator: "https://blog.latteandcat.cn/head.png"
  },
  {
    thumbnail: "https://numb.run/homeIndex.jpg",
    link: "https://numb.run/",
    avator: "https://numb.run/homepage.jpg"
  },
  {
    thumbnail: "https://www.dreamai.world/assets/homeview.jpg",
    link: "https://www.dreamai.world/",
    avator: "https://www.dreamai.world/logo.png"
  },
  {
    thumbnail: "https://www.zhangli233.com/bg.jpg",
    link: "https://www.zhangli233.com/",
    avator: "https://www.zhangli233.com/via.jpg"
  }
];
const perPage = 9;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Examples",
  setup(__props, { expose: __expose }) {
    __expose();
    const jumpLink = (link) => {
      if (link) {
        window.open(link, "_blank");
      }
    };
    const currentPage = ref(1);
    const examplesOfCurrentPage = computed(() => {
      const start = (currentPage.value - 1) * perPage;
      const end = currentPage.value * perPage;
      return (examplesData || []).slice(start, end);
    });
    let handlePagation = (page) => {
      currentPage.value = page;
    };
    {
      handlePagation = (page) => {
        currentPage.value = page;
        setTimeout(() => {
          window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
        }, 100);
      };
    }
    const __returned__ = { jumpLink, currentPage, perPage, examplesOfCurrentPage, get handlePagation() {
      return handlePagation;
    }, set handlePagation(v) {
      handlePagation = v;
    }, get examplesData() {
      return examplesData;
    }, Pagation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "examples__container" };
const _hoisted_2 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.examplesOfCurrentPage, (item, index) => {
        return openBlock(), createElementBlock("div", {
          class: "examples__item",
          key: index,
          style: normalizeStyle({ backgroundImage: `url(${item.thumbnail})` })
        }, [
          createBaseVNode("div", {
            class: "examples__item__btn",
            style: normalizeStyle({ backgroundImage: `url(${item.avator})` })
          }, [
            createBaseVNode("span", {
              class: "btn--go",
              onClick: ($event) => $setup.jumpLink(item.link)
            }, "Go", 8, _hoisted_2)
          ], 4)
        ], 4);
      }), 128))
    ]),
    createVNode($setup["Pagation"], {
      currentPage: $setup.currentPage,
      total: $setup.examplesData.length,
      onChange: $setup.handlePagation
    }, null, 8, ["currentPage", "total", "onChange"])
  ], 64);
}
const Examples = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bbb239d3"], ["__file", "Examples.vue"]]);
export {
  Examples as default
};
