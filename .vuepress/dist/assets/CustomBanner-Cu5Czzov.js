import { i as defineComponent, j as usePageFrontmatter, k as computed, l as withBase, _ as _export_sfc, r as resolveComponent, c as createElementBlock, o as openBlock, a as createBaseVNode, m as createCommentVNode, d as createStaticVNode, t as toDisplayString, F as Fragment, g as renderList, h as createBlock, n as normalizeClass, p as normalizeStyle } from "./app-DaUf0y40.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CustomBanner",
  setup(__props, { expose: __expose }) {
    __expose();
    const frontmatter = usePageFrontmatter();
    const heroImage = computed(() => {
      var _a, _b, _c, _d;
      return ((_b = (_a = frontmatter.value) == null ? void 0 : _a.customBanner) == null ? void 0 : _b.heroImage) ? withBase((_d = (_c = frontmatter.value) == null ? void 0 : _c.customBanner) == null ? void 0 : _d.heroImage) : null;
    });
    const buttons = computed(() => {
      var _a, _b;
      return ((_b = (_a = frontmatter.value) == null ? void 0 : _a.customBanner) == null ? void 0 : _b.buttons) || [];
    });
    const heroImageStyle = computed(
      () => frontmatter.value.customBanner.heroImageStyle || {}
    );
    const bgImageStyle = computed(() => {
      var _a;
      const { bgImageStyle: bgImageStyle2, bgImage } = ((_a = frontmatter.value) == null ? void 0 : _a.customBanner) || {};
      const initBgImageStyle = bgImage ? {
        overflow: "hidden",
        background: `url(${withBase(bgImage)}) center/cover no-repeat`
      } : {};
      return bgImageStyle2 ? { ...initBgImageStyle, ...bgImageStyle2 } : initBgImageStyle;
    });
    const __returned__ = { frontmatter, heroImage, buttons, heroImageStyle, bgImageStyle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "banner-brand__content" };
const _hoisted_2 = {
  key: 0,
  class: "title"
};
const _hoisted_3 = {
  key: 1,
  class: "description"
};
const _hoisted_4 = {
  key: 2,
  class: "tagline"
};
const _hoisted_5 = {
  key: 3,
  class: "btn-group"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const _component_Xicons = resolveComponent("Xicons");
  return openBlock(), createElementBlock("section", {
    class: "banner-brand__wrapper",
    style: normalizeStyle({ ...$setup.bgImageStyle })
  }, [
    createBaseVNode("div", _hoisted_1, [
      ((_b = (_a = $setup.frontmatter) == null ? void 0 : _a.customBanner) == null ? void 0 : _b.title) ? (openBlock(), createElementBlock("h1", _hoisted_2, toDisplayString((_d = (_c = $setup.frontmatter) == null ? void 0 : _c.customBanner) == null ? void 0 : _d.title), 1)) : createCommentVNode("", true),
      ((_f = (_e = $setup.frontmatter) == null ? void 0 : _e.customBanner) == null ? void 0 : _f.description) ? (openBlock(), createElementBlock("p", _hoisted_3, toDisplayString((_h = (_g = $setup.frontmatter) == null ? void 0 : _g.customBanner) == null ? void 0 : _h.description), 1)) : createCommentVNode("", true),
      ((_j = (_i = $setup.frontmatter) == null ? void 0 : _i.customBanner) == null ? void 0 : _j.tagline) ? (openBlock(), createElementBlock("p", _hoisted_4, toDisplayString((_l = (_k = $setup.frontmatter) == null ? void 0 : _k.customBanner) == null ? void 0 : _l.tagline), 1)) : createCommentVNode("", true),
      $setup.buttons.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_5, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.buttons, (btn, index) => {
          return openBlock(), createBlock(_component_Xicons, {
            class: normalizeClass(btn.type),
            key: index,
            icon: btn.icon,
            text: btn.text,
            link: btn.link,
            "icon-size": "18",
            "text-size": "14"
          }, null, 8, ["class", "icon", "text", "link"]);
        }), 128))
      ])) : createCommentVNode("", true),
      _cache[0] || (_cache[0] = createStaticVNode('<div class="shields-wrapper" data-v-8a5412d4><img alt="GitHub license" src="https://img.shields.io/github/license/vuepress-reco/vuepress-theme-reco?style=flat-square&amp;logo=github&amp;color=5D67E8" data-v-8a5412d4><img alt="GitHub stars" src="https://img.shields.io/github/stars/vuepress-reco/vuepress-theme-reco?style=flat-square&amp;logo=github&amp;color=5D67E8" data-v-8a5412d4><img alt="GitHub forks" src="https://img.shields.io/github/forks/vuepress-reco/vuepress-theme-reco?style=flat-square&amp;logo=github&amp;color=5D67E8" data-v-8a5412d4><img alt="Npm downloads" src="https://img.shields.io/npm/dt/vuepress-theme-reco?style=flat-square&amp;logo=npm&amp;color=5D67E8" data-v-8a5412d4><img alt="GitHub package.json version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/v/vuepress-reco/vuepress-theme-reco?filename=packages%2Fvuepress-theme-reco%2Fpackage.json&amp;style=flat-square&amp;color=5D67E8&amp;logo=npm" data-v-8a5412d4><img alt="Npm version" src="https://img.shields.io/badge/tailwindcss-3.1.6-5D67E8?style=flat-square&amp;logo=tailwindcss" data-v-8a5412d4></div>', 1))
    ])
  ], 4);
}
const CustomBanner = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8a5412d4"], ["__file", "CustomBanner.vue"]]);
export {
  CustomBanner as default
};
