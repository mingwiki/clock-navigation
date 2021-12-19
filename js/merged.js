

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js from "js_files_list.txt" begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


/* Last merge : Sun Dec 19 19:14:35 CST 2021  */

/* Merging order :

- svg-inject.min.js
- config.js
- body.js
- form.js
- clock.js
- help.js
- influencers.js
- queryParser.js
- suggester.js
- index.js
- snow.js

*/


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: svg-inject.min.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


!function(o,l){var r,a,s="createElement",g="getElementsByTagName",b="length",E="style",d="title",y="undefined",k="setAttribute",w="getAttribute",x=null,A="__svgInject",C="--inject-",S=new RegExp(C+"\\d+","g"),I="LOAD_FAIL",t="SVG_NOT_SUPPORTED",L="SVG_INVALID",v=["src","alt","onload","onerror"],j=l[s]("a"),G=typeof SVGRect!=y,f={useCache:!0,copyAttributes:!0,makeIdsUnique:!0},N={clipPath:["clip-path"],"color-profile":x,cursor:x,filter:x,linearGradient:["fill","stroke"],marker:["marker",
"marker-end","marker-mid","marker-start"],mask:x,pattern:["fill","stroke"],radialGradient:["fill","stroke"]},u=1,c=2,O=1;function T(e){return(r=r||new XMLSerializer).serializeToString(e)}function P(e,r){var t,n,i,o,a=C+O++,f=/url\("?#([a-zA-Z][\w:.-]*)"?\)/g,u=e.querySelectorAll("[id]"),c=r?[]:x,l={},s=[],d=!1;if(u[b]){for(i=0;i<u[b];i++)(n=u[i].localName)in N&&(l[n]=1);for(n in l)(N[n]||[n]).forEach(function(e){s.indexOf(e)<0&&s.push(e)});s[b]&&s.push(E);var v,p,m,h=e[g]("*"),y=e;for(i=-1;y!=x;
){if(y.localName==E)(m=(p=y.textContent)&&p.replace(f,function(e,r){return c&&(c[r]=1),"url(#"+r+a+")"}))!==p&&(y.textContent=m);else if(y.hasAttributes()){for(o=0;o<s[b];o++)v=s[o],(m=(p=y[w](v))&&p.replace(f,function(e,r){return c&&(c[r]=1),"url(#"+r+a+")"}))!==p&&y[k](v,m);["xlink:href","href"].forEach(function(e){var r=y[w](e);/^\s*#/.test(r)&&(r=r.trim(),y[k](e,r+a),c&&(c[r.substring(1)]=1))})}y=h[++i]}for(i=0;i<u[b];i++)t=u[i],c&&!c[t.id]||(t.id+=a,d=!0)}return d}function V(e,r,t,n){if(r){
r[k]("data-inject-url",t);var i=e.parentNode;if(i){n.copyAttributes&&function c(e,r){for(var t,n,i,o=e.attributes,a=0;a<o[b];a++)if(n=(t=o[a]).name,-1==v.indexOf(n))if(i=t.value,n==d){var f,u=r.firstElementChild;u&&u.localName.toLowerCase()==d?f=u:(f=l[s+"NS"]("http://www.w3.org/2000/svg",d),r.insertBefore(f,u)),f.textContent=i}else r[k](n,i)}(e,r);var o=n.beforeInject,a=o&&o(e,r)||r;i.replaceChild(a,e),e[A]=u,m(e);var f=n.afterInject;f&&f(e,a)}}else D(e,n)}function p(){for(var e={},r=arguments,
t=0;t<r[b];t++){var n=r[t];for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])}return e}function _(e,r){if(r){var t;try{t=function i(e){return(a=a||new DOMParser).parseFromString(e,"text/xml")}(e)}catch(o){return x}return t[g]("parsererror")[b]?x:t.documentElement}var n=l.createElement("div");return n.innerHTML=e,n.firstElementChild}function m(e){e.removeAttribute("onload")}function n(e){console.error("SVGInject: "+e)}function i(e,r,t){e[A]=c,t.onFail?t.onFail(e,r):n(r)}function D(e,r){m(e),i(e,L,r)
}function F(e,r){m(e),i(e,t,r)}function M(e,r){i(e,I,r)}function q(e){e.onload=x,e.onerror=x}function R(e){n("no img element")}var e=function z(e,r){var t=p(f,r),h={};function n(a,f){f=p(t,f);var e=function(r){var e=function(){var e=f.onAllFinish;e&&e(),r&&r()};if(a&&typeof a[b]!=y){var t=0,n=a[b];if(0==n)e();else for(var i=function(){++t==n&&e()},o=0;o<n;o++)u(a[o],f,i)}else u(a,f,e)};return typeof Promise==y?e():new Promise(e)}function u(u,c,e){if(u){var r=u[A];if(r)Array.isArray(r)?r.push(e
):e();else{if(q(u),!G)return F(u,c),void e();var t=c.beforeLoad,n=t&&t(u)||u[w]("src");if(!n)return""===n&&M(u,c),void e();var i=[];u[A]=i;var l=function(){e(),i.forEach(function(e){e()})},s=function f(e){return j.href=e,j.href}(n),d=c.useCache,v=c.makeIdsUnique,p=function(r){d&&(h[s].forEach(function(e){e(r)}),h[s]=r)};if(d){var o,a=function(e){if(e===I)M(u,c);else if(e===L)D(u,c);else{var r,t=e[0],n=e[1],i=e[2];v&&(t===x?(t=P(r=_(n,!1),!1),e[0]=t,e[2]=t&&T(r)):t&&(n=function o(e){
return e.replace(S,C+O++)}(i))),r=r||_(n,!1),V(u,r,s,c)}l()};if(typeof(o=h[s])!=y)return void(o.isCallbackQueue?o.push(a):a(o));(o=[]).isCallbackQueue=!0,h[s]=o}!function m(e,r,t){if(e){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==n.readyState){var e=n.status;200==e?r(n.responseXML,n.responseText.trim()):400<=e?t():0==e&&t()}},n.open("GET",e,!0),n.send()}}(s,function(e,r){var t=e instanceof Document?e.documentElement:_(r,!0),n=c.afterLoad;if(n){var i=n(t,r)||t;if(i){
var o="string"==typeof i;r=o?i:T(t),t=o?_(i,!0):i}}if(t instanceof SVGElement){var a=x;if(v&&(a=P(t,!1)),d){var f=a&&T(t);p([a,r,f])}V(u,t,s,c)}else D(u,c),p(L);l()},function(){M(u,c),p(I),l()})}}else R()}return G&&function i(e){var r=l[g]("head")[0];if(r){var t=l[s](E);t.type="text/css",t.appendChild(l.createTextNode(e)),r.appendChild(t)}}('img[onload^="'+e+'("]{visibility:hidden;}'),n.setOptions=function(e){t=p(t,e)},n.create=z,n.err=function(e,r){e?e[A]!=c&&(q(e),G?(m(e),M(e,t)):F(e,t),r&&(m(
e),e.src=r)):R()},o[e]=n}("SVGInject");"object"==typeof module&&"object"==typeof module.exports&&(module.exports=e)}(window,document);

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: config.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
  commands: [{
    name: "Google",
    key: "*",
    url: "https://google.com",
    search: "/search?q={}&pws=0&gl=us&gws_rd=cr",
  },
  {
    category: "General",
    name: "Mail",
    key: "m",
    url: "https://gmail.com",
    search: "/#search/text={}",
    color: "linear-gradient(135deg, #dd5145, #dd5145)",
    icon: "mail",
    quickLaunch: true,
  },
  {
    category: "General",
    name: "Anki",
    url: "https://anki.naizi.fun",
    color: "linear-gradient(135deg, #dd5145, #dd5145)",
    icon: "note",
    quickLaunch: false,
  },
  // {
  //   category: "General",
  //   name: "Downloader",
  //   url: "https://dl.naizi.fun",
  //   color: "linear-gradient(135deg, #dd5145, #dd5145)",
  //   icon: "download",
  //   quickLaunch: false,
  // },
  {
    category: "General",
    name: "Files",
    key: "f",
    url: "https://dl.naizi.fun/files",
    color: "linear-gradient(135deg, #dd5145, #dd5145)",
    icon: "files",
    quickLaunch: false,
  },
  {
    category: "General",
    name: "WebDav",
    url: "https://dav.naizi.fun/",
    color: "linear-gradient(135deg, #dd5145, #dd5145)",
    icon: "webdav",
    quickLaunch: false,
  },
  {
    category: "Programming",
    name: "My Git",
    key: "g",
    url: "https://git.naizi.fun/mingwiki",
    search: "/?repo-search-query={}",
    color: "linear-gradient(135deg, #2b2b2b, #3b3b3b)",
    icon: "git",
    quickLaunch: true,
  },
  {
    category: "Programming",
    name: "StackOverflow",
    key: "st",
    url: "https://stackoverflow.com",
    search: "/search?q={}",
    color: "linear-gradient(135deg, #53341C, #F48024)",
    icon: "stackoverflow",
    quickLaunch: true,
  },
  {
    category: "Programming",
    name: "MDN",
    key: "md",
    url: "https://developer.mozilla.org/zh-CN/",
    search: "/search?q={}",
    color: "#212121",
    icon: "mdn",
    quickLaunch: false,
  },

  {
    category: "Fun",
    name: "YouTube",
    key: "y",
    url: "https://youtube.com",
    search: "/results?search_query={}",
    color: "linear-gradient(135deg, #cd201f, #cd4c1f)",
    icon: "youtube",
    quickLaunch: false,
  },
  // {
  //   category: "Fun",
  //   name: "YouTube Music",
  //   key: "ym",
  //   url: "https://music.youtube.com/",
  //   search: "/search?q={}",
  //   color: "linear-gradient(135deg, #cd201f, #cd4c1f)",
  //   icon: "music",
  //   quickLaunch: false,
  // },
  {
    category: "Fun",
    name: "Pixiv",
    key: "p",
    url: "https://www.pixiv.net/",
    search: "/tags/{}",
    color: "linear-gradient(135deg, #cd201f, #cd4c1f)",
    icon: "pixiv",
    quickLaunch: false,
  },
  {
    category: "Fun",
    name: "bilibili",
    url: "https://www.bilibili.com/",
    color: "linear-gradient(135deg, #cd201f, #cd4c1f)",
    icon: "bilibili-line",
    quickLaunch: false,
  },

  {
    category: "Other",
    name: "Translate",
    key: "t",
    url: "https://translate.google.com/",
    search: "/#view=home&op=translate&sl=auto&tl=en&text={}",
    color: "#1a73e8",
    icon: "translate",
    quickLaunch: false,
  },
  {
    category: "Other",
    name: "iconfont",
    key: "if",
    url: "https://www.iconfont.cn/",
    search: "/search/index?searchType=icon&q={}",
    color: "#1a73e8",
    icon: "library-img",
    quickLaunch: false,
  },
  {
    category: "Other",
    name: "Bitwarden",
    url: "https://bitwarden.naizi.fun/",
    color: "linear-gradient(135deg, #dd5145, #dd5145)",
    icon: "bitwarden",
    quickLaunch: false,
  },
  {
    category: "Other",
    name: "Baidu",
    key: "b",
    url: "https://www.baidu.com/",
    search: "/s?wd={}",
    color: "linear-gradient(135deg, #cd201f, #cd4c1f)",
    icon: "baidu",
    quickLaunch: false,
  },

  ],

  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 4,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Commands" suggestions come from CONFIG.commands
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [{
    name: "Commands",
    limit: 2,
  },
  {
    name: "Default",
    limit: 4,
  },
  {
    name: "History",
    limit: 1,
  },
  {
    name: "DuckDuckGo",
    limit: 4,
  },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {
    g: ["g/issues", "g/pulls", "gist.github.com"],
    r: ["r/r/unixporn", "r/r/startpages", "r/r/webdev", "r/r/technology"],
  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: false,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: true,

  /**
   * Invert color theme
   */
  invertedColors: false,

  /**
   * Show keys instead of icons
   */
  showKeys: false,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: " ",

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: "/",

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: ":",
  
  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: true,

  /**
   * File extension for icon images
   */
  iconExtension: "png",
};

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: body.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


const $ = {
    bodyClassAdd: c => $.el('body').classList.add(c),
    bodyClassRemove: c => $.el('body').classList.remove(c),
    el: s => document.querySelector(s),
    els: s => [].slice.call(document.querySelectorAll(s) || []),
    escapeRegex: s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'),
    flattenAndUnique: arr => [...new Set([].concat.apply([], arr))],
    ieq: (a, b) => a.toLowerCase() === b.toLowerCase(),
    iin: (a, b) => a.toLowerCase().indexOf(b.toLowerCase()) !== -1,
    isDown: e => ['c-n', 'down', 'tab'].includes($.key(e)),
    isRemove: e => ['backspace', 'delete'].includes($.key(e)),
    isUp: e => ['c-p', 'up', 's-tab'].includes($.key(e)),
  
    jsonp: url => {
      let script = document.createElement('script');
      script.src = url;
      $.el('head').appendChild(script);
    },
  
    key: e => {
      const ctrl = e.ctrlKey;
      const shift = e.shiftKey;
  
      switch (e.which) {
        case 8:
          return 'backspace';
        case 9:
          return shift ? 's-tab' : 'tab';
        case 13:
          return ctrl ? 'c-enter' : 'enter';
        case 16:
          return 'shift';
        case 17:
          return 'ctrl';
        case 18:
          return 'alt';
        case 27:
          return 'escape';
        case 38:
          return 'up';
        case 40:
          return 'down';
        case 46:
          return 'delete';
        case 78:
          return ctrl ? 'c-n' : 'n';
        case 80:
          return ctrl ? 'c-p' : 'p';
        case 189:
          return 'dash';
        case 91:
        case 93:
        case 224:
          return 'super';
      }
    },
  
    pad: v => ('0' + v.toString()).slice(-2),
  };

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: form.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


class Form {
    constructor(options) {
      this._colors = options.colors;
      this._formEl = $.el('#search-form');
      this._inputEl = $.el('#search-input');
      this._inputElVal = '';
      this._instantRedirect = options.instantRedirect;
      this._newTab = options.newTab;
      this._parseQuery = options.parseQuery;
      this._suggester = options.suggester;
      this._toggleHelp = options.toggleHelp;
      this._quickLaunch = options.quickLaunch;
      this._categoryLaunch = options.categoryLaunch;
      this._clearPreview = this._clearPreview.bind(this);
      this._handleInput = this._handleInput.bind(this);
      this._handleKeyup = this._handleKeyup.bind(this);
      this._handleKeydown = this._handleKeydown.bind(this);
      this._previewValue = this._previewValue.bind(this);
      this._submitForm = this._submitForm.bind(this);
      this._submitWithValue = this._submitWithValue.bind(this);
      this._invertColors = options.invertedColors;
      this.hide = this.hide.bind(this);
      this.show = this.show.bind(this);
      this._registerEvents();
      this._loadQueryParam();
      this.invert();
      this.isCtrlEnter = false;
    }
  
    hide() {
      $.bodyClassRemove('form');
      this._inputEl.value = '';
      this._inputElVal = '';
      this._suggester.suggest('');
      this._setBackgroundFromQuery('');
    }
  
    show() {
      $.bodyClassAdd('form');
      this._inputEl.focus();
    }
  
    invert() {
      if (this._invertColors) {
        const bgcolor = getComputedStyle(document.documentElement).getPropertyValue('--background');
        const fgcolor = getComputedStyle(document.documentElement).getPropertyValue('--foreground');
        document.documentElement.style.setProperty('--background', fgcolor);
        document.documentElement.style.setProperty('--foreground', bgcolor);    
      }
    }
  
    _invertConfig() {
      let isInverted = !CONFIG.invertedColors;
      localStorage.removeItem('invertColorCookie');
      localStorage.setItem('invertColorCookie', JSON.stringify(isInverted));
      location.reload();
    }
  
    _showKeysConfig() {
      let isShowKeys = !CONFIG.showKeys;
      localStorage.removeItem('showKeysCookie');
      localStorage.setItem('showKeysCookie', JSON.stringify(isShowKeys));
      location.reload();
    }
  
    _clearPreview() {
      this._previewValue(this._inputElVal);
      this._inputEl.focus();
    }
  
    _isCategoryLaunch(num){
      if(/^\d/.test(num[0]) && num[1] === '!'){
        return true
      } else {
        return false;
      }
    }
  
    _handleInput() {
      const newQuery = this._inputEl.value;
      const isHelp = newQuery === '?';
      const isLaunch = newQuery === 'q!';
      const isInvert = newQuery === 'invert!';
      const isShowKeys = newQuery === 'keys!';
      const isCategoryLaunch = this._isCategoryLaunch(newQuery);
      const { isKey } = this._parseQuery(newQuery);
      this._inputElVal = newQuery;
      this._suggester.suggest(newQuery);
      this._setBackgroundFromQuery(newQuery);
      if (!newQuery || isHelp) this.hide();
      if (isHelp) this._toggleHelp();
      if (isLaunch) this._quickLaunch();
      if (isInvert) this._invertConfig();
      if (isShowKeys) this._showKeysConfig();
      if (isCategoryLaunch) this._categoryLaunch();
      if (this._instantRedirect && isKey) this._submitWithValue(newQuery);
    }

    _handleKeyup(e) {
      if ($.key(e) == 'ctrl') this.isCtrlEnter = false;
    }

    _handleKeydown(e) {
      if ($.isUp(e) || $.isDown(e) || $.isRemove(e)) return;
      
      switch ($.key(e)) {
        case 'alt':
        case 'ctrl':
        case 'enter':       
        case 'shift':
        case 'super':
          return;
        case 'escape':
          this.hide();
          return;
        case 'c-enter':
          this.isCtrlEnter = true;
      }
  
      this.show();
    }
  
    _loadQueryParam() {
      const q = new URLSearchParams(window.location.search).get('q');
      if (q) this._submitWithValue(q);
    }
  
    _previewValue(value) {
      this._inputEl.value = value;
      this._setBackgroundFromQuery(value);
    }
  
    _redirect(redirect) {
      if (this._newTab) window.open(redirect, '_blank');
      else window.location.href = redirect;
    }
  
    _registerEvents() {
      document.addEventListener('keyup', this._handleKeyup);
      document.addEventListener('keydown', this._handleKeydown);
      this._inputEl.addEventListener('input', this._handleInput);
      this._formEl.addEventListener('submit', this._submitForm, false);
  
      if (this._suggester) {
        this._suggester.setOnClick(this._submitWithValue);
        this._suggester.setOnHighlight(this._previewValue);
        this._suggester.setOnUnhighlight(this._clearPreview);
      }
    }
  
    _setBackgroundFromQuery(query) {
      if (!this._colors) return;
      this._formEl.style.background = this._parseQuery(query).color;
    }
  
    _submitForm(e) {
      if (e) e.preventDefault();
      let query = this._inputEl.value;
      if (this._suggester) this._suggester.success(query);
      this.hide();
      if (this.isCtrlEnter) query += '.com';
      this._redirect(this._parseQuery(query).redirect);
    }
  
    _submitWithValue(value) {
      this._inputEl.value = value;
      this._submitForm();
    }
  }


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: clock.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


class Clock {
    constructor(options) {
      this._el = $.el('#clock');
      this._delimiter = options.delimiter;
      this._twentyFourHourClock = options.twentyFourHourClock;
      this._setTime = this._setTime.bind(this);
      this._el.addEventListener('click', options.toggleHelp);
      this._start();
    }
  
    _setTime() {
      const date = new Date();
      let hours = $.pad(date.getHours());
      let amPm = '';
  
      if (!this._twentyFourHourClock) {
        hours = date.getHours();
        if (hours > 12) hours -= 12;
        else if (hours === 0) hours = 12;
  
        amPm =
          `&nbsp;<span class="am-pm">` +
          `${date.getHours() >= 12 ? 'PM' : 'AM'}</span>`;
      }
  
      const minutes = $.pad(date.getMinutes());
      const seconds = $.pad(date.getSeconds());
      this._el.innerHTML = `${hours}${this._delimiter}${minutes}${this._delimiter}${seconds}${amPm}`;
      this._el.setAttribute('datetime', date.toTimeString());
    }
  
    _start() {
      this._setTime();
      setInterval(this._setTime, 1000);
    }
  }

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: help.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


class Help {
    constructor(options) {
      this._el = $.el('#help');
      this._commands = options.commands;
      this._newTab = options.newTab;
      this._toggled = false;
      this._handleKeydown = this._handleKeydown.bind(this);
      this.toggle = this.toggle.bind(this);
      this.launch = this.launch.bind(this);
      this.launchCategory = this.launchCategory.bind(this);
      this._inputEl = $.el('#search-input');
      this._inputElVal = '';
      this._suggester = options.suggester;
      this._invertColors = options.invertedColors;
      this._buildAndAppendLists();
      this._registerEvents();
      this._invertValue;
    }
  
    toggle(show) {
      this._toggled = typeof show !== 'undefined' ? show : !this._toggled;
      this._toggled ? $.bodyClassAdd('help') : $.bodyClassRemove('help');
    }
  
    hide() {
      $.bodyClassRemove('form');
      this._inputEl.value = '';
      this._inputElVal = '';
      this._suggester.suggest('');
    }
  
    launch() {
      this.hide();
      this.toggle(true);
      $.bodyClassAdd('help');
  
      CONFIG.commands.forEach(command => {
        if(command.quickLaunch) window.open(command.url);
      });
    }
  
    launchCategory(){
      
      const categorySet = new Set();
  
      CONFIG.commands.forEach(command => {
        if(command.category) categorySet.add(command.category);
      });
  
      const targetCategoryIndex = $.el('#search-input').value.replace('!', '');
      const targetCategory = Array.from(categorySet)[targetCategoryIndex - 1];
      
      CONFIG.commands.forEach(command => {
        if(targetCategory && command.category === targetCategory) window.open(command.url);
      });
    }
  
    _buildAndAppendLists() {
      const lists = document.createElement('ul');
      lists.classList.add('categories');
  
      this._getCategories().forEach(category => {
        lists.insertAdjacentHTML(
          'beforeend',
          `<li class="category">
            <h2 class="category-name">${category}</h2>
            <ul>${this._buildListCommands(category)}</ul>
          </li>`
        );
      });
  
      this._el.appendChild(lists);
    }
  
    _buildListCommands(currentCategory) {
      let invertValue = this._invertColors ? 1: 0;
  
      const bgcolor = invertValue ? getComputedStyle(document.documentElement).getPropertyValue('--foreground') 
                                  : getComputedStyle(document.documentElement).getPropertyValue('--background');
  
      const fgcolor = invertValue ? getComputedStyle(document.documentElement).getPropertyValue('--background') 
                                  : getComputedStyle(document.documentElement).getPropertyValue('--foreground');
  
  
      const commandListWithIcons =  this._commands
        .map(({ category, name, key, url, icon }, i) => {
          const iconEl = CONFIG.iconExtension !== 'svg'
                       ? `<img src='assets/icons/${icon}.png' height = 28px center style="filter: invert(${invertValue});">`
                       : `<img src='assets/icons/${icon}.svg' onload="SVGInject(this)" height = 28px center style="fill: ${fgcolor};">`
  
          if (category === currentCategory) {
            return `
              <style>
                .command-key-${i} {
                  color: ${fgcolor}; 
                  background-color:${bgcolor};
                  border: 4px solid ${fgcolor}; 
                }   
              </style>
              <li class="command">
                <a href="${url}" target="${this._newTab ? '_blank' : '_self'}">
                  <span class="command-key command-key-${i}">${iconEl}</span>
                  <span class="command-name">${name}</span>
                </a>
              </li>
            `;
          }
        })
        .join('');
  
      const commandListWithKeys = this._commands
        .map(({ category, name, key, url }, i) => {
          if (category === currentCategory) {
            return `
              <li class="command">
                <a href="${url}" target="${this._newTab ? '_blank' : '_self'}">
                      <style>
                        .command-key-${i} {
                          color: ${fgcolor}; 
                          background-color:${bgcolor};
                          border: 4px solid ${fgcolor}; 
                        }   
                      </style>
                  <span class="command-key command-key-${i}">${key}</span>
                  <span class="command-name command-name-${i}">${name}</span>
                </a>
              </li>
            `;
          }
        })
        .join('');
  
      return CONFIG.showKeys ? commandListWithKeys : commandListWithIcons;
    }
  
    _getCategories() {
      const categories = this._commands
        .map(v => v.category)
        .filter(category => category);
  
      return [...new Set(categories)];
    }
  
    _handleKeydown(e) {
      if ($.key(e) === 'escape') this.toggle(false);
    }
  
    _registerEvents() {
      document.addEventListener('keydown', this._handleKeydown);
    }
  }

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: influencers.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


class Influencer {
    constructor(options) {
      this._limit = options.limit;
      this._parseQuery = options.parseQuery;
    }
  
    addItem() {}
    getSuggestions() {}
  
    _addSearchPrefix(items, query) {
      const searchPrefix = this._getSearchPrefix(query);
      return items.map(s => (searchPrefix ? searchPrefix + s : s));
    }
  
    _getSearchPrefix(query) {
      const { isSearch, key, split } = this._parseQuery(query);
      return isSearch ? `${key}${split} ` : false;
    }
  }

  class DefaultInfluencer extends Influencer {
    constructor({ defaultSuggestions }) {
      super(...arguments);
      this._defaultSuggestions = defaultSuggestions;
    }
  
    getSuggestions(query) {
      return new Promise(resolve => {
        const suggestions = this._defaultSuggestions[query];
        resolve(suggestions ? suggestions.slice(0, this._limit) : []);
      });
    }
  }

  
class CommandsInfluencer extends Influencer {
  constructor({ commands, queryParser }) {
    super(...arguments);
    this._commands = commands;
  }

  getSuggestions(rawQuery) {
    const { query } = this._parseQuery(rawQuery);
    if (!query) return Promise.resolve([]);

    return new Promise(resolve => {
      const suggestions = [];
      const commands = this._commands;

      commands.forEach(command => {
        if(this._getDomain(command.url).startsWith(rawQuery)){
          suggestions.push(command.url);
        }
      });

      resolve(suggestions);
    });
  }

  _getHostName(url) {
    let match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];
    }
    else {
        return null;
    }
  }

  _getDomain(url){
    let hostName = this._getHostName(url);
    let domain = hostName;
    
    if (hostName != null) {
        let parts = hostName.split('.').reverse();
        if (parts != null && parts.length > 1) {
            domain = parts[1] + '.' + parts[0];
            if (hostName.toLowerCase().indexOf('.co.uk') != -1 && parts.length > 2) {
              domain = parts[2] + '.' + domain;
            }
        }
    }
    
    return domain;
  }
}

