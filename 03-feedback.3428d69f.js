!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,b=function(){return s.Date.now()};function g(e,t,n){var i,r,u,a,f,l,c=0,s=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError(o);function j(t){var n=i,o=r;return i=r=void 0,c=t,a=e.apply(o,n)}function O(e){return c=e,f=setTimeout(T,t),s?j(e):a}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function T(){var e=b();if(h(e))return w(e);f=setTimeout(T,function(e){var n=t-(e-l);return d?m(n,u-(e-c)):n}(e))}function w(e){return f=void 0,g&&i?j(e):(i=r=void 0,a)}function S(){var e=b(),n=h(e);if(i=arguments,r=this,l=e,n){if(void 0===f)return O(l);if(d)return f=setTimeout(T,t),j(l)}return void 0===f&&(f=setTimeout(T,t)),a}return t=y(t)||0,p(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(y(n.maxWait)||0,t):u,g="trailing"in n?!!n.trailing:g),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=r=f=void 0},S.flush=function(){return void 0===f?a:w(b())},S}function p(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(p(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=p(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var l=u.test(e);return l||a.test(e)?f(e.slice(2),l?2:8):r.test(e)?NaN:+e}var j=document.querySelector(".feedback-form"),O=j.elements.email.value,h=j.elements.message.value,T="feedback-form-state";console.log(O),j.addEventListener("input",(function(e){console.log(j.elements.email.value),console.log(j.elements.message.value);var t={email:O,message:h};localStorage.setItem(T,t)})),document.addEventListener("DOMContentLoaded",(function(e){e.target.value=localStorage.getItem(T),console.log(localStorage.getItem(T))}))}();
//# sourceMappingURL=03-feedback.3428d69f.js.map