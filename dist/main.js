(()=>{"use strict";(()=>{let e=document.querySelector(".header-contacts__arrow"),t=document.querySelector(".header-contacts__phone-number-accord .header-contacts__phone-number"),i=document.querySelector(".header-contacts__arrow img");t.style.opacity="0",e.addEventListener("click",(()=>{"0"===t.style.opacity?(console.log("1"),t.style.opacity="1",t.style.marginTop="25px",i.style.transform="rotate(180deg)",i.style.transition="all 0.6s"):(t.style.opacity="1")&&(console.log("2"),t.style.opacity="0",t.style.marginTop="0px",i.style.transform="rotate(0deg)",i.style.transition="all 0.6s")}))})(),(()=>{let e=document.querySelector(".popup-menu"),t=document.querySelector(".popup-dialog-menu"),i=document.querySelector(".menu__icon"),l=document.querySelector(".close-menu");window.matchMedia("(min-width: 576px)").matches?(i.addEventListener("click",(()=>{(e.style.visibility="hidden")&&(e.style.visibility="visible",t.style.transform="translate3d(0px,0,0)")})),l.addEventListener("click",(()=>{(e.style.visibility="visible")&&(e.style.visibility="hidden",t.style.transform="translate3d(845px,0,0)")}))):(i.addEventListener("click",(()=>{(e.style.visibility="hidden")&&(e.style.visibility="visible",t.style.transform="translate3d(0px,0,0)")})),l.addEventListener("click",(()=>{(e.style.visibility="visible")&&(e.style.visibility="hidden",t.style.transform="translate3d(0px, -150vh,0)")})))})(),(()=>{const e=document.querySelectorAll('a[href^="#main"],a[href^="#formula"],a[href^="#repair-types"],a[href^="#portfolio"],a[href^="#transparency"],a[href^="#director"],a[href^="#reviews"],a[href^="#faq"],a[href^="#main"]');for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const i=t.getAttribute("href");document.querySelector(i).scrollIntoView({behavior:"smooth",block:"start"});let l=document.querySelector(".popup-menu"),r=document.querySelector(".popup-dialog-menu");(l.style.visibility="visible")&&(l.style.visibility="hidden",r.style.transform="translate3d(845px,0,0)")}))})(),(()=>{let e=document.querySelector(".popup-repair-types"),t=document.querySelector(".popup-menu"),i=document.querySelector(".popup-dialog-menu"),l=document.querySelectorAll(".link-list-menu"),r=document.querySelectorAll(".popup-repair-types > .close"),s=document.querySelectorAll(".tablet-hide > .close"),n=document.querySelectorAll(".link-list-repair > a");e.style.visibility="hidden";for(let r of l)r.addEventListener("click",(()=>{(e.style.visibility="hidden")&&(e.style.visibility="visible",t.style.visibility="hidden",i.style.transform="translate3d(845px,0,0)")}));for(let l of n)l.addEventListener("click",(()=>{(e.style.visibility="hidden")&&(e.style.visibility="visible",t.style.visibility="hidden",i.style.transform="translate3d(845px,0,0)")}));for(let t of r)t.addEventListener("click",(()=>{(e.style.visibility="visible")&&(e.style.visibility="hidden")}));for(let t of s)t.addEventListener("click",(()=>{(e.style.visibility="visible")&&(e.style.visibility="hidden")}))})(),(()=>{const e=document.querySelectorAll("input"),t=(e,t="+7 (___) ___-__-__")=>{const i=document.querySelector(e);function l(e){const i=e.keyCode,l=t,r=l.replace(/\D/g,""),s=this.value.replace(/\D/g,"");let n=0,o=l.replace(/[_\d]/g,(function(e){return n<s.length?s.charAt(n++)||r.charAt(n):e}));n=o.indexOf("_"),-1!=n&&(o=o.slice(0,n));let c=l.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");c=new RegExp("^"+c+"$"),(!c.test(this.value)||this.value.length<5||i>47&&i<58)&&(this.value=o),"blur"==e.type&&this.value.length<5&&(this.value="")}i.addEventListener("input",l),i.addEventListener("focus",l),i.addEventListener("blur",l)};for(let i of e)"phone"===i.name&&t("#"+i.id)})(),(()=>{let e=document.querySelectorAll(".link-privacy"),t=document.querySelector(".popup-privacy"),i=document.querySelector(".popup-privacy > .close");for(let i of e)i.addEventListener("click",(()=>{(t.style.visibility="hidden")&&(t.style.visibility="visible")}));i.addEventListener("click",(()=>{(t.style.visibility="visible")&&(t.style.visibility="hidden")}))})()})();