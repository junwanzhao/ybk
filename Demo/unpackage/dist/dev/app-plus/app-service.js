if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const ON_READY = "onReady";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onReady = /* @__PURE__ */ createHook(ON_READY);
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$4 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const ComponentsUniStatusBarUniStatusBar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2], ["__file", "D:/HBuilderProjects/Demo/components/uni-status-bar/uni-status-bar.vue"]]);
  const _sfc_main$3 = {
    __name: "index",
    setup(__props) {
      const courses = vue.reactive([
        {
          courseId: 1,
          courseClass: "软件2242 Web2班",
          courseNo: "2942577",
          courseName: "后端工程开发",
          courseCover: "/static/images/SpringBoot.jpg",
          courseTeacher: {
            name: "许莫淇",
            avatar: "/static/images/mqxu.jpg"
          },
          semester: "2022-2-23-2",
          finished: false,
          show: false
        },
        {
          courseId: 2,
          courseClass: "软件2242 Web2班",
          courseNo: "9488275",
          courseName: "前端工程开发",
          courseCover: "/static/images/Vue.png",
          courseTeacher: {
            name: "许莫淇",
            avatar: "/static/images/mqxu.jpg"
          },
          semester: "2022-2-23-2",
          finished: false,
          show: false
        },
        {
          courseId: 3,
          courseClass: "软件2242 Web2班",
          courseNo: "8175074",
          courseName: "Web应用开发",
          courseCover: "static/images/Web.png",
          courseTeacher: {
            name: "许莫淇",
            avatar: "/static/images/mqxu.jpg"
          },
          semester: "2022-2-23-2",
          finished: false,
          show: false
        },
        {
          courseId: 4,
          courseClass: "软件2216",
          courseNo: "2942577",
          courseName: "Java程序设计",
          courseCover: "/static/images/Java.jpg",
          courseTeacher: {
            name: "许莫淇",
            avatar: "/static/images/mqxu.jpg"
          },
          semester: "2022-2-23-2",
          finished: false,
          show: false
        }
      ]);
      let navBarHeight = vue.ref(Number);
      let screenWidth = vue.ref(Number);
      vue.ref(Number);
      onReady(() => {
        formatAppLog("log", "at pages/index/index.vue:214", "APP 页面初始化");
        screenWidth = uni.getSystemInfoSync().screenWidth;
        formatAppLog("log", "at pages/index/index.vue:216", "屏幕宽度" + screenWidth);
        let info = uni.createSelectorQuery().select("#nav-bar");
        info.boundingClientRect((data) => {
          formatAppLog("log", "at pages/index/index.vue:220", "导航高度" + data.height);
          navBarHeight = data.height + 40;
        }).exec();
      });
      return (_ctx, _cache) => {
        const _component_uni_status_bar = resolveEasycom(vue.resolveDynamicComponent("uni-status-bar"), ComponentsUniStatusBarUniStatusBar);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", null, [
              vue.createCommentVNode(" 自定义状态栏 "),
              vue.createVNode(_component_uni_status_bar),
              vue.createCommentVNode(" 条件编译-导航栏 "),
              vue.createElementVNode(
                "view",
                {
                  class: "f-between bg-light",
                  id: "nav-bar",
                  style: vue.normalizeStyle({ width: vue.unref(screenWidth) + "px", height: vue.unref(navBarHeight) + "px" })
                },
                [
                  vue.createElementVNode("view", null, [
                    vue.createElementVNode("text", { class: "text-info font-weight-bold ml-1 label" }, "我创建的"),
                    vue.createElementVNode("text", { class: "text-dark font-weight-bold mx-2" }, "我加入的"),
                    vue.createElementVNode("text", { class: "text-dark font-weight-bold" }, "我共建的")
                  ]),
                  vue.createElementVNode("view", { class: "text-info" }, [
                    vue.createElementVNode("text", { class: "iconfont-lg icon-add" }),
                    vue.createElementVNode("text", { class: "iconfont-lg icon-scan mx-2" })
                  ])
                ],
                4
                /* STYLE */
              ),
              vue.createCommentVNode(" 搜索框 "),
              vue.createElementVNode("view", { class: "flex my-2 px-2" }, [
                vue.createElementVNode("view", { class: "position-relative border flex-5" }, [
                  vue.createElementVNode("view", { class: "search-icon text-light-muted" }, [
                    vue.createElementVNode("text", { class: "iconfont icon-search" })
                  ]),
                  vue.createElementVNode("input", {
                    type: "text",
                    placeholder: "搜索",
                    class: "font-md search-box flex-1"
                  })
                ]),
                vue.createElementVNode("text", { class: "flex-1 text-info font-weight-bold f-center" }, "调序")
              ])
            ]),
            vue.createCommentVNode(" 主体部分 "),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(courses, (course, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: course.courseId,
                  index,
                  class: "border-bottom bg-white mb-2"
                }, [
                  vue.createElementVNode(
                    "view",
                    { class: "text-dark h4 font-weight-bold p-2" },
                    vue.toDisplayString(course.courseName),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("view", { class: "flex px-2" }, [
                    vue.createElementVNode("view", { class: "flex-1" }, [
                      vue.createElementVNode("image", {
                        src: course.courseCover,
                        class: "thumbnail"
                      }, null, 8, ["src"])
                    ]),
                    vue.createElementVNode("view", { class: "flex-4 ml-2" }, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(course.courseClass),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("view", { class: "mt-1 font-sm" }, [
                        vue.createElementVNode(
                          "text",
                          { class: "text-muted mr-2" },
                          vue.toDisplayString(course.semester),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "text",
                          { class: "text-info" },
                          vue.toDisplayString(course.courseNo),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "flex-1 text-right" }, [
                      vue.createElementVNode("text", { class: "iconfont icon-right text-muted" })
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "p-2 f-around" }, [
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode("view", { class: "iconfont icon-qiandao text-dark" }),
                      vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "签到")
                    ]),
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode("view", { class: "iconfont icon-duoren text-dark" }),
                      vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "课堂")
                    ]),
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode("view", { class: "iconfont icon-wenjianbianji text-dark" }),
                      vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "课件")
                    ]),
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode("view", { class: "iconfont icon-liwuhuodong text-dark" }),
                      vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "活动")
                    ]),
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode("view", { class: "iconfont icon-yuyin text-info" }),
                      vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "语音")
                    ])
                  ])
                ], 8, ["index"]);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            vue.createCommentVNode(" 底部导航栏 "),
            vue.createElementVNode("view", { class: "bg" }),
            vue.createElementVNode("view", { class: "flex f-around bottom" }, [
              vue.createElementVNode("view", { class: "bottom-box" }, [
                vue.createElementVNode("image", {
                  src: "/static/images/index-selected.png",
                  class: "bottom-img"
                }),
                vue.createElementVNode("view", { class: "font-sm text-info mt-1" }, "班课")
              ]),
              vue.createElementVNode("view", { class: "bottom-box" }, [
                vue.createElementVNode("image", {
                  src: "/static/images/find.png",
                  class: "bottom-img"
                }),
                vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "发现")
              ]),
              vue.createElementVNode("view", { class: "bottom-box" }, [
                vue.createElementVNode("image", {
                  src: "/static/images/my.png",
                  class: "bottom-img"
                }),
                vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "我的")
              ])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/HBuilderProjects/Demo/pages/index/index.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode("导航栏"),
      vue.createElementVNode("view", { class: "pb-1 bg-light position-relative top" }, [
        vue.createElementVNode("text", { class: "position-absolute h3 ml" }, "发现"),
        vue.createElementVNode("text", { class: "position-absolute h4 mx-2 right-0 mt-1" }, "帮助")
      ]),
      vue.createCommentVNode("主题内容  "),
      vue.createElementVNode("view", { class: "border-bottom my-5 mx-1" }, [
        vue.createElementVNode("view", { class: "flex px-2 pt-2 mb-sm bg-white" }, [
          vue.createElementVNode("view", { class: "flex-1 pb-1" }, [
            vue.createElementVNode("image", {
              src: "/static/images/ClassCircle.jpg",
              class: "image-r"
            })
          ]),
          vue.createElementVNode("view", { class: "flex-4 py-1 ml-l" }, [
            vue.createElementVNode("text", null, "课程圈")
          ]),
          vue.createElementVNode("view", { class: "flex-1 text-right pt-1" }, [
            vue.createElementVNode("text", { class: "iconfont icon-right text-light-muted font-weight-bold" })
          ])
        ]),
        vue.createElementVNode("view", { class: "flex px-2 pt-2 bg-white" }, [
          vue.createElementVNode("view", { class: "flex-1 pb-1" }, [
            vue.createElementVNode("image", {
              src: "/static/images/gongkaike.jpg",
              class: "image-r"
            })
          ]),
          vue.createElementVNode("view", { class: "flex-4 py-1 ml-l" }, [
            vue.createElementVNode("text", null, "公开课")
          ]),
          vue.createElementVNode("view", { class: "flex-1 text-right pt-1" }, [
            vue.createElementVNode("text", { class: "iconfont icon-right text-light-muted font-weight-bold" })
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "border-bottom mb-5 mx-1" }, [
        vue.createElementVNode("view", { class: "flex px-2 pt-2 mb-sm bg-white" }, [
          vue.createElementVNode("view", { class: "flex-1 pb-1" }, [
            vue.createElementVNode("image", {
              src: "/static/images/yunjiaocai.jpg",
              class: "image-r"
            })
          ]),
          vue.createElementVNode("view", { class: "flex-4 py-1 ml-l" }, [
            vue.createElementVNode("text", null, "云教材")
          ]),
          vue.createElementVNode("view", { class: "flex-1 text-right pt-1" }, [
            vue.createElementVNode("text", { class: "iconfont icon-right text-light-muted font-weight-bold" })
          ])
        ]),
        vue.createElementVNode("view", { class: "flex px-2 pt-2 bg-white" }, [
          vue.createElementVNode("view", { class: "flex-1 pb-1" }, [
            vue.createElementVNode("image", {
              src: "/static/images/shuxiang.jpg",
              class: "image-r"
            })
          ]),
          vue.createElementVNode("view", { class: "flex-4 py-1 ml-l" }, [
            vue.createElementVNode("text", null, "书香中国")
          ]),
          vue.createElementVNode("view", { class: "flex-1 text-right pt-1" }, [
            vue.createElementVNode("text", { class: "iconfont icon-right text-light-muted font-weight-bold" })
          ])
        ])
      ]),
      vue.createCommentVNode(" 底部导航栏 "),
      vue.createElementVNode("view", { class: "flex f-around bottom" }, [
        vue.createElementVNode("view", { class: "bottom-box" }, [
          vue.createElementVNode("image", {
            src: "/static/images/index.png",
            class: "bottom-img"
          }),
          vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "班课")
        ]),
        vue.createElementVNode("view", { class: "bottom-box" }, [
          vue.createElementVNode("image", {
            src: "/static/images//find-selected.png",
            class: "bottom-img"
          }),
          vue.createElementVNode("view", { class: "font-sm text-info mt-1" }, "发现")
        ]),
        vue.createElementVNode("view", { class: "bottom-box" }, [
          vue.createElementVNode("image", {
            src: "/static/images/my.png",
            class: "bottom-img"
          }),
          vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "我的")
        ])
      ])
    ]);
  }
  const PagesFindFind = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/HBuilderProjects/Demo/pages/find/find.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_status_bar = resolveEasycom(vue.resolveDynamicComponent("uni-status-bar"), ComponentsUniStatusBarUniStatusBar);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 自定义状态栏 "),
      vue.createVNode(_component_uni_status_bar)
    ]);
  }
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/HBuilderProjects/Demo/pages/my/my.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("components/uni-status-bar/uni-status-bar", ComponentsUniStatusBarUniStatusBar);
  __definePage("pages/find/find", PagesFindFind);
  __definePage("pages/my/my", PagesMyMy);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/HBuilderProjects/Demo/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
