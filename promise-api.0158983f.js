parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mgHw":[function(require,module,exports) {

},{}],"tCSK":[function(require,module,exports) {
"use strict";require("../css/work-common.css");const o=new Promise((o,e)=>{const n=Math.random()>.5;setTimeout(()=>{n&&o("Промис выполнился успешно (fulfilled)"),e("Промис выполнился с ошибкой (rejected)")},2e3)});function e(o){console.log(o)}function n(o){console.log(o)}o.then(e).then(o=>(console.log(o),20)).then(o=>console.log(o)).catch(o=>console.log(o)).finally(()=>console.log("Я буду выполнен в любом случае"));
},{"../css/work-common.css":"mgHw"}]},{},["tCSK"], null)
//# sourceMappingURL=/date-promise-api/promise-api.0158983f.js.map