(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{YFqc:function(e,i,n){e.exports=n("cTJO")},b6Qr:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r,s=n("q1tI"),o=(r=s)&&"object"===typeof r&&"default"in r?r.default:r,t=new(n("peHP")),a=t.getBrowser(),l=(t.getCPU(),t.getDevice()),d=t.getEngine(),u=t.getOS(),c=t.getUA(),w=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},m=function(){return!("undefined"===typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},f=function(e){var i=m();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)};function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,i){for(var n=0;n<i.length;n++){var r=i[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function g(){return(g=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,r)}return n}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,i){return(E=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e})(e,i)}function O(e,i){if(null==e)return{};var n,r,s=function(e,i){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],i.indexOf(n)>=0||(s[n]=e[n]);return s}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var S="mobile",C="tablet",N="smarttv",k="console",T="wearable",M=void 0,A={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",EdgeChromium:"Edge Chromium",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},P={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},F={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},V=function(e,i,n,r){return function(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?v(n,!0).forEach((function(i){b(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}({},e,{vendor:w(i.vendor),model:w(i.model),os:w(n.name),osVersion:w(n.version),ua:w(r)})},L=function(e){switch(e){case S:return{isMobile:!0};case C:return{isTablet:!0};case N:return{isSmartTV:!0};case k:return{isConsole:!0};case T:return{isWearable:!0};case M:return{isBrowser:!0};default:return F}}(l.type);var W=function(){return"string"===typeof c&&-1!==c.indexOf("Edg/")},_=function(){return l.type===M},B=function(){return a.name===A.Edge},j=function(){return f("iPad")},I=l.type===N,z=l.type===k,R=l.type===T,D=a.name===A.MobileSafari||j(),U=a.name===A.Chromium,q=function(){switch(l.type){case S:case C:return!0;default:return!1}}()||j(),G=l.type===S,H=l.type===C||j(),K=_(),Y=_(),X=u.name===P.Android,J=u.name===P.WindowsPhone,Q=u.name===P.IOS||j(),$=a.name===A.Chrome,Z=a.name===A.Firefox,ee=a.name===A.Safari||a.name===A.MobileSafari,ie=a.name===A.Opera,ne=a.name===A.InternetExplorer||a.name===A.Ie,re=w(u.version),se=w(u.name),oe=w(a.version),te=w(a.major),ae=w(a.name),le=w(l.vendor),de=w(l.model),ue=w(d.name),ce=w(d.version),we=w(c),me=B()||W(),fe=a.name===A.Yandex,pe=w(l.type,"browser"),he=function(){var e=m();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream}(),be=j(),ge=f("iPhone"),ve=f("iPod"),ye=function(){var e=m(),i=e&&e.userAgent&&e.userAgent.toLowerCase();return"string"===typeof i&&/electron/.test(i)}(),Ee=W(),Oe=B()&&!W(),xe=u.name===P.Windows,Se=u.name===P.MAC_OS,Ce=a.name===A.MIUI,Ne=a.name===A.SamsungBrowser;i.AndroidView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,t=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return X?i?o.createElement(s.Fragment,null,n):o.createElement("div",g({className:r,style:t},a),n):null},i.BrowserTypes=A,i.BrowserView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,t=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return K?i?o.createElement(s.Fragment,null,n):o.createElement("div",g({className:r,style:t},a),n):null},i.ConsoleView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,t=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return z?i?o.createElement(s.Fragment,null,n):o.createElement("div",g({className:r,style:t},a),n):null},i.CustomView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,t=e.style,a=e.condition,l=O(e,["renderWithFragment","children","viewClassName","style","condition"]);return a?i?o.createElement(s.Fragment,null,n):o.createElement("div",g({className:r,style:t},l),n):null},i.IEView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,t=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return ne?i?o.createElement(s.Fragment,null,n):o.createElement("div",g({className:r,style:t},a),n):null},i.IOSView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,t=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return Q?i?o.createElement(s.Fragment,null,n):o.createElement("div",g({className:r,style:t},a),n):null},i.MobileOnlyView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,t=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return G?i?o.createElement(s.Fragment,null,n):o.createElement("div",g({className:r,style:t},a),n):null},i.MobileView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,t=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return q?i?o.createElement(s.Fragment,null,n):o.createElement("div",g({className:r,style:t},a),n):null},i.OsTypes=P,i.SmartTVView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,t=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return I?i?o.createElement(s.Fragment,null,n):o.createElement("div",g({className:r,style:t},a),n):null},i.TabletView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,t=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return H?i?o.createElement(s.Fragment,null,n):o.createElement("div",g({className:r,style:t},a),n):null},i.WearableView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,t=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return R?i?o.createElement(s.Fragment,null,n):o.createElement("div",g({className:r,style:t},a),n):null},i.WinPhoneView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,t=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return J?i?o.createElement(s.Fragment,null,n):o.createElement("div",g({className:r,style:t},a),n):null},i.browserName=ae,i.browserVersion=te,i.deviceDetect=function(){var e=L.isBrowser,i=L.isMobile,n=L.isTablet,r=L.isSmartTV,s=L.isConsole,o=L.isWearable;return e?function(e,i,n,r,s){return{isBrowser:e,browserMajorVersion:w(i.major),browserFullVersion:w(i.version),browserName:w(i.name),engineName:w(n.name),engineVersion:w(n.version),osName:w(r.name),osVersion:w(r.version),userAgent:w(s)}}(e,a,d,u,c):r?function(e,i,n,r){return{isSmartTV:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(n.name),osVersion:w(n.version),userAgent:w(r)}}(r,d,u,c):s?function(e,i,n,r){return{isConsole:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(n.name),osVersion:w(n.version),userAgent:w(r)}}(s,d,u,c):i||n?V(L,l,u,c):o?function(e,i,n,r){return{isWearable:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(n.name),osVersion:w(n.version),userAgent:w(r)}}(o,d,u,c):void 0},i.deviceType=pe,i.engineName=ue,i.engineVersion=ce,i.fullBrowserVersion=oe,i.getUA=we,i.isAndroid=X,i.isBrowser=K,i.isChrome=$,i.isChromium=U,i.isConsole=z,i.isDesktop=Y,i.isEdge=me,i.isEdgeChromium=Ee,i.isElectron=ye,i.isFirefox=Z,i.isIE=ne,i.isIOS=Q,i.isIOS13=he,i.isIPad13=be,i.isIPhone13=ge,i.isIPod13=ve,i.isLegacyEdge=Oe,i.isMIUI=Ce,i.isMacOs=Se,i.isMobile=q,i.isMobileOnly=G,i.isMobileSafari=D,i.isOpera=ie,i.isSafari=ee,i.isSamsungBrowser=Ne,i.isSmartTV=I,i.isTablet=H,i.isWearable=R,i.isWinPhone=J,i.isWindows=xe,i.isYandex=fe,i.mobileModel=de,i.mobileVendor=le,i.osName=se,i.osVersion=re,i.withOrientationChange=function(e){return function(i){function n(e){var i,r,s;return function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,n),r=this,(i=!(s=y(n).call(this,e))||"object"!==typeof s&&"function"!==typeof s?x(r):s).isEventListenerAdded=!1,i.handleOrientationChange=i.handleOrientationChange.bind(x(i)),i.onOrientationChange=i.onOrientationChange.bind(x(i)),i.onPageLoad=i.onPageLoad.bind(x(i)),i.state={isLandscape:!1,isPortrait:!1},i}var r,s,t;return function(e,i){if("function"!==typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&E(e,i)}(n,i),r=n,(s=[{key:"handleOrientationChange",value:function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var e=window.innerWidth>window.innerHeight?90:0;this.setState({isPortrait:0===e,isLandscape:90===e})}},{key:"onOrientationChange",value:function(){this.handleOrientationChange()}},{key:"onPageLoad",value:function(){this.handleOrientationChange()}},{key:"componentDidMount",value:function(){void 0!==("undefined"===typeof window?"undefined":p(window))&&q&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onOrientationChange,!1)}},{key:"render",value:function(){return o.createElement(e,g({},this.props,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait}))}}])&&h(r.prototype,s),t&&h(r,t),n}(o.Component)}},cTJO:function(e,i,n){"use strict";var r=n("J4zp"),s=n("284h");i.__esModule=!0,i.default=void 0;var o=s(n("q1tI")),t=n("elyg"),a=n("nOHt"),l=n("vNVm"),d={};function u(e,i,n,r){if(e&&(0,t.isLocalURL)(i)){e.prefetch(i,n,r).catch((function(e){0}));var s=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;d[i+"%"+n+(s?"%"+s:"")]=!0}}var c=function(e){var i=!1!==e.prefetch,n=(0,a.useRouter)(),s=n&&n.pathname||"/",c=o.default.useMemo((function(){var i=(0,t.resolveHref)(s,e.href,!0),n=r(i,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,t.resolveHref)(s,e.as):a||o}}),[s,e.href,e.as]),w=c.href,m=c.as,f=e.children,p=e.replace,h=e.shallow,b=e.scroll,g=e.locale;"string"===typeof f&&(f=o.default.createElement("a",null,f));var v=o.Children.only(f),y=v&&"object"===typeof v&&v.ref,E=(0,l.useIntersection)({rootMargin:"200px"}),O=r(E,2),x=O[0],S=O[1],C=o.default.useCallback((function(e){x(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,x]);(0,o.useEffect)((function(){var e=S&&i&&(0,t.isLocalURL)(w),r="undefined"!==typeof g?g:n&&n.locale,s=d[w+"%"+m+(r?"%"+r:"")];e&&!s&&u(n,w,m,{locale:r})}),[m,w,S,g,i,n]);var N={ref:C,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,i,n,r,s,o,a,l){("A"!==e.currentTarget.nodeName||!function(e){var i=e.currentTarget.target;return i&&"_self"!==i||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,t.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),i[s?"replace":"push"](n,r,{shallow:o,locale:l,scroll:a}).then((function(e){e&&a&&document.body.focus()})))}(e,n,w,m,p,h,b,g)},onMouseEnter:function(e){(0,t.isLocalURL)(w)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),u(n,w,m,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var k="undefined"!==typeof g?g:n&&n.locale,T=n&&n.isLocaleDomain&&(0,t.getDomainLocale)(m,k,n&&n.locales,n&&n.domainLocales);N.href=T||(0,t.addBasePath)((0,t.addLocale)(m,k,n&&n.defaultLocale))}return o.default.cloneElement(v,N)};i.default=c},g4pe:function(e,i,n){e.exports=n("8Kt/")},peHP:function(e,i,n){var r;!function(s,o){"use strict";var t="function",a="undefined",l="object",d="model",u="name",c="type",w="vendor",m="version",f="architecture",p="console",h="mobile",b="tablet",g="smarttv",v="wearable",y={extend:function(e,i){var n={};for(var r in e)i[r]&&i[r].length%2===0?n[r]=i[r].concat(e[r]):n[r]=e[r];return n},has:function(e,i){return"string"===typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"===typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:o},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},E={rgx:function(e,i){for(var n,r,s,a,d,u,c=0;c<i.length&&!d;){var w=i[c],m=i[c+1];for(n=r=0;n<w.length&&!d;)if(d=w[n++].exec(e))for(s=0;s<m.length;s++)u=d[++r],typeof(a=m[s])===l&&a.length>0?2==a.length?typeof a[1]==t?this[a[0]]=a[1].call(this,u):this[a[0]]=a[1]:3==a.length?typeof a[1]!==t||a[1].exec&&a[1].test?this[a[0]]=u?u.replace(a[1],a[2]):o:this[a[0]]=u?a[1].call(this,u,a[2]):o:4==a.length&&(this[a[0]]=u?a[3].call(this,u.replace(a[1],a[2])):o):this[a]=u||o;c+=2}},str:function(e,i){for(var n in i)if(typeof i[n]===l&&i[n].length>0){for(var r=0;r<i[n].length;r++)if(y.has(i[n][r],e))return"?"===n?o:n}else if(y.has(i[n],e))return"?"===n?o:n;return e}},O={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},x={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6}).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[u,m],[/(opios)[\/\s]+([\w\.]+)/i],[[u,"Opera Mini"],m],[/\s(opr)\/([\w\.]+)/i],[[u,"Opera"],m],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[u,m],[/(konqueror)\/([\w\.]+)/i],[[u,"Konqueror"],m],[/(trident).+rv[:\s]([\w\.]{1,9}).+like\sgecko/i],[[u,"IE"],m],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[u,"Edge"],m],[/(yabrowser)\/([\w\.]+)/i],[[u,"Yandex"],m],[/(Avast)\/([\w\.]+)/i],[[u,"Avast Secure Browser"],m],[/(AVG)\/([\w\.]+)/i],[[u,"AVG Secure Browser"],m],[/(puffin)\/([\w\.]+)/i],[[u,"Puffin"],m],[/(focus)\/([\w\.]+)/i],[[u,"Firefox Focus"],m],[/(opt)\/([\w\.]+)/i],[[u,"Opera Touch"],m],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[u,"UCBrowser"],m],[/(comodo_dragon)\/([\w\.]+)/i],[[u,/_/g," "],m],[/(windowswechat qbcore)\/([\w\.]+)/i],[[u,"WeChat(Win) Desktop"],m],[/(micromessenger)\/([\w\.]+)/i],[[u,"WeChat"],m],[/(brave)\/([\w\.]+)/i],[[u,"Brave"],m],[/(whale)\/([\w\.]+)/i],[[u,"Whale"],m],[/(qqbrowserlite)\/([\w\.]+)/i],[u,m],[/(QQ)\/([\d\.]+)/i],[u,m],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[u,m],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[u,m],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[u,m],[/(MetaSr)[\/\s]?([\w\.]+)/i],[u],[/(LBBROWSER)/i],[u],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[m,[u,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[m,[u,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[u,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[u,m],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[m,[u,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[u,/(.+)/,"$1 WebView"],m],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[u,/(.+(?:g|us))(.+)/,"$1 $2"],m],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[m,[u,"Android Browser"]],[/(coc_coc_browser)\/([\w\.]+)/i],[[u,"Coc Coc"],m],[/(sailfishbrowser)\/([\w\.]+)/i],[[u,"Sailfish Browser"],m],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[u,m],[/(dolfin)\/([\w\.]+)/i],[[u,"Dolphin"],m],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[u,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[u,"Chrome"],m],[/(coast)\/([\w\.]+)/i],[[u,"Opera Coast"],m],[/fxios\/([\w\.-]+)/i],[m,[u,"Firefox"]],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[m,[u,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[m,u],[/webkit.+?(gsa)\/([\w\.]+)\s.*(mobile\s?safari|safari)(\/[\w\.]+)/i],[[u,"GSA"],m],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[u,[m,E.str,O.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[u,m],[/(navigator|netscape)\/([\w\.-]+)/i],[[u,"Netscape"],m],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[u,m]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[f,"amd64"]],[/(ia32(?=;))/i],[[f,y.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[f,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[f,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[f,/ower/,"",y.lowerize]],[/(sun4\w)[;\)]/i],[[f,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[f,y.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[d,w,[c,b]],[/applecoremedia\/[\w\.]+ \((ipad)/],[d,[w,"Apple"],[c,b]],[/(apple\s{0,1}tv)/i],[[d,"Apple TV"],[w,"Apple"],[c,g]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[w,d,[c,b]],[/(kf[A-z]+)(\sbuild\/|\)).+silk\//i],[d,[w,"Amazon"],[c,b]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[d,E.str,O.device.amazon.model],[w,"Amazon"],[c,h]],[/android.+aft([\w])(\sbuild\/|\))/i],[d,[w,"Amazon"],[c,g]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[d,w,[c,h]],[/\((ip[honed|\s\w*]+);/i],[d,[w,"Apple"],[c,h]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[w,d,[c,h]],[/\(bb10;\s(\w+)/i],[d,[w,"BlackBerry"],[c,h]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[d,[w,"Asus"],[c,b]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[w,"Sony"],[d,"Xperia Tablet"],[c,b]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[d,[w,"Sony"],[c,h]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[w,d,[c,p]],[/android.+;\s(shield)\sbuild/i],[d,[w,"Nvidia"],[c,p]],[/(playstation\s[34portablevi]+)/i],[d,[w,"Sony"],[c,p]],[/(sprint\s(\w+))/i],[[w,E.str,O.device.sprint.vendor],[d,E.str,O.device.sprint.model],[c,h]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[w,[d,/_/g," "],[c,h]],[/(nexus\s9)/i],[d,[w,"HTC"],[c,b]],[/d\/huawei([\w\s-]+)[;\)]/i,/android.+\s(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?)/i],[d,[w,"Huawei"],[c,h]],[/android.+(bah2?-a?[lw]\d{2})/i],[d,[w,"Huawei"],[c,b]],[/(microsoft);\s(lumia[\s\w]+)/i],[w,d,[c,h]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[d,[w,"Microsoft"],[c,p]],[/(kin\.[onetw]{3})/i],[[d,/\./g," "],[w,"Microsoft"],[c,h]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[d,[w,"Motorola"],[c,h]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[d,[w,"Motorola"],[c,b]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[w,y.trim],[d,y.trim],[c,g]],[/hbbtv.+maple;(\d+)/i],[[d,/^/,"SmartTV"],[w,"Samsung"],[c,g]],[/\(dtv[\);].+(aquos)/i],[d,[w,"Sharp"],[c,g]],[/android.+((sch-i[89]0\d|shw-m380s|SM-P605|SM-P610|SM-P587|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[w,"Samsung"],d,[c,b]],[/smart-tv.+(samsung)/i],[w,[c,g],d],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[w,"Samsung"],d,[c,h]],[/sie-(\w*)/i],[d,[w,"Siemens"],[c,h]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[w,"Nokia"],d,[c,h]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[d,[w,"Acer"],[c,b]],[/android.+([vl]k\-?\d{3})\s+build/i],[d,[w,"LG"],[c,b]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[w,"LG"],d,[c,b]],[/linux;\snetcast.+smarttv/i,/lg\snetcast\.tv-201\d/i],[[w,"LG"],d,[c,g]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[d,[w,"LG"],[c,h]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[w,d,[c,b]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[d,[w,"Lenovo"],[c,b]],[/(lenovo)[_\s-]?([\w-]+)/i],[w,d,[c,h]],[/linux;.+((jolla));/i],[w,d,[c,h]],[/((pebble))app\/[\d\.]+\s/i],[w,d,[c,v]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[w,d,[c,h]],[/crkey/i],[[d,"Chromecast"],[w,"Google"],[c,g]],[/android.+;\s(glass)\s\d/i],[d,[w,"Google"],[c,v]],[/android.+;\s(pixel c)[\s)]/i],[d,[w,"Google"],[c,b]],[/android.+;\s(pixel( [2-9]a?)?( xl)?)[\s)]/i],[d,[w,"Google"],[c,h]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/android.+(redmi[\s\-_]?(?:note|k)?(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i,/android.+(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[d,/_/g," "],[w,"Xiaomi"],[c,h]],[/android.+(mi[\s\-_]?(?:pad)(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i],[[d,/_/g," "],[w,"Xiaomi"],[c,b]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[d,[w,"Meizu"],[c,h]],[/(mz)-([\w-]{2,})/i],[[w,"Meizu"],d,[c,h]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[d,[w,"OnePlus"],[c,h]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[d,[w,"RCA"],[c,b]],[/android.+[;\/\s](Venue[\d\s]{2,7})\s+build/i],[d,[w,"Dell"],[c,b]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[d,[w,"Verizon"],[c,b]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(\S(?:.*\S)?)\s+build/i],[[w,"Barnes & Noble"],d,[c,b]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[d,[w,"NuVision"],[c,b]],[/android.+;\s(k88)\sbuild/i],[d,[w,"ZTE"],[c,b]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[d,[w,"Swiss"],[c,h]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[d,[w,"Swiss"],[c,b]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[d,[w,"Zeki"],[c,b]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[w,"Dragon Touch"],d,[c,b]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[d,[w,"Insignia"],[c,b]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[d,[w,"NextBook"],[c,b]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[w,"Voice"],d,[c,h]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[w,"LvTel"],d,[c,h]],[/android.+;\s(PH-1)\s/i],[d,[w,"Essential"],[c,h]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[d,[w,"Envizen"],[c,b]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[w,d,[c,b]],[/android.+[;\/]\s*(Trio[\s\w\-\.]+)\s+build/i],[d,[w,"MachSpeed"],[c,b]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[w,d,[c,b]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[d,[w,"Rotor"],[c,b]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[w,d,[c,b]],[/android .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[d,[c,h]],[/android .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[d,[c,b]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[c,y.lowerize],w,d],[/[\s\/\(](smart-?tv)[;\)]/i],[[c,g]],[/(android[\w\.\s\-]{0,9});.+build/i],[d,[w,"Generic"]],[/(phone)/i],[[c,h]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[m,[u,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[u,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[u,m],[/rv\:([\w\.]{1,9}).+(gecko)/i],[m,u]],os:[[/(xbox);\s+xbox\s([^\);]+)/i,/microsoft\s(windows)\s(vista|xp)/i],[u,m],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[u,[m,E.str,O.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[u,"Windows"],[m,E.str,O.os.windows.version]],[/\((bb)(10);/i],[[u,"BlackBerry"],m],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[u,m],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[u,"Symbian"],m],[/\((series40);/i],[u],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[u,"Firefox OS"],m],[/crkey\/([\d\.]+)/i],[m,[u,"Chromecast"]],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[u,m],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[u,"Chromium OS"],m],[/(sunos)\s?([\w\.\d]*)/i],[[u,"Solaris"],m],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[u,m],[/(haiku)\s(\w+)/i],[u,m],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[m,/_/g,"."],[u,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[u,"Mac OS"],[m,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[u,m]]},S=function(e,i){if("object"===typeof e&&(i=e,e=o),!(this instanceof S))return new S(e,i).getResult();var n=e||(s&&s.navigator&&s.navigator.userAgent?s.navigator.userAgent:""),r=i?y.extend(x,i):x;return this.getBrowser=function(){var e={name:o,version:o};return E.rgx.call(e,n,r.browser),e.major=y.major(e.version),e},this.getCPU=function(){var e={architecture:o};return E.rgx.call(e,n,r.cpu),e},this.getDevice=function(){var e={vendor:o,model:o,type:o};return E.rgx.call(e,n,r.device),e},this.getEngine=function(){var e={name:o,version:o};return E.rgx.call(e,n,r.engine),e},this.getOS=function(){var e={name:o,version:o};return E.rgx.call(e,n,r.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this};S.VERSION="0.7.24",S.BROWSER={NAME:u,MAJOR:"major",VERSION:m},S.CPU={ARCHITECTURE:f},S.DEVICE={MODEL:d,VENDOR:w,TYPE:c,CONSOLE:p,MOBILE:h,SMARTTV:g,TABLET:b,WEARABLE:v,EMBEDDED:"embedded"},S.ENGINE={NAME:u,VERSION:m},S.OS={NAME:u,VERSION:m},typeof i!==a?(typeof e!==a&&e.exports&&(i=e.exports=S),i.UAParser=S):(r=function(){return S}.call(i,n,i,e))===o||(e.exports=r);var C=s&&(s.jQuery||s.Zepto);if(C&&!C.ua){var N=new S;C.ua=N.getResult(),C.ua.get=function(){return N.getUA()},C.ua.set=function(e){N.setUA(e);var i=N.getResult();for(var n in i)C.ua[n]=i[n]}}}("object"===typeof window?window:this)}}]);