class DuckDuckGoInfluencer extends Influencer {
  constructor({ queryParser }) {
    super(...arguments);
  }

  getSuggestions(rawQuery) {
    const { query } = this._parseQuery(rawQuery);
    if (!query) return Promise.resolve([]);

    return new Promise(resolve => {
      const endpoint = 'https://duckduckgo.com/ac/';
      const callback = 'autocompleteCallback';

      window[callback] = res => {
        const suggestions = res
          .map(i => i.phrase)
          .filter(s => !$.ieq(s, query))
          .slice(0, this._limit);

        resolve(this._addSearchPrefix(suggestions, rawQuery));
      };

      $.jsonp(`${endpoint}?callback=${callback}&q=${query}`);
    });
  }
}

class HistoryInfluencer extends Influencer {
  constructor() {
    super(...arguments);
    this._storeName = 'history';
  }

  addItem(query) {
    if (query.length < 2) return;
    let exists;

    const history = this._getHistory().map(([item, count]) => {
      const match = $.ieq(item, query);
      if (match) exists = true;
      return [item, match ? count + 1 : count];
    });

    if (!exists) history.push([query, 1]);

    const sorted = history
      .sort((current, next) => current[1] - next[1])
      .reverse();

    this._setHistory(sorted);
  }

  getSuggestions(query) {
    return new Promise(resolve => {
      const suggestions = this._getHistory()
        .map(([item]) => item)
        .filter(item => query && !$.ieq(item, query) && $.iin(item, query))
        .slice(0, this._limit);

      resolve(suggestions);
    });
  }

