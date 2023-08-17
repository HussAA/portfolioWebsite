/*! For license information please see 73f43e5ccbd39e2fbabf8eb1be0ac7b2564fee90-502efb8c04cfc7b637c4.js.LICENSE.txt */
(self.webpackChunkportfolio_website=self.webpackChunkportfolio_website||[]).push([[542],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},2448:function(e,t,n){"use strict";var r=n(7294),o=n(9583);const i="undefined"!=typeof window;t.Z=()=>{const{0:e,1:t}=(0,r.useState)(!1);return i&&window.addEventListener("scroll",(()=>{!e&&window.pageYOffset>400?t(!0):e&&window.pageYOffset<=400&&t(!1)})),r.createElement(o.nbd,{className:"scrollTop",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},style:{height:40,display:e?"flex":"none"}})}},8812:function(e,t,n){"use strict";n.d(t,{ZP:function(){return a}});var r=n(7294);const o=({color:e="currentColor",direction:t="left",distance:n="md",duration:o=.4,easing:i="cubic-bezier(0, 0, 0, 1)",hideOutline:a=!0,label:s,lines:u=3,onToggle:f,render:c,rounded:l=!1,size:p=32,toggle:d,toggled:h})=>{const[m,v]=(0,r.useState)(!1),g=Math.max(12,Math.min(48,p)),y=Math.round((48-g)/2),b=g/12,x=Math.round(b),w=g/(u*(("lg"===n?.25:"sm"===n?.75:.5)+(3===u?1:1.25))),O=Math.round(w),E=x*u+O*(u-1),S=Math.round((48-E)/2),k=parseFloat((g/(3===u?"lg"===n?4.0425:"sm"===n?5.1625:4.6325:"lg"===n?6.7875:"sm"===n?8.4875:7.6675)-(b-x+(w-O))/(3===u?1:2)/(4/3)).toFixed(2)),j=Math.max(0,o),C={cursor:"pointer",height:"48px",position:"relative",transition:`${j}s ${i}`,userSelect:"none",width:"48px"},D={background:e,height:`${x}px`,left:`${y}px`,position:"absolute"};a&&(C.outline="none"),l&&(D.borderRadius="9em");const M=d||v,T=void 0!==h?h:m;return c({barHeight:x,barStyles:D,burgerStyles:C,easing:i,handler:()=>{M(!T),"function"==typeof f&&f(!T)},isLeft:"left"===t,isToggled:T,label:s,margin:O,move:k,time:j,topOffset:S,width:g})};function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}var a=e=>r.createElement(o,i({},e,{render:e=>r.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:e.handler,onKeyUp:t=>"Enter"===t.key&&e.handler(),role:"button",style:{...e.burgerStyles,transform:""+(e.isToggled?`rotate(${90*(e.isLeft?-1:1)}deg)`:"none")},tabIndex:0},r.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?`rotate(${45*(e.isLeft?-1:1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move}px)`:"none")}}),r.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?"scaleX(0)":"none")}}),r.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+2*e.barHeight+2*e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?`rotate(${45*(e.isLeft?1:-1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${-1*e.move}px)`:"none")}}))}))},4405:function(e,t,n){"use strict";n.d(t,{w_:function(){return f}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function u(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),u(e.child))}))}function f(e){return function(t){return r.createElement(c,a({attr:a({},e.attr)},t),u(e.child))}}function c(e){var t=function(t){var n,o=e.attr,i=e.size,u=e.title,f=s(e,["attr","size","title"]),c=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,f,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},1385:function(e,t,n){"use strict";n.d(t,{C8:function(){return o},dK:function(){return a},mq:function(){return i}});var r=n(7294),o=r.createContext(),i=r.createContext();function a(e){var t=e.children,n=r.useState(null),a=n[0],s=n[1],u=r.useRef(!1);r.useEffect((function(){return function(){u.current=!0}}),[]);var f=r.useCallback((function(e){u.current||s(e)}),[]);return r.createElement(o.Provider,{value:a},r.createElement(i.Provider,{value:f},t))}},1480:function(e,t,n){"use strict";n.d(t,{r:function(){return ke}});var r=n(7294),o=n(1385),i=n(7139),a=n(3935);function s(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function u(e){return e instanceof s(e).Element||e instanceof Element}function f(e){return e instanceof s(e).HTMLElement||e instanceof HTMLElement}function c(e){return"undefined"!=typeof ShadowRoot&&(e instanceof s(e).ShadowRoot||e instanceof ShadowRoot)}var l=Math.max,p=Math.min,d=Math.round;function h(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function m(){return!/^((?!chrome|android).)*safari/i.test(h())}function v(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&f(e)&&(o=e.offsetWidth>0&&d(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&d(r.height)/e.offsetHeight||1);var a=(u(e)?s(e):window).visualViewport,c=!m()&&n,l=(r.left+(c&&a?a.offsetLeft:0))/o,p=(r.top+(c&&a?a.offsetTop:0))/i,h=r.width/o,v=r.height/i;return{width:h,height:v,top:p,right:l+h,bottom:p+v,left:l,x:l,y:p}}function g(e){var t=s(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function y(e){return e?(e.nodeName||"").toLowerCase():null}function b(e){return((u(e)?e.ownerDocument:e.document)||window.document).documentElement}function x(e){return v(b(e)).left+g(e).scrollLeft}function w(e){return s(e).getComputedStyle(e)}function O(e){var t=w(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function E(e,t,n){void 0===n&&(n=!1);var r,o,i=f(t),a=f(t)&&function(e){var t=e.getBoundingClientRect(),n=d(t.width)/e.offsetWidth||1,r=d(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),u=b(t),c=v(e,a,n),l={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(i||!i&&!n)&&(("body"!==y(t)||O(u))&&(l=(r=t)!==s(r)&&f(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:g(r)),f(t)?((p=v(t,!0)).x+=t.clientLeft,p.y+=t.clientTop):u&&(p.x=x(u))),{x:c.left+l.scrollLeft-p.x,y:c.top+l.scrollTop-p.y,width:c.width,height:c.height}}function S(e){var t=v(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function k(e){return"html"===y(e)?e:e.assignedSlot||e.parentNode||(c(e)?e.host:null)||b(e)}function j(e){return["html","body","#document"].indexOf(y(e))>=0?e.ownerDocument.body:f(e)&&O(e)?e:j(k(e))}function C(e,t){var n;void 0===t&&(t=[]);var r=j(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=s(r),a=o?[i].concat(i.visualViewport||[],O(r)?r:[]):r,u=t.concat(a);return o?u:u.concat(C(k(a)))}function D(e){return["table","td","th"].indexOf(y(e))>=0}function M(e){return f(e)&&"fixed"!==w(e).position?e.offsetParent:null}function T(e){for(var t=s(e),n=M(e);n&&D(n)&&"static"===w(n).position;)n=M(n);return n&&("html"===y(n)||"body"===y(n)&&"static"===w(n).position)?t:n||function(e){var t=/firefox/i.test(h());if(/Trident/i.test(h())&&f(e)&&"fixed"===w(e).position)return null;var n=k(e);for(c(n)&&(n=n.host);f(n)&&["html","body"].indexOf(y(n))<0;){var r=w(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var L="top",P="bottom",A="right",R="left",$="auto",N=[L,P,A,R],B="start",H="end",W="viewport",U="popper",q=N.reduce((function(e,t){return e.concat([t+"-"+B,t+"-"+H])}),[]),F=[].concat(N,[$]).reduce((function(e,t){return e.concat([t,t+"-"+B,t+"-"+H])}),[]),I=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function V(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var z={placement:"bottom",modifiers:[],strategy:"absolute"};function _(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function X(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?z:o;return function(e,t,n){void 0===n&&(n=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},z,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],c=!1,l={state:s,setOptions:function(n){var o="function"==typeof n?n(s.options):n;p(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:u(e)?C(e):e.contextElement?C(e.contextElement):[],popper:C(t)};var a=function(e){var t=V(e);return I.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,s.options.modifiers)));return s.orderedModifiers=a.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:l,options:r}),a=function(){};f.push(i||a)}})),l.update()},forceUpdate:function(){if(!c){var e=s.elements,t=e.reference,n=e.popper;if(_(t,n)){s.rects={reference:E(t,T(n),"fixed"===s.options.strategy),popper:S(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,u=void 0===a?{}:a,f=o.name;"function"==typeof i&&(s=i({state:s,options:u,name:f,instance:l})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){l.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){p(),c=!0}};if(!_(e,t))return l;function p(){f.forEach((function(e){return e()})),f=[]}return l.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),l}}var Y={passive:!0};function Z(e){return e.split("-")[0]}function G(e){return e.split("-")[1]}function K(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function J(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?Z(o):null,a=o?G(o):null,s=n.x+n.width/2-r.width/2,u=n.y+n.height/2-r.height/2;switch(i){case L:t={x:s,y:n.y-r.height};break;case P:t={x:s,y:n.y+n.height};break;case A:t={x:n.x+n.width,y:u};break;case R:t={x:n.x-r.width,y:u};break;default:t={x:n.x,y:n.y}}var f=i?K(i):null;if(null!=f){var c="y"===f?"height":"width";switch(a){case B:t[f]=t[f]-(n[c]/2-r[c]/2);break;case H:t[f]=t[f]+(n[c]/2-r[c]/2)}}return t}var Q={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ee(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,u=e.position,f=e.gpuAcceleration,c=e.adaptive,l=e.roundOffsets,p=e.isFixed,h=a.x,m=void 0===h?0:h,v=a.y,g=void 0===v?0:v,y="function"==typeof l?l({x:m,y:g}):{x:m,y:g};m=y.x,g=y.y;var x=a.hasOwnProperty("x"),O=a.hasOwnProperty("y"),E=R,S=L,k=window;if(c){var j=T(n),C="clientHeight",D="clientWidth";if(j===s(n)&&"static"!==w(j=b(n)).position&&"absolute"===u&&(C="scrollHeight",D="scrollWidth"),o===L||(o===R||o===A)&&i===H)S=P,g-=(p&&j===k&&k.visualViewport?k.visualViewport.height:j[C])-r.height,g*=f?1:-1;if(o===R||(o===L||o===P)&&i===H)E=A,m-=(p&&j===k&&k.visualViewport?k.visualViewport.width:j[D])-r.width,m*=f?1:-1}var M,$=Object.assign({position:u},c&&Q),N=!0===l?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:d(t*r)/r||0,y:d(n*r)/r||0}}({x:m,y:g}):{x:m,y:g};return m=N.x,g=N.y,f?Object.assign({},$,((M={})[S]=O?"0":"",M[E]=x?"0":"",M.transform=(k.devicePixelRatio||1)<=1?"translate("+m+"px, "+g+"px)":"translate3d("+m+"px, "+g+"px, 0)",M)):Object.assign({},$,((t={})[S]=O?g+"px":"",t[E]=x?m+"px":"",t.transform="",t))}var te={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=F.reduce((function(e,n){return e[n]=function(e,t,n){var r=Z(e),o=[R,L].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[R,A].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],u=s.x,f=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=f),t.modifiersData[r]=a}},ne={left:"right",right:"left",bottom:"top",top:"bottom"};function re(e){return e.replace(/left|right|bottom|top/g,(function(e){return ne[e]}))}var oe={start:"end",end:"start"};function ie(e){return e.replace(/start|end/g,(function(e){return oe[e]}))}function ae(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&c(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function se(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ue(e,t,n){return t===W?se(function(e,t){var n=s(e),r=b(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,u=0,f=0;if(o){i=o.width,a=o.height;var c=m();(c||!c&&"fixed"===t)&&(u=o.offsetLeft,f=o.offsetTop)}return{width:i,height:a,x:u+x(e),y:f}}(e,n)):u(t)?function(e,t){var n=v(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):se(function(e){var t,n=b(e),r=g(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=l(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=l(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+x(e),u=-r.scrollTop;return"rtl"===w(o||n).direction&&(s+=l(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:u}}(b(e)))}function fe(e,t,n,r){var o="clippingParents"===t?function(e){var t=C(k(e)),n=["absolute","fixed"].indexOf(w(e).position)>=0&&f(e)?T(e):e;return u(n)?t.filter((function(e){return u(e)&&ae(e,n)&&"body"!==y(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=ue(e,n,r);return t.top=l(o.top,t.top),t.right=p(o.right,t.right),t.bottom=p(o.bottom,t.bottom),t.left=l(o.left,t.left),t}),ue(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ce(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function le(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function pe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.strategy,a=void 0===i?e.strategy:i,s=n.boundary,f=void 0===s?"clippingParents":s,c=n.rootBoundary,l=void 0===c?W:c,p=n.elementContext,d=void 0===p?U:p,h=n.altBoundary,m=void 0!==h&&h,g=n.padding,y=void 0===g?0:g,x=ce("number"!=typeof y?y:le(y,N)),w=d===U?"reference":U,O=e.rects.popper,E=e.elements[m?w:d],S=fe(u(E)?E:E.contextElement||b(e.elements.popper),f,l,a),k=v(e.elements.reference),j=J({reference:k,element:O,strategy:"absolute",placement:o}),C=se(Object.assign({},O,j)),D=d===U?C:k,M={top:S.top-D.top+x.top,bottom:D.bottom-S.bottom+x.bottom,left:S.left-D.left+x.left,right:D.right-S.right+x.right},T=e.modifiersData.offset;if(d===U&&T){var R=T[o];Object.keys(M).forEach((function(e){var t=[A,P].indexOf(e)>=0?1:-1,n=[L,P].indexOf(e)>=0?"y":"x";M[e]+=R[n]*t}))}return M}function de(e,t,n){return l(e,p(t,n))}var he={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,u=n.boundary,f=n.rootBoundary,c=n.altBoundary,d=n.padding,h=n.tether,m=void 0===h||h,v=n.tetherOffset,g=void 0===v?0:v,y=pe(t,{boundary:u,rootBoundary:f,padding:d,altBoundary:c}),b=Z(t.placement),x=G(t.placement),w=!x,O=K(b),E="x"===O?"y":"x",k=t.modifiersData.popperOffsets,j=t.rects.reference,C=t.rects.popper,D="function"==typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,M="number"==typeof D?{mainAxis:D,altAxis:D}:Object.assign({mainAxis:0,altAxis:0},D),$=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,N={x:0,y:0};if(k){if(i){var H,W="y"===O?L:R,U="y"===O?P:A,q="y"===O?"height":"width",F=k[O],I=F+y[W],V=F-y[U],z=m?-C[q]/2:0,_=x===B?j[q]:C[q],X=x===B?-C[q]:-j[q],Y=t.elements.arrow,J=m&&Y?S(Y):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=Q[W],te=Q[U],ne=de(0,j[q],J[q]),re=w?j[q]/2-z-ne-ee-M.mainAxis:_-ne-ee-M.mainAxis,oe=w?-j[q]/2+z+ne+te+M.mainAxis:X+ne+te+M.mainAxis,ie=t.elements.arrow&&T(t.elements.arrow),ae=ie?"y"===O?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(H=null==$?void 0:$[O])?H:0,ue=F+oe-se,fe=de(m?p(I,F+re-se-ae):I,F,m?l(V,ue):V);k[O]=fe,N[O]=fe-F}if(s){var ce,le="x"===O?L:R,he="x"===O?P:A,me=k[E],ve="y"===E?"height":"width",ge=me+y[le],ye=me-y[he],be=-1!==[L,R].indexOf(b),xe=null!=(ce=null==$?void 0:$[E])?ce:0,we=be?ge:me-j[ve]-C[ve]-xe+M.altAxis,Oe=be?me+j[ve]+C[ve]-xe-M.altAxis:ye,Ee=m&&be?function(e,t,n){var r=de(e,t,n);return r>n?n:r}(we,me,Oe):de(m?we:ge,me,m?Oe:ye);k[E]=Ee,N[E]=Ee-me}t.modifiersData[r]=N}},requiresIfExists:["offset"]};var me={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=Z(n.placement),u=K(s),f=[R,A].indexOf(s)>=0?"height":"width";if(i&&a){var c=function(e,t){return ce("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:le(e,N))}(o.padding,n),l=S(i),p="y"===u?L:R,d="y"===u?P:A,h=n.rects.reference[f]+n.rects.reference[u]-a[u]-n.rects.popper[f],m=a[u]-n.rects.reference[u],v=T(i),g=v?"y"===u?v.clientHeight||0:v.clientWidth||0:0,y=h/2-m/2,b=c[p],x=g-l[f]-c[d],w=g/2-l[f]/2+y,O=de(b,w,x),E=u;n.modifiersData[r]=((t={})[E]=O,t.centerOffset=O-w,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&ae(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ve(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ge(e){return[L,A,P,R].some((function(t){return e[t]>=0}))}var ye=X({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,u=void 0===a||a,f=s(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,Y)})),u&&f.addEventListener("resize",n.update,Y),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,Y)})),u&&f.removeEventListener("resize",n.update,Y)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=J({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,u=void 0===s||s,f={placement:Z(t.placement),variation:G(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ee(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:u})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ee(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];f(o)&&y(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});f(r)&&y(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},te,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,u=n.fallbackPlacements,f=n.padding,c=n.boundary,l=n.rootBoundary,p=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,v=t.options.placement,g=Z(v),y=u||(g===v||!h?[re(v)]:function(e){if(Z(e)===$)return[];var t=re(e);return[ie(e),t,ie(t)]}(v)),b=[v].concat(y).reduce((function(e,n){return e.concat(Z(n)===$?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,u=n.allowedAutoPlacements,f=void 0===u?F:u,c=G(r),l=c?s?q:q.filter((function(e){return G(e)===c})):N,p=l.filter((function(e){return f.indexOf(e)>=0}));0===p.length&&(p=l);var d=p.reduce((function(t,n){return t[n]=pe(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[Z(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:c,rootBoundary:l,padding:f,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),x=t.rects.reference,w=t.rects.popper,O=new Map,E=!0,S=b[0],k=0;k<b.length;k++){var j=b[k],C=Z(j),D=G(j)===B,M=[L,P].indexOf(C)>=0,T=M?"width":"height",H=pe(t,{placement:j,boundary:c,rootBoundary:l,altBoundary:p,padding:f}),W=M?D?A:R:D?P:L;x[T]>w[T]&&(W=re(W));var U=re(W),I=[];if(i&&I.push(H[C]<=0),s&&I.push(H[W]<=0,H[U]<=0),I.every((function(e){return e}))){S=j,E=!1;break}O.set(j,I)}if(E)for(var V=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return S=t,"break"},z=h?3:1;z>0;z--){if("break"===V(z))break}t.placement!==S&&(t.modifiersData[r]._skip=!0,t.placement=S,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},he,me,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=pe(t,{elementContext:"reference"}),s=pe(t,{altBoundary:!0}),u=ve(a,r),f=ve(s,o,i),c=ge(u),l=ge(f);t.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:f,isReferenceHidden:c,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":l})}}]}),be=n(7929),xe=n.n(be),we=[],Oe=function(){},Ee=function(){return Promise.resolve(null)},Se=[];function ke(e){var t=e.placement,n=void 0===t?"bottom":t,s=e.strategy,u=void 0===s?"absolute":s,f=e.modifiers,c=void 0===f?Se:f,l=e.referenceElement,p=e.onFirstUpdate,d=e.innerRef,h=e.children,m=r.useContext(o.C8),v=r.useState(null),g=v[0],y=v[1],b=r.useState(null),x=b[0],w=b[1];r.useEffect((function(){(0,i.k$)(d,g)}),[d,g]);var O=r.useMemo((function(){return{placement:n,strategy:u,onFirstUpdate:p,modifiers:[].concat(c,[{name:"arrow",enabled:null!=x,options:{element:x}}])}}),[n,u,p,c,x]),E=function(e,t,n){void 0===n&&(n={});var o=r.useRef(null),s={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||we},u=r.useState({styles:{popper:{position:s.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),f=u[0],c=u[1],l=r.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);a.flushSync((function(){c({styles:(0,i.sq)(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:(0,i.sq)(n.map((function(e){return[e,t.attributes[e]]})))})}))},requires:["computeStyles"]}}),[]),p=r.useMemo((function(){var e={onFirstUpdate:s.onFirstUpdate,placement:s.placement,strategy:s.strategy,modifiers:[].concat(s.modifiers,[l,{name:"applyStyles",enabled:!1}])};return xe()(o.current,e)?o.current||e:(o.current=e,e)}),[s.onFirstUpdate,s.placement,s.strategy,s.modifiers,l]),d=r.useRef();return(0,i.LI)((function(){d.current&&d.current.setOptions(p)}),[p]),(0,i.LI)((function(){if(null!=e&&null!=t){var r=(n.createPopper||ye)(e,t,p);return d.current=r,function(){r.destroy(),d.current=null}}}),[e,t,n.createPopper]),{state:d.current?d.current.state:null,styles:f.styles,attributes:f.attributes,update:d.current?d.current.update:null,forceUpdate:d.current?d.current.forceUpdate:null}}(l||m,g,O),S=E.state,k=E.styles,j=E.forceUpdate,C=E.update,D=r.useMemo((function(){return{ref:y,style:k.popper,placement:S?S.placement:n,hasPopperEscaped:S&&S.modifiersData.hide?S.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:S&&S.modifiersData.hide?S.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:k.arrow,ref:w},forceUpdate:j||Oe,update:C||Ee}}),[y,w,n,S,k,C,j]);return(0,i.$p)(h)(D)}},3351:function(e,t,n){"use strict";n.d(t,{s:function(){return u}});var r=n(7294),o=n(2473),i=n.n(o),a=n(1385),s=n(7139);function u(e){var t=e.children,n=e.innerRef,o=r.useContext(a.mq),u=r.useCallback((function(e){(0,s.k$)(n,e),(0,s.DL)(o,e)}),[n,o]);return r.useEffect((function(){return function(){return(0,s.k$)(n,null)}}),[]),r.useEffect((function(){i()(Boolean(o),"`Reference` should not be used outside of a `Manager` component.")}),[o]),(0,s.$p)(t)({ref:u})}},7139:function(e,t,n){"use strict";n.d(t,{$p:function(){return o},DL:function(){return i},LI:function(){return u},k$:function(){return a},sq:function(){return s}});var r=n(7294),o=function(e){return Array.isArray(e)?e[0]:e},i=function(e){if("function"==typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.apply(void 0,n)}},a=function(e,t){if("function"==typeof e)return i(e,t);null!=e&&(e.current=t)},s=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},u="undefined"!=typeof window&&window.document&&window.document.createElement?r.useLayoutEffect:r.useEffect},7929:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,u,f,c;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(u=s;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(c=e.entries();!(u=c.next()).done;)if(!a.has(u.value[0]))return!1;for(c=e.entries();!(u=c.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(c=e.entries();!(u=c.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(u=s;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(f=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=s;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,f[u]))return!1;if(t&&e instanceof Element)return!1;for(u=s;0!=u--;)if(("_owner"!==f[u]&&"__v"!==f[u]&&"__o"!==f[u]||!e.$$typeof)&&!i(e[f[u]],a[f[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},9973:function(e,t,n){"use strict";n.d(t,{ZP:function(){return m}});var r=n(366),o=n(7294),i=n(3935),a=!1,s=o.createContext(null),u="unmounted",f="exited",c="entering",l="entered",p="exiting",d=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var o,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(o=f,r.appearStatus=c):o=l:o=t.unmountOnExit||t.mountOnEnter?u:f,r.state={status:o},r.nextCallback=null,r}(0,r.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===u?{status:f}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==c&&n!==l&&(t=c):n!==c&&n!==l||(t=p)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===c){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:i.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===f&&this.setState({status:u})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[i.findDOMNode(this),r],s=o[0],u=o[1],f=this.getTimeouts(),p=r?f.appear:f.enter;!e&&!n||a?this.safeSetState({status:l},(function(){t.props.onEntered(s)})):(this.props.onEnter(s,u),this.safeSetState({status:c},(function(){t.props.onEntering(s,u),t.onTransitionEnd(p,(function(){t.safeSetState({status:l},(function(){t.props.onEntered(s,u)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:i.findDOMNode(this);t&&!a?(this.props.onExit(r),this.safeSetState({status:p},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:f},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:f},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:i.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=o[0],s=o[1];this.props.addEndListener(a,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===u)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.createElement(s.Provider,{value:null},"function"==typeof n?n(e,r):o.cloneElement(o.Children.only(n),r))},t}(o.Component);function h(){}d.contextType=s,d.propTypes={},d.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},d.UNMOUNTED=u,d.EXITED=f,d.ENTERING=c,d.ENTERED=l,d.EXITING=p;var m=d},2473:function(e){"use strict";var t=function(){};e.exports=t}}]);
//# sourceMappingURL=73f43e5ccbd39e2fbabf8eb1be0ac7b2564fee90-502efb8c04cfc7b637c4.js.map