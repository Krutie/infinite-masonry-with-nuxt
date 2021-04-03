(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1237:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(65);var toConsumableArray=__webpack_require__(153),asyncToGenerator=__webpack_require__(73),pages_regular_nuxtvue_type_script_lang_js_=(__webpack_require__(175),{data:function data(){return{page:0,limit:4,articles:[]}},head:{title:"Regular Nuxt"},fetch:function fetch(){var _this=this;return Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,_this.fetchData();case 2:_this.articles=_context.sent;case 3:case"end":return _context.stop()}}),_callee)})))()},methods:{fetchData:function fetchData(){return this.$content("articles").limit(this.limit).skip(this.limit*this.page).sortBy("createdAt","desc").fetch()},infiniteHandler:function infiniteHandler($state){var _this2=this;setTimeout(Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee2(){var additionalItems,_this2$articles;return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _this2.page+=1,_context2.next=3,_this2.fetchData();case 3:(additionalItems=_context2.sent).length>0?((_this2$articles=_this2.articles).push.apply(_this2$articles,Object(toConsumableArray.a)(additionalItems)),$state.loaded()):$state.complete();case 5:case"end":return _context2.stop()}}),_callee2)}))),500)}}}),componentNormalizer=__webpack_require__(37),component=Object(componentNormalizer.a)(pages_regular_nuxtvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"max-w-6xl mx-auto p-4"},[_c("page-title",{attrs:{title:"Regular Nuxt"}}),_vm._v(" "),_c("div",{staticClass:"py-5"},[_vm._v("\n    This is an example of infinite-loading masonry grid built with regular\n    Nuxt with options API.\n  ")]),_vm._v(" "),_c("client-only",[_c("masonry",{attrs:{cols:{default:4,1e3:3,700:2,400:1},gutter:20}},_vm._l(_vm.articles,(function(article){return _c("div",[_c("card",{staticClass:"mb-5",attrs:{padding:3,"primary-color":"green-500","secondary-color":"gray-300","border-radius":"lg","data-aos":"fade-up"}},[_c("card-header",{staticClass:"text-gray-500"},[_c("span",[_c("v-icon",{attrs:{name:"book-open",scale:"1"}})],1),_vm._v(" "),_c("span",[_vm._v(" Nuxt Js ")])]),_vm._v(" "),_c("card-content",[article.image?_c("card-image",{attrs:{src:article.image}}):_c("span",[_vm._v(" "+_vm._s(article.description)+" ")])],1),_vm._v(" "),_c("card-footer",{attrs:{invert:"",name:article.title}})],1)],1)})),0)],1),_vm._v(" "),_c("client-only",[_c("infinite-loading",{on:{infinite:_vm.infiniteHandler}},[_c("template",{staticClass:"text-muted small-text",slot:"spinner"},[_vm._v("Loading...")]),_vm._v(" "),_c("div",{staticClass:"text-muted small-text",attrs:{slot:"no-more"},slot:"no-more"},[_vm._v("\n        --- End ---\n      ")]),_vm._v(" "),_c("div",{staticClass:"text-muted small-text",attrs:{slot:"no-results"},slot:"no-results"},[_vm._v("\n        No results message\n      ")])],2)],1)],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{PageTitle:__webpack_require__(255).default,CardHeader:__webpack_require__(134).default,CardImage:__webpack_require__(135).default,CardContent:__webpack_require__(108).default,CardFooter:__webpack_require__(95).default,Card:__webpack_require__(79).default}),__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"regular-nuxt",description:"",tags:{}}}}]);
//# sourceMappingURL=regular-nuxt.38201a1040a52b43e942.bundle.js.map