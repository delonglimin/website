import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createStaticVNode, e as createTextVNode, b as createVNode, o as openBlock } from "./app-BU2-FGbb.js";
const _sfc_main = {};
const _hoisted_1 = { class: "custom-container info" };
const _hoisted_2 = {
  href: "https://github.com/vuepress-reco/vuepress-theme-reco",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://github.com/vuepress-reco/vuepress-theme-reco/discussions",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1, [
      _cache[5] || (_cache[5] = createStaticVNode('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">INFO</p>', 2)),
      createBaseVNode("p", null, [
        _cache[2] || (_cache[2] = createTextVNode("欢迎大家在此留下你的建议和意见，或者在 ")),
        createBaseVNode("a", _hoisted_2, [
          _cache[0] || (_cache[0] = createTextVNode("GitHub Issue")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[3] || (_cache[3] = createTextVNode(" 提交你的问题，或来 ")),
        createBaseVNode("a", _hoisted_3, [
          _cache[1] || (_cache[1] = createTextVNode("GitHub Discussions")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[4] || (_cache[4] = createTextVNode(" 进行讨论。"))
      ])
    ])
  ]);
}
const messageBoard_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "message-board.html.vue"]]);
const data = JSON.parse('{"path":"/docs/others/message-board.html","title":"留言板","lang":"en-US","frontmatter":{"title":"留言板","date":"2021-11-07T00:30:48.000Z","hideComments":false},"headers":[],"git":{"createdTime":1749452102000,"updatedTime":1749452102000,"contributors":[{"name":"xudelong","email":"2452036924@qq.com","commits":1}]},"filePathRelative":"docs/others/message-board.md"}');
export {
  messageBoard_html as comp,
  data
};
