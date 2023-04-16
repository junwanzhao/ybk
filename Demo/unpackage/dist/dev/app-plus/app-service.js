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
  const _sfc_main$5 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const ComponentsUniStatusBarUniStatusBar = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$3], ["__file", "D:/HBuilderProjects/ybk/Demo/components/uni-status-bar/uni-status-bar.vue"]]);
  const courseList = [
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
  ];
  const _sfc_main$4 = {
    __name: "index",
    setup(__props) {
      const courses = vue.reactive([...courseList]);
      let navBarHeight = vue.ref(Number);
      let screenWidth = vue.ref(Number);
      vue.ref(Number);
      vue.onMounted(() => {
        courses.list = courseList;
      });
      onReady(() => {
        formatAppLog("log", "at pages/index/index.vue:147", "APP 页面初始化");
        screenWidth = uni.getSystemInfoSync().screenWidth;
        formatAppLog("log", "at pages/index/index.vue:149", "屏幕宽度" + screenWidth);
        let info = uni.createSelectorQuery().select("#nav-bar");
        info.boundingClientRect((data) => {
          formatAppLog("log", "at pages/index/index.vue:153", "导航高度" + data.height);
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
            ))
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/HBuilderProjects/ybk/Demo/pages/index/index.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode("导航栏"),
      vue.createElementVNode("view", { class: "pb-1 bg-light position-relative top" }, [
        vue.createElementVNode("text", { class: "position-absolute h3 ml" }, "发现"),
        vue.createElementVNode("text", { class: "position-absolute h4 mx-2 right-0 mt-1" }, "帮助")
      ]),
      vue.createCommentVNode("主体内容  "),
      vue.createElementVNode("view", { class: "border-bottom border-top my-5 mx-1" }, [
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
      vue.createElementVNode("view", { class: "border-bottom border-top mb-5 mx-1" }, [
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
      ])
    ]);
  }
  const PagesFindFind = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "D:/HBuilderProjects/ybk/Demo/pages/find/find.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_status_bar = resolveEasycom(vue.resolveDynamicComponent("uni-status-bar"), ComponentsUniStatusBarUniStatusBar);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", null, [
          vue.createCommentVNode(" 自定义状态栏 "),
          vue.createVNode(_component_uni_status_bar)
        ]),
        vue.createCommentVNode("导航栏"),
        vue.createElementVNode("view", { class: "pb-1 bg-light position-relative top" }, [
          vue.createElementVNode("text", { class: "position-absolute h3 ml" }, "我的"),
          vue.createElementVNode("text", { class: "position-absolute font-md mx-2 right-0 mt-3" }, "帮助")
        ]),
        vue.createCommentVNode("头像姓名"),
        vue.createElementVNode("view", { class: "flex px-2 pt-2 mb-sm bg-white" }, [
          vue.createElementVNode("view", { class: "flex-1 pb-1" }, [
            vue.createElementVNode("image", {
              src: "/static/images/touxiang.jpg",
              class: "image-1"
            })
          ]),
          vue.createElementVNode("view", { class: "flex-4 font-name px-2 mb-5" }, [
            vue.createElementVNode("text", null, "朱绘羽")
          ]),
          vue.createElementVNode("view", { class: "flex-1 text-right pt-5 mt-2" }, [
            vue.createElementVNode("text", { class: "iconfont icon-right text-light-muted font-weight-bold" })
          ])
        ]),
        vue.createCommentVNode(" 属性值 "),
        vue.createElementVNode("view", { class: "flex border-bottom border-top bg-white mb-5" }, [
          vue.createElementVNode("view", { class: "box1 border-right py-1 px-1 font-weight-bold font" }, [
            vue.createElementVNode("text", { class: "text-info font-md" }, "10"),
            vue.createElementVNode("view", { class: "pt-1 text-light-muted" }, " 经验值 ")
          ]),
          vue.createElementVNode("view", { class: "box1 border-right py-1 px-1 font-weight-bold font" }, [
            vue.createElementVNode("text", { class: "text-info font-md" }, "0"),
            vue.createElementVNode("view", { class: "pt-1 text-light-muted" }, " 魅力值 ")
          ]),
          vue.createElementVNode("view", { class: "box1 border-right py-1 px-1 font-weight-bold font" }, [
            vue.createElementVNode("text", { class: "text-info font-md" }, "0"),
            vue.createElementVNode("view", { class: "pt-1 text-light-muted" }, " 蓝豆 ")
          ]),
          vue.createElementVNode("view", { class: "box1 py-1 px-1 font-weight-bold font" }, [
            vue.createElementVNode("text", { class: "text-info font-md" }, "0"),
            vue.createElementVNode("view", { class: "pt-1 text-light-muted" }, " 心意 ")
          ])
        ]),
        vue.createCommentVNode(" 卡片 "),
        vue.createElementVNode("view", { class: "f-around bg-white py-2 pl-1 border-bottom border-top mb-5" }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("image", {
              src: "/static/images/wdkj.jpg",
              class: "image-2"
            }),
            vue.createElementVNode("view", { class: "font-card" }, "我的空间")
          ]),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("image", {
              src: "/static/images/wdsc.jpg",
              class: "image-2"
            }),
            vue.createElementVNode("view", { class: "font-card" }, "我的收藏")
          ]),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("image", {
              src: "/static/images/xykp.jpg",
              class: "image-2"
            }),
            vue.createElementVNode("view", { class: "font-card" }, "心意卡片")
          ]),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("image", {
              src: "/static/images/rwzx.jpg",
              class: "image-2"
            }),
            vue.createElementVNode("view", { class: "font-card" }, "任务中心")
          ]),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("image", {
              src: "/static/images/xtxx.jpg",
              class: "image-2"
            }),
            vue.createElementVNode("view", { class: "font-card" }, "系统消息")
          ])
        ]),
        vue.createCommentVNode(" 主体内容 "),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("view", { class: "bg-white mb-5 px-2 py-2 flex f-between border-bottom border-top" }, [
            vue.createElementVNode("view", { class: "flex-2 font-1" }, " 我的勋章 "),
            vue.createElementVNode("view", { class: "flex-4 text-light-muted font-weight-bold text-right font-md" }, " 快来获得第一枚勋章 "),
            vue.createElementVNode("view", { class: "text-right pl-1 pt-1" }, [
              vue.createElementVNode("text", { class: "iconfont icon-right text-light-muted font-weight-bold" })
            ])
          ]),
          vue.createElementVNode("view", { class: "bg-white px-2 py-2 flex f-between border-top" }, [
            vue.createElementVNode("view", { class: "flex-2 font-1" }, " 文件暂存区 "),
            vue.createElementVNode("view", { class: "text-right pl-1 pt-1" }, [
              vue.createElementVNode("text", { class: "iconfont icon-right text-light-muted font-weight-bold" })
            ])
          ]),
          vue.createElementVNode("view", { class: "bg-white px-2 py-2 flex f-between border-top" }, [
            vue.createElementVNode("view", { class: "flex-2 font-1" }, " 分享给朋友 "),
            vue.createElementVNode("view", { class: "flex-4 text-light-muted font-weight-bold text-right font-md" }, " 累计分享成功0次 "),
            vue.createElementVNode("view", { class: "text-right pl-1 pt-1" }, [
              vue.createElementVNode("text", { class: "iconfont icon-right text-light-muted font-weight-bold" })
            ])
          ]),
          vue.createElementVNode("view", { class: "bg-white px-2 py-2 flex f-between border-top" }, [
            vue.createElementVNode("view", { class: "flex-2 font-1" }, " 用户协议 "),
            vue.createElementVNode("view", { class: "text-right pl-1 pt-1" }, [
              vue.createElementVNode("text", { class: "iconfont icon-right text-light-muted font-weight-bold" })
            ])
          ]),
          vue.createElementVNode("view", { class: "bg-white px-2 py-2 flex f-between border-top" }, [
            vue.createElementVNode("view", { class: "flex-2 font-1" }, " 隐私政策 "),
            vue.createElementVNode("view", { class: "text-right pl-1 pt-1" }, [
              vue.createElementVNode("text", { class: "iconfont icon-right text-light-muted font-weight-bold" })
            ])
          ]),
          vue.createElementVNode("view", { class: "bg-white px-2 py-2 flex f-between border-bottom border-top" }, [
            vue.createElementVNode("view", { class: "flex-2 font-1" }, " 设置 "),
            vue.createElementVNode("view", { class: "text-right pl-1 pt-1" }, [
              vue.createElementVNode("text", { class: "iconfont icon-right text-light-muted font-weight-bold" })
            ])
          ])
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/HBuilderProjects/ybk/Demo/pages/my/my.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(' 	导航栏\r\n		<view class=" pb-1 bg-light position-relative top ">\r\n			<text class="position-absolute h3 ml ">蓝墨圈</text>\r\n			<text class=" position-absolute font-md mx-2 right-0 mt-3">更多</text>\r\n		</view> '),
      vue.createCommentVNode(" 搜索框 "),
      vue.createElementVNode("view", { class: "my-2 px-1" }, [
        vue.createElementVNode("view", { class: "border search-box py-1" }, [
          vue.createElementVNode("text", { class: "iconfont icon-search iconfont-box" }),
          vue.createElementVNode("input", {
            type: "text",
            placeholder: "搜索",
            class: "font color03"
          })
        ])
      ]),
      vue.createCommentVNode(" 新手介绍 "),
      vue.createElementVNode("view", { class: "bg-white py-2 px-1 border-bottom" }, [
        vue.createElementVNode("view", { class: "flex" }, [
          vue.createElementVNode("view", { class: "flex-5 py-1" }, [
            vue.createElementVNode("image", {
              src: "/static/images/ybk2.png",
              class: "image-1"
            })
          ]),
          vue.createElementVNode("view", { class: "py-1 pr-2" }, [
            vue.createElementVNode("text", { class: "iconfont icon-cha icon-1 font-weight-bold" })
          ])
        ]),
        vue.createElementVNode("view", { class: "py-2" }, [
          vue.createElementVNode("text", { class: "font-weight-bold color04 font-md" }, "欢迎来到课程圈。如果你是新手，这里为你准备了一份简单的介绍。")
        ]),
        vue.createElementVNode("view", { class: "py-3 bg-1 rounded text-1" }, [
          vue.createElementVNode("text", null, "去看看")
        ])
      ]),
      vue.createCommentVNode(" 动态"),
      vue.createCommentVNode(" 清明 "),
      vue.createElementVNode("view", { class: "bg-white my-3 px-1 border-bottom py-1" }, [
        vue.createElementVNode("view", { class: "flex" }, [
          vue.createElementVNode("view", { class: "flex-1 py-1" }, [
            vue.createElementVNode("image", {
              src: "/static/images/moke.jpg",
              class: "image-1"
            })
          ]),
          vue.createElementVNode("view", { class: "flex-4 position-relative left-1" }, [
            vue.createElementVNode("text", { class: "position-absolute mt-2" }, "蓝墨"),
            vue.createElementVNode("view", { class: "pt-2 mt-4" }, [
              vue.createElementVNode("text", { class: "color03 font-sm" }, "2023-04-05")
            ])
          ]),
          vue.createElementVNode("view", { class: "py-1 pr-2" }, [
            vue.createElementVNode("text", { class: "iconfont icon-more icon-2 font-weight-bold" })
          ])
        ]),
        vue.createElementVNode("view", { class: "py-1" }, [
          vue.createElementVNode("text", { class: "font-weight-bold color04 font-md" }, "看今朝， 俱新意， 忆往昔， 念故人。")
        ]),
        vue.createElementVNode("image", {
          src: "/static/images/qinming.jpg",
          class: "image-2 pt-1"
        }),
        vue.createElementVNode("view", { class: "border-bottom" }, [
          vue.createElementVNode("view", { class: "bg-2 rounded px-1 my-2" }, [
            vue.createElementVNode("text", { class: "color05 font" }, "来自"),
            vue.createElementVNode("text", { class: "text-white font" }, " 蓝墨圈(学)")
          ])
        ]),
        vue.createElementVNode("view", { class: "f-around py-1" }, [
          vue.createElementVNode("view", { class: "text-center" }, [
            vue.createElementVNode("view", { class: "iconfont icon-shoucang text-dark" }),
            vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "收藏(16)")
          ]),
          vue.createElementVNode("view", { class: "text-center" }, [
            vue.createElementVNode("view", { class: "iconfont icon-dianzan1 text-dark" }),
            vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "点赞(28)")
          ]),
          vue.createElementVNode("view", { class: "text-center" }, [
            vue.createElementVNode("view", { class: "iconfont icon-pinglun text-dark" }),
            vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "评论(3)")
          ]),
          vue.createElementVNode("view", { class: "text-center" }, [
            vue.createElementVNode("view", { class: "iconfont icon-ziyuan text-dark" }),
            vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "打赏(0豆)")
          ]),
          vue.createElementVNode("view", { class: "text-center" }, [
            vue.createElementVNode("view", { class: "iconfont icon-yinyong text-dark" }),
            vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "引用(0次)")
          ])
        ])
      ]),
      vue.createCommentVNode(" 除夕 "),
      vue.createElementVNode("view", { class: "bg-white my-3 px-1 border-bottom py-1" }, [
        vue.createElementVNode("view", { class: "flex" }, [
          vue.createElementVNode("view", { class: "flex-1 py-1" }, [
            vue.createElementVNode("image", {
              src: "/static/images/moke.jpg",
              class: "image-1"
            })
          ]),
          vue.createElementVNode("view", { class: "flex-4 position-relative left-1" }, [
            vue.createElementVNode("text", { class: "position-absolute mt-2" }, "蓝墨"),
            vue.createElementVNode("view", { class: "pt-2 mt-4" }, [
              vue.createElementVNode("text", { class: "color03 font-sm" }, "2023-01-21")
            ])
          ]),
          vue.createElementVNode("view", { class: "py-1 pr-2" }, [
            vue.createElementVNode("text", { class: "iconfont icon-more icon-2 font-weight-bold" })
          ])
        ]),
        vue.createElementVNode("view", { class: "py-1" }, [
          vue.createElementVNode("text", { class: "font-weight-bold color04 font-md" }, "🎇祝愿家人皆团聚，今夜除夕阖家欢")
        ]),
        vue.createElementVNode("image", {
          src: "/static/images/chuxi.jpg",
          class: "image-2 pt-1"
        }),
        vue.createElementVNode("view", { class: "border-bottom" }, [
          vue.createElementVNode("view", { class: "bg-2 rounded px-1 my-2" }, [
            vue.createElementVNode("text", { class: "color05 font" }, "来自"),
            vue.createElementVNode("text", { class: "text-white font" }, " 蓝墨圈(学)")
          ])
        ]),
        vue.createElementVNode("view", { class: "f-around py-1" }, [
          vue.createElementVNode("view", { class: "text-center" }, [
            vue.createElementVNode("view", { class: "iconfont icon-shoucang text-dark" }),
            vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "收藏(139)")
          ]),
          vue.createElementVNode("view", { class: "text-center" }, [
            vue.createElementVNode("view", { class: "iconfont icon-dianzan1 text-dark" }),
            vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "点赞(221)")
          ]),
          vue.createElementVNode("view", { class: "text-center" }, [
            vue.createElementVNode("view", { class: "iconfont icon-pinglun text-dark" }),
            vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "评论(25)")
          ]),
          vue.createElementVNode("view", { class: "text-center" }, [
            vue.createElementVNode("view", { class: "iconfont icon-ziyuan text-dark" }),
            vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "打赏(1豆)")
          ]),
          vue.createElementVNode("view", { class: "text-center" }, [
            vue.createElementVNode("view", { class: "iconfont icon-yinyong text-dark" }),
            vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "引用(0次)")
          ])
        ])
      ]),
      vue.createCommentVNode(" 元旦 "),
      vue.createElementVNode("view", { class: "bg-white my-3 px-1 border-bottom py-1" }, [
        vue.createElementVNode("view", { class: "flex" }, [
          vue.createElementVNode("view", { class: "flex-1 py-1" }, [
            vue.createElementVNode("image", {
              src: "/static/images/moke.jpg",
              class: "image-1"
            })
          ]),
          vue.createElementVNode("view", { class: "flex-4 position-relative left-1" }, [
            vue.createElementVNode("text", { class: "position-absolute mt-2" }, "蓝墨"),
            vue.createElementVNode("view", { class: "pt-2 mt-4" }, [
              vue.createElementVNode("text", { class: "color03 font-sm" }, "2023-01-01")
            ])
          ]),
          vue.createElementVNode("view", { class: "py-1 pr-2" }, [
            vue.createElementVNode("text", { class: "iconfont icon-more icon-2 font-weight-bold" })
          ])
        ]),
        vue.createElementVNode("view", { class: "py-1" }, [
          vue.createElementVNode("text", { class: "font-weight-bold color04 font-md" }, "🎊新的一年好运爆棚，💥愿望通通实现。")
        ]),
        vue.createElementVNode("image", {
          src: "/static/images/yuandan.jpg",
          class: "image-2 pt-1"
        }),
        vue.createElementVNode("view", { class: "border-bottom" }, [
          vue.createElementVNode("view", { class: "bg-2 rounded px-1 my-2" }, [
            vue.createElementVNode("text", { class: "color05 font" }, "来自"),
            vue.createElementVNode("text", { class: "text-white font" }, " 蓝墨圈(学)")
          ])
        ]),
        vue.createElementVNode("view", { class: "f-around py-1" }, [
          vue.createElementVNode("view", { class: "text-center" }, [
            vue.createElementVNode("view", { class: "iconfont icon-shoucang text-dark" }),
            vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "收藏(16)")
          ]),
          vue.createElementVNode("view", { class: "text-center" }, [
            vue.createElementVNode("view", { class: "iconfont icon-dianzan1 text-dark" }),
            vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "点赞(35)")
          ]),
          vue.createElementVNode("view", { class: "text-center" }, [
            vue.createElementVNode("view", { class: "iconfont icon-pinglun text-dark" }),
            vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "评论(9)")
          ]),
          vue.createElementVNode("view", { class: "text-center" }, [
            vue.createElementVNode("view", { class: "iconfont icon-ziyuan text-dark" }),
            vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "打赏(3豆)")
          ]),
          vue.createElementVNode("view", { class: "text-center" }, [
            vue.createElementVNode("view", { class: "iconfont icon-yinyong text-dark" }),
            vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "引用(0次)")
          ])
        ])
      ]),
      vue.createCommentVNode(" 添加 "),
      vue.createElementVNode("image", {
        src: "/static/images/jiahao2.png",
        class: "image-3"
      })
    ]);
  }
  const PagesClassCircleClassCircle = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/HBuilderProjects/ybk/Demo/pages/class-circle/class-circle.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("components/uni-status-bar/uni-status-bar", ComponentsUniStatusBarUniStatusBar);
  __definePage("pages/find/find", PagesFindFind);
  __definePage("pages/my/my", PagesMyMy);
  __definePage("pages/class-circle/class-circle", PagesClassCircleClassCircle);
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
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/HBuilderProjects/ybk/Demo/App.vue"]]);
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
