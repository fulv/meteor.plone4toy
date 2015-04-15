
/* - ++resource++plone.app.jquery.js - */
/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);

/**
 * almond 0.2.7 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

// Patterns
//
// Author: Rok Garbas
// Contact: rok@garbas.si
// Version: 1.0
// Depends: jquery.js
//
// Description:
//
// License:
//
// Copyright (C) 2010 Plone Foundation
//
// This program is free software; you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the Free
// Software Foundation; either version 2 of the License.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
// more details.
//
// You should have received a copy of the GNU General Public License along with
// this program; if not, write to the Free Software Foundation, Inc., 51
// Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
//

/*
Copyright 2012 Igor Vaynberg

Version: 3.4.2 Timestamp: Mon Aug 12 15:04:12 PDT 2013

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License at:

    http://www.apache.org/licenses/LICENSE-2.0
    http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the
Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
the specific language governing permissions and limitations under the Apache License and the GPL License.
*/

/*! 
 * jquery.event.drag - v 2.2
 * Copyright (c) 2010 Three Dub Media - http://threedubmedia.com
 * Open Source MIT License - http://threedubmedia.com/code/license
 */

/*! 
 * jquery.event.drop - v 2.2
 * Copyright (c) 2010 Three Dub Media - http://threedubmedia.com
 * Open Source MIT License - http://threedubmedia.com/code/license
 */

// plone integration for select2
//
// Author: Rok Garbas
// Contact: rok@garbas.si
// Version: 1.0
//
// Description:
//
// License:
//
// Copyright (C) 2010 Plone Foundation
//
// This program is free software; you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the Free
// Software Foundation; either version 2 of the License.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
// more details.
//
// You should have received a copy of the GNU General Public License along with
// this program; if not, write to the Free Software Foundation, Inc., 51
// Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
//

/*!
 * pickadate.js v3.2.2, 2013/09/19
 * By Amsul, http://amsul.ca
 * Hosted on http://amsul.github.io/pickadate.js
 * Licensed under MIT
 */

/*!
 * Date picker for pickadate.js v3.2.2
 * http://amsul.github.io/pickadate.js/date.htm
 */

/*!
 * Time picker for pickadate.js v3.2.2
 * http://amsul.github.io/pickadate.js/time.htm
 */

// plone integration for pickadate.
//
// Author: Rok Garbas
// Contact: rok@garbas.si
// Version: 1.0
//
// Description:
//
// License:
//
// Copyright (C) 2010 Plone Foundation
//
// This program is free software; you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the Free
// Software Foundation; either version 2 of the License.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
// more details.
//
// You should have received a copy of the GNU General Public License along with
// this program; if not, write to the Free Software Foundation, Inc., 51
// Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
//

//     Underscore.js 1.5.1
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

// Pattern which Plone livesearch functionality on an input
//
// Author: Nathan Van Gheem
// Contact: nathan@vangheem.us
// Version: 1.0
//
// Adapted from queryhelper.js in Plone.
//
// License:
//
// Copyright (C) 2013 Plone Foundation
//
// This program is free software; you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the Free
// Software Foundation; either version 2 of the License.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
// more details.
//
// You should have received a copy of the GNU General Public License along with
// this program; if not, write to the Free Software Foundation, Inc., 51
// Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
//

// plone integration for related items
//
// Author: Ryan Foster
// Contact: ryan@rynamic.com
// Version: 1.0
//
// Description:
//
// License:
//
// Copyright (C) 2010 Plone Foundation
//
// This program is free software; you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the Free
// Software Foundation; either version 2 of the License.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
// more details.
//
// You should have received a copy of the GNU General Public License along with
// this program; if not, write to the Free Software Foundation, Inc., 51
// Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
//

// querystring pattern.
//
// Author: Rok Garbas
// Contact: rok@garbas.si
// Version: 1.0
//
// Description:
//
// License:
//
// Copyright (C) 2010 Plone Foundation
//
// This program is free software; you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the Free
// Software Foundation; either version 2 of the License.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
// more details.
//
// You should have received a copy of the GNU General Public License along with
// this program; if not, write to the Free Software Foundation, Inc., 51
// Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
//

// Author: Rok Garbas
// Contact: rok@garbas.si
// Version: 1.0
// Description:
//
// License:
//
// Copyright (C) 2010 Plone Foundation
//
// This program is free software; you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the Free
// Software Foundation; either version 2 of the License.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
// more details.
//
// You should have received a copy of the GNU General Public License along with
// this program; if not, write to the Free Software Foundation, Inc., 51
// Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
//

