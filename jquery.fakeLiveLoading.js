/** 
jQuery Fake Live Loading Plugin version 0.0.1 
Copyright Jack Tarantino ©2013. 
Released under Creative Commons Attribution Share-Alike License.
**/
(function(){jQuery(function(a){return a.fn.fakeLoading=function(b){var c,d,e;return a.fn.reverse=Array.prototype.reverse,d=this,e={childSelector:"> *",numberToLoad:10,delay:5e3,interval:1e4,wiggle:2e3,animation:"ease",expandedSize:"5em",direction:"vertical"},void 0===b&&(b=e),"string"==typeof b&&(b={childSelector:b}),b=a.extend(e,b),c=d.find(b.childSelector).slice(0,b.numberToLoad).reverse().each(function(){var c,d;return c=a(this),c.css({visibility:"hidden",height:"0px",overflow:"hidden",transition:"height 0.3s "+b.animation,"-webkit-transition":"height 0.3s "+b.animation}),d=b.delay,b.delay+=b.interval,d+=Math.floor(Math.random()*b.wiggle),setTimeout(function(){return c.css({visibility:"visible",height:b.expandedSize,overflow:"auto"})},d)}),this}})}).call(this);