  _fetch() {
    return JSON.parse(localStorage.getItem(this._storeName)) || [];
  }

  _getHistory() {
    this._history = this._history || this._fetch();
    return this._history;
  }

  _save(history) {
    localStorage.setItem(this._storeName, JSON.stringify(history));
  }

  _setHistory(history) {
    this._history = history;
    this._save(history);
  }
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: queryParser.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


class QueryParser {
    constructor(options) {
      this._commands = options.commands;
      this._searchDelimiter = options.searchDelimiter;
      this._pathDelimiter = options.pathDelimiter;
      this._protocolRegex = /^[a-zA-Z]+:\/\//i;
      this._urlRegex = /^((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)$/i;
      this.parse = this.parse.bind(this);
    }
  
    parse(query) {
      const res = { query: query, split: null };
  
      if (this._urlRegex.test(query)) {
        const hasProtocol = this._protocolRegex.test(query);
        res.redirect = hasProtocol ? query : 'http://' + query;
      } else {
        const trimmed = query.trim();
        const splitSearch = trimmed.split(this._searchDelimiter);
        const splitPath = trimmed.split(this._pathDelimiter);
  
        this._commands.some(({ category, key, name, search, url }) => {
          if (query === key) {
            res.key = key;
            res.isKey = true;
            res.redirect = url;
            return true;
          }
  
          if (splitSearch[0] === key && search) {
            res.key = key;
            res.isSearch = true;
            res.split = this._searchDelimiter;
            res.query = QueryParser._shiftAndTrim(splitSearch, res.split);
            res.redirect = QueryParser._prepSearch(url, search, res.query);
            return true;
          }
  
          if (splitPath[0] === key) {
            res.key = key;
            res.isPath = true;
            res.split = this._pathDelimiter;
            res.path = QueryParser._shiftAndTrim(splitPath, res.split);
            res.redirect = QueryParser._prepPath(url, res.path);
            return true;
          }
  
          if (key === '*') {
            res.redirect = QueryParser._prepSearch(url, search, query);
          }
        });
      }
  
      res.color = QueryParser._getColorFromUrl(this._commands, res.redirect);
      return res;
    }
  
    static _getColorFromUrl(commands, url) {
      const domain = new URL(url).hostname;
  
      return (
        commands
          .filter(c => new URL(c.url).hostname.includes(domain))
          .map(c => c.color)[0] || null
      );
    }
  
    static _prepPath(url, path) {
      return QueryParser._stripUrlPath(url) + '/' + path;
    }
  
    static _prepSearch(url, searchPath, query) {
      if (!searchPath) return url;
      const baseUrl = QueryParser._stripUrlPath(url);
      const urlQuery = encodeURIComponent(query);
      searchPath = searchPath.replace('{}', urlQuery);
      return baseUrl + searchPath;
    }
  
    static _shiftAndTrim(arr, delimiter) {
      arr.shift();
      return arr.join(delimiter).trim();
    }
  
    static _stripUrlPath(url) {
      const parser = document.createElement('a');
      parser.href = url;
      return `${parser.protocol}//${parser.hostname}`;
    }
  }

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: suggester.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


class Suggester {
    constructor(options) {
      this._el = $.el('#search-suggestions');
      this._enabled = options.enabled;
      this._influencers = options.influencers;
      this._limit = options.limit;
      this._suggestionEls = [];
      this._handleKeydown = this._handleKeydown.bind(this);
      this._registerEvents();
    }
  