(function(){var e,t,n;(function(r){function d(e,t){return h.call(e,t)}function v(e,t){var n,r,i,s,o,u,a,f,c,h,p=t&&t.split("/"),d=l.map,v=d&&d["*"]||{};if(e&&e.charAt(0)===".")if(t){p=p.slice(0,p.length-1),e=p.concat(e.split("/"));for(f=0;f<e.length;f+=1){h=e[f];if(h===".")e.splice(f,1),f-=1;else if(h===".."){if(f===1&&(e[2]===".."||e[0]===".."))break;f>0&&(e.splice(f-1,2),f-=2)}}e=e.join("/")}else e.indexOf("./")===0&&(e=e.substring(2));if((p||v)&&d){n=e.split("/");for(f=n.length;f>0;f-=1){r=n.slice(0,f).join("/");if(p)for(c=p.length;c>0;c-=1){i=d[p.slice(0,c).join("/")];if(i){i=i[r];if(i){s=i,o=f;break}}}if(s)break;!u&&v&&v[r]&&(u=v[r],a=f)}!s&&u&&(s=u,o=a),s&&(n.splice(0,o,s),e=n.join("/"))}return e}function m(e,t){return function(){return s.apply(r,p.call(arguments,0).concat([e,t]))}}function g(e){return function(t){return v(t,e)}}function y(e){return function(t){a[e]=t}}function b(e){if(d(f,e)){var t=f[e];delete f[e],c[e]=!0,i.apply(r,t)}if(!d(a,e)&&!d(c,e))throw new Error("No "+e);return a[e]}function w(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function E(e){return function(){return l&&l.config&&l.config[e]||{}}}var i,s,o,u,a={},f={},l={},c={},h=Object.prototype.hasOwnProperty,p=[].slice;o=function(e,t){var n,r=w(e),i=r[0];return e=r[1],i&&(i=v(i,t),n=b(i)),i?n&&n.normalize?e=n.normalize(e,g(t)):e=v(e,t):(e=v(e,t),r=w(e),i=r[0],e=r[1],i&&(n=b(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},u={require:function(e){return m(e)},exports:function(e){var t=a[e];return typeof t!="undefined"?t:a[e]={}},module:function(e){return{id:e,uri:"",exports:a[e],config:E(e)}}},i=function(e,t,n,i){var s,l,h,p,v,g=[],w=typeof n,E;i=i||e;if(w==="undefined"||w==="function"){t=!t.length&&n.length?["require","exports","module"]:t;for(v=0;v<t.length;v+=1){p=o(t[v],i),l=p.f;if(l==="require")g[v]=u.require(e);else if(l==="exports")g[v]=u.exports(e),E=!0;else if(l==="module")s=g[v]=u.module(e);else if(d(a,l)||d(f,l)||d(c,l))g[v]=b(l);else{if(!p.p)throw new Error(e+" missing "+l);p.p.load(p.n,m(i,!0),y(l),{}),g[v]=a[l]}}h=n?n.apply(a[e],g):undefined;if(e)if(s&&s.exports!==r&&s.exports!==a[e])a[e]=s.exports;else if(h!==r||!E)a[e]=h}else e&&(a[e]=n)},e=t=s=function(e,t,n,a,f){return typeof e=="string"?u[e]?u[e](t):b(o(e,t).f):(e.splice||(l=e,t.splice?(e=t,t=n,n=null):e=r),t=t||function(){},typeof n=="function"&&(n=a,a=f),a?i(r,e,t,n):setTimeout(function(){i(r,e,t,n)},4),s)},s.config=function(e){return l=e,l.deps&&s(l.deps,l.callback),s},e._defined=a,n=function(e,t,n){t.splice||(n=t,t=[]),!d(a,e)&&!d(f,e)&&(f[e]=[e,t,n])},n.amd={jQuery:!0}})(),n("node_modules/almond/almond.js",function(){}),n("mockup-registry",["jquery"],function(e,t){var n={patterns:{},warn:function(t){window.DEBUG&&console.warn(t)},getOptions:function(t,r,i){i=i||{},t.length!==0&&!e.nodeName(t[0],"body")&&(i=n.getOptions(t.parent(),r,i));var s={};if(t.length!==0){s=t.data("pat-"+r);if(s&&typeof s=="string"){var o={};e.each(s.split(";"),function(e,t){t=t.split(":");if(t.length>=1){t.reverse();var n=t.pop();n=n.replace(/^\s+|\s+$/g,""),t.reverse();var r=t.join(":");r=r.replace(/^\s+|\s+$/g,""),o[n]=r}}),s=o}}return e.extend(!0,{},i,s)},init:function(e,r,i){var s=e.data("pattern-"+r);if(s===t&&n.patterns[r]){if(window.DEBUG)s=new n.patterns[r](e,n.getOptions(e,r,i));else try{s=new n.patterns[r](e,n.getOptions(e,r,i))}catch(o){n.warn('Failed while initializing "'+r+'" pattern.')}e.data("pattern-"+r,s)}return s},scan:function(t){var r=e(t),i=[];i=e.merge(i,r.filter('[class*="pat-"]')),i=e.merge(i,e('[class*="pat-"]',r)),e.each(i,function(t,r){r=e(r),e.each(r.attr("class").split(" "),function(e,t){t.indexOf("pat-")===0&&n.init(r,t.substr(4))})})},register:function(r){if(!r.prototype.name)return n.warn("Pattern didn't specified a name."),!1;r.prototype.jqueryPlugin===t&&(r.prototype.jqueryPlugin="pattern"+r.prototype.name.charAt(0).toUpperCase()+r.prototype.name.slice(1)),e.fn[r.prototype.jqueryPlugin]=function(i,s){return e(this).each(function(){typeof i=="object"&&(s=i,i=t);var o=e(this),u=n.init(o,r.prototype.name,s);if(i){if(u[i]===t)return n.warn('Method "'+i+'" does not exists.'),!1;if(i.charAt(0)==="_")return n.warn('Method "'+i+'" is private.'),!1;u[i].apply(u,[s])}}),this},n.patterns[r.prototype.name]=r}};return n}),n("mockup-patterns-base",["jquery","mockup-registry"],function(e,t){var n=function(t,n){this.$el=t,this.options=e.extend(!0,{},this.defaults||{},n||{}),this.options.__returnDefaults!==!0&&(this.init(),this.trigger("init"))};return n.prototype={constructor:n,on:function(e,t){this.$el.on(e+"."+this.name+".patterns",t)},trigger:function(e,t){t===undefined&&(t=[]);try{t.splice(0,0,this)}catch(n){t=[this]}this.$el.trigger(e+"."+this.name+".patterns",t)}},n.extend=function(n){var r=this,i;n&&n.hasOwnProperty("constructor")?i=n.constructor:i=function(){r.apply(this,arguments)};var s=function(){this.constructor=i};return s.prototype=r.prototype,i.prototype=new s,i.extend=r.extend,e.extend(!0,i.prototype,n),i.__super__=r.prototype,t.register(i),i},n}),function(e){typeof e.fn.each2=="undefined"&&e.extend(e.fn,{each2:function(t){var n=e([0]),r=-1,i=this.length;while(++r<i&&(n.context=n[0]=this[r])&&t.call(n[0],r,n)!==!1);return this}})}(jQuery),function(e,t){function p(e){var t,n,r,i;if(!e||e.length<1)return e;t="";for(n=0,r=e.length;n<r;n++)i=e.charAt(n),t+=h[i]||i;return t}function d(e,t){var n=0,r=t.length;for(;n<r;n+=1)if(m(e,t[n]))return n;return-1}function v(){var t=e(c);t.appendTo("body");var n={width:t.width()-t[0].clientWidth,height:t.height()-t[0].clientHeight};return t.remove(),n}function m(e,n){return e===n?!0:e===t||n===t?!1:e===null||n===null?!1:e.constructor===String?e+""==n+"":n.constructor===String?n+""==e+"":!1}function g(t,n){var r,i,s;if(t===null||t.length<1)return[];r=t.split(n);for(i=0,s=r.length;i<s;i+=1)r[i]=e.trim(r[i]);return r}function y(e){return e.outerWidth(!1)-e.width()}function b(n){var r="keyup-change-value";n.on("keydown",function(){e.data(n,r)===t&&e.data(n,r,n.val())}),n.on("keyup",function(){var i=e.data(n,r);i!==t&&n.val()!==i&&(e.removeData(n,r),n.trigger("keyup-change"))})}function w(n){n.on("mousemove",function(n){var r=a;(r===t||r.x!==n.pageX||r.y!==n.pageY)&&e(n.target).trigger("mousemove-filtered",n)})}function E(e,n,r){r=r||t;var i;return function(){var t=arguments;window.clearTimeout(i),i=window.setTimeout(function(){n.apply(r,t)},e)}}function S(e){var t=!1,n;return function(){return t===!1&&(n=e(),t=!0),n}}function x(e,t){var n=E(e,function(e){t.trigger("scroll-debounced",e)});t.on("scroll",function(e){d(e.target,t.get())>=0&&n(e)})}function T(e){if(e[0]===document.activeElement)return;window.setTimeout(function(){var t=e[0],n=e.val().length,r;e.focus(),e.is(":visible")&&t===document.activeElement&&(t.setSelectionRange?t.setSelectionRange(n,n):t.createTextRange&&(r=t.createTextRange(),r.collapse(!1),r.select()))},0)}function N(t){t=e(t)[0];var n=0,r=0;if("selectionStart"in t)n=t.selectionStart,r=t.selectionEnd-n;else if("selection"in document){t.focus();var i=document.selection.createRange();r=document.selection.createRange().text.length,i.moveStart("character",-t.value.length),n=i.text.length-r}return{offset:n,length:r}}function C(e){e.preventDefault(),e.stopPropagation()}function k(e){e.preventDefault(),e.stopImmediatePropagation()}function L(t){if(!u){var n=t[0].currentStyle||window.getComputedStyle(t[0],null);u=e(document.createElement("div")).css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:n.fontSize,fontFamily:n.fontFamily,fontStyle:n.fontStyle,fontWeight:n.fontWeight,letterSpacing:n.letterSpacing,textTransform:n.textTransform,whiteSpace:"nowrap"}),u.attr("class","select2-sizer"),e("body").append(u)}return u.text(t.val()),u.width()}function A(t,n,r){var i,s=[],o;i=t.attr("class"),i&&(i=""+i,e(i.split(" ")).each2(function(){this.indexOf("select2-")===0&&s.push(this)})),i=n.attr("class"),i&&(i=""+i,e(i.split(" ")).each2(function(){this.indexOf("select2-")!==0&&(o=r(this),o&&s.push(this))})),t.attr("class",s.join(" "))}function O(e,t,n,r){var i=p(e.toUpperCase()).indexOf(p(t.toUpperCase())),s=t.length;if(i<0){n.push(r(e));return}n.push(r(e.substring(0,i))),n.push("<span class='select2-match'>"),n.push(r(e.substring(i,i+s))),n.push("</span>"),n.push(r(e.substring(i+s,e.length)))}function M(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e]})}function _(n){var r,i=null,s=n.quietMillis||100,o=n.url,u=this;return function(a){window.clearTimeout(r),r=window.setTimeout(function(){var r=n.data,s=o,f=n.transport||e.fn.select2.ajaxDefaults.transport,l={type:n.type||"GET",cache:n.cache||!1,jsonpCallback:n.jsonpCallback||t,dataType:n.dataType||"json"},c=e.extend({},e.fn.select2.ajaxDefaults.params,l);r=r?r.call(u,a.term,a.page,a.context):null,s=typeof s=="function"?s.call(u,a.term,a.page,a.context):s,i&&i.abort(),n.params&&(e.isFunction(n.params)?e.extend(c,n.params.call(u)):e.extend(c,n.params)),e.extend(c,{url:s,dataType:n.dataType,data:r,success:function(e){var t=n.results(e,a.page);a.callback(t)}}),i=f.call(u,c)},s)}}function D(t){var n=t,r,i,s=function(e){return""+e.text};e.isArray(n)&&(i=n,n={results:i}),e.isFunction(n)===!1&&(i=n,n=function(){return i});var o=n();return o.text&&(s=o.text,e.isFunction(s)||(r=o.text,s=function(e){return e[r]})),function(t){var r=t.term,i={results:[]},o;if(r===""){t.callback(n());return}o=function(n,i){var u,a;n=n[0];if(n.children){u={};for(a in n)n.hasOwnProperty(a)&&(u[a]=n[a]);u.children=[],e(n.children).each2(function(e,t){o(t,u.children)}),(u.children.length||t.matcher(r,s(u),n))&&i.push(u)}else t.matcher(r,s(n),n)&&i.push(n)},e(n().results).each2(function(e,t){o(t,i.results)}),t.callback(i)}}function P(n){var r=e.isFunction(n);return function(i){var s=i.term,o={results:[]};e(r?n():n).each(function(){var e=this.text!==t,n=e?this.text:this;(s===""||i.matcher(s,n))&&o.results.push(e?this:{id:this,text:this})}),i.callback(o)}}function H(t,n){if(e.isFunction(t))return!0;if(!t)return!1;throw new Error(n+" must be a function or a falsy value")}function B(t){return e.isFunction(t)?t():t}function j(t){var n=0;return e.each(t,function(e,t){t.children?n+=j(t.children):n++}),n}function F(e,n,r,i){var s=e,o=!1,u,a,f,l,c;if(!i.createSearchChoice||!i.tokenSeparators||i.tokenSeparators.length<1)return t;for(;;){a=-1;for(f=0,l=i.tokenSeparators.length;f<l;f++){c=i.tokenSeparators[f],a=e.indexOf(c);if(a>=0)break}if(a<0)break;u=e.substring(0,a),e=e.substring(a+c.length);if(u.length>0){u=i.createSearchChoice.call(this,u,n);if(u!==t&&u!==null&&i.id(u)!==t&&i.id(u)!==null){o=!1;for(f=0,l=n.length;f<l;f++)if(m(i.id(u),i.id(n[f]))){o=!0;break}o||r(u)}}}if(s!==e)return e}function I(t,n){var r=function(){};return r.prototype=new t,r.prototype.constructor=r,r.prototype.parent=t.prototype,r.prototype=e.extend(r.prototype,n),r}if(window.Select2!==t)return;var n,r,i,s,o,u,a={x:0,y:0},f,l,n={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(e){e=e.which?e.which:e;switch(e){case n.LEFT:case n.RIGHT:case n.UP:case n.DOWN:return!0}return!1},isControl:function(e){var t=e.which;switch(t){case n.SHIFT:case n.CTRL:case n.ALT:return!0}return e.metaKey?!0:!1},isFunctionKey:function(e){return e=e.which?e.which:e,e>=112&&e<=123}},c="<div class='select2-measure-scrollbar'></div>",h={"â’¶":"A","ï¼¡":"A","Ã€":"A","Ã":"A","Ã‚":"A","áº¦":"A","áº¤":"A","áºª":"A","áº¨":"A","Ãƒ":"A","Ä€":"A","Ä‚":"A","áº°":"A","áº®":"A","áº´":"A","áº²":"A","È¦":"A","Ç ":"A","Ã„":"A","Çž":"A","áº¢":"A","Ã…":"A","Çº":"A","Ç":"A","È€":"A","È‚":"A","áº ":"A","áº¬":"A","áº¶":"A","á¸€":"A","Ä„":"A","Èº":"A","â±¯":"A","êœ²":"AA","Ã†":"AE","Ç¼":"AE","Ç¢":"AE","êœ´":"AO","êœ¶":"AU","êœ¸":"AV","êœº":"AV","êœ¼":"AY","â’·":"B","ï¼¢":"B","á¸‚":"B","á¸„":"B","á¸†":"B","Éƒ":"B","Æ‚":"B","Æ":"B","â’¸":"C","ï¼£":"C","Ä†":"C","Äˆ":"C","ÄŠ":"C","ÄŒ":"C","Ã‡":"C","á¸ˆ":"C","Æ‡":"C","È»":"C","êœ¾":"C","â’¹":"D","ï¼¤":"D","á¸Š":"D","ÄŽ":"D","á¸Œ":"D","á¸":"D","á¸’":"D","á¸Ž":"D","Ä":"D","Æ‹":"D","ÆŠ":"D","Æ‰":"D","ê¹":"D","Ç±":"DZ","Ç„":"DZ","Ç²":"Dz","Ç…":"Dz","â’º":"E","ï¼¥":"E","Ãˆ":"E","Ã‰":"E","ÃŠ":"E","á»€":"E","áº¾":"E","á»„":"E","á»‚":"E","áº¼":"E","Ä’":"E","á¸”":"E","á¸–":"E","Ä”":"E","Ä–":"E","Ã‹":"E","áºº":"E","Äš":"E","È„":"E","È†":"E","áº¸":"E","á»†":"E","È¨":"E","á¸œ":"E","Ä˜":"E","á¸˜":"E","á¸š":"E","Æ":"E","ÆŽ":"E","â’»":"F","ï¼¦":"F","á¸ž":"F","Æ‘":"F","ê»":"F","â’¼":"G","ï¼§":"G","Ç´":"G","Äœ":"G","á¸ ":"G","Äž":"G","Ä ":"G","Ç¦":"G","Ä¢":"G","Ç¤":"G","Æ“":"G","êž ":"G","ê½":"G","ê¾":"G","â’½":"H","ï¼¨":"H","Ä¤":"H","á¸¢":"H","á¸¦":"H","Èž":"H","á¸¤":"H","á¸¨":"H","á¸ª":"H","Ä¦":"H","â±§":"H","â±µ":"H","êž":"H","â’¾":"I","ï¼©":"I","ÃŒ":"I","Ã":"I","ÃŽ":"I","Ä¨":"I","Äª":"I","Ä¬":"I","Ä°":"I","Ã":"I","á¸®":"I","á»ˆ":"I","Ç":"I","Èˆ":"I","ÈŠ":"I","á»Š":"I","Ä®":"I","á¸¬":"I","Æ—":"I","â’¿":"J","ï¼ª":"J","Ä´":"J","Éˆ":"J","â“€":"K","ï¼«":"K","á¸°":"K","Ç¨":"K","á¸²":"K","Ä¶":"K","á¸´":"K","Æ˜":"K","â±©":"K","ê€":"K","ê‚":"K","ê„":"K","êž¢":"K","â“":"L","ï¼¬":"L","Ä¿":"L","Ä¹":"L","Ä½":"L","á¸¶":"L","á¸¸":"L","Ä»":"L","á¸¼":"L","á¸º":"L","Å":"L","È½":"L","â±¢":"L","â± ":"L","êˆ":"L","ê†":"L","êž€":"L","Ç‡":"LJ","Çˆ":"Lj","â“‚":"M","ï¼­":"M","á¸¾":"M","á¹€":"M","á¹‚":"M","â±®":"M","Æœ":"M","â“ƒ":"N","ï¼®":"N","Ç¸":"N","Åƒ":"N","Ã‘":"N","á¹„":"N","Å‡":"N","á¹†":"N","Å…":"N","á¹Š":"N","á¹ˆ":"N","È ":"N","Æ":"N","êž":"N","êž¤":"N","ÇŠ":"NJ","Ç‹":"Nj","â“„":"O","ï¼¯":"O","Ã’":"O","Ã“":"O","Ã”":"O","á»’":"O","á»":"O","á»–":"O","á»”":"O","Ã•":"O","á¹Œ":"O","È¬":"O","á¹Ž":"O","ÅŒ":"O","á¹":"O","á¹’":"O","ÅŽ":"O","È®":"O","È°":"O","Ã–":"O","Èª":"O","á»Ž":"O","Å":"O","Ç‘":"O","ÈŒ":"O","ÈŽ":"O","Æ ":"O","á»œ":"O","á»š":"O","á» ":"O","á»ž":"O","á»¢":"O","á»Œ":"O","á»˜":"O","Çª":"O","Ç¬":"O","Ã˜":"O","Ç¾":"O","Æ†":"O","ÆŸ":"O","êŠ":"O","êŒ":"O","Æ¢":"OI","êŽ":"OO","È¢":"OU","â“…":"P","ï¼°":"P","á¹”":"P","á¹–":"P","Æ¤":"P","â±£":"P","ê":"P","ê’":"P","ê”":"P","â“†":"Q","ï¼±":"Q","ê–":"Q","ê˜":"Q","ÉŠ":"Q","â“‡":"R","ï¼²":"R","Å”":"R","á¹˜":"R","Å˜":"R","È":"R","È’":"R","á¹š":"R","á¹œ":"R","Å–":"R","á¹ž":"R","ÉŒ":"R","â±¤":"R","êš":"R","êž¦":"R","êž‚":"R","â“ˆ":"S","ï¼³":"S","áºž":"S","Åš":"S","á¹¤":"S","Åœ":"S","á¹ ":"S","Å ":"S","á¹¦":"S","á¹¢":"S","á¹¨":"S","È˜":"S","Åž":"S","â±¾":"S","êž¨":"S","êž„":"S","â“‰":"T","ï¼´":"T","á¹ª":"T","Å¤":"T","á¹¬":"T","Èš":"T","Å¢":"T","á¹°":"T","á¹®":"T","Å¦":"T","Æ¬":"T","Æ®":"T","È¾":"T","êž†":"T","êœ¨":"TZ","â“Š":"U","ï¼µ":"U","Ã™":"U","Ãš":"U","Ã›":"U","Å¨":"U","á¹¸":"U","Åª":"U","á¹º":"U","Å¬":"U","Ãœ":"U","Ç›":"U","Ç—":"U","Ç•":"U","Ç™":"U","á»¦":"U","Å®":"U","Å°":"U","Ç“":"U","È”":"U","È–":"U","Æ¯":"U","á»ª":"U","á»¨":"U","á»®":"U","á»¬":"U","á»°":"U","á»¤":"U","á¹²":"U","Å²":"U","á¹¶":"U","á¹´":"U","É„":"U","â“‹":"V","ï¼¶":"V","á¹¼":"V","á¹¾":"V","Æ²":"V","êž":"V","É…":"V","ê ":"VY","â“Œ":"W","ï¼·":"W","áº€":"W","áº‚":"W","Å´":"W","áº†":"W","áº„":"W","áºˆ":"W","â±²":"W","â“":"X","ï¼¸":"X","áºŠ":"X","áºŒ":"X","â“Ž":"Y","ï¼¹":"Y","á»²":"Y","Ã":"Y","Å¶":"Y","á»¸":"Y","È²":"Y","áºŽ":"Y","Å¸":"Y","á»¶":"Y","á»´":"Y","Æ³":"Y","ÉŽ":"Y","á»¾":"Y","â“":"Z","ï¼º":"Z","Å¹":"Z","áº":"Z","Å»":"Z","Å½":"Z","áº’":"Z","áº”":"Z","Æµ":"Z","È¤":"Z","â±¿":"Z","â±«":"Z","ê¢":"Z","â“":"a","ï½":"a","áºš":"a","Ã ":"a","Ã¡":"a","Ã¢":"a","áº§":"a","áº¥":"a","áº«":"a","áº©":"a","Ã£":"a","Ä":"a","Äƒ":"a","áº±":"a","áº¯":"a","áºµ":"a","áº³":"a","È§":"a","Ç¡":"a","Ã¤":"a","ÇŸ":"a","áº£":"a","Ã¥":"a","Ç»":"a","ÇŽ":"a","È":"a","Èƒ":"a","áº¡":"a","áº­":"a","áº·":"a","á¸":"a","Ä…":"a","â±¥":"a","É":"a","êœ³":"aa","Ã¦":"ae","Ç½":"ae","Ç£":"ae","êœµ":"ao","êœ·":"au","êœ¹":"av","êœ»":"av","êœ½":"ay","â“‘":"b","ï½‚":"b","á¸ƒ":"b","á¸…":"b","á¸‡":"b","Æ€":"b","Æƒ":"b","É“":"b","â“’":"c","ï½ƒ":"c","Ä‡":"c","Ä‰":"c","Ä‹":"c","Ä":"c","Ã§":"c","á¸‰":"c","Æˆ":"c","È¼":"c","êœ¿":"c","â†„":"c","â““":"d","ï½„":"d","á¸‹":"d","Ä":"d","á¸":"d","á¸‘":"d","á¸“":"d","á¸":"d","Ä‘":"d","ÆŒ":"d","É–":"d","É—":"d","êº":"d","Ç³":"dz","Ç†":"dz","â“”":"e","ï½…":"e","Ã¨":"e","Ã©":"e","Ãª":"e","á»":"e","áº¿":"e","á»…":"e","á»ƒ":"e","áº½":"e","Ä“":"e","á¸•":"e","á¸—":"e","Ä•":"e","Ä—":"e","Ã«":"e","áº»":"e","Ä›":"e","È…":"e","È‡":"e","áº¹":"e","á»‡":"e","È©":"e","á¸":"e","Ä™":"e","á¸™":"e","á¸›":"e","É‡":"e","É›":"e","Ç":"e","â“•":"f","ï½†":"f","á¸Ÿ":"f","Æ’":"f","ê¼":"f","â“–":"g","ï½‡":"g","Çµ":"g","Ä":"g","á¸¡":"g","ÄŸ":"g","Ä¡":"g","Ç§":"g","Ä£":"g","Ç¥":"g","É ":"g","êž¡":"g","áµ¹":"g","ê¿":"g","â“—":"h","ï½ˆ":"h","Ä¥":"h","á¸£":"h","á¸§":"h","ÈŸ":"h","á¸¥":"h","á¸©":"h","á¸«":"h","áº–":"h","Ä§":"h","â±¨":"h","â±¶":"h","É¥":"h","Æ•":"hv","â“˜":"i","ï½‰":"i","Ã¬":"i","Ã­":"i","Ã®":"i","Ä©":"i","Ä«":"i","Ä­":"i","Ã¯":"i","á¸¯":"i","á»‰":"i","Ç":"i","È‰":"i","È‹":"i","á»‹":"i","Ä¯":"i","á¸­":"i","É¨":"i","Ä±":"i","â“™":"j","ï½Š":"j","Äµ":"j","Ç°":"j","É‰":"j","â“š":"k","ï½‹":"k","á¸±":"k","Ç©":"k","á¸³":"k","Ä·":"k","á¸µ":"k","Æ™":"k","â±ª":"k","ê":"k","êƒ":"k","ê…":"k","êž£":"k","â“›":"l","ï½Œ":"l","Å€":"l","Äº":"l","Ä¾":"l","á¸·":"l","á¸¹":"l","Ä¼":"l","á¸½":"l","á¸»":"l","Å¿":"l","Å‚":"l","Æš":"l","É«":"l","â±¡":"l","ê‰":"l","êž":"l","ê‡":"l","Ç‰":"lj","â“œ":"m","ï½":"m","á¸¿":"m","á¹":"m","á¹ƒ":"m","É±":"m","É¯":"m","â“":"n","ï½Ž":"n","Ç¹":"n","Å„":"n","Ã±":"n","á¹…":"n","Åˆ":"n","á¹‡":"n","Å†":"n","á¹‹":"n","á¹‰":"n","Æž":"n","É²":"n","Å‰":"n","êž‘":"n","êž¥":"n","ÇŒ":"nj","â“ž":"o","ï½":"o","Ã²":"o","Ã³":"o","Ã´":"o","á»“":"o","á»‘":"o","á»—":"o","á»•":"o","Ãµ":"o","á¹":"o","È­":"o","á¹":"o","Å":"o","á¹‘":"o","á¹“":"o","Å":"o","È¯":"o","È±":"o","Ã¶":"o","È«":"o","á»":"o","Å‘":"o","Ç’":"o","È":"o","È":"o","Æ¡":"o","á»":"o","á»›":"o","á»¡":"o","á»Ÿ":"o","á»£":"o","á»":"o","á»™":"o","Ç«":"o","Ç­":"o","Ã¸":"o","Ç¿":"o","É”":"o","ê‹":"o","ê":"o","Éµ":"o","Æ£":"oi","È£":"ou","ê":"oo","â“Ÿ":"p","ï½":"p","á¹•":"p","á¹—":"p","Æ¥":"p","áµ½":"p","ê‘":"p","ê“":"p","ê•":"p","â“ ":"q","ï½‘":"q","É‹":"q","ê—":"q","ê™":"q","â“¡":"r","ï½’":"r","Å•":"r","á¹™":"r","Å™":"r","È‘":"r","È“":"r","á¹›":"r","á¹":"r","Å—":"r","á¹Ÿ":"r","É":"r","É½":"r","ê›":"r","êž§":"r","êžƒ":"r","â“¢":"s","ï½“":"s","ÃŸ":"s","Å›":"s","á¹¥":"s","Å":"s","á¹¡":"s","Å¡":"s","á¹§":"s","á¹£":"s","á¹©":"s","È™":"s","ÅŸ":"s","È¿":"s","êž©":"s","êž…":"s","áº›":"s","â“£":"t","ï½”":"t","á¹«":"t","áº—":"t","Å¥":"t","á¹­":"t","È›":"t","Å£":"t","á¹±":"t","á¹¯":"t","Å§":"t","Æ­":"t","Êˆ":"t","â±¦":"t","êž‡":"t","êœ©":"tz","â“¤":"u","ï½•":"u","Ã¹":"u","Ãº":"u","Ã»":"u","Å©":"u","á¹¹":"u","Å«":"u","á¹»":"u","Å­":"u","Ã¼":"u","Çœ":"u","Ç˜":"u","Ç–":"u","Çš":"u","á»§":"u","Å¯":"u","Å±":"u","Ç”":"u","È•":"u","È—":"u","Æ°":"u","á»«":"u","á»©":"u","á»¯":"u","á»­":"u","á»±":"u","á»¥":"u","á¹³":"u","Å³":"u","á¹·":"u","á¹µ":"u","Ê‰":"u","â“¥":"v","ï½–":"v","á¹½":"v","á¹¿":"v","Ê‹":"v","êŸ":"v","ÊŒ":"v","ê¡":"vy","â“¦":"w","ï½—":"w","áº":"w","áºƒ":"w","Åµ":"w","áº‡":"w","áº…":"w","áº˜":"w","áº‰":"w","â±³":"w","â“§":"x","ï½˜":"x","áº‹":"x","áº":"x","â“¨":"y","ï½™":"y","á»³":"y","Ã½":"y","Å·":"y","á»¹":"y","È³":"y","áº":"y","Ã¿":"y","á»·":"y","áº™":"y","á»µ":"y","Æ´":"y","É":"y","á»¿":"y","â“©":"z","ï½š":"z","Åº":"z","áº‘":"z","Å¼":"z","Å¾":"z","áº“":"z","áº•":"z","Æ¶":"z","È¥":"z","É€":"z","â±¬":"z","ê£":"z"};f=e(document),o=function(){var e=1;return function(){return e++}}(),f.on("mousemove",function(e){a.x=e.pageX,a.y=e.pageY}),r=I(Object,{bind:function(e){var t=this;return function(){e.apply(t,arguments)}},init:function(n){var r,i,s=".select2-results",u,a;this.opts=n=this.prepareOpts(n),this.id=n.id,n.element.data("select2")!==t&&n.element.data("select2")!==null&&n.element.data("select2").destroy(),this.container=this.createContainer(),this.containerId="s2id_"+(n.element.attr("id")||"autogen"+o()),this.containerSelector="#"+this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"),this.container.attr("id",this.containerId),this.body=S(function(){return n.element.closest("body")}),A(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.attr("style",n.element.attr("style")),this.container.css(B(n.containerCss)),this.container.addClass(B(n.containerCssClass)),this.elementTabIndex=this.opts.element.attr("tabindex"),this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container),this.container.data("select2",this),this.dropdown=this.container.find(".select2-drop"),this.dropdown.addClass(B(n.dropdownCssClass)),this.dropdown.data("select2",this),A(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.results=r=this.container.find(s),this.search=i=this.container.find("input.select2-input"),this.queryCount=0,this.resultsPage=0,this.context=null,this.initContainer(),w(this.results),this.dropdown.on("mousemove-filtered touchstart touchmove touchend",s,this.bind(this.highlightUnderEvent)),x(80,this.results),this.dropdown.on("scroll-debounced",s,this.bind(this.loadMoreIfNeeded)),e(this.container).on("change",".select2-input",function(e){e.stopPropagation()}),e(this.dropdown).on("change",".select2-input",function(e){e.stopPropagation()}),e.fn.mousewheel&&r.mousewheel(function(e,t,n,i){var s=r.scrollTop(),o;i>0&&s-i<=0?(r.scrollTop(0),C(e)):i<0&&r.get(0).scrollHeight-r.scrollTop()+i<=r.height()&&(r.scrollTop(r.get(0).scrollHeight-r.height()),C(e))}),b(i),i.on("keyup-change input paste",this.bind(this.updateResults)),i.on("focus",function(){i.addClass("select2-focused")}),i.on("blur",function(){i.removeClass("select2-focused")}),this.dropdown.on("mouseup",s,this.bind(function(t){e(t.target).closest(".select2-result-selectable").length>0&&(this.highlightUnderEvent(t),this.selectHighlighted(t))})),this.dropdown.on("click mouseup mousedown",function(e){e.stopPropagation()}),e.isFunction(this.opts.initSelection)&&(this.initSelection(),this.monitorSource()),n.maximumInputLength!==null&&this.search.attr("maxlength",n.maximumInputLength);var u=n.element.prop("disabled");u===t&&(u=!1),this.enable(!u);var a=n.element.prop("readonly");a===t&&(a=!1),this.readonly(a),l=l||v(),this.autofocus=n.element.prop("autofocus"),n.element.prop("autofocus",!1),this.autofocus&&this.focus(),this.nextSearchTerm=t},destroy:function(){var e=this.opts.element,n=e.data("select2");this.close(),this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),n!==t&&(n.container.remove(),n.dropdown.remove(),e.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus",this.autofocus||!1),this.elementTabIndex?e.attr({tabindex:this.elementTabIndex}):e.removeAttr("tabindex"),e.show())},optionToData:function(e){if(e.is("option"))return{id:e.prop("value"),text:e.text(),element:e.get(),css:e.attr("class"),disabled:e.prop("disabled"),locked:m(e.attr("locked"),"locked")||m(e.data("locked"),!0)};if(e.is("optgroup"))return{text:e.attr("label"),children:[],element:e.get(),css:e.attr("class")}},prepareOpts:function(n){var r,i,s,o,u=this;r=n.element,r.get(0).tagName.toLowerCase()==="select"&&(this.select=i=n.element),i&&e.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in n)throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.")}),n=e.extend({},{populateResults:function(r,i,s){var o,a,f,l,c=this.opts.id;o=function(r,i,a){var f,l,h,p,d,v,m,g,y,b;r=n.sortResults(r,i,s);for(f=0,l=r.length;f<l;f+=1)h=r[f],d=h.disabled===!0,p=!d&&c(h)!==t,v=h.children&&h.children.length>0,m=e("<li></li>"),m.addClass("select2-results-dept-"+a),m.addClass("select2-result"),m.addClass(p?"select2-result-selectable":"select2-result-unselectable"),d&&m.addClass("select2-disabled"),v&&m.addClass("select2-result-with-children"),m.addClass(u.opts.formatResultCssClass(h)),g=e(document.createElement("div")),g.addClass("select2-result-label"),b=n.formatResult(h,g,s,u.opts.escapeMarkup),b!==t&&g.html(b),m.append(g),v&&(y=e("<ul></ul>"),y.addClass("select2-result-sub"),o(h.children,y,a+1),m.append(y)),m.data("select2-data",h),i.append(m)},o(i,r,0)}},e.fn.select2.defaults,n),typeof n.id!="function"&&(s=n.id,n.id=function(e){return e[s]});if(e.isArray(n.element.data("select2Tags"))){if("tags"in n)throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+n.element.attr("id");n.tags=n.element.data("select2Tags")}i?(n.query=this.bind(function(e){var n={results:[],more:!1},i=e.term,s,o,a;a=function(t,n){var r;t.is("option")?e.matcher(i,t.text(),t)&&n.push(u.optionToData(t)):t.is("optgroup")&&(r=u.optionToData(t),t.children().each2(function(e,t){a(t,r.children)}),r.children.length>0&&n.push(r))},s=r.children(),this.getPlaceholder()!==t&&s.length>0&&(o=this.getPlaceholderOption(),o&&(s=s.not(o))),s.each2(function(e,t){a(t,n.results)}),e.callback(n)}),n.id=function(e){return e.id},n.formatResultCssClass=function(e){return e.css}):"query"in n||("ajax"in n?(o=n.element.data("ajax-url"),o&&o.length>0&&(n.ajax.url=o),n.query=_.call(n.element,n.ajax)):"data"in n?n.query=D(n.data):"tags"in n&&(n.query=P(n.tags),n.createSearchChoice===t&&(n.createSearchChoice=function(t){return{id:e.trim(t),text:e.trim(t)}}),n.initSelection===t&&(n.initSelection=function(t,r){var i=[];e(g(t.val(),n.separator)).each(function(){var t=this,r=this,s=n.tags;e.isFunction(s)&&(s=s()),e(s).each(function(){if(m(this.id,t))return r=this.text,!1}),i.push({id:t,text:r})}),r(i)})));if(typeof n.query!="function")throw"query function not defined for Select2 "+n.element.attr("id");return n},monitorSource:function(){var e=this.opts.element,n;e.on("change.select2",this.bind(function(e){this.opts.element.data("select2-change-triggered")!==!0&&this.initSelection()})),n=this.bind(function(){var n,r,i=this,s=e.prop("disabled");s===t&&(s=!1),this.enable(!s);var r=e.prop("readonly");r===t&&(r=!1),this.readonly(r),A(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.addClass(B(this.opts.containerCssClass)),A(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(B(this.opts.dropdownCssClass))}),e.on("propertychange.select2 DOMAttrModified.select2",n),this.mutationCallback===t&&(this.mutationCallback=function(e){e.forEach(n)}),typeof WebKitMutationObserver!="undefined"&&(this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),this.propertyObserver=new WebKitMutationObserver(this.mutationCallback),this.propertyObserver.observe(e.get(0),{attributes:!0,subtree:!1}))},triggerSelect:function(t){var n=e.Event("select2-selecting",{val:this.id(t),object:t});return this.opts.element.trigger(n),!n.isDefaultPrevented()},triggerChange:function(t){t=t||{},t=e.extend({},t,{type:"change",val:this.val()}),this.opts.element.data("select2-change-triggered",!0),this.opts.element.trigger(t),this.opts.element.data("select2-change-triggered",!1),this.opts.element.click(),this.opts.blurOnChange&&this.opts.element.blur()},isInterfaceEnabled:function(){return this.enabledInterface===!0},enableInterface:function(){var e=this._enabled&&!this._readonly,t=!e;return e===this.enabledInterface?!1:(this.container.toggleClass("select2-container-disabled",t),this.close(),this.enabledInterface=e,!0)},enable:function(e){e===t&&(e=!0);if(this._enabled===e)return;this._enabled=e,this.opts.element.prop("disabled",!e),this.enableInterface()},disable:function(){this.enable(!1)},readonly:function(e){return e===t&&(e=!1),this._readonly===e?!1:(this._readonly=e,this.opts.element.prop("readonly",e),this.enableInterface(),!0)},opened:function(){return this.container.hasClass("select2-dropdown-open")},positionDropdown:function(){var t=this.dropdown,n=this.container.offset(),r=this.container.outerHeight(!1),i=this.container.outerWidth(!1),s=t.outerHeight(!1),o=e(window).scrollLeft()+e(window).width(),u=e(window).scrollTop()+e(window).height(),a=n.top+r,f=n.left,c=a+s<=u,h=n.top-s>=this.body().scrollTop(),p=t.outerWidth(!1),d=f+p<=o,v=t.hasClass("select2-drop-above"),m,g,y,b;this.opts.dropdownAutoWidth?(b=e(".select2-results",t)[0],t.addClass("select2-drop-auto-width"),t.css("width",""),p=t.outerWidth(!1)+(b.scrollHeight===b.clientHeight?0:l.width),p>i?i=p:p=i,d=f+p<=o):this.container.removeClass("select2-drop-auto-width"),this.body().css("position")!=="static"&&(m=this.body().offset(),a-=m.top,f-=m.left),v?(g=!0,!h&&c&&(g=!1)):(g=!1,!c&&h&&(g=!0)),d||(f=n.left+i-p),g?(a=n.top-s,this.container.addClass("select2-drop-above"),t.addClass("select2-drop-above")):(this.container.removeClass("select2-drop-above"),t.removeClass("select2-drop-above")),y=e.extend({top:a,left:f,width:i},B(this.opts.dropdownCss)),t.css(y)},shouldOpen:function(){var t;return this.opened()?!1:this._enabled===!1||this._readonly===!0?!1:(t=e.Event("select2-opening"),this.opts.element.trigger(t),!t.isDefaultPrevented())},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above")},open:function(){return this.shouldOpen()?(this.opening(),!0):!1},opening:function(){var t=this.containerId,n="scroll."+t,r="resize."+t,i="orientationchange."+t,s,o;this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),this.clearDropdownAlignmentPreference(),this.dropdown[0]!==this.body().children().last()[0]&&this.dropdown.detach().appendTo(this.body()),s=e("#select2-drop-mask"),s.length==0&&(s=e(document.createElement("div")),s.attr("id","select2-drop-mask").attr("class","select2-drop-mask"),s.hide(),s.appendTo(this.body()),s.on("mousedown touchstart click",function(t){var n=e("#select2-drop"),r;n.length>0&&(r=n.data("select2"),r.opts.selectOnBlur&&r.selectHighlighted({noFocus:!0}),r.close({focus:!1}),t.preventDefault(),t.stopPropagation())})),this.dropdown.prev()[0]!==s[0]&&this.dropdown.before(s),e("#select2-drop").removeAttr("id"),this.dropdown.attr("id","select2-drop"),s.show(),this.positionDropdown(),this.dropdown.show(),this.positionDropdown(),this.dropdown.addClass("select2-drop-active");var u=this;this.container.parents().add(window).each(function(){e(this).on(r+" "+n+" "+i,function(e){u.positionDropdown()})})},close:function(){if(!this.opened())return;var t=this.containerId,n="scroll."+t,r="resize."+t,i="orientationchange."+t;this.container.parents().add(window).each(function(){e(this).off(n).off(r).off(i)}),this.clearDropdownAlignmentPreference(),e("#select2-drop-mask").hide(),this.dropdown.removeAttr("id"),this.dropdown.hide(),this.container.removeClass("select2-dropdown-open"),this.results.empty(),this.clearSearch(),this.search.removeClass("select2-active"),this.opts.element.trigger(e.Event("select2-close"))},externalSearch:function(e){this.open(),this.search.val(e),this.updateResults(!1)},clearSearch:function(){},getMaximumSelectionSize:function(){return B(this.opts.maximumSelectionSize)},ensureHighlightVisible:function(){var t=this.results,n,r,i,s,o,u,a;r=this.highlight();if(r<0)return;if(r==0){t.scrollTop(0);return}n=this.findHighlightableChoices().find(".select2-result-label"),i=e(n[r]),s=i.offset().top+i.outerHeight(!0),r===n.length-1&&(a=t.find("li.select2-more-results"),a.length>0&&(s=a.offset().top+a.outerHeight(!0))),o=t.offset().top+t.outerHeight(!0),s>o&&t.scrollTop(t.scrollTop()+(s-o)),u=i.offset().top-t.offset().top,u<0&&i.css("display")!="none"&&t.scrollTop(t.scrollTop()+u)},findHighlightableChoices:function(){return this.results.find(".select2-result-selectable:not(.select2-selected):not(.select2-disabled)")},moveHighlight:function(t){var n=this.findHighlightableChoices(),r=this.highlight();while(r>-1&&r<n.length){r+=t;var i=e(n[r]);if(i.hasClass("select2-result-selectable")&&!i.hasClass("select2-disabled")&&!i.hasClass("select2-selected")){this.highlight(r);break}}},highlight:function(t){var n=this.findHighlightableChoices(),r,i;if(arguments.length===0)return d(n.filter(".select2-highlighted")[0],n.get());t>=n.length&&(t=n.length-1),t<0&&(t=0),this.removeHighlight(),r=e(n[t]),r.addClass("select2-highlighted"),this.ensureHighlightVisible(),i=r.data("select2-data"),i&&this.opts.element.trigger({type:"select2-highlight",val:this.id(i),choice:i})},removeHighlight:function(){this.results.find(".select2-highlighted").removeClass("select2-highlighted")},countSelectableResults:function(){return this.findHighlightableChoices().length},highlightUnderEvent:function(t){var n=e(t.target).closest(".select2-result-selectable");if(n.length>0&&!n.is(".select2-highlighted")){var r=this.findHighlightableChoices();this.highlight(r.index(n))}else n.length==0&&this.removeHighlight()},loadMoreIfNeeded:function(){var e=this.results,t=e.find("li.select2-more-results"),n,r=-1,i=this.resultsPage+1,s=this,o=this.search.val(),u=this.context;if(t.length===0)return;n=t.offset().top-e.offset().top-e.height(),n<=this.opts.loadMorePadding&&(t.addClass("select2-active"),this.opts.query({element:this.opts.element,term:o,page:i,context:u,matcher:this.opts.matcher,callback:this.bind(function(n){if(!s.opened())return;s.opts.populateResults.call(this,e,n.results,{term:o,page:i,context:u}),s.postprocessResults(n,!1,!1),n.more===!0?(t.detach().appendTo(e).text(s.opts.formatLoadMore(i+1)),window.setTimeout(function(){s.loadMoreIfNeeded()},10)):t.remove(),s.positionDropdown(),s.resultsPage=i,s.context=n.context,this.opts.element.trigger({type:"select2-loaded",items:n})})}))},tokenize:function(){},updateResults:function(n){function h(){r.removeClass("select2-active"),u.positionDropdown()}function p(e){i.html(e),h()}var r=this.search,i=this.results,s=this.opts,o,u=this,a,f=r.val(),l=e.data(this.container,"select2-last-term"),c;if(n!==!0&&l&&m(f,l))return;e.data(this.container,"select2-last-term",f);if(n!==!0&&(this.showSearchInput===!1||!this.opened()))return;c=++this.queryCount;var d=this.getMaximumSelectionSize();if(d>=1){o=this.data();if(e.isArray(o)&&o.length>=d&&H(s.formatSelectionTooBig,"formatSelectionTooBig")){p("<li class='select2-selection-limit'>"+s.formatSelectionTooBig(d)+"</li>");return}}if(r.val().length<s.minimumInputLength){H(s.formatInputTooShort,"formatInputTooShort")?p("<li class='select2-no-results'>"+s.formatInputTooShort(r.val(),s.minimumInputLength)+"</li>"):p(""),n&&this.showSearch&&this.showSearch(!0);return}if(s.maximumInputLength&&r.val().length>s.maximumInputLength){H(s.formatInputTooLong,"formatInputTooLong")?p("<li class='select2-no-results'>"+s.formatInputTooLong(r.val(),s.maximumInputLength)+"</li>"):p("");return}s.formatSearching&&this.findHighlightableChoices().length===0&&p("<li class='select2-searching'>"+s.formatSearching()+"</li>"),r.addClass("select2-active"),this.removeHighlight(),a=this.tokenize(),a!=t&&a!=null&&r.val(a),this.resultsPage=1,s.query({element:s.element,term:r.val(),page:this.resultsPage,context:null,matcher:s.matcher,callback:this.bind(function(o){var a;if(c!=this.queryCount)return;if(!this.opened()){this.search.removeClass("select2-active");return}this.context=o.context===t?null:o.context,this.opts.createSearchChoice&&r.val()!==""&&(a=this.opts.createSearchChoice.call(u,r.val(),o.results),a!==t&&a!==null&&u.id(a)!==t&&u.id(a)!==null&&e(o.results).filter(function(){return m(u.id(this),u.id(a))}).length===0&&o.results.unshift(a));if(o.results.length===0&&H(s.formatNoMatches,"formatNoMatches")){p("<li class='select2-no-results'>"+s.formatNoMatches(r.val())+"</li>");return}i.empty(),u.opts.populateResults.call(this,i,o.results,{term:r.val(),page:this.resultsPage,context:null}),o.more===!0&&H(s.formatLoadMore,"formatLoadMore")&&(i.append("<li class='select2-more-results'>"+u.opts.escapeMarkup(s.formatLoadMore(this.resultsPage))+"</li>"),window.setTimeout(function(){u.loadMoreIfNeeded()},10)),this.postprocessResults(o,n),h(),this.opts.element.trigger({type:"select2-loaded",items:o})})})},cancel:function(){this.close()},blur:function(){this.opts.selectOnBlur&&this.selectHighlighted({noFocus:!0}),this.close(),this.container.removeClass("select2-container-active"),this.search[0]===document.activeElement&&this.search.blur(),this.clearSearch(),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")},focusSearch:function(){T(this.search)},selectHighlighted:function(e){var t=this.highlight(),n=this.results.find(".select2-highlighted"),r=n.closest(".select2-result").data("select2-data");r?(this.highlight(t),this.onSelect(r,e)):e&&e.noFocus&&this.close()},getPlaceholder:function(){var e;return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder||((e=this.getPlaceholderOption())!==t?e.text():t)},getPlaceholderOption:function(){if(this.select){var e=this.select.children().first();if(this.opts.placeholderOption!==t)return this.opts.placeholderOption==="first"&&e||typeof this.opts.placeholderOption=="function"&&this.opts.placeholderOption(this.select);if(e.text()===""&&e.val()==="")return e}},initContainerWidth:function(){function n(){var n,r,i,s,o;if(this.opts.width==="off")return null;if(this.opts.width==="element")return this.opts.element.outerWidth(!1)===0?"auto":this.opts.element.outerWidth(!1)+"px";if(this.opts.width==="copy"||this.opts.width==="resolve"){n=this.opts.element.attr("style");if(n!==t){r=n.split(";");for(s=0,o=r.length;s<o;s+=1){i=r[s].replace(/\s/g,"").match(/[^-]width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i);if(i!==null&&i.length>=1)return i[1]}}return this.opts.width==="resolve"?(n=this.opts.element.css("width"),n.indexOf("%")>0?n:this.opts.element.outerWidth(!1)===0?"auto":this.opts.element.outerWidth(!1)+"px"):null}return e.isFunction(this.opts.width)?this.opts.width():this.opts.width}var r=n.call(this);r!==null&&this.container.css("width",r)}}),i=I(r,{createContainer:function(){var t=e(document.createElement("div")).attr({"class":"select2-container"}).html(["<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>","   <span class='select2-chosen'>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>","   <span class='select2-arrow'><b></b></span>","</a>","<input class='select2-focusser select2-offscreen' type='text'/>","<div class='select2-drop select2-display-none'>","   <div class='select2-search'>","       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'/>","   </div>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return t},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.focusser.prop("disabled",!this.isInterfaceEnabled())},opening:function(){var n,r,i;this.opts.minimumResultsForSearch>=0&&this.showSearch(!0),this.parent.opening.apply(this,arguments),this.showSearchInput!==!1&&this.search.val(this.focusser.val()),this.search.focus(),n=this.search.get(0),n.createTextRange?(r=n.createTextRange(),r.collapse(!1),r.select()):n.setSelectionRange&&(i=this.search.val().length,n.setSelectionRange(i,i)),this.search.val()===""&&this.nextSearchTerm!=t&&(this.search.val(this.nextSearchTerm),this.search.select()),this.focusser.prop("disabled",!0).val(""),this.updateResults(!0),this.opts.element.trigger(e.Event("select2-open"))},close:function(e){if(!this.opened())return;this.parent.close.apply(this,arguments),e=e||{focus:!0},this.focusser.removeAttr("disabled"),e.focus&&this.focusser.focus()},focus:function(){this.opened()?this.close():(this.focusser.removeAttr("disabled"),this.focusser.focus())},isFocused:function(){return this.container.hasClass("select2-container-active")},cancel:function(){this.parent.cancel.apply(this,arguments),this.focusser.removeAttr("disabled"),this.focusser.focus()},destroy:function(){e("label[for='"+this.focusser.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments)},initContainer:function(){var t,r=this.container,i=this.dropdown;this.opts.minimumResultsForSearch<0?this.showSearch(!1):this.showSearch(!0),this.selection=t=r.find(".select2-choice"),this.focusser=r.find(".select2-focusser"),this.focusser.attr("id","s2id_autogen"+o()),e("label[for='"+this.opts.element.attr("id")+"']").attr("for",this.focusser.attr("id")),this.focusser.attr("tabindex",this.elementTabIndex),this.search.on("keydown",this.bind(function(e){if(!this.isInterfaceEnabled())return;if(e.which===n.PAGE_UP||e.which===n.PAGE_DOWN){C(e);return}switch(e.which){case n.UP:case n.DOWN:this.moveHighlight(e.which===n.UP?-1:1),C(e);return;case n.ENTER:this.selectHighlighted(),C(e);return;case n.TAB:this.opts.selectOnBlur&&this.selectHighlighted({noFocus:!0});return;case n.ESC:this.cancel(e),C(e);return}})),this.search.on("blur",this.bind(function(e){document.activeElement===this.body().get(0)&&window.setTimeout(this.bind(function(){this.search.focus()}),0)})),this.focusser.on("keydown",this.bind(function(e){if(!this.isInterfaceEnabled())return;if(e.which===n.TAB||n.isControl(e)||n.isFunctionKey(e)||e.which===n.ESC)return;if(this.opts.openOnEnter===!1&&e.which===n.ENTER){C(e);return}if(e.which==n.DOWN||e.which==n.UP||e.which==n.ENTER&&this.opts.openOnEnter){if(e.altKey||e.ctrlKey||e.shiftKey||e.metaKey)return;this.open(),C(e);return}if(e.which==n.DELETE||e.which==n.BACKSPACE){this.opts.allowClear&&this.clear(),C(e);return}})),b(this.focusser),this.focusser.on("keyup-change input",this.bind(function(e){if(this.opts.minimumResultsForSearch>=0){e.stopPropagation();if(this.opened())return;this.open()}})),t.on("mousedown","abbr",this.bind(function(e){if(!this.isInterfaceEnabled())return;this.clear(),k(e),this.close(),this.selection.focus()})),t.on("mousedown",this.bind(function(t){this.container.hasClass("select2-container-active")||this.opts.element.trigger(e.Event("select2-focus")),this.opened()?this.close():this.isInterfaceEnabled()&&this.open(),C(t)})),i.on("mousedown",this.bind(function(){this.search.focus()})),t.on("focus",this.bind(function(e){C(e)})),this.focusser.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(e.Event("select2-focus")),this.container.addClass("select2-container-active")})).on("blur",this.bind(function(){this.opened()||(this.container.removeClass("select2-container-active"),this.opts.element.trigger(e.Event("select2-blur")))})),this.search.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(e.Event("select2-focus")),this.container.addClass("select2-container-active")})),this.initContainerWidth(),this.opts.element.addClass("select2-offscreen"),this.setPlaceholder()},clear:function(e){var t=this.selection.data("select2-data");if(t){var n=this.getPlaceholderOption();this.opts.element.val(n?n.val():""),this.selection.find(".select2-chosen").empty(),this.selection.removeData("select2-data"),this.setPlaceholder(),e!==!1&&(this.opts.element.trigger({type:"select2-removed",val:this.id(t),choice:t}),this.triggerChange({removed:t}))}},initSelection:function(){var e;if(this.isPlaceholderOptionSelected())this.updateSelection(null),this.close(),this.setPlaceholder();else{var n=this;this.opts.initSelection.call(null,this.opts.element,function(e){e!==t&&e!==null&&(n.updateSelection(e),n.close(),n.setPlaceholder())})}},isPlaceholderOptionSelected:function(){var e;return this.opts.placeholder?(e=this.getPlaceholderOption())!==t&&e.is(":selected")||this.opts.element.val()===""||this.opts.element.val()===t||this.opts.element.val()===null:!1},prepareOpts:function(){var t=this.parent.prepareOpts.apply(this,arguments),n=this;return t.element.get(0).tagName.toLowerCase()==="select"?t.initSelection=function(e,t){var r=e.find(":selected");t(n.optionToData(r))}:"data"in t&&(t.initSelection=t.initSelection||function(n,r){var i=n.val(),s=null;t.query({matcher:function(e,n,r){var o=m(i,t.id(r));return o&&(s=r),o},callback:e.isFunction(r)?function(){r(s)}:e.noop})}),t},getPlaceholder:function(){return this.select&&this.getPlaceholderOption()===t?t:this.parent.getPlaceholder.apply(this,arguments)},setPlaceholder:function(){var e=this.getPlaceholder();if(this.isPlaceholderOptionSelected()&&e!==t){if(this.select&&this.getPlaceholderOption()===t)return;this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(e)),this.selection.addClass("select2-default"),this.container.removeClass("select2-allowclear")}},postprocessResults:function(e,t,n){var r=0,i=this,s=!0;this.findHighlightableChoices().each2(function(e,t){if(m(i.id(t.data("select2-data")),i.opts.element.val()))return r=e,!1}),n!==!1&&(t===!0&&r>=0?this.highlight(r):this.highlight(0));if(t===!0){var o=this.opts.minimumResultsForSearch;o>=0&&this.showSearch(j(e.results)>=o)}},showSearch:function(t){if(this.showSearchInput===t)return;this.showSearchInput=t,this.dropdown.find(".select2-search").toggleClass("select2-search-hidden",!t),this.dropdown.find(".select2-search").toggleClass("select2-offscreen",!t),e(this.dropdown,this.container).toggleClass("select2-with-searchbox",t)},onSelect:function(e,t){if(!this.triggerSelect(e))return;var n=this.opts.element.val(),r=this.data();this.opts.element.val(this.id(e)),this.updateSelection(e),this.opts.element.trigger({type:"select2-selected",val:this.id(e),choice:e}),this.nextSearchTerm=this.opts.nextSearchTerm(e,this.search.val()),this.close(),(!t||!t.noFocus)&&this.selection.focus(),m(n,this.id(e))||this.triggerChange({added:e,removed:r})},updateSelection:function(e){var n=this.selection.find(".select2-chosen"),r,i;this.selection.data("select2-data",e),n.empty(),e!==null&&(r=this.opts.formatSelection(e,n,this.opts.escapeMarkup)),r!==t&&n.append(r),i=this.opts.formatSelectionCssClass(e,n),i!==t&&n.addClass(i),this.selection.removeClass("select2-default"),this.opts.allowClear&&this.getPlaceholder()!==t&&this.container.addClass("select2-allowclear")},val:function(){var e,n=!1,r=null,i=this,s=this.data();if(arguments.length===0)return this.opts.element.val();e=arguments[0],arguments.length>1&&(n=arguments[1]);if(this.select)this.select.val(e).find(":selected").each2(function(e,t){return r=i.optionToData(t),!1}),this.updateSelection(r),this.setPlaceholder(),n&&this.triggerChange({added:r,removed:s});else{if(!e&&e!==0){this.clear(n);return}if(this.opts.initSelection===t)throw new Error("cannot call val() if initSelection() is not defined");this.opts.element.val(e),this.opts.initSelection(this.opts.element,function(e){i.opts.element.val(e?i.id(e):""),i.updateSelection(e),i.setPlaceholder(),n&&i.triggerChange({added:e,removed:s})})}},clearSearch:function(){this.search.val(""),this.focusser.val("")},data:function(e){var n,r=!1;if(arguments.length===0)return n=this.selection.data("select2-data"),n==t&&(n=null),n;arguments.length>1&&(r=arguments[1]),e?(n=this.data(),this.opts.element.val(e?this.id(e):""),this.updateSelection(e),r&&this.triggerChange({added:e,removed:n})):this.clear(r)}}),s=I(r,{createContainer:function(){var t=e(document.createElement("div")).attr({"class":"select2-container select2-container-multi"}).html(["<ul class='select2-choices'>","  <li class='select2-search-field'>","    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi select2-display-none'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return t},prepareOpts:function(){var t=this.parent.prepareOpts.apply(this,arguments),n=this;return t.element.get(0).tagName.toLowerCase()==="select"?t.initSelection=function(e,t){var r=[];e.find(":selected").each2(function(e,t){r.push(n.optionToData(t))}),t(r)}:"data"in t&&(t.initSelection=t.initSelection||function(n,r){var i=g(n.val(),t.separator),s=[];t.query({matcher:function(n,r,o){var u=e.grep(i,function(e){return m(e,t.id(o))}).length;return u&&s.push(o),u},callback:e.isFunction(r)?function(){var e=[];for(var n=0;n<i.length;n++){var o=i[n];for(var u=0;u<s.length;u++){var a=s[u];if(m(o,t.id(a))){e.push(a),s.splice(u,1);break}}}r(e)}:e.noop})}),t},selectChoice:function(e){var t=this.container.find(".select2-search-choice-focus");if(!t.length||!e||e[0]!=t[0])t.length&&this.opts.element.trigger("choice-deselected",t),t.removeClass("select2-search-choice-focus"),e&&e.length&&(this.close(),e.addClass("select2-search-choice-focus"),this.opts.element.trigger("choice-selected",e))},destroy:function(){e("label[for='"+this.search.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments)},initContainer:function(){var t=".select2-choices",r;this.searchContainer=this.container.find(".select2-search-field"),this.selection=r=this.container.find(t);var i=this;this.selection.on("click",".select2-search-choice",function(t){i.search[0].focus(),i.selectChoice(e(this))}),this.search.attr("id","s2id_autogen"+o()),e("label[for='"+this.opts.element.attr("id")+"']").attr("for",this.search.attr("id")),this.search.on("input paste",this.bind(function(){if(!this.isInterfaceEnabled())return;this.opened()||this.open()})),this.search.attr("tabindex",this.elementTabIndex),this.keydowns=0,this.search.on("keydown",this.bind(function(e){if(!this.isInterfaceEnabled())return;++this.keydowns;var t=r.find(".select2-search-choice-focus"),i=t.prev(".select2-search-choice:not(.select2-locked)"),s=t.next(".select2-search-choice:not(.select2-locked)"),o=N(this.search);if(!(!t.length||e.which!=n.LEFT&&e.which!=n.RIGHT&&e.which!=n.BACKSPACE&&e.which!=n.DELETE&&e.which!=n.ENTER)){var u=t;e.which==n.LEFT&&i.length?u=i:e.which==n.RIGHT?u=s.length?s:null:e.which===n.BACKSPACE?(this.unselect(t.first()),this.search.width(10),u=i.length?i:s):e.which==n.DELETE?(this.unselect(t.first()),this.search.width(10),u=s.length?s:null):e.which==n.ENTER&&(u=null),this.selectChoice(u),C(e),(!u||!u.length)&&this.open();return}if((e.which===n.BACKSPACE&&this.keydowns==1||e.which==n.LEFT)&&o.offset==0&&!o.length){this.selectChoice(r.find(".select2-search-choice:not(.select2-locked)").last()),C(e);return}this.selectChoice(null);if(this.opened())switch(e.which){case n.UP:case n.DOWN:this.moveHighlight(e.which===n.UP?-1:1),C(e);return;case n.ENTER:this.selectHighlighted(),C(e);return;case n.TAB:this.opts.selectOnBlur&&this.selectHighlighted({noFocus:!0}),this.close();return;case n.ESC:this.cancel(e),C(e);return}if(e.which===n.TAB||n.isControl(e)||n.isFunctionKey(e)||e.which===n.BACKSPACE||e.which===n.ESC)return;if(e.which===n.ENTER){if(this.opts.openOnEnter===!1)return;if(e.altKey||e.ctrlKey||e.shiftKey||e.metaKey)return}this.open(),(e.which===n.PAGE_UP||e.which===n.PAGE_DOWN)&&C(e),e.which===n.ENTER&&C(e)})),this.search.on("keyup",this.bind(function(e){this.keydowns=0,this.resizeSearch()})),this.search.on("blur",this.bind(function(t){this.container.removeClass("select2-container-active"),this.search.removeClass("select2-focused"),this.selectChoice(null),this.opened()||this.clearSearch(),t.stopImmediatePropagation(),this.opts.element.trigger(e.Event("select2-blur"))})),this.container.on("click",t,this.bind(function(t){if(!this.isInterfaceEnabled())return;if(e(t.target).closest(".select2-search-choice").length>0)return;this.selectChoice(null),this.clearPlaceholder(),this.container.hasClass("select2-container-active")||this.opts.element.trigger(e.Event("select2-focus")),this.open(),this.focusSearch(),t.preventDefault()})),this.container.on("focus",t,this.bind(function(){if(!this.isInterfaceEnabled())return;this.container.hasClass("select2-container-active")||this.opts.element.trigger(e.Event("select2-focus")),this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"),this.clearPlaceholder()})),this.initContainerWidth(),this.opts.element.addClass("select2-offscreen"),this.clearSearch()},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.search.prop("disabled",!this.isInterfaceEnabled())},initSelection:function(){var e;this.opts.element.val()===""&&this.opts.element.text()===""&&(this.updateSelection([]),this.close(),this.clearSearch());if(this.select||this.opts.element.val()!==""){var n=this;this.opts.initSelection.call(null,this.opts.element,function(e){e!==t&&e!==null&&(n.updateSelection(e),n.close(),n.clearSearch())})}},clearSearch:function(){var e=this.getPlaceholder(),n=this.getMaxSearchWidth();e!==t&&this.getVal().length===0&&this.search.hasClass("select2-focused")===!1?(this.search.val(e).addClass("select2-default"),this.search.width(n>0?n:this.container.css("width"))):this.search.val("").width(10)},clearPlaceholder:function(){this.search.hasClass("select2-default")&&this.search.val("").removeClass("select2-default")},opening:function(){this.clearPlaceholder(),this.resizeSearch(),this.parent.opening.apply(this,arguments),this.focusSearch(),this.updateResults(!0),this.search.focus(),this.opts.element.trigger(e.Event("select2-open"))},close:function(){if(!this.opened())return;this.parent.close.apply(this,arguments)},focus:function(){this.close(),this.search.focus()},isFocused:function(){return this.search.hasClass("select2-focused")},updateSelection:function(t){var n=[],r=[],i=this;e(t).each(function(){d(i.id(this),n)<0&&(n.push(i.id(this)),r.push(this))}),t=r,this.selection.find(".select2-search-choice").remove(),e(t).each(function(){i.addSelectedChoice(this)}),i.postprocessResults()},tokenize:function(){var e=this.search.val();e=this.opts.tokenizer.call(this,e,this.data(),this.bind(this.onSelect),this.opts),e!=null&&e!=t&&(this.search.val(e),e.length>0&&this.open())},onSelect:function(e,t){if(!this.triggerSelect(e))return;this.addSelectedChoice(e),this.opts.element.trigger({type:"selected",val:this.id(e),choice:e}),(this.select||!this.opts.closeOnSelect)&&this.postprocessResults(e,!1,this.opts.closeOnSelect===!0),this.opts.closeOnSelect?(this.close(),this.search.width(10)):this.countSelectableResults()>0?(this.search.width(10),this.resizeSearch(),this.getMaximumSelectionSize()>0&&this.val().length>=this.getMaximumSelectionSize()&&this.updateResults(!0),this.positionDropdown()):(this.close(),this.search.width(10)),this.triggerChange({added:e}),(!t||!t.noFocus)&&this.focusSearch()},cancel:function(){this.close(),this.focusSearch()},addSelectedChoice:function(n){var r=!n.locked,i=e("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"),s=e("<li class='select2-search-choice select2-locked'><div></div></li>"),o=r?i:s,u=this.id(n),a=this.getVal(),f,l;f=this.opts.formatSelection(n,o.find("div"),this.opts.escapeMarkup),f!=t&&o.find("div").replaceWith("<div>"+f+"</div>"),l=this.opts.formatSelectionCssClass(n,o.find("div")),l!=t&&o.addClass(l),r&&o.find(".select2-search-choice-close").on("mousedown",C).on("click dblclick",this.bind(function(t){if(!this.isInterfaceEnabled())return;e(t.target).closest(".select2-search-choice").fadeOut("fast",this.bind(function(){this.unselect(e(t.target)),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"),this.close(),this.focusSearch()})).dequeue(),C(t)})).on("focus",this.bind(function(){if(!this.isInterfaceEnabled())return;this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active")})),o.data("select2-data",n),o.insertBefore(this.searchContainer),a.push(u),this.setVal(a)},unselect:function(e){var t=this.getVal(),n,r;e=e.closest(".select2-search-choice");if(e.length===0)throw"Invalid argument: "+e+". Must be .select2-search-choice";n=e.data("select2-data");if(!n)return;r=d(this.id(n),t),r>=0&&(t.splice(r,1),this.setVal(t),this.select&&this.postprocessResults()),e.remove(),this.opts.element.trigger({type:"removed",val:this.id(n),choice:n}),this.triggerChange({removed:n})},postprocessResults:function(e,t,n){var r=this.getVal(),i=this.results.find(".select2-result"),s=this.results.find(".select2-result-with-children"),o=this;i.each2(function(e,t){var n=o.id(t.data("select2-data"));d(n,r)>=0&&(t.addClass("select2-selected"),t.find(".select2-result-selectable").addClass("select2-selected"))}),s.each2(function(e,t){!t.is(".select2-result-selectable")&&t.find(".select2-result-selectable:not(.select2-selected)").length===0&&t.addClass("select2-selected")}),this.highlight()==-1&&n!==!1&&o.highlight(0),!this.opts.createSearchChoice&&!i.filter(".select2-result:not(.select2-selected)").length>0&&(!e||e&&!e.more&&this.results.find(".select2-no-results").length===0)&&H(o.opts.formatNoMatches,"formatNoMatches")&&this.results.append("<li class='select2-no-results'>"+o.opts.formatNoMatches(o.search.val())+"</li>")},getMaxSearchWidth:function(){return this.selection.width()-y(this.search)},resizeSearch:function(){var e,t,n,r,i,s=y(this.search);e=L(this.search)+10,t=this.search.offset().left,n=this.selection.width(),r=this.selection.offset().left,i=n-(t-r)-s,i<e&&(i=n-s),i<40&&(i=n-s),i<=0&&(i=e),this.search.width(i)},getVal:function(){var e;return this.select?(e=this.select.val(),e===null?[]:e):(e=this.opts.element.val(),g(e,this.opts.separator))},setVal:function(t){var n;this.select?this.select.val(t):(n=[],e(t).each(function(){d(this,n)<0&&n.push(this)}),this.opts.element.val(n.length===0?"":n.join(this.opts.separator)))},buildChangeDetails:function(e,t){var t=t.slice(0),e=e.slice(0);for(var n=0;n<t.length;n++)for(var r=0;r<e.length;r++)m(this.opts.id(t[n]),this.opts.id(e[r]))&&(t.splice(n,1),n--,e.splice(r,1),r--);return{added:t,removed:e}},val:function(n,r){var i,s=this,o;if(arguments.length===0)return this.getVal();i=this.data(),i.length||(i=[]);if(!n&&n!==0){this.opts.element.val(""),this.updateSelection([]),this.clearSearch(),r&&this.triggerChange({added:this.data(),removed:i});return}this.setVal(n);if(this.select)this.opts.initSelection(this.select,this.bind(this.updateSelection)),r&&this.triggerChange(this.buildChangeDetails(i,this.data()));else{if(this.opts.initSelection===t)throw new Error("val() cannot be called if initSelection() is not defined");this.opts.initSelection(this.opts.element,function(t){var n=e.map(t,s.id);s.setVal(n),s.updateSelection(t),s.clearSearch(),r&&s.triggerChange(s.buildChangeDetails(i,this.data()))})}this.clearSearch()},onSortStart:function(){if(this.select)throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");this.search.width(0),this.searchContainer.hide()},onSortEnd:function(){var t=[],n=this;this.searchContainer.show(),this.searchContainer.appendTo(this.searchContainer.parent()),this.resizeSearch(),this.selection.find(".select2-search-choice").each(function(){t.push(n.opts.id(e(this).data("select2-data")))}),this.setVal(t),this.triggerChange()},data:function(t,n){var r=this,i,s;if(arguments.length===0)return this.selection.find(".select2-search-choice").map(function(){return e(this).data("select2-data")}).get();s=this.data(),t||(t=[]),i=e.map(t,function(e){return r.opts.id(e)}),this.setVal(i),this.updateSelection(t),this.clearSearch(),n&&this.triggerChange(this.buildChangeDetails(s,this.data()))}}),e.fn.select2=function(){var n=Array.prototype.slice.call(arguments,0),r,o,u,a,f,l=["val","destroy","opened","open","close","focus","isFocused","container","dropdown","onSortStart","onSortEnd","enable","disable","readonly","positionDropdown","data","search"],c=["opened","isFocused","container","dropdown"],h=["val","data"],p={search:"externalSearch"};return this.each(function(){if(n.length===0||typeof n[0]=="object")r=n.length===0?{}:e.extend({},n[0]),r.element=e(this),r.element.get(0).tagName.toLowerCase()==="select"?f=r.element.prop("multiple"):(f=r.multiple||!1,"tags"in r&&(r.multiple=f=!0)),o=f?new s:new i,o.init(r);else{if(typeof n[0]!="string")throw"Invalid arguments to select2 plugin: "+n;if(d(n[0],l)<0)throw"Unknown method: "+n[0];a=t,o=e(this).data("select2");if(o===t)return;u=n[0],u==="container"?a=o.container:u==="dropdown"?a=o.dropdown:(p[u]&&(u=p[u]),a=o[u].apply(o,n.slice(1)));if(d(n[0],c)>=0||d(n[0],h)&&n.length==1)return!1}}),a===t?this:a},e.fn.select2.defaults={width:"copy",loadMorePadding:0,closeOnSelect:!0,openOnEnter:!0,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(e,t,n,r){var i=[];return O(e.text,n.term,i,r),i.join("")},formatSelection:function(e,n,r){return e?r(e.text):t},sortResults:function(e,t,n){return e},formatResultCssClass:function(e){return t},formatSelectionCssClass:function(e,n){return t},formatNoMatches:function(){return"No matches found"},formatInputTooShort:function(e,t){var n=t-e.length;return"Please enter "+n+" more character"+(n==1?"":"s")},formatInputTooLong:function(e,t){var n=e.length-t;return"Please delete "+n+" character"+(n==1?"":"s")},formatSelectionTooBig:function(e){return"You can only select "+e+" item"+(e==1?"":"s")},formatLoadMore:function(e){return"Loading more results..."},formatSearching:function(){return"Searching..."},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:function(e){return e.id},matcher:function(e,t){return p(""+t).toUpperCase().indexOf(p(""+e).toUpperCase())>=0},separator:",",tokenSeparators:[],tokenizer:F,escapeMarkup:M,blurOnChange:!1,selectOnBlur:!1,adaptContainerCssClass:function(e){return e},adaptDropdownCssClass:function(e){return null},nextSearchTerm:function(e,n){return t}},e.fn.select2.ajaxDefaults={transport:e.ajax,params:{type:"GET",cache:!1,dataType:"json"}},window.Select2={query:{ajax:_,local:D,tags:P},util:{debounce:E,markMatch:O,escapeMarkup:M,stripDiacritics:p},"class":{"abstract":r,single:i,multi:s}}}(jQuery),n("select2",function(){}),function(e){e.fn.drag=function(t,n,r){var i=typeof t=="string"?t:"",s=e.isFunction(t)?t:e.isFunction(n)?n:null;return i.indexOf("drag")!==0&&(i="drag"+i),r=(t==s?n:r)||{},s?this.bind(i,r,s):this.trigger(i)};var t=e.event,n=t.special,r=n.drag={defaults:{which:1,distance:0,not:":input",handle:null,relative:!1,drop:!0,click:!1},datakey:"dragdata",noBubble:!0,add:function(t){var n=e.data(this,r.datakey),i=t.data||{};n.related+=1,e.each(r.defaults,function(e,t){i[e]!==undefined&&(n[e]=i[e])})},remove:function(){e.data(this,r.datakey).related-=1},setup:function(){if(e.data(this,r.datakey))return;var n=e.extend({related:0},r.defaults);e.data(this,r.datakey,n),t.add(this,"touchstart mousedown",r.init,n),this.attachEvent&&this.attachEvent("ondragstart",r.dontstart)},teardown:function(){var n=e.data(this,r.datakey)||{};if(n.related)return;e.removeData(this,r.datakey),t.remove(this,"touchstart mousedown",r.init),r.textselect(!0),this.detachEvent&&this.detachEvent("ondragstart",r.dontstart)},init:function(i){if(r.touched)return;var s=i.data,o;if(i.which!=0&&s.which>0&&i.which!=s.which)return;if(e(i.target).is(s.not))return;if(s.handle&&!e(i.target).closest(s.handle,i.currentTarget).length)return;r.touched=i.type=="touchstart"?this:null,s.propagates=1,s.mousedown=this,s.interactions=[r.interaction(this,s)],s.target=i.target,s.pageX=i.pageX,s.pageY=i.pageY,s.dragging=null,o=r.hijack(i,"draginit",s);if(!s.propagates)return;o=r.flatten(o),o&&o.length&&(s.interactions=[],e.each(o,function(){s.interactions.push(r.interaction(this,s))})),s.propagates=s.interactions.length,s.drop!==!1&&n.drop&&n.drop.handler(i,s),r.textselect(!1),r.touched?t.add(r.touched,"touchmove touchend",r.handler,s):t.add(document,"mousemove mouseup",r.handler,s);if(!r.touched||s.live)return!1},interaction:function(t,n){var i=e(t)[n.relative?"position":"offset"]()||{top:0,left:0};return{drag:t,callback:new r.callback,droppable:[],offset:i}},handler:function(i){var s=i.data;switch(i.type){case!s.dragging&&"touchmove":i.preventDefault();case!s.dragging&&"mousemove":if(Math.pow(i.pageX-s.pageX,2)+Math.pow(i.pageY-s.pageY,2)<Math.pow(s.distance,2))break;i.target=s.target,r.hijack(i,"dragstart",s),s.propagates&&(s.dragging=!0);case"touchmove":i.preventDefault();case"mousemove":if(s.dragging){r.hijack(i,"drag",s);if(s.propagates){s.drop!==!1&&n.drop&&n.drop.handler(i,s);break}i.type="mouseup"};case"touchend":case"mouseup":default:r.touched?t.remove(r.touched,"touchmove touchend",r.handler):t.remove(document,"mousemove mouseup",r.handler),s.dragging&&(s.drop!==!1&&n.drop&&n.drop.handler(i,s),r.hijack(i,"dragend",s)),r.textselect(!0),s.click===!1&&s.dragging&&e.data(s.mousedown,"suppress.click",(new Date).getTime()+5),s.dragging=r.touched=!1}},hijack:function(n,i,s,o,u){if(!s)return;var a={event:n.originalEvent,type:n.type},f=i.indexOf("drop")?"drag":"drop",l,c=o||0,h,p,d,v=isNaN(o)?s.interactions.length:o;n.type=i,n.originalEvent=null,s.results=[];do if(h=s.interactions[c]){if(i!=="dragend"&&h.cancelled)continue;d=r.properties(n,s,h),h.results=[],e(u||h[f]||s.droppable).each(function(o,u){d.target=u,n.isPropagationStopped=function(){return!1},l=u?t.dispatch.call(u,n,d):null,l===!1?(f=="drag"&&(h.cancelled=!0,s.propagates-=1),i=="drop"&&(h[f][o]=null)):i=="dropinit"&&h.droppable.push(r.element(l)||u),i=="dragstart"&&(h.proxy=e(r.element(l)||h.drag)[0]),h.results.push(l),delete n.result;if(i!=="dropinit")return l}),s.results[c]=r.flatten(h.results),i=="dropinit"&&(h.droppable=r.flatten(h.droppable)),i=="dragstart"&&!h.cancelled&&d.update()}while(++c<v);return n.type=a.type,n.originalEvent=a.event,r.flatten(s.results)},properties:function(e,t,n){var i=n.callback;return i.drag=n.drag,i.proxy=n.proxy||n.drag,i.startX=t.pageX,i.startY=t.pageY,i.deltaX=e.pageX-t.pageX,i.deltaY=e.pageY-t.pageY,i.originalX=n.offset.left,i.originalY=n.offset.top,i.offsetX=i.originalX+i.deltaX,i.offsetY=i.originalY+i.deltaY,i.drop=r.flatten((n.drop||[]).slice()),i.available=r.flatten((n.droppable||[]).slice()),i},element:function(e){if(e&&(e.jquery||e.nodeType==1))return e},flatten:function(t){return e.map(t,function(t){return t&&t.jquery?e.makeArray(t):t&&t.length?r.flatten(t):t})},textselect:function(t){e(document)[t?"unbind":"bind"]("selectstart",r.dontstart).css("MozUserSelect",t?"":"none"),document.unselectable=t?"off":"on"},dontstart:function(){return!1},callback:function(){}};r.callback.prototype={update:function(){n.drop&&this.available.length&&e.each(this.available,function(e){n.drop.locate(this,e)})}};var i=t.dispatch;t.dispatch=function(t){if(e.data(this,"suppress."+t.type)-(new Date).getTime()>0){e.removeData(this,"suppress."+t.type);return}return i.apply(this,arguments)};var s=t.fixHooks.touchstart=t.fixHooks.touchmove=t.fixHooks.touchend=t.fixHooks.touchcancel={props:"clientX clientY pageX pageY screenX screenY".split(" "),filter:function(t,n){if(n){var r=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0]||null;r&&e.each(s.props,function(e,n){t[n]=r[n]})}return t}};n.draginit=n.dragstart=n.dragend=r}(jQuery),n("jquery.event.drag",["jquery"],function(){}),function(e){e.fn.drop=function(t,n,r){var i=typeof t=="string"?t:"",s=e.isFunction(t)?t:e.isFunction(n)?n:null;return i.indexOf("drop")!==0&&(i="drop"+i),r=(t==s?n:r)||{},s?this.bind(i,r,s):this.trigger(i)},e.drop=function(t){t=t||{},r.multi=t.multi===!0?Infinity:t.multi===!1?1:isNaN(t.multi)?r.multi:t.multi,r.delay=t.delay||r.delay,r.tolerance=e.isFunction(t.tolerance)?t.tolerance:t.tolerance===null?null:r.tolerance,r.mode=t.mode||r.mode||"intersect"};var t=e.event,n=t.special,r=e.event.special.drop={multi:1,delay:20,mode:"overlap",targets:[],datakey:"dropdata",noBubble:!0,add:function(t){var n=e.data(this,r.datakey);n.related+=1},remove:function(){e.data(this,r.datakey).related-=1},setup:function(){if(e.data(this,r.datakey))return;var t={related:0,active:[],anyactive:0,winner:0,location:{}};e.data(this,r.datakey,t),r.targets.push(this)},teardown:function(){var t=e.data(this,r.datakey)||{};if(t.related)return;e.removeData(this,r.datakey);var n=this;r.targets=e.grep(r.targets,function(e){return e!==n})},handler:function(t,i){var s,o;if(!i)return;switch(t.type){case"mousedown":case"touchstart":o=e(r.targets),typeof i.drop=="string"&&(o=o.filter(i.drop)),o.each(function(){var t=e.data(this,r.datakey);t.active=[],t.anyactive=0,t.winner=0}),i.droppable=o,n.drag.hijack(t,"dropinit",i);break;case"mousemove":case"touchmove":r.event=t,r.timer||r.tolerate(i);break;case"mouseup":case"touchend":r.timer=clearTimeout(r.timer),i.propagates&&(n.drag.hijack(t,"drop",i),n.drag.hijack(t,"dropend",i))}},locate:function(t,n){var i=e.data(t,r.datakey),s=e(t),o=s.offset()||{},u=s.outerHeight(),a=s.outerWidth(),f={elem:t,width:a,height:u,top:o.top,left:o.left,right:o.left+a,bottom:o.top+u};return i&&(i.location=f,i.index=n,i.elem=t),f},contains:function(e,t){return(t[0]||t.left)>=e.left&&(t[0]||t.right)<=e.right&&(t[1]||t.top)>=e.top&&(t[1]||t.bottom)<=e.bottom},modes:{intersect:function(e,t,n){return this.contains(n,[e.pageX,e.pageY])?1e9:this.modes.overlap.apply(this,arguments)},overlap:function(e,t,n){return Math.max(0,Math.min(n.bottom,t.bottom)-Math.max(n.top,t.top))*Math.max(0,Math.min(n.right,t.right)-Math.max(n.left,t.left))},fit:function(e,t,n){return this.contains(n,t)?1:0},middle:function(e,t,n){return this.contains(n,[t.left+t.width*.5,t.top+t.height*.5])?1:0}},sort:function(e,t){return t.winner-e.winner||e.index-t.index},tolerate:function(t){var i,s,o,u,a,f,l,c=0,h,p=t.interactions.length,d=[r.event.pageX,r.event.pageY],v=r.tolerance||r.modes[r.mode];do if(h=t.interactions[c]){if(!h)return;h.drop=[],a=[],f=h.droppable.length,v&&(o=r.locate(h.proxy)),i=0;do if(l=h.droppable[i]){u=e.data(l,r.datakey),s=u.location;if(!s)continue;u.winner=v?v.call(r,r.event,o,s):r.contains(s,d)?1:0,a.push(u)}while(++i<f);a.sort(r.sort),i=0;do if(u=a[i])u.winner&&h.drop.length<r.multi?(!u.active[c]&&!u.anyactive&&(n.drag.hijack(r.event,"dropstart",t,c,u.elem)[0]!==!1?(u.active[c]=1,u.anyactive+=1):u.winner=0),u.winner&&h.drop.push(u.elem)):u.active[c]&&u.anyactive==1&&(n.drag.hijack(r.event,"dropend",t,c,u.elem),u.active[c]=0,u.anyactive-=1);while(++i<f)}while(++c<p);r.last&&d[0]==r.last.pageX&&d[1]==r.last.pageY?delete r.timer:r.timer=setTimeout(function(){r.tolerate(t)},r.delay),r.last=r.event}};n.dropinit=n.dropstart=n.dropend=r}(jQuery),n("jquery.event.drop",["jquery"],function(){}),n("mockup-patterns-select2",["jquery","mockup-patterns-base","select2","jquery.event.drag","jquery.event.drop"],function(e,t){var n=t.extend({name:"select2",defaults:{separator:","},initializeValues:function(){var t=this;t.options.initialValues&&(t.options.id=function(e){return e.id},t.options.initSelection=function(n,r){var i=[],s=n.val(),o=t.options.initialValues;typeof t.options.initialValues=="string"&&t.options.initialValues!==""&&(t.options.initialValues[0]==="{"?o=JSON.parse(t.options.initialValues):(o={},e(t.options.initialValues.split(t.options.separator)).each(function(){var t=this.split(":"),n=e.trim(t[0]),r=e.trim(t[1]);o[n]=r}))),e(s.split(t.options.separator)).each(function(){var e=this;o[this]&&(e=o[this]),i.push({id:this,text:e})}),r(i)})},initializeTags:function(){var e=this;e.options.tags&&typeof e.options.tags=="string"&&(e.options.tags.substr(0,1)==="["?e.options.tags=JSON.parse(e.options.tags):e.options.tags=e.options.tags.split(e.options.separator))},initializeOrdering:function(){var t=this;if(t.options.orderable){var n=function(e,t){return e?e.text:undefined};t.options.formatSelection&&(n=t.options.formatSelection),t.options.formatSelection=function(r,i){return i.parents("li").drag("start",function(n,r){return e(this).addClass("select2-choice-dragging"),t.$el.select2("onSortStart"),e.drop({tolerance:function(t,n,r){var i=t.pageY>r.top+r.height/2;return e.data(r.elem,"drop+reorder",i?"insertAfter":"insertBefore"),this.contains(r,[t.pageX,t.pageY])}}),e(this).clone().addClass("dragging").css({opacity:.75,position:"absolute"}).appendTo(document.body)}).drag(function(t,n){e(n.proxy).css({top:n.offsetY,left:n.offsetX});var r=n.drop[0],i=e.data(r||{},"drop+reorder");r&&(r!=n.current||i!=n.method)&&(e(this)[i](r),n.current=r,n.method=i,n.update())}).drag("end",function(n,r){e(this).removeClass("select2-choice-dragging"),t.$el.select2("onSortEnd"),e(r.proxy).remove()}).drop("init",function(e,t){return this==t.drag?!1:!0}),n(r,i)}}},initializeSelect2:function(){var e=this;e.$el.select2(e.options),e.$select2=e.$el.parent().find(".select2-container"),e.$el.parent().off("close.modal.patterns"),e.options.orderable&&e.$select2.addClass("select2-orderable")},init:function(){var t=this;if(t.options.ajax||t.options.vocabularyUrl){t.options.vocabularyUrl&&(t.options.multiple=!0,t.options.ajax=t.options.ajax||{},t.options.ajax.url=t.options.vocabularyUrl,t.options.initSelection=function(n,r){var i=[],s=n.val();e(s.split(t.options.separator)).each(function(){i.push({id:this,text:this})}),r(i)});var n="";t.options.ajax=e.extend({quietMillis:300,data:function(e,t){return n=e,{query:e,page_limit:10,page:t}},results:function(r,i){var s=r.results;if(t.options.vocabularyUrl){var o=[];e.each(r.results,function(e,t){o.push(t.id)}),s=[],n!==""&&e.inArray(n,o)===-1&&s.push({id:n,text:n}),e.each(r.results,function(e,t){s.push(t)})}return{results:s}}},t.options.ajax)}t.initializeValues(),t.initializeTags(),t.initializeOrdering(),t.initializeSelect2()}});return n}),function(e){typeof n=="function"&&n.amd?n("picker",["jquery"],e):this.Picker=e(jQuery)}(function(e){function n(r,i,s,o){function p(){return n._.node("div",n._.node("div",n._.node("div",n._.node("div",h.component.nodes(u.open),f.box),f.wrap),f.frame),f.holder)}function d(e){e.stopPropagation(),e.type=="focus"&&h.$root.addClass(f.focused),h.open()}if(!r)return n;var u={id:Math.abs(~~(Math.random()*1e9))},a=s?e.extend(!0,{},s.defaults,o):o||{},f=e.extend({},n.klasses(),a.klass),l=e(r),c=function(){return this.start()},h=c.prototype={constructor:c,$node:l,start:function(){return u&&u.start?h:(u.methods={},u.start=!0,u.open=!1,u.type=r.type,r.autofocus=r==document.activeElement,r.type="text",r.readOnly=!0,h.component=new s(h,a),h.$root=e(n._.node("div",p(),f.picker)).on({focusin:function(e){h.$root.removeClass(f.focused),e.stopPropagation()},"mousedown click":function(e){e.target!=h.$root.children()[0]&&e.stopPropagation()}}).on("click","[data-pick], [data-nav], [data-clear]",function(){var t=e(this),i=t.data(),s=t.hasClass(f.navDisabled)||t.hasClass(f.disabled),o=document.activeElement;o=o&&(o.type||o.href),(s||!e.contains(h.$root[0],o))&&r.focus(),i.nav&&!s?h.set("highlight",h.component.item.highlight,{nav:i.nav}):n._.isInteger(i.pick)&&!s?h.set("select",i.pick).close(!0):i.clear&&h.clear().close(!0)}),a.formatSubmit&&(h._hidden=e('<input type=hidden name="'+r.name+(a.hiddenSuffix||"_submit")+'"'+(l.data("value")?' value="'+n._.trigger(h.component.formats.toString,h.component,[a.formatSubmit,h.component.item.select])+'"':"")+">")[0]),l.addClass(f.input).on("focus.P"+u.id+" click.P"+u.id,d).on("change.P"+u.id,function(){h._hidden&&(h._hidden.value=r.value?n._.trigger(h.component.formats.toString,h.component,[a.formatSubmit,h.component.item.select]):"")}).on("keydown.P"+u.id,function(e){var t=e.keyCode,n=/^(8|46)$/.test(t);if(t==27)return h.close(),!1;if(t==32||n||!u.open&&h.component.key[t])e.preventDefault(),e.stopPropagation(),n?h.clear().close():h.open()}).val(l.data("value")?n._.trigger(h.component.formats.toString,h.component,[a.format,h.component.item.select]):r.value).after(h._hidden).data(i,h),a.container?e(a.container).append(h.$root):l.after(h.$root),h.on({start:h.component.onStart,render:h.component.onRender,stop:h.component.onStop,open:h.component.onOpen,close:h.component.onClose,set:h.component.onSet}).on({start:a.onStart,render:a.onRender,stop:a.onStop,open:a.onOpen,close:a.onClose,set:a.onSet}),r.autofocus&&h.open(),h.trigger("start").trigger("render"))},render:function(e){return e?h.$root.html(p()):h.$root.find("."+f.box).html(h.component.nodes(u.open)),h.trigger("render")},stop:function(){return u.start?(h.close(),h._hidden&&h._hidden.parentNode.removeChild(h._hidden),h.$root.remove(),l.removeClass(f.input).off(".P"+u.id).removeData(i),r.type=u.type,r.readOnly=!1,h.trigger("stop"),u.methods={},u.start=!1,h):h},open:function(i){return u.open?h:(l.addClass(f.active),h.$root.addClass(f.opened),i!==!1&&(u.open=!0,l.focus(),t.on("click.P"+u.id+" focusin.P"+u.id,function(e){e.target!=r&&e.target!=document&&h.close()}).on("keydown.P"+u.id,function(t){var i=t.keyCode,s=h.component.key[i],o=t.target;i==27?h.close(!0):o!=r||!s&&i!=13?e.contains(h.$root[0],o)&&i==13&&(t.preventDefault(),o.click()):(t.preventDefault(),s?n._.trigger(h.component.key.go,h,[s]):h.$root.find("."+f.highlighted).hasClass(f.disabled)||h.set("select",h.component.item.highlight).close())})),h.trigger("open"))},close:function(e){return e&&(l.off("focus.P"+u.id).focus(),setTimeout(function(){l.on("focus.P"+u.id,d)},0)),l.removeClass(f.active),h.$root.removeClass(f.opened+" "+f.focused),u.open&&(u.open=!1,t.off(".P"+u.id)),h.trigger("close")},clear:function(){return h.set("clear")},set:function(e,t,r){var i,s,o=n._.isObject(e),u=o?e:{};if(e){o||(u[e]=t);for(i in u)s=u[i],h.component.item[i]&&h.component.set(i,s,r||{}),(i=="select"||i=="clear")&&l.val(i=="clear"?"":n._.trigger(h.component.formats.toString,h.component,[a.format,h.component.get(i)])).trigger("change");h.render()}return h.trigger("set",u)},get:function(e,t){e=e||"value";if(u[e]!=null)return u[e];if(e=="value")return r.value;if(h.component.item[e])return typeof t=="string"?n._.trigger(h.component.formats.toString,h.component,[t,h.component.get(e)]):h.component.get(e)},on:function(e,t){var r,i,s=n._.isObject(e),o=s?e:{};if(e){s||(o[e]=t);for(r in o)i=o[r],u.methods[r]=u.methods[r]||[],u.methods[r].push(i)}return h},trigger:function(e,t){var r=u.methods[e];return r&&r.map(function(e){n._.trigger(e,h,[t])}),h}};return new c}var t=e(document);return n.klasses=function(e){return e=e||"picker",{picker:e,opened:e+"--opened",focused:e+"--focused",input:e+"__input",active:e+"__input--active",holder:e+"__holder",frame:e+"__frame",wrap:e+"__wrap",box:e+"__box"}},n._={group:function(e){var t,r="",i=n._.trigger(e.min,e);for(;i<=n._.trigger(e.max,e,[i]);i+=e.i)t=n._.trigger(e.item,e,[i]),r+=n._.node(e.node,t[0],t[1],t[2]);return r},node:function(t,n,r,i){return n?(n=e.isArray(n)?n.join(""):n,r=r?' class="'+r+'"':"",i=i?" "+i:"","<"+t+r+i+">"+n+"</"+t+">"):""},lead:function(e){return(e<10?"0":"")+e},trigger:function(e,t,n){return typeof e=="function"?e.apply(t,n||[]):e},digits:function(e){return/\d/.test(e[1])?2:1},isObject:function(e){return{}.toString.call(e).indexOf("Object")>-1},isDate:function(e){return{}.toString.call(e).indexOf("Date")>-1&&this.isInteger(e.getDate())},isInteger:function(e){return{}.toString.call(e).indexOf("Number")>-1&&e%1===0}},n.extend=function(t,r){e.fn[t]=function(i,s){var o=this.data(t);return i=="picker"?o:o&&typeof i=="string"?(n._.trigger(o[i],o,[s]),this):this.each(function(){var s=e(this);s.data(t)||new n(this,t,r,i)})},e.fn[t].defaults=r.defaults},n}),function(e){typeof n=="function"&&n.amd?n("picker.date",["picker"],e):e(Picker)}(function(e){function r(e,t){var n=this,r=e.$node[0].value,i=e.$node.data("value"),s=i||r,o=i?t.formatSubmit:t.format;n.settings=t,n.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"navigate create validate",view:"create validate viewset",disable:"flipItem",enable:"flipItem"},n.item={},n.item.disable=(t.disable||[]).slice(0),n.item.enable=-function(e){return e[0]===!0?e.shift():-1}(n.item.disable),n.set("min",t.min).set("max",t.max).set("now").set("select",s||n.item.now,{format:o,data:function(e){return s&&(e.indexOf("mm")>-1||e.indexOf("m")>-1)}(n.formats.toArray(o))}),n.key={40:7,38:-7,39:1,37:-1,go:function(e){n.set("highlight",[n.item.highlight.year,n.item.highlight.month,n.item.highlight.date+e],{interval:e}),this.render()}},e.on("render",function(){e.$root.find("."+t.klass.selectMonth).on("change",function(){e.set("highlight",[e.get("view").year,this.value,e.get("highlight").date]),e.$root.find("."+t.klass.selectMonth).focus()}),e.$root.find("."+t.klass.selectYear).on("change",function(){e.set("highlight",[this.value,e.get("view").month,e.get("highlight").date]),e.$root.find("."+t.klass.selectYear).focus()})}).on("open",function(){e.$root.find("button, select").attr("disabled",!1)}).on("close",function(){e.$root.find("button, select").attr("disabled",!0)})}var t=7,n=6;r.prototype.set=function(e,t,n){var r=this;return r.item[e=="enable"?"disable":e=="flip"?"enable":e]=r.queue[e].split(" ").map(function(i){return t=r[i](e,t,n)}).pop(),e=="select"?r.set("highlight",r.item.select,n):e=="highlight"?r.set("view",r.item.highlight,n):(e=="flip"||e=="min"||e=="max"||e=="disable"||e=="enable")&&r.item.select&&r.item.highlight&&r.set("select",r.item.select,n).set("highlight",r.item.highlight,n),r},r.prototype.get=function(e){return this.item[e]},r.prototype.create=function(t,n,r){var i,s=this;return n=n===undefined?t:n,n==-Infinity||n==Infinity?i=n:e._.isObject(n)&&e._.isInteger(n.pick)?n=n.obj:$.isArray(n)?(n=new Date(n[0],n[1],n[2]),n=e._.isDate(n)?n:s.create().obj):e._.isInteger(n)||e._.isDate(n)?n=s.normalize(new Date(n),r):n=s.now(t,n,r),{year:i||n.getFullYear(),month:i||n.getMonth(),date:i||n.getDate(),day:i||n.getDay(),obj:i||n,pick:i||n.getTime()}},r.prototype.now=function(e,t,n){return t=new Date,n&&n.rel&&t.setDate(t.getDate()+n.rel),this.normalize(t,n)},r.prototype.navigate=function(t,n,r){if(e._.isObject(n)){var i=new Date(n.year,n.month+(r&&r.nav?r.nav:0),1),s=i.getFullYear(),o=i.getMonth(),u=n.date;while(e._.isDate(i)&&(new Date(s,o,u)).getMonth()!==o)u-=1;n=[s,o,u]}return n},r.prototype.normalize=function(e){return e.setHours(0,0,0,0),e},r.prototype.measure=function(t,n){var r=this;return n?e._.isInteger(n)&&(n=r.now(t,n,{rel:n})):n=t=="min"?-Infinity:Infinity,n},r.prototype.viewset=function(e,t){return this.create([t.year,t.month,1])},r.prototype.validate=function(t,n,r){var i=this,s=n,o=r&&r.interval?r.interval:1,u=i.item.enable===-1,a,f,l=i.item.min,c=i.item.max,h,p,d=u&&i.item.disable.filter(function(t){if($.isArray(t)){var r=i.create(t).pick;r<n.pick?a=!0:r>n.pick&&(f=!0)}return e._.isInteger(t)}).length;if(!r.nav)if(!u&&i.disabled(n)||u&&i.disabled(n)&&(d||a||f)||n.pick<=l.pick||n.pick>=c.pick){u&&!d&&(!f&&o>0||!a&&o<0)&&(o*=-1);while(i.disabled(n)){Math.abs(o)>1&&(n.month<s.month||n.month>s.month)&&(n=s,o=Math.abs(o)/o),n.pick<=l.pick?(h=!0,o=1):n.pick>=c.pick&&(p=!0,o=-1);if(h&&p)break;n=i.create([n.year,n.month,n.date+o])}}return n},r.prototype.disabled=function(t){var n=this,r=n.item.disable.filter(function(r){if(e._.isInteger(r))return t.day===(n.settings.firstDay?r:r-1)%7;if($.isArray(r))return t.pick===n.create(r).pick}).length;return t.pick<n.item.min.pick||t.pick>n.item.max.pick||n.item.enable===-1?!r:r},r.prototype.parse=function(t,n,r){var i=this,s={};if(!n||e._.isInteger(n)||$.isArray(n)||e._.isDate(n)||e._.isObject(n)&&e._.isInteger(n.pick))return n;if(!r||!r.format)throw"Need a formatting option to parse this..";return i.formats.toArray(r.format).map(function(t){var r=i.formats[t],o=r?e._.trigger(r,i,[n,s]):t.replace(/^!/,"").length;r&&(s[t]=n.substr(0,o)),n=n.substr(o)}),[s.yyyy||s.yy,+(s.mm||s.m)-(r.data?1:0),s.dd||s.d]},r.prototype.formats=function(){function t(e,t,n){var r=e.match(/\w+/)[0];return!n.mm&&!n.m&&(n.m=t.indexOf(r)),r.length}function n(e){return e.match(/\w+/)[0].length}return{d:function(t,n){return t?e._.digits(t):n.date},dd:function(t,n){return t?2:e._.lead(n.date)},ddd:function(e,t){return e?n(e):this.settings.weekdaysShort[t.day]},dddd:function(e,t){return e?n(e):this.settings.weekdaysFull[t.day]},m:function(t,n){return t?e._.digits(t):n.month+1},mm:function(t,n){return t?2:e._.lead(n.month+1)},mmm:function(e,n){var r=this.settings.monthsShort;return e?t(e,r,n):r[n.month]},mmmm:function(e,n){var r=this.settings.monthsFull;return e?t(e,r,n):r[n.month]},yy:function(e,t){return e?2:(""+t.year).slice(2)},yyyy:function(e,t){return e?4:t.year},toArray:function(e){return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(t,n){var r=this;return r.formats.toArray(t).map(function(t){return e._.trigger(r.formats[t],r,[0,n])||t.replace(/^!/,"")}).join("")}}}(),r.prototype.flipItem=function(e,t){var n=this,r=n.item.disable,i=n.item.enable===-1;if(t=="flip")n.item.enable=i?1:-1;else if(!i&&e=="enable"||i&&e=="disable")r=n.removeDisabled(r,t);else if(!i&&e=="disable"||i&&e=="enable")r=n.addDisabled(r,t);return r},r.prototype.addDisabled=function(e,t){var n=this;return t.map(function(t){n.filterDisabled(e,t).length||e.push(t)}),e},r.prototype.removeDisabled=function(e,t){var n=this;return t.map(function(t){e=n.filterDisabled(e,t,1)}),e},r.prototype.filterDisabled=function(e,t,n){var r=$.isArray(t);return e.filter(function(e){var i=!r&&t===e||r&&$.isArray(e)&&t.toString()===e.toString();return n?!i:i})},r.prototype.nodes=function(r){var i=this,s=i.settings,o=i.item.now,u=i.item.select,a=i.item.highlight,f=i.item.view,l=i.item.disable,c=i.item.min,h=i.item.max,p=function(n){return s.firstDay&&n.push(n.shift()),e._.node("thead",e._.group({min:0,max:t-1,i:1,node:"th",item:function(e){return[n[e],s.klass.weekdays]}}))}((s.showWeekdaysFull?s.weekdaysFull:s.weekdaysShort).slice(0)),d=function(t){return e._.node("div"," ",s.klass["nav"+(t?"Next":"Prev")]+(t&&f.year>=h.year&&f.month>=h.month||!t&&f.year<=c.year&&f.month<=c.month?" "+s.klass.navDisabled:""),"data-nav="+(t||-1))},v=function(t){return s.selectMonths?e._.node("select",e._.group({min:0,max:11,i:1,node:"option",item:function(e){return[t[e],0,"value="+e+(f.month==e?" selected":"")+(f.year==c.year&&e<c.month||f.year==h.year&&e>h.month?" disabled":"")]}}),s.klass.selectMonth,r?"":"disabled"):e._.node("div",t[f.month],s.klass.month)},m=function(){var t=f.year,n=s.selectYears===!0?5:~~(s.selectYears/2);if(n){var i=c.year,o=h.year,u=t-n,a=t+n;i>u&&(a+=i-u,u=i);if(o<a){var l=u-i,p=a-o;u-=l>p?p:l,a=o}return e._.node("select",e._.group({min:u,max:a,i:1,node:"option",item:function(e){return[e,0,"value="+e+(t==e?" selected":"")]}}),s.klass.selectYear,r?"":"disabled")}return e._.node("div",t,s.klass.year)};return e._.node("div",d()+d(1)+v(s.showMonthsShort?s.monthsShort:s.monthsFull)+m(),s.klass.header)+e._.node("table",p+e._.node("tbody",e._.group({min:0,max:n-1,i:1,node:"tr",item:function(n){var r=s.firstDay&&i.create([f.year,f.month,1]).day===0?-7:0;return[e._.group({min:t*n-f.day+r+1,max:function(){return this.min+t-1},i:1,node:"td",item:function(t){return t=i.create([f.year,f.month,t+(s.firstDay?1:0)]),[e._.node("div",t.date,function(e){return e.push(f.month==t.month?s.klass.infocus:s.klass.outfocus),o.pick==t.pick&&e.push(s.klass.now),u&&u.pick==t.pick&&e.push(s.klass.selected),a&&a.pick==t.pick&&e.push(s.klass.highlighted),(l&&i.disabled(t)||t.pick<c.pick||t.pick>h.pick)&&e.push(s.klass.disabled),e.join(" ")}([s.klass.day]),"data-pick="+t.pick)]}})]}})),s.klass.table)+e._.node("div",e._.node("button",s.today,s.klass.buttonToday,"data-pick="+o.pick+(r?"":" disabled"))+e._.node("button",s.clear,s.klass.buttonClear,"data-clear=1"+(r?"":" disabled")),s.klass.footer)},r.defaults=function(e){return{monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],today:"Today",clear:"Clear",format:"d mmmm, yyyy",klass:{table:e+"table",header:e+"header",navPrev:e+"nav--prev",navNext:e+"nav--next",navDisabled:e+"nav--disabled",month:e+"month",year:e+"year",selectMonth:e+"select--month",selectYear:e+"select--year",weekdays:e+"weekday",day:e+"day",disabled:e+"day--disabled",selected:e+"day--selected",highlighted:e+"day--highlighted",now:e+"day--today",infocus:e+"day--infocus",outfocus:e+"day--outfocus",footer:e+"footer",buttonClear:e+"button--clear",buttonToday:e+"button--today"}}}(e.klasses().picker+"__"),e.extend("pickadate",r)}),function(e){typeof n=="function"&&n.amd?n("picker.time",["picker"],e):e(Picker)}(function(e){function s(e,t){var n=this,r=e.$node.data("value");n.settings=t,n.queue={interval:"i",min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"create validate",view:"create validate",disable:"flipItem",enable:"flipItem"},n.item={},n.item.interval=t.interval||30,n.item.disable=(t.disable||[]).slice(0),n.item.enable=-function(e){return e[0]===!0?e.shift():-1}(n.item.disable),n.set("min",t.min).set("max",t.max).set("now").set("select",r||e.$node[0].value||n.item.min,{format:r?t.formatSubmit:t.format}),n.key={40:1,38:-1,39:1,37:-1,go:function(e){n.set("highlight",n.item.highlight.pick+e*n.item.interval,{interval:e*n.item.interval}),this.render()}},e.on("render",function(){var r=e.$root.children(),i=r.find("."+t.klass.viewset);i.length?r[0].scrollTop=~~(i.position().top-i[0].clientHeight*2):console.warn("Nothing to viewset with",n.item.view)}).on("open",function(){e.$root.find("button").attr("disable",!1)}).on("close",function(){e.$root.find("button").attr("disable",!0)})}var t=24,n=60,r=12,i=t*n;s.prototype.set=function(e,t,n){var r=this;return r.item[e=="enable"?"disable":e=="flip"?"enable":e]=r.queue[e].split(" ").map(function(i){return t=r[i](e,t,n)}).pop(),e=="select"?r.set("highlight",r.item.select,n):e=="highlight"?r.set("view",r.item.highlight,n):e=="interval"?r.set("min",r.item.min,n).set("max",r.item.max,n):(e=="flip"||e=="min"||e=="max"||e=="disable"||e=="enable")&&r.item.select&&r.item.highlight&&(e=="min"&&r.set("max",r.item.max,n),r.set("select",r.item.select,n).set("highlight",r.item.highlight,n)),r},s.prototype.get=function(e){return this.item[e]},s.prototype.create=function(r,s,o){var u=this;return s=s===undefined?r:s,e._.isObject(s)&&e._.isInteger(s.pick)?s=s.pick:$.isArray(s)?s=+s[0]*n+ +s[1]:e._.isInteger(s)||(s=u.now(r,s,o)),r=="max"&&s<u.item.min.pick&&(s+=i),s=u.normalize(s,o),{hour:~~(t+s/n)%t,mins:(n+s%n)%n,time:(i+s)%i,pick:s}},s.prototype.now=function(t,r){var i=new Date,s=i.getHours()*n+i.getMinutes();return e._.isInteger(r)?r+=t=="min"&&r<0&&s===0?2:1:r=1,r*this.item.interval+s},s.prototype.normalize=function(e){return e-((e<0?this.item.interval:0)+e%this.item.interval)},s.prototype.measure=function(r,i,s){var o=this;return i?i===!0||e._.isInteger(i)?i=o.now(r,i,s):e._.isObject(i)&&e._.isInteger(i.pick)&&(i=o.normalize(i.pick,s)):i=r=="min"?[0,0]:[t-1,n-1],i},s.prototype.validate=function(e,t,n){var r=this,i=n&&n.interval?n.interval:r.item.interval;return r.disabled(t)&&(t=r.shift(t,i)),t=r.scope(t),r.disabled(t)&&(t=r.shift(t,i*-1)),t},s.prototype.disabled=function(t){var n=this,r=n.item.disable.filter(function(r){if(e._.isInteger(r))return t.hour==r;if($.isArray(r))return t.pick==n.create(r).pick}).length;return n.item.enable===-1?!r:r},s.prototype.shift=function(e,t){var n=this;while(n.disabled(e)){e=n.create(e.pick+=t||n.item.interval);if(e.pick<=n.item.min.pick||e.pick>=n.item.max.pick)break}return e},s.prototype.scope=function(e){var t=this.item.min.pick,n=this.item.max.pick;return this.create(e.pick>n?n:e.pick<t?t:e)},s.prototype.parse=function(t,r,i){var s=this,o={};if(!r||e._.isInteger(r)||$.isArray(r)||e._.isDate(r)||e._.isObject(r)&&e._.isInteger(r.pick))return r;if(!i||!i.format)throw"Need a formatting option to parse this..";return s.formats.toArray(i.format).map(function(t){var n=s.formats[t],i=n?e._.trigger(n,s,[r,o]):t.replace(/^!/,"").length;n&&(o[t]=r.substr(0,i)),r=r.substr(i)}),+o.i+n*(+(o.H||o.HH)||+(o.h||o.hh)%12+(/^p/i.test(o.A||o.a)?12:0))},s.prototype.formats={h:function(t,n){return t?e._.digits(t):n.hour%r||r},hh:function(t,n){return t?2:e._.lead(n.hour%r||r)},H:function(t,n){return t?e._.digits(t):""+n.hour%24},HH:function(t,n){return t?e._.digits(t):e._.lead(n.hour%24)},i:function(t,n){return t?2:e._.lead(n.mins)},a:function(e,t){return e?4:i/2>t.time%i?"a.m.":"p.m."},A:function(e,t){return e?2:i/2>t.time%i?"AM":"PM"},toArray:function(e){return e.split(/(h{1,2}|H{1,2}|i|a|A|!.)/g)},toString:function(t,n){var r=this;return r.formats.toArray(t).map(function(t){return e._.trigger(r.formats[t],r,[0,n])||t.replace(/^!/,"")}).join("")}},s.prototype.flipItem=function(e,t){var n=this,r=n.item.disable,i=n.item.enable===-1;if(t=="flip")n.item.enable=i?1:-1;else if(!i&&e=="enable"||i&&e=="disable")r=n.removeDisabled(r,t);else if(!i&&e=="disable"||i&&e=="enable")r=n.addDisabled(r,t);return r},s.prototype.addDisabled=function(e,t){var n=this;return t.map(function(t){n.filterDisabled(e,t).length||e.push(t)}),e},s.prototype.removeDisabled=function(e,t){var n=this;return t.map(function(t){e=n.filterDisabled(e,t,1)}),e},s.prototype.filterDisabled=function(e,t,n){var r=$.isArray(t);return e.filter(function(e){var i=!r&&t===e||r&&$.isArray(e)&&t.toString()===e.toString();return n?!i:i})},s.prototype.i=function(t,n){return e._.isInteger(n)&&n>0?n:this.item.interval},s.prototype.nodes=function(t){var n=this,r=n.settings,i=n.item.select,s=n.item.highlight,o=n.item.view,u=n.item.disable;return e._.node("ul",e._.group({min:n.item.min.pick,max:n.item.max.pick,i:n.item.interval,node:"li",item:function(t){return t=n.create(t),[e._.trigger(n.formats.toString,n,[e._.trigger(r.formatLabel,n,[t])||r.format,t]),function(e,a){return i&&i.pick==a&&e.push(r.klass.selected),s&&s.pick==a&&e.push(r.klass.highlighted),o&&o.pick==a&&e.push(r.klass.viewset),u&&n.disabled(t)&&e.push(r.klass.disabled),e.join(" ")}([r.klass.listItem],t.pick),"data-pick="+t.pick]}})+e._.node("li",e._.node("button",r.clear,r.klass.buttonClear,"data-clear=1"+(t?"":" disable"))),r.klass.list)},s.defaults=function(e){return{clear:"Clear",format:"h:i A",interval:30,klass:{picker:e+" "+e+"--time",holder:e+"__holder",list:e+"__list",listItem:e+"__list-item",disabled:e+"__list-item--disabled",selected:e+"__list-item--selected",highlighted:e+"__list-item--highlighted",viewset:e+"__list-item--viewset",now:e+"__list-item--now",buttonClear:e+"__button--clear"}}}(e.klasses().picker),e.extend("pickatime",s)}),n("mockup-patterns-pickadate",["jquery","mockup-patterns-base","picker","picker.date","picker.time"],function(e,t){var n=t.extend({name:"pickadate",defaults:{separator:" ",date:{selectYears:!0,selectMonths:!0},time:{},classWrapperName:"pattern-pickadate-wrapper",classSeparatorName:"pattern-pickadate-separator",classDateName:"pattern-pickadate-date",classDateWrapperName:"pattern-pickadate-date-wrapper",classTimeName:"pattern-pickadate-time",classTimeWrapperName:"pattern-pickadate-time-wrapper",classClearName:"pattern-pickadate-clear",placeholderDate:"Enter date...",placeholderTime:"Enter time..."},isFalse:function(e){return typeof e=="string"&&e==="false"?!1:e},init:function(){var t=this,n=t.$el.val().split(" "),r=n[0]||"",i=n[1]||"";t.options.date=t.isFalse(t.options.date),t.options.time=t.isFalse(t.options.time),t.options.date===!1&&(i=n[0]),t.$el.hide(),t.$wrapper=e("<div/>").addClass(t.options.classWrapperName).insertAfter(t.$el),t.options.date!==!1&&(t.options.date.formatSubmit="yyyy-mm-dd",t.$date=e('<input type="text"/>').attr("placeholder",t.options.placeholderDate).attr("data-value",r).addClass(t.options.classDateName).appendTo(e("<div/>").addClass(t.options.classDateWrapperName).appendTo(t.$wrapper)).pickadate(e.extend(!0,{},t.options.date,{onSet:function(e){e.select!==undefined&&(t.$date.attr("data-value",e.select),(t.options.time===!1||t.$time.attr("data-value")!=="")&&t.updateValue.call(t)),e.hasOwnProperty("clear")&&(t.$el.removeAttr("value"),t.$date.attr("data-value",""))}}))),t.options.date!==!1&&t.options.time!==!1&&(t.$separator=e("<span/>").addClass(t.options.classSeparatorName).html(t.options.separator===" "?"&nbsp;":t.options.separator).appendTo(t.$wrapper)),t.options.time!==!1&&(t.options.time.formatSubmit="HH:i",t.$time=e('<input type="text"/>').attr("placeholder",t.options.placeholderTime).attr("data-value",i).addClass(t.options.classTimeName).appendTo(e("<div/>").addClass(t.options.classTimeWrapperName).appendTo(t.$wrapper)).pickatime(e.extend(!0,{},t.options.time,{onSet:function(e){e.select!==undefined&&(t.$time.attr("data-value",e.select),(t.options.date===!1||t.$date.attr("data-value")!=="")&&t.updateValue.call(t)),e.hasOwnProperty("clear")&&(t.$el.removeAttr("value"),t.$time.attr("data-value",""))}})),typeof i=="string"&&i.substring(0,2)==="00"&&(t.$time.pickatime("picker").set("select",i.split(":")),t.$time.attr("data-value",i))),t.$clear=e("<div/>").addClass(t.options.classClearName).appendTo(t.$wrapper)},updateValue:function(){var e=this,t="";if(e.options.date!==!1){var n=e.$date.data("pickadate").component,r=e.$date.data("pickadate").get("select"),i=n.formats.toString;t+=i.apply(n,["yyyy-mm-dd",r])}e.options.date!==!1&&e.options.time!==!1&&(t+=" ");if(e.options.time!==!1){var s=e.$time.data("pickatime").component,o=e.$time.data("pickatime").get("select"),u=s.formats.toString;t+=u.apply(s,["HH:i",o])}e.$el.attr("value",t),e.trigger("updated")}});return n}),function(){var e=this,t=e._,n={},r=Array.prototype,i=Object.prototype,s=Function.prototype,o=r.push,u=r.slice,a=r.concat,f=i.toString,l=i.hasOwnProperty,c=r.forEach,h=r.map,p=r.reduce,d=r.reduceRight,v=r.filter,m=r.every,g=r.some,y=r.indexOf,b=r.lastIndexOf,w=Array.isArray,E=Object.keys,S=s.bind,x=function(e){if(e instanceof x)return e;if(!(this instanceof x))return new x(e);this._wrapped=e};typeof exports!="undefined"?(typeof module!="undefined"&&module.exports&&(exports=module.exports=x),exports._=x):e._=x,x.VERSION="1.5.1";var T=x.each=x.forEach=function(e,t,r){if(e==null)return;if(c&&e.forEach===c)e.forEach(t,r);else if(e.length===+e.length){for(var i=0,s=e.length;i<s;i++)if(t.call(r,e[i],i,e)===n)return}else for(var o in e)if(x.has(e,o)&&t.call(r,e[o],o,e)===n)return};x.map=x.collect=function(e,t,n){var r=[];return e==null?r:h&&e.map===h?e.map(t,n):(T(e,function(e,i,s){r.push(t.call(n,e,i,s))}),r)};var N="Reduce of empty array with no initial value";x.reduce=x.foldl=x.inject=function(e,t,n,r){var i=arguments.length>2;e==null&&(e=[]);if(p&&e.reduce===p)return r&&(t=x.bind(t,r)),i?e.reduce(t,n):e.reduce(t);T(e,function(e,s,o){i?n=t.call(r,n,e,s,o):(n=e,i=!0)});if(!i)throw new TypeError(N);return n},x.reduceRight=x.foldr=function(e,t,n,r){var i=arguments.length>2;e==null&&(e=[]);if(d&&e.reduceRight===d)return r&&(t=x.bind(t,r)),i?e.reduceRight(t,n):e.reduceRight(t);var s=e.length;if(s!==+s){var o=x.keys(e);s=o.length}T(e,function(u,a,f){a=o?o[--s]:--s,i?n=t.call(r,n,e[a],a,f):(n=e[a],i=!0)});if(!i)throw new TypeError(N);return n},x.find=x.detect=function(e,t,n){var r;return C(e,function(e,i,s){if(t.call(n,e,i,s))return r=e,!0}),r},x.filter=x.select=function(e,t,n){var r=[];return e==null?r:v&&e.filter===v?e.filter(t,n):(T(e,function(e,i,s){t.call(n,e,i,s)&&r.push(e)}),r)},x.reject=function(e,t,n){return x.filter(e,function(e,r,i){return!t.call(n,e,r,i)},n)},x.every=x.all=function(e,t,r){t||(t=x.identity);var i=!0;return e==null?i:m&&e.every===m?e.every(t,r):(T(e,function(e,s,o){if(!(i=i&&t.call(r,e,s,o)))return n}),!!i)};var C=x.some=x.any=function(e,t,r){t||(t=x.identity);var i=!1;return e==null?i:g&&e.some===g?e.some(t,r):(T(e,function(e,s,o){if(i||(i=t.call(r,e,s,o)))return n}),!!i)};x.contains=x.include=function(e,t){return e==null?!1:y&&e.indexOf===y?e.indexOf(t)!=-1:C(e,function(e){return e===t})},x.invoke=function(e,t){var n=u.call(arguments,2),r=x.isFunction(t);return x.map(e,function(e){return(r?t:e[t]).apply(e,n)})},x.pluck=function(e,t){return x.map(e,function(e){return e[t]})},x.where=function(e,t,n){return x.isEmpty(t)?n?void 0:[]:x[n?"find":"filter"](e,function(e){for(var n in t)if(t[n]!==e[n])return!1;return!0})},x.findWhere=function(e,t){return x.where(e,t,!0)},x.max=function(e,t,n){if(!t&&x.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);if(!t&&x.isEmpty(e))return-Infinity;var r={computed:-Infinity,value:-Infinity};return T(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;o>r.computed&&(r={value:e,computed:o})}),r.value},x.min=function(e,t,n){if(!t&&x.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.min.apply(Math,e);if(!t&&x.isEmpty(e))return Infinity;var r={computed:Infinity,value:Infinity};return T(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;o<r.computed&&(r={value:e,computed:o})}),r.value},x.shuffle=function(e){var t,n=0,r=[];return T(e,function(e){t=x.random(n++),r[n-1]=r[t],r[t]=e}),r};var k=function(e){return x.isFunction(e)?e:function(t){return t[e]}};x.sortBy=function(e,t,n){var r=k(t);return x.pluck(x.map(e,function(e,t,i){return{value:e,index:t,criteria:r.call(n,e,t,i)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||n===void 0)return 1;if(n<r||r===void 0)return-1}return e.index<t.index?-1:1}),"value")};var L=function(e,t,n,r){var i={},s=k(t==null?x.identity:t);return T(e,function(t,o){var u=s.call(n,t,o,e);r(i,u,t)}),i};x.groupBy=function(e,t,n){return L(e,t,n,function(e,t,n){(x.has(e,t)?e[t]:e[t]=[]).push(n)})},x.countBy=function(e,t,n){return L(e,t,n,function(e,t){x.has(e,t)||(e[t]=0),e[t]++})},x.sortedIndex=function(e,t,n,r){n=n==null?x.identity:k(n);var i=n.call(r,t),s=0,o=e.length;while(s<o){var u=s+o>>>1;n.call(r,e[u])<i?s=u+1:o=u}return s},x.toArray=function(e){return e?x.isArray(e)?u.call(e):e.length===+e.length?x.map(e,x.identity):x.values(e):[]},x.size=function(e){return e==null?0:e.length===+e.length?e.length:x.keys(e).length},x.first=x.head=x.take=function(e,t,n){return e==null?void 0:t!=null&&!n?u.call(e,0,t):e[0]},x.initial=function(e,t,n){return u.call(e,0,e.length-(t==null||n?1:t))},x.last=function(e,t,n){return e==null?void 0:t!=null&&!n?u.call(e,Math.max(e.length-t,0)):e[e.length-1]},x.rest=x.tail=x.drop=function(e,t,n){return u.call(e,t==null||n?1:t)},x.compact=function(e){return x.filter(e,x.identity)};var A=function(e,t,n){return t&&x.every(e,x.isArray)?a.apply(n,e):(T(e,function(e){x.isArray(e)||x.isArguments(e)?t?o.apply(n,e):A(e,t,n):n.push(e)}),n)};x.flatten=function(e,t){return A(e,t,[])},x.without=function(e){return x.difference(e,u.call(arguments,1))},x.uniq=x.unique=function(e,t,n,r){x.isFunction(t)&&(r=n,n=t,t=!1);var i=n?x.map(e,n,r):e,s=[],o=[];return T(i,function(n,r){if(t?!r||o[o.length-1]!==n:!x.contains(o,n))o.push(n),s.push(e[r])}),s},x.union=function(){return x.uniq(x.flatten(arguments,!0))},x.intersection=function(e){var t=u.call(arguments,1);return x.filter(x.uniq(e),function(e){return x.every(t,function(t){return x.indexOf(t,e)>=0})})},x.difference=function(e){var t=a.apply(r,u.call(arguments,1));return x.filter(e,function(e){return!x.contains(t,e)})},x.zip=function(){var e=x.max(x.pluck(arguments,"length").concat(0)),t=new Array(e);for(var n=0;n<e;n++)t[n]=x.pluck(arguments,""+n);return t},x.object=function(e,t){if(e==null)return{};var n={};for(var r=0,i=e.length;r<i;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},x.indexOf=function(e,t,n){if(e==null)return-1;var r=0,i=e.length;if(n){if(typeof n!="number")return r=x.sortedIndex(e,t),e[r]===t?r:-1;r=n<0?Math.max(0,i+n):n}if(y&&e.indexOf===y)return e.indexOf(t,n);for(;r<i;r++)if(e[r]===t)return r;return-1},x.lastIndexOf=function(e,t,n){if(e==null)return-1;var r=n!=null;if(b&&e.lastIndexOf===b)return r?e.lastIndexOf(t,n):e.lastIndexOf(t);var i=r?n:e.length;while(i--)if(e[i]===t)return i;return-1},x.range=function(e,t,n){arguments.length<=1&&(t=e||0,e=0),n=arguments[2]||1;var r=Math.max(Math.ceil((t-e)/n),0),i=0,s=new Array(r);while(i<r)s[i++]=e,e+=n;return s};var O=function(){};x.bind=function(e,t){var n,r;if(S&&e.bind===S)return S.apply(e,u.call(arguments,1));if(!x.isFunction(e))throw new TypeError;return n=u.call(arguments,2),r=function(){if(this instanceof r){O.prototype=e.prototype;var i=new O;O.prototype=null;var s=e.apply(i,n.concat(u.call(arguments)));return Object(s)===s?s:i}return e.apply(t,n.concat(u.call(arguments)))}},x.partial=function(e){var t=u.call(arguments,1);return function(){return e.apply(this,t.concat(u.call(arguments)))}},x.bindAll=function(e){var t=u.call(arguments,1);if(t.length===0)throw new Error("bindAll must be passed function names");return T(t,function(t){e[t]=x.bind(e[t],e)}),e},x.memoize=function(e,t){var n={};return t||(t=x.identity),function(){var r=t.apply(this,arguments);return x.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}},x.delay=function(e,t){var n=u.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},x.defer=function(e){return x.delay.apply(x,[e,1].concat(u.call(arguments,1)))},x.throttle=function(e,t,n){var r,i,s,o=null,u=0;n||(n={});var a=function(){u=n.leading===!1?0:new Date,o=null,s=e.apply(r,i)};return function(){var f=new Date;!u&&n.leading===!1&&(u=f);var l=t-(f-u);return r=this,i=arguments,l<=0?(clearTimeout(o),o=null,u=f,s=e.apply(r,i)):!o&&n.trailing!==!1&&(o=setTimeout(a,l)),s}},x.debounce=function(e,t,n){var r,i=null;return function(){var s=this,o=arguments,u=function(){i=null,n||(r=e.apply(s,o))},a=n&&!i;return clearTimeout(i),i=setTimeout(u,t),a&&(r=e.apply(s,o)),r}},x.once=function(e){var t=!1,n;return function(){return t?n:(t=!0,n=e.apply(this,arguments),e=null,n)}},x.wrap=function(e,t){return function(){var n=[e];return o.apply(n,arguments),t.apply(this,n)}},x.compose=function(){var e=arguments;return function(){var t=arguments;for(var n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},x.after=function(e,t){return function(){if(--e<1)return t.apply(this,arguments)}},x.keys=E||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)x.has(e,n)&&t.push(n);return t},x.values=function(e){var t=[];for(var n in e)x.has(e,n)&&t.push(e[n]);return t},x.pairs=function(e){var t=[];for(var n in e)x.has(e,n)&&t.push([n,e[n]]);return t},x.invert=function(e){var t={};for(var n in e)x.has(e,n)&&(t[e[n]]=n);return t},x.functions=x.methods=function(e){var t=[];for(var n in e)x.isFunction(e[n])&&t.push(n);return t.sort()},x.extend=function(e){return T(u.call(arguments,1),function(t){if(t)for(var n in t)e[n]=t[n]}),e},x.pick=function(e){var t={},n=a.apply(r,u.call(arguments,1));return T(n,function(n){n in e&&(t[n]=e[n])}),t},x.omit=function(e){var t={},n=a.apply(r,u.call(arguments,1));for(var i in e)x.contains(n,i)||(t[i]=e[i]);return t},x.defaults=function(e){return T(u.call(arguments,1),function(t){if(t)for(var n in t)e[n]===void 0&&(e[n]=t[n])}),e},x.clone=function(e){return x.isObject(e)?x.isArray(e)?e.slice():x.extend({},e):e},x.tap=function(e,t){return t(e),e};var M=function(e,t,n,r){if(e===t)return e!==0||1/e==1/t;if(e==null||t==null)return e===t;e instanceof x&&(e=e._wrapped),t instanceof x&&(t=t._wrapped);var i=f.call(e);if(i!=f.call(t))return!1;switch(i){case"[object String]":return e==String(t);case"[object Number]":return e!=+e?t!=+t:e==0?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if(typeof e!="object"||typeof t!="object")return!1;var s=n.length;while(s--)if(n[s]==e)return r[s]==t;var o=e.constructor,u=t.constructor;if(o!==u&&!(x.isFunction(o)&&o instanceof o&&x.isFunction(u)&&u instanceof u))return!1;n.push(e),r.push(t);var a=0,l=!0;if(i=="[object Array]"){a=e.length,l=a==t.length;if(l)while(a--)if(!(l=M(e[a],t[a],n,r)))break}else{for(var c in e)if(x.has(e,c)){a++;if(!(l=x.has(t,c)&&M(e[c],t[c],n,r)))break}if(l){for(c in t)if(x.has(t,c)&&!(a--))break;l=!a}}return n.pop(),r.pop(),l};x.isEqual=function(e,t){return M(e,t,[],[])},x.isEmpty=function(e){if(e==null)return!0;if(x.isArray(e)||x.isString(e))return e.length===0;for(var t in e)if(x.has(e,t))return!1;return!0},x.isElement=function(e){return!!e&&e.nodeType===1},x.isArray=w||function(e){return f.call(e)=="[object Array]"},x.isObject=function(e){return e===Object(e)},T(["Arguments","Function","String","Number","Date","RegExp"],function(e){x["is"+e]=function(t){return f.call(t)=="[object "+e+"]"}}),x.isArguments(arguments)||(x.isArguments=function(e){return!!e&&!!x.has(e,"callee")}),typeof /./!="function"&&(x.isFunction=function(e){return typeof e=="function"}),x.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},x.isNaN=function(e){return x.isNumber(e)&&e!=+e},x.isBoolean=function(e){return e===!0||e===!1||f.call(e)=="[object Boolean]"},x.isNull=function(e){return e===null},x.isUndefined=function(e){return e===void 0},x.has=function(e,t){return l.call(e,t)},x.noConflict=function(){return e._=t,this},x.identity=function(e){return e},x.times=function(e,t,n){var r=Array(Math.max(0,e));for(var i=0;i<e;i++)r[i]=t.call(n,i);return r},x.random=function(e,t){return t==null&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))};var _={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};_.unescape=x.invert(_.escape);var D={escape:new RegExp("["+x.keys(_.escape).join("")+"]","g"),unescape:new RegExp("("+x.keys(_.unescape).join("|")+")","g")};x.each(["escape","unescape"],function(e){x[e]=function(t){return t==null?"":(""+t).replace(D[e],function(t){return _[e][t]})}}),x.result=function(e,t){if(e==null)return void 0;var n=e[t];return x.isFunction(n)?n.call(e):n},x.mixin=function(e){T(x.functions(e),function(t){var n=x[t]=e[t];x.prototype[t]=function(){var e=[this._wrapped];return o.apply(e,arguments),F.call(this,n.apply(x,e))}})};var P=0;x.uniqueId=function(e){var t=++P+"";return e?e+t:t},x.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var H=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},j=/\\|'|\r|\n|\t|\u2028|\u2029/g;x.template=function(e,t,n){var r;n=x.defaults({},n,x.templateSettings);var i=new RegExp([(n.escape||H).source,(n.interpolate||H).source,(n.evaluate||H).source].join("|")+"|$","g"),s=0,o="__p+='";e.replace(i,function(t,n,r,i,u){return o+=e.slice(s,u).replace(j,function(e){return"\\"+B[e]}),n&&(o+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),r&&(o+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),i&&(o+="';\n"+i+"\n__p+='"),s=u+t.length,t}),o+="';\n",n.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{r=new Function(n.variable||"obj","_",o)}catch(u){throw u.source=o,u}if(t)return r(t,x);var a=function(e){return r.call(this,e,x)};return a.source="function("+(n.variable||"obj")+"){\n"+o+"}",a},x.chain=function(e){return x(e).chain()};var F=function(e){return this._chain?x(e).chain():e};x.mixin(x),T(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];x.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),(e=="shift"||e=="splice")&&n.length===0&&delete n[0],F.call(this,n)}}),T(["concat","join","slice"],function(e){var t=r[e];x.prototype[e]=function(){return F.call(this,t.apply(this._wrapped,arguments))}}),x.extend(x.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}.call(this),n("underscore",function(e){return function(){var t,n;return t||e.window._}}(this)),n("mockup-patterns-queryhelper",["jquery","mockup-patterns-base"],function(e,t){var n=t.extend({name:"queryhelper",defaults:{basePattern:null,vocabularyUrl:null,searchParam:"SearchableText",attributes:["UID","Title","Description","getURL","Type"],batchSize:10,baseCriteria:[],pathDepth:1},init:function(){var e=this;e.basePattern=e.options.basePattern,e.basePattern===undefined&&(e.basePattern={browsing:!1,basePath:"/"}),e.options.url&&!e.options.vocabularyUrl&&(e.options.vocabularyUrl=e.options.url),e.options.vocabularyUrl!==undefined&&e.options.vocabularyUrl!==null?e.valid=!0:e.valid=!1},getCurrentPath:function(){var e=this,t=e.basePattern,n;e.currentPath?n=e.currentPath:n=t.currentPath,typeof n=="function"&&(n=n());var r=n;return r||(t.options.basePath?r=t.options.basePath:r="/"),r},getCriterias:function(t,n){n===undefined&&(n={}),n=e.extend({},{useBaseCriteria:!0,additionalCriterias:[]},n);var r=this,i=[];n.useBaseCriteria&&(i=r.options.baseCriteria.slice(0)),t&&(t+="*",i.push({i:r.options.searchParam,o:"plone.app.querystring.operation.string.contains",v:t}));var s=r.basePattern;return s.browsing&&i.push({i:"path",o:"plone.app.querystring.operation.string.path",v:r.getCurrentPath()+"::"+r.options.pathDepth}),i=i.concat(n.additionalCriterias),i},getBatch:function(e){e||(e=1);var t=this;return{page:e,size:t.options.batchSize}},selectAjax:function(){var e=this;return{url:e.options.vocabularyUrl,dataType:"JSON",quietMillis:100,data:function(t,n){var r={query:JSON.stringify({criteria:e.getCriterias(t)}),batch:JSON.stringify(e.getBatch(n)),attributes:JSON.stringify(e.options.attributes)};return r},results:function(e,t){var n=t*10<e.total;return{results:e.results,more:n}}}},search:function(t,n,r,i,s){s===undefined&&(s=!0);var o=this,u=[];s&&(u=o.options.baseCriteria.slice(0)),u.push({i:t,o:n,v:r});var a={query:JSON.stringify({criteria:u}),attributes:JSON.stringify(o.options.attributes)};e.ajax({url:o.options.vocabularyUrl,dataType:"JSON",data:a,success:i})}});return n}),n("mockup-patterns-relateditems",["jquery","underscore","mockup-patterns-base","mockup-patterns-select2","mockup-patterns-queryhelper"],function(e,t,n,r,i){var s=n.extend({name:"relateditems",browsing:!1,currentPath:null,defaults:{vocabularyUrl:null,width:"300px",multiple:!0,tokenSeparators:[","," "],separator:",",orderable:!0,cache:!0,closeOnSelect:!1,basePath:"/",searchText:"Search:",searchAllText:"entire site",homeText:"home",folderTypes:["Folder"],selectableTypes:null,attributes:["UID","Title","Type","path"],dropdownCssClass:"pattern-relateditems-dropdown",maximumSelectionSize:-1,resultTemplate:'<div class="pattern-relateditems-result pattern-relateditems-type-<%= Type %> <% if (selected) { %>pattern-relateditems-active<% } %>">  <a href="#" class="pattern-relateditems-result-select <% if (selectable) { %>selectable<% } %>">    <span class="pattern-relateditems-result-title"><%= Title %></span>    <span class="pattern-relateditems-result-path"><%= path %></span>  </a>  <span class="pattern-relateditems-buttons">  <% if (folderish) { %>     <a class="pattern-relateditems-result-browse" href="#" data-path="<%= path %>"></a>   <% } %> </span></div>',resultTemplateSelector:null,selectionTemplate:'<span class="pattern-relateditems-item pattern-relateditems-type-<%= Type %>"> <span class="pattern-relateditems-item-title"><%= Title %></span> <span class="pattern-relateditems-item-path"><%= path %></span></span>',selectionTemplateSelector:null,breadCrumbsTemplate:'<span><span class="pattern-relateditems-path-label"><%= searchText %></span><a class="icon-home" href="/"></a><%= items %></span>',breadCrumbsTemplateSelector:null,breadCrumbTemplate:'/<a href="<%= path %>"><%= text %></a>',breadCrumbTemplateSelector:null,escapeMarkup:function(e){return e},setupAjax:function(){var t=this;return t.query=new i(t.$el,e.extend(!0,{},t.options,{basePattern:t})),t.query.valid?t.query.selectAjax():{}}},applyTemplate:function(n,r){var i=this,s;i.options[n+"TemplateSelector"]?(s=e(i.options[n+"TemplateSelector"]).html(),s||(s=i.options[n+"Template"])):s=i.options[n+"Template"];var o=e.extend(!0,{},i.options,r);return o._item=r,t.template(s,o)},activateBrowsing:function(){var e=this;e.browsing=!0,e.setBreadCrumbs()},deactivateBrowsing:function(){var e=this;e.browsing=!1,e.setBreadCrumbs()},browseTo:function(e){var t=this;t.trigger("before-browse"),t.currentPath=e,e==="/"?t.deactivateBrowsing():t.activateBrowsing(),t.$el.select2("close"),t.$el.select2("open"),t.trigger("after-browse")},setBreadCrumbs:function(){var n=this,r=n.currentPath?n.currentPath:n.options.basePath,i;if(r==="/")i=n.applyTemplate("breadCrumbs",{items:"<em>"+n.options.searchAllText+"</em>",searchText:n.options.searchText});else{var s=r.split("/"),o="",u="";t.each(s,function(e){if(e!==""){var t={};o=o+"/"+e,t.text=e,t.path=o,u+=n.applyTemplate("breadCrumb",t)}}),i=n.applyTemplate("breadCrumbs",{items:u,searchText:n.options.searchText})}var a=e(i);e("a",a).on("click",function(t){return n.browseTo(e(this).attr("href")),!1}),n.$browsePath.html(a)},selectItem:function(e){var t=this;t.trigger("selecting");var n=t.$el.select2("data");n.push(e),t.$el.select2("data",n),e.selected=!0,t.trigger("selected")},deselectItem:function(e){var n=this;n.trigger("deselecting");var r=n.$el.select2("data");t.each(r,function(t,n){t.UID===e.UID&&r.splice(n,1)}),n.$el.select2("data",r),e.selected=!1,n.trigger("deselected")},isSelectable:function(e){var n=this;return n.options.selectableTypes===null?!0:t.indexOf(n.options.selectableTypes,e.Type)>-1},init:function(){var n=this;n.options.ajax=n.options.setupAjax.apply(n),n.$el.wrap('<div class="pattern-relateditems-container" />'),n.$container=n.$el.parents(".pattern-relateditems-container"),n.$container.width(n.options.width),r.prototype.initializeValues.call(n),r.prototype.initializeTags.call(n),n.options.formatSelection=function(e,t){return n.applyTemplate("selection",e)},r.prototype.initializeOrdering.call(n),n.options.formatResult=function(r){!r.Type||t.indexOf(n.options.folderTypes,r.Type)===-1?r.folderish=!1:r.folderish=!0,r.selectable=n.isSelectable(r);if(r.selected===undefined){var i=n.$el.select2("data");r.selected=!1,t.each(i,function(e){e.UID===r.UID&&(r.selected=!0)})}var s=e(n.applyTemplate("result",r));return e(".pattern-relateditems-result-select",s).on("click",function(t){t.preventDefault();if(e(this).is(".selectable")){var i=e(this).parents(".pattern-relateditems-result");if(i.is(".pattern-relateditems-active"))i.removeClass("pattern-relateditems-active"),n.deselectItem(r);else{n.selectItem(r),i.addClass("pattern-relateditems-active");if(n.options.maximumSelectionSize>0){var s=n.$select2.select2("data");s.length>=n.options.maximumSelectionSize&&n.$select2.select2("close")}}}}),e(".pattern-relateditems-result-browse",s).on("click",function(t){t.preventDefault(),t.stopPropagation();var r=e(this).data("path");n.browseTo(r)}),e(s)},n.options.initSelection=function(t,r){var i=[],s=e(t).val();if(s!==""){var o=s.split(n.options.separator);n.query.search("UID","plone.app.querystring.operation.list.contains",o,function(e){r(e.results)},!1)}},n.options.id=function(e){return e.UID},r.prototype.initializeSelect2.call(n);var i={browseText:n.options.browseText,searchText:n.options.searchText};n.$browsePath=e('<span class="pattern-relateditems-path" />'),n.$container.prepend(n.$browsePath),n.deactivateBrowsing(),n.$el.on("select2-selecting",function(e){e.preventDefault()})}});return s}),n("mockup-patterns-querystring",["jquery","mockup-patterns-base","mockup-patterns-select2","mockup-patterns-pickadate"],function(e,t,n,r,i){var s=function(){this.init.apply(this,arguments)};s.prototype={defaults:{indexWidth:"20em",placeholder:"Select criteria",remove:"remove line",results:" items matching your search.",days:"days",betweendt:"to",classBetweenDtName:"querystring-criteria-betweendt",classWrapperName:"querystring-criteria-wrapper",classIndexName:"querystring-criteria-index",classOperatorName:"querystring-criteria-operator",classValueName:"querystring-criteria-value",classRemoveName:"querystring-criteria-remove",classResultsName:"querystring-criteria-results",classClearName:"querystring-criteria-clear"},init:function(t,n,r,s,o,u){var a=this;a.options=e.extend(!0,{},a.defaults,n),a.indexes=r,a.indexGroups={},a.$wrapper=e("<div/>").addClass(a.options.classWrapperName).appendTo(t),a.$remove=e("<div>"+a.options.remove+"</div>").addClass(a.options.classRemoveName).appendTo(a.$wrapper).on("click",function(e){a.remove()}),a.$index=e("<select><option></option></select>").attr("placeholder",a.options.placeholder),e.each(a.indexes,function(t,n){n.enabled&&(a.indexGroups[n.group]||(a.indexGroups[n.group]=e("<optgroup/>").attr("label",n.group).appendTo(a.$index)),a.indexGroups[n.group].append(e("<option/>").attr("value",t).html(n.title)))}),a.$wrapper.append(e("<div/>").addClass(a.options.classIndexName).append(a.$index)),a.$index.patternSelect2({width:a.options.indexWidth,placeholder:a.options.placeholder}).on("change",function(e){a.removeValue(),a.createOperator(e.val),a.createClear(),a.trigger("index-changed")}),s!==i&&(a.$index.select2("val",s),a.createOperator(s,o,u),a.createClear()),a.trigger("create-criteria")},createOperator:function(t,n,r){var s=this;s.removeOperator(),s.$operator=e("<select/>"),s.indexes[t]&&e.each(s.indexes[t].operators,function(t,n){e("<option/>").attr("value",t).html(n.title).appendTo(s.$operator)}),s.$wrapper.append(e("<div/>").addClass(s.options.classOperatorName).append(s.$operator)),s.$operator.patternSelect2({width:"10em"}).on("change",function(e){s.createValue(t),s.createClear(),s.trigger("operator-changed")}),n===i&&(n=s.$operator.select2("val")),s.$operator.select2("val",n),s.createValue(t,r),s.trigger("create-operator")},createValue:function(t,n){var r=this,s=r.indexes[t].operators[r.$operator.val()].widget,o=e("<div/>").addClass(r.options.classValueName).appendTo(r.$wrapper);r.removeValue();if(s==="StringWidget")r.$value=e('<input type="text"/>').addClass(r.options.classValueName+"-"+s).val(n).appendTo(o).change(function(){r.trigger("value-changed")});else if(s==="DateWidget")r.$value=e('<input type="text"/>').addClass(r.options.classValueName+"-"+s).appendTo(o).patternPickadate({time:!1,date:{format:"dd/mm/yyyy"}}).change(function(){r.trigger("value-changed")});else if(s==="DateRangeWidget"){var u=e("<span/>").appendTo(o),a=e('<input type="text"/>').addClass(r.options.classValueName+"-"+s).addClass(r.options.classValueName+"-"+s+"-start").appendTo(u).patternPickadate({time:!1,date:{format:"dd/mm/yyyy"}});o.append(e("<span/>").html(r.options.betweendt).addClass(r.options.classBetweenDtName));var f=e("<span/>").appendTo(o),l=e('<input type="text"/>').addClass(r.options.classValueName+"-"+s).addClass(r.options.classValueName+"-"+s+"-end").appendTo(f).patternPickadate({time:!1,date:{format:"dd/mm/yyyy"}});o.find(".picker__input").change(function(){r.trigger("value-changed")}),r.$value=[a,l]}else s==="RelativeDateWidget"?r.$value=e('<input type="text"/>').after(e("<span/>").html(r.options.days)).addClass(r.options.classValueName+"-"+s).appendTo(o).change(function(){r.trigger("value-changed")}):s==="ReferenceWidget"?r.$value=e('<input type="text"/>').addClass(r.options.classValueName+"-"+s).appendTo(o).change(function(){r.trigger("value-changed")}):s==="RelativePathWidget"?r.$value=e('<input type="text"/>').addClass(r.options.classValueName+"-"+s).appendTo(o).val(n).change(function(){r.trigger("value-changed")}):s==="MultipleSelectionWidget"&&(r.$value=e("<select/>").attr("multiple",!0).addClass(r.options.classValueName+"-"+s).appendTo(o).change(function(){r.trigger("value-changed")}),r.indexes[t]&&e.each(r.indexes[t].values,function(t,n){e("<option/>").attr("value",t).html(n.title).appendTo(r.$value)}),r.$value.patternSelect2({width:"250px"}));n!==i&&typeof r.$value!="undefined"&&r.$value.select2("val",n),r.trigger("create-value")},createClear:function(){var t=this;t.removeClear(),t.$clear=e("<div/>").addClass(t.options.classClearName).appendTo(t.$wrapper)},remove:function(){var e=this;e.trigger("remove"),e.$remove.remove(),e.$index.parent().remove(),e.removeOperator(),e.removeValue(),e.removeClear(),e.$wrapper.remove()},removeClear:function(){var e=this;e.trigger("remove-clear"),e.$clear&&e.$clear.remove()},removeOperator:function(){var e=this;e.trigger("remove-operator"),e.$operator&&e.$operator.parent().remove()},removeValue:function(){var t=this;t.trigger("remove-value"),t.$value&&(e.isArray(t.$value)?t.$value[0].parents(".querystring-criteria-value").remove():t.$value.parents(".querystring-criteria-value").remove())},buildQueryPart:function(){var t=this,n=t.$index.select2("val");if(n==="")return"";var r="query.i:records="+n;if(typeof t.$operator=="undefined")return"";var i=t.$operator.val(),s="query.o:records="+i,o="query.v:records=",u="query.v:records:list=",a=[];return typeof t.$value=="undefined"?a.push(o):e.isArray(t.$value)?e.each(t.$value,function(t,n){a.push(u+e(this).parent().find(".picker__input").val())}):a.push(o+t.$value.val()),r+"&"+s+"&"+a.join("&")},getJSONListStr:function(){var t=this,n=t.$index.select2("val");if(n==="")return"";if(typeof t.$operator=="undefined")return"";var r=t.$operator.val(),i=[];e.isArray(t.$value)?e.each(t.$value,function(t,n){i.push(e(this).parent().find(".picker__input").val())}):typeof t.$value!="undefined"&&i.push(t.$value.val());var s;return i.length>1?s='["'+i.join('","')+'"]':i.length===1?s=JSON.stringify(i[0]):s='""','{"i":"'+n+'", "o":"'+r+'", "v":'+s+"}"},trigger:function(e){this.$wrapper.trigger(e+"-criteria.querystring.patterns",[this])},on:function(e,t){this.$wrapper.on(e+"-criteria.querystring.patterns",t)}};var o=t.extend({name:"querystring",defaults:{indexes:[],classWrapperName:"querystring-wrapper",criteria:{},indexOptionsUrl:null,previewURL:"portal_factory/@@querybuilder_html_results",previewCountURL:"portal_factory/@@querybuildernumberofresults",sorttxt:"Sort On",reversetxt:"Reversed Order",previewTitle:"Preview",previewDescription:"Preview of at most 10 items",classSortLabelName:"querystring-sort-label",classSortReverseName:"querystring-sortreverse",classSortReverseLabelName:"querystring-sortreverse-label",classPreviewCountWrapperName:"querystring-previewcount-wrapper",classPreviewResultsWrapperName:"querystring-previewresults-wrapper",classPreviewWrapperName:"querystring-preview-wrapper",classPreviewName:"querystring-preview",classPreviewTitleName:"querystring-preview-title",classPreviewDescriptionName:"querystring-preview-description",classSortWrapperName:"querystring-sort-wrapper",showPreviews:!0},init:function(){var t=this;t.$el.hide(),t.$wrapper=e("<div/>"),t.$el.after(t.$wrapper),t.initialized=!1,t.options.indexOptionsUrl?e.ajax({url:t.options.indexOptionsUrl,success:function(e){t.options.indexes=e.indexes,t.options.sortable_indexes=e.sortable_indexes,t._init()},error:function(e){}}):t._init()},_init:function(){var t=this;t.$criteriaWrapper=e("<div/>").addClass(t.options.classWrapperName).appendTo(t.$wrapper),t.$sortWrapper=e("<div/>").addClass(t.options.classSortWrapperName).appendTo(t.$wrapper),t.options.showPreviews==="false"&&(t.options.showPreviews=!1),t.options.showPreviews&&(t.$previewWrapper=e("<div/>").addClass(t.options.classPreviewWrapperName).appendTo(t.$wrapper),e("<div/>").addClass(t.options.classPreviewTitleName).html(t.options.previewTitle).appendTo(t.$previewWrapper),e("<div/>").addClass(t.options.classPreviewDescriptionName).html(t.options.previewDescription).appendTo(t.$previewWrapper)),t.criterias=[],t.$el.val()&&e.each(JSON.parse(t.$el.val()),function(e,n){t.createCriteria(n.i,n.o,n.v)}),t.createCriteria(),t.createSort(),t.options.showPreviews&&t.refreshPreviewEvent(),t.$el.trigger("initialized"),t.initialized=!0},createCriteria:function(e,t,n){var r=this,i=new s(r.$criteriaWrapper,r.options.criteria,r.options.indexes,e,t,n);i.on("remove",function(e){r.criterias[r.criterias.length-1]===i&&r.createCriteria()}),i.on("index-changed",function(e){r.criterias[r.criterias.length-1]===i&&r.createCriteria()});var o=function(){r.refreshPreviewEvent(),r.updateValue()};i.on("remove",function(e,t){r.criterias.indexOf(t)!==-1&&r.criterias.splice(r.criterias.indexOf(t),1),o(e,t)}),i.on("remove-clear",o),i.on("remove-operator",o),i.on("remove-value",o),i.on("index-changed",o),i.on("operator-changed",o),i.on("create-criteria",o),i.on("create-operator",o),i.on("create-value",o),i.on("value-changed",o),r.criterias.push(i)},createSort:function(){var t=this,n=e('[id$="-sort_on"]').filter('[id^="formfield-"]'),r=e('[id$="-sort_reversed"]').filter('[id^="formfield-"]');e("<span/>").addClass(t.options.classSortLabelName).html(t.options.sorttxt).appendTo(t.$sortWrapper),t.$sortOn=e("<select/>").attr("name","sort_on").appendTo(t.$sortWrapper).change(function(){t.refreshPreviewEvent.call(t),e('[id$="sort_on"]',n).val(e(this).val())}),t.$sortOn.append(e('<option value="">No sorting</option>'));for(var i in t.options.sortable_indexes)t.$sortOn.append(e("<option/>").attr("value",i).html(t.options.indexes[i].title));t.$sortOn.patternSelect2({width:150}),t.$sortOrder=e("<input type='checkbox' />").attr("name","sort_reversed:boolean").change(function(){t.refreshPreviewEvent.call(t),e(this).attr("checked")==="checked"?e('.option input[type="checkbox"]',r).attr("checked","checked"):e('.option input[type="checkbox"]',r).removeAttr("checked")}),e("<span/>").addClass(t.options.classSortReverseName).appendTo(t.$sortWrapper).append(t.$sortOrder).append(e("<span/>").html(t.options.reversetxt).addClass(t.options.classSortReverseLabelName));if(n.length>=1&&r.length>=1){var s=e('.option input[type="checkbox"]',r).attr("checked")==="checked",o=e('[id$="-sort_on"]',n).val();s&&t.$sortOrder.attr("checked","checked"),t.$sortOn.select2("val",o),e(n).hide(),e(r).hide()}},refreshPreviewEvent:function(){var t=this;if(!t.options.showPreviews)return;typeof t._preview_xhr!="undefined"&&t._preview_xhr.abort(),typeof t.$previewPane!="undefined"&&t.$previewPane.remove();var n=[],r;e.each(t.criterias,function(e,t){r=t.buildQueryPart(),r!==""&&n.push(t.buildQueryPart())}),t.$previewPane=e("<div/>").addClass(t.options.classPreviewName).appendTo(t.$previewWrapper);if(n.length<=0){e("<div/>").addClass(t.options.classPreviewCountWrapperName).html("No results to preview").prependTo(t.$previewPane);return}n.push("sort_on="+t.$sortOn.val());var i=t.$sortOrder.attr("checked");i==="checked"&&n.push("sort_order=reverse"),t._preview_xhr=e.get(t.options.previewURL+"?"+n.join("&")).done(function(n,r){e("<div/>").addClass(t.options.classPreviewResultsWrapperName).html(n).appendTo(t.$previewPane)})},updateValue:function(){var t=this,n=[];e.each(t.criterias,function(e,t){var r=t.getJSONListStr();r!==""&&n.push(r)});var r=t.$el.val(),i="["+n.join(",")+"]";t.$el.val(i),t.$el.trigger("change")}});return o}),window.jQuery&&n("jquery",[],function(){return window.jQuery}),n("mockup-bundles-widgets",["jquery","mockup-registry","mockup-patterns-base","mockup-patterns-select2","mockup-patterns-pickadate","mockup-patterns-relateditems","mockup-patterns-querystring"],function(e,t,n,r,i,s,o){var u=n.extend({name:"plone-widgets",init:function(){var e=this}});return window.parent===window&&e(document).ready(function(){e("body").addClass("pat-plone-widgets"),t.scan(e("body"))}),u}),t(["mockup-bundles-widgets"])})();


/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - register_function.js - */
// http://localhost:8081/sunburst/portal_javascripts/register_function.js?original=1
var bugRiddenCrashPronePieceOfJunk=(navigator.userAgent.indexOf('MSIE 5')!==-1&&navigator.userAgent.indexOf('Mac')!==-1);var W3CDOM=(!bugRiddenCrashPronePieceOfJunk&&typeof document.getElementsByTagName!=='undefined'&&typeof document.createElement!=='undefined');var registerEventListener=function(elem,event,func){jQuery(elem).bind(event,func)};var unRegisterEventListener=function(elem,event,func){jQuery(elem).unbind(event,func)};var registerPloneFunction=jQuery;
function getContentArea(){var node=jQuery('#region-content,#content');return node.length?node[0]:null}


/* - plone_javascript_variables.js - */
// http://localhost:8081/sunburst/portal_javascripts/plone_javascript_variables.js?original=1
var portal_url='http://localhost:8081/sunburst';var form_modified_message='Your form has not been saved. All changes you have made will be lost.';var form_resubmit_message='You already clicked the submit button. Do you really want to submit this form again?';var external_links_open_new_window='false';var mark_special_links='false';var ajax_noresponse_message='No response from server. Please try again later.';

/* - ++resource++plone.app.jquerytools.js - */
!function($){function Overlay(trigger,conf){var closers,overlay,opened,self=this,fire=trigger.add(self),w=$(window),maskConf=$.tools.expose&&(conf.mask||conf.expose),uid=Math.random().toString().slice(10);maskConf&&("string"==typeof maskConf&&(maskConf={color:maskConf}),maskConf.closeOnClick=maskConf.closeOnEsc=!1);var jq=conf.target||trigger.attr("rel");if(overlay=jq?$(jq):null||trigger,!overlay.length)throw"Could not find Overlay: "+jq;trigger&&-1==trigger.index(overlay)&&trigger.click(function(e){return self.load(e),e.preventDefault()}),$.extend(self,{load:function(e){if(self.isOpened())return self;var eff=effects[conf.effect];if(!eff)throw'Overlay: cannot find effect : "'+conf.effect+'"';if(conf.oneInstance&&$.each(instances,function(){this.close(e)}),e=e||$.Event(),e.type="onBeforeLoad",fire.trigger(e),e.isDefaultPrevented())return self;opened=!0,maskConf&&$(overlay).expose(maskConf);var top=conf.top,left=conf.left,oWidth=overlay.outerWidth(!0),oHeight=overlay.outerHeight(!0);return"string"==typeof top&&(top="center"==top?Math.max((w.height()-oHeight)/2,0):parseInt(top,10)/100*w.height()),"center"==left&&(left=Math.max((w.width()-oWidth)/2,0)),eff[0].call(self,{top:top,left:left},function(){opened&&(e.type="onLoad",fire.trigger(e))}),maskConf&&conf.closeOnClick&&$.mask.getMask().one("click",self.close),conf.closeOnClick&&$(document).on("click."+uid,function(e){$(e.target).parents(overlay).length||self.close(e)}),conf.closeOnEsc&&$(document).on("keydown."+uid,function(e){27==e.keyCode&&self.close(e)}),self},close:function(e){return self.isOpened()?(e=e||$.Event(),e.type="onBeforeClose",fire.trigger(e),e.isDefaultPrevented()?void 0:(opened=!1,effects[conf.effect][1].call(self,function(){e.type="onClose",fire.trigger(e)}),$(document).off("click."+uid+" keydown."+uid),maskConf&&$.mask.close(),self)):self},getOverlay:function(){return overlay},getTrigger:function(){return trigger},getClosers:function(){return closers},isOpened:function(){return opened},getConf:function(){return conf}}),$.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","),function(i,name){$.isFunction(conf[name])&&$(self).on(name,conf[name]),self[name]=function(fn){return fn&&$(self).on(name,fn),self}}),closers=overlay.find(conf.close||".close"),closers.length||conf.close||(closers=$('<a class="close"></a>'),overlay.prepend(closers)),closers.click(function(e){self.close(e)}),conf.load&&self.load()}$.tools=$.tools||{version:"@VERSION"},$.tools.overlay={addEffect:function(name,loadFn,closeFn){effects[name]=[loadFn,closeFn]},conf:{close:null,closeOnClick:!0,closeOnEsc:!0,closeSpeed:"fast",effect:"default",fixed:!/msie/.test(navigator.userAgent.toLowerCase())||navigator.appVersion>6,left:"center",load:!1,mask:null,oneInstance:!0,speed:"normal",target:null,top:"10%"}};var instances=[],effects={};$.tools.overlay.addEffect("default",function(pos,onLoad){var conf=this.getConf(),w=$(window);conf.fixed||(pos.top+=w.scrollTop(),pos.left+=w.scrollLeft()),pos.position=conf.fixed?"fixed":"absolute",this.getOverlay().css(pos).fadeIn(conf.speed,onLoad)},function(onClose){this.getOverlay().fadeOut(this.getConf().closeSpeed,onClose)}),$.fn.overlay=function(conf){var el=this.data("overlay");return el?el:($.isFunction(conf)&&(conf={onBeforeLoad:conf}),conf=$.extend(!0,{},$.tools.overlay.conf,conf),this.each(function(){el=new Overlay($(this),conf),instances.push(el),$(this).data("overlay",el)}),conf.api?el:this)}}(jQuery),function($){function find(root,query){var el=$(query);return el.length<2?el:root.parent().find(query)}function Scrollable(root,conf){var self=this,fire=root.add(self),itemWrap=root.children(),index=0,vertical=conf.vertical;if(current||(current=self),itemWrap.length>1&&(itemWrap=$(conf.items,root)),conf.size>1&&(conf.circular=!1),$.extend(self,{getConf:function(){return conf},getIndex:function(){return index},getSize:function(){return self.getItems().size()},getNaviButtons:function(){return prev.add(next)},getRoot:function(){return root},getItemWrap:function(){return itemWrap},getItems:function(){return itemWrap.find(conf.item).not("."+conf.clonedClass)},move:function(offset,time){return self.seekTo(index+offset,time)},next:function(time){return self.move(conf.size,time)},prev:function(time){return self.move(-conf.size,time)},begin:function(time){return self.seekTo(0,time)},end:function(time){return self.seekTo(self.getSize()-1,time)},focus:function(){return current=self,self},addItem:function(item){return item=$(item),conf.circular?(itemWrap.children().last().before(item),itemWrap.children().first().replaceWith(item.clone().addClass(conf.clonedClass))):(itemWrap.append(item),next.removeClass("disabled")),fire.trigger("onAddItem",[item]),self},seekTo:function(i,time,fn){if(i.jquery||(i*=1),conf.circular&&0===i&&-1==index&&0!==time)return self;if(!conf.circular&&0>i||i>self.getSize()||-1>i)return self;var item=i;i.jquery?i=self.getItems().index(i):item=self.getItems().eq(i);var e=$.Event("onBeforeSeek");if(!fn&&(fire.trigger(e,[i,time]),e.isDefaultPrevented()||!item.length))return self;var props=vertical?{top:-item.position().top}:{left:-item.position().left};return index=i,current=self,void 0===time&&(time=conf.speed),itemWrap.animate(props,time,conf.easing,fn||function(){fire.trigger("onSeek",[i])}),self}}),$.each(["onBeforeSeek","onSeek","onAddItem"],function(i,name){$.isFunction(conf[name])&&$(self).on(name,conf[name]),self[name]=function(fn){return fn&&$(self).on(name,fn),self}}),conf.circular){var cloned1=self.getItems().slice(-1).clone().prependTo(itemWrap),cloned2=self.getItems().eq(1).clone().appendTo(itemWrap);cloned1.add(cloned2).addClass(conf.clonedClass),self.onBeforeSeek(function(e,i,time){return e.isDefaultPrevented()?void 0:-1==i?(self.seekTo(cloned1,time,function(){self.end(0)}),e.preventDefault()):void(i==self.getSize()&&self.seekTo(cloned2,time,function(){self.begin(0)}))});var hidden_parents=root.parents().add(root).filter(function(){return"none"===$(this).css("display")?!0:void 0});hidden_parents.length?(hidden_parents.show(),self.seekTo(0,0,function(){}),hidden_parents.hide()):self.seekTo(0,0,function(){})}var prev=find(root,conf.prev).click(function(e){e.stopPropagation(),self.prev()}),next=find(root,conf.next).click(function(e){e.stopPropagation(),self.next()});if(conf.circular||(self.onBeforeSeek(function(e,i){setTimeout(function(){e.isDefaultPrevented()||(prev.toggleClass(conf.disabledClass,0>=i),next.toggleClass(conf.disabledClass,i>=self.getSize()-1))},1)}),conf.initialIndex||prev.addClass(conf.disabledClass)),self.getSize()<2&&prev.add(next).addClass(conf.disabledClass),conf.mousewheel&&$.fn.mousewheel&&root.mousewheel(function(e,delta){return conf.mousewheel?(self.move(0>delta?1:-1,conf.wheelSpeed||50),!1):void 0}),conf.touch){var touch={};itemWrap[0].ontouchstart=function(e){var t=e.touches[0];touch.x=t.clientX,touch.y=t.clientY},itemWrap[0].ontouchmove=function(e){if(1==e.touches.length&&!itemWrap.is(":animated")){var t=e.touches[0],deltaX=touch.x-t.clientX,deltaY=touch.y-t.clientY;self[vertical&&deltaY>0||!vertical&&deltaX>0?"next":"prev"](),e.preventDefault()}}}conf.keyboard&&$(document).on("keydown.scrollable",function(evt){if(!(!conf.keyboard||evt.altKey||evt.ctrlKey||evt.metaKey||$(evt.target).is(":input")||"static"!=conf.keyboard&&current!=self)){var key=evt.keyCode;return!vertical||38!=key&&40!=key?vertical||37!=key&&39!=key?void 0:(self.move(37==key?-1:1),evt.preventDefault()):(self.move(38==key?-1:1),evt.preventDefault())}}),conf.initialIndex&&self.seekTo(conf.initialIndex,0,function(){})}$.tools=$.tools||{version:"@VERSION"},$.tools.scrollable={conf:{activeClass:"active",circular:!1,clonedClass:"cloned",disabledClass:"disabled",easing:"swing",initialIndex:0,item:"> *",items:".items",keyboard:!0,mousewheel:!1,next:".next",prev:".prev",size:1,speed:400,vertical:!1,touch:!0,wheelSpeed:0}};var current;$.fn.scrollable=function(conf){var el=this.data("scrollable");return el?el:(conf=$.extend({},$.tools.scrollable.conf,conf),this.each(function(){el=new Scrollable($(this),conf),$(this).data("scrollable",el)}),conf.api?el:this)}}(jQuery),function($){function Tabs(root,paneSelector,conf){var current,self=this,trigger=root.add(this),tabs=root.find(conf.tabs),panes=paneSelector.jquery?paneSelector:root.children(paneSelector);tabs.length||(tabs=root.children()),panes.length||(panes=root.parent().find(paneSelector)),panes.length||(panes=$(paneSelector)),$.extend(this,{click:function(i,e){var tab=tabs.eq(i),firstRender=!root.data("tabs");if("string"==typeof i&&i.replace("#","")&&(tab=tabs.filter('[href*="'+i.replace("#","")+'"]'),i=Math.max(tabs.index(tab),0)),conf.rotate){var last=tabs.length-1;if(0>i)return self.click(last,e);if(i>last)return self.click(0,e)}if(!tab.length){if(current>=0)return self;i=conf.initialIndex,tab=tabs.eq(i)}if(i===current)return self;if(e=e||$.Event(),e.type="onBeforeClick",trigger.trigger(e,[i]),!e.isDefaultPrevented()){var effect=firstRender?conf.initialEffect&&conf.effect||"default":conf.effect;return effects[effect].call(self,i,function(){current=i,e.type="onClick",trigger.trigger(e,[i])}),tabs.removeClass(conf.current),tab.addClass(conf.current),self}},getConf:function(){return conf},getTabs:function(){return tabs},getPanes:function(){return panes},getCurrentPane:function(){return panes.eq(current)},getCurrentTab:function(){return tabs.eq(current)},getIndex:function(){return current},next:function(){return self.click(current+1)},prev:function(){return self.click(current-1)},destroy:function(){return tabs.off(conf.event).removeClass(conf.current),panes.find('a[href^="#"]').off("click.T"),self}}),$.each("onBeforeClick,onClick".split(","),function(i,name){$.isFunction(conf[name])&&$(self).on(name,conf[name]),self[name]=function(fn){return fn&&$(self).on(name,fn),self}}),conf.history&&$.fn.history&&($.tools.history.init(tabs),conf.event="history"),tabs.each(function(i){$(this).on(conf.event,function(e){return self.click(i,e),e.preventDefault()})}),panes.find('a[href^="#"]').on("click.T",function(e){self.click($(this).attr("href"),e)}),location.hash&&"a"==conf.tabs&&root.find('[href="'+location.hash+'"]').length?self.click(location.hash):(0===conf.initialIndex||conf.initialIndex>0)&&self.click(conf.initialIndex)}$.tools=$.tools||{version:"@VERSION"},$.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialEffect:!1,initialIndex:0,event:"click",rotate:!1,slideUpSpeed:400,slideDownSpeed:400,history:!1},addEffect:function(name,fn){effects[name]=fn}};var animating,w,effects={"default":function(i,done){this.getPanes().hide().eq(i).show(),done.call()},fade:function(i,done){var conf=this.getConf(),speed=conf.fadeOutSpeed,panes=this.getPanes();speed?panes.fadeOut(speed):panes.hide(),panes.eq(i).fadeIn(conf.fadeInSpeed,done)},slide:function(i,done){var conf=this.getConf();this.getPanes().slideUp(conf.slideUpSpeed),this.getPanes().eq(i).slideDown(conf.slideDownSpeed,done)},ajax:function(i,done){this.getPanes().eq(0).load(this.getTabs().eq(i).attr("href"),done)}};$.tools.tabs.addEffect("horizontal",function(i,done){if(!animating){var nextPane=this.getPanes().eq(i),currentPane=this.getCurrentPane();w||(w=this.getPanes().eq(0).width()),animating=!0,nextPane.show(),currentPane.animate({width:0},{step:function(now){nextPane.css("width",w-now)},complete:function(){$(this).hide(),done.call(),animating=!1}}),currentPane.length||(done.call(),animating=!1)}}),$.fn.tabs=function(paneSelector,conf){var el=this.data("tabs");return el&&(el.destroy(),this.removeData("tabs")),$.isFunction(conf)&&(conf={onBeforeClick:conf}),conf=$.extend({},$.tools.tabs.conf,conf),this.each(function(){el=new Tabs($(this),paneSelector,conf),$(this).data("tabs",el)}),conf.api?el:this}}(jQuery),function($){function setIframeLocation(h){if(h){var doc=iframe.contentWindow.document;doc.open().close(),doc.location.hash=h}}var hash,iframe,links,inited;$.tools=$.tools||{version:"@VERSION"},$.tools.history={init:function(els){inited||($.browser.msie&&$.browser.version<"8"?iframe||(iframe=$("<iframe/>").attr("src","javascript:false;").hide().get(0),$("body").append(iframe),setInterval(function(){var idoc=iframe.contentWindow.document,h=idoc.location.hash;hash!==h&&$(window).trigger("hash",h)},100),setIframeLocation(location.hash||"#")):setInterval(function(){var h=location.hash;h!==hash&&$(window).trigger("hash",h)},100),links=links?links.add(els):els,els.click(function(e){var href=$(this).attr("href");return iframe&&setIframeLocation(href),"#"!=href.slice(0,1)?(location.href="#"+href,e.preventDefault()):void 0}),inited=!0)}},$(window).on("hash",function(e,h){h?links.filter(function(){var href=$(this).attr("href");return href==h||href==h.replace("#","")}).trigger("history",[h]):links.eq(0).trigger("history",[h]),hash=h}),$.fn.history=function(fn){return $.tools.history.init(this),this.on("history",fn)}}(jQuery),function($){function viewport(){if(/msie/.test(navigator.userAgent.toLowerCase())){var d=$(document).height(),w=$(window).height();return[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,20>d-w?w:d]}return[$(document).width(),$(document).height()]}function call(fn){return fn?fn.call($.mask):void 0}$.tools=$.tools||{version:"@VERSION"};var tool;tool=$.tools.expose={conf:{maskId:"exposeMask",loadSpeed:"slow",closeSpeed:"fast",closeOnClick:!0,closeOnEsc:!0,zIndex:9998,opacity:.8,startOpacity:0,color:"#fff",onLoad:null,onClose:null}};var mask,exposed,loaded,config,overlayIndex;$.mask={load:function(conf,els){if(loaded)return this;"string"==typeof conf&&(conf={color:conf}),conf=conf||config,config=conf=$.extend($.extend({},tool.conf),conf),mask=$("#"+conf.maskId),mask.length||(mask=$("<div/>").attr("id",conf.maskId),$("body").append(mask));var size=viewport();return mask.css({position:"absolute",top:0,left:0,width:size[0],height:size[1],display:"none",opacity:conf.startOpacity,zIndex:conf.zIndex}),conf.color&&mask.css("backgroundColor",conf.color),call(conf.onBeforeLoad)===!1?this:(conf.closeOnEsc&&$(document).on("keydown.mask",function(e){27==e.keyCode&&$.mask.close(e)}),conf.closeOnClick&&mask.on("click.mask",function(e){$.mask.close(e)}),$(window).on("resize.mask",function(){$.mask.fit()}),els&&els.length&&(overlayIndex=els.eq(0).css("zIndex"),$.each(els,function(){var el=$(this);/relative|absolute|fixed/i.test(el.css("position"))||el.css("position","relative")}),exposed=els.css({zIndex:Math.max(conf.zIndex+1,"auto"==overlayIndex?0:overlayIndex)})),mask.css({display:"block"}).fadeTo(conf.loadSpeed,conf.opacity,function(){$.mask.fit(),call(conf.onLoad),loaded="full"}),loaded=!0,this)},close:function(){if(loaded){if(call(config.onBeforeClose)===!1)return this;mask.fadeOut(config.closeSpeed,function(){exposed&&exposed.css({zIndex:overlayIndex}),loaded=!1,call(config.onClose)}),$(document).off("keydown.mask"),mask.off("click.mask"),$(window).off("resize.mask")}return this},fit:function(){if(loaded){var size=viewport();mask.css({width:size[0],height:size[1]})}},getMask:function(){return mask},isLoaded:function(fully){return fully?"full"==loaded:loaded},getConf:function(){return config},getExposed:function(){return exposed}},$.fn.mask=function(conf){return $.mask.load(conf),this},$.fn.expose=function(conf){return $.mask.load(conf,this),this}}(jQuery),function($){function getPosition(trigger,tip,conf){var top=conf.relative?trigger.position().top:trigger.offset().top,left=conf.relative?trigger.position().left:trigger.offset().left,pos=conf.position[0];top-=tip.outerHeight()-conf.offset[0],left+=trigger.outerWidth()+conf.offset[1],/iPad/i.test(navigator.userAgent)&&(top-=$(window).scrollTop());var height=tip.outerHeight()+trigger.outerHeight();"center"==pos&&(top+=height/2),"bottom"==pos&&(top+=height),pos=conf.position[1];var width=tip.outerWidth()+trigger.outerWidth();return"center"==pos&&(left-=width/2),"left"==pos&&(left-=width),{top:top,left:left}}function Tooltip(trigger,conf){var tip,shown,self=this,fire=trigger.add(self),timer=0,pretimer=0,title=trigger.attr("title"),tipAttr=trigger.attr("data-tooltip"),effect=effects[conf.effect],isInput=trigger.is(":input"),isWidget=isInput&&trigger.is(":checkbox, :radio, select, :button, :submit"),type=trigger.attr("type"),evt=conf.events[type]||conf.events[isInput?isWidget?"widget":"input":"def"];if(!effect)throw'Nonexistent effect "'+conf.effect+'"';if(evt=evt.split(/,\s*/),2!=evt.length)throw"Tooltip: bad events configuration for "+type;trigger.on(evt[0],function(e){clearTimeout(timer),conf.predelay?pretimer=setTimeout(function(){self.show(e)},conf.predelay):self.show(e)}).on(evt[1],function(e){clearTimeout(pretimer),conf.delay?timer=setTimeout(function(){self.hide(e)},conf.delay):self.hide(e)}),title&&conf.cancelDefault&&(trigger.removeAttr("title"),trigger.data("title",title)),$.extend(self,{show:function(e){if(!tip&&(tipAttr?tip=$(tipAttr):conf.tip?tip=$(conf.tip).eq(0):title?tip=$(conf.layout).addClass(conf.tipClass).appendTo(document.body).hide().append(title):(tip=trigger.find("."+conf.tipClass),tip.length||(tip=trigger.next()),tip.length||(tip=trigger.parent().next())),!tip.length))throw"Cannot find tooltip for "+trigger;if(self.isShown())return self;tip.stop(!0,!0);var pos=getPosition(trigger,tip,conf);if(conf.tip&&tip.html(trigger.data("title")),e=$.Event(),e.type="onBeforeShow",fire.trigger(e,[pos]),e.isDefaultPrevented())return self;pos=getPosition(trigger,tip,conf),tip.css({position:"absolute",top:pos.top,left:pos.left}),shown=!0,effect[0].call(self,function(){e.type="onShow",shown="full",fire.trigger(e)});var event=conf.events.tooltip.split(/,\s*/);return tip.data("__set")||(tip.off(event[0]).on(event[0],function(){clearTimeout(timer),clearTimeout(pretimer)}),event[1]&&!trigger.is("input:not(:checkbox, :radio), textarea")&&tip.off(event[1]).on(event[1],function(e){e.relatedTarget!=trigger[0]&&trigger.trigger(evt[1].split(" ")[0])}),conf.tip||tip.data("__set",!0)),self},hide:function(e){return tip&&self.isShown()?(e=$.Event(),e.type="onBeforeHide",fire.trigger(e),e.isDefaultPrevented()?void 0:(shown=!1,effects[conf.effect][1].call(self,function(){e.type="onHide",fire.trigger(e)}),self)):self},isShown:function(fully){return fully?"full"==shown:shown},getConf:function(){return conf},getTip:function(){return tip},getTrigger:function(){return trigger}}),$.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(i,name){$.isFunction(conf[name])&&$(self).on(name,conf[name]),self[name]=function(fn){return fn&&$(self).on(name,fn),self}})}$.tools=$.tools||{version:"@VERSION"},$.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,fadeIE:!1,position:["top","center"],offset:[0,0],relative:!1,cancelDefault:!0,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(name,loadFn,hideFn){effects[name]=[loadFn,hideFn]}};var effects={toggle:[function(done){var conf=this.getConf(),tip=this.getTip(),o=conf.opacity;1>o&&tip.css({opacity:o}),tip.show(),done.call()},function(done){this.getTip().hide(),done.call()}],fade:[function(done){var conf=this.getConf();!/msie/.test(navigator.userAgent.toLowerCase())||conf.fadeIE?this.getTip().fadeTo(conf.fadeInSpeed,conf.opacity,done):(this.getTip().show(),done())},function(done){var conf=this.getConf();!/msie/.test(navigator.userAgent.toLowerCase())||conf.fadeIE?this.getTip().fadeOut(conf.fadeOutSpeed,done):(this.getTip().hide(),done())}]};$.fn.tooltip=function(conf){var api=this.data("tooltip");return api?api:(conf=$.extend(!0,{},$.tools.tooltip.conf,conf),"string"==typeof conf.position&&(conf.position=conf.position.split(/,?\s/)),this.each(function(){api=new Tooltip($(this),conf),$(this).data("tooltip",api)}),conf.api?api:this)}}(jQuery);

