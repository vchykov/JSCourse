!function(){"use strict";function e(e){return e<=9&&e>=0?`0${e}`:e}function t(e,t){const n=document.querySelector(t);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden",clearInterval(e)}function n(e){const t=document.querySelector(e);t.classList.add("hide"),t.classList.remove("show"),document.body.style.overflow=""}window.addEventListener("DOMContentLoaded",(()=>{const o=".modal",s=setTimeout((()=>{t(s,o)}),5e4);(function(e,t,n,o){const s=document.querySelectorAll(e),r=document.querySelectorAll(t),a=document.querySelector(n);function c(){r.forEach((e=>{e.classList.remove("show","fade"),e.classList.add("hide")})),s.forEach((e=>{e.classList.remove(o)}))}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;r[e].classList.remove("hide"),r[e].classList.add("show","fade"),s[e].classList.add(o)}c(),i(),a.addEventListener("click",(function(t){const n=t.target;n&&n.classList.contains(e.slice(1))&&s.forEach(((e,t)=>{e==n&&(c(),i(t))}))})),a.addEventListener("mousedown",(e=>{e.preventDefault()}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(e,o,s){const r=document.querySelector(o);document.querySelectorAll(s).forEach((n=>{n.addEventListener("click",(()=>{t(e,o)}))})),r.addEventListener("click",(e=>{e.target!==r&&""!=e.target.getAttribute("data-close")||n(o)})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&r.classList.contains("show")&&n(o)})),window.addEventListener("scroll",(function n(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight-1&&(t(e,o),window.removeEventListener("scroll",n))}))}(s,o,"[data-modal]"),function(t,n){const o=document.querySelector(t),s=o.querySelector("#days"),r=o.querySelector("#hours"),a=o.querySelector("#minutes"),c=o.querySelector("#seconds"),i=setInterval(l,1e3);function l(){const t=function(e){const t=Date.parse(e)-Date.now();return{total:t,days:Math.floor(t/864e5),hours:Math.floor(t/36e5%24),minutes:Math.floor(t/6e4%60),seconds:Math.floor(t/1e3%60)}}(n);s.innerHTML=e(t.days),r.innerHTML=e(t.hours),a.innerHTML=e(t.minutes),c.innerHTML=e(t.seconds),t.total<=0&&clearInterval(i)}l()}(".timer","2022-01-28"),function(){class e{constructor(e,t,n,o,s,r){this.src=e,this.alt=t,this.title=n,this.descr=o,this.price=s,this.parent=document.querySelector(r);for(var a=arguments.length,c=new Array(a>6?a-6:0),i=6;i<a;i++)c[i-6]=arguments[i];this.classes=c,this.transfer=27,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}render(){const e=document.createElement("div");0===this.classes.length?(this.classes="menu__item",e.classList.add(this.classes)):this.classes.forEach((t=>e.classList.add(t))),e.innerHTML=`\n            <img src=${this.src} alt=${this.alt}>\n            <h3 class="menu__item-subtitle">Меню "${this.title}"</h3>\n            <div class="menu__item-descr">${this.descr}</div>\n            <div class="menu__item-divider"></div>\n            <div class="menu__item-price">\n                <div class="menu__item-cost">Цена:</div>\n                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n            </div>\n        `,this.parent.append(e)}}axios.get("http://localhost:3000/menu").then((t=>{t.data.forEach((t=>{let{img:n,altimg:o,title:s,descr:r,price:a}=t;new e(n,o,s,r,a,".menu .container").render()}))}))}(),function(){const e=document.querySelector(".calculating__result span");let t,n,o,s,r;function a(){e.textContent=t&&n&&o&&s&&r?"female"===t?Math.round((447.6+9.2*o+3.1*n-4.3*s)*r):Math.round((88.36+13.4*o+4.8*n-5.7*s)*r):"____"}function c(e,t){document.querySelectorAll(e).forEach((e=>{e.classList.remove(t),e.getAttribute("id")===localStorage.getItem("sex")&&e.classList.add(t),e.getAttribute("data-ratio")===localStorage.getItem("ratio")&&e.classList.add(t)}))}function i(e,n){const o=document.querySelectorAll(e);o.forEach((e=>{e.addEventListener("click",(e=>{e.target.getAttribute("data-ratio")?(r=+e.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+e.target.getAttribute("data-ratio"))):(t=e.target.getAttribute("id"),localStorage.setItem("sex",t=e.target.getAttribute("id"))),o.forEach((e=>{e.classList.remove(n)})),e.target.classList.add(n),a()}))}))}function l(e){const t=document.querySelector(e);t.addEventListener("input",(()=>{switch(t.value.match(/\D/g)?t.style.border="1px solid red":t.style.border="none",t.getAttribute("id")){case"height":n=+t.value;break;case"weight":o=+t.value;break;case"age":s=+t.value}a()}))}localStorage.getItem("sex")?t=localStorage.getItem("sex"):(t="female",localStorage.setItem("sex",t)),localStorage.getItem("ratio")?r=localStorage.getItem("ratio"):(r=1.375,localStorage.setItem("ratio",r)),a(),c("#gender div","calculating__choose-item_active"),c(".calculating__choose_big div","calculating__choose-item_active"),i("#gender div","calculating__choose-item_active"),i(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),function(e,o){const s=document.querySelectorAll("form"),r="img/form/spinner.svg";function a(s){const r=document.querySelector(".modal__dialog");r.classList.add("hide"),t(e,o);const a=document.createElement("div");a.classList.add("modal__dialog"),a.innerHTML=`\n            <div class="modal__content">\n                <div class="modal__close" data-close>&times;</div>\n                <div class="modal__title">${s}</div> \n            </div>\n        `,document.querySelector(".modal").append(a),setTimeout((()=>{a.remove(),r.classList.add("show"),r.classList.remove("hide"),n(o)}),4e3)}document.createElement("img").src=r,s.forEach((e=>{!function(e){e.addEventListener("submit",(t=>{t.preventDefault();const n=document.createElement("img");n.src=r,n.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",e.insertAdjacentElement("afterend",n);const o=new FormData(e);(async(e,t)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:t});return await n.json()})(0,JSON.stringify(Object.fromEntries(o.entries()))).then((e=>{a("Спасибо! Скоро мы с Вами свяжемся"),n.remove(),console.log(e)})).catch((()=>{a("Что-то пошло не так..."),n.remove()})).finally((()=>{e.reset()}))}))}(e)}))}(s,o),function(t){let{container:n,slide:o,nextArrow:s,prevArrow:r,totalCounter:a,currentCounter:c,wrapper:i,field:l}=t;const d=document.querySelectorAll(o),u=document.querySelector(n),m=document.querySelector(s),h=document.querySelector(a),g=document.querySelector(c),f=document.querySelector(r),v=document.querySelector(i),p=document.querySelector(l),y=window.getComputedStyle(v).width;let _=1,L=0;h.textContent=e(d.length),g.textContent=e(_),p.style.width=100*d.length+"%",p.style.display="flex",p.style.transition="0.5s all",v.style.overflow="hidden",d.forEach((e=>{e.style.width=y})),u.style.position="relative";const w=document.createElement("ol"),S=[];w.classList.add("carousel-indicators"),w.style.cssText="\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 15;\n        display: flex;\n        justify-content: center;\n        margin-right: 15%;\n        margin-left: 15%;\n        list-style: none;\n        ",u.append(w);for(let e=0;e<d.length;e++){const t=document.createElement("li");t.setAttribute("data-slide-to",e+1),t.style.cssText="\n            box-sizing: content-box;\n            flex: 0 1 auto;\n            width: 30px;\n            height: 6px;\n            margin-right: 3px;\n            margin-left: 3px;\n            cursor: pointer;\n            background-color: #fff;\n            background-clip: padding-box;\n            border-top: 10px solid transparent;\n            border-bottom: 10px solid transparent;\n            opacity: .5;\n            transition: opacity .6s ease;\n            ",0==e&&(t.style.opacity=1),w.append(t),S.push(t)}function E(){g.textContent=e(_),p.style.transform=`translateX(-${L}px)`,S.forEach((e=>e.style.opacity=".5")),S[_-1].style.opacity=1}function b(e){return+e.replace(/\D/g,"")}m.addEventListener("click",(()=>{L==b(y)*(d.length-1)?L=0:L+=b(y),_==d.length?_=1:_++,E()})),f.addEventListener("click",(()=>{0==L?L=b(y)*(d.length-1):L-=b(y),1==_?_=d.length:_--,E()})),S.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.getAttribute("data-slide-to");_=t,L=b(y)*(t-1),E()}))})),u.addEventListener("mousedown",(e=>{e.preventDefault()}))}({container:".offer__slider",slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})}))}();
//# sourceMappingURL=bundle.js.map