    setOnClick(callback) {
      this._onClick = callback;
    }
  
    setOnHighlight(callback) {
      this._onHighlight = callback;
    }
  
    setOnUnhighlight(callback) {
      this._onUnhighlight = callback;
    }
  
    success(query) {
      this._clearSuggestions();
      this._influencers.forEach(i => i.addItem(query));
    }
  
    suggest(input) {
      if (!this._enabled) return;
      input = input.trim();
      if (input === '') this._clearSuggestions();
  
      Promise.all(this._getInfluencerPromises(input)).then(res => {
        const suggestions = $.flattenAndUnique(res);
        this._clearSuggestions();
  
        if (suggestions.length) {
          this._appendSuggestions(suggestions, input);
          this._registerSuggestionHighlightEvents();
          this._registerSuggestionClickEvents();
          $.bodyClassAdd('suggestions');
        }
      });
    }
  
    _appendSuggestions(suggestions, input) {
      suggestions.some((suggestion, i) => {
        const match = new RegExp($.escapeRegex(input), 'ig');
        const suggestionHtml = suggestion.replace(match, `<b>${input}</b>`);
  
        this._el.insertAdjacentHTML(
          'beforeend',
          `<li>
            <button
              type="button"
              class="js-search-suggestion search-suggestion"
              data-suggestion="${suggestion}"
              tabindex="-1"
            >
              ${suggestionHtml}
            </button>
          </li>`
        );
  
        if (i + 1 >= this._limit) return true;
      });
  
      this._suggestionEls = $.els('.js-search-suggestion');
    }
  
