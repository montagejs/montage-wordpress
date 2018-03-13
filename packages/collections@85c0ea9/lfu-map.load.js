montageDefine("85c0ea9","lfu-map",{dependencies:["./shim","./lfu-set","./generic-collection","./generic-map","./listen/property-changes","./listen/map-changes","lfu-map"],factory:function(t,e,n){"use strict";function o(t,e,n,s,r){return this instanceof o?(n=n||Object.equals,s=s||Object.hash,r=r||Function.noop,this.contentEquals=n,this.contentHash=s,this.getDefault=r,this.store=new i((void 0),e,function(t,e){return n(t.key,e.key)},function(t){return s(t.key)}),this.length=0,void this.addEach(t)):new o(t,e,n,s,r)}var i=(t("./shim"),t("./lfu-set")),s=t("./generic-collection"),r=t("./generic-map"),a=t("./listen/property-changes"),p=t("./listen/map-changes");n.exports=o,o.LfuMap=o,Object.addEach(o.prototype,s.prototype),Object.addEach(o.prototype,r.prototype),Object.addEach(o.prototype,a.prototype),Object.addEach(o.prototype,p.prototype),Object.defineProperty(o.prototype,"size",s._sizePropertyDescriptor),o.from=s.from,o.prototype.constructClone=function(t){return new this.constructor(t,this.maxLength,this.contentEquals,this.contentHash,this.getDefault)},o.prototype.log=function(t,e){e=e||this.stringify,this.store.log(t,e)},o.prototype.stringify=function(t,e){return e+JSON.stringify(t.key)+": "+JSON.stringify(t.value)},o.prototype.addMapChangeListener=function(){if(!this.dispatchesMapChanges){var t=this;this.store.addBeforeRangeChangeListener(function(e,n){e.length&&n.length&&t.dispatchBeforeMapChange(n[0].key,void 0)}),this.store.addRangeChangeListener(function(e,n){e.length&&n.length&&t.dispatchMapChange(n[0].key,void 0)})}p.prototype.addMapChangeListener.apply(this,arguments)}}});