/* - ++resource++plone.app.jquerytools.form.js - */
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
/*global ActiveXObject */



/*
    Usage Note:
    -----------
    Do not use both ajaxSubmit and ajaxForm on the same form.  These
    functions are mutually exclusive.  Use ajaxSubmit if you want
    to bind your own submit handler to the form.  For example,

    $(document).ready(function() {
        $('#myForm').on('submit', function(e) {
            e.preventDefault(); // <-- important
            $(this).ajaxSubmit({
                target: '#output'
            });
        });
    });

    Use ajaxForm when you want the plugin to manage all the event binding
    for you.  For example,

    $(document).ready(function() {
        $('#myForm').ajaxForm({
            target: '#output'
        });
    });

    You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
    form does not have to exist when you invoke ajaxForm:

    $('#myForm').ajaxForm({
        delegation: true,
        target: '#output'
    });

    When using ajaxForm, the ajaxSubmit function will be invoked for you
    at the appropriate time.
*/

/**
 * Feature detection
 */
var feature = {};
feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
feature.formdata = window.FormData !== undefined;

var hasProp = !!$.fn.prop;

// attr2 uses prop when it can but checks the return type for
// an expected string.  this accounts for the case where a form 
// contains inputs with names like "action" or "method"; in those
// cases "prop" returns the element
$.fn.attr2 = function() {
    if ( ! hasProp ) {
        return this.attr.apply(this, arguments);
    }
    var val = this.prop.apply(this, arguments);
    if ( ( val && val.jquery ) || typeof val === 'string' ) {
        return val;
    }
    return this.attr.apply(this, arguments);
};

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
    /*jshint scripturl:true */

    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
        log('ajaxSubmit: skipping submit process - no element selected');
        return this;
    }

    var method, action, url, $form = this;

    if (typeof options == 'function') {
        options = { success: options };
    }
    else if ( options === undefined ) {
        options = {};
    }

    method = options.type || this.attr2('method');
    action = options.url  || this.attr2('action');

    url = (typeof action === 'string') ? $.trim(action) : '';
    url = url || window.location.href || '';
    if (url) {
        // clean url (don't include hash vaue)
        url = (url.match(/^([^#]+)/)||[])[1];
    }

    options = $.extend(true, {
        url:  url,
        success: $.ajaxSettings.success,
        type: method || $.ajaxSettings.type,
        iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
    }, options);

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
        return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSerialize callback');
        return this;
    }

    var traditional = options.traditional;
    if ( traditional === undefined ) {
        traditional = $.ajaxSettings.traditional;
    }

    var elements = [];
    var qx, a = this.formToArray(options.semantic, elements);
    if (options.data) {
        options.extraData = options.data;
        qx = $.param(options.data, traditional);
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSubmit callback');
        return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
        return this;
    }

    var q = $.param(a, traditional);
    if (qx) {
        q = ( q ? (q + '&' + qx) : qx );
    }
    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else {
        options.data = q; // data is the query string for 'post'
    }

    var callbacks = [];
    if (options.resetForm) {
        callbacks.push(function() { $form.resetForm(); });
    }
    if (options.clearForm) {
        callbacks.push(function() { $form.clearForm(options.includeHidden); });
    }

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            var fn = options.replaceTarget ? 'replaceWith' : 'html';
            $(options.target)[fn](data).each(oldSuccess, arguments);
        });
    }
    else if (options.success) {
        callbacks.push(options.success);
    }

    options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
        var context = options.context || this ;    // jQuery 1.4+ supports scope context
        for (var i=0, max=callbacks.length; i < max; i++) {
            callbacks[i].apply(context, [data, status, xhr || $form, $form]);
        }
    };

    if (options.error) {
        var oldError = options.error;
        options.error = function(xhr, status, error) {
            var context = options.context || this;
            oldError.apply(context, [xhr, status, error, $form]);
        };
    }

     if (options.complete) {
        var oldComplete = options.complete;
        options.complete = function(xhr, status) {
            var context = options.context || this;
            oldComplete.apply(context, [xhr, status, $form]);
        };
    }

    // are there files to upload?

    // [value] (issue #113), also see comment:
    // https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
    var fileInputs = $('input[type=file]:enabled', this).filter(function() { return $(this).val() !== ''; });

    var hasFileInputs = fileInputs.length > 0;
    var mp = 'multipart/form-data';
    var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

    var fileAPI = feature.fileapi && feature.formdata;
    log("fileAPI :" + fileAPI);
    var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

    var jqxhr;

    // options.iframe allows user to force iframe mode
    // 06-NOV-09: now defaulting to iframe mode if file input is detected
    if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
        // hack to fix Safari hang (thanks to Tim Molendijk for this)
        // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
        if (options.closeKeepAlive) {
            $.get(options.closeKeepAlive, function() {
                jqxhr = fileUploadIframe(a);
            });
        }
        else {
            jqxhr = fileUploadIframe(a);
        }
    }
    else if ((hasFileInputs || multipart) && fileAPI) {
        jqxhr = fileUploadXhr(a);
    }
    else {
        jqxhr = $.ajax(options);
    }

    $form.removeData('jqxhr').data('jqxhr', jqxhr);

    // clear element array
    for (var k=0; k < elements.length; k++) {
        elements[k] = null;
    }

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;

    // utility fn for deep serialization
    function deepSerialize(extraData){
        var serialized = $.param(extraData, options.traditional).split('&');
        var len = serialized.length;
        var result = [];
        var i, part;
        for (i=0; i < len; i++) {
            // #252; undo param space replacement
            serialized[i] = serialized[i].replace(/\+/g,' ');
            part = serialized[i].split('=');
            // #278; use array instead of object storage, favoring array serializations
            result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
        }
        return result;
    }

     // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
    function fileUploadXhr(a) {
        var formdata = new FormData();

        for (var i=0; i < a.length; i++) {
            formdata.append(a[i].name, a[i].value);
        }

        if (options.extraData) {
            var serializedData = deepSerialize(options.extraData);
            for (i=0; i < serializedData.length; i++) {
                if (serializedData[i]) {
                    formdata.append(serializedData[i][0], serializedData[i][1]);
                }
            }
        }

        options.data = null;

        var s = $.extend(true, {}, $.ajaxSettings, options, {
            contentType: false,
            processData: false,
            cache: false,
            type: method || 'POST'
        });

        if (options.uploadProgress) {
            // workaround because jqXHR does not expose upload property
            s.xhr = function() {
                var xhr = $.ajaxSettings.xhr();
                if (xhr.upload) {
                    xhr.upload.addEventListener('progress', function(event) {
                        var percent = 0;
                        var position = event.loaded || event.position; /*event.position is deprecated*/
                        var total = event.total;
                        if (event.lengthComputable) {
                            percent = Math.ceil(position / total * 100);
                        }
                        options.uploadProgress(event, position, total, percent);
                    }, false);
                }
                return xhr;
            };
        }

        s.data = null;
        var beforeSend = s.beforeSend;
        s.beforeSend = function(xhr, o) {
            //Send FormData() provided by user
            if (options.formData) {
                o.data = options.formData;
            }
            else {
                o.data = formdata;
            }
            if(beforeSend) {
                beforeSend.call(this, xhr, o);
            }
        };
        return $.ajax(s);
    }

    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUploadIframe(a) {
        var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
        var deferred = $.Deferred();

        // #341
        deferred.abort = function(status) {
            xhr.abort(status);
        };

        if (a) {
            // ensure that every serialized input is still enabled
            for (i=0; i < elements.length; i++) {
                el = $(elements[i]);
                if ( hasProp ) {
                    el.prop('disabled', false);
                }
                else {
                    el.removeAttr('disabled');
                }
            }
        }

        s = $.extend(true, {}, $.ajaxSettings, options);
        s.context = s.context || s;
        id = 'jqFormIO' + (new Date().getTime());
        if (s.iframeTarget) {
            $io = $(s.iframeTarget);
            n = $io.attr2('name');
            if (!n) {
                $io.attr2('name', id);
            }
            else {
                id = n;
            }
        }
        else {
            $io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
            $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
        }
        io = $io[0];


        xhr = { // mock object
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {},
            abort: function(status) {
                var e = (status === 'timeout' ? 'timeout' : 'aborted');
                log('aborting upload... ' + e);
                this.aborted = 1;

                try { // #214, #257
                    if (io.contentWindow.document.execCommand) {
                        io.contentWindow.document.execCommand('Stop');
                    }
                }
                catch(ignore) {}

                $io.attr('src', s.iframeSrc); // abort op in progress
                xhr.error = e;
                if (s.error) {
                    s.error.call(s.context, xhr, e, status);
                }
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, e]);
                }
                if (s.complete) {
                    s.complete.call(s.context, xhr, e);
                }
            }
        };

        g = s.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && 0 === $.active++) {
            $.event.trigger("ajaxStart");
        }
        if (g) {
            $.event.trigger("ajaxSend", [xhr, s]);
        }

        if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
            if (s.global) {
                $.active--;
            }
            deferred.reject();
            return deferred;
        }
        if (xhr.aborted) {
            deferred.reject();
            return deferred;
        }

        // add submitting element to data if we know it
        sub = form.clk;
        if (sub) {
            n = sub.name;
            if (n && !sub.disabled) {
                s.extraData = s.extraData || {};
                s.extraData[n] = sub.value;
                if (sub.type == "image") {
                    s.extraData[n+'.x'] = form.clk_x;
                    s.extraData[n+'.y'] = form.clk_y;
                }
            }
        }

        var CLIENT_TIMEOUT_ABORT = 1;
        var SERVER_ABORT = 2;
                
        function getDoc(frame) {
            /* it looks like contentWindow or contentDocument do not
             * carry the protocol property in ie8, when running under ssl
             * frame.document is the only valid response document, since
             * the protocol is know but not on the other two objects. strange?
             * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
             */
            
            var doc = null;
            
            // IE8 cascading access check
            try {
                if (frame.contentWindow) {
                    doc = frame.contentWindow.document;
                }
            } catch(err) {
                // IE8 access denied under ssl & missing protocol
                log('cannot get iframe.contentWindow document: ' + err);
            }

            if (doc) { // successful getting content
                return doc;
            }

            try { // simply checking may throw in ie8 under ssl or mismatched protocol
                doc = frame.contentDocument ? frame.contentDocument : frame.document;
            } catch(err) {
                // last attempt
                log('cannot get iframe.contentDocument: ' + err);
                doc = frame.document;
            }
            return doc;
        }

        // Rails CSRF hack (thanks to Yvan Barthelemy)
        var csrf_token = $('meta[name=csrf-token]').attr('content');
        var csrf_param = $('meta[name=csrf-param]').attr('content');
        if (csrf_param && csrf_token) {
            s.extraData = s.extraData || {};
            s.extraData[csrf_param] = csrf_token;
        }

        // take a breath so that pending repaints get some cpu time before the upload starts
        function doSubmit() {
            // make sure form attrs are set
            var t = $form.attr2('target'), 
                a = $form.attr2('action'), 
                mp = 'multipart/form-data',
                et = $form.attr('enctype') || $form.attr('encoding') || mp;

            // update form attrs in IE friendly way
            form.setAttribute('target',id);
            if (!method || /post/i.test(method) ) {
                form.setAttribute('method', 'POST');
            }
            if (a != s.url) {
                form.setAttribute('action', s.url);
            }

            // ie borks in some cases when setting encoding
            if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
                $form.attr({
                    encoding: 'multipart/form-data',
                    enctype:  'multipart/form-data'
                });
            }

            // support timout
            if (s.timeout) {
                timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
            }

            // look for server aborts
            function checkState() {
                try {
                    var state = getDoc(io).readyState;
                    log('state = ' + state);
                    if (state && state.toLowerCase() == 'uninitialized') {
                        setTimeout(checkState,50);
                    }
                }
                catch(e) {
                    log('Server abort: ' , e, ' (', e.name, ')');
                    cb(SERVER_ABORT);
                    if (timeoutHandle) {
                        clearTimeout(timeoutHandle);
                    }
                    timeoutHandle = undefined;
                }
            }

            // add "extra" data to form if provided in options
            var extraInputs = [];
            try {
                if (s.extraData) {
                    for (var n in s.extraData) {
                        if (s.extraData.hasOwnProperty(n)) {
                           // if using the $.param format that allows for multiple values with the same name
                           if($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                               extraInputs.push(
                               $('<input type="hidden" name="'+s.extraData[n].name+'">').val(s.extraData[n].value)
                                   .appendTo(form)[0]);
                           } else {
                               extraInputs.push(
                               $('<input type="hidden" name="'+n+'">').val(s.extraData[n])
                                   .appendTo(form)[0]);
                           }
                        }
                    }
                }

                if (!s.iframeTarget) {
                    // add iframe to doc and submit the form
                    $io.appendTo('body');
                }
                if (io.attachEvent) {
                    io.attachEvent('onload', cb);
                }
                else {
                    io.addEventListener('load', cb, false);
                }
                setTimeout(checkState,15);

                try {
                    form.submit();
                } catch(err) {
                    // just in case form has element with name/id of 'submit'
                    var submitFn = document.createElement('form').submit;
                    submitFn.apply(form);
                }
            }
            finally {
                // reset attrs and remove "extra" input elements
                form.setAttribute('action',a);
                form.setAttribute('enctype', et); // #380
                if(t) {
                    form.setAttribute('target', t);
                } else {
                    $form.removeAttr('target');
                }
                $(extraInputs).remove();
            }
        }

        if (s.forceSync) {
            doSubmit();
        }
        else {
            setTimeout(doSubmit, 10); // this lets dom updates render
        }

        var data, doc, domCheckCount = 50, callbackProcessed;

        function cb(e) {
            if (xhr.aborted || callbackProcessed) {
                return;
            }
            
            doc = getDoc(io);
            if(!doc) {
                log('cannot access response document');
                e = SERVER_ABORT;
            }
            if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                xhr.abort('timeout');
                deferred.reject(xhr, 'timeout');
                return;
            }
            else if (e == SERVER_ABORT && xhr) {
                xhr.abort('server abort');
                deferred.reject(xhr, 'error', 'server abort');
                return;
            }

            if (!doc || doc.location.href == s.iframeSrc) {
                // response not received yet
                if (!timedOut) {
                    return;
                }
            }
            if (io.detachEvent) {
                io.detachEvent('onload', cb);
            }
            else {
                io.removeEventListener('load', cb, false);
            }

            var status = 'success', errMsg;
            try {
                if (timedOut) {
                    throw 'timeout';
                }

                var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                log('isXml='+isXml);
                if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                    if (--domCheckCount) {
                        // in some browsers (Opera) the iframe DOM is not always traversable when
                        // the onload callback fires, so we loop a bit to accommodate
                        log('requeing onLoad callback, DOM not available');
                        setTimeout(cb, 250);
                        return;
                    }
                    // let this fall through because server response could be an empty document
                    //log('Could not access iframe DOM after mutiple tries.');
                    //throw 'DOMException: not available';
                }

                //log('response detected');
                var docRoot = doc.body ? doc.body : doc.documentElement;
                xhr.responseText = docRoot ? docRoot.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                if (isXml) {
                    s.dataType = 'xml';
                }
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': s.dataType};
                    return headers[header.toLowerCase()];
                };
                // support for XHR 'status' & 'statusText' emulation :
                if (docRoot) {
                    xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
                    xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                }

                var dt = (s.dataType || '').toLowerCase();
                var scr = /(json|script|text)/.test(dt);
                if (scr || s.textarea) {
                    // see if user embedded response in textarea
                    var ta = doc.getElementsByTagName('textarea')[0];
                    if (ta) {
                        xhr.responseText = ta.value;
                        // support for XHR 'status' & 'statusText' emulation :
                        xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
                        xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
                    }
                    else if (scr) {
                        // account for browsers injecting pre around json response
                        var pre = doc.getElementsByTagName('pre')[0];
                        var b = doc.getElementsByTagName('body')[0];
                        if (pre) {
                            xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
                        }
                        else if (b) {
                            xhr.responseText = b.textContent ? b.textContent : b.innerText;
                        }
                    }
                }
                else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
                    xhr.responseXML = toXml(xhr.responseText);
                }

                try {
                    data = httpData(xhr, dt, s);
                }
                catch (err) {
                    status = 'parsererror';
                    xhr.error = errMsg = (err || status);
                }
            }
            catch (err) {
                log('error caught: ',err);
                status = 'error';
                xhr.error = errMsg = (err || status);
            }

            if (xhr.aborted) {
                log('upload aborted');
                status = null;
            }

            if (xhr.status) { // we've set xhr.status
                status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
            }

            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
            if (status === 'success') {
                if (s.success) {
                    s.success.call(s.context, data, 'success', xhr);
                }
                deferred.resolve(xhr.responseText, 'success', xhr);
                if (g) {
                    $.event.trigger("ajaxSuccess", [xhr, s]);
                }
            }
            else if (status) {
                if (errMsg === undefined) {
                    errMsg = xhr.statusText;
                }
                if (s.error) {
                    s.error.call(s.context, xhr, status, errMsg);
                }
                deferred.reject(xhr, 'error', errMsg);
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, errMsg]);
                }
            }

            if (g) {
                $.event.trigger("ajaxComplete", [xhr, s]);
            }

            if (g && ! --$.active) {
                $.event.trigger("ajaxStop");
            }

            if (s.complete) {
                s.complete.call(s.context, xhr, status);
            }

            callbackProcessed = true;
            if (s.timeout) {
                clearTimeout(timeoutHandle);
            }

            // clean up
            setTimeout(function() {
                if (!s.iframeTarget) {
                    $io.remove();
                }
                else { //adding else to clean up existing iframe response.
                    $io.attr('src', s.iframeSrc);
                }
                xhr.responseXML = null;
            }, 100);
        }

        var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else {
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            }
            return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
        };
        var parseJSON = $.parseJSON || function(s) {
            /*jslint evil:true */
            return window['eval']('(' + s + ')');
        };

        var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4

            var ct = xhr.getResponseHeader('content-type') || '',
                xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
                data = xml ? xhr.responseXML : xhr.responseText;

            if (xml && data.documentElement.nodeName === 'parsererror') {
                if ($.error) {
                    $.error('parsererror');
                }
            }
            if (s && s.dataFilter) {
                data = s.dataFilter(data, type);
            }
            if (typeof data === 'string') {
                if (type === 'json' || !type && ct.indexOf('json') >= 0) {
                    data = parseJSON(data);
                } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                    $.globalEval(data);
                }
            }
            return data;
        };

        return deferred;
    }
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *    is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *    used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
    options = options || {};
    options.delegation = options.delegation && $.isFunction($.fn.on);

    // in jQuery 1.3+ we can fix mistakes with the ready state
    if (!options.delegation && this.length === 0) {
        var o = { s: this.selector, c: this.context };
        if (!$.isReady && o.s) {
            log('DOM not ready, queuing ajaxForm');
            $(function() {
                $(o.s,o.c).ajaxForm(options);
            });
            return this;
        }
        // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
        log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
        return this;
    }

    if ( options.delegation ) {
        $(document)
            .off('submit.form-plugin', this.selector, doAjaxSubmit)
            .off('click.form-plugin', this.selector, captureSubmittingElement)
            .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
            .on('click.form-plugin', this.selector, options, captureSubmittingElement);
        return this;
    }

    return this.ajaxFormUnbind()
        .bind('submit.form-plugin', options, doAjaxSubmit)
        .bind('click.form-plugin', options, captureSubmittingElement);
};

