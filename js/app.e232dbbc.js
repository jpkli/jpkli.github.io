(function(t){function e(e){for(var n,i,c=e[0],o=e[1],l=e[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,c=1;c<a.length;c++){var o=a[c];0!==s[o]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00b4":function(t,e,a){},"034f":function(t,e,a){"use strict";var n=a("8a23"),s=a.n(n);s.a},"08f6":function(t,e,a){"use strict";var n=a("7891"),s=a.n(n);s.a},2688:function(t,e,a){"use strict";var n=a("a032"),s=a.n(n);s.a},"3c37":function(t,e,a){"use strict";var n=a("e8a8"),s=a.n(n);s.a},"440d":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],i={name:"App"},c=i,o=(a("034f"),a("2877")),l=Object(o["a"])(c,s,r,!1,null,null,null),u=l.exports,p=a("8c4f"),f=a("ce5b"),d=a.n(f),m=a("0284"),v=a.n(m),b=(a("bf40"),a("d1e78"),a("1f54"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"homepage"}},[a("v-content",[a("v-container",{staticClass:"page-container pa-1"},[t.profile?a("Profile",{attrs:{profile:t.profile}}):t._e(),a("v-flex",{staticClass:"text-left"},[a("v-row",{staticClass:"mx-2 home-headline",attrs:{justify:"center",align:"center"}},[t._v(" Featured Projects "),a("v-spacer"),a("router-link",{staticClass:"title-link",attrs:{to:"projects"}},[t._v(" Show all "+t._s(t.numProjects)+" projects ")])],1),t.projects?a("Projects",{attrs:{compact:!0,projects:t.projects.filter((function(t){return t.featured})),panelView:!0,publications:t.publications}}):t._e()],1),a("div",[a("v-row",{staticClass:"my-6"},[a("v-col",{staticClass:"text-left",attrs:{cols:"12",sm:"7",md:"8"}},[a("v-row",{staticClass:"mx-2 home-headline",attrs:{justify:"center",align:"center"}},[t._v(" Selected Publications "),a("v-spacer"),a("router-link",{staticClass:"title-link mr-2",attrs:{to:"publications"}},[t._v(" Show all "+t._s(t.numPapers)+" publications ")])],1),t.publications?a("Publications",{staticClass:"mt-4",attrs:{publications:t.publications.filter((function(t){return t.featured})),compact:!0}}):t._e()],1),a("v-col",{staticClass:"text-left",attrs:{cols:"12",sm:"5",md:"4"}},[a("v-row",{staticClass:"mx-2 home-headline",attrs:{justify:"center",align:"center"}},[t._v(" Talks "),a("v-spacer"),a("router-link",{staticClass:"title-link mr-2",attrs:{to:"talks"}},[t._v(" Show on map ")])],1),a("Talks",{attrs:{talks:t.talks}})],1)],1)],1)],1)],1),a("v-footer",{attrs:{id:"footer",height:"38",color:"#fff"}},[a("v-row",{staticClass:"pa-2 body-2 page-container",staticStyle:{margin:"0 auto","border-top":"1px solid #eee"},attrs:{justify:"center",align:"center"}},[t._v(" See All "),t._l(t.links,(function(e){return a("router-link",{key:e.name,staticClass:"ml-3  subtitle-2",staticStyle:{"text-transform":"none",color:"steelblue"},attrs:{text:"",to:e.url}},[t._v(" "+t._s(e.name)+" ")])})),a("v-spacer"),t._v(" Updated on May 2020, "),t._v(" Jianping Kelvin Li ")],2)],1)],1)}),h=[],x=(a("d3b7"),a("96cf"),a("1da1")),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{id:"profile"}},[a("v-col",{staticClass:"pa-2",attrs:{cols:"12",sm:"3"}},[a("v-img",{staticClass:"portrait my-3",staticStyle:{"max-width":"200px"},attrs:{src:t.profile.photo}})],1),a("v-col",{staticClass:"text-left px-0",attrs:{cols:"12",sm:"9"}},[a("v-card",{staticClass:"pa-3",attrs:{flat:""}},[a("v-card-title",{staticClass:"pa-2"},[t._v(" "+t._s(t.profile.greeting)+" "),a("v-spacer"),a("v-btn",{staticClass:"small contact-link",attrs:{text:"",href:"mailto:jpkelvinli@gmail.com"}},[a("v-icon",{staticClass:"mr-1",attrs:{small:"",color:"blue darken-2"}},[t._v("email")]),t._v(" jpkelvinli@gmail.com ")],1),a("v-btn",{staticClass:"small contact-link",attrs:{text:"",href:"https://github.com/jpkli"}},[a("v-icon",{staticClass:"mr-1",attrs:{small:"",color:"blue darken-2"}},[t._v("fa fa-github")]),t._v("GitHub ")],1)],1),t._l(t.profile.introductions,(function(e,n){return[a("v-card-text",{key:n,staticClass:"pa-1"},[a("p",{staticClass:"text-left subtitle-2 ma-1",domProps:{innerHTML:t._s(e)}})])]})),a("v-card-actions",{staticClass:"mx-0 px-0"})],2)],1)],1)},C=[],g={name:"Profile",props:{profile:Object}},y=g,k=(a("08f6"),a("6544")),j=a.n(k),w=a("8336"),P=a("b0af"),V=a("99d9"),O=a("62ad"),S=a("132d"),L=a("adda"),A=a("0fd9"),R=a("2fa4"),T=Object(o["a"])(y,_,C,!1,null,"1e7ca127",null),$=T.exports;j()(T,{VBtn:w["a"],VCard:P["a"],VCardActions:V["a"],VCardText:V["b"],VCardTitle:V["c"],VCol:O["a"],VIcon:S["a"],VImg:L["a"],VRow:A["a"],VSpacer:R["a"]});var H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.headline?a("h2",{staticClass:"title"},[t._v(t._s(t.headline))]):t._e(),a("v-row",{staticClass:"pa-0 ma-0"},t._l(t.projects,(function(e,n){return a("v-col",{key:n,staticClass:"pa-0",attrs:{cols:"12",sm:"6",lg:t.compact?3:4}},[a("v-card",{staticClass:"pa-3",class:{frame:t.panelView,"ma-1":t.compact,"ma-2":!t.compact},attrs:{flat:""}},[a("v-card-title",{staticClass:"pa-0 text-truncate font-weight-bold",class:{"subtitle-1":t.compact},domProps:{textContent:t._s(e.name)}}),a("v-row",[a("v-col",{attrs:{cols:t.panelView?12:5}},[a("v-img",{staticClass:"thumb",attrs:{height:"120","aspect-ratio":"1",src:e.img}})],1),a("v-col",{staticClass:"py-0",attrs:{cols:t.panelView?12:7}},[a("v-card-text",{staticClass:"pa-0 caption project-text"},[t._v(" "+t._s(e.description)+" ")]),a("v-card-text",{staticClass:"px-3 py-0"},[e.apps?a("v-row",{staticClass:"project-icons text-center my-1",attrs:{justify:"center",align:"end"}},[a("strong",[t._v("Apps: ")]),t._l(e.apps,(function(e){return a("a",{key:e.name,staticClass:"mx-2",attrs:{href:e.url,target:"_blank"},domProps:{textContent:t._s(e.name)}})}))],2):e.papers?a("v-row",{staticClass:"project-icons text-center my-1",attrs:{justify:"center",align:"end"}},[a("strong",{staticClass:"mr-1"},[t._v("Publications: ")]),t._l(e.papers,(function(e){return a("a",{key:e.id,staticClass:"ml-1",attrs:{to:"publications"},domProps:{textContent:t._s(e.name)},on:{click:function(a){return t.getPublication(e.id)}}})}))],2):a("v-row",{staticClass:"project-icons",attrs:{align:"end"}},t._l(t.getResources(e),(function(n){return a("v-btn",{key:n,staticClass:"pa-0 my-0 mr-2",attrs:{href:e[n],text:"","x-small":""}},[a("v-icon",{attrs:{color:"blue darken-2",title:n},domProps:{textContent:t._s(t.icons[n])}}),t._v(" "+t._s(n)+" ")],1)})),1)],1)],1)],1)],1)],1)})),1),a("v-dialog",{staticStyle:{"max-width":"800px"},attrs:{width:"68%"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.selectedPaper?a("v-card",{staticClass:"px-6 py-10 text-left"},[a("PublicationList",{attrs:{publications:[t.selectedPaper],compact:!0}}),t.selectedPaper.abstract?a("v-card-text",{staticClass:"pa-3"},[a("h3",[t._v("Abstract: ")]),t._v(" "+t._s(t.selectedPaper.abstract)+" ")]):t._e()],1):t._e()],1)],1)},E=[],I=(a("4de4"),a("7db0"),a("c975"),a("b64b"),{PDF:"fa fa-file-pdf-o",website:"fa fa-globe",video:"fa fa-film",code:"fa fa-github",demo:"fa fa-laptop",slides:"fa fa-indent",preview:"fa fa-eye",talk:"fa fa-video-camera",project:"fa fa-layer-group",paper:"fa fa-link"}),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.headline?a("h2",{staticClass:"title text-left"},[t._v(t._s(t.headline))]):t._e(),t._l(t.publications,(function(e,n){return a("v-row",{key:n,staticClass:"pl-3",attrs:{justify:"start",align:"center"}},[!t.compact&&t.$vuetify.breakpoint.smAndUp?a("v-col",{staticClass:"py-0 px-2",attrs:{cols:"6",sm:"4",md:"3"}},[a("v-img",{staticClass:"thumb my-2",staticStyle:{border:"1px solid #ccc"},attrs:{height:"110","aspect-ratio":"1",src:e.img}})],1):t._e(),a("v-col",{staticClass:"pa-0",attrs:{col:12,sm:t.compact?12:8,md:t.compact?12:9}},[a("v-card",{staticClass:"ma-1 px-2 py-0 text-left",attrs:{flat:""}},[a("v-card-text",{staticClass:"pa-0 ma-0 text-left publication-title",class:{"text-truncate":t.compact},domProps:{textContent:t._s(e.title)}}),a("v-card-text",{staticClass:"publication-authors pa-0 font-regular text-truncate",domProps:{innerHTML:t._s(t.listAuthors(e))}}),a("v-card-text",{staticClass:"pa-0 font-italic"},[t._v(t._s(e.venue.name)+", "+t._s(e.year))]),a("v-card-actions",{staticClass:"px-1 py-1 card-icons",attrs:{color:"blue darken-2"}},[t._l(t.getResources(e),(function(n){return a("v-btn",{key:n,staticClass:"pa-0 my-0 mr-2",attrs:{href:e[n],text:"","x-small":""}},[a("v-icon",{attrs:{color:"blue darken-2",title:n}},[t._v(t._s(t.icons[n]))]),t._v(t._s(n)+" ")],1)})),!e.PDF&&e.link?a("a",{staticClass:"caption",attrs:{href:e.link},domProps:{textContent:t._s("doi: "+e.doi)}}):t._e()],2)],1)],1)],1)}))],2)},B=[],F=(a("a15b"),a("d81d"),a("fb6a"),{name:"PublicationList",props:{headline:String,publications:Array,compact:Boolean},data:function(){return{icons:I}},methods:{getResources:function(t){var e=this;return Object.keys(t).filter((function(t){return-1!==Object.keys(e.icons).indexOf(t)}))},listAuthors:function(t){var e=this,a=t.authors.map((function(t){return"Jianping"!=t.slice(0,8)||e.compact?"<span>"+t+"</span>":'<span class="author-is-me">'+t+"</span>"})).join(", ");return t.note&&(a+='<span class="ml-2 caption">'+t.note+"</span>"),a}}}),J=F,D=(a("2688"),Object(o["a"])(J,M,B,!1,null,"1ec328f6",null)),U=D.exports;j()(D,{VBtn:w["a"],VCard:P["a"],VCardActions:V["a"],VCardText:V["b"],VCol:O["a"],VIcon:S["a"],VImg:L["a"],VRow:A["a"]});var K={name:"ProjectList",components:{PublicationList:U},props:{headline:String,projects:Array,panelView:Boolean,compact:Boolean,publications:Array},data:function(){return{icons:I,dialog:!1,selectedPaper:null}},methods:{getResources:function(t){var e=this;return Object.keys(t).filter((function(t){return-1!==Object.keys(e.icons).indexOf(t)}))},getPublication:function(t){if(!this.publications)return null;var e=this.publications.find((function(e){return e.id===t}));this.selectedPaper=e,this.dialog=!0}}},z=K,G=(a("d1e0"),a("169a")),N=Object(o["a"])(z,H,E,!1,null,"2067cb62",null),W=N.exports;j()(N,{VBtn:w["a"],VCard:P["a"],VCardText:V["b"],VCardTitle:V["c"],VCol:O["a"],VDialog:G["a"],VIcon:S["a"],VImg:L["a"],VRow:A["a"]});var q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list",{staticClass:"pa-0"},[t.headline?a("h2",{staticClass:"title text-left"},[t._v(t._s(t.headline))]):t._e(),t._l(t.talks,(function(e,n){return[a("v-list-item",{key:n,staticClass:"text-left"},[a("v-list-item-action",{staticClass:"pa-0 my-0 mr-2"},[a("v-list-item-action-text",{staticStyle:{color:"#666",width:"60px"}},[t._v(t._s(e.date))])],1),a("v-list-item-content",{staticClass:"pa-0 text-left caption"},[t._v(" "+t._s(e.for)+", "+t._s(e.location)+" ")])],1)]}))],2)},Q=[],X={name:"PresentationList",props:{headline:String,talks:Array}},Y=X,Z=(a("8fe3"),a("8860")),tt=a("da13"),et=a("1800"),at=a("5d23"),nt=Object(o["a"])(Y,q,Q,!1,null,null,null),st=nt.exports;j()(nt,{VList:Z["a"],VListItem:tt["a"],VListItemAction:et["a"],VListItemActionText:at["a"],VListItemContent:at["b"]});var rt=a("651e"),it=a.n(rt),ct={name:"Home",components:{Profile:$,Projects:W,Publications:U,Talks:st},data:function(){return{profile:null,publications:null,projects:null,talks:null,links:[{name:"Porjects",url:"projects"},{name:"Publications",url:"publications"},{name:"Presentations",url:"talks"}]}},computed:{numProjects:function(){return this.projects?this.projects.length:0},numPapers:function(){return this.publications?this.publications.length:0}},created:function(){var t=this;return Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=it.a,e.next=3,fetch("yaml/profile.yaml");case 3:return e.next=5,e.sent.text();case 5:return e.t1=e.sent,t.profile=e.t0.load.call(e.t0,e.t1),e.t2=it.a,e.next=10,fetch("yaml/projects.yaml");case 10:return e.next=12,e.sent.text();case 12:return e.t3=e.sent,t.projects=e.t2.load.call(e.t2,e.t3),e.t4=it.a,e.next=17,fetch("yaml/publications.yaml");case 17:return e.next=19,e.sent.text();case 19:return e.t5=e.sent,t.publications=e.t4.load.call(e.t4,e.t5),e.t6=it.a,e.next=24,fetch("yaml/talks.yaml");case 24:return e.next=26,e.sent.text();case 26:e.t7=e.sent,t.talks=e.t6.load.call(e.t6,e.t7),t.$ga.page("/");case 29:case"end":return e.stop()}}),e)})))()}},ot=ct,lt=(a("674c"),a("7496")),ut=a("a523"),pt=a("a75b"),ft=a("0e8f"),dt=a("553a"),mt=Object(o["a"])(ot,b,h,!1,null,"61ee566b",null),vt=mt.exports;j()(mt,{VApp:lt["a"],VCol:O["a"],VContainer:ut["a"],VContent:pt["a"],VFlex:ft["a"],VFooter:dt["a"],VRow:A["a"],VSpacer:R["a"]});var bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("v-container",{staticClass:"page-container"},[a("Header"),a("v-row",{staticClass:"mt-2"},[a("v-col",{staticClass:"px-0 mx-0 my-2",attrs:{sm:"12",md:"10",grow:""}},[a("h2",{staticClass:"text-left title my-2"},[t._v(" Selected Publications ")]),t.publications?a("PublicationList",{attrs:{publications:t.selectedPapers}}):t._e(),a("h2",{staticClass:"text-left title mt-8 mb-2"},[t._v("Other Publications")]),t.publications?a("PublicationList",{attrs:{publications:t.otherPapers}}):t._e()],1),a("v-col",{staticClass:"text-left pl-2 pr-0 my-3",class:{hidden:t.$vuetify.breakpoint.smAndDown},attrs:{sm:"0",md:"2"}},[t.publications&&t.publications.length?a("Selection",{attrs:{groups:t.filters,total:t.publications.length}}):t._e()],1)],1)],1)],1)],1)},ht=[],xt=(a("99af"),a("13d5"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{attrs:{flat:"",dense:"",color:"white"}},[a("img",{staticStyle:{"border-radius":"50%"},attrs:{width:"30",src:"image/me.jpg"}}),a("v-toolbar-title",{staticClass:"ma-2 mr-5"},[t._v(" JPKLi ")]),t._l(t.links,(function(e){return a("router-link",{key:e.label,staticClass:"px-3 mx-3 py-2 my-0 header-link",class:{active:e.active},staticStyle:{"text-transform":"none",color:"#888"},attrs:{text:"",to:{path:e.url},"active-class":""}},[t._v(" "+t._s(e.label)+" ")])}))],2)}),_t=[],Ct={name:"Header",data:function(){return{links:[{label:"Profile",url:"/",active:!1},{label:"Projects",url:"/projects",active:!1},{label:"Publications",url:"/publications",active:!1},{label:"Presentations",url:"/talks",active:!1}]}},mounted:function(){var t=window.location.hash.substr(1);this.links.filter((function(e){return e.url==t}))[0].active=!0}},gt=Ct,yt=(a("ee02"),a("71d9")),kt=a("2a7f"),jt=Object(o["a"])(gt,xt,_t,!1,null,"0654f879",null),wt=jt.exports;j()(jt,{VToolbar:yt["a"],VToolbarTitle:kt["a"]});var Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.filters,(function(e){return a("v-list",{key:e.name,staticClass:"px-1 py-3 text-left"},[a("strong",{staticClass:"px-2"},[t._v(t._s(e.name))]),t._l(e.selections,(function(e,n){return[a("v-list-item",{key:n},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"caption"},[t._v(" "+t._s(e.name)+" ("+t._s(e.count)+") ")]),a("v-list-item-subtitle",[a("v-progress-linear",{staticClass:"pa-0 ma-0",attrs:{color:"blue darken-2",height:"3",value:t.calcPercentage(e.count)}})],1)],1)],1)]}))],2)})),1)},Vt=[],Ot=(a("4160"),a("a9e3"),a("159b"),a("b85c")),St={name:"Selection",props:{groups:Array,total:Number},data:function(){return{}},computed:{filters:function(){var t=this,e=[];return this.groups.forEach((function(a){var n=a.sort||"count",s="asc"===a.order?function(t,e){return t[n]-e[n]}:function(t,e){return e[n]-t[n]};a.selections=t.getHistogram(a.selections).sort(s),e=e.concat(a)})),e}},methods:{calcPercentage:function(t){return t/this.total*100},getHistogram:function(t){var e,a={},n=Object(Ot["a"])(t);try{for(n.s();!(e=n.n()).done;){var s=e.value;a[s]?a[s]+=1:a[s]=1}}catch(r){n.e(r)}finally{n.f()}return Object.keys(a).map((function(t){return{name:t,count:a[t]}}))}}},Lt=St,At=a("8e36"),Rt=Object(o["a"])(Lt,Pt,Vt,!1,null,null,null),Tt=Rt.exports;j()(Rt,{VList:Z["a"],VListItem:tt["a"],VListItemContent:at["b"],VListItemSubtitle:at["c"],VListItemTitle:at["d"],VProgressLinear:At["a"]});var $t={name:"PublicationsPage",components:{PublicationList:U,Header:wt,Selection:Tt},data:function(){return{publications:null,filters:[]}},computed:{selectedPapers:function(){return this.publications.filter((function(t){return t.selected})).sort((function(t,e){return t.selected-e.selected}))},otherPapers:function(){return this.publications.filter((function(t){return!t.selected}))}},created:function(){var t=this;return Object(x["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=it.a,e.next=3,fetch("yaml/publications.yaml");case 3:return e.next=5,e.sent.text();case 5:e.t1=e.sent,t.publications=e.t0.load.call(e.t0,e.t1),t.filters[0]={name:"paper type",selections:t.publications.map((function(t){return t.type}))},t.filters[1]={name:"year",selections:t.publications.map((function(t){return t.year})),sort:"name",order:"desc"},a=t.publications.map((function(t){return t.keywords})).reduce((function(t,e){return t.concat(e)})),t.filters[2]={name:"keywords",selections:a},t.$ga.page("/publications");case 12:case"end":return e.stop()}}),e)})))()},mounted:function(){console.log(this.$vuetify.breakpoint.xlOnly)}},Ht=$t,Et=(a("e119"),Object(o["a"])(Ht,bt,ht,!1,null,"1c1bd619",null)),It=Et.exports;j()(Et,{VApp:lt["a"],VCol:O["a"],VContainer:ut["a"],VContent:pt["a"],VRow:A["a"]});var Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("v-container",{staticClass:"page-container"},[a("Header"),a("v-row",{staticClass:"px-5 py-8"},[a("ProjectList",{attrs:{projects:t.projects,panelView:!0,publications:t.publications}})],1)],1)],1)],1)},Bt=[],Ft={name:"ProjectPage",components:{ProjectList:W,Header:wt},data:function(){return{projects:null,publications:null,filters:[]}},created:function(){var t=this;return Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=it.a,e.next=3,fetch("yaml/projects.yaml");case 3:return e.next=5,e.sent.text();case 5:return e.t1=e.sent,t.projects=e.t0.load.call(e.t0,e.t1),e.t2=it.a,e.next=10,fetch("yaml/publications.yaml");case 10:return e.next=12,e.sent.text();case 12:e.t3=e.sent,t.publications=e.t2.load.call(e.t2,e.t3),t.$ga.page("/projects");case 15:case"end":return e.stop()}}),e)})))()},mounted:function(){}},Jt=Ft,Dt=Object(o["a"])(Jt,Mt,Bt,!1,null,null,null),Ut=Dt.exports;j()(Dt,{VApp:lt["a"],VContainer:ut["a"],VContent:pt["a"],VRow:A["a"]});var Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("v-container",{staticClass:"page-container"},[a("Header"),a("v-row",{staticClass:"my-8",attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"px-0",attrs:{cols:"8"}},[a("div",{attrs:{id:"wmap"}})]),a("v-col",{attrs:{cols:"4"}},[a("PresentationList",{ref:"Talks",attrs:{talks:t.talks,headline:""}})],1)],1)],1)],1)],1)},zt=[],Gt=a("f022"),Nt={name:"TalkPage",components:{PresentationList:st,Header:wt},data:function(){return{filters:[],talks:null}},methods:{getHistogram:function(t){var e,a={},n=Object(Ot["a"])(t);try{for(n.s();!(e=n.n()).done;){var s=e.value;a[s]?a[s]+=1:a[s]=1}}catch(r){n.e(r)}finally{n.f()}return Object.keys(a).map((function(t){return{name:t,count:a[t]}}))}},created:function(){var t=this;return Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$ga.page("/");case 1:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;return Object(x["a"])(regeneratorRuntime.mark((function e(){var a,n,s,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=it.a,e.next=3,fetch("yaml/talks.yaml");case 3:return e.next=5,e.sent.text();case 5:e.t1=e.sent,a=e.t0.load.call(e.t0,e.t1),n=t.getHistogram(a.map((function(t){return t.country}))),s={json:n,zero:!0,join:{field:"name",type:"code"},vmap:{color:"count"}},r={container:"#wmap",width:600,height:400,scale:90,exponent:.5,defaultColor:"#ddd",projection:"Mercator",padding:{left:50,right:50,top:50,bottom:50}},i=new Gt["a"].GeoMap(s,r).render(),a.forEach((function(t){i.addMarker({coordinate:t.coordinate,title:[t.date,t.for,t.location].join(", ")})})),t.talks=a;case 13:case"end":return e.stop()}}),e)})))()}},Wt=Nt,qt=(a("3c37"),Object(o["a"])(Wt,Kt,zt,!1,null,null,null)),Qt=qt.exports;j()(qt,{VApp:lt["a"],VCol:O["a"],VContainer:ut["a"],VContent:pt["a"],VRow:A["a"]});var Xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"homepage"}},[a("v-content",[a("v-container",{staticClass:"page-container pa-10"},[a("v-card",{staticClass:"px-5 mx-8",attrs:{flat:""}},[a("v-card-title",{staticClass:"px-0"},[t._v(" "+t._s(t.profile.name)+" ")]),t._l(t.profile.introductions,(function(e,n){return[a("v-card-text",{key:n,staticClass:"pa-1"},[a("p",{staticClass:"text-left subtitle-2 ma-1",domProps:{innerHTML:t._s(e)}})])]})),a("v-card-actions",{staticClass:"mx-0 px-0"},[a("v-btn",{staticClass:"small contact-link",attrs:{text:"",href:"mailto:jpkelvinli@gmail.com"}},[a("v-icon",{staticClass:"mr-1",attrs:{small:"",color:"blue darken-2"}},[t._v("email")]),t._v(" jpkelvinli@gmail.com ")],1)],1)],2),a("v-card",{staticClass:"mx-8 text-left",attrs:{flat:""}},[a("v-card-title",{staticClass:"pb-0"},[t._v("Education")]),a("v-card-text",{staticClass:"my-2 mx-3 subtitle-2",domProps:{innerHTML:t._s(t.profile.education.join("<br />"))}})],1),a("v-card",{staticClass:"mx-8 text-left",attrs:{flat:""}},[a("v-card-title",{staticClass:"pb-0"},[t._v("Work Experience")]),t._l(t.profile.works,(function(e,n){return a("v-card-text",{key:n,staticClass:"py-1 px-8"},[a("strong",{domProps:{textContent:t._s(e.position)}}),a("strong",{domProps:{textContent:t._s(e.organization)}}),t._v(" "+t._s(e.date)+" "),a("ul",t._l(e.description,(function(e,n){return a("li",{key:n,domProps:{textContent:t._s(e)}})})),0)])}))],2),a("v-card",{staticClass:"mx-8",attrs:{flat:""}},[a("v-card-title",{staticClass:"pb-0"},[t._v("Publications")]),a("v-card-text",[t.publications?a("Publications",{staticClass:"mt-4",attrs:{publications:t.publications,compact:!0}}):t._e()],1)],1),a("v-card",{staticClass:"mx-8 text-left",attrs:{flat:""}},[a("v-card-title",{staticClass:"pb-0"},[t._v("Services")]),a("v-card-text",{staticClass:"py-1 px-8"},[a("ul",t._l(t.profile.services,(function(e,n){return a("li",{key:n,domProps:{textContent:t._s(e)}})})),0)])],1)],1)],1),a("v-footer",{attrs:{id:"footer",height:"38",color:"#fff"}},[a("v-row",{staticClass:"pa-2 body-2 page-container",staticStyle:{margin:"0 auto","border-top":"1px solid #eee"},attrs:{justify:"center",align:"center"}},[t._v(" See All "),t._l(t.links,(function(e){return a("router-link",{key:e.name,staticClass:"ml-3  subtitle-2",staticStyle:{"text-transform":"none",color:"steelblue"},attrs:{text:"",to:e.url}},[t._v(" "+t._s(e.name)+" ")])})),a("v-spacer"),t._v(" Updated on May 2020, "),t._v(" Jianping Kelvin Li ")],2)],1)],1)},Yt=[],Zt={name:"Home",components:{Publications:U},data:function(){return{profile:null,publications:null,projects:null,talks:null,links:[{name:"Porjects",url:"projects"},{name:"Publications",url:"publications"},{name:"Presentations",url:"talks"}]}},computed:{numProjects:function(){return this.projects?this.projects.length:0},numPapers:function(){return this.publications?this.publications.length:0}},created:function(){var t=this;return Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=it.a,e.next=3,fetch("yaml/profile.yaml");case 3:return e.next=5,e.sent.text();case 5:return e.t1=e.sent,t.profile=e.t0.load.call(e.t0,e.t1),e.t2=it.a,e.next=10,fetch("yaml/publications.yaml");case 10:return e.next=12,e.sent.text();case 12:e.t3=e.sent,t.publications=e.t2.load.call(e.t2,e.t3),t.$ga.page("/cv");case 15:case"end":return e.stop()}}),e)})))()}},te=Zt,ee=(a("a6407"),Object(o["a"])(te,Xt,Yt,!1,null,"494e8fa5",null)),ae=ee.exports;j()(ee,{VApp:lt["a"],VBtn:w["a"],VCard:P["a"],VCardActions:V["a"],VCardText:V["b"],VCardTitle:V["c"],VContainer:ut["a"],VContent:pt["a"],VFooter:dt["a"],VIcon:S["a"],VRow:A["a"],VSpacer:R["a"]});var ne=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("v-container",{staticClass:"page-container"},[a("h2",{staticClass:"mt-6",domProps:{textContent:t._s(t.title)}}),a("h3",{domProps:{textContent:t._s(t.description)}}),a("v-row",{staticClass:"my-6"},t._l(t.projects,(function(e,n){return a("v-col",{key:n,staticClass:"pa-2",attrs:{cols:"4"}},[a("v-card",{staticClass:"ma-1 pa-3 frame",attrs:{flat:""}},[a("v-card-text",{staticClass:"pa-0 subtitle-2 font-weight-bold",domProps:{textContent:t._s(e.name)}}),a("v-row",[a("v-col",{attrs:{cols:12}},[a("v-img",{staticClass:"thumb",staticStyle:{height:"148px"},attrs:{src:e.img}})],1),a("v-col",{staticClass:"py-0",attrs:{cols:12}},[a("v-card-text",{staticClass:"pa-0 caption project-text"},[t._v(" "+t._s(e.description)+" ")]),a("v-card-actions",{staticClass:"px-1 project-icons",attrs:{color:"blue darken-2"}},[e.paper?a("a",{attrs:{href:e.paper}},[a("v-icon",{attrs:{color:"blue darken-2",title:"paper"}},[t._v("fa fa-file-pdf-o")]),t._v("paper")],1):t._e(),e.website?a("a",{attrs:{href:e.website}},[a("v-icon",{attrs:{color:"blue darken-2",title:"homepage"}},[t._v("fa fa-link")]),t._v("website")],1):t._e(),e.video?a("a",{attrs:{href:e.video}},[a("v-icon",{attrs:{color:"blue darken-2",title:"video"}},[t._v("fa fa-film")]),t._v("video")],1):t._e(),e.code?a("a",{attrs:{href:e.code}},[a("v-icon",{staticClass:"small",attrs:{color:"blue darken-2",title:"code"}},[t._v("fa fa-github")]),t._v("code")],1):t._e(),e.demo?a("a",{attrs:{href:e.demo}},[a("v-icon",{attrs:{color:"blue darken-2",title:"demo"}},[t._v("fa fa-laptop")]),t._v("demo")],1):t._e(),e.slides?a("a",{attrs:{href:e.slides}},[a("v-icon",{attrs:{color:"blue darken-2",title:"demo"}},[t._v("fa fa-indent")]),t._v("slides")],1):t._e()])],1)],1)],1)],1)})),1)],1)],1)],1)},se=[],re=(a("a4d3"),a("e01a"),{name:"ProjectPage",data:function(){return{projects:null,title:null,description:null}},created:function(){var t=this;return Object(x["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=it.a,e.next=3,fetch("yaml/pix.yaml");case 3:return e.next=5,e.sent.text();case 5:e.t1=e.sent,a=e.t0.load.call(e.t0,e.t1),t.title=a.title,t.description=a.description,t.projects=a.items;case 10:case"end":return e.stop()}}),e)})))()},mounted:function(){}}),ie=re,ce=(a("5d7c"),Object(o["a"])(ie,ne,se,!1,null,"12829338",null)),oe=ce.exports;j()(ce,{VApp:lt["a"],VCard:P["a"],VCardActions:V["a"],VCardText:V["b"],VCol:O["a"],VContainer:ut["a"],VContent:pt["a"],VIcon:S["a"],VImg:L["a"],VRow:A["a"]}),n["default"].use(p["a"]),n["default"].use(d.a),n["default"].use(v.a,{id:"UA-167779979-1"});var le=new p["a"]({routes:[{path:"/",component:vt},{path:"/publications",component:It},{path:"/projects",component:Ut},{path:"/talks",component:Qt},{path:"/cv",component:ae},{path:"/pix",component:oe}]}),ue=a("f309");n["default"].use(ue["a"]);var pe=new ue["a"]({});n["default"].config.productionTip=!1,new n["default"]({vuetify:pe,router:le,render:function(t){return t(u)}}).$mount("#app")},"5d7c":function(t,e,a){"use strict";var n=a("00b4"),s=a.n(n);s.a},"674c":function(t,e,a){"use strict";var n=a("aa43"),s=a.n(n);s.a},7891:function(t,e,a){},"8a23":function(t,e,a){},"8fe3":function(t,e,a){"use strict";var n=a("440d"),s=a.n(n);s.a},"9d23":function(t,e,a){},a032:function(t,e,a){},a6407:function(t,e,a){"use strict";var n=a("a652"),s=a.n(n);s.a},a652:function(t,e,a){},aa43:function(t,e,a){},b2fb:function(t,e,a){},b34c:function(t,e,a){},d1e0:function(t,e,a){"use strict";var n=a("9d23"),s=a.n(n);s.a},e119:function(t,e,a){"use strict";var n=a("b34c"),s=a.n(n);s.a},e8a8:function(t,e,a){},ee02:function(t,e,a){"use strict";var n=a("b2fb"),s=a.n(n);s.a}});
//# sourceMappingURL=app.e232dbbc.js.map