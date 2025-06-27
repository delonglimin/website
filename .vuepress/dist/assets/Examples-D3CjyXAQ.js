import { q as __vitePreload, v as useEventListener, A, x as _, Z, i as defineComponent, y as onMounted, z as onUnmounted, B as ref, k as computed, _ as _export_sfc, c as createElementBlock, o as openBlock, F as Fragment, g as renderList, p as normalizeStyle, a as createBaseVNode } from "./app-DaUf0y40.js";
const examplesData = [
  {
    thumbnail: "/examples/1.png",
    link: "/",
    avator: "/logo.png"
  },
  {
    thumbnail: "/examples/2.png",
    link: "/",
    avator: "/logo.png"
  },
  {
    thumbnail: "/examples/3.png",
    link: "/",
    avator: "/logo.png"
  },
  {
    thumbnail: "/examples/4.png",
    link: "/",
    avator: "/logo.png"
  },
  {
    thumbnail: "/examples/5.png",
    link: "/",
    avator: "/logo.png"
  },
  {
    thumbnail: "/examples/6.png",
    link: "/",
    avator: "/logo.png"
  },
  {
    thumbnail: "/examples/7.png",
    link: "/",
    avator: "/logo.png"
  },
  {
    thumbnail: "/examples/8.png",
    link: "/",
    avator: "/logo.png"
  },
  {
    thumbnail: "/examples/9.png",
    link: "/",
    avator: "/logo.png"
  },
  {
    thumbnail: "/examples/10.png",
    link: "/",
    avator: "/logo.png"
  },
  {
    thumbnail: "/examples/11.png",
    link: "/",
    avator: "/logo.png"
  },
  {
    thumbnail: "/examples/12.png",
    link: "/",
    avator: "/logo.png"
  }
];
const u = (t, i = null) => {
  const r = t.map((o) => ({ html: _, msrc: o }));
  return t.forEach((o, s) => {
    Z(o).then((n) => {
      r.splice(s, 1, n), i == null ? void 0 : i.refreshSlideContent(s);
    });
  }), r;
}, d = async (t, { scrollToClose: i = true, download: r = true, fullscreen: o = true, ...s }) => {
  const { default: n } = await __vitePreload(() => import("./photoswipe.esm-D5Lhsnyf.js"), true ? [] : void 0);
  let e = null;
  return { open: (l) => {
    e = new n({ preloaderDelay: 0, showHideAnimationType: "zoom", ...s, index: l, ...i ? { closeOnVerticalDrag: true, wheelToZoom: false } : {} }), A(e, { download: r, fullscreen: o }), e.options.dataSource = u(t, e), e.init();
  }, close: () => {
    e == null ? void 0 : e.close();
  }, destroy: useEventListener("wheel", () => {
    e == null ? void 0 : e.close();
  }) };
};
const perPage = 13;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Examples",
  setup(__props, { expose: __expose }) {
    __expose();
    const jumpLink = (item, index) => {
      if (item.link && item.link !== "/") {
        window.open(item.link, "_blank");
      } else {
        openPhotoSwipe(index || 1);
      }
    };
    let state = null;
    const openPhotoSwipe = (index) => {
      state == null ? void 0 : state.open(index);
    };
    onMounted(async () => {
      const imgs = examplesData.map((item) => {
        return item.thumbnail;
      });
      state = await d(
        imgs,
        {
          // PhotoSwipe 选项
        }
      );
    });
    onUnmounted(() => {
      state == null ? void 0 : state.destroy();
    });
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
    const __returned__ = { jumpLink, get state() {
      return state;
    }, set state(v) {
      state = v;
    }, openPhotoSwipe, currentPage, perPage, examplesOfCurrentPage, get handlePagation() {
      return handlePagation;
    }, set handlePagation(v) {
      handlePagation = v;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "examples__container" };
const _hoisted_2 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
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
            onClick: ($event) => $setup.jumpLink(item, index)
          }, "Go", 8, _hoisted_2)
        ], 4)
      ], 4);
    }), 128))
  ]);
}
const Examples = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-66a0b926"], ["__file", "Examples.vue"]]);
export {
  Examples as default
};
