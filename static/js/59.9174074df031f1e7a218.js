(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{649:function(t,s,a){"use strict";a.r(s);var e={data:()=>({visible:!0}),methods:{handleClick(t){console.log(t),alert("click this message!")}}},l=a(0),i=Object(l.a)(e,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"zarm-vue-demo"},[a("div",{staticClass:"za-panel"},[t._m(0),t._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-message",[t._v("普通")]),t._v(" "),a("za-message",{attrs:{theme:"error"}},[t._v("自定义主题")]),t._v(" "),a("za-message",{attrs:{icon:"wrong-round"}},[t._v("自定义图标")])],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(1),t._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-message",{attrs:{hasArrow:""},on:{click:t.handleClick}},[t._v("链接样式的")]),t._v(" "),a("za-message",{attrs:{closable:"",visible:t.visible},on:{"update:visible":function(s){t.visible=s}}},[t._v("可关闭的")])],1)])]),t._m(2)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel__header"},[s("div",{staticClass:"za-panel__title"},[this._v("基本用法\n\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel__header"},[s("div",{staticClass:"za-panel__title"},[this._v("可操作\n\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"zarm-markdown-doc"},[a("h2",[t._v("消息 Message")]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("基本用法")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-message")]),t._v(">")]),t._v("普通"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-message")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-message")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("theme")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"error"')]),t._v(">")]),t._v("自定义主题"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-message")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-message")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("icon")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"wrong-round"')]),t._v(">")]),t._v("自定义图标"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-message")]),t._v(">")]),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("可操作")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-message")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("hasArrow")]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleClick"')]),t._v(">")]),t._v("链接样式的"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-message")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-comment"},[t._v("\x3c!-- 也可以不绑定visible --\x3e")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-message")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("closable")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":visible.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"visible"')]),t._v(">")]),t._v("可关闭的"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-message")]),t._v(">")]),t._v("\n")])])]),t._v(" "),a("h3",[t._v("Vue Script")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("<script name="),a("span",{staticClass:"hljs-string"},[t._v('"vue"')]),t._v(">\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data() {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[t._v("visible")]),t._v(": "),a("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v("\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    handleClick(event) {\n      "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(event);\n      alert("),a("span",{staticClass:"hljs-string"},[t._v("'click this message!'")]),t._v(");\n    }\n  },\n};\n"),a("span",{staticClass:"xml"},[a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")])]),t._v("\n")])]),t._v(" "),a("h3",[t._v("API")]),t._v(" "),a("h4",[t._v("Message Attributes")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("theme")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'primary'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'primary', 'success', 'warning', 'error'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("主题")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("icon")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置图标")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("closable")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示关闭按钮")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("has-arrow")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示箭头")])])])]),t._v(" "),a("h4",[t._v("Message Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("click")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("click 时触发的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("event 事件对象")])])])])])}],!1,null,null,null);s.default=i.exports},677:function(t,s,a){},802:function(t,s,a){"use strict";a.r(s);var e=a(649),l=a(285),i=a(286),v=a(284),_=(a(677),{components:{Container:l.a,PageHeader:i.a,PageFooter:v.a,Demo:e.default}}),n=a(0),c=Object(n.a)(_,function(){var t=this.$createElement,s=this._self._c||t;return s("Container",{staticClass:"message-page"},[s("PageHeader",{attrs:{title:"消息 Message"}}),this._v(" "),s("Demo"),this._v(" "),s("PageFooter")],1)},[],!1,null,null,null);s.default=c.exports}}]);