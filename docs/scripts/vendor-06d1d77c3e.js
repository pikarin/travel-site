!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([,,,,,,,,function(e,t,n){"use strict";n(9),n(10),n(11)},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t,n){function i(e,t){return(void 0===e?"undefined":r(e))===t}function s(e){var t=S.className,n=z._config.classPrefix||"";if(E&&(t=t.baseVal),z._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}z._config.enableClasses&&(t+=" "+n+e.join(" "+n),E?S.className.baseVal=t:S.className=t)}function a(e,t){return!!~(""+e).indexOf(t)}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):E?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function c(){var e=t.body;return e||((e=o(E?"svg":"body")).fake=!0),e}function u(e,n,r,i){var s,a,u,l,f="modernizr",d=o("div"),p=c();if(parseInt(r,10))for(;r--;)(u=o("div")).id=i?i[r]:f+(r+1),d.appendChild(u);return s=o("style"),s.type="text/css",s.id="s"+f,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",l=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),a=n(d,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=l,S.offsetHeight):d.parentNode.removeChild(d),!!a}function l(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function f(t,n,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var s=e.console;null!==i?r&&(i=i.getPropertyValue(r)):s&&s[s.error?"error":"log"].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else i=!n&&t.currentStyle&&t.currentStyle[r];return i}function d(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(l(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];i--;)s.push("("+l(t[i])+":"+r+")");return s=s.join(" or "),u("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==f(e,null,"position")})}return n}function p(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function m(e,t,r,s){function c(){l&&(delete _.style,delete _.modElem)}if(s=!i(s,"undefined")&&s,!i(r,"undefined")){var u=d(e,r);if(!i(u,"undefined"))return u}for(var l,f,m,A,h,g=["modernizr","tspan","samp"];!_.style&&g.length;)l=!0,_.modElem=o(g.shift()),_.style=_.modElem.style;for(m=e.length,f=0;f<m;f++)if(A=e[f],h=_.style[A],a(A,"-")&&(A=p(A)),_.style[A]!==n){if(s||i(r,"undefined"))return c(),"pfx"!=t||A;try{_.style[A]=r}catch(e){}if(_.style[A]!=h)return c(),"pfx"!=t||A}return c(),!1}function A(e,t){return function(){return e.apply(t,arguments)}}function h(e,t,n){var r;for(var s in e)if(e[s]in t)return!1===n?e[s]:(r=t[e[s]],i(r,"function")?A(r,n||t):r);return!1}function g(e,t,n,r,s){var a=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+x.join(a+" ")+a).split(" ");return i(t,"string")||i(t,"undefined")?m(o,t,r,s):(o=(e+" "+L.join(a+" ")+a).split(" "),h(o,t,n))}function v(e,t,r){return g(e,n,n,t,r)}function y(e,t){if("object"==(void 0===e?"undefined":r(e)))for(var n in e)R(e,n)&&y(n,e[n]);else{var i=(e=e.toLowerCase()).split("."),a=z[i[0]];if(2==i.length&&(a=a[i[1]]),void 0!==a)return z;t="function"==typeof t?t():t,1==i.length?z[i[0]]=t:(!z[i[0]]||z[i[0]]instanceof Boolean||(z[i[0]]=new Boolean(z[i[0]])),z[i[0]][i[1]]=t),s([(t&&0!=t?"":"no-")+i.join("-")]),z._trigger(e,t)}return z}var b=[],w={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){b.push({name:e,fn:t,options:n})},addAsyncTest:function(e){b.push({name:null,fn:e})}},z=function(){};z.prototype=w,z=new z;var C=[],S=t.documentElement,E="svg"===S.nodeName.toLowerCase();z.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var x=w._config.usePrefixes?"Moz O ms Webkit".split(" "):[];w._cssomPrefixes=x;var T={elem:o("modernizr")};z._q.push(function(){delete T.elem});var _={style:T.elem.style};z._q.unshift(function(){delete _.style});var L=w._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];w._domPrefixes=L,w.testAllProps=g,w.testAllProps=v,z.addTest("flexbox",v("flexBasis","1px",!0));var M="CSS"in e&&"supports"in e.CSS,P="supportsCSS"in e;z.addTest("supports",M||P),z.addTest("srcset","srcset"in o("img")),z.addTest("target",function(){var t=e.document;if(!("querySelectorAll"in t))return!1;try{return t.querySelectorAll(":target"),!0}catch(e){return!1}}),z.addTest("hidden","hidden"in o("a"));var R;!function(){var e={}.hasOwnProperty;R=i(e,"undefined")||i(e.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),w._l={},w.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),z.hasOwnProperty(e)&&setTimeout(function(){z._trigger(e,z[e])},0)},w._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},z._q.push(function(){w.addTest=y}),z.addAsyncTest(function(){var e,t,n,r=o("img"),i="sizes"in r;!i&&"srcset"in r?(t="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=function(){y("sizes",2==r.width)},r.onload=n,r.onerror=n,r.setAttribute("sizes","9px"),r.srcset=e+" 1w,"+t+" 8w",r.src=e):y("sizes",i)}),function(){var e,t,n,r,s,a;for(var o in b)if(b.hasOwnProperty(o)){if(e=[],(t=b[o]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=i(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)1===(a=e[s].split(".")).length?z[a[0]]=r:(!z[a[0]]||z[a[0]]instanceof Boolean||(z[a[0]]=new Boolean(z[a[0]])),z[a[0]][a[1]]=r),C.push((r?"":"no-")+a.join("-"))}}(),s(C),delete w.addTest,delete w.addAsyncTest;for(var B=0;B<z._q.length;B++)z._q[B]();e.Modernizr=z}(window,document)},function(e,t,n){var r;!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,i=e.parentNode;"PICTURE"===i.nodeName.toUpperCase()?(t=n.cloneNode(),i.insertBefore(t,i.firstElementChild),setTimeout(function(){i.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},i=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},s=function(){clearTimeout(t),t=setTimeout(i,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){s(),a&&a.addListener&&a.addListener(s)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),s}())}(window),function(i,s,a){"use strict";function o(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function c(){O=!1,I=i.devicePixelRatio,D={},$={},b.DPR=I||1,H.width=Math.max(i.innerWidth||0,T.clientWidth),H.height=Math.max(i.innerHeight||0,T.clientHeight),H.vw=H.width/100,H.vh=H.height/100,y=[H.height,H.width,I].join("-"),H.em=b.getEmValue(),H.rem=H.em}function u(e,t,n,r){var i,s,a;return"saveData"===L.algorithm?e>2.7?a=n+1:(s=(t-n)*(i=Math.pow(e-.6,1.5)),r&&(s+=.1*i),a=e+s):a=n>1?Math.sqrt(e*t):e,a>n}function l(e){var t,n=b.getSet(e),r=!1;"pending"!==n&&(r=y,n&&(t=b.setRes(n),b.applySetCandidate(t,e))),e[b.ns].evaled=r}function f(e,t){return e.res-t.res}function d(e,t,n){var r;return!n&&t&&(n=(n=e[b.ns].sets)&&n[n.length-1]),(r=p(t,n))&&(t=b.makeUrl(t),e[b.ns].curSrc=t,e[b.ns].curCan=r,r.res||Y(r,r.set.sizes)),r}function p(e,t){var n,r,i;if(e&&t)for(i=b.parseSet(t),e=b.makeUrl(e),n=0;n<i.length;n++)if(e===b.makeUrl(i[n].url)){r=i[n];break}return r}function m(e,t){var n,r,i,s,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)(i=a[n])[b.ns]=!0,(s=i.getAttribute("srcset"))&&t.push({srcset:s,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}function A(e,t){function n(t){var n,r=t.exec(e.substring(f));if(r)return n=r[0],f+=n.length,n}function r(){var e,n,r,a,o,c,u,l,f,p=!1,m={};for(a=0;a<s.length;a++)c=(o=s[a])[o.length-1],u=o.substring(0,o.length-1),l=parseInt(u,10),f=parseFloat(u),V.test(u)&&"w"===c?((e||n)&&(p=!0),0===l?p=!0:e=l):J.test(u)&&"x"===c?((e||n||r)&&(p=!0),f<0?p=!0:n=f):V.test(u)&&"h"===c?((r||n)&&(p=!0),0===l?p=!0:r=l):p=!0;p||(m.url=i,e&&(m.w=e),n&&(m.d=n),r&&(m.h=r),r||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,d.push(m))}for(var i,s,a,c,u,l=e.length,f=0,d=[];;){if(n(F),f>=l)return d;i=n(G),s=[],","===i.slice(-1)?(i=i.replace(Q,""),r()):function(){for(n(q),a="",c="in descriptor";;){if(u=e.charAt(f),"in descriptor"===c)if(o(u))a&&(s.push(a),a="",c="after descriptor");else{if(","===u)return f+=1,a&&s.push(a),void r();if("("===u)a+=u,c="in parens";else{if(""===u)return a&&s.push(a),void r();a+=u}}else if("in parens"===c)if(")"===u)a+=u,c="in descriptor";else{if(""===u)return s.push(a),void r();a+=u}else if("after descriptor"===c)if(o(u));else{if(""===u)return void r();c="in descriptor",f-=1}f+=1}}()}}function h(e){var t,n,r,i,s,a,c=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,u=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(r=(n=function(e){function t(){i&&(s.push(i),i="")}function n(){s[0]&&(a.push(s),s=[])}for(var r,i="",s=[],a=[],c=0,u=0,l=!1;;){if(""===(r=e.charAt(u)))return t(),n(),a;if(l){if("*"===r&&"/"===e[u+1]){l=!1,u+=2,t();continue}u+=1}else{if(o(r)){if(e.charAt(u-1)&&o(e.charAt(u-1))||!i){u+=1;continue}if(0===c){t(),u+=1;continue}r=" "}else if("("===r)c+=1;else if(")"===r)c-=1;else{if(","===r){t(),n(),u+=1;continue}if("/"===r&&"*"===e.charAt(u+1)){l=!0,u+=2;continue}}i+=r,u+=1}}}(e)).length,t=0;t<r;t++)if(i=n[t],s=i[i.length-1],function(e){return!!(c.test(e)&&parseFloat(e)>=0)||!!u.test(e)||"0"===e||"-0"===e||"+0"===e}(s)){if(a=s,i.pop(),0===i.length)return a;if(i=i.join(" "),b.matchesMedia(i))return a}return"100vw"}s.createElement("picture");var g,v,y,b={},w=!1,z=function(){},C=s.createElement("img"),S=C.getAttribute,E=C.setAttribute,x=C.removeAttribute,T=s.documentElement,_={},L={algorithm:""},M=navigator.userAgent,P=/rident/.test(M)||/ecko/.test(M)&&M.match(/rv\:(\d+)/)&&RegExp.$1>35,R="currentSrc",B=/\s+\+?\d+(e\d+)?w/,N=/(\([^)]+\))?\s*(.+)/,k=i.picturefillCFG,W="font-size:100%!important;",O=!0,D={},$={},I=i.devicePixelRatio,H={px:1,in:96},U=s.createElement("a"),j=!1,q=/^[ \t\n\r\u000c]+/,F=/^[, \t\n\r\u000c]+/,G=/^[^ \t\n\r\u000c]+/,Q=/[,]+$/,V=/^\d+$/,J=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,K=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},X=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},Z=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n},n=X(function(e){return"return "+t((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(t,r){var i;if(!(t in D))if(D[t]=!1,r&&(i=t.match(e)))D[t]=i[1]*H[i[2]];else try{D[t]=new Function("e",n(t))(H)}catch(e){}return D[t]}}(),Y=function(e,t){return e.w?(e.cWidth=b.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ee=function(e){if(w){var t,n,r,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),t=i.elements||b.qsa(i.context||s,i.reevaluate||i.reselect?b.sel:b.selShort),r=t.length){for(b.setupRun(i),j=!0,n=0;n<r;n++)b.fillImg(t[n],i);b.teardownRun(i)}}};i.console&&console.warn,R in C||(R="src"),_["image/jpeg"]=!0,_["image/gif"]=!0,_["image/png"]=!0,_["image/svg+xml"]=s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),b.ns=("pf"+(new Date).getTime()).substr(0,9),b.supSrcset="srcset"in C,b.supSizes="sizes"in C,b.supPicture=!!i.HTMLPictureElement,b.supSrcset&&b.supPicture&&!b.supSizes&&function(e){C.srcset="data:,a",e.src="data:,a",b.supSrcset=C.complete===e.complete,b.supPicture=b.supSrcset&&b.supPicture}(s.createElement("img")),b.supSrcset&&!b.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=s.createElement("img"),n=function(){2===t.width&&(b.supSizes=!0),v=b.supSrcset&&!b.supSizes,w=!0,setTimeout(ee)};t.onload=n,t.onerror=n,t.setAttribute("sizes","9px"),t.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",t.src=e}():w=!0,b.selShort="picture>img,img[srcset]",b.sel=b.selShort,b.cfg=L,b.DPR=I||1,b.u=H,b.types=_,b.setSize=z,b.makeUrl=X(function(e){return U.href=e,U.href}),b.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},b.matchesMedia=function(){return i.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?b.matchesMedia=function(e){return!e||matchMedia(e).matches}:b.matchesMedia=b.mMQ,b.matchesMedia.apply(this,arguments)},b.mMQ=function(e){return!e||Z(e)},b.calcLength=function(e){var t=Z(e,!0)||!1;return t<0&&(t=!1),t},b.supportsType=function(e){return!e||_[e]},b.parseSize=X(function(e){var t=(e||"").match(N);return{media:t&&t[1],length:t&&t[2]}}),b.parseSet=function(e){return e.cands||(e.cands=A(e.srcset,e)),e.cands},b.getEmValue=function(){var e;if(!g&&(e=s.body)){var t=s.createElement("div"),n=T.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",T.style.cssText=W,e.style.cssText=W,e.appendChild(t),g=t.offsetWidth,e.removeChild(t),g=parseFloat(g,10),T.style.cssText=n,e.style.cssText=r}return g||16},b.calcListLength=function(e){if(!(e in $)||L.uT){var t=b.calcLength(h(e));$[e]=t||H.width}return $[e]},b.setRes=function(e){var t;if(e)for(var n=0,r=(t=b.parseSet(e)).length;n<r;n++)Y(t[n],e.sizes);return t},b.setRes.res=Y,b.applySetCandidate=function(e,t){if(e.length){var n,r,i,s,a,o,c,l,p,m=t[b.ns],A=b.DPR;if(o=m.curSrc||t[R],(c=m.curCan||d(t,o,e[0].set))&&c.set===e[0].set&&((p=P&&!t.complete&&c.res-.1>A)||(c.cached=!0,c.res>=A&&(a=c))),!a)for(e.sort(f),a=e[(s=e.length)-1],r=0;r<s;r++)if((n=e[r]).res>=A){a=e[i=r-1]&&(p||o!==b.makeUrl(n.url))&&u(e[i].res,n.res,A,e[i].cached)?e[i]:n;break}a&&(l=b.makeUrl(a.url),m.curSrc=l,m.curCan=a,l!==o&&b.setSrc(t,a),b.setSize(t))}},b.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},b.getSet=function(e){var t,n,r,i=!1,s=e[b.ns].sets;for(t=0;t<s.length&&!i;t++)if((n=s[t]).srcset&&b.matchesMedia(n.media)&&(r=b.supportsType(n.type))){"pending"===r&&(n=r),i=n;break}return i},b.parseSets=function(e,t,n){var r,i,s,a,o=t&&"PICTURE"===t.nodeName.toUpperCase(),c=e[b.ns];(void 0===c.src||n.src)&&(c.src=S.call(e,"src"),c.src?E.call(e,"data-pfsrc",c.src):x.call(e,"data-pfsrc")),(void 0===c.srcset||n.srcset||!b.supSrcset||e.srcset)&&(r=S.call(e,"srcset"),c.srcset=r,a=!0),c.sets=[],o&&(c.pic=!0,m(t,c.sets)),c.srcset?(i={srcset:c.srcset,sizes:S.call(e,"sizes")},c.sets.push(i),(s=(v||c.src)&&B.test(c.srcset||""))||!c.src||p(c.src,i)||i.has1x||(i.srcset+=", "+c.src,i.cands.push({url:c.src,d:1,set:i}))):c.src&&c.sets.push({srcset:c.src,sizes:null}),c.curCan=null,c.curSrc=void 0,c.supported=!(o||i&&!b.supSrcset||s&&!b.supSizes),a&&b.supSrcset&&!c.supported&&(r?(E.call(e,"data-pfsrcset",r),e.srcset=""):x.call(e,"data-pfsrcset")),c.supported&&!c.srcset&&(!c.src&&e.src||e.src!==b.makeUrl(c.src))&&(null===c.src?e.removeAttribute("src"):e.src=c.src),c.parsed=!0},b.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[b.ns]||(e[b.ns]={}),n=e[b.ns],(r||n.evaled!==y)&&(n.parsed&&!t.reevaluate||b.parseSets(e,e.parentNode,t),n.supported?n.evaled=y:l(e))},b.setupRun=function(){j&&!O&&I===i.devicePixelRatio||c()},b.supPicture?(ee=z,b.fillImg=z):function(){var e,t=i.attachEvent?/d$|^c/:/d$|^c|^i/,n=function(){var i=s.readyState||"";r=setTimeout(n,"loading"===i?200:999),s.body&&(b.fillImgs(),(e=e||t.test(i))&&clearTimeout(r))},r=setTimeout(n,s.body?9:99),a=T.clientHeight;K(i,"resize",function(e,t){var n,r,i=function(){var s=new Date-r;s<t?n=setTimeout(i,t-s):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(i,t))}}(function(){O=Math.max(i.innerWidth||0,T.clientWidth)!==H.width||T.clientHeight!==a,a=T.clientHeight,O&&b.fillImgs()},99)),K(s,"readystatechange",n)}(),b.picturefill=ee,b.fillImgs=ee,b.teardownRun=z,ee._=b,i.picturefillCFG={pf:b,push:function(e){var t=e.shift();"function"==typeof b[t]?b[t].apply(b,e):(L[t]=e[0],j&&b.fillImgs({reselect:!0}))}};for(;k&&k.length;)i.picturefillCFG.push(k.shift());i.picturefill=ee,"object"==typeof e&&"object"==typeof e.exports?e.exports=ee:void 0!==(r=function(){return ee}.call(t,n,t,e))&&(e.exports=r),b.supPicture||(_["image/webp"]=function(e,t){var n=new i.Image;return n.onerror=function(){_[e]=!1,ee()},n.onload=function(){_[e]=1===n.width,ee()},n.src=t,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)},function(e,t){!function(t,n){var r=n(t,t.document);t.lazySizes=r,"object"==typeof e&&e.exports&&(e.exports=r)}(window,function(e,t){"use strict";if(t.getElementsByClassName){var n,r,i=t.documentElement,s=e.Date,a=e.HTMLPictureElement,o=e.addEventListener,c=e.setTimeout,u=e.requestAnimationFrame||c,l=e.requestIdleCallback,f=/^picture$/i,d=["load","error","lazyincluded","_lazyloaded"],p={},m=Array.prototype.forEach,A=function(e,t){return p[t]||(p[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),p[t].test(e.getAttribute("class")||"")&&p[t]},h=function(e,t){A(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},g=function(e,t){var n;(n=A(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},v=function(e,t,n){var r=n?"addEventListener":"removeEventListener";n&&v(e,t),d.forEach(function(n){e[r](n,t)})},y=function(e,r,i,s,a){var o=t.createEvent("CustomEvent");return i||(i={}),i.instance=n,o.initCustomEvent(r,!s,!a,i),e.dispatchEvent(o),o},b=function(t,n){var i;!a&&(i=e.picturefill||r.pf)?i({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},w=function(e,t){return(getComputedStyle(e,null)||{})[t]},z=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},C=function(){var e,n,r=[],i=[],s=r,a=function(){var t=s;for(s=r.length?i:r,e=!0,n=!1;t.length;)t.shift()();e=!1},o=function(r,i){e&&!i?r.apply(this,arguments):(s.push(r),n||(n=!0,(t.hidden?c:u)(a)))};return o._lsFlush=a,o}(),S=function(e,t){return t?function(){C(e)}:function(){var t=this,n=arguments;C(function(){e.apply(t,n)})}},E=function(e){var t,n=0,r=666,i=function(){t=!1,n=s.now(),e()},a=l?function(){l(i,{timeout:r}),666!==r&&(r=666)}:S(function(){c(i)},!0);return function(e){var i;(e=!0===e)&&(r=44),t||(t=!0,(i=125-(s.now()-n))<0&&(i=0),e||i<9&&l?a():c(a,i))}},x=function(e){var t,n,r=function(){t=null,e()},i=function(){var e=s.now()-n;e<99?c(i,99-e):(l||r)(r)};return function(){n=s.now(),t||(t=c(i,99))}},T=function(){var a,u,l,d,p,z,T,L,M,P,R,B,N,k,W=/^img$/i,O=/^iframe$/i,D="onscroll"in e&&!/glebot/.test(navigator.userAgent),$=0,I=0,H=-1,U=function(e){I--,e&&e.target&&v(e.target,U),(!e||I<0||!e.target)&&(I=0)},j=function(e,n){var r,s=e,a="hidden"==w(t.body,"visibility")||"hidden"!=w(e,"visibility");for(L-=n,R+=n,M-=n,P+=n;a&&(s=s.offsetParent)&&s!=t.body&&s!=i;)(a=(w(s,"opacity")||1)>0)&&"visible"!=w(s,"overflow")&&(r=s.getBoundingClientRect(),a=P>r.left&&M<r.right&&R>r.top-1&&L<r.bottom+1);return a},q=function(){var e,s,o,c,l,f,p,m,A,h=n.elements;if((d=r.loadMode)&&I<8&&(e=h.length)){s=0,H++,null==N&&("expand"in r||(r.expand=i.clientHeight>500&&i.clientWidth>500?500:370),B=r.expand,N=B*r.expFactor),$<N&&I<1&&H>2&&d>2&&!t.hidden?($=N,H=0):$=d>1&&H>1&&I<6?B:0;for(;s<e;s++)if(h[s]&&!h[s]._lazyRace)if(D)if((m=h[s].getAttribute("data-expand"))&&(f=1*m)||(f=$),A!==f&&(z=innerWidth+f*k,T=innerHeight+f,p=-1*f,A=f),o=h[s].getBoundingClientRect(),(R=o.bottom)>=p&&(L=o.top)<=T&&(P=o.right)>=p*k&&(M=o.left)<=z&&(R||P||M||L)&&(r.loadHidden||"hidden"!=w(h[s],"visibility"))&&(u&&I<3&&!m&&(d<3||H<4)||j(h[s],f))){if(Z(h[s]),l=!0,I>9)break}else!l&&u&&!c&&I<4&&H<4&&d>2&&(a[0]||r.preloadAfterLoad)&&(a[0]||!m&&(R||P||M||L||"auto"!=h[s].getAttribute(r.sizesAttr)))&&(c=a[0]||h[s]);else Z(h[s]);c&&!l&&Z(c)}},F=E(q),G=function(e){h(e.target,r.loadedClass),g(e.target,r.loadingClass),v(e.target,V),y(e.target,"lazyloaded")},Q=S(G),V=function(e){Q({target:e.target})},J=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},K=function(e){var t,n=e.getAttribute(r.srcsetAttr);(t=r.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},X=S(function(e,t,n,i,s){var a,o,u,d,p,A;(p=y(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?h(e,r.autosizesClass):e.setAttribute("sizes",i)),o=e.getAttribute(r.srcsetAttr),a=e.getAttribute(r.srcAttr),s&&(d=(u=e.parentNode)&&f.test(u.nodeName||"")),A=t.firesLoad||"src"in e&&(o||a||d),p={target:e},A&&(v(e,U,!0),clearTimeout(l),l=c(U,2500),h(e,r.loadingClass),v(e,V,!0)),d&&m.call(u.getElementsByTagName("source"),K),o?e.setAttribute("srcset",o):a&&!d&&(O.test(e.nodeName)?J(e,a):e.src=a),s&&(o||d)&&b(e,{src:a})),e._lazyRace&&delete e._lazyRace,g(e,r.lazyClass),C(function(){(!A||e.complete&&e.naturalWidth>1)&&(A?U(p):I--,G(p))},!0)}),Z=function(e){var t,n=W.test(e.nodeName),i=n&&(e.getAttribute(r.sizesAttr)||e.getAttribute("sizes")),s="auto"==i;(!s&&u||!n||!e.getAttribute("src")&&!e.srcset||e.complete||A(e,r.errorClass))&&(t=y(e,"lazyunveilread").detail,s&&_.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,I++,X(e,t,s,i,n))},Y=function(){if(!u)if(s.now()-p<999)c(Y,999);else{var e=x(function(){r.loadMode=3,F()});u=!0,r.loadMode=3,F(),o("scroll",function(){3==r.loadMode&&(r.loadMode=2),e()},!0)}};return{_:function(){p=s.now(),n.elements=t.getElementsByClassName(r.lazyClass),a=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),k=r.hFac,o("scroll",F,!0),o("resize",F,!0),e.MutationObserver?new MutationObserver(F).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i.addEventListener("DOMNodeInserted",F,!0),i.addEventListener("DOMAttrModified",F,!0),setInterval(F,999)),o("hashchange",F,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t.addEventListener(e,F,!0)}),/d$|^c/.test(t.readyState)?Y():(o("load",Y),t.addEventListener("DOMContentLoaded",F),c(Y,2e4)),n.elements.length?(q(),C._lsFlush()):F()},checkElems:F,unveil:Z}}(),_=function(){var e,n=S(function(e,t,n,r){var i,s,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),f.test(t.nodeName||""))for(s=0,a=(i=t.getElementsByTagName("source")).length;s<a;s++)i[s].setAttribute("sizes",r);n.detail.dataAttr||b(e,n.detail)}),i=function(e,t,r){var i,s=e.parentNode;s&&(r=z(e,s,r),(i=y(e,"lazybeforesizes",{width:r,dataAttr:!!t})).defaultPrevented||(r=i.detail.width)&&r!==e._lazysizesWidth&&n(e,s,i,r))},s=x(function(){var t,n=e.length;if(n)for(t=0;t<n;t++)i(e[t])});return{_:function(){e=t.getElementsByClassName(r.autosizesClass),o("resize",s)},checkElems:s,updateElem:i}}(),L=function(){L.i||(L.i=!0,_._(),T._())};return function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0};r=e.lazySizesConfig||e.lazysizesConfig||{};for(t in n)t in r||(r[t]=n[t]);e.lazySizesConfig=r,c(function(){r.init&&L()})}(),n={cfg:r,autoSizer:_,loader:T,init:L,uP:b,aC:h,rC:g,hC:A,fire:y,gW:z,rAF:C}}})}]);