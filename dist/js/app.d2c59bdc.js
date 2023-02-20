(function(){"use strict";var e={7118:function(e,t,n){var i=n(9242),s=n(3396),o=n(7139);const r={class:"v-app"},l={class:"v-app__dropdown"},a=["disabled"],d={key:0},c={key:1,class:"loading"},u={class:"v-app__table"},p=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Сущность"),(0,s._)("th",null,"id")])],-1),h=(0,s._)("tr",null,null,-1),m=["disabled"],v=(0,s._)("span",null,"Очистить",-1),f=[v];function _(e,t,n,i,v,_){const g=(0,s.up)("v-dropdown");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",l,[(0,s.Wm)(g,{items:v.dropdownItems,onOnSelectedItem:t[0]||(t[0]=e=>_.onSelectedItem(e))},null,8,["items"])]),(0,s._)("button",{class:"v-app__button",disabled:!v.hasSelected,onClick:t[1]||(t[1]=(...e)=>_.createEntity&&_.createEntity(...e))},[e.loading?((0,s.wg)(),(0,s.iD)("span",c)):((0,s.wg)(),(0,s.iD)("span",d,"Создать"))],8,a),(0,s._)("table",u,[p,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(v.createdEntities,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.id},[(0,s._)("td",null,(0,o.zw)(e.entity),1),(0,s._)("td",null,(0,o.zw)(e.id),1)])))),128)),h]),(0,s._)("button",{class:"v-app__button",disabled:!v.createdEntities.length,onClick:t[2]||(t[2]=(...e)=>_.clearEntities&&_.clearEntities(...e))},f,8,m)])}n(7658);const g={class:"v-dropdown__label"},w=(0,s._)("span",{class:"v-dropdown__title"},"title",-1),y=["value"],b=(0,s._)("span",{class:"v-dropdown__arrow"},"⌄",-1),O={class:"v-dropdown__menu menu-dropdown"},E=["onClick"];function I(e,t,n,r,l,a){return(0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)(["v-dropdown",l.menuIsOpen?"v-dropdown--menu-open":""])},[(0,s._)("label",g,[w,(0,s._)("div",{class:"v-dropdown__field",onClick:t[0]||(t[0]=e=>l.menuIsOpen=!l.menuIsOpen)},[(0,s._)("input",{type:"text",class:"v-dropdown__input",readonly:"",value:l.selected},null,8,y),b])]),(0,s.wy)((0,s._)("ul",O,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.items,((e,t)=>((0,s.wg)(),(0,s.iD)("li",{class:"menu-dropdown__item",key:t,onClick:t=>a.selectItem(t,e)},(0,o.zw)(e),9,E)))),128))],512),[[i.F8,l.menuIsOpen]])],2)}var S={props:{items:{type:Array,default(){return[]}}},data(){return{menuIsOpen:!1,selected:null}},methods:{selectItem(e,t){this.selected=t;const n=e.target.closest(".v-dropdown").querySelector(".v-dropdown__input");this.menuIsOpen=!1,n.focus(),this.$emit("on-selected-item",{hasSelected:this.hasSelected,selected:this.selected})},hideOptions(e){this.menuIsOpen&&!e.target.closest(".v-dropdown")&&(this.menuIsOpen=!1)}},computed:{hasSelected(){return this.selected!==this.items[0]}},mounted(){this.selected=this.items[0],document.addEventListener("click",this.hideOptions.bind(this),!0)},beforeDestroy(){document.removeEventListener("click",this.hideOptions)}},k=n(89);const C=(0,k.Z)(S,[["render",I]]);var D=C,j=n(65),L={components:{vDropdown:D},data(){return{dropdownItems:["Не выбрано","Сделка","Контакт","Компания"],hasSelected:!1,entity:null,createdEntities:[],id:0}},methods:{...(0,j.nv)(["aCreateEntity"]),onSelectedItem(e){this.hasSelected=e.hasSelected,this.entity=e.selected},createEntity(){this.aCreateEntity(),setTimeout((()=>{this.createdEntities.push({entity:this.entity,id:++this.id}),this.saveEntity()}),1e3)},saveEntity(){let e=JSON.stringify(this.createdEntities);localStorage.setItem("entities",e)},clearEntities(){this.createdEntities=[],localStorage.removeItem("entities")}},computed:{...(0,j.Se)(["loading"])},mounted(){localStorage.getItem("entities")&&(this.createdEntities=JSON.parse(localStorage.getItem("entities")))}};const x=(0,k.Z)(L,[["render",_]]);var T=x,z=(0,j.MT)({state:{loading:!1},getters:{loading(e){return e.loading}},mutations:{startLoading(e){e.loading=!0},endLoading(e){e.loading=!1}},actions:{aCreateEntity(e){e.commit("startLoading"),setTimeout((()=>e.commit("endLoading")),1e3)}}});(0,i.ri)(T).use(z).mount("#app")}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,i,s,o){if(!i){var r=1/0;for(c=0;c<e.length;c++){i=e[c][0],s=e[c][1],o=e[c][2];for(var l=!0,a=0;a<i.length;a++)(!1&o||r>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[a])}))?i.splice(a--,1):(l=!1,o<r&&(r=o));if(l){e.splice(c--,1);var d=s();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[i,s,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,o,r=i[0],l=i[1],a=i[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(s in l)n.o(l,s)&&(n.m[s]=l[s]);if(a)var c=a(n)}for(t&&t(i);d<r.length;d++)o=r[d],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},i=self["webpackChunktestgen"]=self["webpackChunktestgen"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(7118)}));i=n.O(i)})();
//# sourceMappingURL=app.d2c59bdc.js.map