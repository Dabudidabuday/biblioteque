(()=>{var e={239:()=>{var e=document.querySelector(".choose__details");if(e){Array.from(e.querySelectorAll(".card"));var t=document.querySelector("#overlay"),r=Array.from(document.querySelectorAll(".icon-detail")),n=document.querySelector(".modal--product-details"),o=document.querySelector(".modal-close");r.forEach((function(e){e.addEventListener("click",(function(e){e.stopPropagation(),t.classList.add("active"),n.classList.add("active")}))})),o&&o.addEventListener("click",(function(){n.classList.remove("active"),t.classList.remove("active")}))}},666:e=>{var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,a=Object.create(o.prototype),i=new A(n||[]);return a._invoke=function(e,t,r){var n=f;return function(o,a){if(n===v)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw a;return C()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=q(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var s=u(e,t,r);if("normal"===s.type){if(n=r.done?m:d,s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=m,r.method="throw",r.arg=s.arg)}}}(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",d="suspendedYield",v="executing",m="completed",h={};function y(){}function p(){}function g(){}var b={};b[a]=function(){return this};var L=Object.getPrototypeOf,w=L&&L(L(P([])));w&&w!==r&&n.call(w,a)&&(b=w);var S=g.prototype=y.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function r(o,a,i,c){var s=u(e[o],e,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(f).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,c)}))}c(s.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function q(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,q(e,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=u(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,h):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function P(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:C}}function C(){return{value:t,done:!0}}return p.prototype=S.constructor=g,g.constructor=p,p.displayName=s(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,s(e,c,"GeneratorFunction")),e.prototype=Object.create(S),e},e.awrap=function(e){return{__await:e}},E(_.prototype),_.prototype[i]=function(){return this},e.AsyncIterator=_,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new _(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(S),s(S,c,"Generator"),S[a]=function(){return this},S.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=P,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(x),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}(()=>{"use strict";function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r(666),r(239);const t=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}var r,n;return r=t,(n=[{key:"_customCursorMove",value:function(e){var t=document.querySelector("#cursor"),r=document.querySelector("#cursor--small"),n=e.clientX,o=e.clientY;t.style.transform="translate(".concat(n-15,"px, ").concat(o-15,"px)"),r.style.transform="translate(".concat(n-4,"px, ").concat(o-4,"px)")}},{key:"run",value:function(){window.addEventListener("mousemove",this._customCursorMove),window.addEventListener("click",(function(){var e=document.querySelector("#cursor"),t=document.querySelector("#cursor--small");e.classList.add("expand"),t.classList.add("expand"),setTimeout((function(){t.classList.remove("expand"),e.classList.remove("expand")}),300)}))}}])&&e(r.prototype,n),t}();function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const a=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"active";n(this,e),this.overlay=document.querySelector(t),this.elements=r,this.className=o}var t,r;return t=e,(r=[{key:"_listen",value:function(){var e=this;this.overlay&&this.overlay.addEventListener("click",(function(){e.elements.forEach((function(t){var r=document.querySelector(t);e._checkClasses(r)&&e._closeElements(r)}))}))}},{key:"_checkClasses",value:function(e){return!!e&&!!e.classList.contains(this.className)}},{key:"_closeElements",value:function(e){e.classList.remove(this.className),this.overlay.classList.remove(this.className)}},{key:"run",value:function(){this._listen()}}])&&o(t.prototype,r),e}();function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.htmlElement=t}var t,r;return t=e,(r=[{key:"run",value:function(){var e=document.querySelector(this.htmlElement);if(e){var t=new Isotope(e,{itemSelector:".grid-item",layoutMode:"masonry",filter:".pickup",masonry:{columnWidth:".grid-item",gutter:20},stagger:20,transitionDuration:"1.2s"}),r=document.querySelector(".form-filter-buttons");r&&r.addEventListener("click",(function(e){if(matchesSelector(e.target,".form-radio")){var r=e.target.getAttribute("data-filter");t.arrange({filter:r})}}))}}}])&&i(t.prototype,r),e}();function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.htmlElement=t}var t,r;return t=e,(r=[{key:"_setImage",value:function(e,t){e&&e.setAttribute("src",t)}},{key:"_changeCardCondition",value:function(e,t){e.forEach((function(e){e.classList.remove("active")})),t.classList.add("active")}},{key:"_checkForNextStep",value:function(e){var t=document.querySelector(".btn-next");e.classList.contains("active")?t.classList.add("active"):t.classList.remove("active")}},{key:"_productPreviewHandler",value:function(e,t){var r=this;e.forEach((function(n){var o=n.dataset.image;n.addEventListener("click",(function(a){r._changeCardCondition(e,n),r._setImage(t,o),r._checkForNextStep(n)}))}))}},{key:"run",value:function(){var e=document.querySelector(this.htmlElement),t=document.querySelector(".order-preview__img");if(e){var r=Array.from(document.querySelectorAll(".card")),n=Array.from(document.querySelectorAll(".cards-list .card--text"));this._productPreviewHandler(r,e),this._productPreviewHandler(n,e);var o=document.querySelector(".zoom"),a=document.querySelector(".footer-buttons"),i=document.querySelector(".product-preview__controls"),c=document.querySelector("#btnZoomOff"),l=document.querySelector(".choose");o.addEventListener("click",(function(){e.classList.add("zoomed"),a.classList.add("hide"),i.classList.remove("hide"),t.classList.add("active"),l.style.opacity="0"})),c.addEventListener("click",(function(){e.classList.remove("zoomed"),a.classList.remove("hide"),i.classList.add("hide"),t.classList.remove("active"),l.style.opacity="1"})),new MutationObserver((function(t,r){if(e){var n,o=function(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}(t);try{for(o.s();!(n=o.n()).done;){var a=n.value;"attributes"===a.type&&"src"===a.attributeName&&(gsap.timeline().fromTo(e,{duration:1,opacity:0,scale:1.2},{opacity:1,scale:1}),r.takeRecords())}}catch(e){o.e(e)}finally{o.f()}}})).observe(e,{attributes:!0,attributeFilter:["src"]})}}}])&&l(t.prototype,r),e}();function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.rootElement=t,this.colorList=Array.from(document.querySelectorAll(".btn-color"))}var t,r;return t=e,(r=[{key:"_showHidePalette",value:function(){var e=document.querySelector(this.rootElement),t=document.querySelector(".btn-base__design");document.querySelector(".tabs").addEventListener("click",(function(){t.classList.contains("active")||e.classList.remove("active")})),t.addEventListener("click",(function(){e.classList.add("active")}))}},{key:"_colorPaletteHandler",value:function(){var e=this;this.colorList.forEach((function(t){t.addEventListener("click",(function(t){e.colorList.forEach((function(e){e.classList.remove("active")})),t.target.classList.add("active")}))}))}},{key:"run",value:function(){document.querySelector(this.rootElement)&&(this._showHidePalette(),this._colorPaletteHandler())}}])&&f(t.prototype,r),e}();function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.rootElement=document.querySelector(t),this.header=document.querySelector(".header"),this.features=document.querySelector(".features"),this.overlay=document.querySelector("#overlay")}var t,r;return t=e,(r=[{key:"_revertHeaderColors",value:function(){var e=Array.from(this.header.querySelectorAll(".line")),t=this.header.querySelector(".logo-desktop svg"),r=Array.from(this.header.querySelectorAll(".btn-group svg path"));this.header.style.zIndex="10",this.header.querySelector(".line").style.backgroundColor="#000",this.header.querySelector(".link").style.color="#000",t.style.fill="#000",r.forEach((function(e){e.style.stroke="#000"})),e.forEach((function(e){e.style.backgroundColor="#000"}))}},{key:"_returnHeaderColors",value:function(){var e=Array.from(this.header.querySelectorAll(".line")),t=this.header.querySelector(".logo-desktop svg"),r=Array.from(this.header.querySelectorAll(".btn-group svg path"));this.header.querySelector(".line").style.backgroundColor="#fff",this.header.querySelector(".link").style.color="#fff",t.style.fill="#fff",r.forEach((function(e){e.style.stroke="#fff"})),e.forEach((function(e){e.style.backgroundColor="#fff"}))}},{key:"run",value:function(){var e=this;if(this.rootElement){var t=document.querySelector(".navigation-menu"),r=document.querySelector("#btn-navigation-open"),n=document.querySelector("#btn-navigation-close"),o=window.matchMedia("(max-width: 768px)");r.addEventListener("click",(function(){r.classList.toggle("active"),t.classList.toggle("active"),e.overlay.classList.toggle("active"),t.classList.contains("active")&&o.matches&&setTimeout((function(){e._revertHeaderColors()}),500),!t.classList.contains("active")&&o.matches&&setTimeout((function(){e._returnHeaderColors()}),400)})),n.addEventListener("click",(function(){t.classList.remove("active"),this.overlay.classList.remove("active")}));var a=document.querySelector(".features"),i=document.querySelector("#btn-features"),c=document.querySelector("#btn-features-close");i.addEventListener("click",(function(){a.classList.add("active"),e.header.classList.add("header-in-features"),setTimeout((function(){e.features.classList.contains("active")&&e._revertHeaderColors()}),500)})),c.addEventListener("click",(function(){e.header.classList.remove("header-in-features"),e.features.classList.remove("active"),e._returnHeaderColors()}))}}}])&&v(t.prototype,r),e}();function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.rootElement=document.querySelector(t),this.currentproductDetails=""}var t,r,n;return t=e,n=[{key:"insertProductDetails",value:function(e,t){var r=this;e.forEach((function(e){e.addEventListener("click",(function(e){r._createProductDetails(),console.log(r._createProductDetails);var n=e.target.closest(".card");r._insertAfter(n,r.currentproductDetails),t.layout()}))}))}}],(r=[{key:"_insertAfter",value:function(e,t){e.parentNode.insertBefore(t,e.nextSibling)}},{key:"_createProductDetails",value:function(){var e=document.createElement("div");e.classList.add("card--details"),e.innerHTML='\n            <h4 class="h4 modal__title">Черный инжир</h4>\n            <p class="modal__text"><b>Верхние ноты:</b> листья инжира, ревень, петитгрейн.</p>\n            <p class="modal__text"><b>Ноты сердца:</b>инжир, молоко.</p>\n            <p class="modal__text"><b>База:</b> кедр, бобы тонка, коричневый сахар.</p>\n            <p class="modal__text"><b>Ольфактурная группа:</b> фруктовые.</p>\n            <button class="btn-close btn-reset modal-close">\n                <span class="line--md"></span>\n                <span class="line--md"></span>\n            </button>\n        ',this.currentproductDetails=e}},{key:"_productBaseDescription",value:function(){var e=document.querySelector(".base-description"),t=document.querySelector(".read-more"),r=document.querySelector("#overlay"),n=document.querySelector(".modal--product-details");t.addEventListener("click",(function(){e.classList.toggle("active");var o=window.matchMedia("(max-width: 768px)");window.matchMedia("(min-width: 768px)").matches&&(e.classList.contains("active")?t.textContent="Свернуть":t.textContent="Подробнее"),o.matches&&(r.classList.toggle("active"),n.classList.add("active"))})),document.querySelector("#btn-modal-close").addEventListener("click",(function(){n.classList.remove("active"),r.classList.remove("active")}))}},{key:"run",value:function(){this.rootElement&&(this._createProductDetails(),this._productBaseDescription())}}])&&h(t.prototype,r),n&&h(t,n),e}();function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const g=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.rootElement=document.querySelector(t)}var t,r;return t=e,(r=[{key:"run",value:function(){if(this.rootElement){var e=Array.from(document.querySelectorAll(".outer-accordion-item")),t=Array.from(document.querySelectorAll(".inner-accordion-items"));e.forEach((function(r){r.addEventListener("click",(function(r){var n=r.target.closest(".item"),o=n.querySelector(".outer-accordion-item"),a=n.querySelector(".inner-accordion-items");e.forEach((function(e){e.classList.remove("active")})),t.forEach((function(e){e.classList.contains("active")&&e.classList.remove("active")})),o.classList.add("active"),a.classList.toggle("active")}))}))}}}])&&p(t.prototype,r),e}();function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const L=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.rootElement=document.querySelector(t)}var t,r;return t=e,(r=[{key:"_filterTabsUI",value:function(){var e=Array.from(this.rootElement.querySelectorAll(".btn-filter"));e.forEach((function(t){t.addEventListener("click",(function(t){e.forEach((function(e){e.classList.remove("active")})),t.target.classList.add("active"),Array.from(document.querySelectorAll(".card")).forEach((function(e){e.classList.remove("active")}));var r=document.querySelector(".btn-next");r.classList.remove("active"),r.classList.remove("btn-active")}))}))}},{key:"_productSortAnimation",value:function(){var e=this.rootElement,t=document.querySelector(".choose__details"),r=new Isotope(t,{itemSelector:".card",layoutMode:"masonry",masonry:{columnWidth:".grid-sizer",columnHeight:".grid-sizer",gutter:".gutter-sizer"},stagger:70,transitionDuration:"0.7s"});e.addEventListener("click",(function(e){if(matchesSelector(e.target,"button")){var t=e.target.getAttribute("data-filter");r.arrange({filter:t})}}));var n=Array.from(document.querySelectorAll(".choose__details .card"));y.insertProductDetails(n,r)}},{key:"run",value:function(){this.rootElement&&(this._filterTabsUI(),this._productSortAnimation())}}])&&b(t.prototype,r),e}();function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.rootElement=document.querySelector(t)}var t,r;return t=e,(r=[{key:"run",value:function(){if(this.rootElement){var e=this.rootElement,t=Array.from(document.querySelectorAll(".card__more")),r=document.querySelector("#btn__show-more__close"),n=document.querySelector("#overlay");t.forEach((function(t){t.addEventListener("click",(function(t){e.classList.add("active"),n.classList.add("active")}))})),r.addEventListener("click",(function(){e.classList.remove("active"),n.classList.remove("active")}));var o=document.querySelector("#modalPerfume");document.querySelector("#btn-navigation-close").addEventListener("click",(function(){o.classList.remove("active"),setTimeout((function(){n.classList.remove("active")}),200)}))}}}])&&w(t.prototype,r),e}();function E(e,t,r,n,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}function _(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){E(a,n,o,i,c,"next",e)}function c(e){E(a,n,o,i,c,"throw",e)}i(void 0)}))}}function q(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var k=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cursor=new t,this.overlay=new a("#overlay",[".modal--product-details",".modal--contacts","#modalPerfume",".navigation-menu",".product__show-more"],"active"),this.homeUi=new m(".home"),this.accordion=new g(".accordion"),this.productPreview=new u(".order-preview__img img"),this.productSorting=new L(".choose__base"),this.productDetails=new y(".choose__details"),this.colorPalette=new d(".base__color-palette"),this.formFilter=new c(".form-grid"),this.cartUI=new S(".product__show-more")}var r,n;return r=e,(n=[{key:"run",value:function(){this.homeUi.run(),this.cursor.run(),this.overlay.run(),this.productPreview.run(),this.colorPalette.run(),this.productDetails.run(),this.accordion.run(),this.productSorting.run(),this.formFilter.run(),this.cartUI.run()}}])&&q(r.prototype,n),e}();window.onload=function(){(new k).run()};var x=Array.from(document.querySelectorAll(".btn-minus")),A=Array.from(document.querySelectorAll(".btn-plus"));document.querySelector(".quantity-input"),x.forEach((function(e){var t=e.closest(".quantity-group").querySelector(".quantity-input");e.addEventListener("click",(function(){"1"!==t.value&&t.value--}))})),A.forEach((function(e){var t=e.closest(".quantity-group").querySelector(".quantity-input");e.addEventListener("click",(function(){t.value++}))}));var P=document.querySelector("#modalPerfume");if(P){var C=document.querySelector(".order__perfume-details"),O=document.querySelector(".btn-close");C.addEventListener("click",(function(){P.classList.add("active"),overlay.classList.add("active")})),O.addEventListener("click",(function(){P.classList.remove("active"),overlay.classList.remove("active")})),document.querySelector("#btnFinal").addEventListener("click",(function(){var e=document.querySelector(".order__product-list"),t=document.querySelector(".cart__final"),r=document.querySelector(".cart__empty");e.style.display="none",t.style.display="none",r.style.display="block"}))}var T=Array.from(document.querySelectorAll(".btn-link--underline"));T.forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault(),T.forEach((function(e){e.classList.remove("active")})),e.classList.add("active");var r=e.innerHTML;document.querySelector("#input-city").value=r}))}));var j=Array.from(document.querySelectorAll(".custom-celect__input"));j.forEach((function(e){e.addEventListener("click",(function(e){if(e.target){var t=e.target.closest(".custom-select"),r=t.querySelector(".select-arrow");t.querySelector(".custom-select__options").classList.add("active"),r.classList.add("active")}}))})),Array.from(document.querySelectorAll(".option__items .item")).forEach((function(e){e.addEventListener("click",(function(t){var r=t.target.textContent,n=e.closest(".custom-select");n.querySelector(".custom-celect__input").value=r,Array.from(n.querySelectorAll(".item")).forEach((function(e){e.classList.remove("active")})),t.target.classList.add("active");var o=n.querySelector(".custom-select__options"),a=n.querySelector(".select-arrow");setTimeout((function(){o.classList.remove("active"),a.classList.remove("active")}),600)}))})),document.addEventListener("click",(function(e){j.forEach((function(t){var r=t.closest(".custom-select"),n=r.querySelector(".custom-select__options"),o=r.querySelector(".select-arrow"),a=t.contains(e.target),i=n.contains(e.target);a||i||(n.classList.remove("active"),o.classList.remove("active"))}))})),Array.from(document.querySelectorAll(".form-input")).forEach((function(e){e.addEventListener("input",(function(){""!=e.value?e.closest(".input-wrapper").querySelector(".label").style.opacity="0":e.closest(".input-wrapper").querySelector(".label").style.opacity="1"}))}));var I=document.querySelector("#btnModalContacts");if(I){var D=document.querySelector(".modal--contacts");I.addEventListener("click",(function(){document.querySelector("#overlay").classList.add("active"),D.classList.add("active")})),document.querySelector("#btn-modal-close").addEventListener("click",(function(){overlay.classList.remove("active"),D.classList.remove("active")}))}function H(e){return e=e||2e3,new Promise((function(t){setTimeout((function(){t()}),e)}))}function N(){gsap.timeline().from(".animate-this",{duration:1,y:30,opacity:0,stagger:.2,delay:.1})}barba.init({sync:!0,debug:!0,transitions:[{leave:function(e){var t=this;return _(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.async(),n=void 0,(n=gsap.timeline()).to(".loading-screen",{duration:1.2,height:"100%",left:"0%",ease:"Expo.easeInOut"}),n.to(".loading-screen",{duration:1,width:"100%",left:"100%",ease:"Expo.easeInOut",delay:.3}),n.set(".loading-screen",{left:"-100%"}),e.next=4,H(1e3);case 4:r();case 5:case"end":return e.stop()}var n}),e)})))()},enter:function(e){return _(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N();case 1:case"end":return e.stop()}}),e)})))()},once:function(e){return _(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N();case 1:case"end":return e.stop()}}),e)})))()}}]})})()})();