// private event handlers
function doAjaxSubmit(e) {
    /*jshint validthis:true */
    var options = e.data;
    if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
        e.preventDefault();
        $(e.target).ajaxSubmit(options); // #365
    }
}

function captureSubmittingElement(e) {
    /*jshint validthis:true */
    var target = e.target;
    var $el = $(target);
    if (!($el.is("[type=submit],[type=image]"))) {
        // is this a child element of the submit el?  (ex: a span within a button)
        var t = $el.closest('[type=submit]');
        if (t.length === 0) {
            return;
        }
        target = t[0];
    }
    var form = this;
    form.clk = target;
    if (target.type == 'image') {
        if (e.offsetX !== undefined) {
            form.clk_x = e.offsetX;
            form.clk_y = e.offsetY;
        } else if (typeof $.fn.offset == 'function') {
            var offset = $el.offset();
            form.clk_x = e.pageX - offset.left;
            form.clk_y = e.pageY - offset.top;
        } else {
            form.clk_x = e.pageX - target.offsetLeft;
            form.clk_y = e.pageY - target.offsetTop;
        }
    }
    // clear form vars
    setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
}


// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
    return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic, elements) {
    var a = [];
    if (this.length === 0) {
        return a;
    }

    var form = this[0];
    var formId = this.attr('id');
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    var els2;

    if (els && !/MSIE [678]/.test(navigator.userAgent)) { // #390
        els = $(els).get();  // convert to standard array
    }

    // #386; account for inputs outside the form which use the 'form' attribute
    if ( formId ) {
        els2 = $(':input[form="' + formId + '"]').get(); // hat tip @thet
        if ( els2.length ) {
            els = (els || []).concat(els2);
        }
    }

    if (!els || !els.length) {
        return a;
    }

    var i,j,n,v,el,max,jmax;
    for(i=0, max=els.length; i < max; i++) {
        el = els[i];
        n = el.name;
        if (!n || el.disabled) {
            continue;
        }

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(form.clk == el) {
                a.push({name: n, value: $(el).val(), type: el.type });
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
            continue;
        }

        v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            if (elements) {
                elements.push(el);
            }
            for(j=0, jmax=v.length; j < jmax; j++) {
                a.push({name: n, value: v[j]});
            }
        }
        else if (feature.fileapi && el.type == 'file') {
            if (elements) {
                elements.push(el);
            }
            var files = el.files;
            if (files.length) {
                for (j=0; j < files.length; j++) {
                    a.push({name: n, value: files[j], type: el.type});
                }
            }
            else {
                // #180
                a.push({ name: n, value: '', type: el.type });
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            if (elements) {
                elements.push(el);
            }
            a.push({name: n, value: v, type: el.type, required: el.required});
        }
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle it here
        var $input = $(form.clk), input = $input[0];
        n = input.name;
        if (n && !input.disabled && input.type == 'image') {
            a.push({name: n, value: $input.val()});
            a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) {
            return;
        }
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++) {
                a.push({name: n, value: v[i]});
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            a.push({name: this.name, value: v});
        }
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *      <input name="A" type="text" />
 *      <input name="A" type="text" />
 *      <input name="B" type="checkbox" value="B1" />
 *      <input name="B" type="checkbox" value="B2"/>
 *      <input name="C" type="radio" value="C1" />
 *      <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $('input[type=text]').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $('input[type=checkbox]').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $('input[type=radio]').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *    array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
            continue;
        }
        if (v.constructor == Array) {
            $.merge(val, v);
        }
        else {
            val.push(v);
        }
    }
    return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (successful === undefined) {
        successful = true;
    }

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1)) {
            return null;
    }

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) {
            return null;
        }
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
                var v = op.value;
                if (!v) { // extra pain for IE...
                    v = (op.attributes && op.attributes.value && !(op.attributes.value.specified)) ? op.text : op.value;
                }
                if (one) {
                    return v;
                }
                a.push(v);
            }
        }
        return a;
    }
    return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function(includeHidden) {
    return this.each(function() {
        $('input,select,textarea', this).clearFields(includeHidden);
    });
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (re.test(t) || tag == 'textarea') {
            this.value = '';
        }
        else if (t == 'checkbox' || t == 'radio') {
            this.checked = false;
        }
        else if (tag == 'select') {
            this.selectedIndex = -1;
        }
        else if (t == "file") {
            if (/MSIE/.test(navigator.userAgent)) {
                $(this).replaceWith($(this).clone(true));
            } else {
                $(this).val('');
            }
        }
        else if (includeHidden) {
            // includeHidden can be the value true, or it can be a selector string
            // indicating a special test; for example:
            //  $('#myForm').clearForm('.special:hidden')
            // the above would clean hidden inputs that have the class of 'special'
            if ( (includeHidden === true && /hidden/.test(t)) ||
                 (typeof includeHidden == 'string' && $(this).is(includeHidden)) ) {
                this.value = '';
            }
        }
    });
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
            this.reset();
        }
    });
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
    if (b === undefined) {
        b = true;
    }
    return this.each(function() {
        this.disabled = !b;
    });
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
    if (select === undefined) {
        select = true;
    }
    return this.each(function() {
        var t = this.type;
        if (t == 'checkbox' || t == 'radio') {
            this.checked = select;
        }
        else if (this.tagName.toLowerCase() == 'option') {
            var $sel = $(this).parent('select');
            if (select && $sel[0] && $sel[0].type == 'select-one') {
                // deselect all other options
                $sel.find('option').selected(false);
            }
            this.selected = select;
        }
    });
};

