(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{354:function(t,e,n){},384:function(t,e,n){var o=n(19),i=Date.prototype,a=i.toString,r=i.getTime;"Invalid Date"!=String(new Date(NaN))&&o(i,"toString",(function(){var t=r.call(this);return t==t?a.call(this):"Invalid Date"}))},385:function(t,e,n){"use strict";n(354)},393:function(t,e,n){"use strict";n.r(e);n(384),n(104),n(192);var o={name:"optimized",methods:{optimizedCountdown:function(t){var e,n,o,i,a,r=new Date(t).getTime()-(new Date).getTime(),c=function(t){return t>=0&&t<10?"0"+t:""+t};return r>=0?(e=Math.floor(r/1e3/60/60/24),n=Math.floor(r/1e3/60/60%24),o=Math.floor(r/1e3/60%60),i=Math.floor(r/1e3%60),a=Math.floor(r%1e3),"距离***还有：".concat(c(e),"天").concat(c(n),"小时").concat(c(o),"分钟").concat(c(i),"秒").concat(c(a),"毫秒")):"倒计时结束"},clearTime:function(){for(var t=0;t<1e3;t++)window.clearInterval(t)}},mounted:function(){var t=this;setInterval((function(){var e=document.querySelector("#optimized");e&&(e.innerHTML=t.optimizedCountdown("2028-8-13 00:00:00"))}),100)},beforeDestroy:function(){this.clearTime()}},i=(n(385),n(25)),a=Object(i.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"optimized",attrs:{id:"optimized"}})}),[],!1,null,"fa46f548",null);e.default=a.exports}}]);