    _clearSuggestionClickEvents() {
      this._suggestionEls.forEach(el => {
        el.removeEventListener('click', this._onClick);
      });
    }
  
    _clearSuggestionHighlightEvents() {
      this._suggestionEls.forEach(el => {
        el.removeEventListener('mouseover', this._highlight);
        el.removeEventListener('mouseout', this._unHighlight);
      });
    }
  
    _clearSuggestions() {
      $.bodyClassRemove('suggestions');
      this._clearSuggestionHighlightEvents();
      this._clearSuggestionClickEvents();
      this._suggestionEls = [];
      this._el.innerHTML = '';
    }
  
    _focusNext(e) {
      const exists = this._suggestionEls.some((el, i) => {
        if (el.classList.contains('highlight')) {
          this._highlight(this._suggestionEls[i + 1], e);
          return true;
        }
      });
  
      if (!exists) this._highlight(this._suggestionEls[0], e);
    }
  
    _focusPrevious(e) {
      const exists = this._suggestionEls.some((el, i) => {
        if (el.classList.contains('highlight') && i) {
          this._highlight(this._suggestionEls[i - 1], e);
          return true;
        }
      });
  
      if (!exists) this._unHighlight(e);
    }
  
    _getInfluencerPromises(input) {
      return this._influencers.map(influencer =>
        influencer.getSuggestions(input)
      );
    }
  
