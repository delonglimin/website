import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, b as createVNode, d as createStaticVNode, e as createTextVNode, o as openBlock } from "./app-BU2-FGbb.js";
const _sfc_main = {};
const _hoisted_1 = { class: "custom-container tip" };
const _hoisted_2 = {
  href: "https://github.com/vuepress-reco/vuepress-theme-reco/edit/main/docs/.vuepress/data/examples.ts",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_examples = resolveComponent("examples");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1, [
      _cache[5] || (_cache[5] = createStaticVNode('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p>', 2)),
      createBaseVNode("p", null, [
        _cache[1] || (_cache[1] = createTextVNode("添加案例请点击 ")),
        createBaseVNode("a", _hoisted_2, [
          _cache[0] || (_cache[0] = createTextVNode("这里")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[2] || (_cache[2] = createTextVNode(" 在最上面添加配置信息。（")),
        _cache[3] || (_cache[3] = createBaseVNode("strong", null, "要求：站点不可删除 footer 的主题推荐。", -1)),
        _cache[4] || (_cache[4] = createTextVNode("）"))
      ])
    ]),
    createVNode(_component_examples)
  ]);
}
const aboutme_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "aboutme.html.vue"]]);
const data = JSON.parse('{"path":"/docs/others/aboutme.html","title":"案例","lang":"en-US","frontmatter":{"title":"案例","isShowComments":false},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"docs/others/aboutme.md"}');
export {
  aboutme_html as comp,
  data
};
