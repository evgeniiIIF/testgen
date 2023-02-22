(function(){"use strict";var e={1930:function(e,t,n){var i=n(9242),o=n(3396),s=n(7139);const c={class:"v-app"},r={class:"v-app__dropdown"},a=["disabled"],l={key:0},d={key:1,class:"loading"},u={class:"v-app__table"},m=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"Сущность"),(0,o._)("th",null,"id")])],-1),h=(0,o._)("tr",null,null,-1),p=["disabled"],O=(0,o._)("span",null,"Очистить",-1),I=[O];function v(e,t,n,i,O,v){const M=(0,o.up)("v-dropdown");return(0,o.wg)(),(0,o.iD)("div",c,[(0,o._)("div",r,[(0,o.Wm)(M,{items:O.dropdownItems,onOnSelectedItem:t[0]||(t[0]=e=>v.onSelectedItem(e))},null,8,["items"])]),(0,o._)("button",{class:"v-app__button",disabled:!O.hasSelected,onClick:t[1]||(t[1]=(...e)=>v.createEntity&&v.createEntity(...e))},[e.loading?((0,o.wg)(),(0,o.iD)("span",d)):((0,o.wg)(),(0,o.iD)("span",l,"Создать"))],8,a),(0,o._)("table",u,[m,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.createdEntities,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.id},[(0,o._)("td",null,(0,s.zw)(e.name),1),(0,o._)("td",null,(0,s.zw)(e.id),1)])))),128)),h]),(0,o._)("button",{class:"v-app__button",disabled:!e.createdEntities.length,onClick:t[2]||(t[2]=(...e)=>v.clearEntities&&v.clearEntities(...e))},I,8,p)])}const M={class:"v-dropdown__label"},z=(0,o._)("span",{class:"v-dropdown__title"},"title",-1),N=["value"],w=(0,o._)("span",{class:"v-dropdown__arrow"},"⌄",-1),j={class:"v-dropdown__menu menu-dropdown"},y=["onClick"];function g(e,t,n,c,r,a){return(0,o.wg)(),(0,o.iD)("div",{class:(0,s.C_)(["v-dropdown",r.menuIsOpen?"v-dropdown--menu-open":""])},[(0,o._)("label",M,[z,(0,o._)("div",{class:"v-dropdown__field",onClick:t[0]||(t[0]=e=>r.menuIsOpen=!r.menuIsOpen)},[(0,o._)("input",{type:"text",class:"v-dropdown__input",readonly:"",value:r.selected},null,8,N),w])]),(0,o.wy)((0,o._)("ul",j,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.items,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{class:"menu-dropdown__item",key:t,onClick:t=>a.selectItem(t,e)},(0,s.zw)(e),9,y)))),128))],512),[[i.F8,r.menuIsOpen]])],2)}var _={props:{items:{type:Array,default(){return[]}}},data(){return{menuIsOpen:!1,selected:null}},methods:{selectItem(e,t){this.selected=t;const n=e.target.closest(".v-dropdown").querySelector(".v-dropdown__input");this.menuIsOpen=!1,n.focus(),this.$emit("on-selected-item",{hasSelected:this.hasSelected,selected:this.selected})},hideOptions(e){this.menuIsOpen&&!e.target.closest(".v-dropdown")&&(this.menuIsOpen=!1)}},computed:{hasSelected(){return this.selected!==this.items[0]}},mounted(){this.selected=this.items[0],document.addEventListener("click",this.hideOptions.bind(this),!0)},beforeDestroy(){document.removeEventListener("click",this.hideOptions)}},D=n(89);const f=(0,D.Z)(_,[["render",g]]);var Y=f,Z=n(65),E={components:{vDropdown:Y},data(){return{dropdownItems:["Не выбрано","Сделка","Контакт","Компания"],hasSelected:!1,entity:null}},methods:{...(0,Z.nv)(["aCreateEntity","aInit","aClearEntities"]),onSelectedItem(e){this.hasSelected=e.hasSelected,this.entity=e.selected},createEntity(){this.aCreateEntity(this.entity)},clearEntities(){this.aClearEntities()}},computed:{...(0,Z.Se)(["loading","createdEntities"])},mounted(){this.aInit()}};const T=(0,D.Z)(E,[["render",v]]);var b=T,J=(n(7658),(0,Z.MT)({state:{entities:{"Сделка":"leads","Контакт":"contacts","Компания":"companies"},loading:!1,createdEntities:[],entity_id:null},getters:{loading(e){return e.loading},entities(e){return e.entities},entity_id(e){return e.entity_id},createdEntities(e){return e.createdEntities}},mutations:{startLoading(e){e.loading=!0},endLoading(e){e.loading=!1},createEntity(e,t){e.createdEntities.push(t)},init(e){localStorage.getItem("entities")&&(console.log("init"),e.createdEntities=JSON.parse(localStorage.getItem("entities")))},saveEntity(e){let t=JSON.stringify(e.createdEntities);localStorage.setItem("entities",t)},clearEntities(e){localStorage.getItem("entities")&&(e.createdEntities=[],localStorage.removeItem("entities"))}},actions:{aCreateEntity(e,t){e.commit("startLoading");let n=e.getters.entities[t],i=`/api/v4/${n}`,o="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjYxZjA3NzZlNzAxZmZlMjY3ZDNmMTA2NzFhMjlmODUzZmU5ZTM5MjYzN2IwNDIzNTc5OTEwMjNkZTIyYWEzMzRjY2M3YTI0NGExZjhmOTFhIn0.eyJhdWQiOiIxYjkzYzk5NC1kNDM0LTQwNTctODI0OS03ZTVjNzNkZTFhYWEiLCJqdGkiOiI2MWYwNzc2ZTcwMWZmZTI2N2QzZjEwNjcxYTI5Zjg1M2ZlOWUzOTI2MzdiMDQyMzU3OTkxMDIzZGUyMmFhMzM0Y2NjN2EyNDRhMWY4ZjkxYSIsImlhdCI6MTY3NzA0NzM4NywibmJmIjoxNjc3MDQ3Mzg3LCJleHAiOjE2NzcxMzM3ODcsInN1YiI6IjczODA4ODMiLCJhY2NvdW50X2lkIjozMDg3ODU2NiwiYmFzZV9kb21haW4iOiJhbW9jcm0ucnUiLCJzY29wZXMiOlsiY3JtIl19.d6adjWw2eYRhv2V71Ru6UaSCT6dSc29v4uaNTuf1IMpR0aqJPalyJiSOVBhD-ccZldOMCLzBDhwLx3lTLC60tEw3pN2_WjcvmJ0xfccNvy_tX_sMJbIj0rbuj7099UxniYiOq95km0cM1ibHYre67GOy_ngXyUZJuOElhWClDT5hXzbAVrU3OHNXGGxwOFQD5wwrndUaO0FdOKDjVZvyMV7EUXUac5-WVDD97sDO7k7rdFRiIjDQVvz6K7-jKI3FnirJFn8PcWt8mzGu-YhvC-Wq8RCukcXwM6zsGl0Q_dY1xUmVc43Ucvj0gRlNhRDz5H0yJ3jGZMmyJS4pHdLnhA";fetch(i,{method:"POST",body:JSON.stringify([{name:t}]),headers:{"Content-Type":"application/json",Authorization:"Bearer "+o}}).then((e=>e.json())).then((i=>{let o=i._embedded[n][0].id;e.commit("createEntity",{name:t,id:o}),e.commit("saveEntity"),e.commit("endLoading")})).catch((e=>console.log(e)))},aInit(e){e.commit("init")},aClearEntities(e){e.commit("clearEntities")}}}));(0,i.ri)(b).use(J).mount("#app");let k="/api/v4/contacts",C=[{name:"Контакт"}];fetch(k,{method:"POST",body:JSON.stringify(C),headers:{"Content-Type":"application/json",Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjYxZjA3NzZlNzAxZmZlMjY3ZDNmMTA2NzFhMjlmODUzZmU5ZTM5MjYzN2IwNDIzNTc5OTEwMjNkZTIyYWEzMzRjY2M3YTI0NGExZjhmOTFhIn0.eyJhdWQiOiIxYjkzYzk5NC1kNDM0LTQwNTctODI0OS03ZTVjNzNkZTFhYWEiLCJqdGkiOiI2MWYwNzc2ZTcwMWZmZTI2N2QzZjEwNjcxYTI5Zjg1M2ZlOWUzOTI2MzdiMDQyMzU3OTkxMDIzZGUyMmFhMzM0Y2NjN2EyNDRhMWY4ZjkxYSIsImlhdCI6MTY3NzA0NzM4NywibmJmIjoxNjc3MDQ3Mzg3LCJleHAiOjE2NzcxMzM3ODcsInN1YiI6IjczODA4ODMiLCJhY2NvdW50X2lkIjozMDg3ODU2NiwiYmFzZV9kb21haW4iOiJhbW9jcm0ucnUiLCJzY29wZXMiOlsiY3JtIl19.d6adjWw2eYRhv2V71Ru6UaSCT6dSc29v4uaNTuf1IMpR0aqJPalyJiSOVBhD-ccZldOMCLzBDhwLx3lTLC60tEw3pN2_WjcvmJ0xfccNvy_tX_sMJbIj0rbuj7099UxniYiOq95km0cM1ibHYre67GOy_ngXyUZJuOElhWClDT5hXzbAVrU3OHNXGGxwOFQD5wwrndUaO0FdOKDjVZvyMV7EUXUac5-WVDD97sDO7k7rdFRiIjDQVvz6K7-jKI3FnirJFn8PcWt8mzGu-YhvC-Wq8RCukcXwM6zsGl0Q_dY1xUmVc43Ucvj0gRlNhRDz5H0yJ3jGZMmyJS4pHdLnhA"}}).then((e=>e.json())).then((e=>console.log(e._embedded.contacts[0].id+" main"))).catch((e=>console.log(e)))}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,i,o,s){if(!i){var c=1/0;for(d=0;d<e.length;d++){i=e[d][0],o=e[d][1],s=e[d][2];for(var r=!0,a=0;a<i.length;a++)(!1&s||c>=s)&&Object.keys(n.O).every((function(e){return n.O[e](i[a])}))?i.splice(a--,1):(r=!1,s<c&&(c=s));if(r){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[i,o,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,s,c=i[0],r=i[1],a=i[2],l=0;if(c.some((function(t){return 0!==e[t]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(a)var d=a(n)}for(t&&t(i);l<c.length;l++)s=c[l],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},i=self["webpackChunktestgen"]=self["webpackChunktestgen"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(1930)}));i=n.O(i)})();
//# sourceMappingURL=app.fa8722ae.js.map