import { i as defineComponent, B as ref, k as computed, C as md5, _ as _export_sfc, c as createElementBlock, o as openBlock, D as withDirectives, a as createBaseVNode, E as vModelText, t as toDisplayString, G as vShow } from "./app-DaUf0y40.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Md5",
  setup(__props, { expose: __expose }) {
    __expose();
    const password = ref("");
    const md5Str = computed(() => {
      return password.value === "" ? "" : md5(md5(password.value));
    });
    const btnText = ref("Copy");
    async function copyToClipboard(text) {
      if (!text) return;
      try {
        const result = navigator.clipboard.writeText(text);
        btnText.value = "Copied";
        setTimeout(() => {
          btnText.value = "Copy";
        }, 1e3);
        return result;
      } catch {
        const element = document.createElement("textarea");
        const previouslyFocusedElement = document.activeElement;
        element.value = text;
        element.setAttribute("readonly", "");
        element.style.contain = "strict";
        element.style.position = "absolute";
        element.style.left = "-9999px";
        element.style.fontSize = "12pt";
        const selection = document.getSelection();
        const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
        document.body.appendChild(element);
        element.select();
        element.selectionStart = 0;
        element.selectionEnd = text.length;
        document.execCommand("copy");
        document.body.removeChild(element);
        if (originalRange) {
          selection.removeAllRanges();
          selection.addRange(originalRange);
        }
        if (previouslyFocusedElement) {
          previouslyFocusedElement.focus();
        }
        btnText.value = "Copied";
        setTimeout(() => {
          btnText.value = "Copy";
        }, 1e3);
      }
    }
    const __returned__ = { password, md5Str, btnText, copyToClipboard };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "md5-wrapper" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    withDirectives(createBaseVNode("input", {
      type: "text",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.password = $event),
      placeholder: "Please input password",
      maxlength: "6"
    }, null, 512), [
      [vModelText, $setup.password]
    ]),
    createBaseVNode("button", {
      class: "btn-copy",
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.copyToClipboard($setup.md5Str))
    }, toDisplayString($setup.btnText), 1),
    createBaseVNode("p", null, [
      withDirectives(createBaseVNode("span", null, "md5 密文：" + toDisplayString($setup.md5Str), 513), [
        [vShow, $setup.md5Str !== ""]
      ])
    ])
  ]);
}
const Md5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d5800418"], ["__file", "Md5.vue"]]);
export {
  Md5 as default
};