    _handleKeydown(e) {
      if ($.isDown(e)) this._focusNext(e);
      if ($.isUp(e)) this._focusPrevious(e);
    }
  
    _highlight(el, e) {
      this._unHighlight();
      if (!el) return;
      this._onHighlight(el.getAttribute('data-suggestion'));
      el.classList.add('highlight');
      e.preventDefault();
    }
  
    _registerEvents() {
      document.addEventListener('keydown', this._handleKeydown);
    }
  
    _registerSuggestionClickEvents() {
      this._suggestionEls.forEach(el => {
        const value = el.getAttribute('data-suggestion');
        el.addEventListener('click', this._onClick.bind(null, value));
      });
    }
  
    _registerSuggestionHighlightEvents() {
      const noHighlightUntilMouseMove = () => {
        window.removeEventListener('mousemove', noHighlightUntilMouseMove);
  
        this._suggestionEls.forEach(el => {
          el.addEventListener('mouseover', this._highlight.bind(this, el));
          el.addEventListener('mouseout', this._unHighlight.bind(this));
        });
      };
  
      window.addEventListener('mousemove', noHighlightUntilMouseMove);
    }
  
    _unHighlight(e) {
      const el = $.el('.highlight');
      if (!el) return;
      this._onUnhighlight();
      el.classList.remove('highlight');
      if (e) e.preventDefault();
    }
  }

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: index.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// Get invertedColors preference from cookies
CONFIG.invertedColors = localStorage.getItem('invertColorCookie') ?
  JSON.parse(localStorage.getItem('invertColorCookie')) :
  CONFIG.invertedColors;

// Get showKeys preference from cookies
CONFIG.showKeys = localStorage.getItem('showKeysCookie') ?
  JSON.parse(localStorage.getItem('showKeysCookie')) :
  CONFIG.showKeys;



const queryParser = new QueryParser({
  commands: CONFIG.commands,
  pathDelimiter: CONFIG.pathDelimiter,
  searchDelimiter: CONFIG.searchDelimiter,
});

const influencers = CONFIG.influencers.map(influencerConfig => {
  return new {
    Default: DefaultInfluencer,
    Commands: CommandsInfluencer,
    DuckDuckGo: DuckDuckGoInfluencer,
    History: HistoryInfluencer,
  } [influencerConfig.name]({
    defaultSuggestions: CONFIG.defaultSuggestions,
    limit: influencerConfig.limit,
    parseQuery: queryParser.parse,
    commands: CONFIG.commands
  });
});

const suggester = new Suggester({
  enabled: CONFIG.suggestions,
  influencers,
  limit: CONFIG.suggestionsLimit,
});

const help = new Help({
  commands: CONFIG.commands,
  newTab: CONFIG.newTab,
  suggester,
  invertedColors: CONFIG.invertedColors,
  showKeys: CONFIG.showKeys
});

const form = new Form({
  colors: CONFIG.colors,
  instantRedirect: CONFIG.instantRedirect,
  newTab: CONFIG.newTab,
  parseQuery: queryParser.parse,
  suggester,
  toggleHelp: help.toggle,
  quickLaunch: help.launch,
  categoryLaunch: help.launchCategory,
  invertedColors: CONFIG.invertedColors,
  showKeys: CONFIG.showKeys
});

new Clock({
  delimiter: CONFIG.clockDelimiter,
  toggleHelp: help.toggle,
  twentyFourHourClock: CONFIG.twentyFourHourClock,
});

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: snow.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


