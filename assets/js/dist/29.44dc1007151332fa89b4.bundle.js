"use strict";(self.webpackChunkkcc_gem=self.webpackChunkkcc_gem||[]).push([[29],{29:function(e,t,s){s.r(t);var i=s(147),n=s(930),l=s(902),r=s(66);const o="show",a="collapse",h="collapsing",g='[data-bs-toggle="collapse"]',c={parent:null,toggle:!0},_={parent:"(null|element)",toggle:"boolean"};class d extends r.Z{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const s=l.Z.find(g);for(const e of s){const t=(0,i.K)(e),s=l.Z.find(t).filter((e=>e===this._element));null!==t&&s.length&&this._triggerArray.push(e)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return c}static get DefaultType(){return _}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((e=>e!==this._element)).map((e=>d.getOrCreateInstance(e,{toggle:!1})))),e.length&&e[0]._isTransitioning)return;if(n.Z.trigger(this._element,"show.bs.collapse").defaultPrevented)return;for(const t of e)t.hide();const t=this._getDimension();this._element.classList.remove(a),this._element.classList.add(h),this._element.style[t]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=`scroll${t[0].toUpperCase()+t.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(h),this._element.classList.add(a,o),this._element.style[t]="",n.Z.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[t]=`${this._element[s]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(n.Z.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,(0,i.nq)(this._element),this._element.classList.add(h),this._element.classList.remove(a,o);for(const e of this._triggerArray){const t=(0,i.dG)(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0,this._element.style[e]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(h),this._element.classList.add(a),n.Z.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}_isShown(e=this._element){return e.classList.contains(o)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=(0,i.sb)(e.parent),e}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(g);for(const t of e){const e=(0,i.dG)(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){const t=l.Z.find(":scope .collapse .collapse",this._config.parent);return l.Z.find(e,this._config.parent).filter((e=>!t.includes(e)))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const s of e)s.classList.toggle("collapsed",!t),s.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each((function(){const s=d.getOrCreateInstance(this,t);if("string"==typeof e){if(void 0===s[e])throw new TypeError(`No method named "${e}"`);s[e]()}}))}}n.Z.on(document,"click.bs.collapse.data-api",g,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const t=(0,i.K)(this),s=l.Z.find(t);for(const e of s)d.getOrCreateInstance(e,{toggle:!1}).toggle()})),(0,i.pF)(d),t.default=d}}]);