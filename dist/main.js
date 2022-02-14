(()=>{"use strict";class t{constructor({main:t,wrap:i,next:e,prev:s,position:o=0,slidesToShow:n=3,infinity:l=!1,responsive:r=[],styles:a,stylesId:d,styleClasses:p,noAdaptiveStyles:h,buttons:c=!0}){this.main=document.querySelector(t),this.wrap=document.querySelector(i),this.slides=[...this.wrap.children],this.prev=document.querySelector(s),this.next=document.querySelector(e),this.slidesToShow=n,this.responsive=r,this.stylesId=d,this.noAdaptiveStyles=h,this.styles=a,this.buttons=c,this.options={position:o,widthSlide:Math.floor(100/this.slidesToShow),infinity:l,maxPosition:this.slides.length-this.slidesToShow,styleClasses:p}}init(){this.addCrackClass(),this.addStyle(),this.prev||this.next||!this.buttons||this.addArrow(),this.buttons&&(this.controlSlider(),this.prev.style.visibility="hidden"),this.responsive.length&&this.responseInit()}responseInit(){const t=this.slidesToShow;this.responsive.sort(((t,i)=>i.breakpoint-t.breakpoint));const i=this.responsive.map((t=>t.breakpoint)),e=Math.max(...i),s=()=>{const i=document.documentElement.clientWidth;i<e?this.responsive.forEach(((t,e)=>{i<t.breakpoint&&(this.slidesToShow=this.responsive[e].slideToShow,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.options.maxPosition=this.slides.length-this.slidesToShow,this.addStyle())})):(this.slidesToShow=t,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.options.maxPosition=this.slides.length-this.slidesToShow,this.addStyle())};s(),window.addEventListener("resize",s)}addCrackClass(){const t=this.options.styleClasses;this.main.classList.add(t.main),this.wrap.classList.add(t.wrap),this.slides.forEach((i=>i.classList.add(t.item)))}addStyle(){let t=document.getElementById(this.stylesId);const i=this.options.styleClasses;t||(t=document.createElement("style"),t.id=this.stylesId),this.noAdaptiveStyles?t.textContent=this.noAdaptiveStyles:t.textContent=`\n\t\t\t.${i.main} {\n\t\t\t\toverflow: hidden !important;\n\t\t\t}\n\t\t\n\t\t\t.${i.wrap} {\n\t\t\t\tdisplay: flex !important;\n\t\t\t\ttransition: transform 0.5s !important;\n\t\t\t}\n\t\t\n\t\t\t.${i.item} {\n\t\t\t\tdisplay: flex !important;\n\t\t\t\talign-items: center !important;\n\t\t\t\tjustify-content: center !important; \n\t\t\t\tmargin: 0 auto !important;\n\t\t\t\tflex: 0 0 ${this.options.widthSlide}% !important;\n\t\t\t}\n\t\t\t\n\t\t\t${this.styles?this.styles:""}\n\t\t\t`,document.head.append(t)}controlSlider(){this.added||(this.added=!0,this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this)))}prevSlider(){const t=this.options.infinity;if(t)return"return"===t?void(this.options.position>0?(--this.options.position,this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`):(this.options.position=this.options.maxPosition,this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)):void 0;this.options.position>0&&(--this.options.position,this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`,this.next.style.visibility="",0===this.options.position&&(this.prev.style.visibility="hidden"))}nextSlider(){const t=this.options.infinity;if(t)return"return"===t?void(this.options.position<this.options.maxPosition?(++this.options.position,this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`):(this.options.position=0,this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)):void 0;this.options.position<this.options.maxPosition&&(++this.options.position,this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`,this.prev.style.visibility="",this.options.position===this.options.maxPosition&&(this.next.style.visibility="hidden"))}addArrow(){const t=this.options.styleClasses;this.prev=document.createElement("button"),this.next=document.createElement("button"),this.next.className=t.prev,this.prev.className=t.next;const i=document.createElement("style");i.textContent=`\n        .${t.prev},\n        .${t.next} {\n          margin: 0 10px !important;\n          border: 20px solid transparent !important; \n          background: transparent !important;\n        }\n  \n        .${t.prev} {\n          border-right-color: #19bbfe !important;\n        }\n        \n        .${t.next} {\n          border-left-color: #19bbfe !important;\n        }\n  \n        .${t.prev}:hover,\n        .${t.next}:hover,\n        .${t.prev}:focus,\n        .${t.next}:focus {\n          background: transparent !important;\n          outline: transparent !important;\n        }\n  \n      `,this.main.append(this.prev),this.main.append(this.next),document.head.append(i)}}(()=>{let t=document.querySelector(".header-contacts__arrow"),i=document.querySelector(".header-contacts__phone-number-accord .header-contacts__phone-number"),e=document.querySelector(".header-contacts__arrow img");i.style.opacity="0",t.addEventListener("click",(()=>{"0"===i.style.opacity?(console.log("1"),i.style.opacity="1",i.style.marginTop="25px",e.style.transform="rotate(180deg)",e.style.transition="all 0.6s"):(i.style.opacity="1")&&(console.log("2"),i.style.opacity="0",i.style.marginTop="0px",e.style.transform="rotate(0deg)",e.style.transition="all 0.6s")}))})(),(()=>{let t=document.querySelector(".popup-menu"),i=document.querySelector(".popup-dialog-menu"),e=document.querySelector(".menu__icon"),s=document.querySelector(".close-menu");window.matchMedia("(min-width: 576px)").matches?(e.addEventListener("click",(()=>{(t.style.visibility="hidden")&&(t.style.visibility="visible",i.style.transform="translate3d(0px,0,0)")})),s.addEventListener("click",(()=>{(t.style.visibility="visible")&&(t.style.visibility="hidden",i.style.transform="translate3d(845px,0,0)")}))):(e.addEventListener("click",(()=>{(t.style.visibility="hidden")&&(t.style.visibility="visible",i.style.transform="translate3d(0px,0,0)")})),s.addEventListener("click",(()=>{(t.style.visibility="visible")&&(t.style.visibility="hidden",i.style.transform="translate3d(0px, -150vh,0)")})))})(),(()=>{const t=document.querySelectorAll('a[href^="#main"],a[href^="#formula"],a[href^="#repair-types"],a[href^="#portfolio"],a[href^="#transparency"],a[href^="#director"],a[href^="#reviews"],a[href^="#faq"],a[href^="#main"]');for(let i of t)i.addEventListener("click",(function(t){t.preventDefault();const e=i.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"});let s=document.querySelector(".popup-menu"),o=document.querySelector(".popup-dialog-menu");(s.style.visibility="visible")&&(s.style.visibility="hidden",o.style.transform="translate3d(845px,0,0)")}))})(),(()=>{let t=document.querySelector(".popup-repair-types"),i=document.querySelector(".popup-menu"),e=document.querySelector(".popup-dialog-menu"),s=document.querySelectorAll(".link-list-menu"),o=document.querySelectorAll(".popup-repair-types > .close"),n=document.querySelectorAll(".tablet-hide > .close"),l=document.querySelectorAll(".link-list-repair > a");t.style.visibility="hidden";for(let o of s)o.addEventListener("click",(()=>{(t.style.visibility="hidden")&&(t.style.visibility="visible",i.style.visibility="hidden",e.style.transform="translate3d(845px,0,0)")}));for(let s of l)s.addEventListener("click",(()=>{(t.style.visibility="hidden")&&(t.style.visibility="visible",i.style.visibility="hidden",e.style.transform="translate3d(845px,0,0)")}));for(let i of o)i.addEventListener("click",(()=>{(t.style.visibility="visible")&&(t.style.visibility="hidden")}));for(let i of n)i.addEventListener("click",(()=>{(t.style.visibility="visible")&&(t.style.visibility="hidden")}))})(),(()=>{const t=document.querySelectorAll("input"),i=(t,i="+7 (___) ___-__-__")=>{const e=document.querySelector(t);function s(t){const e=t.keyCode,s=i,o=s.replace(/\D/g,""),n=this.value.replace(/\D/g,"");let l=0,r=s.replace(/[_\d]/g,(function(t){return l<n.length?n.charAt(l++)||o.charAt(l):t}));l=r.indexOf("_"),-1!=l&&(r=r.slice(0,l));let a=s.substr(0,this.value.length).replace(/_+/g,(function(t){return"\\d{1,"+t.length+"}"})).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(this.value)||this.value.length<5||e>47&&e<58)&&(this.value=r),"blur"==t.type&&this.value.length<5&&(this.value="")}e.addEventListener("input",s),e.addEventListener("focus",s),e.addEventListener("blur",s)};for(let e of t)"phone"===e.name&&i("#"+e.id);console.log()})(),(()=>{let t=document.querySelectorAll(".link-privacy"),i=document.querySelector(".popup-privacy"),e=document.querySelector(".popup-privacy > .close");for(let e of t)e.addEventListener("click",(()=>{(i.style.visibility="hidden")&&(i.style.visibility="visible")}));e.addEventListener("click",(()=>{(i.style.visibility="visible")&&(i.style.visibility="hidden")}))})(),(()=>{let t=document.querySelectorAll(".button_wide"),i=document.querySelector(".popup-consultation"),e=document.querySelector(".close-consultation");for(let e of t)e.addEventListener("click",(()=>{(i.style.visibility="hidden")&&(i.style.visibility="visible")}));e.addEventListener("click",(()=>{(i.style.visibility="visible")&&(i.style.visibility="hidden")}))})(),(()=>{const t=document.querySelector(".accordion"),i=document.querySelectorAll(".title_block");t.addEventListener("click",(t=>{const e=t.target;i.forEach((t=>{t!==e||t.classList.contains("msg-active")?t.classList.remove("msg-active"):t.classList.add("msg-active")}))}))})(),(()=>{let i=document.querySelectorAll(".formula-item__icon-inner-text")[0],e=document.querySelectorAll(".formula-item__icon-inner-text")[1],s=document.querySelectorAll(".formula-item__icon-inner-text")[2],o=document.querySelectorAll(".formula-item__icon-inner-text")[3],n=document.querySelectorAll(".formula-item__icon-inner-text")[4],l=document.querySelectorAll(".formula-item__icon-inner-text")[5],r=document.querySelectorAll(".formula-item-popup")[0],a=document.querySelectorAll(".formula-item-popup")[1],d=document.querySelectorAll(".formula-item-popup")[2],p=document.querySelectorAll(".formula-item-popup")[3],h=document.querySelectorAll(".formula-item-popup")[4],c=document.querySelectorAll(".formula-item-popup")[5];i.addEventListener("mouseover",(function(){r.style.visibility="visible"})),i.addEventListener("mouseout",(function(){r.style.visibility="hidden"})),e.addEventListener("mouseover",(function(){a.style.visibility="visible"})),e.addEventListener("mouseout",(function(){a.style.visibility="hidden"})),s.addEventListener("mouseover",(function(){d.style.visibility="visible"})),s.addEventListener("mouseout",(function(){d.style.visibility="hidden"})),o.addEventListener("mouseover",(function(){p.style.visibility="visible"})),o.addEventListener("mouseout",(function(){p.style.visibility="hidden"})),n.addEventListener("mouseover",(function(){h.style.visibility="visible"})),n.addEventListener("mouseout",(function(){h.style.visibility="hidden"})),l.addEventListener("mouseover",(function(){c.style.visibility="visible"})),l.addEventListener("mouseout",(function(){c.style.visibility="hidden"}));const y=new t({main:".formula-slider-wrap",wrap:".formula-slider",prev:"#formula-arrow_left",next:"#formula-arrow_right",stylesId:"js-formula-slider-styles",slidesToShow:1,styleClasses:{main:"js-formula-main-slider",wrap:"js-formula-wrap-slider",item:"js-formula-slider__item"},styles:"\n\t\t.js-formula-slider__item {\n\t\t\tjustify-content: flex-start !important;\n\t\t}\n\t\t"});y.slides[0].classList.toggle("active-item"),y.prevSlider=function(){this.options.position>0&&(this.slides[this.options.position].classList.toggle("active-item"),--this.options.position,this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`,this.next.style.visibility="",0===this.options.position&&(this.prev.style.visibility="hidden"),this.slides[this.options.position].classList.toggle("active-item"))},y.nextSlider=function(){this.options.position<this.options.maxPosition&&(this.slides[this.options.position].classList.toggle("active-item"),++this.options.position,this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`,this.prev.style.visibility="",this.options.position===this.options.maxPosition&&(this.next.style.visibility="hidden"),this.slides[this.options.position].classList.toggle("active-item"))},y.init()})(),(()=>{const i=document.querySelector(".nav-list.nav-list-repair"),e=document.querySelectorAll(".repair-types-nav__item"),s=[...document.querySelector(".repair-types-slider").children],o=new t({main:".nav.repair-types-nav",wrap:".nav-list.nav-list-repair",prev:"#nav-arrow-repair-left_base",next:"#nav-arrow-repair-right_base",stylesId:"js-repair-types-nav-slider-style",slidesToShow:2.7,styleClasses:{main:"js-repair-types-nav-main-slider",wrap:"js-repair-types-nav-wrap-slider",item:"js-repair-types-nav__item-slider"},responsive:[{breakpoint:769,slideToShow:1.8},{breakpoint:576,slideToShow:1.3}]});o.addStyle=function(){let t=document.getElementById(this.stylesId);const i=this.options.styleClasses;t||(t=document.createElement("style"),t.id=this.stylesId),t.textContent=`\n\t\t\t@media (max-width: 1024px) {\n\t\t\t\t.${i.main} {\n\t\t\t\t\toverflow: hidden !important;\n\t\t\t\t}\n\t\t\t\n\t\t\t\t.${i.wrap} {\n\t\t\t\t\tdisplay: flex !important;\n\t\t\t\t\ttransition: transform 0.5s !important;\n\t\t\t\t\tflex-wrap: nowrap;\n\t\t\t\t}\n\t\t\t\n\t\t\t\t.${i.item} {\n\t\t\t\t\tdisplay: flex !important;\n\t\t\t\t\talign-items: center !important;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\tjustify-content: center !important; \n\t\t\t\t\tmargin: 0 10px !important;\n\t\t\t\t\tflex: 0 0 ${this.options.widthSlide}% !important;\n\t\t\t\t}\n\t\t\t\t.${i.item} svg {\n\t\t\t\t\tleft: unset;\n\t\t\t\t}\n\t\t\t\t.nav-list-repair {\n\t\t\t\t\tmin-width: 100%;\n\t\t\t\t}\n\t\t\t}\n\t\t\n\t\t\t@media (min-width: 1024px) {\n\t\t\t\t.${i.wrap} {\n\t\t\t\t\ttransform: translateX(-0%) !important;\n\t\t\t\t}\n\t\t\t}\n\t\t`,document.head.append(t)},o.prevSlider=function(){this.options.position>0&&(--this.options.position,this.options.position===Math.round(this.options.maxPosition+1)?(this.buff=10*this.slidesToShow+(this.slidesToShow>=2.5?-10:10),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide-this.buff}%)`):this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`,this.next.style.visibility="",0===this.options.position&&(this.prev.style.visibility="hidden"))},o.nextSlider=function(){this.options.position<Math.round(this.options.maxPosition)&&(++this.options.position,this.buff=10*this.slidesToShow+(this.slidesToShow>=2.5?-2:10),this.options.position===Math.round(this.options.maxPosition)?this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide+this.buff}%)`:this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`,this.prev.style.visibility="",this.options.position===Math.round(this.options.maxPosition)&&(this.next.style.visibility="hidden"))},o.init();const n=[...document.querySelector(".repair-types-slider").children],l=document.querySelector("#repair-counter .slider-counter-content__total"),r=document.querySelector("#repair-counter .slider-counter-content__current"),a=new t({main:".repair-types-slider",wrap:".types-repair1",prev:"#repair-types-arrow_left",next:"#repair-types-arrow_right",stylesId:"js-types-repair1-slider",slidesToShow:1,styleClasses:{main:"js-types-repair1-main-slider",wrap:"js-types-repair1-wrap-slider",item:"js-types-repair1__item-slider"}});function d(t){if(s[t].classList.length>1)return;for(let i=0;i<s.length;i++)t===i?(e[i].classList.add("active"),s[i].style.display="",s[i].style.transform=""):(e[i].classList.remove("active"),s[i].style.display="none",s[i].style.transform="");const i=n[t].classList[0];a.update({wrap:`.${i}`,wrapClass:`js-${i}-wrap-slider`,itemClass:`js-${i}__item-slider`,stylesId:`js-${i}-slider`})}l.textContent=a.slides.length,a.update=function({wrap:t,stylesId:i,wrapClass:e,itemClass:s}){document.getElementById(this.stylesId).remove();const o=this.options.styleClasses;this.wrap.style.transform="",this.wrap.classList.remove(o.wrap),this.slides.forEach((t=>t.classList.remove(o.item))),this.wrap=document.querySelector(t),this.stylesId=i,this.slides=[...this.wrap.children],this.options.styleClasses.wrap=e,this.options.styleClasses.item=s,this.options.maxPosition=this.slides.length-this.slidesToShow,this.options.position=0,this.init(),l.textContent=this.slides.length,this.options.position===this.options.maxPosition?this.next.style.visibility="hidden":this.next.style.visibility="visible",0===this.options.position?this.prev.style.visibility="hidden":this.prev.style.visibility="visible",r.textContent=this.options.position+1},a.prevSlider=function(){this.options.position>0&&(--this.options.position,this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`,this.next.style.visibility="",0===this.options.position&&(this.prev.style.visibility="hidden"),r.textContent=this.options.position+1)},a.nextSlider=function(){this.options.position<this.options.maxPosition&&(++this.options.position,this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`,this.prev.style.visibility="",this.options.position===this.options.maxPosition&&(this.next.style.visibility="hidden"),r.textContent=this.options.position+1)},a.init(),d(0),i.addEventListener("click",(t=>{let i=t.target;i=i.closest(".repair-types-nav__item"),i&&e.forEach(((t,e)=>{t===i&&d(e)}))}))})()})();