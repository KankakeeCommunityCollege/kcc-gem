"use strict";(self.webpackChunkkcc_gem=self.webpackChunkkcc_gem||[]).push([[233],{233:function(t,e,s){s.r(e);var i=s(147),r=s(930),a=s(902),n=s(66);const o="ArrowLeft",l="ArrowRight",c="ArrowUp",d="ArrowDown",g="active",u="fade",b="show",h='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',_=`.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${h}`;class A extends n.Z{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),r.Z.on(this._element,"keydown.bs.tab",(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),s=e?r.Z.trigger(e,"hide.bs.tab",{relatedTarget:t}):null;r.Z.trigger(t,"show.bs.tab",{relatedTarget:e}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(g),this._activate((0,i.dG)(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),r.Z.trigger(t,"shown.bs.tab",{relatedTarget:e})):t.classList.add(b)}),t,t.classList.contains(u)))}_deactivate(t,e){t&&(t.classList.remove(g),t.blur(),this._deactivate((0,i.dG)(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),r.Z.trigger(t,"hidden.bs.tab",{relatedTarget:e})):t.classList.remove(b)}),t,t.classList.contains(u)))}_keydown(t){if(![o,l,c,d].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=[l,d].includes(t.key),s=(0,i.Fj)(this._getChildren().filter((t=>!(0,i.pK)(t))),t.target,e,!0);s&&(s.focus({preventScroll:!0}),A.getOrCreateInstance(s).show())}_getChildren(){return a.Z.find(_,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),s=this._getOuterElement(t);t.setAttribute("aria-selected",e),s!==t&&this._setAttributeIfNotExists(s,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=(0,i.dG)(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,e){const s=this._getOuterElement(t);if(!s.classList.contains("dropdown"))return;const i=(t,i)=>{const r=a.Z.findOne(t,s);r&&r.classList.toggle(i,e)};i(".dropdown-toggle",g),i(".dropdown-menu",b),s.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,s){t.hasAttribute(e)||t.setAttribute(e,s)}_elemIsActive(t){return t.classList.contains(g)}_getInnerElement(t){return t.matches(_)?t:a.Z.findOne(_,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=A.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}r.Z.on(document,"click.bs.tab",h,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),(0,i.pK)(this)||A.getOrCreateInstance(this).show()})),r.Z.on(window,"load.bs.tab",(()=>{for(const t of a.Z.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))A.getOrCreateInstance(t)})),(0,i.pF)(A),e.default=A}}]);