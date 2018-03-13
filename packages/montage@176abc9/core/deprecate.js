function generateDeprecatedKey(e,r){return r?e+"_"+r:e}var Montage=require("./core").Montage;Map=require("collections/map");var deprecatedFeaturesOnceMap=new Map,deprecationWarning=exports.deprecationWarning=function(e,r,n){n=n===!0?2:n;var t;if(n&&(t=Error.stackTraceLimit,Error.stackTraceLimit=n),"undefined"!=typeof console&&"function"==typeof console.warn){var a=n?new Error("").stack:"";r?console.warn(e+" is deprecated, use "+r+" instead.",a):console.warn(e,a)}n&&(Error.stackTraceLimit=t)};exports.deprecationWarningOnce=function(e,r,n){var t=generateDeprecatedKey(e,r);deprecatedFeaturesOnceMap.has(t)||(exports.deprecationWarning(e,r,n),deprecatedFeaturesOnceMap.set(t,!0))},exports.deprecateMethod=function(e,r,n,t,a){var o=function(){return a?exports.deprecationWarningOnce(n,t,3):deprecationWarning(n,t,3),r.apply(e?e:this,arguments)};return o.deprecatedFunction=r,o},exports.callDeprecatedFunction=function(e,r,n,t){var a,o,c=Error.stackTraceLimit;return Error.stackTraceLimit=2,"undefined"!=typeof console&&"function"==typeof console.warn&&(a=Montage.getInfoForObject(e).objectName,t?console.warn(n+" is deprecated, use "+t+" instead.",a):console.warn(n,a)),Error.stackTraceLimit=c,o=Array.prototype.slice.call(arguments,4),r.apply(e?e:this,o)};