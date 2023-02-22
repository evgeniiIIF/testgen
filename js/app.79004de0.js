(function(){"use strict";var e={1930:function(e,t,n){var i=n(9242),s=n(3396),o=n(7139);const r={class:"v-app"},a={class:"v-app__dropdown"},l=["disabled"],c={key:0},d={key:1,class:"loading"},u={class:"v-app__table"},m=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Сущность"),(0,s._)("th",null,"id")])],-1),p=(0,s._)("tr",null,null,-1),h=["disabled"],v=(0,s._)("span",null,"Очистить",-1),O=[v];function w(e,t,n,i,v,w){const _=(0,s.up)("v-dropdown");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",a,[(0,s.Wm)(_,{items:v.dropdownItems,onOnSelectedItem:t[0]||(t[0]=e=>w.onSelectedItem(e))},null,8,["items"])]),(0,s._)("button",{class:"v-app__button",disabled:!v.hasSelected,onClick:t[1]||(t[1]=(...e)=>w.createEntity&&w.createEntity(...e))},[e.loading?((0,s.wg)(),(0,s.iD)("span",d)):((0,s.wg)(),(0,s.iD)("span",c,"Создать"))],8,l),(0,s._)("table",u,[m,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.createdEntities,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.id},[(0,s._)("td",null,(0,o.zw)(e.name),1),(0,s._)("td",null,(0,o.zw)(e.id),1)])))),128)),p]),(0,s._)("button",{class:"v-app__button",disabled:!e.createdEntities.length,onClick:t[2]||(t[2]=(...e)=>w.clearEntities&&w.clearEntities(...e))},O,8,h)])}const _={class:"v-dropdown__label"},f=(0,s._)("span",{class:"v-dropdown__title"},"title",-1),y=["value"],I=(0,s._)("span",{class:"v-dropdown__arrow"},"⌄",-1),g={class:"v-dropdown__menu menu-dropdown"},E=["onClick"];function b(e,t,n,r,a,l){return(0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)(["v-dropdown",a.menuIsOpen?"v-dropdown--menu-open":""])},[(0,s._)("label",_,[f,(0,s._)("div",{class:"v-dropdown__field",onClick:t[0]||(t[0]=e=>a.menuIsOpen=!a.menuIsOpen)},[(0,s._)("input",{type:"text",class:"v-dropdown__input",readonly:"",value:a.selected},null,8,y),I])]),(0,s.wy)((0,s._)("ul",g,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.items,((e,t)=>((0,s.wg)(),(0,s.iD)("li",{class:"menu-dropdown__item",key:t,onClick:t=>l.selectItem(t,e)},(0,o.zw)(e),9,E)))),128))],512),[[i.F8,a.menuIsOpen]])],2)}var j={props:{items:{type:Array,default(){return[]}}},data(){return{menuIsOpen:!1,selected:null}},methods:{selectItem(e,t){this.selected=t;const n=e.target.closest(".v-dropdown").querySelector(".v-dropdown__input");this.menuIsOpen=!1,n.focus(),this.$emit("on-selected-item",{hasSelected:this.hasSelected,selected:this.selected})},hideOptions(e){this.menuIsOpen&&!e.target.closest(".v-dropdown")&&(this.menuIsOpen=!1)}},computed:{hasSelected(){return this.selected!==this.items[0]}},mounted(){this.selected=this.items[0],document.addEventListener("click",this.hideOptions.bind(this),!0)},beforeDestroy(){document.removeEventListener("click",this.hideOptions)}},z=n(89);const M=(0,z.Z)(j,[["render",b]]);var N=M,D=n(65),k={components:{vDropdown:N},data(){return{dropdownItems:["Не выбрано","Сделка","Контакт","Компания"],hasSelected:!1,entity:null}},methods:{...(0,D.nv)(["aCreateEntity","aInit","aClearEntities"]),onSelectedItem(e){this.hasSelected=e.hasSelected,this.entity=e.selected},createEntity(){this.aCreateEntity(this.entity)},clearEntities(){this.aClearEntities()}},computed:{...(0,D.Se)(["loading","createdEntities"])},mounted(){this.aInit()}};const S=(0,z.Z)(k,[["render",w]]);var C=S,Y=(n(7658),(0,D.MT)({state:{entities:{"Сделка":"leads","Контакт":"contacts","Компания":"companies"},loading:!1,createdEntities:[],entity_id:null},getters:{loading(e){return e.loading},entities(e){return e.entities},entity_id(e){return e.entity_id},createdEntities(e){return e.createdEntities}},mutations:{startLoading(e){e.loading=!0},endLoading(e){e.loading=!1},createEntity(e,t){e.createdEntities.push(t)},init(e){localStorage.getItem("entities")&&(console.log("init"),e.createdEntities=JSON.parse(localStorage.getItem("entities")))},saveEntity(e){let t=JSON.stringify(e.createdEntities);localStorage.setItem("entities",t)},clearEntities(e){localStorage.getItem("entities")&&(e.createdEntities=[],localStorage.removeItem("entities"))}},actions:{aCreateEntity(e,t){e.commit("startLoading");let n=e.getters.entities[t],i=`https://d6757be6f1100.amocrm.ru/api/v4/${n}`,s="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjYxZjA3NzZlNzAxZmZlMjY3ZDNmMTA2NzFhMjlmODUzZmU5ZTM5MjYzN2IwNDIzNTc5OTEwMjNkZTIyYWEzMzRjY2M3YTI0NGExZjhmOTFhIn0.eyJhdWQiOiIxYjkzYzk5NC1kNDM0LTQwNTctODI0OS03ZTVjNzNkZTFhYWEiLCJqdGkiOiI2MWYwNzc2ZTcwMWZmZTI2N2QzZjEwNjcxYTI5Zjg1M2ZlOWUzOTI2MzdiMDQyMzU3OTkxMDIzZGUyMmFhMzM0Y2NjN2EyNDRhMWY4ZjkxYSIsImlhdCI6MTY3NzA0NzM4NywibmJmIjoxNjc3MDQ3Mzg3LCJleHAiOjE2NzcxMzM3ODcsInN1YiI6IjczODA4ODMiLCJhY2NvdW50X2lkIjozMDg3ODU2NiwiYmFzZV9kb21haW4iOiJhbW9jcm0ucnUiLCJzY29wZXMiOlsiY3JtIl19.d6adjWw2eYRhv2V71Ru6UaSCT6dSc29v4uaNTuf1IMpR0aqJPalyJiSOVBhD-ccZldOMCLzBDhwLx3lTLC60tEw3pN2_WjcvmJ0xfccNvy_tX_sMJbIj0rbuj7099UxniYiOq95km0cM1ibHYre67GOy_ngXyUZJuOElhWClDT5hXzbAVrU3OHNXGGxwOFQD5wwrndUaO0FdOKDjVZvyMV7EUXUac5-WVDD97sDO7k7rdFRiIjDQVvz6K7-jKI3FnirJFn8PcWt8mzGu-YhvC-Wq8RCukcXwM6zsGl0Q_dY1xUmVc43Ucvj0gRlNhRDz5H0yJ3jGZMmyJS4pHdLnhA";fetch(i,{method:"POST",body:JSON.stringify([{name:t}]),headers:{"Content-Type":"application/json",Authorization:"Bearer "+s}}).then((e=>e.json())).then((i=>{let s=i._embedded[n][0].id;e.commit("createEntity",{name:t,id:s}),e.commit("saveEntity"),e.commit("endLoading")})).catch((e=>console.log(e)))},aInit(e){e.commit("init")},aClearEntities(e){e.commit("clearEntities")}}}));(0,i.ri)(C).use(Y).mount("#app")}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,i,s,o){if(!i){var r=1/0;for(d=0;d<e.length;d++){i=e[d][0],s=e[d][1],o=e[d][2];for(var a=!0,l=0;l<i.length;l++)(!1&o||r>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[l])}))?i.splice(l--,1):(a=!1,o<r&&(r=o));if(a){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[i,s,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,o,r=i[0],a=i[1],l=i[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(l)var d=l(n)}for(t&&t(i);c<r.length;c++)o=r[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},i=self["webpackChunktestgen"]=self["webpackChunktestgen"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(1930)}));i=n.O(i)})();
//# sourceMappingURL=app.79004de0.js.map