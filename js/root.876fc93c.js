(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["root"],{"0ab1":function(t,n,o){"use strict";var e=o("d3e5"),i=o.n(e);i.a},"1ae4":function(t,n,o){t.exports=o.p+"img/logo.b2aea4e7.svg"},"2fb8":function(t,n,o){t.exports=o.p+"img/download-on-google-play-en.5d7ff6c7.svg"},"565b":function(t,n,o){"use strict";o.r(n);var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("img",{attrs:{src:o("1ae4"),alt:"Logo of ViaBus",id:"viabus-logo"}}),e("h1",[t._v("ViaBus")]),e("div",[t._v(t._s(t.theOS))]),e("button",{attrs:{id:"open-app-button"}},[t._v(t._s(t.OPEN_APP))]),e("h2",[t._v(t._s(t.DONT_HAVE_APP))]),e("DownloadButton",{attrs:{id:"download-button",os:t.os,lang:t.lang}})],1)},i=[],r=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("a",{attrs:{href:t.storeLink,alt:t.altText}},[o("img",{attrs:{src:t.imageLocation,alt:t.altText}})])])},a=[],s={EN:"Don't have the app yet?",TH:"ยังไม่มีแอป?"},u={EN:"Download on Apple App Store",TH:"ดาวน์โหลดจากแอปสโตร์ของแอปเปิล"},c={EN:"Download on Google Play Store",TH:"ดาวน์โหลดจากเพลย์สโตร์ของกูเกิล"},l={EN:"Open App",TH:"เปิดแอป"},d="https://itunes.apple.com/app/id1074208600",p="https://play.google.com/store/apps/details?id=com.indyzalab.transitia",f={props:{lang:{type:String,default:"EN"},os:{type:String,default:"android"}},computed:{altText:function(){return"ios"===this.os?u[this.lang]:c[this.lang]},imageLocation:function(){return"ios"===this.os?o("eeb0")("./download-on-app-store-".concat(this.lang.toLowerCase(),".svg")):o("2fb8")},storeLink:function(){return"ios"===this.os?d:p}}},g=f,h=o("2877"),v=Object(h["a"])(g,r,a,!1,null,null,null),w=v.exports;o("c975");function b(){var t=window.navigator.userAgent,n=window.navigator.platform,o=["Macintosh","MacIntel","MacPPC","Mac68K"],e=["Win32","Win64","Windows","WinCE"],i=["iPhone","iPad","iPod"],r=null;return-1!==o.indexOf(n)?r="Mac OS":-1!==i.indexOf(n)?r="iOS":-1!==e.indexOf(n)?r="Windows":/Android/.test(t)?r="Android":!r&&/Linux/.test(n)&&(r="Linux"),r}var O={components:{DownloadButton:w},computed:{DONT_HAVE_APP:function(){return s[this.lang]},OPEN_APP:function(){return l[this.lang]},lang:function(){return this.$route.query.lang?this.$route.query.lang.toUpperCase():"TH"},os:function(){return this.$route.query.os?this.$route.query.os.toLowerCase():"ios"},theOS:function(){return b()}}},x=O,_=(o("0ab1"),Object(h["a"])(x,e,i,!1,null,"4e12cde3",null));n["default"]=_.exports},b301:function(t,n,o){"use strict";var e=o("d039");t.exports=function(t,n){var o=[][t];return!o||!e((function(){o.call(null,n||function(){throw 1},1)}))}},bf00:function(t,n,o){t.exports=o.p+"img/download-on-app-store-en.60093c68.svg"},c975:function(t,n,o){"use strict";var e=o("23e7"),i=o("4d64").indexOf,r=o("b301"),a=[].indexOf,s=!!a&&1/[1].indexOf(1,-0)<0,u=r("indexOf");e({target:"Array",proto:!0,forced:s||u},{indexOf:function(t){return s?a.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},d3e5:function(t,n,o){},eeb0:function(t,n,o){var e={"./download-on-app-store-en.svg":"bf00","./download-on-app-store-th.svg":"f718"};function i(t){var n=r(t);return o(n)}function r(t){if(!o.o(e,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e[t]}i.keys=function(){return Object.keys(e)},i.resolve=r,t.exports=i,i.id="eeb0"},f718:function(t,n,o){t.exports=o.p+"img/download-on-app-store-th.cfce1486.svg"}}]);
//# sourceMappingURL=root.876fc93c.js.map