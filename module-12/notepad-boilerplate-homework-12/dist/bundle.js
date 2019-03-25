!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=35)}([function(e,t,n){"use strict";t.__esModule=!0,t.extend=s,t.indexOf=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!i.test(e))return e;return e.replace(o,a)},t.isEmpty=function(e){return!e&&0!==e||!(!u(e)||0!==e.length)},t.createFrame=function(e){var t=s({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},o=/[&<>"'`=]/g,i=/[&<>"'`=]/;function a(e){return r[e]}function s(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}var l=Object.prototype.toString;t.toString=l;var c=function(e){return"function"==typeof e};c(/x/)&&(t.isFunction=c=function(e){return"function"==typeof e&&"[object Function]"===l.call(e)}),t.isFunction=c;var u=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===l.call(e)};t.isArray=u},function(e,t,n){"use strict";t.__esModule=!0;var r=["description","fileName","lineNumber","message","name","number","stack"];function o(e,t){var n=t&&t.loc,i=void 0,a=void 0;n&&(e+=" - "+(i=n.start.line)+":"+(a=n.start.column));for(var s=Error.prototype.constructor.call(this,e),l=0;l<r.length;l++)this[r[l]]=s[r[l]];Error.captureStackTrace&&Error.captureStackTrace(this,o);try{n&&(this.lineNumber=i,Object.defineProperty?Object.defineProperty(this,"column",{value:a,enumerable:!0}):this.column=a)}catch(e){}}o.prototype=new Error,t.default=o,e.exports=t.default},function(e,t,n){var r=n(7);e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,o){var i,a=null!=t?t:e.nullContext||{},s=n.helperMissing,l=e.escapeExpression;return'<li class="note-list__item" data-id="'+l("function"==typeof(i=null!=(i=n.id||(null!=t?t.id:t))?i:s)?i.call(a,{name:"id",hash:{},data:o}):i)+'">\r\n    <div class="note">\r\n        <div class="note__content">\r\n            <h2 class="note__title">'+l("function"==typeof(i=null!=(i=n.title||(null!=t?t.title:t))?i:s)?i.call(a,{name:"title",hash:{},data:o}):i)+'</h2>\r\n            <p class="note__body">\r\n                '+l("function"==typeof(i=null!=(i=n.body||(null!=t?t.body:t))?i:s)?i.call(a,{name:"body",hash:{},data:o}):i)+'\r\n            </p>\r\n        </div>\r\n        <footer class="note__footer">\r\n            <section class="note__section">\r\n                <button class="action" data-action="decrease-priority">\r\n                    <i class="material-icons action__icon">expand_more</i>\r\n                </button>\r\n                <button class="action" data-action="increase-priority">\r\n                    <i class="material-icons action__icon">expand_less</i>\r\n                </button>\r\n                <span class="note__priority">Priority: '+l("function"==typeof(i=null!=(i=n.priority||(null!=t?t.priority:t))?i:s)?i.call(a,{name:"priority",hash:{},data:o}):i)+'</span>\r\n            </section>\r\n            <section class="note__section">\r\n                <button class="action" data-action="edit-note">\r\n                    <i class="material-icons action__icon">edit</i>\r\n                </button>\r\n                <button class="action" data-action="delete-note">\r\n                    <i class="material-icons action__icon">delete</i>\r\n                </button>\r\n            </section>\r\n        </footer>\r\n    </div>\r\n</li>'},useData:!0})},function(e,t,n){"use strict";var r,o,i,a=n(26),s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function l(){i=!1}function c(e){if(e){if(e!==r){if(e.length!==s.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter(function(e,t,n){return t!==n.lastIndexOf(e)});if(t.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. These characters were not unique: "+t.join(", "));r=e,l()}}else r!==s&&(r=s,l())}function u(){return i||(i=function(){r||c(s);for(var e,t=r.split(""),n=[],o=a.nextValue();t.length>0;)o=a.nextValue(),e=Math.floor(o*t.length),n.push(t.splice(e,1)[0]);return n.join("")}())}e.exports={get:function(){return r||s},characters:function(e){return c(e),r},seed:function(e){a.seed(e),o!==e&&(l(),o=e)},lookup:function(e){return u()[e]},shuffled:u}},function(e,t,n){e.exports=n(6)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=c;var o=n(0),i=r(n(1)),a=n(9),s=n(17),l=r(n(19));t.VERSION="4.1.0";t.COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};function c(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},a.registerDefaultHelpers(this),s.registerDefaultDecorators(this)}c.prototype={constructor:c,logger:l.default,log:l.default.log,registerHelper:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new i.default("Arg not supported with multiple helpers");o.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===o.toString.call(e))o.extend(this.partials,e);else{if(void 0===t)throw new i.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new i.default("Arg not supported with multiple decorators");o.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};var u=l.default.log;t.log=u,t.createFrame=o.createFrame,t.logger=l.default},function(e,t,n){var r;!function(){function e(e,t){var n=document.createElement("div");n.className="notyf__toast";var r=document.createElement("div");r.className="notyf__wrapper";var o=document.createElement("div");o.className="notyf__icon";var i=document.createElement("i");i.className=t;var a=document.createElement("div");a.className="notyf__message",a.innerHTML=e,o.appendChild(i),r.appendChild(o),r.appendChild(a),n.appendChild(r);var s=this;return setTimeout(function(){n.className+=" notyf--disappear",n.addEventListener(s.animationEnd,function(e){e.target==n&&s.container.removeChild(n)});var e=s.notifications.indexOf(n);s.notifications.splice(e,1)},s.options.delay),n}this.Notyf=function(){this.notifications=[];var e={delay:2e3,alertIcon:"notyf__icon--alert",confirmIcon:"notyf__icon--confirm"};arguments[0]&&"object"==typeof arguments[0]?this.options=function(e,t){for(property in t)t.hasOwnProperty(property)&&(e[property]=t[property]);return e}(e,arguments[0]):this.options=e;var t=document.createDocumentFragment(),n=document.createElement("div");n.className="notyf",t.appendChild(n),document.body.appendChild(t),this.container=n,this.animationEnd=function(){var e,t=document.createElement("fake"),n={transition:"animationend",OTransition:"oAnimationEnd",MozTransition:"animationend",WebkitTransition:"webkitAnimationEnd"};for(e in n)if(void 0!==t.style[e])return n[e]}()},this.Notyf.prototype.alert=function(t){var n=e.call(this,t,this.options.alertIcon);n.className+=" notyf--alert",this.container.appendChild(n),this.notifications.push(n)},this.Notyf.prototype.confirm=function(t){var n=e.call(this,t,this.options.confirmIcon);n.className+=" notyf--confirm",this.container.appendChild(n),this.notifications.push(n)}}(),void 0===(r=function(){return Notyf}.call(t,n,t,e))||(e.exports=r)},function(e,t,n){e.exports=n(8).default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.__esModule=!0;var i=o(n(5)),a=r(n(20)),s=r(n(1)),l=o(n(0)),c=o(n(21)),u=r(n(22));function d(){var e=new i.HandlebarsEnvironment;return l.extend(e,i),e.SafeString=a.default,e.Exception=s.default,e.Utils=l,e.escapeExpression=l.escapeExpression,e.VM=c,e.template=function(t){return c.template(t,e)},e}var f=d();f.create=d,u.default(f),f.default=f,t.default=f,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){o.default(e),i.default(e),a.default(e),s.default(e),l.default(e),c.default(e),u.default(e)};var o=r(n(10)),i=r(n(11)),a=r(n(12)),s=r(n(13)),l=r(n(14)),c=r(n(15)),u=r(n(16))},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("blockHelperMissing",function(t,n){var o=n.inverse,i=n.fn;if(!0===t)return i(this);if(!1===t||null==t)return o(this);if(r.isArray(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):o(this);if(n.data&&n.ids){var a=r.createFrame(n.data);a.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:a}}return i(t,n)})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(0),i=n(1),a=(r=i)&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("each",function(e,t){if(!t)throw new a.default("Must pass iterator to #each");var n=t.fn,r=t.inverse,i=0,s="",l=void 0,c=void 0;function u(t,r,i){l&&(l.key=t,l.index=r,l.first=0===r,l.last=!!i,c&&(l.contextPath=c+t)),s+=n(e[t],{data:l,blockParams:o.blockParams([e[t],t],[c+t,null])})}if(t.data&&t.ids&&(c=o.appendContextPath(t.data.contextPath,t.ids[0])+"."),o.isFunction(e)&&(e=e.call(this)),t.data&&(l=o.createFrame(t.data)),e&&"object"==typeof e)if(o.isArray(e))for(var d=e.length;i<d;i++)i in e&&u(i,i,i===e.length-1);else{var f=void 0;for(var p in e)e.hasOwnProperty(p)&&(void 0!==f&&u(f,i-1),f=p,i++);void 0!==f&&u(f,i-1,!0)}return 0===i&&(s=r(this)),s})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(1),i=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new i.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("if",function(e,t){return r.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||r.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,n){return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",function(){for(var t=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var o=1;null!=n.hash.level?o=n.hash.level:n.data&&null!=n.data.level&&(o=n.data.level),t[0]=o,e.log.apply(e,t)})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",function(e,t){return e&&e[t]})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("with",function(e,t){r.isFunction(e)&&(e=e.call(this));var n=t.fn;if(r.isEmpty(e))return t.inverse(this);var o=t.data;return t.data&&t.ids&&((o=r.createFrame(t.data)).contextPath=r.appendContextPath(t.data.contextPath,t.ids[0])),n(e,{data:o,blockParams:r.blockParams([e],[o&&o.contextPath])})})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){i.default(e)};var r,o=n(18),i=(r=o)&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerDecorator("inline",function(e,t,n,o){var i=e;return t.partials||(t.partials={},i=function(o,i){var a=n.partials;n.partials=r.extend({},a,t.partials);var s=e(o,i);return n.partials=a,s}),t.partials[o.args[0]]=o.fn,i})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=r.indexOf(o.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=o.lookupLevel(e),"undefined"!=typeof console&&o.lookupLevel(o.level)<=e){var t=o.methodMap[e];console[t]||(t="log");for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];console[t].apply(console,r)}}};t.default=o,e.exports=t.default},function(e,t,n){"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,n=s.COMPILER_REVISION;if(t!==n){if(t<n){var r=s.REVISION_CHANGES[n],o=s.REVISION_CHANGES[t];throw new a.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+o+").")}throw new a.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}},t.template=function(e,t){if(!t)throw new a.default("No environment passed to template");if(!e||!e.main)throw new a.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n={strict:function(e,t){if(!(t in e))throw new a.default('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var n=e.length,r=0;r<n;r++)if(e[r]&&null!=e[r][t])return e[r][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:o.escapeExpression,invokePartial:function(n,r,i){i.hash&&(r=o.extend({},r,i.hash),i.ids&&(i.ids[0]=!0));n=t.VM.resolvePartial.call(this,n,r,i);var s=t.VM.invokePartial.call(this,n,r,i);null==s&&t.compile&&(i.partials[i.name]=t.compile(n,e.compilerOptions,t),s=i.partials[i.name](r,i));if(null!=s){if(i.indent){for(var l=s.split("\n"),c=0,u=l.length;c<u&&(l[c]||c+1!==u);c++)l[c]=i.indent+l[c];s=l.join("\n")}return s}throw new a.default("The partial "+i.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,o){var i=this.programs[e],a=this.fn(e);return t||o||r||n?i=l(this,e,a,t,n,r,o):i||(i=this.programs[e]=l(this,e,a)),i},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=o.extend({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function r(t){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=o.data;r._setup(o),!o.partial&&e.useData&&(i=function(e,t){t&&"root"in t||((t=t?s.createFrame(t):{}).root=e);return t}(t,i));var a=void 0,l=e.useBlockParams?[]:void 0;function c(t){return""+e.main(n,t,n.helpers,n.partials,i,l,a)}return e.useDepths&&(a=o.depths?t!=o.depths[0]?[t].concat(o.depths):o.depths:[t]),(c=u(e.main,c,n,o.depths||[],i,l))(t,o)}return r.isTop=!0,r._setup=function(r){r.partial?(n.helpers=r.helpers,n.partials=r.partials,n.decorators=r.decorators):(n.helpers=n.merge(r.helpers,t.helpers),e.usePartial&&(n.partials=n.merge(r.partials,t.partials)),(e.usePartial||e.useDecorators)&&(n.decorators=n.merge(r.decorators,t.decorators)))},r._child=function(t,r,o,i){if(e.useBlockParams&&!o)throw new a.default("must pass block params");if(e.useDepths&&!i)throw new a.default("must pass parent depths");return l(n,t,e[t],r,0,o,i)},r},t.wrapProgram=l,t.resolvePartial=function(e,t,n){e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return e},t.invokePartial=function(e,t,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var i=void 0;n.fn&&n.fn!==c&&function(){n.data=s.createFrame(n.data);var e=n.fn;i=n.data["partial-block"]=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=s.createFrame(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=o.extend({},n.partials,e.partials))}();void 0===e&&i&&(e=i);if(void 0===e)throw new a.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)},t.noop=c;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),i=n(1),a=(r=i)&&r.__esModule?r:{default:r},s=n(5);function l(e,t,n,r,o,i,a){function s(t){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=a;return!a||t==a[0]||t===e.nullContext&&null===a[0]||(s=[t].concat(a)),n(e,t,e.helpers,e.partials,o.data||r,i&&[o.blockParams].concat(i),s)}return(s=u(n,s,e,a,r,i)).program=t,s.depth=a?a.length:0,s.blockParams=o||0,s}function c(){return""}function u(e,t,n,r,i,a){if(e.decorator){var s={};t=e.decorator(t,s,n,r&&r[0],i,a,r),o.extend(t,s)}return t}},function(e,t,n){"use strict";(function(n){t.__esModule=!0,t.default=function(e){var t=void 0!==n?n:window,r=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=r),e}},e.exports=t.default}).call(this,n(23))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";e.exports=n(25)},function(e,t,n){"use strict";var r=n(3),o=n(27),i=n(31),a=n(32)||0;function s(){return o(a)}e.exports=s,e.exports.generate=s,e.exports.seed=function(t){return r.seed(t),e.exports},e.exports.worker=function(t){return a=t,e.exports},e.exports.characters=function(e){return void 0!==e&&r.characters(e),r.shuffled()},e.exports.isValid=i},function(e,t,n){"use strict";var r=1;e.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(e){r=e}}},function(e,t,n){"use strict";var r,o,i=n(28),a=(n(3),1459707606518),s=6;e.exports=function(e){var t="",n=Math.floor(.001*(Date.now()-a));return n===o?r++:(r=0,o=n),t+=i(s),t+=i(e),r>0&&(t+=i(r)),t+=i(n)}},function(e,t,n){"use strict";var r=n(3),o=n(29),i=n(30);e.exports=function(e){for(var t,n=0,a="";!t;)a+=i(o,r.get(),1),t=e<Math.pow(16,n+1),n++;return a}},function(e,t,n){"use strict";var r,o="object"==typeof window&&(window.crypto||window.msCrypto);r=o&&o.getRandomValues?function(e){return o.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(256*Math.random()));return t},e.exports=r},function(e,t){e.exports=function(e,t,n){for(var r=(2<<Math.log(t.length-1)/Math.LN2)-1,o=Math.ceil(1.6*r*n/t.length),i="";;)for(var a=e(o),s=0;s<o;s++){var l=a[s]&r;if(t[l]&&(i+=t[l]).length===n)return i}}},function(e,t,n){"use strict";var r=n(3);e.exports=function(e){return!(!e||"string"!=typeof e||e.length<6||new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e))}},function(e,t,n){"use strict";e.exports=0},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r,o,i,a,s,l=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},d=(r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],o=function(){function e(t){var n=t.targetModal,r=t.triggers,o=void 0===r?[]:r,i=t.onShow,a=void 0===i?function(){}:i,s=t.onClose,c=void 0===s?function(){}:s,d=t.openTrigger,f=void 0===d?"data-micromodal-trigger":d,p=t.closeTrigger,h=void 0===p?"data-micromodal-close":p,m=t.disableScroll,v=void 0!==m&&m,g=t.disableFocus,y=void 0!==g&&g,b=t.awaitCloseAnimation,_=void 0!==b&&b,w=t.debugMode,x=void 0!==w&&w;l(this,e),this.modal=document.getElementById(n),this.config={debugMode:x,disableScroll:v,openTrigger:f,closeTrigger:h,onShow:a,onClose:c,awaitCloseAnimation:_,disableFocus:y},o.length>0&&this.registerTriggers.apply(this,u(o)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}return c(e,[{key:"registerTriggers",value:function(){for(var e=this,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];n.forEach(function(t){t.addEventListener("click",function(){return e.showModal()})})}},{key:"showModal",value:function(){this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add("is-open"),this.setFocusToFirstNode(),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.onShow(this.modal)}},{key:"closeModal",value:function(){var e=this.modal;this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement.focus(),this.config.onClose(this.modal),this.config.awaitCloseAnimation?this.modal.addEventListener("animationend",function t(){e.classList.remove("is-open"),e.removeEventListener("animationend",t,!1)},!1):e.classList.remove("is-open")}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:"initial",height:"initial"});break;case"disable":Object.assign(t.style,{overflow:"hidden",height:"100vh"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){e.target.hasAttribute(this.config.closeTrigger)&&(this.closeModal(),e.preventDefault())}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.maintainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(r);return Object.keys(e).map(function(t){return e[t]})}},{key:"setFocusToFirstNode",value:function(){if(!this.config.disableFocus){var e=this.getFocusableNodes();e.length&&e[0].focus()}}},{key:"maintainFocus",value:function(e){var t=this.getFocusableNodes();if(this.modal.contains(document.activeElement)){var n=t.indexOf(document.activeElement);e.shiftKey&&0===n&&(t[t.length-1].focus(),e.preventDefault()),e.shiftKey||n!==t.length-1||(t[0].focus(),e.preventDefault())}else t[0].focus()}}]),e}(),i=null,a=function(e){if(!document.getElementById(e))return console.warn("MicroModal v0.3.1: ❗Seems like you have missed %c'"+e+"'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'+e+'"></div>'),!1},s=function(e,t){if(function(e){if(e.length<=0)console.warn("MicroModal v0.3.1: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>')}(e),!t)return!0;for(var n in t)a(n);return!0},{init:function(e){var t=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),n=[].concat(u(document.querySelectorAll("["+t.openTrigger+"]"))),r=function(e,t){var n=[];return e.forEach(function(e){var r=e.attributes[t].value;void 0===n[r]&&(n[r]=[]),n[r].push(e)}),n}(n,t.openTrigger);if(!0!==t.debugMode||!1!==s(n,r))for(var i in r){var a=r[i];t.targetModal=i,t.triggers=[].concat(u(a)),new o(t)}},show:function(e,t){var n=t||{};n.targetModal=e,!0===n.debugMode&&!1===a(e)||(i=new o(n)).showModal()},close:function(){i.closeModal()}}),f=n(4),p=n.n(f),h=n(2),m=n.n(h);const v="Заметка успешно удалена",g="Заметка успешно добавлена 🎉",y="Заполните поля редактора",b="delete-note",_="edit-note",w="increase-priority",x="decrease-priority",M=n(24);class E{static getPriorityName(e){return E.PRIORITIES[e].name}constructor(e=[]){this._notes=e}get notes(){return this._notes}findNoteById(e){const t=this._notes.find(t=>t.id===e);return console.log(t),t}saveNote(e){return new Promise((t,n)=>setTimeout(()=>{e.id=M.generate(),this._notes.push(e),localStorage.setItem("notes",JSON.stringify(this._notes)),t(e)},300))}loadNotes(){return new Promise((e,t)=>setTimeout(()=>{const t=localStorage.getItem("notes");t&&(this._notes=JSON.parse(t),e(JSON.parse(t)))},300))}deleteNote(e){return new Promise((t,n)=>setTimeout(()=>{this._notes=this._notes.filter(t=>t.id!==e),localStorage.setItem("notes",JSON.stringify(this._notes)),0===this._notes.length&&localStorage.removeItem("notes"),t(this._notes)},300))}updateNoteContent(e,t){const n=this.findNoteById(e);if(!n)return;const r=Object.keys(t);for(const e of r)n[e]=t[e];return n}updateNotePriority(e,t){const n=this.findNoteById(e);if(n)return n.priority=t,n}filterNotesByQuery(e){return new Promise((t,n)=>setTimeout(()=>{const n=[];for(const t of this._notes){const{title:r,body:o}=t;`${r} ${o}`.toLowerCase().includes(e.toLowerCase())&&n.push(t)}t(n)},300))}filterNotesByPriority(e){return this._notes.filter(t=>t.priority===e)}}E.PRIORITIES={0:{id:0,value:0,name:"Low"},1:{id:1,value:1,name:"Normal"},2:{id:2,value:2,name:"High"}};const k=new p.a,P=(e,t)=>{e.innerHTML="",t.map(t=>e.insertAdjacentHTML("beforeend",t))};n(33),n(34);const N=new p.a,O=new E,S=(()=>({noteList:document.querySelector(".note-list"),submitForm:document.querySelector("form.note-editor"),searchForm:document.querySelector("form.search-form"),modalOpen:document.querySelector('[data-action="open-editor"]'),modalSave:document.querySelector('[form="note-editor-form"]')}))();O.loadNotes().then(e=>P(S.noteList,e.map(e=>m()(e))));S.noteList.addEventListener("click",({target:e})=>{if("BUTTON"!==e.parentNode.nodeName)return;switch(e.parentNode.dataset.action){case b:N.confirm(v),(e=>{const t=e.closest(".note-list__item"),n=t.dataset.id;O.deleteNote(n).then(()=>t.remove())})(e);break;case _:console.log("EDIT");break;case w:console.log("INCREASE_PRIORITY");break;case x:console.log("DECREASE_PRIORITY");break;default:alert("NOT A BUTTON")}}),S.submitForm.addEventListener("submit",e=>{e.preventDefault();const[t,n]=e.target.elements;if(!t.value||!n.value)return void N.alert(y);const r={title:t.value,body:n.value,priority:E.getPriorityName(0)};O.saveNote(r).then(e=>((e,t)=>{const n=m()(t);e.insertAdjacentHTML("beforeend",n),k.confirm(g)})(S.noteList,e)),S.submitForm.reset(),d.close("note-editor-modal")}),S.searchForm.addEventListener("input",({target:e})=>{const t=e.value;O.filterNotesByQuery(t).then(e=>P(S.noteList,e.map(e=>m()(e))))}),S.modalOpen.addEventListener("click",()=>{d.show("note-editor-modal")})}]);
//# sourceMappingURL=bundle.js.map