// expose debug var
$.fn.ajaxSubmit.debug = false;

// helper fn for console logging
function log() {
    if (!$.fn.ajaxSubmit.debug) {
        return;
    }
    var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
    if (window.console && window.console.log) {
        window.console.log(msg);
    }
    else if (window.opera && window.opera.postError) {
        window.opera.postError(msg);
    }
}




/* - ++resource++plone.app.jquerytools.overlayhelpers.js - */
// http://localhost:8081/sunburst/portal_javascripts/++resource++plone.app.jquerytools.overlayhelpers.js?original=1
var pb={spinner:{},overlay_counter:1};jQuery.tools.overlay.conf.oneInstance=false;(function($){jQuery.tools.overlay.addEffect('default',
function(pos,onLoad){var conf=this.getConf(),w=$(window),ovl=this.getOverlay(),op=ovl.parent().offsetParent().offset();if(!conf.fixed){pos.top+=w.scrollTop()-op.top;pos.left+=w.scrollLeft()-op.left}
pos.position=conf.fixed?'fixed':'absolute';ovl.css(pos).fadeIn(conf.speed,onLoad)}, function(onClose){this.getOverlay().fadeOut(this.getConf().closeSpeed,onClose)});pb.spinner.show=function(){$('body').css('cursor','wait')};pb.spinner.hide=function(){$('body').css('cursor','')}}(jQuery));jQuery(function($){$.fn.prepOverlay=function(pba){return this.each(function(){var o,pbo,config,onBeforeLoad,onLoad,src,parts;o=$(this);pbo=$.extend(true,{'width':'60%'},pba);config=pbo.config||{};onBeforeLoad=pb[pbo.subtype];if(onBeforeLoad){config.onBeforeLoad=onBeforeLoad}
onLoad=config.onLoad;config.onLoad=function(){if(onLoad){onLoad.apply(this,arguments)}
pb.fi_focus(this.getOverlay())};src=o.attr('href')||o.attr('src')||o.attr('action');if(pbo.urlmatch){src=src.replace(new RegExp(pbo.urlmatch),pbo.urlreplace)}
if(pbo.subtype==='inline'){src=src.replace(/^.+#/,'#');$("[id='"+src.replace('#','')+"']").addClass('overlay');o.removeAttr('href').attr('rel',src);o.overlay()} else{pbo.nt='pb_'+pb.overlay_counter;pb.overlay_counter+=1;pbo.selector=pbo.filter||pbo.selector;if(!pbo.selector){parts=src.split(' ');src=parts.shift();pbo.selector=parts.join(' ')}
pbo.src=src;pbo.config=config;pbo.source=o;pb.remove_overlay(o);o.data('pbo',pbo);o.attr('rel','#'+pbo.nt);o.addClass('link-overlay');switch(pbo.subtype){case 'image':o.click(pb.image_click);break;case 'ajax':o.click(pb.ajax_click);break;case 'iframe':pb.create_content_div(pbo);o.overlay(config);break;default:throw "Unsupported overlay type"}
o.css('cursor','pointer')}})};pb.remove_overlay=function(o){var old_data=o.data('pbo');if(old_data){switch(old_data.subtype){case 'image':o.unbind('click',pb.image_click);break;case 'ajax':o.unbind('click',pb.ajax_click);break;default:o.unbind('click');break}
if(old_data.nt){$('#'+old_data.nt).remove()}}};pb.create_content_div=function(pbo,trigger){var content,close_message,pbw=pbo.width;if(typeof close_box_message==='undefined'){close_message='Close this box.'} else{close_message=close_box_message}
content=$('<div id="'+pbo.nt+'" class="overlay overlay-'+pbo.subtype+' '+(pbo.cssclass||'')+'"><div class="close"><a href="#" class="hiddenStructure" title="Close this box">'+close_message+'</a></div></div>');content.data('pbo',pbo);if(pbw){if(pbw.indexOf('%')>0){content.width(parseInt(pbw,10)/100 * $(window).width())} else{content.width(pbw)}}
content.appendTo($("body"));return content};pb.image_click=function(event){var ethis,content,api,img,el,pbo;ethis=$(this);pbo=ethis.data('pbo');content=$(ethis.attr('rel'));if(!content.length){content=pb.create_content_div(pbo);content.overlay(pbo.config)}
api=content.overlay();if(content.find('img').length===0){if(pbo.src){pb.spinner.show();img=new Image();img.src=pbo.src;el=$(img);content.append(el.addClass('pb-image'));el.load(function(){pb.spinner.hide();api.load()})}} else{api.load()}
return false};pb.fi_focus=function(jqo){if(!jqo.find("form div.error :input:first").focus().length){jqo.find("form :input:visible:first").focus()}};pb.ajax_error_recover=function(responseText,selector){var tcontent=$('<div/>').append(responseText.replace(/<script(.|\s)*?\/script>/gi,""));return selector?tcontent.find(selector):tcontent};pb.add_ajax_load=function(form){if(form.find('input[name=ajax_load]').length===0){form.prepend($('<input type="hidden" name="ajax_load" value="'+(new Date().getTime())+'" />'))}};pb.prep_ajax_form=function(form){var ajax_parent=form.closest('.pb-ajax'),data_parent=ajax_parent.closest('.overlay-ajax'),pbo=data_parent.data('pbo'),formtarget=pbo.formselector,closeselector=pbo.closeselector,beforepost=pbo.beforepost,afterpost=pbo.afterpost,noform=pbo.noform,api=data_parent.overlay(),selector=pbo.selector,options={};options.beforeSerialize=function(){pb.spinner.show()};if(beforepost){options.beforeSubmit=function(arr,form,options){return beforepost(form,arr,options)}}
options.success=function(responseText,statusText,xhr,form){$(document).trigger('formOverlayStart',[this,responseText,statusText,xhr,form]);var el,myform,success,target,scripts=[],filteredResponseText;success=statusText==="success"||statusText==="notmodified";if(!success){responseText=responseText.responseText}
filteredResponseText=responseText.replace(/<script(.|\s)*?\/script>/gi,"");el=$('<div />').append(selector?$('<div />').append(filteredResponseText).find(selector):filteredResponseText);if(success&&afterpost){afterpost(el,data_parent)}
myform=el.find(formtarget);if(success&&myform.length){ajax_parent.empty().append(el);try{$.buildFragment([responseText],[document],scripts)} catch(e){$.buildFragment([responseText],document,scripts)}
if(scripts.length){$.each(scripts, function(){$.globalEval(this.text||this.textContent||this.innerHTML||"")})}
if($.fn.ploneTabInit){el.ploneTabInit()}
pb.fi_focus(ajax_parent);pb.add_ajax_load(myform);myform.ajaxForm(options);if(closeselector){el.find(closeselector).click(function(event){api.close();return false})}
$(document).trigger('formOverlayLoadSuccess',[this,myform,api,pb,ajax_parent])} else{if(success){if(typeof noform==="function"){noform=noform(el,pbo)}} else{noform=statusText}
switch(noform){case 'close':api.close();break;case 'reload':api.close();pb.spinner.show();location.replace(location.href);break;case 'redirect':api.close();pb.spinner.show();target=pbo.redirect;if(typeof target==="function"){target=target(el,responseText,pbo)}
location.replace(target);break;default:if(el.children()){ajax_parent.empty().append(el)} else{api.close()}
break}
$(document).trigger('formOverlayLoadFailure',[this,myform,api,pb,ajax_parent,noform])}
pb.spinner.hide()};options.error=options.success;pb.add_ajax_load(form);form.ajaxForm(options)};pb.ajax_click=function(event){var ethis=$(this),pbo,content,api,src,el,selector,formtarget,closeselector,sep,scripts=[],e;e=$.Event();e.type="beforeAjaxClickHandled";$(document).trigger(e,[this,event]);if(e.isDefaultPrevented()){return false}
pbo=ethis.data('pbo');content=pb.create_content_div(pbo,ethis);content.overlay(pbo.config,ethis);api=content.overlay();src=pbo.src;selector=pbo.selector;formtarget=pbo.formselector;closeselector=pbo.closeselector;pb.spinner.show();$(this).find("input.submitting").removeClass('submitting');el=$('div.pb-ajax',content);if(el.length===0){el=$('<div class="pb-ajax" />');content.append(el)}
if(api.getConf().fixed){el.css('max-height',Math.floor($(window).height() * 0.75))}
sep=(src.indexOf('?')>=0)?'&':'?';src+=sep+"ajax_load="+(new Date().getTime());if(selector){src+=' '+selector}
el[0].handle_load_inside_overlay=function(responseText,errorText){var ele,target;ele=$(this);if(errorText==='error'){ele.append(pb.ajax_error_recover(responseText,selector))} else if(!responseText.length){ele.append(ajax_noresponse_message||'No response from server.')}
ele.wrapInner('<div />');if(formtarget){target=ele.find(formtarget);if(target.length>0){pb.prep_ajax_form(target)}}
if(closeselector){ele.find(closeselector).click(function(event){api.close();return false})}
try{$.buildFragment([responseText],[document],scripts)} catch(e){$.buildFragment([responseText],document,scripts)}
if(scripts.length){$.each(scripts, function(){$.globalEval(this.text||this.textContent||this.innerHTML||"")})}
if($.fn.ploneTabInit){ele.ploneTabInit()}
api.onClose=function(){content.remove()};$(document).trigger('loadInsideOverlay',[this,responseText,errorText,api])};el.load(src,null, function(responseText,errorText){el[0].handle_load_inside_overlay.apply(this,[responseText,errorText]);pb.spinner.hide();api.load();return true});return false};pb.iframe=function(){var content,pbo;pb.spinner.show();content=this.getOverlay();pbo=this.getTrigger().data('pbo');if(content.find('iframe').length===0&&pbo.src){content.append('<iframe src="'+pbo.src+'" width="'+content.width()+'" height="'+content.height()+'" onload="pb.spinner.hide()"/>')} else{pb.spinner.hide()}
return true}});

/* - ++resource++plone.app.jquerytools.dateinput.js - */
!function($,undefined){function dayAm(year,month){return new Date(year,month+1,0).getDate()}function zeropad(val,len){for(val=""+val,len=len||2;val.length<len;)val="0"+val;return val}function format(formatter,date,text,lang){var d=date.getDate(),D=date.getDay(),m=date.getMonth(),y=date.getFullYear(),flags={d:d,dd:zeropad(d),ddd:LABELS[lang].shortDays[D],dddd:LABELS[lang].days[D],m:m+1,mm:zeropad(m+1),mmm:LABELS[lang].shortMonths[m],mmmm:LABELS[lang].months[m],yy:String(y).slice(2),yyyy:y},ret=formatters[formatter](text,date,flags,lang);return tmpTag.html(ret).html()}function integer(val){return parseInt(val,10)}function isSameDay(d1,d2){return d1.getFullYear()===d2.getFullYear()&&d1.getMonth()==d2.getMonth()&&d1.getDate()==d2.getDate()}function parseDate(val){if(val!==undefined){if(val.constructor==Date)return val;if("string"==typeof val){var els=val.split("-");if(3==els.length)return new Date(integer(els[0]),integer(els[1])-1,integer(els[2]));if(!/^-?\d+$/.test(val))return;val=integer(val)}var date=new Date;return date.setDate(date.getDate()+val),date}}function Dateinput(input,conf){function select(date,conf,e){return input.attr("readonly")?void self.hide(e):(value=date,currYear=date.getFullYear(),currMonth=date.getMonth(),currDay=date.getDate(),e||(e=$.Event("api")),"click"!=e.type||/msie/.test(navigator.userAgent.toLowerCase())||input.focus(),e.type="beforeChange",fire.trigger(e,[date]),void(e.isDefaultPrevented()||(input.val(format(conf.formatter,date,conf.format,conf.lang)),e.type="change",e.target=input[0],fire.trigger(e),input.data("date",date),self.hide(e))))}function onShow(ev){ev.type="onShow",fire.trigger(ev),$(document).on("keydown.d",function(e){if(e.ctrlKey)return!0;var key=e.keyCode;if(8==key||46==key)return input.val(""),self.hide(e);if(27==key||9==key)return self.hide(e);if($(KEYS).index(key)>=0){if(!opened)return self.show(e),e.preventDefault();var days=$("#"+css.weeks+" a"),el=$("."+css.focus),index=days.index(el);return el.removeClass(css.focus),74==key||40==key?index+=7:75==key||38==key?index-=7:76==key||39==key?index+=1:(72==key||37==key)&&(index-=1),index>41?(self.addMonth(),el=$("#"+css.weeks+" a:eq("+(index-42)+")")):0>index?(self.addMonth(-1),el=$("#"+css.weeks+" a:eq("+(index+42)+")")):el=days.eq(index),el.addClass(css.focus),e.preventDefault()}return 34==key?self.addMonth():33==key?self.addMonth(-1):36==key?self.today():(13==key&&($(e.target).is("select")||$("."+css.focus).click()),$([16,17,18,9]).index(key)>=0)}),$(document).on("click.d",function(e){var el=e.target;el.id==css.root||$(el).parents("#"+css.root).length||el==input[0]||trigger&&el==trigger[0]||self.hide(e)})}var trigger,pm,nm,currYear,currMonth,currDay,opened,original,self=this,now=new Date,yearNow=now.getFullYear(),css=conf.css,labels=LABELS[conf.lang],root=$("#"+css.root),title=root.find("#"+css.title),value=input.attr("data-value")||conf.value||input.val(),min=input.attr("min")||conf.min,max=input.attr("max")||conf.max;if(0===min&&(min="0"),value=parseDate(value)||now,min=parseDate(min||new Date(yearNow+conf.yearRange[0],1,1)),max=parseDate(max||new Date(yearNow+conf.yearRange[1]+1,1,-1)),!labels)throw"Dateinput: invalid language: "+conf.lang;if("date"==input.attr("type")){var original=input.clone(),def=original.wrap("<div/>").parent().html(),clone=$(def.replace(/type/i,"type=text data-orig-type"));conf.value&&clone.val(conf.value),input.replaceWith(clone),input=clone}input.addClass(css.input);var fire=input.add(self);if(!root.length){if(root=$("<div><div><a/><div/><a/></div><div><div/><div/></div></div>").hide().css({position:"absolute"}).attr("id",css.root),root.children().eq(0).attr("id",css.head).end().eq(1).attr("id",css.body).children().eq(0).attr("id",css.days).end().eq(1).attr("id",css.weeks).end().end().end().find("a").eq(0).attr("id",css.prev).end().eq(1).attr("id",css.next),title=root.find("#"+css.head).find("div").attr("id",css.title),conf.selectors){var monthSelector=$("<select/>").attr("id",css.month),yearSelector=$("<select/>").attr("id",css.year);title.html(monthSelector.add(yearSelector))}for(var days=root.find("#"+css.days),d=0;7>d;d++)days.append($("<span/>").text(labels.shortDays[(d+conf.firstDay)%7]));$("body").append(root)}conf.trigger&&(trigger=$("<a/>").attr("href","#").addClass(css.trigger).click(function(e){return conf.toggle?self.toggle():self.show(),e.preventDefault()}).insertAfter(input));var weeks=root.find("#"+css.weeks);yearSelector=root.find("#"+css.year),monthSelector=root.find("#"+css.month),$.extend(self,{show:function(e){if(!input.attr("disabled")&&!opened&&(e=e||$.Event(),e.type="onBeforeShow",fire.trigger(e),!e.isDefaultPrevented())){$.each(instances,function(){this.hide()}),opened=!0,monthSelector.off("change").change(function(){self.setValue(integer(yearSelector.val()),integer($(this).val()))}),yearSelector.off("change").change(function(){self.setValue(integer($(this).val()),integer(monthSelector.val()))}),pm=root.find("#"+css.prev).off("click").click(function(){return pm.hasClass(css.disabled)||self.addMonth(-1),!1}),nm=root.find("#"+css.next).off("click").click(function(){return nm.hasClass(css.disabled)||self.addMonth(),!1}),self.setValue(value);var pos=input.offset();return/iPad/i.test(navigator.userAgent)&&(pos.top-=$(window).scrollTop()),root.css({top:pos.top+input.outerHeight(!0)+conf.offset[0],left:pos.left+conf.offset[1]}),conf.speed?root.show(conf.speed,function(){onShow(e)}):(root.show(),onShow(e)),self}},setValue:function(year,month,day){var date=integer(month)>=-1?new Date(integer(year),integer(month),integer(day==undefined||isNaN(day)?1:day)):year||value;if(min>date?date=min:date>max&&(date=max),"string"==typeof year&&(date=parseDate(year)),year=date.getFullYear(),month=date.getMonth(),day=date.getDate(),-1==month?(month=11,year--):12==month&&(month=0,year++),!opened)return select(date,conf),self;currMonth=month,currYear=year,currDay=day;var week,tmp=new Date(year,month,1-conf.firstDay),begin=tmp.getDay(),days=dayAm(year,month),prevDays=dayAm(year,month-1);if(conf.selectors){monthSelector.empty(),$.each(labels.months,function(i,m){min<new Date(year,i+1,1)&&max>new Date(year,i,0)&&monthSelector.append($("<option/>").html(m).attr("value",i))}),yearSelector.empty();for(var yearNow=now.getFullYear(),i=yearNow+conf.yearRange[0];i<yearNow+conf.yearRange[1];i++)min<new Date(i+1,0,1)&&max>new Date(i,0,0)&&yearSelector.append($("<option/>").text(i));monthSelector.val(month),yearSelector.val(year)}else title.html(labels.months[month]+" "+year);weeks.empty(),pm.add(nm).removeClass(css.disabled);for(var a,num,j=begin?0:-7;(begin?42:35)>j;j++)a=$("<a/>"),j%7===0&&(week=$("<div/>").addClass(css.week),weeks.append(week)),begin>j?(a.addClass(css.off),num=prevDays-begin+j+1,date=new Date(year,month-1,num)):j>=begin+days?(a.addClass(css.off),num=j-days-begin+1,date=new Date(year,month+1,num)):(num=j-begin+1,date=new Date(year,month,num),isSameDay(value,date)?a.attr("id",css.current).addClass(css.focus):isSameDay(now,date)&&a.attr("id",css.today)),min&&min>date&&a.add(pm).addClass(css.disabled),max&&date>max&&a.add(nm).addClass(css.disabled),a.attr("href","#"+num).text(num).data("date",date),week.append(a);return weeks.find("a").click(function(e){var el=$(this);return el.hasClass(css.disabled)||($("#"+css.current).removeAttr("id"),el.attr("id",css.current),select(el.data("date"),conf,e)),!1}),css.sunday&&weeks.find("."+css.week).each(function(){var beg=conf.firstDay?7-conf.firstDay:0;$(this).children().slice(beg,beg+1).addClass(css.sunday)}),self},setMin:function(val,fit){return min=parseDate(val),fit&&min>value&&self.setValue(min),self},setMax:function(val,fit){return max=parseDate(val),fit&&value>max&&self.setValue(max),self},today:function(){return self.setValue(now)},addDay:function(amount){return this.setValue(currYear,currMonth,currDay+(amount||1))},addMonth:function(amount){var targetMonth=currMonth+(amount||1),daysInTargetMonth=dayAm(currYear,targetMonth),targetDay=daysInTargetMonth>=currDay?currDay:daysInTargetMonth;return this.setValue(currYear,targetMonth,targetDay)},addYear:function(amount){return this.setValue(currYear+(amount||1),currMonth,currDay)},destroy:function(){input.add(document).off("click.d keydown.d"),root.add(trigger).remove(),input.removeData("dateinput").removeClass(css.input),original&&input.replaceWith(original)},hide:function(e){if(opened){if(e=$.Event(),e.type="onHide",fire.trigger(e),e.isDefaultPrevented())return;$(document).off("click.d keydown.d"),root.hide(),opened=!1}return self},toggle:function(){return self.isOpen()?self.hide():self.show()},getConf:function(){return conf},getInput:function(){return input},getCalendar:function(){return root},getValue:function(dateFormat){return dateFormat?format(conf.formatter,value,dateFormat,conf.lang):value},isOpen:function(){return opened}}),$.each(["onBeforeShow","onShow","change","onHide"],function(i,name){$.isFunction(conf[name])&&$(self).on(name,conf[name]),self[name]=function(fn){return fn&&$(self).on(name,fn),self}}),conf.editable||input.on("focus.d click.d",self.show).keydown(function(e){var key=e.keyCode;return!opened&&$(KEYS).index(key)>=0?(self.show(e),e.preventDefault()):((8==key||46==key)&&input.val(""),e.shiftKey||e.ctrlKey||e.altKey||9==key?!0:e.preventDefault())}),parseDate(input.val())&&select(value,conf)}$.tools=$.tools||{version:"@VERSION"};var tool,instances=[],formatters={},KEYS=[75,76,38,39,74,72,40,37],LABELS={};tool=$.tools.dateinput={conf:{format:"mm/dd/yy",formatter:"default",selectors:!1,yearRange:[-5,5],lang:"en",offset:[0,0],speed:0,firstDay:0,min:undefined,max:undefined,trigger:0,toggle:0,editable:0,css:{prefix:"cal",input:"date",root:0,head:0,title:0,prev:0,next:0,month:0,year:0,days:0,body:0,weeks:0,today:0,current:0,week:0,off:0,sunday:0,focus:0,disabled:0,trigger:0}},addFormatter:function(name,fn){formatters[name]=fn},localize:function(language,labels){$.each(labels,function(key,val){labels[key]=val.split(",")}),LABELS[language]=labels}},tool.localize("en",{months:"January,February,March,April,May,June,July,August,September,October,November,December",shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",days:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",shortDays:"Sun,Mon,Tue,Wed,Thu,Fri,Sat"});var tmpTag=$("<a/>");tool.addFormatter("default",function(text,date,flags){return text.replace(/d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*'/g,function($0){return $0 in flags?flags[$0]:$0})}),tool.addFormatter("prefixed",function(text,date,flags){return text.replace(/%(d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*')/g,function($0,$1){return $1 in flags?flags[$1]:$0})}),$.expr[":"].date=function(el){var type=el.getAttribute("type");return type&&"date"==type||!!$(el).data("dateinput")},$.fn.dateinput=function(conf){if(this.data("dateinput"))return this;conf=$.extend(!0,{},tool.conf,conf),$.each(conf.css,function(key,val){val||"prefix"==key||(conf.css[key]=(conf.css.prefix||"")+(val||key))});var els;return this.each(function(){var el=new Dateinput($(this),conf);instances.push(el);var input=el.getInput().data("dateinput",el);els=els?els.add(input):input}),els?els:this}}(jQuery);

