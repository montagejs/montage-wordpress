module.exports=Function,Function.noop=function(){},Function.identity=function(n){return n},Function.by=function(n,t){t=t||Object.compare,n=n||Function.identity;var o=function(o,u){return t(n(o),n(u))};return o.compare=t,o.by=n,o},Function.get=function(n){return function(t){return Object.get(t,n)}};