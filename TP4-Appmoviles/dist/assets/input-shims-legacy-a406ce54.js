System.register(["./index-legacy-6f317e08.js"],(function(e,t){"use strict";var n,o,i,r,s,a,d,l,c;return{setters:[e=>{n=e.K,o=e.d,i=e.e,r=e.b,s=e.f,a=e.g,d=e.h,l=e.j,c=e.k}],execute:function(){
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
const t=new WeakMap,u=(e,n,o,i=0,r=!1)=>{t.has(e)!==o&&(o?m(e,n,i,r):f(e,n))},m=(e,n,o,i=!1)=>{const r=n.parentNode,s=n.cloneNode(!1);s.classList.add("cloned-input"),s.tabIndex=-1,i&&(s.disabled=!0),r.appendChild(s),t.set(e,s);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",n.style.transform=`translate3d(${a}px,${o}px,0) scale(0)`},f=(e,n)=>{const o=t.get(e);o&&(t.delete(e),o.remove()),e.style.pointerEvents="",n.style.transform=""},v="input, textarea, [no-blur], [contenteditable]",p=(e,t,n,o)=>{const i=e.top,r=e.bottom,s=t.top,a=s+15,d=Math.min(t.bottom,o-n)-50-r,l=a-i,c=Math.round(d<0?-d:l>0?-l:0),u=Math.min(c,i-s),m=Math.abs(u)/.3;return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,m)),scrollPadding:n,inputSafeY:4-(i-a)}},w="$ionPaddingTimer",y=(e,t,n)=>{const o=e[w];o&&clearTimeout(o),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[w]=setTimeout((()=>{e.style.setProperty("--keyboard-offset","0px"),n&&n()}),120)},h=(e,t,n)=>{e.addEventListener("focusout",(()=>{t&&y(t,0,n)}),{once:!0})};let g=0;const b="data-ionic-skip-scroll-assist",S=e=>{document.activeElement!==e&&(e.setAttribute(b,"true"),e.focus())},E=async(e,t,n,o,i,r,s=!1)=>{if(!n&&!o)return;const a=((e,t,n)=>{var o;const i=null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e;return p(i.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)})(e,n||o,i);if(n&&Math.abs(a.scrollAmount)<4)return S(t),void(r&&null!==n&&(y(n,g),h(t,n,(()=>g=0))));if(u(e,t,!0,a.inputSafeY,s),S(t),d((()=>e.click())),r&&n&&(g=a.scrollPadding,y(n,g)),"undefined"!=typeof window){let o;const i=async()=>{void 0!==o&&clearTimeout(o),window.removeEventListener("ionKeyboardDidShow",s),window.removeEventListener("ionKeyboardDidShow",i),n&&await c(n,0,a.scrollAmount,a.scrollDuration),u(e,t,!1,a.inputSafeY),S(t),r&&h(t,n,(()=>g=0))},s=()=>{window.removeEventListener("ionKeyboardDidShow",s),window.addEventListener("ionKeyboardDidShow",i)};if(n){const e=await l(n),r=e.scrollHeight-e.clientHeight;if(a.scrollAmount>r-e.scrollTop)return"password"===t.type?(a.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",s)):window.addEventListener("ionKeyboardDidShow",i),void(o=setTimeout(i,1e3))}i()}};e("startInputShims",(async(e,t)=>{const d=document,l="ios"===t,c="android"===t,m=e.getNumber("keyboardHeight",290),f=e.getBoolean("scrollAssist",!0),p=e.getBoolean("hideCaretOnScroll",l),w=e.getBoolean("inputBlurring",l),y=e.getBoolean("scrollPadding",!0),h=Array.from(d.querySelectorAll("ion-input, ion-textarea")),g=new WeakMap,S=new WeakMap,L=await n.getResizeMode(),D=async e=>{await new Promise((t=>r(e,t)));const t=e.shadowRoot||e,n=t.querySelector("input")||t.querySelector("textarea"),d=s(e),l=d?null:e.closest("ion-footer");if(n){if(d&&p&&!g.has(e)){const t=((e,t,n)=>{if(!n||!t)return()=>{};const r=n=>{var o;(o=t)===o.getRootNode().activeElement&&u(e,t,n)},s=()=>u(e,t,!1),a=()=>r(!0),d=()=>r(!1);return o(n,"ionScrollStart",a),o(n,"ionScrollEnd",d),t.addEventListener("blur",s),()=>{i(n,"ionScrollStart",a),i(n,"ionScrollEnd",d),t.removeEventListener("blur",s)}})(e,n,d);g.set(e,t)}if("date"!==n.type&&"datetime-local"!==n.type&&(d||l)&&f&&!S.has(e)){const t=((e,t,n,o,i,r,s,d=!1)=>{const l=r&&(void 0===s||s.mode===a.None),c=async()=>{t.hasAttribute(b)?t.removeAttribute(b):E(e,t,n,o,i,l,d)};return e.addEventListener("focusin",c,!0),()=>{e.removeEventListener("focusin",c,!0)}})(e,n,d,l,m,y,L,c);S.set(e,t)}}};w&&(()=>{let e=!0,t=!1;const n=document,i=()=>{t=!0},r=()=>{e=!0},s=o=>{if(t)return void(t=!1);const i=n.activeElement;if(!i)return;if(i.matches(v))return;const r=o.target;r!==i&&(r.matches(v)||r.closest(v)||(e=!1,setTimeout((()=>{e||i.blur()}),50)))};o(n,"ionScrollStart",i),n.addEventListener("focusin",r,!0),n.addEventListener("touchend",s,!1)})();for(const n of h)D(n);d.addEventListener("ionInputDidLoad",(e=>{D(e.detail)})),d.addEventListener("ionInputDidUnload",(e=>{(e=>{if(p){const t=g.get(e);t&&t(),g.delete(e)}if(f){const t=S.get(e);t&&t(),S.delete(e)}})(e.detail)}))}))}}}));
