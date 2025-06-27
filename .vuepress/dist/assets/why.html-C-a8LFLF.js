import { _ as _export_sfc, c as createElementBlock, a as createBaseVNode, o as openBlock } from "./app-DaUf0y40.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _cache[0] || (_cache[0] = [
    createBaseVNode("p", null, "之前在公司上班的时候，老板经常说的一句话就是：1周能搞定吗？我基本都是这样回答：可以搞定，但是会有以下这些方面的风险，然后1、2、3、4给老板表述清楚，最后老板基本就会“妥协”说：还是按照你的规划来，质量最重要。", -1),
    createBaseVNode("p", null, "不干这一行的朋友不太清楚做一个软件需要考虑哪些因素，我举一个简单的例子：比如A向B转账1快钱，此时你会想，这还不简单，把A的余额减1，把B的余额加1 不就结束了吗！真的是这样吗？实则不然，软件最大的工作量是在处理异常，比如，A的余额减操作失败了怎么办？B的余额加操作失败了怎么办？A余额减操作成功了，这个时候，网络抖动导致B余额加操作失败了怎么办？等等一大堆异常情况。当然这些异常如果不考虑也可以交付，因为你验证几次，基本验证不出来，但是一旦出了问题，就是大问题！", -1)
  ]));
}
const why_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "why.html.vue"]]);
const data = JSON.parse('{"path":"/series/aboutyou/why.html","title":"为啥比其他公司慢这么久交付","lang":"en-US","frontmatter":{"title":"为啥比其他公司慢这么久交付","isShowComments":false},"headers":[],"git":{"createdTime":1750409108000,"updatedTime":1750409108000,"contributors":[{"name":"xudelong","email":"2452036924@qq.com","commits":1}]},"filePathRelative":"series/aboutyou/why.md"}');
export {
  why_html as comp,
  data
};
