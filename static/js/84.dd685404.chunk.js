(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[84],{1e3:function(e,a,t){"use strict";t.r(a),t.d(a,"PFEPProductDetailsForm",(function(){return N}));t(280);var r=t(281),l=(t(86),t(54)),n=(t(282),t(284)),s=(t(283),t(285)),c=t(11),o=(t(175),t(104)),i=t(46),p=t.n(i),m=t(65),u=(t(268),t(269)),y=t(103),h=t(0),d=t.n(h),b=t(292),k=t(48),g=t(22),f=t(279),P=[{key:"part_name",rules:[{required:!0,message:"Please enter Part Name!"}],type:f.a.INPUT,others:null,kwargs:{placeholder:"Part Name"},customLabel:"Part Name"},{key:"part_number",kwargs:{placeholder:"Part Number"},type:f.a.INPUT,customLabel:"Part Number"},{key:"volume_pm",rules:[{required:!0,message:"Please enter Volume Per Month!"}],kwargs:{type:"number",placeholder:"Volume Per Month"},type:f.a.INPUT,customLabel:"Volume Per Month"},{key:"dispatch_frequency",kwargs:{placeholder:"Dispatch Frequency"},type:f.a.INPUT,customLabel:"Dispatch Frequency"},{key:"weight",rules:[{required:!0,message:"Please enter Weight(Kgs) !"}],kwargs:{type:"number",placeholder:"Weight"},type:f.a.INPUT},{key:"length",kwargs:{type:"number",placeholder:"Length"},type:f.a.INPUT,customLabel:"Length"},{key:"breadth",kwargs:{type:"number",placeholder:"Breadth"},type:f.a.INPUT,customLabel:"Breadth"},{key:"height",kwargs:{type:"number",placeholder:"Height"},type:f.a.INPUT},{key:"highest_mv",kwargs:{placeholder:"Highest Monthly Volume"},type:f.a.INPUT,customLabel:"Highest Monthly Volume"},{key:"lowest_mv",kwargs:{placeholder:"Lowest Monthly Volume"},type:f.a.INPUT,customLabel:"Lowest Monthly Volume"},{key:"average_dispatchlotsize",kwargs:{placeholder:"Average Dispatch Lot Size"},type:f.a.INPUT,customLabel:"Average Dispatch Lot Size"},{key:"transportation_mode",kwargs:{placeholder:"Current Transportation Mode"},type:f.a.INPUT,customLabel:"Current Transportation Mode"},{key:"critical_area",kwargs:{placeholder:"Critical Area, If Any?"},type:f.a.INPUT,customLabel:"Critical Area, If Any?"},{key:"np_ef",kwargs:{placeholder:"New Part or Existing flow?"},others:{defaultValue:"New Part",selectOptions:["New Part","Existing Flow"]},type:f.a.SELECT,customLabel:"New Part/Existing flow"},{key:"greasy_oily",kwargs:{placeholder:"Is Part Greasy or Oily?"},type:f.a.SWITCH,customLabel:"Is Part Greasy or Oily?"},{key:"part_cad_data",kwargs:{placeholder:"Part CAD Data (2D, 3D drawing, if available)"},type:f.a.INPUT,customLabel:"Part CAD Data, Available?"},{key:"special_measure",kwargs:{placeholder:"Precautions to be consider?"},type:f.a.INPUT,customLabel:"Precautions or Special Measures?"},{key:"remarks",kwargs:{placeholder:"Remark"},type:f.a.INPUT,customLabel:"Remark"}],w=t(297),N=function(e){e.id;var a=e.onCancel,t=e.active,i=e.onNext,f=Object(h.useState)(!1),N=Object(y.a)(f,2),E=N[0],L=N[1],T=u.a.useForm(),v=Object(y.a)(T,1)[0],I=Object(k.c)(),j=Object(k.d)((function(e){return e.data.pfepData})),C=function(){var e=Object(m.a)(p.a.mark((function e(a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),e.next=3,I({type:g.d,data:a});case 3:L(!1),1===t&&i();case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(h.useEffect)((function(){1!==t&&(v.submit(),I({type:g.n}))}),[t]),d.a.createElement(r.a,{spinning:E},d.a.createElement(o.a,{orientation:"left"},"Product Details Form"),d.a.createElement(u.a,{onFinish:C,initialValues:Object(c.a)(Object(c.a)({},j),{},{np_ef:j.np_ef?j.np_ef:"New Part"}),form:v,layout:"vertical",autoComplete:"off"},d.a.createElement(n.a,{style:{justifyContent:"left"}},P.slice(0,4).map((function(e,a){return d.a.createElement(s.a,{span:6},d.a.createElement("div",{key:a.toString(),className:"p-2"},Object(b.a)(e)))}))),d.a.createElement(n.a,{style:{justifyContent:"left"}},P.slice(4,8).map((function(e,a){return d.a.createElement(s.a,{span:6},d.a.createElement("div",{key:a.toString(),className:"p-2"},Object(b.a)(e)))}))),d.a.createElement(n.a,{style:{justifyContent:"left"}},P.slice(8,12).map((function(e,a){return d.a.createElement(s.a,{span:6},d.a.createElement("div",{key:a.toString(),className:"p-2"},Object(b.a)(e)))}))),d.a.createElement(n.a,{style:{justifyContent:"left"}},P.slice(12,15).map((function(e,a){return d.a.createElement(s.a,{span:8},d.a.createElement("div",{key:a.toString(),className:"p-2"},Object(b.a)(e)))}))),d.a.createElement(n.a,{style:{justifyContent:"left"}},P.slice(15,18).map((function(e,a){return d.a.createElement(s.a,{span:8},d.a.createElement("div",{key:a.toString(),className:"p-2"},Object(b.a)(e)))}))),d.a.createElement(n.a,{justify:"space-between"},d.a.createElement("div",{className:"row"},d.a.createElement(l.a,{type:"primary",htmlType:"submit",disabled:!0},"Submit"),d.a.createElement("div",{className:"p-2"}),d.a.createElement(l.a,{type:"primary",onClick:a},"Cancel")),d.a.createElement(l.a,{type:"link",htmlType:"submit"},d.a.createElement(w.a,{style:{fontSize:30}})))))};a.default=N}}]);
//# sourceMappingURL=84.dd685404.chunk.js.map