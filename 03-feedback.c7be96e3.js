!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,y=function(){return s.Date.now()};function b(e,t,n){var i,o,u,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function S(e){return c=e,f=setTimeout(h,t),d?b(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function h(){var e=y();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return s?p(n,u-(e-c)):n}(e))}function w(e){return f=void 0,v&&i?b(e):(i=o=void 0,a)}function T(){var e=y(),n=O(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return S(l);if(s)return f=setTimeout(h,t),b(l)}return void 0===f&&(f=setTimeout(h,t)),a}return t=j(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},T.flush=function(){return void 0===f?a:w(y())},T}function g(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=a.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};var S,O,h=document.querySelector(".feedback-form"),w=document.querySelector("input"),T=document.querySelector("textarea");S=localStorage.getItem("feedback-form-state"),O=JSON.parse(S),null!==S&&(w.value=O.email||"",T.value=O.message||""),h.addEventListener("input",e(t)((function(){var e={email:w.value,message:T.value},t=JSON.stringify(e);localStorage.setItem("feedback-form-state",t)}),500)),h.addEventListener("submit",(function(e){e.preventDefault(),localStorage.clear(),console.log({email:w.value,message:T.value}),h.reset()}))}();
//# sourceMappingURL=03-feedback.c7be96e3.js.map