/* - nodeutilities.js - */
// http://localhost:8081/sunburst/portal_javascripts/nodeutilities.js?original=1
function wrapNode(node,wrappertype,wrapperclass){jQuery(node).wrap('<'+wrappertype+'>').parent().addClass(wrapperclass)}
function nodeContained(innernode,outernode){return jQuery(innernode).parents().filter(function(){return this===outernode}).length>0}
function findContainer(node,func){var p=jQuery(node).parents().filter(func);return p.length?p.get(0):false}
function hasClassName(node,class_name){return jQuery(node).hasClass(class_name)}
function addClassName(node,class_name){jQuery(node).addClass(class_name)}
function removeClassName(node,class_name){jQuery(node).removeClass(class_name)}
function replaceClassName(node,old_class,new_class,ignore_missing){if(ignore_missing||jQuery(node).hasClass(old_class)){jQuery(node).removeClass(old_class).addClass(new_class)}}
function walkTextNodes(node,func,data){jQuery(node).find('*').andSelf().contents().each(function(){if(this.nodeType===3){func(this,data)}})}
function getInnerTextCompatible(node){return jQuery(node).text()}
function getInnerTextFast(node){return jQuery(node).text()}
function sortNodes(nodes,fetch_func,cmp_func){var SortNodeWrapper,items;SortNodeWrapper=function(node){this.value=fetch_func(node);this.cloned_node=node.cloneNode(true)};SortNodeWrapper.prototype.toString=function(){return this.value.toString?this.value.toString():this.value};items=jQuery(nodes).map(function(){return new SortNodeWrapper(this)});if(cmp_func){items.sort(cmp_func)} else{items.sort()}
jQuery.each(items, function(i){jQuery(nodes[i]).replace(this.cloned_node)})}
function copyChildNodes(srcNode,dstNode){jQuery(srcNode).children().clone().appendTo(jQuery(dstNode))}


