(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{157:function(t,e,n){"use strict";n.r(e);var o={name:"DialogPrimaryDefault",mixins:[n(79).a]},s=n(0),a=Object(s.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"playground"},[n("vnt-button",{attrs:{click:t.showDialog}},[t._v("Open Dialog")]),t._v(" "),n("div",{staticClass:"result"},[n("br"),t._v("opened: "+t._s(t.opened)),n("br"),t._v("result: "+t._s(t.result))]),t._v(" "),n("vnt-dialog",{attrs:{opened:t.opened,title:"Notice",content:"This is a dialog with a default action button."},on:{"update:opened":function(e){t.opened=e},result:t.onresult}},[n("vnt-dialog-btn-primary",{attrs:{result:"ok",default:""}},[t._v("OK")])],1)],1)},[],!1,null,null,null);e.default=a.exports},79:function(t,e,n){"use strict";var o=n(76);e.a={components:{VntButton:o.b,VntDialog:o.d},data:()=>({result:void 0,opened:!1}),methods:{showDialog(){this.opened=!0},onresult(t){this.result=t}}}}}]);