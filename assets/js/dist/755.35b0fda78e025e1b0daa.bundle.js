(self.webpackChunkkcc_gem=self.webpackChunkkcc_gem||[]).push([[755],{822:function(e,t,n){var r={"./addAccordionOrTabHistoryStates":[814,814],"./addAccordionOrTabHistoryStates.js":[814,814],"./alerts":[897],"./alerts.js":[897],"./cacheResponse":[525],"./cacheResponse.js":[525],"./checkForPrefersReducedMotion":[596,596],"./checkForPrefersReducedMotion.js":[596,596],"./contentHashLink":[640,640],"./contentHashLink.js":[640,640],"./createAlertsHtml":[169],"./createAlertsHtml.js":[169],"./fetchNewAlert":[859,859],"./fetchNewAlert.js":[859,859],"./getCachedResponse":[227],"./getCachedResponse.js":[227],"./parseMarkdownToHTML":[591],"./parseMarkdownToHTML.js":[591],"./refreshAlertButton":[853,853],"./refreshAlertButton.js":[853,853]};function s(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],s=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(s)}))}s.keys=function(){return Object.keys(r)},s.id=822,e.exports=s},897:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(169),s=n(525),o=n(227);const a={spreadsheetId:"1plXBiZY5pVbhNT-mszxEuqCl4zy8wMnz9gXXbbT_yLs",range:"Alerts"},c={apiKey:"AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest"]},l=!(!document.querySelector("#accordion")&&!document.querySelector(".navTabs"));function i(e){if(!document.getElementById("emergencyAlerts")&&l)return n.e(640).then(n.bind(n,640)).then((t=>{let{default:n}=t;return n(e)}));new Promise(((e,t)=>{if(window.sessionStorage.getItem("Alert-Content"))return(0,o.default)(),e();gapi.load("client",(()=>{gapi.client.init(c).then((()=>gapi.client.sheets.spreadsheets.values.get(a))).then((e=>((0,r.default)(e),e))).then((t=>{(0,s.default)(t),e()}),(e=>{console.error("Error trying to fetch the alert from gapi:",e)}))}))})).then((()=>{window.setTimeout((()=>{l&&n.e(640).then(n.bind(n,640)).then((t=>{let{default:n}=t;return n(e)}))}),100)})).then((()=>{if(document.getElementById("syncAlert"))return async function(e){const{default:t}=await n(822)("./refreshAlertButton");return t()}()}))}},525:function(e,t,n){"use strict";n.r(t),t.default=function(e){const t=e.result.values,n=t[1],r=t[2];for(let e=0,t=r.length;e<t;e++){const t=r[e],s=n[e];window.sessionStorage.setItem(s.replace(/\s/g,"-"),t)}}},169:function(e,t,n){"use strict";n.r(t);var r=n(591);const s=document.getElementById("emergencyAlerts");t.default=function(e){let[t,n,o,a,c,l,i]=e.result.values[2];if("FALSE"===t)return;const u=new Date,d=new Date(c),f=new Date(l),g=function(e){return"SCHOOL EMERGENCY/CLOSURE - red"==e?"danger":"SCHOOL INFO - blue"==e?"primary":"SCHOOL INFO - cyan"==e?"info":"warning"}(i),h="FALSE"===a||"TRUE"===a&&d.getTime()<=u.getTime()&&f.getTime()>u.getTime(),p="TRUE"===n||"FALSE"===n&&"/"==window.location.pathname;let m=`\n<div class="container">\n  <div class="row">\n    <div class="col">\n      <div role="alert" class="alert alert-${g} d-lg-flex align-items-center pr-lg-1">\n        <div class="typography__last-p--mb0">\n          ${(0,r.default)(o)}\n        </div>\n        <button\n          aria-label="Refresh the alert"\n          title="Refresh the alert"\n          id="syncAlert"\n          type="button"\n          class="btn btn-link buttons--sync ms-auto">\n          <svg xmlns="http://www.w3.org/2000/svg"\n            class="svg__sync"\n            height="24px"\n            width="24px"\n            viewBox="0 0 24 24">\n            <path d="M0 0h24v24H0z" fill="none"/>\n            <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 \n            12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 \n            4.42 3.58 8 8 8v3l4-4-4-4v3z"/>\n          </svg>\n        </button>\n        </div>\n    </div>\n  </div>\n</div>`;[u,d,f].map((e=>e.setHours(0,0,0,0))),h&&p&&function(e,t){e.innerHTML=t,e.classList.add("position__offset-alert--visible")}(s,m)}},227:function(e,t,n){"use strict";n.r(t);var r=n(169);const s=window.sessionStorage;t.default=function(){try{!function(){let e={result:{values:[0,0,[s.getItem("Visible"),s.getItem("All-Pages"),s.getItem("Alert-Content"),s.getItem("Alert-Expiration"),s.getItem("Start"),s.getItem("End"),s.getItem("Alert-type/Color-scheme")]]}};(0,r.default)(e)}()}catch(e){console.error(`Error retrieving cached response in sessionStorage:\nName: ${e.name}\nMessage: ${e.message}\n${e}`)}}},591:function(e,t,n){"use strict";n.r(t);const r=e=>e.replace(/[\*_]{2}([^\*_]+)[\*_]{2}/g,"<strong>$1</strong>"),s=e=>e.replace(/[\*_]([^\*_]+)[\*_]/g,"<em>$1</em>"),o=e=>e.replace(/\[([^\]]+)\]\(([^\)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),a=e=>e.replace(/^(.*)$/gm,((e,t)=>""===t?e:`<p class="typography__alert">${t}</p>`));function c(e,t){const n={"\\*":"__asterisk__","\\_":"__underscore__","\\[":"__openBracket__","\\]":"__closeBracket__","\\(":"__openParenthesis__","\\)":"__closeParenthesis__"};for(let r in n)if(n.hasOwnProperty(r)){let s=n[r];!0===t&&(e=e.replace(r,s)),e=e.replace(s,r)}return e}t.default=function(e){const t=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.reduce(((e,t)=>t(e)),e)}(c(e,!0),r,s,o,a);return c(t,!1)}}}]);