 /* 控制下雪 */
 function snowFall(snow) {
    /* 可配置属性 */
    snow = snow || {};
    this.maxFlake = snow.maxFlake || 200;   /* 最多片数 */
    this.flakeSize = snow.flakeSize || 10;  /* 雪花形状 */
    this.fallSpeed = snow.fallSpeed || 1;   /* 坠落速度 */
}
/* 兼容写法 */
requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function(callback) { setTimeout(callback, 1000 / 60); };

cancelAnimationFrame = window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.msCancelAnimationFrame ||
    window.oCancelAnimationFrame;
/* 开始下雪 */
snowFall.prototype.start = function(){
    /* 创建画布 */
    snowCanvas.apply(this);
    /* 创建雪花形状 */
    createFlakes.apply(this);
    /* 画雪 */
    drawSnow.apply(this)
}
/* 创建画布 */
function snowCanvas() {
    /* 添加 Dom 结点 */
    var snowcanvas = document.createElement("canvas");
    snowcanvas.id = "snowfall";
    snowcanvas.width = window.innerWidth;
    snowcanvas.height = document.body.clientHeight;
    snowcanvas.setAttribute("style", "position:absolute; top: 0; left: 0; z-index: 1; pointer-events: none;");
    document.getElementsByTagName("body")[0].appendChild(snowcanvas);
    this.canvas = snowcanvas;
    this.ctx = snowcanvas.getContext("2d");
    /* 窗口大小改变的处理 */
    window.onresize = function() {
        snowcanvas.width = window.innerWidth;
        /* snowcanvas.height = window.innerHeight */
    }
}
/* 雪运动对象 */
function flakeMove(canvasWidth, canvasHeight, flakeSize, fallSpeed) {
    this.x = Math.floor(Math.random() * canvasWidth);   /* x 坐标 */
    this.y = Math.floor(Math.random() * canvasHeight);  /* y 坐标 */
    this.size = Math.random() * flakeSize + 2;          /* 形状 */
    this.maxSize = flakeSize;                           /* 最大形状 */
    this.speed = Math.random() * 1 + fallSpeed;         /* 坠落速度 */
    this.fallSpeed = fallSpeed;                         /* 坠落速度 */
    this.velY = this.speed;                             /* Y 方向速度 */
    this.velX = 0;                                      /* X 方向速度 */
    this.stepSize = Math.random() / 30;                 /* 步长 */
    this.step = 0                                       /* 步数 */
}
flakeMove.prototype.update = function() {
    var x = this.x,
        y = this.y;
    /* 左右摆动(余弦) */
    this.velX *= 0.98;
    if (this.velY <= this.speed) {
        this.velY = this.speed
    }
    this.velX += Math.cos(this.step += .05) * this.stepSize;

    this.y += this.velY;
    this.x += this.velX;
    /* 飞出边界的处理 */
    if (this.x >= canvas.width || this.x <= 0 || this.y >= canvas.height || this.y <= 0) {
        this.reset(canvas.width, canvas.height)
    }
};
/* 飞出边界-放置最顶端继续坠落 */
flakeMove.prototype.reset = function(width, height) {
    this.x = Math.floor(Math.random() * width);
    this.y = 0;
    this.size = Math.random() * this.maxSize + 2;
    this.speed = Math.random() * 1 + this.fallSpeed;
    this.velY = this.speed;
    this.velX = 0;
};
// 渲染雪花-随机形状（此处可修改雪花颜色！！！）
flakeMove.prototype.render = function(ctx) {
    var snowFlake = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
    snowFlake.addColorStop(0, "rgba(255, 255, 255, 0.9)");  /* 此处是雪花颜色，默认是白色 */
    snowFlake.addColorStop(.5, "rgba(255, 255, 255, 0.5)"); /* 若要改为其他颜色，请自行查 */
    snowFlake.addColorStop(1, "rgba(255, 255, 255, 0)");    /* 找 16 进制的 RGB 颜色代码。 */
    ctx.save();
    ctx.fillStyle = snowFlake;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
};
/* 创建雪花-定义形状 */
function createFlakes() {
    var maxFlake = this.maxFlake,
        flakes = this.flakes = [],
        canvas = this.canvas;
    for (var i = 0; i < maxFlake; i++) {
        flakes.push(new flakeMove(canvas.width, canvas.height, this.flakeSize, this.fallSpeed))
    }
}
/* 画雪 */
function drawSnow() {
    var maxFlake = this.maxFlake,
        flakes = this.flakes;
    ctx = this.ctx, canvas = this.canvas, that = this;
    /* 清空雪花 */
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var e = 0; e < maxFlake; e++) {
        flakes[e].update();
        flakes[e].render(ctx);
    }
    /*  一帧一帧的画 */
    this.loop = requestAnimationFrame(function() {
        drawSnow.apply(that);
    });
}
/* 调用及控制方法 */
var snow = new snowFall({maxFlake:100});
snow.start();