/* - cookie_functions.js - */
// http://localhost:8081/sunburst/portal_javascripts/cookie_functions.js?original=1
function createCookie(name,value,days){var date,expires;if(days){date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toGMTString()} else{expires=""}
document.cookie=name+"="+escape(value)+expires+"; path=/;"}
function readCookie(name){var nameEQ=name+"=",ca=document.cookie.split(';'),i,c;for(i=0;i<ca.length;i=i+1){c=ca[i];while(c.charAt(0)===' '){c=c.substring(1,c.length)}
if(c.indexOf(nameEQ)===0){return unescape(c.substring(nameEQ.length,c.length))}}
return null}


/* - modernizr.js - */
// http://localhost:8081/sunburst/portal_javascripts/modernizr.js?original=1
;window.Modernizr=function(a,b,c){function H(){e.input=function(a){for(var b=0,c=a.length;b<c;b++)t[a[b]]=a[b]in l;return t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)l.setAttribute("type",f=a[d]),e=l.type!=="text",e&&(l.value=m,l.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&l.style.WebkitAppearance!==c?(g.appendChild(l),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(l,null).WebkitAppearance!=="textfield"&&l.offsetHeight!==0,g.removeChild(l)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=l.checkValidity&&l.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(l),g.offsetWidth,e=l.value!=m,g.removeChild(l)):e=l.value!=m)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function F(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+p.join(c+" ")+c).split(" ");return E(d,b)}function E(a,b){for(var d in a)if(k[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function D(a,b){return!!~(""+a).indexOf(b)}function C(a,b){return typeof a===b}function B(a,b){return A(o.join(a+";")+(b||""))}function A(a){k.cssText=a}var d="2.0.4",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l=b.createElement("input"),m=":)",n=Object.prototype.toString,o=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),p="Webkit Moz O ms Khtml".split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v=function(a,c,d,e){var f,h,j,k=b.createElement("div");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:i+(d+1),k.appendChild(j);f=["&shy;","<style>",a,"</style>"].join(""),k.id=i,k.innerHTML+=f,g.appendChild(k),h=c(k,a),k.parentNode.removeChild(k);return!!h},w=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),x,y={}.hasOwnProperty,z;!C(y,c)&&!C(y.call,c)?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],c)};var G=function(c,d){var f=c.join(""),g=d.length;v(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||j.touch.offsetTop===9,e.csstransforms3d=j.csstransforms3d.offsetLeft===9,e.generatedcontent=j.generatedcontent.offsetHeight>=1,e.fontface=/src/i.test(h)&&h.indexOf(d.split(" ")[0])===0},g,d)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",o.join("touch-enabled),("),i,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",o.join("transform-3d),("),i,")","{#csstransforms3d{left:9px;position:absolute}}"].join(""),['#generatedcontent:after{content:"',m,'"}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]);r.flexbox=function(){function c(a,b,c,d){a.style.cssText=o.join(b+":"+c+";")+(d||"")}function a(a,b,c,d){b+=":",a.style.cssText=(b+o.join(c+";"+b)).slice(0,-b.length)+(d||"")}var d=b.createElement("div"),e=b.createElement("div");a(d,"display","box","width:42px;padding:0;"),c(e,"box-flex","1","width:10px;"),d.appendChild(e),g.appendChild(d);var f=e.offsetWidth===42;d.removeChild(e),g.removeChild(d);return f},r.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},r.canvastext=function(){return!!e.canvas&&!!C(b.createElement("canvas").getContext("2d").fillText,"function")},r.webgl=function(){return!!a.WebGLRenderingContext},r.touch=function(){return e.touch},r.geolocation=function(){return!!navigator.geolocation},r.postmessage=function(){return!!a.postMessage},r.websqldatabase=function(){var b=!!a.openDatabase;return b},r.indexedDB=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b].toLowerCase()+"IndexedDB"])return!0;return!!a.indexedDB},r.hashchange=function(){return w("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},r.history=function(){return!!a.history&&!!history.pushState},r.draganddrop=function(){return w("dragstart")&&w("drop")},r.websockets=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b]+"WebSocket"])return!0;return"WebSocket"in a},r.rgba=function(){A("background-color:rgba(150,255,150,.5)");return D(k.backgroundColor,"rgba")},r.hsla=function(){A("background-color:hsla(120,40%,100%,.5)");return D(k.backgroundColor,"rgba")||D(k.backgroundColor,"hsla")},r.multiplebgs=function(){A("background:url(https://),url(https://),red url(https://)");return/(url\s*\(.*?){3}/.test(k.background)},r.backgroundsize=function(){return F("backgroundSize")},r.borderimage=function(){return F("borderImage")},r.borderradius=function(){return F("borderRadius")},r.boxshadow=function(){return F("boxShadow")},r.textshadow=function(){return b.createElement("div").style.textShadow===""},r.opacity=function(){B("opacity:.55");return/^0.55$/.test(k.opacity)},r.cssanimations=function(){return F("animationName")},r.csscolumns=function(){return F("columnCount")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";A((a+o.join(b+a)+o.join(c+a)).slice(0,-a.length));return D(k.backgroundImage,"gradient")},r.cssreflections=function(){return F("boxReflect")},r.csstransforms=function(){return!!E(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},r.csstransforms3d=function(){var a=!!E(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in g.style&&(a=e.csstransforms3d);return a},r.csstransitions=function(){return F("transitionProperty")},r.fontface=function(){return e.fontface},r.generatedcontent=function(){return e.generatedcontent},r.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType){c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"');var d='video/mp4; codecs="avc1.42E01E';c.h264=a.canPlayType(d+'"')||a.canPlayType(d+', mp4a.40.2"'),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}}catch(e){}return c},r.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"'),c.mp3=a.canPlayType("audio/mpeg;"),c.wav=a.canPlayType('audio/wav; codecs="1"'),c.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")}catch(d){}return c},r.localstorage=function(){try{return!!localStorage.getItem}catch(a){return!1}},r.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(a){return!1}},r.webworkers=function(){return!!a.Worker},r.applicationcache=function(){return!!a.applicationCache},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.inlinesvg=function(){var a=b.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==q.svg},r.smil=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"animate")))},r.svgclippaths=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"clipPath")))};for(var I in r)z(r,I)&&(x=I.toLowerCase(),e[x]=r[I](),u.push((e[x]?"":"no-")+x));e.input||H(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return;b=typeof b=="boolean"?b:!!b(),g.className+=" "+(b?"":"no-")+a,e[a]=b}return e},A(""),j=l=null,a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function s(a){var b=-1;while(++b<g)a.createElement(f[b])}a.iepp=a.iepp||{};var d=a.iepp,e=d.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",f=e.split("|"),g=f.length,h=new RegExp("(^|\\s)("+e+")","gi"),i=new RegExp("<(/*)("+e+")","gi"),j=/^\s*[\{\}]\s*$/,k=new RegExp("(^|[^\\n]*?\\s)("+e+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),l=b.createDocumentFragment(),m=b.documentElement,n=m.firstChild,o=b.createElement("body"),p=b.createElement("style"),q=/print|all/,r;d.getCSS=function(a,b){if(a+""===c)return"";var e=-1,f=a.length,g,h=[];while(++e<f){g=a[e];if(g.disabled)continue;b=g.media||b,q.test(b)&&h.push(d.getCSS(g.imports,b),g.cssText),b="all"}return h.join("")},d.parseCSS=function(a){var b=[],c;while((c=k.exec(a))!=null)b.push(((j.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(h,"$1.iepp_$2")+c[4]);return b.join("\n")},d.writeHTML=function(){var a=-1;r=r||b.body;while(++a<g){var c=b.getElementsByTagName(f[a]),d=c.length,e=-1;while(++e<d)c[e].className.indexOf("iepp_")<0&&(c[e].className+=" iepp_"+f[a])}l.appendChild(r),m.appendChild(o),o.className=r.className,o.id=r.id,o.innerHTML=r.innerHTML.replace(i,"<$1font")},d._beforePrint=function(){p.styleSheet.cssText=d.parseCSS(d.getCSS(b.styleSheets,"all")),d.writeHTML()},d.restoreHTML=function(){o.innerHTML="",m.removeChild(o),m.appendChild(r)},d._afterPrint=function(){d.restoreHTML(),p.styleSheet.cssText=""},s(b),s(l);d.disablePP||(n.insertBefore(p,n.firstChild),p.media="print",p.className="iepp-printshim",a.attachEvent("onbeforeprint",d._beforePrint),a.attachEvent("onafterprint",d._afterPrint))}(a,b),e._version=d,e._prefixes=o,e._domPrefixes=p,e.hasEvent=w,e.testProp=function(a){return E([a])},e.testAllProps=F,e.testStyles=v,g.className=g.className.replace(/\bno-js\b/,"")+(f?" js "+u.join(" "):"");return e}(this,this.document),function(a,b,c){function k(a){return!a||a=="loaded"||a=="complete"}function j(){var a=1,b=-1;while(p.length- ++b)if(p[b].s&&!(a=p[b].r))break;a&&g()}function i(a){var c=b.createElement("script"),d;c.src=a.s,c.onreadystatechange=c.onload=function(){!d&&k(c.readyState)&&(d=1,j(),c.onload=c.onreadystatechange=null)},m(function(){d||(d=1,j())},H.errorTimeout),a.e?c.onload():n.parentNode.insertBefore(c,n)}function h(a){var c=b.createElement("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css",!a.e&&(w||r)?function a(b){m(function(){if(!d)try{b.sheet.cssRules.length?(d=1,j()):a(b)}catch(c){c.code==1e3||c.message=="security"||c.message=="denied"?(d=1,m(function(){j()},0)):a(b)}},0)}(c):(c.onload=function(){d||(d=1,m(function(){j()},0))},a.e&&c.onload()),m(function(){d||(d=1,j())},H.errorTimeout),!a.e&&n.parentNode.insertBefore(c,n)}function g(){var a=p.shift();q=1,a?a.t?m(function(){a.t=="c"?h(a):i(a)},0):(a(),j()):q=0}function f(a,c,d,e,f,h){function i(){!o&&k(l.readyState)&&(r.r=o=1,!q&&j(),l.onload=l.onreadystatechange=null,m(function(){u.removeChild(l)},0))}var l=b.createElement(a),o=0,r={t:d,s:c,e:h};l.src=l.data=c,!s&&(l.style.display="none"),l.width=l.height="0",a!="object"&&(l.type=d),l.onload=l.onreadystatechange=i,a=="img"?l.onerror=i:a=="script"&&(l.onerror=function(){r.e=r.r=1,g()}),p.splice(e,0,r),u.insertBefore(l,s?null:n),m(function(){o||(u.removeChild(l),r.r=r.e=o=1,j())},H.errorTimeout)}function e(a,b,c){var d=b=="c"?z:y;q=0,b=b||"j",C(a)?f(d,a,b,this.i++,l,c):(p.splice(this.i++,0,a),p.length==1&&g());return this}function d(){var a=H;a.loader={load:e,i:0};return a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=r&&!s,u=s?l:n.parentNode,v=a.opera&&o.call(a.opera)=="[object Opera]",w="webkitAppearance"in l.style,x=w&&"async"in b.createElement("script"),y=r?"object":v||x?"img":"script",z=w?"img":y,A=Array.isArray||function(a){return o.call(a)=="[object Array]"},B=function(a){return typeof a=="object"},C=function(a){return typeof a=="string"},D=function(a){return o.call(a)=="[object Function]"},E=[],F={},G,H;H=function(a){function f(a){var b=a.split("!"),c=E.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(h=0;h<e;h++)g=F[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=E[h](f);return f}function e(a,b,e,g,h){var i=f(a),j=i.autoCallback;if(!i.bypass){b&&(b=D(b)?b:b[a]||b[g]||b[a.split("/").pop().split("?")[0]]);if(i.instead)return i.instead(a,b,e,g,h);e.load(i.url,i.forceCSS||!i.forceJS&&/css$/.test(i.url)?"c":c,i.noexec),(D(b)||D(j))&&e.load(function(){d(),b&&b(i.origUrl,h,g),j&&j(i.origUrl,h,g)})}}function b(a,b){function c(a){if(C(a))e(a,h,b,0,d);else if(B(a))for(i in a)a.hasOwnProperty(i)&&e(a[i],h,b,i,d)}var d=!!a.test,f=d?a.yep:a.nope,g=a.load||a.both,h=a.callback,i;c(f),c(g),a.complete&&b.load(a.complete)}var g,h,i=this.yepnope.loader;if(C(a))e(a,0,i,0);else if(A(a))for(g=0;g<a.length;g++)h=a[g],C(h)?e(h,0,i,0):A(h)?H(h):B(h)&&b(h,i);else B(a)&&b(a,i)},H.addPrefix=function(a,b){F[a]=b},H.addFilter=function(a){E.push(a)},H.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",G=function(){b.removeEventListener("DOMContentLoaded",G,0),b.readyState="complete"},0)),a.yepnope=d()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/* - livesearch.js - */
// http://localhost:8081/sunburst/portal_javascripts/livesearch.js?original=1
var livesearch=(function(){var _2=400,_7=400,_0={},_1="LSHighlight";function _5(f,i){var l=null,r=null,c={},re=f.find('div.LSResult'),q=f.attr('action').replace(f.data('action')||'@@search',re.data('livesearch')||'livesearch_reply'),s=f.find('div.LSShadow'),p=f.find('input[name="path"]');function _12(){re.hide();l=null}function _6(){window.setTimeout('livesearch.hide("'+f.attr('id')+'")',_7)}function _11(d){re.show();s.html(d)}function _14(){if(l===i.value){return}l=i.value;if(r&&r.readyState<4){r.abort()}if(i.value.length<2){_12();return}var qu={q:i.value};if(p.length&&p[0].checked){qu.path=p.val()}qu=jQuery.param(qu);if(c[qu]){_11(c[qu]);return}r=jQuery.get(q,qu,function(d){_11(d);c[qu]=d},'text')}function _4(){window.setTimeout('livesearch.search("'+f.attr('id')+'")',_2)}return{hide:_12,hide_delayed:_6,search:_14,search_delayed:_4}}function _3(f){var t=null,re=f.find('div.LSResult'),s=f.find('div.LSShadow');function _16(){var c=s.find('li.LSHighlight').removeClass(_1),p=c.prev('li');if(!p.length){p=s.find('li:last')}p.addClass(_1);return false}function _9(){var c=s.find('li.LSHighlight').removeClass(_1),n=c.next('li');if(!n.length){n=s.find('li:first')}n.addClass(_1);return false}function _8(){s.find('li.LSHighlight').removeClass(_1);re.hide()}function _10(e){window.clearTimeout(t);switch(e.keyCode){case 38:return _16();case 40:return _9();case 27:return _8();case 37:break;case 39:break;default:t=window.setTimeout('livesearch.search("'+f.attr('id')+'")',_2)}}function _13(){var t=s.find('li.LSHighlight a').attr('href');if(!t){return}window.location=t;return false}return{handler:_10,submit:_13}}function _15(i){var i='livesearch'+i,f=jQuery(this).parents('form:first'),k=_3(f);_0[i]=_5(f,this);f.attr('id',i).submit(k.submit);jQuery(this).attr('autocomplete','off').keydown(k.handler).focus(_0[i].search_delayed).blur(_0[i].hide_delayed)}jQuery(function(){jQuery("#searchGadget,input.portlet-search-gadget").each(_15)});return{search:function(id){_0[id].search()},hide:function(id){_0[id].hide()}}}());

/* - ++resource++search.js - */
// http://localhost:8081/sunburst/portal_javascripts/++resource++search.js?original=1
jQuery(function($){var query,pushState,popped,initialURL,$default_res_container=$('#search-results'),$search_filter=$('#search-filter'),$search_field=$('#search-field'),$search_gadget=$('#searchGadget'),$form_search_page=$("form.searchPage"),navigation_root_url=$('link[rel="home"]').attr('href')||window.navigation_root_url||window.portal_url;$.fn.pullSearchResults=function(query){return this.each(function(){var $container=$(this);$.get('@@updated_search',query,
function(data){$container.hide();var $ajax_search_res=$('<div id="ajax-search-res"></div>').html(data),$search_term=$('#search-term');var $data_res=$ajax_search_res.find('#search-results').children(),data_search_term=$ajax_search_res.find('#updated-search-term').text(),data_res_number=$ajax_search_res.find('#updated-search-results-number').text(),data_sorting_opt=$ajax_search_res.find('#updated-sorting-options').html();$container.html($data_res);$container.fadeIn();if(!$search_term.length){$search_term=$('<strong id="search-term" />').appendTo('h1.documentFirstHeading')}
$search_term.text(data_search_term);$('#search-results-number').text(data_res_number);$('#search-results-bar').find('#sorting-options').html(data_sorting_opt);$('#rss-subscription').find('a.link-feed').attr('href', function(){return navigation_root_url+'/search_rss?'+query})})})};pushState=function(query){if(Modernizr.history){var url=navigation_root_url+'/@@search?'+query;history.pushState(null,null,url)}};popped=(window.history&&'state' in window.history);initialURL=location.href;$(window).bind('popstate', function(event){var initialPop,str;initialPop=!popped&&location.href===initialURL;popped=true;if(initialPop){return}
if(!location.search){return}
query=location.search.split('?')[1];var results=query.match(/SearchableText=[^&]*/);if(results){str=results[0];str=decodeURIComponent(str.replace(/\+/g, ' ')); // we remove '+' used between words
$.merge($search_field.find('input[name="SearchableText"]'),$search_gadget).val(str.substr(15,str.length));$default_res_container.pullSearchResults(query)}});$search_filter.find('input.searchPage[type="submit"]').hide();$search_field.find('input.searchButton').click(function(e){var st,queryString=location.search.substring(1),re=/([^&=]+)=([^&]*)/g,m,queryParameters=[],key;st=$search_field.find('input[name="SearchableText"]').val();queryParameters.push({"name":"SearchableText","value":st});while(m=re.exec(queryString)){key=decodeURIComponent(m[1]);if(key!=='SearchableText'){queryParameters.push({"name":key,"value":decodeURIComponent(m[2].replace(/\+/g,' '))})}}
queryString=$.param(queryParameters);$default_res_container.pullSearchResults(queryString);pushState(queryString);e.preventDefault()});$form_search_page.submit(function(e){query=$(this).serialize();$default_res_container.pullSearchResults(query);pushState(query);e.preventDefault()});$search_field.find('input[name="SearchableText"]').keyup(function(){$search_gadget.val($(this).val())});$('#search-results-bar').find('dl.actionMenu > dd.actionMenuContent').click(function(e){e.stopImmediatePropagation()});$search_filter.delegate('input, select','change',
function(e){query='';if($search_filter.find('input:checked').length>1){query=$form_search_page.serialize()}
$default_res_container.pullSearchResults(query);pushState(query)});$('#sorting-options').delegate('a','click', function(e){if($(this).attr('data-sort')){$form_search_page.find("input[name='sort_on']").val($(this).attr('data-sort'))}
else{$form_search_page.find("input[name='sort_on']").val('')}
query=this.search.split('?')[1];$default_res_container.pullSearchResults(query);pushState(query);e.preventDefault()});$default_res_container.delegate('.listingBar a','click', function(e){query=this.search.split('?')[1];$default_res_container.pullSearchResults(query);pushState(query);e.preventDefault()})});

/* - select_all.js - */
// http://localhost:8081/sunburst/portal_javascripts/select_all.js?original=1
function toggleSelect(selectbutton,id,initialState,formName){if (/MSIE [5-8]\./.test(navigator.userAgent)&&event.type==="change"&&/toggleSelect\(/.test(selectbutton.onchange.toString())){return}
var fid,state,base;fid=id||'ids:list';state=selectbutton.isSelected;if(state===undefined){state=Boolean(initialState)}
selectbutton.isSelected=!state;jQuery(selectbutton).attr('src',portal_url+'/select_'+(state?'all':'none')+'_icon.png');base=formName?jQuery(document.forms[formName]):jQuery(document);base.find('input[name="'+fid+'"]:checkbox').attr('checked',!state)}


/* - dragdropreorder.js - */
// http://localhost:8081/sunburst/portal_javascripts/dragdropreorder.js?original=1
var ploneDnDReorder={};ploneDnDReorder.dragging=null;ploneDnDReorder.table=null;ploneDnDReorder.rows=null;ploneDnDReorder.locked=false;(function($){ploneDnDReorder.doDown=function(e){var dragging=ploneDnDReorder.dragging,body;if(ploneDnDReorder.locked){return}
if(dragging){if($(this).attr('id')!==dragging.attr('id')){ploneDnDReorder.locked=true;dragging.removeClass('dragging').addClass('error')}
return}
dragging=$(this).parents('.draggable:first');if(!dragging.length){return}
ploneDnDReorder.rows.mousemove(ploneDnDReorder.doDrag);body=$('body');body.mouseup(ploneDnDReorder.doUp);body.mouseleave(ploneDnDReorder.doCancel);ploneDnDReorder.dragging=dragging;dragging.data('ploneDnDReorder.startPosition',ploneDnDReorder.getPos(dragging));dragging.addClass("dragging");$(this).parents('tr').addClass('dragindicator');dragging.data('ploneDnDReorder.subset_ids',$.map(ploneDnDReorder.table.find('tr.draggable'),
function(elem){return $(elem).attr('id').substr('folder-contents-item-'.length)}));return false};ploneDnDReorder.getPos=function(node){var pos=node.parent().children('.draggable').index(node[0]);return pos===-1?null:pos};ploneDnDReorder.doDrag=function(e){var dragging=ploneDnDReorder.dragging,target=this;if(!dragging){return}
if(!target){return}
if($(target).attr('id')!==dragging.attr('id')){ploneDnDReorder.swapElements($(target),dragging)}
return false};ploneDnDReorder.swapElements=function(child1,child2){var parent=child1.parent(),items=parent.children('[id]'),t;if(Math.abs(ploneDnDReorder.getPos(child1)-ploneDnDReorder.getPos(child2))!==1){return}
items.removeClass('even').removeClass('odd');if(child1[0].swapNode){child1[0].swapNode(child2[0])} else{t=parent[0].insertBefore(document.createTextNode(''),child1[0]);child1.insertBefore(child2);child2.insertBefore(t);$(t).remove()}
parent.children('[id]:odd').addClass('even');parent.children('[id]:even').addClass('odd')};ploneDnDReorder.doUp=function(e){var dragging=ploneDnDReorder.dragging,body=$('body');if(!dragging){return}
ploneDnDReorder.updatePositionOnServer();dragging.removeData('ploneDnDReorder.startPosition');dragging.removeData('ploneDnDReorder.subset_ids');ploneDnDReorder.rows.unbind('mousemove',ploneDnDReorder.doDrag);body.unbind('mouseup',ploneDnDReorder.doUp);body.unbind('mouseleave',ploneDnDReorder.doCancel);$(this).parents('tr').removeClass('dragindicator');return false};ploneDnDReorder.doCancel=function(e){var dragging=ploneDnDReorder.dragging,body=$('body');if(!dragging){return}
dragging.removeClass("dragging");dragging.removeClass('dragindicator');if(ploneDnDReorder.getPos(dragging)-dragging.data('ploneDnDReorder.startPosition')){ploneDnDReorder.locked=true;dragging.addClass("error")}
ploneDnDReorder.rows.unbind('mousemove',ploneDnDReorder.doDrag);body.unbind('mouseup',ploneDnDReorder.doCancel);body.unbind('mouseleave',ploneDnDReorder.doCancel);ploneDnDReorder.dragging=null;return false};ploneDnDReorder.updatePositionOnServer=function(){var dragging=ploneDnDReorder.dragging,delta,args,encoded;if(!dragging){return}
delta=ploneDnDReorder.getPos(dragging)-dragging.data('ploneDnDReorder.startPosition');if(delta===0){ploneDnDReorder.doCancel.call();return}
args={item_id:dragging.attr('id').substr('folder-contents-item-'.length),subset_ids:dragging.data('ploneDnDReorder.subset_ids')};args['delta:int']=delta;encoded=$.param(args).replace(/%5B%5D=/g,'%3Alist=');$.ajax({type:'POST',url:'folder_moveitem',data:encoded,complete:ploneDnDReorder.complete});ploneDnDReorder.locked=true};ploneDnDReorder.complete=function(xhr,textStatus){var dragging=ploneDnDReorder.dragging;dragging.removeClass("dragging");dragging.removeClass('dragindicator');if(textStatus==="success"||textStatus==="notmodified"){ploneDnDReorder.locked=false} else{dragging.addClass("error")}
ploneDnDReorder.dragging=null}}(jQuery));
function initializeDnDReorder(table_selector){var table=table_selector;ploneDnDReorder.table=jQuery(table);if(!ploneDnDReorder.table.length)
return;ploneDnDReorder.rows=jQuery(table+" > tr,"+table+" > tbody > tr");jQuery(table+" > tr > td.draggable,"+table+" > tbody > tr > td.draggable").not('.notDraggable').mousedown(ploneDnDReorder.doDown).mouseup(ploneDnDReorder.doUp).addClass("draggingHook").css("cursor","ns-resize").html('&#x28ff;')}
$(document).ready(function(){initializeDnDReorder('#listing-table')});

/* - form_tabbing.js - */
// http://localhost:8081/sunburst/portal_javascripts/form_tabbing.js?original=1
var ploneFormTabbing={jqtConfig:{current:'selected'},max_tabs:6};(function($){ploneFormTabbing._buildTabs=function(container,legends){var threshold=legends.length>ploneFormTabbing.max_tabs;var panel_ids,tab_ids=[],tabs='';for(var i=0;i<legends.length;i++){var className,tab,legend=legends[i],lid=legend.id;tab_ids[i]='#'+lid;switch(i){case(0):className='class="formTab firstFormTab"';break;case(legends.length-1):className='class="formTab lastFormTab"';break;default:className='class="formTab"';break}
if(threshold){tab='<option '+className+' id="'+lid+'" value="'+lid+'">';tab+=$(legend).text()+'</option>'} else{tab='<li '+className+'><a id="'+lid+'" href="#'+lid+'"><span>';tab+=$(legend).text()+'</span></a></li>'}
tabs+=tab;$(legend).css({'visibility':'hidden','font-size':'0','padding':'0','height':'0','width':'0','line-height':'0'})}
tab_ids=tab_ids.join(',');panel_ids=tab_ids.replace(/#fieldsetlegend-/g,"#fieldset-");if(threshold){tabs=$('<select class="formTabs">'+tabs+'</select>');tabs.change(function(){var selected=$(this).attr('value');$(this).parent().find('option#'+selected).click()})} else{tabs=$('<ul class="formTabs">'+tabs+'</ul>')}
return tabs};ploneFormTabbing.initializeDL=function(){var ftabs=$(ploneFormTabbing._buildTabs(this,$(this).children('dt')));var targets=$(this).children('dd');$(this).before(ftabs);targets.addClass('formPanel');ftabs.tabs(targets,ploneFormTabbing.jqtConfig)};ploneFormTabbing.initializeForm=function(){var jqForm=$(this);var fieldsets=jqForm.children('fieldset');if(!fieldsets.length){return}
var ftabs=ploneFormTabbing._buildTabs(this,fieldsets.children('legend'));$(this).prepend(ftabs);fieldsets.addClass("formPanel");$(this).find('input[name="fieldset"]').addClass('noUnloadProtection');$(this).find('.formPanel:has(div.field span.required)').each(function(){var id=this.id.replace(/^fieldset-/,"#fieldsetlegend-");$(id).addClass('required')});var initialIndex=0;var count=0;var found=false;$(this).find('.formPanel').each(function(){if(!found&&$(this).find('div.field.error').length!=0){initialIndex=count;found=true}
count+=1});var tabSelector='ul.formTabs';if($(ftabs).is('select.formTabs')){tabSelector='select.formTabs'}
var tabsConfig=$.extend({},ploneFormTabbing.jqtConfig,{'initialIndex':initialIndex});jqForm.children(tabSelector).tabs(jqForm.children('fieldset.formPanel'),tabsConfig);jqForm.submit(function(){var selected;if(ftabs.find('a.selected').length>=1){selected=ftabs.find('a.selected').attr('href').replace(/^#fieldsetlegend-/,"#fieldset-")}
else{selected=ftabs.attr('value').replace(/^fieldsetlegend-/,'#fieldset-')}
var fsInput=jqForm.find('input[name="fieldset"]');if(selected&&fsInput){fsInput.val(selected)}});$("#archetypes-schemata-links").addClass('hiddenStructure');$("div.formControls input[name='form.button.previous'],"+"div.formControls input[name='form.button.next']").remove()};$.fn.ploneTabInit=function(pbo){return this.each(function(){var item=$(this);item.find("form.enableFormTabbing,div.enableFormTabbing").each(ploneFormTabbing.initializeForm);item.find("dl.enableFormTabbing").each(ploneFormTabbing.initializeDL);var targetPane=item.find('.enableFormTabbing input[name="fieldset"]').val()||window.location.hash;if(targetPane){item.find('.enableFormTabbing .formTabs [id="'+targetPane.replace('#','').replace('"','').replace(/^fieldset-/,"fieldsetlegend-")+'"]').click()}})};ploneFormTabbing.initialize=function(){$('body').ploneTabInit()}})(jQuery);jQuery(function(){ploneFormTabbing.initialize()});

/* - popupforms.js - */
// http://localhost:8081/sunburst/portal_javascripts/popupforms.js?original=1
function msieversion(){var ua=window.navigator.userAgent;var msie=ua.indexOf("MSIE ");if(msie>0){return parseInt(ua.substring(msie+5,ua.indexOf(".",msie)))} else{return 0}}
var common_content_filter='#content>*:not(div.configlet),dl.portalMessage.error,dl.portalMessage.info';jQuery.extend(jQuery.tools.overlay.conf,{fixed:false,speed:'fast',mask:{color:'#fff',opacity:0.4,loadSpeed:0,closeSpeed:0}});(function($){$.plonepopups=$.plonepopups||{};$.extend($.plonepopups,{noformerrorshow: function noformerrorshow(el,noform){var o=$(el),emsg=o.find('dl.portalMessage.error');if(emsg.length){o.children().replaceWith(emsg);return false} else{return noform}},redirectbasehref: function redirectbasehref(el,responseText){var mo=responseText.match(/<base href="(\S+?)"/i);if(mo.length===2){return mo[1]}
return location}})})(jQuery);jQuery(function($){if(msieversion()>0&&msieversion()<7){return}
$('#portal-personaltools a[href$="/login"], #portal-personaltools a[href$="/login_form"], .discussion a[href$="/login"], .discussion a[href$="/login_form"]').prepOverlay({subtype:'ajax',filter:common_content_filter,formselector:'form#login_form',cssclass:'overlay-login',noform: function(){if(location.href.search(/pwreset_finish$/)>=0){return 'redirect'} else{return 'reload'}},redirect: function(){var href=location.href;if(href.search(/pwreset_finish$/)>=0){return href.slice(0,href.length-14)+'logged_in'} else{return href}}});$('#siteaction-contact a').prepOverlay({subtype:'ajax',filter:common_content_filter,cssclass:'overlay-contact',formselector:'form[name="feedback_form"]',noform: function(el){return $.plonepopups.noformerrorshow(el,'close')}});$('#contextSetDefaultPage, #folderChangeDefaultPage').prepOverlay({subtype:'ajax',filter:common_content_filter,cssclass:'overlay-default_view',formselector:'form[name="default_page_form"]',noform: function(el){return $.plonepopups.noformerrorshow(el,'reload')},closeselector:'[name="form.button.Cancel"]',width:'40%'});$('dl#plone-contentmenu-actions a#plone-contentmenu-actions-delete').prepOverlay({subtype:'ajax',filter:common_content_filter,formselector:'#delete_confirmation',cssclass:'overlay-delete',noform: function(el){return $.plonepopups.noformerrorshow(el,'redirect')},redirect:$.plonepopups.redirectbasehref,closeselector:'[name="form.button.Cancel"]',width:'50%'});$('dl#plone-contentmenu-actions a#plone-contentmenu-actions-rename').prepOverlay({subtype:'ajax',filter:common_content_filter,cssclass:'overlay-rename',closeselector:'[name="form.button.Cancel"]',width:'40%'});$('dl#plone-contentmenu-factories a#plone-contentmenu-add-to-default-page').prepOverlay({subtype:'ajax',filter:common_content_filter,cssclass:'overlay-folder-factories',closeselector:'[name="form.button.Cancel"]',width:'40%'});$('#portal-personaltools a[href$="/@@register"]').prepOverlay({subtype:'ajax',filter:common_content_filter,cssclass:'overlay-register',formselector:'form.kssattr-formname-register'});$('form[name="users_add"], form[name="groups_add"]').prepOverlay({subtype:'ajax',filter:common_content_filter,cssclass:'overlay-users',formselector:'form.kssattr-formname-new-user, form[name="groups"]',noform: function(el){return $.plonepopups.noformerrorshow(el,'redirect')},redirect: function(){return location.href}});$('form[name="users_add"], form[name="groups_add"]').width($('input.add').outerWidth());$('form[name="users_add"] input.add, form[name="groups_add"] input.add').css('cursor','pointer');$('#content-history a').prepOverlay({subtype:'ajax',filter:'h2, #content-history',cssclass:'overlay-history',urlmatch:'@@historyview',urlreplace:'@@contenthistorypopup'})});

/* - jquery.highlightsearchterms.js - */
// http://localhost:8081/sunburst/portal_javascripts/jquery.highlightsearchterms.js?original=1
(function($){var Highlighter,makeSearchKey,makeAddress,defaults;Highlighter=function(options){$.extend(this,options);this.terms=this.cleanTerms(this.terms.length?this.terms:this.getSearchTerms())};Highlighter.prototype={highlight: function(startnode){if(!this.terms.length||!startnode.length){return}
var self=this;$.each(this.terms, function(i,term){startnode.find('*:not(textarea)').andSelf().contents().each(function(){if(this.nodeType===3){self.highlightTermInNode(this,term)}})})},highlightTermInNode: function(node,word){var c=node.nodeValue,self=this,highlight,ci,index,next;if($(node).parent().hasClass(self.highlightClass)){return}
highlight=function(content){return $('<span class="'+self.highlightClass+'">&nbsp;</span>').text(content)};ci=self.caseInsensitive;while(c&&(index=(ci?c.toLowerCase():c).indexOf(word))>-1){$(node).before(document.createTextNode(c.substr(0,index))).before(highlight(c.substr(index,word.length))).before(document.createTextNode(c.substr(index+word.length)));next=node.previousSibling;$(node).remove();node=next;c=node.nodeValue}},queryStringValue: function(uri,regexp){var match,pair;if(uri.indexOf('?')<0){return ''}
uri=uri.substr(uri.indexOf('?')+1);while(uri.indexOf('=')>=0){uri=uri.replace(/^\&*/,'');pair=uri.split('&',1)[0];uri=uri.substr(pair.length);match=pair.match(regexp);if(match){return decodeURIComponent(match[match.length-1].replace(/\+/g,' '))}}
return ''},termsFromReferrer: function(){var ref,i,se;ref=$.fn.highlightSearchTerms._test_referrer!==null?$.fn.highlightSearchTerms._test_referrer:document.referrer;if(!ref){return ''}
for(i=0;i<this.referrers.length;i+=1){se=this.referrers[i];if(ref.match(se.address)){return this.queryStringValue(ref,se.key)}}
return ''},cleanTerms: function(terms){var self=this;return $.unique($.map(terms, function(term){term=$.trim(self.caseInsensitive?term.toLowerCase():term);return(!term||self.filterTerms.test(term))?null:term}))},getSearchTerms: function(){var terms=[],uri=$.fn.highlightSearchTerms._test_location!==null?$.fn.highlightSearchTerms._test_location:location.href;if(this.useReferrer){$.merge(terms,this.termsFromReferrer().split(/\s+/))}
if(this.useLocation){$.merge(terms,this.queryStringValue(uri,this.searchKey).split(/\s+/))}
return terms}};makeSearchKey=function(key){return(typeof key==='string')?new RegExp('^'+key+'=(.*)$','i'):key};makeAddress=function(addr){return(typeof addr==='string')?new RegExp('^https?://(www\\.)?'+addr,'i'):addr};$.fn.highlightSearchTerms=function(options){options=$.extend({},defaults,options);options=$.extend(options,{searchKey:makeSearchKey(options.searchKey),referrers:$.map(options.referrers, function(se){return{address:makeAddress(se.address),key:makeSearchKey(se.key)}})});if(options.includeOwnDomain){var hostname=$.fn.highlightSearchTerms._test_location!==null?$.fn.highlightSearchTerms._test_location:location.hostname;options.referrers.push({address:makeAddress(hostname.replace(/\./g,'\\.')),key:options.searchKey})}
new Highlighter(options).highlight(this);return this};$.fn.highlightSearchTerms.referrers=[{address:'google\\.',key:'q'},{address:'search\\.yahoo\\.',key:'p'},{address:'search\\.msn\\.',key:'q'},{address:'search\\.live\\.',key:'query'},{address:'search\\.aol\\.',key:'userQuery'},{address:'ask\\.com',key:'q'},{address:'altavista\\.',key:'q'},{address:'feedster\\.',key:'q'}];defaults={terms:[],useLocation:true,searchKey:'(searchterm|SearchableText)',useReferrer:true,referrers:$.fn.highlightSearchTerms.referrers,includeOwnDomain:true,caseInsensitive:true,filterTerms:/(not|and|or)/i,highlightClass:'highlightedSearchTerm'};$.fn.highlightSearchTerms._test_location=null;$.fn.highlightSearchTerms._test_referrer=null;$.fn.highlightSearchTerms._highlighter=Highlighter}(jQuery));jQuery(function($){$('#region-content,#content').highlightSearchTerms({includeOwnDomain:$('dl.searchResults').length===0})});

/* - first_input_focus.js - */
// http://localhost:8081/sunburst/portal_javascripts/first_input_focus.js?original=1
jQuery(function($){if($("form div.error :input:first").focus().length){return}
$("form.enableAutoFocus :input:not(.formTabs):visible:first").focus()});

/* - accessibility.js - */
// http://localhost:8081/sunburst/portal_javascripts/accessibility.js?original=1
function setBaseFontSize(f,r){var b=jQuery('body');if(r){b.removeClass('smallText').removeClass('largeText');createCookie("fontsize",f,365)}b.addClass(f)}jQuery(function($){var f=readCookie("fontsize");if(f){setBaseFontSize(f,0)}});

/* - styleswitcher.js - */
// http://localhost:8081/sunburst/portal_javascripts/styleswitcher.js?original=1
function setActiveStyleSheet(title,reset){jQuery('link[rel*=style][title]').attr('disabled',true).find('[title='+title+']').attr('disabled',false);if(reset){createCookie("wstyle",title,365)}}
jQuery(function(){var style=readCookie("wstyle");if(style){setActiveStyleSheet(style,0)}});

/* - toc.js - */
// http://localhost:8081/sunburst/portal_javascripts/toc.js?original=1
jQuery(function($){var dest,content,location,stack,oltoc,numdigits,wlh,target,targetOffset;dest=$('dl.toc dd.portletItem');content=$('#region-content,#content');if(!content||!dest.length){return}
dest.empty();location=window.location.href;if(window.location.hash){location=location.substring(0,location.lastIndexOf(window.location.hash))}
stack=[];$(content).find('*').not('.comment > h3').filter(function(){return (/^h[1234]$/).test(this.tagName.toLowerCase())}).not('.documentFirstHeading').each(function(i){var level,ol,li;level=this.nodeName.charAt(1);while(stack.length<level){ol=$('<ol>');if(stack.length){li=$(stack[stack.length-1]).children('li:last');if(!li.length){li=$('<li>').appendTo($(stack[stack.length-1]))}
li.append(ol)}
stack.push(ol)}
while(stack.length>level){stack.pop()}
$(this).before($('<a name="section-'+i+'" />'));$('<li>').append($('<a />').attr('href',location+'#section-'+i).text($(this).text())).appendTo($(stack[stack.length-1]))});if(stack.length){var oltoc=$(stack[0]);var i=1;while(oltoc.children('li').length==1){oltoc=$(stack[i]);i+=1}
if(i<=stack.length){$('dl.toc').show()}
numdigits=oltoc.children().length.toString().length;oltoc.addClass("TOC"+numdigits+"Digit");dest.append(oltoc);wlh=window.location.hash;if(wlh){target=$(wlh);target=target.length&&target||$('[name="'+wlh.slice(1)+'"]');targetOffset=target.offset();if(targetOffset){$('html,body').animate({scrollTop:targetOffset.top},0)}}}});

/* - ++resource++plone.app.discussion.javascripts/comments.js - */
// http://localhost:8081/sunburst/portal_javascripts/++resource++plone.app.discussion.javascripts/comments.js?original=1
(function($){$.createReplyForm=function(comment_div){var comment_id=comment_div.attr("id");var reply_button=comment_div.find(".reply-to-comment-button");var reply_div=$("#commenting").clone(true);reply_div.find("#formfield-form-widgets-captcha").find("script").remove();reply_div.appendTo(comment_div).css("display","none");reply_div.removeAttr("id");$(reply_button).css("display","none");var reply_form=reply_div.find("form");reply_form.find("input[name='form.widgets.in_reply_to']").val(comment_id);var cancel_reply_button=reply_div.find(".cancelreplytocomment");cancel_reply_button.attr("id",comment_id);reply_form.find("input[name='form.buttons.cancel']").css("display","inline");reply_div.slideDown("slow");cancel_reply_button.css("display","inline")};$.clearForm=function(form_div){form_div.find(".error").removeClass("error");form_div.find(".fieldErrorBox").remove();form_div.find("input[type='text']").attr("value","");form_div.find("textarea").attr("value","")};$(window).load(function(){var post_comment_div=$("#commenting");var in_reply_to_field=post_comment_div.find("input[name='form.widgets.in_reply_to']");if(in_reply_to_field.val()!==""){var current_reply_id="#"+in_reply_to_field.val();var current_reply_to_div=$(".discussion").find(current_reply_id);$.createReplyForm(current_reply_to_div);$.clearForm(post_comment_div)}
$(".reply-to-comment-button").bind("click", function(e){var comment_div=$(this).parents().filter(".comment");$.createReplyForm(comment_div);$.clearForm(comment_div)});$("#commenting #form-buttons-cancel").bind("click", function(e){e.preventDefault();var reply_to_comment_button=$(this).
parents().
filter(".comment").
find(".reply-to-comment-button");$.reply_to_comment_form=$(this).parents().filter(".reply");$.reply_to_comment_form.slideUp("slow", function(){$(this).remove()});reply_to_comment_button.css("display","inline")});$("input[name='form.button.PublishComment']").on('click', function(){var trigger=this;var form=$(this).parents("form");var data=$(form).serialize();var form_url=$(form).attr("action");$.ajax({type:"GET",url:form_url,data:data,context:trigger,success: function(msg){form.find("input[name='form.button.PublishComment']").remove();form.parents(".state-pending").toggleClass('state-pending').toggleClass('state-published')},error: function(msg){return true}});return false});$("form[name='edit']").prepOverlay({cssclass:'overlay-edit-comment',width:'60%',subtype:'ajax',filter:'#content>*'})
$("input[name='form.button.DeleteComment']").on('click', function(){var trigger=this;var form=$(this).parents("form");var data=$(form).serialize();var form_url=$(form).attr("action");$.ajax({type:'POST',url:form_url,data:data,context:$(trigger).parents(".comment"),success: function(data){var comment=$(this);var clss=comment.attr('class');var treelevel=parseInt(clss[clss.indexOf('replyTreeLevel')+'replyTreeLevel'.length],10);var selector=".replyTreeLevel"+treelevel;for(var i=0;i<treelevel;i++){selector+=", .replyTreeLevel"+i}
comment.nextUntil(selector).each(function(){$(this).fadeOut('fast', function(){$(this).remove()})});$(this).fadeOut('fast', function(){$(this).remove()})},error: function(req,error){return true}});return false});$(".reply").find("input[name='form.buttons.reply']").css("display","none");$(".reply").find("input[name='form.buttons.cancel']").css("display","none");$(".reply-to-comment-button").css("display","inline")})}(jQuery));

/* - dropdown.js - */
// http://localhost:8081/sunburst/portal_javascripts/dropdown.js?original=1

/* - dropdown.js - */
/*
 * This is the code for the dropdown menus. It uses the following markup:
 *
 * <dl class="actionMenu" id="uniqueIdForThisMenu">
 *   <dt class="actionMenuHeader">
 *     <!-- The following a-tag needs to be clicked to dropdown the menu -->
 *     <a href="some_destination">A Title</a>
 *   </dt>
 *   <dd class="actionMenuContent">
 *     <!-- Here can be any content you want -->
 *   </dd>
 * </dl>
 *
 * When the menu is toggled, then the dl with the class actionMenu will get an
 * additional class which switches between 'activated' and 'deactivated'.
 * You can use this to style it accordingly, for example:
 *
 * .actionMenu.activated {
 *   display: block;
 * }
 *
 * .actionMenu.deactivated {
 *   display: none;
 * }
 *
 * When you click somewhere else than the menu, then all open menus will be
 * deactivated. When you move your mouse over the a-tag of another menu, then
 * that one will be activated and all others deactivated. When you click on a
 * link inside the actionMenuContent element, then the menu will be closed and
 * the link followed.
 *
 */

/*
 * Provides globals:
 * actionMenuDocumentMouseDown, actionMenuMouseOver, document, hideAllMenus, 
 * initializeMenus, jQuery, toggleMenuHandler 
*/

function hideAllMenus() {
    jQuery('dl.actionMenu').removeClass('activated').addClass('deactivated');
}

function toggleMenuHandler(event) {
    // swap between activated and deactivated
    jQuery(this).parents('.actionMenu:first')
        .toggleClass('deactivated')
        .toggleClass('activated');
    return false;
}

function actionMenuDocumentMouseDown(event) {
    if (jQuery(event.target).parents('.actionMenu:first').length) {
        // target is part of the menu, so just return and do the default
        return true;
    }

    hideAllMenus();
}

function actionMenuMouseOver(event) {
    var menu_id = jQuery(this).parents('.actionMenu:first').attr('id'),
        switch_menu;
    if (!menu_id) {return true;}

    switch_menu = jQuery('dl.actionMenu.activated').length > 0;
    jQuery('dl.actionMenu').removeClass('activated').addClass('deactivated');
    if (switch_menu) {
        jQuery('#' + menu_id).removeClass('deactivated').addClass('activated');
    }
}

function initializeMenus() {
    jQuery(document).mousedown(actionMenuDocumentMouseDown);

    hideAllMenus();

    // add toggle function to header links
    jQuery('dl.actionMenu dt.actionMenuHeader a')
        .click(toggleMenuHandler)
        .mouseover(actionMenuMouseOver);
        
    // add hide function to all links in the dropdown, so the dropdown closes
    // when any link is clicked
    jQuery('dl.actionMenu > dd.actionMenuContent').click(hideAllMenus);
}

jQuery(initializeMenus);


/* - inline_validation.js - */
// http://localhost:8081/sunburst/portal_javascripts/inline_validation.js?original=1
jQuery(function($){var render_error=function($field,errmsg){var $errbox=$('div.fieldErrorBox',$field);if(errmsg!==''){$field.addClass('error');$errbox.html(errmsg)} else{$field.removeClass('error');$errbox.html('')}};$(document).on('blur','.field input.blurrable, '+'.field select.blurrable, '+'.field textarea.blurrable',
function(){var $input=$(this),$field=$input.closest('.field'),uid=$field.attr('data-uid'),fname=$field.attr('data-fieldname'),value=$input.val();if($input.attr('multiple')==='multiple'&&value===null){value=$([]).serialize()}
params=$.param({uid:uid,fname:fname,value:value},traditional=true);if($field&&uid&&fname){$.post($('base').attr('href')+'/at_validate_field',params, function(data){render_error($field,data.errmsg)})}});var formlib_validate_field=function(input){var $input=$(input),$field=$input.closest('.field'),$form=$field.closest('form'),fname=$field.attr('data-fieldname');$form.ajaxSubmit({url:$form.attr('action')+'/@@formlib_validate_field',data:{fname:fname},iframe:false,success: function(data){render_error($field,data.errmsg)},dataType:'json'})};$(document).on('blur','.formlibInlineValidation input[type="text"], '+'.formlibInlineValidation input[type="password"], '+'.formlibInlineValidation input[type="checkbox"], '+'.formlibInlineValidation input[type="radio"], '+'.formlibInlineValidation select, '+'.formlibInlineValidation textarea',
function(){formlib_validate_field(this)});var z3cform_validate_field=function(input){var $input=$(input),$field=$input.closest('.field'),$form=$field.closest('form'),fset=$input.closest('fieldset').attr('data-fieldset'),fname=$field.attr('data-fieldname');if(fname){$form.ajaxSubmit({url:$form.attr('action')+'/@@z3cform_validate_field',data:{fname:fname,fset:fset},iframe:false,success: function(data){render_error($field,data.errmsg)},dataType:'json'})}};$(document).on('blur','.z3cformInlineValidation input[type="text"], '+'.z3cformInlineValidation input[type="password"], '+'.z3cformInlineValidation input[type="checkbox"], '+'.z3cformInlineValidation input[type="radio"], '+'.z3cformInlineValidation select, '+'.z3cformInlineValidation textarea',
function(){z3cform_validate_field(this)})});

/* - kss-bbb.js - */
// http://localhost:8081/sunburst/portal_javascripts/kss-bbb.js?original=1
(function($){
function refreshPortlet(hash,_options){var options={data:{},success: function(){},error: function(){},ajaxOptions:{}};$.extend(options,_options);options.data.portlethash=hash;ajaxOptions=options.ajaxOptions;ajaxOptions.url=$('base').attr('href')+'/@@render-portlet';ajaxOptions.success=function(data){var container=$('[data-portlethash="'+hash+'"]');var portlet=$(data);container.html(portlet);options.success(data,portlet)}
ajaxOptions.error=function(){options.error()}
ajaxOptions.data=options.data;$.ajax(ajaxOptions)}
function applyPortletTimeout(portlet){var timeout=portlet.data('timeout');if(timeout==undefined){timeout=30}else{timeout=parseInt(timeout)}
timeout=timeout * 1000;setTimeout($.proxy(function(){refreshPortlet(this.parents('.portletWrapper').data('portlethash'),{success: function(data,portlet){apply_timeout(portlet)}})},portlet),timeout)}
$(document).ready(function(){var spinner=$('<div id="ajax-spinner"><img src="'+portal_url+'/spinner.gif" alt=""/></div>');spinner.appendTo('body').hide();$(document).ajaxStart(function(){spinner.show()});$(document).ajaxStop(function(){spinner.hide()});$('body').delegate('#calendar-next,#calendar-previous','click', function(e){e.preventDefault();var el=$(this);var container=el.parents('.portletWrapper');refreshPortlet(container.data('portlethash'),{data:{month:el.data('month'),year:el.data('year')}});return false});$('.kssPortletRefresh,.refreshPortlet').each(function(){applyPortletTimeout($(this))});$('.portlet-deferred').each(function(){refreshPortlet($(this).parents('.portletWrapper').data('portlethash'))});
function updateSharing(data){var sharing=$(data.body);var messages=$(data.messages).filter(function(){return this.tagName=='DL'});$('.portalMessage').remove();$('#user-group-sharing').replaceWith(sharing);$('#content').prepend(messages)}
var search_timeout=null;$('#content-core').delegate('#sharing-user-group-search','input', function(){var text=$(this);if(search_timeout!=null){clearTimeout(search_timeout)}
if(text.val().length>3){search_timeout=setTimeout($.proxy(function(){$('#sharing-search-button').trigger('click')},text),300)}});$('#content-core').delegate('#sharing-search-button','click', function(){$.ajax({url:$('base').attr('href')+'/@@updateSharingInfo',data:{search_term:$('#sharing-user-group-search').val(),'form.button.Search':'Search'},type:'GET',dataType:'json',success:updateSharing});return false});$('#content-core').delegate('#sharing-save-button','click', function(){var btn=$(this);var form=btn.parents('form');var data=form.serializeArray();data.push({name:'form.button.Save',value:'Save'});$.ajax({url:$('base').attr('href')+'/@@updateSharingInfo',data:data,type:'POST',dataType:'json',success:updateSharing});return false})})})(jQuery);


/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - table_sorter.js - */
// http://localhost:8081/sunburst/portal_javascripts/table_sorter.js?original=1
(function($){
function sortabledataclass(cell){var re,matches;re=new RegExp("sortabledata-([^ ]*)","g");matches=re.exec(cell.attr('class'));if(matches){return matches[1]}
else{return null}}
function sortable(cell){var text=sortabledataclass(cell);if(text===null){text=cell.text()}
if(text.charAt(4)!=='-'&&text.charAt(7)!=='-'&&!isNaN(parseFloat(text))){return parseFloat(text)}
return text.toLowerCase()}
function sort(){var th,colnum,table,tbody,reverse,index,data,usenumbers,tsorted;th=$(this).closest('th');colnum=$('th',$(this).closest('thead')).index(th);table=$(this).parents('table:first');tbody=table.find('tbody:first');tsorted=parseInt(table.attr('sorted')||'-1',10);reverse=tsorted===colnum;$(this).parent().find('th:not(.nosort) .sortdirection').html('&#x2003;');$(this).children('.sortdirection').html(reverse?'&#x25b2;':'&#x25bc;');index=$(this).parent().children('th').index(this),data=[],usenumbers=true;tbody.find('tr').each(function(){var cells,sortableitem;cells=$(this).children('td');sortableitem=sortable(cells.slice(index,index+1));if(isNaN(sortableitem)){usenumbers=false}
data.push([sortableitem,sortable(cells.slice(1,2)),sortable(cells.slice(0,1)),this])});if(data.length){if(usenumbers){data.sort(function(a,b){return a[0]-b[0]})} else{data.sort()}
if(reverse){data.reverse()}
table.attr('sorted',reverse?'':colnum);tbody.append($.map(data, function(a){return a[3]}));tbody.each(setoddeven)}}
function setoddeven(){var tbody=$(this);tbody.find('tr').removeClass('odd').removeClass('even').filter(':odd').addClass('even').end().filter(':even').addClass('odd')}
$(function(){var blankarrow=$('<span>&#x2003;</span>').addClass('sortdirection');$('table.listing:not(.nosort) thead th:not(.nosort)').append(blankarrow.clone()).css('cursor','pointer').click(sort);$('table.listing:not(.nosort) tbody').each(setoddeven)})})(jQuery);

/* - formUnload.js - */
// http://localhost:8081/sunburst/portal_javascripts/formUnload.js?original=1
if(!window.beforeunload){(function($){var BeforeUnloadHandler,Class,form,c;BeforeUnloadHandler=function(){var self=this,message;this.message=window.form_modified_message||"Discard changes? If you click OK, any changes you have made will be lost.";this.forms=[];this.chkId=[];this.chkType=new this.CheckType();this.handlers=[this.isAnyFormChanged];this.submitting=false;this.execute=function(event){var domforms=$('form');self.forms=$.grep(self.forms, function(form){return domforms.index(form)>-1});if(self.submitting){return}
$.each(self.handlers, function(i,fn){message=message||fn.apply(self)});if(message===true){message=self.message}
if(message===false){message=undefined}
if(event&&message){event.returnValue=message}
return message};this.execute.tool=this};Class=BeforeUnloadHandler.prototype;Class.isAnyFormChanged=function(){var i;for(i=0;i<this.forms.length;i+=1){form=this.forms[i];if(this.isElementChanged(form)){return true}}
return false};Class.addHandler=function(fn){this.handlers.push(fn)};Class.onsubmit=function(){var tool=window.onbeforeunload&&window.onbeforeunload.tool;tool.submitting=true;plone.UnlockHandler.submitting=true};Class.addForm=function(form){if($.inArray(form,this.forms)>-1){return}
this.forms.push(form);$(form).submit(this.onsubmit);$(form).find('input:hidden').each(function(){var value=this.defaultValue;if(value!==undefined&&value!==null){$(this).attr('originalValue',value.replace(/\r\n?/g,'\n'))}})};Class.addForms=function(){var self=this;$.each(arguments, function(){if(this.tagName.toLowerCase()==='form'){self.addForm(this)} else{self.addForms.apply(self,$(this).find('form').get())}})};Class.removeForms=function(){var self=this;$.each(arguments, function(){if(this.tagName.toLowerCase()==='form'){var formElement=this;self.forms=$.grep(self.forms, function(form){return form!==formElement});$(formElement).unbind('submit',self.onsubmit)} else{self.removeForms.apply(self,$(this).find('form').get())}})};Class.CheckType=function(){};c=Class.CheckType.prototype;c.checkbox=c.radio=function(ele){return ele.checked!==ele.defaultChecked};c.file=c.password=function(ele){return ele.value!==ele.defaultValue};c.text=c.textarea=function(ele){if($(ele).hasClass('mce_editable')&&typeof(tinyMCE)!="undefined"){return tinyMCE.get(ele.id).getContent()!=ele.defaultValue} else{return ele.value!==ele.defaultValue}};c.hidden=function(ele){var orig=$(ele).attr('originalValue');if(orig===undefined||orig===null){return false}
return $(ele).val().replace(/\r\n?/g,'\n')!==orig};c['select-one']=function(ele){var i,opt;for(i=0;i<ele.length;i+=1){opt=ele[i];if(opt.selected!==opt.defaultSelected){if(i===0&&opt.selected){continue}
return true}}
return false};c['select-multiple']=function(ele){var i,opt;for(i=0;i<ele.length;i+=1){opt=ele[i];if(opt.selected!==opt.defaultSelected){return true}}
return false};Class.chk_form=function(form){var elems=$(form).find('> :input:not(.noUnloadProtection),'+':not(.noUnloadProtection) :input:not(.noUnloadProtection)'),i;for(i=0;i<elems.length;i+=1){if(this.isElementChanged(elems.get(i))){return true}}
return false};Class.isElementChanged=function(ele){var method=ele.id&&this.chkId[ele.id];if(!method&&ele.type&&ele.name){method=this.chkType[ele.type]}
if(!method&&ele.tagName){method=this['chk_'+ele.tagName.toLowerCase()]}
return method?method.call(this,ele):false};window.onbeforeunload=new BeforeUnloadHandler().execute;$(function(){var tool=window.onbeforeunload&&window.onbeforeunload.tool;if(tool&&$('#region-content,#content').length){tool.addForms.apply(tool,$('form.enableUnloadProtection').get())}})}(jQuery))}


/* - formsubmithelpers.js - */
// http://localhost:8081/sunburst/portal_javascripts/formsubmithelpers.js?original=1
function inputSubmitOnClick(event){if(jQuery(this).hasClass('submitting')&&!jQuery(this).hasClass('allowMultiSubmit'))
return confirm(window.form_resubmit_message);else
jQuery(this).addClass('submitting')}(function($){$(function(){$('input:submit,input:image').each(function(){if(!this.onclick)
$(this).click(inputSubmitOnClick)})})})(jQuery);

/* - unlockOnFormUnload.js - */
// http://localhost:8081/sunburst/portal_javascripts/unlockOnFormUnload.js?original=1
if(typeof(plone)==='undefined'){var plone={}}(function($){plone.UnlockHandler={init: function(){if($('form.enableUnlockProtection').length){$(window).unload(plone.UnlockHandler.execute);plone.UnlockHandler._refresher=setInterval(plone.UnlockHandler.refresh,300000)}},cleanup: function(){$(window).unbind('unload',plone.UnlockHandler.execute);clearInterval(plone.UnlockHandler._refresher)},execute: function(){if(plone.UnlockHandler.submitting){return}
$.ajax({url:plone.UnlockHandler._baseUrl()+'/@@plone_lock_operations/safe_unlock',async:false})},refresh: function(){if(plone.UnlockHandler.submitting){return}
$.get(plone.UnlockHandler._baseUrl()+'/@@plone_lock_operations/refresh_lock')},_baseUrl: function(){var baseUrl,pieces;baseUrl=$('base').attr('href');if(!baseUrl){pieces=window.location.href.split('/');pieces.pop();baseUrl=pieces.join('/')}
return baseUrl}};$(plone.UnlockHandler.init)})(jQuery);

/* - jquery.tinymce.js - */
// http://localhost:8081/sunburst/portal_javascripts/jquery.tinymce.js?original=1
(function(b){var e,d,a=[],c=window;b.fn.tinymce=function(j){var p=this,g,k,h,m,i,l="",n="";if(!p.length){return p}if(!j){return tinyMCE.get(p[0].id)}p.css("visibility","hidden");function o(){var r=[],q=0;if(f){f();f=null}p.each(function(t,u){var s,w=u.id,v=j.oninit;if(!w){u.id=w=tinymce.DOM.uniqueId()}s=new tinymce.Editor(w,j);r.push(s);s.onInit.add(function(){var x,y=v;p.css("visibility","");if(v){if(++q==r.length){if(tinymce.is(y,"string")){x=(y.indexOf(".")===-1)?null:tinymce.resolve(y.replace(/\.\w+$/,""));y=tinymce.resolve(y)}y.apply(x||tinymce,r)}}})});b.each(r,function(t,s){s.render()})}if(!c.tinymce&&!d&&(g=j.script_url)){d=1;h=g.substring(0,g.lastIndexOf("/"));if(/_(src|dev)\.js/g.test(g)){n="_src"}m=g.lastIndexOf("?");if(m!=-1){l=g.substring(m+1)}c.tinyMCEPreInit=c.tinyMCEPreInit||{base:h,suffix:n,query:l};if(g.indexOf("gzip")!=-1){i=j.language||"en";g=g+(/\?/.test(g)?"&":"?")+"js=true&core=true&suffix="+escape(n)+"&themes="+escape(j.theme)+"&plugins="+escape(j.plugins)+"&languages="+i;if(!c.tinyMCE_GZ){tinyMCE_GZ={start:function(){tinymce.suffix=n;function q(r){tinymce.ScriptLoader.markDone(tinyMCE.baseURI.toAbsolute(r))}q("langs/"+i+".js");q("themes/"+j.theme+"/editor_template"+n+".js");q("themes/"+j.theme+"/langs/"+i+".js");b.each(j.plugins.split(","),function(s,r){if(r){q("plugins/"+r+"/editor_plugin"+n+".js");q("plugins/"+r+"/langs/"+i+".js")}})},end:function(){}}}}b.ajax({type:"GET",url:g,dataType:"script",cache:true,success:function(){tinymce.dom.Event.domLoaded=1;d=2;if(j.script_loaded){j.script_loaded()}o();b.each(a,function(q,r){r()})}})}else{if(d===1){a.push(o)}else{o()}}return p};b.extend(b.expr[":"],{tinymce:function(g){return g.id&&!!tinyMCE.get(g.id)}});function f(){function i(l){if(l==="remove"){this.each(function(n,o){var m=h(o);if(m){m.remove()}})}this.find("span.mceEditor,div.mceEditor").each(function(n,o){var m=tinyMCE.get(o.id.replace(/_parent$/,""));if(m){m.remove()}})}function k(n){var m=this,l;if(n!==e){i.call(m);m.each(function(p,q){var o;if(o=tinyMCE.get(q.id)){o.setContent(n)}})}else{if(m.length>0){if(l=tinyMCE.get(m[0].id)){return l.getContent()}}}}function h(m){var l=null;(m)&&(m.id)&&(c.tinymce)&&(l=tinyMCE.get(m.id));return l}function g(l){return !!((l)&&(l.length)&&(c.tinymce)&&(l.is(":tinymce")))}var j={};b.each(["text","html","val"],function(n,l){var o=j[l]=b.fn[l],m=(l==="text");b.fn[l]=function(s){var p=this;if(!g(p)){return o.apply(p,arguments)}if(s!==e){k.call(p.filter(":tinymce"),s);o.apply(p.not(":tinymce"),arguments);return p}else{var r="";var q=arguments;(m?p:p.eq(0)).each(function(u,v){var t=h(v);r+=t?(m?t.getContent().replace(/<(?:"[^"]*"|'[^']*'|[^'">])*>/g,""):t.getContent({save:true})):o.apply(b(v),q)});return r}}});b.each(["append","prepend"],function(n,m){var o=j[m]=b.fn[m],l=(m==="prepend");b.fn[m]=function(q){var p=this;if(!g(p)){return o.apply(p,arguments)}if(q!==e){p.filter(":tinymce").each(function(s,t){var r=h(t);r&&r.setContent(l?q+r.getContent():r.getContent()+q)});o.apply(p.not(":tinymce"),arguments);return p}}});b.each(["remove","replaceWith","replaceAll","empty"],function(m,l){var n=j[l]=b.fn[l];b.fn[l]=function(){i.call(this,l);return n.apply(this,arguments)}});j.attr=b.fn.attr;b.fn.attr=function(o,r,p){var m=this,n=arguments;if((!o)||(o!=="value")||(!g(m))){return j.attr.apply(m,n)}if(r!==e){k.call(m.filter(":tinymce"),r);j.attr.apply(m.not(":tinymce"),n);return m}else{var q=m[0],l=h(q);return l?l.getContent({save:true}):j.attr.apply(b(q),n)}}}})(jQuery);

/* - tiny_mce_gzip.js - */
// http://localhost:8081/sunburst/portal_javascripts/tiny_mce_gzip.js?original=1
(function($,undefined){window.initTinyMCE=function(context,customConfig){customConfig=customConfig||{};$('textarea.mce_editable',context).each(function(){var $el=$(this),$field=$el.parents('.field'),tinymceActive=false,$textFormatSelector=$('.fieldTextFormat > select',$field),config=$.extend(true,{},$.parseJSON($el.attr('data-mce-config')),customConfig);$('.suppressVisualEditor',$field).hide();$textFormatSelector.bind('change', function(e){e.stopPropagation();if($(e.target).val()==='text/html'){if(!tinymceActive){$el.tinymce(config);tinymceActive=true}} else if(tinymceActive){tinyMCE.execCommand('mceRemoveControl',false,$el.attr('id'));tinymceActive=false}}).attr('tabindex','-1');if(!$textFormatSelector.length){$el.tinymce(config);tinymceActive=true} else if($textFormatSelector.val()==='text/html'){$el.tinymce(config);tinymceActive=true}})};$(document).ready(function(){window.initTinyMCE(document)})}(window.jQuery));
