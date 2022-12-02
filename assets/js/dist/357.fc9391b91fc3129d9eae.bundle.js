"use strict";(self.webpackChunkkcc_gem=self.webpackChunkkcc_gem||[]).push([[357],{357:function(e,t,n){n.r(t),n.d(t,{default:function(){return rt}});var r={};n.r(r),n.d(r,{afterMain:function(){return _},afterRead:function(){return w},afterWrite:function(){return E},applyStyles:function(){return M},arrow:function(){return J},auto:function(){return f},basePlacements:function(){return c},beforeMain:function(){return x},beforeRead:function(){return y},beforeWrite:function(){return j},bottom:function(){return i},clippingParents:function(){return d},computeStyles:function(){return re},createPopper:function(){return Ze},createPopperBase:function(){return Le},createPopperLite:function(){return Me},detectOverflow:function(){return ye},end:function(){return p},eventListeners:function(){return ie},flip:function(){return be},hide:function(){return Oe},left:function(){return s},main:function(){return O},modifierPhases:function(){return P},offset:function(){return _e},placements:function(){return v},popper:function(){return h},popperGenerator:function(){return Ce},popperOffsets:function(){return je},preventOverflow:function(){return ke},read:function(){return b},reference:function(){return m},right:function(){return a},start:function(){return u},top:function(){return o},variationPlacements:function(){return g},viewport:function(){return l},write:function(){return k}});var o="top",i="bottom",a="right",s="left",f="auto",c=[o,i,a,s],u="start",p="end",d="clippingParents",l="viewport",h="popper",m="reference",g=c.reduce((function(e,t){return e.concat([t+"-"+u,t+"-"+p])}),[]),v=[].concat(c,[f]).reduce((function(e,t){return e.concat([t,t+"-"+u,t+"-"+p])}),[]),y="beforeRead",b="read",w="afterRead",x="beforeMain",O="main",_="afterMain",j="beforeWrite",k="write",E="afterWrite",P=[y,b,w,x,O,_,j,k,E];function D(e){return e?(e.nodeName||"").toLowerCase():null}function A(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function C(e){return e instanceof A(e).Element||e instanceof Element}function L(e){return e instanceof A(e).HTMLElement||e instanceof HTMLElement}function Z(e){return"undefined"!=typeof ShadowRoot&&(e instanceof A(e).ShadowRoot||e instanceof ShadowRoot)}var M={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];L(o)&&D(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});L(r)&&D(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};function T(e){return e.split("-")[0]}var H=Math.max,W=Math.min,B=Math.round;function S(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function N(){return!/^((?!chrome|android).)*safari/i.test(S())}function R(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&L(e)&&(o=e.offsetWidth>0&&B(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&B(r.height)/e.offsetHeight||1);var a=(C(e)?A(e):window).visualViewport,s=!N()&&n,f=(r.left+(s&&a?a.offsetLeft:0))/o,c=(r.top+(s&&a?a.offsetTop:0))/i,u=r.width/o,p=r.height/i;return{width:u,height:p,top:c,right:f+u,bottom:c+p,left:f,x:f,y:c}}function I(e){var t=R(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function q(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Z(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function V(e){return A(e).getComputedStyle(e)}function K(e){return["table","td","th"].indexOf(D(e))>=0}function F(e){return((C(e)?e.ownerDocument:e.document)||window.document).documentElement}function U(e){return"html"===D(e)?e:e.assignedSlot||e.parentNode||(Z(e)?e.host:null)||F(e)}function z(e){return L(e)&&"fixed"!==V(e).position?e.offsetParent:null}function $(e){for(var t=A(e),n=z(e);n&&K(n)&&"static"===V(n).position;)n=z(n);return n&&("html"===D(n)||"body"===D(n)&&"static"===V(n).position)?t:n||function(e){var t=/firefox/i.test(S());if(/Trident/i.test(S())&&L(e)&&"fixed"===V(e).position)return null;var n=U(e);for(Z(n)&&(n=n.host);L(n)&&["html","body"].indexOf(D(n))<0;){var r=V(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function X(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Y(e,t,n){return H(e,W(t,n))}function G(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Q(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var J={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,f=e.options,u=n.elements.arrow,p=n.modifiersData.popperOffsets,d=T(n.placement),l=X(d),h=[s,a].indexOf(d)>=0?"height":"width";if(u&&p){var m=function(e,t){return G("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Q(e,c))}(f.padding,n),g=I(u),v="y"===l?o:s,y="y"===l?i:a,b=n.rects.reference[h]+n.rects.reference[l]-p[l]-n.rects.popper[h],w=p[l]-n.rects.reference[l],x=$(u),O=x?"y"===l?x.clientHeight||0:x.clientWidth||0:0,_=b/2-w/2,j=m[v],k=O-g[h]-m[y],E=O/2-g[h]/2+_,P=Y(j,E,k),D=l;n.modifiersData[r]=((t={})[D]=P,t.centerOffset=P-E,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&q(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ee(e){return e.split("-")[1]}var te={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ne(e){var t,n=e.popper,r=e.popperRect,f=e.placement,c=e.variation,u=e.offsets,d=e.position,l=e.gpuAcceleration,h=e.adaptive,m=e.roundOffsets,g=e.isFixed,v=u.x,y=void 0===v?0:v,b=u.y,w=void 0===b?0:b,x="function"==typeof m?m({x:y,y:w}):{x:y,y:w};y=x.x,w=x.y;var O=u.hasOwnProperty("x"),_=u.hasOwnProperty("y"),j=s,k=o,E=window;if(h){var P=$(n),D="clientHeight",C="clientWidth";P===A(n)&&"static"!==V(P=F(n)).position&&"absolute"===d&&(D="scrollHeight",C="scrollWidth"),(f===o||(f===s||f===a)&&c===p)&&(k=i,w-=(g&&P===E&&E.visualViewport?E.visualViewport.height:P[D])-r.height,w*=l?1:-1),f!==s&&(f!==o&&f!==i||c!==p)||(j=a,y-=(g&&P===E&&E.visualViewport?E.visualViewport.width:P[C])-r.width,y*=l?1:-1)}var L,Z=Object.assign({position:d},h&&te),M=!0===m?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:B(t*r)/r||0,y:B(n*r)/r||0}}({x:y,y:w}):{x:y,y:w};return y=M.x,w=M.y,l?Object.assign({},Z,((L={})[k]=_?"0":"",L[j]=O?"0":"",L.transform=(E.devicePixelRatio||1)<=1?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",L)):Object.assign({},Z,((t={})[k]=_?w+"px":"",t[j]=O?y+"px":"",t.transform="",t))}var re={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:T(t.placement),variation:ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ne(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ne(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},oe={passive:!0},ie={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=A(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,oe)})),s&&f.addEventListener("resize",n.update,oe),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,oe)})),s&&f.removeEventListener("resize",n.update,oe)}},data:{}},ae={left:"right",right:"left",bottom:"top",top:"bottom"};function se(e){return e.replace(/left|right|bottom|top/g,(function(e){return ae[e]}))}var fe={start:"end",end:"start"};function ce(e){return e.replace(/start|end/g,(function(e){return fe[e]}))}function ue(e){var t=A(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function pe(e){return R(F(e)).left+ue(e).scrollLeft}function de(e){var t=V(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function le(e){return["html","body","#document"].indexOf(D(e))>=0?e.ownerDocument.body:L(e)&&de(e)?e:le(U(e))}function he(e,t){var n;void 0===t&&(t=[]);var r=le(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=A(r),a=o?[i].concat(i.visualViewport||[],de(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(he(U(a)))}function me(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ge(e,t,n){return t===l?me(function(e,t){var n=A(e),r=F(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0;if(o){i=o.width,a=o.height;var c=N();(c||!c&&"fixed"===t)&&(s=o.offsetLeft,f=o.offsetTop)}return{width:i,height:a,x:s+pe(e),y:f}}(e,n)):C(t)?function(e,t){var n=R(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):me(function(e){var t,n=F(e),r=ue(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=H(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=H(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+pe(e),f=-r.scrollTop;return"rtl"===V(o||n).direction&&(s+=H(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(F(e)))}function ve(e){var t,n=e.reference,r=e.element,f=e.placement,c=f?T(f):null,d=f?ee(f):null,l=n.x+n.width/2-r.width/2,h=n.y+n.height/2-r.height/2;switch(c){case o:t={x:l,y:n.y-r.height};break;case i:t={x:l,y:n.y+n.height};break;case a:t={x:n.x+n.width,y:h};break;case s:t={x:n.x-r.width,y:h};break;default:t={x:n.x,y:n.y}}var m=c?X(c):null;if(null!=m){var g="y"===m?"height":"width";switch(d){case u:t[m]=t[m]-(n[g]/2-r[g]/2);break;case p:t[m]=t[m]+(n[g]/2-r[g]/2)}}return t}function ye(e,t){void 0===t&&(t={});var n=t,r=n.placement,s=void 0===r?e.placement:r,f=n.strategy,u=void 0===f?e.strategy:f,p=n.boundary,g=void 0===p?d:p,v=n.rootBoundary,y=void 0===v?l:v,b=n.elementContext,w=void 0===b?h:b,x=n.altBoundary,O=void 0!==x&&x,_=n.padding,j=void 0===_?0:_,k=G("number"!=typeof j?j:Q(j,c)),E=w===h?m:h,P=e.rects.popper,A=e.elements[O?E:w],Z=function(e,t,n,r){var o="clippingParents"===t?function(e){var t=he(U(e)),n=["absolute","fixed"].indexOf(V(e).position)>=0&&L(e)?$(e):e;return C(n)?t.filter((function(e){return C(e)&&q(e,n)&&"body"!==D(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=ge(e,n,r);return t.top=H(o.top,t.top),t.right=W(o.right,t.right),t.bottom=W(o.bottom,t.bottom),t.left=H(o.left,t.left),t}),ge(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(C(A)?A:A.contextElement||F(e.elements.popper),g,y,u),M=R(e.elements.reference),T=ve({reference:M,element:P,strategy:"absolute",placement:s}),B=me(Object.assign({},P,T)),S=w===h?B:M,N={top:Z.top-S.top+k.top,bottom:S.bottom-Z.bottom+k.bottom,left:Z.left-S.left+k.left,right:S.right-Z.right+k.right},I=e.modifiersData.offset;if(w===h&&I){var K=I[s];Object.keys(N).forEach((function(e){var t=[a,i].indexOf(e)>=0?1:-1,n=[o,i].indexOf(e)>=0?"y":"x";N[e]+=K[n]*t}))}return N}var be={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var p=n.mainAxis,d=void 0===p||p,l=n.altAxis,h=void 0===l||l,m=n.fallbackPlacements,y=n.padding,b=n.boundary,w=n.rootBoundary,x=n.altBoundary,O=n.flipVariations,_=void 0===O||O,j=n.allowedAutoPlacements,k=t.options.placement,E=T(k),P=m||(E!==k&&_?function(e){if(T(e)===f)return[];var t=se(e);return[ce(e),t,ce(t)]}(k):[se(k)]),D=[k].concat(P).reduce((function(e,n){return e.concat(T(n)===f?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,u=void 0===f?v:f,p=ee(r),d=p?s?g:g.filter((function(e){return ee(e)===p})):c,l=d.filter((function(e){return u.indexOf(e)>=0}));0===l.length&&(l=d);var h=l.reduce((function(t,n){return t[n]=ye(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[T(n)],t}),{});return Object.keys(h).sort((function(e,t){return h[e]-h[t]}))}(t,{placement:n,boundary:b,rootBoundary:w,padding:y,flipVariations:_,allowedAutoPlacements:j}):n)}),[]),A=t.rects.reference,C=t.rects.popper,L=new Map,Z=!0,M=D[0],H=0;H<D.length;H++){var W=D[H],B=T(W),S=ee(W)===u,N=[o,i].indexOf(B)>=0,R=N?"width":"height",I=ye(t,{placement:W,boundary:b,rootBoundary:w,altBoundary:x,padding:y}),q=N?S?a:s:S?i:o;A[R]>C[R]&&(q=se(q));var V=se(q),K=[];if(d&&K.push(I[B]<=0),h&&K.push(I[q]<=0,I[V]<=0),K.every((function(e){return e}))){M=W,Z=!1;break}L.set(W,K)}if(Z)for(var F=function(e){var t=D.find((function(t){var n=L.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return M=t,"break"},U=_?3:1;U>0&&"break"!==F(U);U--);t.placement!==M&&(t.modifiersData[r]._skip=!0,t.placement=M,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function we(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function xe(e){return[o,a,i,s].some((function(t){return e[t]>=0}))}var Oe={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ye(t,{elementContext:"reference"}),s=ye(t,{altBoundary:!0}),f=we(a,r),c=we(s,o,i),u=xe(f),p=xe(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}},_e={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.offset,f=void 0===i?[0,0]:i,c=v.reduce((function(e,n){return e[n]=function(e,t,n){var r=T(e),i=[s,o].indexOf(r)>=0?-1:1,f="function"==typeof n?n(Object.assign({},t,{placement:e})):n,c=f[0],u=f[1];return c=c||0,u=(u||0)*i,[s,a].indexOf(r)>=0?{x:u,y:c}:{x:c,y:u}}(n,t.rects,f),e}),{}),u=c[t.placement],p=u.x,d=u.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=p,t.modifiersData.popperOffsets.y+=d),t.modifiersData[r]=c}},je={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ve({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},ke={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,f=n.mainAxis,c=void 0===f||f,p=n.altAxis,d=void 0!==p&&p,l=n.boundary,h=n.rootBoundary,m=n.altBoundary,g=n.padding,v=n.tether,y=void 0===v||v,b=n.tetherOffset,w=void 0===b?0:b,x=ye(t,{boundary:l,rootBoundary:h,padding:g,altBoundary:m}),O=T(t.placement),_=ee(t.placement),j=!_,k=X(O),E="x"===k?"y":"x",P=t.modifiersData.popperOffsets,D=t.rects.reference,A=t.rects.popper,C="function"==typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,L="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),Z=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,M={x:0,y:0};if(P){if(c){var B,S="y"===k?o:s,N="y"===k?i:a,R="y"===k?"height":"width",q=P[k],V=q+x[S],K=q-x[N],F=y?-A[R]/2:0,U=_===u?D[R]:A[R],z=_===u?-A[R]:-D[R],G=t.elements.arrow,Q=y&&G?I(G):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=J[S],ne=J[N],re=Y(0,D[R],Q[R]),oe=j?D[R]/2-F-re-te-L.mainAxis:U-re-te-L.mainAxis,ie=j?-D[R]/2+F+re+ne+L.mainAxis:z+re+ne+L.mainAxis,ae=t.elements.arrow&&$(t.elements.arrow),se=ae?"y"===k?ae.clientTop||0:ae.clientLeft||0:0,fe=null!=(B=null==Z?void 0:Z[k])?B:0,ce=q+ie-fe,ue=Y(y?W(V,q+oe-fe-se):V,q,y?H(K,ce):K);P[k]=ue,M[k]=ue-q}if(d){var pe,de="x"===k?o:s,le="x"===k?i:a,he=P[E],me="y"===E?"height":"width",ge=he+x[de],ve=he-x[le],be=-1!==[o,s].indexOf(O),we=null!=(pe=null==Z?void 0:Z[E])?pe:0,xe=be?ge:he-D[me]-A[me]-we+L.altAxis,Oe=be?he+D[me]+A[me]-we-L.altAxis:ve,_e=y&&be?function(e,t,n){var r=Y(e,t,n);return r>n?n:r}(xe,he,Oe):Y(y?xe:ge,he,y?Oe:ve);P[E]=_e,M[E]=_e-he}t.modifiersData[r]=M}},requiresIfExists:["offset"]};function Ee(e,t,n){void 0===n&&(n=!1);var r,o,i=L(t),a=L(t)&&function(e){var t=e.getBoundingClientRect(),n=B(t.width)/e.offsetWidth||1,r=B(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),s=F(t),f=R(e,a,n),c={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(i||!i&&!n)&&(("body"!==D(t)||de(s))&&(c=(r=t)!==A(r)&&L(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:ue(r)),L(t)?((u=R(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):s&&(u.x=pe(s))),{x:f.left+c.scrollLeft-u.x,y:f.top+c.scrollTop-u.y,width:f.width,height:f.height}}function Pe(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var De={placement:"bottom",modifiers:[],strategy:"absolute"};function Ae(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Ce(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?De:o;return function(e,t,n){void 0===n&&(n=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},De,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],c=!1,u={state:s,setOptions:function(n){var o="function"==typeof n?n(s.options):n;p(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:C(e)?he(e):e.contextElement?he(e.contextElement):[],popper:he(t)};var a,c,d=function(e){var t=Pe(e);return P.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(r,s.options.modifiers),c=a.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(c).map((function(e){return c[e]}))));return s.orderedModifiers=d.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:u,options:r});f.push(i||function(){})}})),u.update()},forceUpdate:function(){if(!c){var e=s.elements,t=e.reference,n=e.popper;if(Ae(t,n)){s.rects={reference:Ee(t,$(n),"fixed"===s.options.strategy),popper:I(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,f=void 0===a?{}:a,p=o.name;"function"==typeof i&&(s=i({state:s,options:f,name:p,instance:u})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){u.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){p(),c=!0}};if(!Ae(e,t))return u;function p(){f.forEach((function(e){return e()})),f=[]}return u.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var Le=Ce(),Ze=Ce({defaultModifiers:[ie,je,re,M,_e,be,ke,J,Oe]}),Me=Ce({defaultModifiers:[ie,je,re,M]}),Te=n(147),He=n(930),We=n(467),Be=n(902),Se=n(278);const Ne="dropdown",Re="ArrowUp",Ie="ArrowDown",qe="click.bs.dropdown.data-api",Ve="keydown.bs.dropdown.data-api",Ke="show",Fe='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ue=`${Fe}.show`,ze=".dropdown-menu",$e=(0,Te.dZ)()?"top-end":"top-start",Xe=(0,Te.dZ)()?"top-start":"top-end",Ye=(0,Te.dZ)()?"bottom-end":"bottom-start",Ge=(0,Te.dZ)()?"bottom-start":"bottom-end",Qe=(0,Te.dZ)()?"left-start":"right-start",Je=(0,Te.dZ)()?"right-start":"left-start",et={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},tt={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class nt extends Se.Z{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=Be.Z.next(this._element,ze)[0]||Be.Z.prev(this._element,ze)[0]||Be.Z.findOne(ze,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return et}static get DefaultType(){return tt}static get NAME(){return Ne}toggle(){return this._isShown()?this.hide():this.show()}show(){if((0,Te.pK)(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!He.Z.trigger(this._element,"show.bs.dropdown",e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const e of[].concat(...document.body.children))He.Z.on(e,"mouseover",Te.ZT);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ke),this._element.classList.add(Ke),He.Z.trigger(this._element,"shown.bs.dropdown",e)}}hide(){if((0,Te.pK)(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!He.Z.trigger(this._element,"hide.bs.dropdown",e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))He.Z.off(e,"mouseover",Te.ZT);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ke),this._element.classList.remove(Ke),this._element.setAttribute("aria-expanded","false"),We.Z.removeDataAttribute(this._menu,"popper"),He.Z.trigger(this._element,"hidden.bs.dropdown",e)}}_getConfig(e){if("object"==typeof(e=super._getConfig(e)).reference&&!(0,Te.kK)(e.reference)&&"function"!=typeof e.reference.getBoundingClientRect)throw new TypeError(`${Ne.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(void 0===r)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=this._parent:(0,Te.kK)(this._config.reference)?e=(0,Te.sb)(this._config.reference):"object"==typeof this._config.reference&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=Ze(e,this._menu,t)}_isShown(){return this._menu.classList.contains(Ke)}_getPlacement(){const e=this._parent;if(e.classList.contains("dropend"))return Qe;if(e.classList.contains("dropstart"))return Je;if(e.classList.contains("dropup-center"))return"top";if(e.classList.contains("dropdown-center"))return"bottom";const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains("dropup")?t?Xe:$e:t?Ge:Ye}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:e}=this._config;return"string"==typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"==typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(We.Z.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const n=Be.Z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((e=>(0,Te.pn)(e)));n.length&&(0,Te.Fj)(n,t,e===Ie,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=nt.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(2===e.button||"keyup"===e.type&&"Tab"!==e.key)return;const t=Be.Z.find(Ue);for(const n of t){const t=nt.getInstance(n);if(!t||!1===t._config.autoClose)continue;const r=e.composedPath(),o=r.includes(t._menu);if(r.includes(t._element)||"inside"===t._config.autoClose&&!o||"outside"===t._config.autoClose&&o)continue;if(t._menu.contains(e.target)&&("keyup"===e.type&&"Tab"===e.key||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const i={relatedTarget:t._element};"click"===e.type&&(i.clickEvent=e),t._completeHide(i)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),n="Escape"===e.key,r=[Re,Ie].includes(e.key);if(!r&&!n)return;if(t&&!n)return;e.preventDefault();const o=this.matches(Fe)?this:Be.Z.prev(this,Fe)[0]||Be.Z.next(this,Fe)[0]||Be.Z.findOne(Fe,e.delegateTarget.parentNode),i=nt.getOrCreateInstance(o);if(r)return e.stopPropagation(),i.show(),void i._selectMenuItem(e);i._isShown()&&(e.stopPropagation(),i.hide(),o.focus())}}He.Z.on(document,Ve,Fe,nt.dataApiKeydownHandler),He.Z.on(document,Ve,ze,nt.dataApiKeydownHandler),He.Z.on(document,qe,nt.clearMenus),He.Z.on(document,"keyup.bs.dropdown.data-api",nt.clearMenus),He.Z.on(document,qe,Fe,(function(e){e.preventDefault(),nt.getOrCreateInstance(this).toggle()})),(0,Te.pF)(nt);var rt=nt}}]);