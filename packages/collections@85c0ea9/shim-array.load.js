montageDefine("85c0ea9","shim-array",{dependencies:["./shim-function","./generic-collection","./generic-order","./weak-map"],factory:function(t,e,r){"use strict";function n(t,e){Object.defineProperty(Array.prototype,t,{value:e,writable:!0,configurable:!0,enumerable:!1})}function i(t,e,r){this.array=t,this.start=null==e?0:e,this.end=r}var o=(t("./shim-function"),t("./generic-collection")),s=t("./generic-order"),a=t("./weak-map");r.exports=Array;var h=Array.prototype.splice,u=Array.prototype.slice;Array.empty=[],Object.freeze&&Object.freeze(Array.empty),Array.from=function(t){var e=[];return e.addEach(t),e},Array.unzip=function(t){for(var e=[],r=1/0,n=0;n<t.length;n++){var i=t[n];t[n]=i.toArray(),i.length<r&&(r=i.length)}for(var n=0;n<t.length;n++)for(var i=t[n],o=0;o<i.length;o++)o<r&&o in i&&(e[o]=e[o]||[],e[o][n]=i[o]);return e},n("addEach",o.prototype.addEach),n("deleteEach",o.prototype.deleteEach),n("toArray",o.prototype.toArray),n("toObject",o.prototype.toObject),n("all",o.prototype.all),n("any",o.prototype.any),n("min",o.prototype.min),n("max",o.prototype.max),n("sum",o.prototype.sum),n("average",o.prototype.average),n("only",o.prototype.only),n("flatten",o.prototype.flatten),n("zip",o.prototype.zip),n("enumerate",o.prototype.enumerate),n("group",o.prototype.group),n("sorted",o.prototype.sorted),n("reversed",o.prototype.reversed),n("constructClone",function(t){var e=new this.constructor;return e.addEach(t),e}),n("has",function(t,e){return this.find(t,e)!==-1}),n("get",function(t,e){if(+t!==t)throw new Error("Indicies must be numbers");return!t in this?e:this[t]}),n("set",function(t,e){return this[t]=e,!0}),n("add",function(t){return this.push(t),!0}),n("delete",function(t,e){var r=this.find(t,e);return r!==-1&&(this.spliceOne(r),!0)}),n("deleteAll",function(t,e){e=e||this.contentEquals||Object.equals;for(var r=0,n=0;n<this.length;)e(t,this[n])?(this.swap(n,1),r++):n++;return r}),n("find",function(t,e){e=e||this.contentEquals||Object.equals;for(var r=0;r<this.length;r++)if(r in this&&e(t,this[r]))return r;return-1}),n("findLast",function(t,e){e=e||this.contentEquals||Object.equals;var r=this.length;do if(r--,r in this&&e(this[r],t))return r;while(r>0);return-1}),n("swap",function(t,e,r){var n,i,o,s,a;if(t>this.length&&(this.length=t),"undefined"!=typeof r){if(n=[t,e],Array.isArray(r)||(r=u.call(r)),o=0,i=r.length,i<1e3){for(o;o<i;o++)n[o+2]=r[o];return h.apply(this,n)}for(a=h.apply(this,n),o;o<i;){for(n=[t+o,0],s=2;s<1002&&o<i;s++,o++)n[s]=r[o];h.apply(this,n)}return a}return"undefined"!=typeof e?h.call(this,t,e):"undefined"!=typeof t?h.call(this,t):[]}),n("peek",function(){return this[0]}),n("poke",function(t){this.length>0&&(this[0]=t)}),n("peekBack",function(){if(this.length>0)return this[this.length-1]}),n("pokeBack",function(t){this.length>0&&(this[this.length-1]=t)}),n("one",function(){for(var t in this)if(Object.owns(this,t))return this[t]}),Array.prototype.clear||n("clear",function(){return this.length=0,this}),n("compare",function(t,e){e=e||Object.compare;var r,n,i,o,a;if(this===t)return 0;if(!t||!Array.isArray(t))return s.prototype.compare.call(this,t,e);for(n=this.length<t.length?this.length:t.length,r=0;r<n;r++)if(r in this){if(!(r in t))return-1;if(i=this[r],o=t[r],a=e(i,o))return a}else if(r in t)return 1;return this.length-t.length}),n("equals",function(t,e){e=e||Object.equals;var r,n,i=0,o=this.length;if(this===t)return!0;if(!t||!Array.isArray(t))return s.prototype.equals.call(this,t);if(o!==t.length)return!1;for(;i<o;++i)if(i in this){if(!(i in t))return!1;if(r=this[i],n=t[i],!e(r,n))return!1}else if(i in t)return!1;return!0}),n("clone",function(t,e){if(null==t)t=1/0;else if(0===t)return this;if(e=e||new a,e.has(this))return e.get(this);var r=new Array(this.length);e.set(this,r);for(var n in this)r[n]=Object.clone(this[n],t-1,e);return r}),n("iterate",function(t,e){return new i(this,t,e)}),void 0===Array.prototype.spliceOne&&n("spliceOne",function(t,e){var r=this.length;if(r)if(1===arguments.length){for(;t<r;)this[t]=this[t+1],t++;this.length--}else this[t]=e}),n("Iterator",i),i.prototype.__iterationObject=null,Object.defineProperty(i.prototype,"_iterationObject",{get:function(){return this.__iterationObject||(this.__iterationObject={done:!1,value:null})}}),i.prototype.next=function(){return this.start===(null==this.end?this.array.length:this.end)?(this._iterationObject.done=!0,this._iterationObject.value=void 0):this._iterationObject.value=this.array[this.start++],this._iterationObject}}});