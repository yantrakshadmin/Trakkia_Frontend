(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[87],{984:function(e,t,a){"use strict";a.r(t),a.d(t,"PFEPStockKeepingForm",(function(){return T}));a(280);var n=a(281),r=(a(315),a(121)),l=(a(86),a(54)),c=a(11),i=(a(282),a(284)),o=(a(283),a(285)),m=(a(175),a(104)),s=a(46),u=a.n(s),p=a(65),y=(a(268),a(269)),d=a(103),b=a(0),h=a.n(b),f=a(292),k=a(48),E=a(22),v=a(279),g=[{key:"emitter_inv",type:v.a.INPUT,others:null,kwargs:{type:"number",placeholder:"Emitter Inventory"},customLabel:"Emitter Inventory"},{key:"transit_time",kwargs:{type:"number",placeholder:"Transit time"},type:v.a.INPUT,customLabel:"Transit time"},{key:"wh_emitter",kwargs:{type:"number",placeholder:"Warehouse Emitter"},type:v.a.INPUT,customLabel:"Warehouse Emitter"},{key:"wh_receiver",kwargs:{type:"number",placeholder:"Warehouse Receiver"},type:v.a.INPUT,customLabel:"Warehouse Receiver"},{key:"other_storage",kwargs:{type:"number",placeholder:"Other Storage"},type:v.a.INPUT,customLabel:"Other Storage"},{key:"receiver_inv",kwargs:{type:"number",placeholder:"Receiver Inventory"},type:v.a.INPUT,customLabel:"Receiver Inventory"}],w=a(306),N=a(308),j=a(297),I=[{key:"min_cycle_days",customLabel:"Minimum Days",type:v.a.INPUT,others:null,kwargs:{type:"number",placeholder:"Minimum Days"}},{key:"max_cycle_days",customLabel:"Maximum Days",type:v.a.INPUT,others:null,kwargs:{type:"number",placeholder:"Maximum Days"}},{key:"yantra_cycle",customLabel:"Yantra Cycle",type:v.a.INPUT,others:null,kwargs:{placeholder:"Yantra Cycle"}}],O=[{key:"name",type:v.a.INPUT,others:null,kwargs:{placeholder:"Name"}},{key:"phone",kwargs:{placeholder:"Phone"},type:v.a.INPUT,customLabel:"Phone"},{key:"email",kwargs:{placeholder:"Email"},type:v.a.INPUT},{key:"designation",kwargs:{placeholder:"Designation"},type:v.a.INPUT}],T=function(e){e.id;var t=e.onCancel,a=(e.onDone,e.onNext),s=e.active,v=Object(b.useState)(!1),T=Object(d.a)(v,2),P=T[0],U=T[1],C=y.a.useForm(),L=Object(d.a)(C,1)[0],_=Object(k.c)(),S=Object(k.d)((function(e){return e.data.pfepData})),D=function(){var e=Object(p.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),e.next=3,_({type:E.d,data:t});case 3:U(!1),3===s&&a();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.useEffect)((function(){3!==s&&(L.submit(),_({type:E.n}))}),[s]),h.a.createElement(n.a,{spinning:P},h.a.createElement(y.a,{onFinish:D,initialValues:S,form:L,layout:"vertical",autoComplete:"off"},h.a.createElement(m.a,{orientation:"left"},"Stock Keeping"),h.a.createElement(i.a,{style:{justifyContent:"left"}},g.slice(0,3).map((function(e,t){return h.a.createElement(o.a,{span:8},h.a.createElement("div",{key:t.toString(),className:"p-2"},Object(f.a)(e)))}))),h.a.createElement(i.a,{style:{justifyContent:"left"}},g.slice(3,6).map((function(e,t){return h.a.createElement(o.a,{span:8},h.a.createElement("div",{key:t.toString(),className:"p-2"},Object(f.a)(e)))}))),h.a.createElement(m.a,{orientation:"left"},"Cycle Time"),h.a.createElement(i.a,{style:{justifyContent:"left"}},I.slice(0,3).map((function(e,t){return h.a.createElement(o.a,{span:8},h.a.createElement("div",{key:t.toString(),className:"p-2"},Object(f.a)(e)))}))),h.a.createElement(m.a,{orientation:"left"},"Touch Points"),h.a.createElement(y.a.List,{name:"tp"},(function(e,t){var a=t.add,n=t.remove;return h.a.createElement("div",null,e.map((function(e,t){return h.a.createElement(i.a,{align:"middle"},O.slice(0,4).map((function(a){return h.a.createElement(o.a,{span:5},h.a.createElement("div",{className:"p-2"},Object(f.a)(Object(c.a)(Object(c.a)({},a),{},{noLabel:0!==t,form:L,others:{formOptions:Object(c.a)(Object(c.a)({},e),{},{name:[e.name,a.key],fieldKey:[e.fieldKey,a.key]})}}))))})),h.a.createElement(l.a,{type:"danger",style:0!==t?{top:"-2vh"}:null,onClick:function(){n(e.name)}},h.a.createElement(w.a,null)," ","Delete"))})),h.a.createElement(y.a.Item,null,h.a.createElement(l.a,{type:"dashed",onClick:function(){var e=L.getFieldValue("tp");void 0===e||e.length<5?a():r.a.info({message:"Only 5 touch points can be added!"})},block:!0},h.a.createElement(N.a,null)," ","Add Item")))})),h.a.createElement(i.a,{justify:"space-between"},h.a.createElement("div",{className:"row"},h.a.createElement(l.a,{type:"primary",htmlType:"submit",disabled:!0},"Submit"),h.a.createElement("div",{className:"p-2"}),h.a.createElement(l.a,{type:"primary",onClick:t},"Cancel")),h.a.createElement(l.a,{type:"link",htmlType:"submit"},h.a.createElement(j.a,{style:{fontSize:30}})))))};t.default=T}}]);
//# sourceMappingURL=87.78d579a3.chunk.js.map