webpackJsonp([1],[,,,,,,,,,,,,,,,function(e,t,n){"use strict";var i=n(27),o=n.n(i),s=n(29),l=n.n(s),u=n(24),a={ContextMenu:u.a,ContextMenuItem:u.a.Item},r=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];l()(a).forEach(function(t){e.component(t,a[t])})};"undefined"!=typeof window&&window.Vue&&r(window.Vue),t.a=o()(a,{install:r})},function(e,t){},,function(e,t,n){function i(e){n(59)}var o=n(3)(n(20),n(65),i,null,null);e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),o=n(18),s=n.n(o),l=n(17),u=n.n(l),a=n(16),r=(n.n(a),n(15));i.default.config.productionTip=!1,i.default.use(u.a),i.default.use(r.a),new i.default({el:"#app",template:"<App/>",components:{App:s.a}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(62),o=n.n(i);t.default={components:{test:o.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{menu:"",operate:""}},methods:{handleShow:function(e){this.menu=e,this.operate="",console.log(this.menu)},handleSelect:function(e){this.operate=e,console.log(this.operate)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(30),o=n.n(i);t.default={name:"ContextMenuItem",props:{label:{type:[String,Number],required:!0},value:{type:[String,Number],required:!0},disabled:{type:Boolean,default:!1}},methods:{handleClick:function(e){this.disabled?this.$emit("click",""):this.$emit("click",e)}},computed:{styles:function(){var e={};return e.marginLeft=this.hasIcon?"4px":"0",e},classes:function(){return["context-menu-item",o()({},"context-menu-item-disabled",this.disabled)]}},data:function(){return{prefixCls:"context-menu",hasIcon:!1}},mounted:function(){this.hasIcon=void 0!=this.$slots.default}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(26),o=n(25);t.default={name:"ContextMenu",props:{trigger:{validator:function(e){return n.i(i.a)(e,["contextmenu"])},default:"contextmenu"},value:{type:[Object,String],default:"",required:!0},content:{type:[String,Number],default:""},width:{type:[String,Number],default:"200"}},directives:{clickoutside:o.a},data:function(){return{prefixCls:"context-menu",visible:!1,stop:0,left:0}},computed:{styles:function(){return{width:this.width,top:(this.top||0)+"px",left:(this.left||0)+"px"}}},methods:{handleContextMenu:function(e){e.preventDefault(),this.visible=!0,this.setMenuPosition(e),this.$emit("handle-show",this.value)},handleClose:function(){this.visible=!1},setMenuPosition:function(e){var t=n.i(i.b)(e),o=t.x,s=t.y;this.left=o,this.top=s;var l=this.$refs.menuContent,u=(l.style.minHeight||l.style.height).replace("px","")||32,a=(l.style.minWidth||l.style.width).replace("px","")||32,r=l.scrollHeight||u,c=l.scrollWidth||a,d=window.innerHeight-r-25,f=window.innerWidth-c-25;this.top>d&&(this.top=d),this.left>f&&(this.left=f)}}}},function(e,t,n){"use strict";var i=n(64),o=n.n(i),s=n(63),l=n.n(s);o.a.Item=l.a,t.a=o.a},function(e,t,n){"use strict";t.a={bind:function(e,t,n){function i(n){if(e.contains(n.target))return!1;t.expression&&t.value(n)}e.__vueClickOutside__=i,document.addEventListener("click",i)},update:function(){},unbind:function(e,t){document.removeEventListener("click",e.__vueClickOutside__),delete e.__vueClickOutside__}}},function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++)if(e===t[n])return!0;return!1}function o(e){var t=0,n=0;if(!e)var e=window.event;return e.pageX||e.pageY?(t=e.pageX,n=e.pageY):(e.clientX||e.clientY)&&(t=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,n=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:t,y:n}}t.a=i,t.b=o},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t,n){var i=n(3)(n(21),n(67),null,null,null);e.exports=i.exports},function(e,t,n){function i(e){n(61)}var o=n(3)(n(22),n(68),i,null,null);e.exports=o.exports},function(e,t,n){function i(e){n(60)}var o=n(3)(n(23),n(66),i,null,null);e.exports=o.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("test")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:e.handleClose,expression:"handleClose"}],class:[e.prefixCls,e.prefixCls+"-rel"]},[n("div",{class:e.prefixCls+"-rel",on:{contextmenu:function(t){e.handleContextMenu(t)}}},[e._t("default")],2),e._v(" "),n("transition",{attrs:{name:"fade"}},[n("ul",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],ref:"menuContent",class:e.prefixCls+"-content",style:e.styles,on:{mouseup:e.handleClose}},[e._t("content",[e._v(e._s(e.content))])],2)])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("h2",[e._v("result")]),e._v(" "),n("h4",[n("label",{attrs:{for:""}},[e._v("menu:")]),e._v(" "),n("span",[e._v(e._s(e.menu)+"\n              ")]),e._v("\n                       \n              "),n("label",{attrs:{for:""}},[e._v("operate:")]),e._v(" "),n("span",[e._v(" "+e._s(e.operate)+"\n              ")])])]),e._v(" "),n("br"),e._v(" "),n("div",[n("ContextMenu",{attrs:{value:{id:1,name:"哈哈哈"}},on:{"handle-show":e.handleShow}},[n("div",{style:{width:"1910px",height:"300px",backgroundColor:"pink"}},[e._v("哈哈哈")]),e._v(" "),n("div",{slot:"content"},[n("ContextMenuItem",{attrs:{label:"哈哈哈1",value:"哈哈哈1"},on:{click:e.handleSelect}},[n("span",[e._v("icon1")])]),e._v(" "),n("ContextMenuItem",{attrs:{label:"哈哈哈2",value:"哈哈哈2"},on:{click:e.handleSelect}})],1)])],1),e._v(" "),n("br"),e._v(" "),n("div",[n("ContextMenu",{attrs:{value:{id:2,name:"呵呵呵"}},on:{"handle-show":e.handleShow}},[n("Button",{attrs:{type:"info"}},[e._v("呵呵呵")]),e._v(" "),n("div",{slot:"content"},[n("ContextMenuItem",{attrs:{label:"呵呵呵1",value:"呵呵呵1",disabled:""},on:{click:e.handleSelect}},[n("span",[e._v("icon2")])]),e._v(" "),n("ContextMenuItem",{attrs:{label:"呵呵呵2",value:"呵呵呵2"},on:{click:e.handleSelect}})],1)],1)],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"disabled",class:e.classes,on:{click:function(t){e.handleClick(e.value)}}},[e._t("default"),e._v(" "),n("span",{style:e.styles},[e._v(e._s(e.label))])],2)},staticRenderFns:[]}}],[19]);