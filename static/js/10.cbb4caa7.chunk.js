(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[10],{286:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(11),a=n(350),c=n(46),o=n.n(c),u=n(65),i=n(435),d=n(436),s=n.n(d),l=n(320),m=n(314),f=n(321);s.a.defaults.baseURL=m.a;var b=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,r,a,c,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(f.a)(),e.next=3,t.get(l.a,null);case 3:return n=e.sent,e.next=6,t.get(l.b,null);case 6:if(r=e.sent,n&&r){e.next=9;break}throw Error("No user found");case 9:if(a=i(n),!(new Date(1e3*parseInt(a.exp,10))>new Date)){e.next=12;break}return e.abrupt("return",n);case 12:return e.next=14,s.a.post("/api/token/refresh/",{refresh:r});case 14:return c=e.sent,u=c.data.access,e.next=18,t.set(l.a,u);case 18:return e.abrupt("return",u);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,c,u,i,d,l,m,f,p,h,E,_,y,O,T,j,v=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=v.length>1&&void 0!==v[1]?v[1]:{},c=n.onSuccess,u=void 0===c?function(e){return e}:c,i=n.onFailure,d=void 0===i?function(e){return e}:i,l=n.secure,m=void 0===l||l,n.defaultData,f=n.headers,p=Object(a.a)(n,["onSuccess","onFailure","secure","defaultData","headers"]),e.prev=2,e.t0=s.a,e.t1=t,e.t2=r.a,e.t3=r.a,e.t4=r.a,e.t5={},!m){e.next=18;break}return e.t7="Bearer ",e.next=13,b();case 13:e.t8=e.sent,e.t9=e.t7.concat.call(e.t7,e.t8),e.t6={Authorization:e.t9},e.next=19;break;case 18:e.t6={};case 19:return e.t10=e.t6,e.t11=(0,e.t4)(e.t5,e.t10),e.t12=f,e.t13=(0,e.t3)(e.t11,e.t12),e.t14={headers:e.t13},e.t15=p,e.t16=(0,e.t2)(e.t14,e.t15),e.next=28,(0,e.t0)(e.t1,e.t16);case 28:return h=e.sent,E=h.data,_=h.status,e.next=32,u(E);case 32:return e.abrupt("return",{data:E,status:_,error:void 0,loading:!1});case 35:if(e.prev=35,e.t17=e.catch(2),!e.t17.response){e.next=42;break}return y=e.t17.response,O=y.data,T=y.status,e.next=41,d(O);case 41:return e.abrupt("return",{data:void 0,status:T,error:O,loading:!1});case 42:if(!e.t17.request){e.next=45;break}return j={message:"error in request setup"},e.abrupt("return",{data:void 0,status:0,error:j,loading:!1});case 45:throw Error(e.t17);case 46:case"end":return e.stop()}}),e,null,[[2,35]])})));return function(t){return e.apply(this,arguments)}}()},311:function(e,t,n){"use strict";n.d(t,"yb",(function(){return a})),n.d(t,"zb",(function(){return c})),n.d(t,"l",(function(){return o})),n.d(t,"h",(function(){return u})),n.d(t,"Sb",(function(){return i})),n.d(t,"x",(function(){return d})),n.d(t,"rc",(function(){return s})),n.d(t,"ob",(function(){return l})),n.d(t,"qc",(function(){return m})),n.d(t,"q",(function(){return f})),n.d(t,"ib",(function(){return b})),n.d(t,"hc",(function(){return p})),n.d(t,"ic",(function(){return h})),n.d(t,"gc",(function(){return E})),n.d(t,"u",(function(){return _})),n.d(t,"lb",(function(){return y})),n.d(t,"T",(function(){return O})),n.d(t,"nc",(function(){return T})),n.d(t,"pc",(function(){return j})),n.d(t,"J",(function(){return v})),n.d(t,"vb",(function(){return g})),n.d(t,"Mc",(function(){return w})),n.d(t,"Nc",(function(){return k})),n.d(t,"K",(function(){return S})),n.d(t,"wb",(function(){return P})),n.d(t,"Oc",(function(){return G})),n.d(t,"Pc",(function(){return C})),n.d(t,"ab",(function(){return A})),n.d(t,"Rb",(function(){return x})),n.d(t,"db",(function(){return W})),n.d(t,"Zb",(function(){return D})),n.d(t,"B",(function(){return H})),n.d(t,"qb",(function(){return N})),n.d(t,"vc",(function(){return M})),n.d(t,"Eb",(function(){return L})),n.d(t,"Fb",(function(){return q})),n.d(t,"n",(function(){return Y})),n.d(t,"fb",(function(){return I})),n.d(t,"Gb",(function(){return R})),n.d(t,"Hb",(function(){return F})),n.d(t,"Ib",(function(){return K})),n.d(t,"t",(function(){return z})),n.d(t,"kb",(function(){return B})),n.d(t,"X",(function(){return J})),n.d(t,"lc",(function(){return Q})),n.d(t,"Jb",(function(){return U})),n.d(t,"mc",(function(){return V})),n.d(t,"S",(function(){return X})),n.d(t,"L",(function(){return Z})),n.d(t,"k",(function(){return $})),n.d(t,"cb",(function(){return ee})),n.d(t,"Ub",(function(){return te})),n.d(t,"Vb",(function(){return ne})),n.d(t,"Wb",(function(){return re})),n.d(t,"O",(function(){return ae})),n.d(t,"Yb",(function(){return ce})),n.d(t,"f",(function(){return oe})),n.d(t,"Y",(function(){return ue})),n.d(t,"Nb",(function(){return ie})),n.d(t,"Ob",(function(){return de})),n.d(t,"M",(function(){return se})),n.d(t,"o",(function(){return le})),n.d(t,"gb",(function(){return me})),n.d(t,"cc",(function(){return fe})),n.d(t,"C",(function(){return be})),n.d(t,"rb",(function(){return pe})),n.d(t,"wc",(function(){return he})),n.d(t,"j",(function(){return Ee})),n.d(t,"bb",(function(){return _e})),n.d(t,"Tb",(function(){return ye})),n.d(t,"v",(function(){return Oe})),n.d(t,"mb",(function(){return Te})),n.d(t,"oc",(function(){return je})),n.d(t,"Ab",(function(){return ve})),n.d(t,"Rc",(function(){return ge})),n.d(t,"Qc",(function(){return we})),n.d(t,"Kc",(function(){return ke})),n.d(t,"E",(function(){return Se})),n.d(t,"tb",(function(){return Pe})),n.d(t,"Ac",(function(){return Ge})),n.d(t,"Ec",(function(){return Ce})),n.d(t,"V",(function(){return Ae})),n.d(t,"A",(function(){return xe})),n.d(t,"pb",(function(){return We})),n.d(t,"uc",(function(){return De})),n.d(t,"a",(function(){return He})),n.d(t,"b",(function(){return Ne})),n.d(t,"c",(function(){return Me})),n.d(t,"dc",(function(){return Le})),n.d(t,"Mb",(function(){return qe})),n.d(t,"Dc",(function(){return Ye})),n.d(t,"Pb",(function(){return Ie})),n.d(t,"Xb",(function(){return Re})),n.d(t,"Bc",(function(){return Fe})),n.d(t,"Cc",(function(){return Ke})),n.d(t,"r",(function(){return ze})),n.d(t,"kc",(function(){return Be})),n.d(t,"Qb",(function(){return Je})),n.d(t,"Jc",(function(){return Qe})),n.d(t,"jb",(function(){return Ue})),n.d(t,"jc",(function(){return Ve})),n.d(t,"R",(function(){return Xe})),n.d(t,"Cb",(function(){return Ze})),n.d(t,"Bb",(function(){return $e})),n.d(t,"Db",(function(){return et})),n.d(t,"w",(function(){return tt})),n.d(t,"nb",(function(){return nt})),n.d(t,"H",(function(){return rt})),n.d(t,"Ic",(function(){return at})),n.d(t,"W",(function(){return ct})),n.d(t,"ub",(function(){return ot})),n.d(t,"g",(function(){return ut})),n.d(t,"N",(function(){return it})),n.d(t,"Z",(function(){return dt})),n.d(t,"Lc",(function(){return st})),n.d(t,"I",(function(){return lt})),n.d(t,"Gc",(function(){return mt})),n.d(t,"Fc",(function(){return ft})),n.d(t,"F",(function(){return bt})),n.d(t,"sc",(function(){return pt})),n.d(t,"y",(function(){return ht})),n.d(t,"s",(function(){return Et})),n.d(t,"m",(function(){return _t})),n.d(t,"bc",(function(){return yt})),n.d(t,"P",(function(){return Ot})),n.d(t,"ac",(function(){return Tt})),n.d(t,"eb",(function(){return jt})),n.d(t,"e",(function(){return vt})),n.d(t,"Lb",(function(){return gt})),n.d(t,"Kb",(function(){return wt})),n.d(t,"Sc",(function(){return kt})),n.d(t,"i",(function(){return St})),n.d(t,"p",(function(){return Pt})),n.d(t,"fc",(function(){return Gt})),n.d(t,"Q",(function(){return Ct})),n.d(t,"ec",(function(){return At})),n.d(t,"hb",(function(){return xt})),n.d(t,"G",(function(){return Wt})),n.d(t,"Hc",(function(){return Dt})),n.d(t,"z",(function(){return Ht})),n.d(t,"tc",(function(){return Nt})),n.d(t,"D",(function(){return Mt})),n.d(t,"zc",(function(){return Lt})),n.d(t,"U",(function(){return qt})),n.d(t,"xc",(function(){return Yt})),n.d(t,"sb",(function(){return It})),n.d(t,"yc",(function(){return Rt})),n.d(t,"xb",(function(){return Ft})),n.d(t,"d",(function(){return Kt}));var r=n(286),a=function(e){var t=e.username,n=e.password;return Object(r.a)("/api/token/",{method:"POST",data:{username:t,password:n},secure:!1})},c=function(){return Object(r.a)("/user/meta/")},o=function(e){var t=e.username,n=e.email,a=e.password,c=e.first_name,o=e.last_name;return Object(r.a)("/create-employee/",{method:"POST",data:{username:t,email:n,password:a,first_name:c,last_name:o},secure:!1})},u=function(e){var t=e.username,n=e.email,a=e.password,c=e.first_name,o=e.last_name;return Object(r.a)("/create-client/",{method:"POST",data:{username:t,email:n,password:a,first_name:c,last_name:o},secure:!1})},i=function(){return Object(r.a)("/clients/",{method:"GET",secure:!0})},d=function(e){return Object(r.a)("/create-product/",{method:"POST",data:e,secure:!0,headers:{"Content-Type":"multipart/form-data  boundary=".concat(Math.random().toString().substr(2))}})},s=function(){return Object(r.a)("/products/",{method:"GET",secure:!0})},l=function(e,t){return Object(r.a)("/edit-product/".concat(e,"/"),{method:"PATCH",secure:!0,data:t,headers:{"Content-Type":"multipart/form-data  boundary=".concat(Math.random().toString().substr(2))}})},m=function(e){return Object(r.a)("/edit-product/".concat(e),{method:"GET",secure:!0})},f=function(e){var t=e.kit_name,n=e.kit_info,a=e.components_per_kit,c=e.kit_client,o=e.part_name,u=e.part_number,i=e.kit_type,d=e.products,s=e.active;return Object(r.a)("/create-kit/",{method:"POST",secure:!0,data:{kit_name:t,kit_info:n,components_per_kit:a,kit_client:c,part_name:o,part_number:u,kit_type:i,products:d,active:s}})},b=function(e,t){var n=t.kit_name,a=t.kit_info,c=t.components_per_kit,o=t.kit_client,u=t.part_name,i=t.part_number,d=t.kit_type,s=t.products,l=t.active;return Object(r.a)("/edit-kit/".concat(e,"/"),{method:"PATCH",secure:!0,data:{kit_name:n,kit_info:a,components_per_kit:c,kit_client:o,part_name:u,part_number:i,kit_type:d,products:s,active:l}})},p=function(){return Object(r.a)("/kits/",{method:"GET",secure:!0})},h=function(){return Object(r.a)("/client-kits/",{method:"GET",secure:!0})},E=function(e){return Object(r.a)("/edit-kit/".concat(e,"/"),{method:"GET",secure:!0})},_=function(e){return Object(r.a)("create-outward/",{method:"POST",secure:!0,data:e})},y=function(e,t){return Object(r.a)("edit-outward/".concat(e,"/"),{method:"PATCH",secure:!0,data:t})},O=function(e){return Object(r.a)("edit-outward/".concat(e,"/"),{method:"Delete",secure:!0})},T=function(e){return Object(r.a)("edit-outward/".concat(e,"/"),{method:"GET",secure:!0})},j=function(e){return Object(r.a)("emp-outwards/?id=".concat(e),{method:"GET",secure:!0})},v=function(e){var t=e.name,n=e.street,a=e.city,c=e.pincode,o=e.state,u=e.contact_person_name,i=e.contact_person_no,d=e.email,s=e.type,l=e.payment_terms,m=e.pan,f=e.gst,b=e.code,p=e.remarks,h=e.beneficiary_name,E=e.account_no,_=e.bank_name,y=e.ifsc,O=e.active;return Object(r.a)("/create-vendor/",{method:"POST",data:{name:t,street:n,city:a,pincode:c,state:o,contact_person_name:u,contact_person_no:i,email:d,type:s,payment_terms:l,pan:m,gst:f,code:b,remarks:p,beneficiary_name:h,account_no:E,bank_name:_,ifsc:y,active:O},secure:!0})},g=function(e,t){var n=t.name,a=t.street,c=t.city,o=t.pincode,u=t.state,i=t.contact_person_name,d=t.contact_person_no,s=t.email,l=t.type,m=t.payment_terms,f=t.pan,b=t.gst,p=t.code,h=t.remarks,E=t.beneficiary_name,_=t.account_no,y=t.bank_name,O=t.ifsc,T=t.active;return Object(r.a)("/edit-vendor/".concat(e,"/"),{method:"PATCH",data:{name:n,street:a,city:c,pincode:o,state:u,contact_person_name:i,contact_person_no:d,email:s,type:l,payment_terms:m,pan:f,gst:b,code:p,remarks:h,beneficiary_name:E,account_no:_,bank_name:y,ifsc:O,active:T},secure:!0})},w=function(e){return Object(r.a)("/edit-vendor/".concat(e,"/"),{method:"GET",secure:!0})},k=function(){return Object(r.a)("/vendors/",{method:"GET",secure:!0})},S=function(e){return Object(r.a)("/create-warehouse/",{method:"POST",secure:!0,data:e,headers:{"Content-Type":"multipart/form-data  boundary=".concat(Math.random().toString().substr(2))}})},P=function(e,t){return Object(r.a)("/edit-warehouse/".concat(e,"/"),{method:"PATCH",secure:!0,data:t,headers:{"Content-Type":"multipart/form-data  boundary=".concat(Math.random().toString().substr(2))}})},G=function(e){return Object(r.a)("/edit-warehouse/".concat(e,"/"),{method:"GET",secure:!0})},C=function(){return Object(r.a)("/warehouse/",{method:"GET",secure:!0})},A=function(e,t){return Object(r.a)("/client-profile/".concat(e,"/"),{method:"PATCH",secure:!0,data:t,headers:{"Content-Type":"multipart/form-data  boundary=".concat(Math.random().toString().substr(2))}})},x=function(e){return Object(r.a)("/client-profile/".concat(e),{method:"GET",secure:!0})},W=function(e,t){return Object(r.a)("/emp-profile/".concat(e,"/"),{method:"PATCH",secure:!0,data:t,headers:{"Content-Type":"multipart/form-data  boundary=".concat(Math.random().toString().substr(2))}})},D=function(e){return Object(r.a)("/emp-profile/".concat(e),{method:"GET",secure:!0})},H=function(e){var t=e.name,n=e.city,a=e.address,c=e.emitter,o=e.pan,u=e.gst,i=e.active;return Object(r.a)("/create-receiverclient/",{method:"POST",data:{name:t,city:n,address:a,emitter:c,pan:o,gst:u,active:i},secure:!0})},N=function(e,t){var n=t.name,a=t.city,c=t.address,o=t.emitter,u=t.pan,i=t.gst,d=t.active;return Object(r.a)("/edit-receiverclient/".concat(e,"/"),{method:"PATCH",data:{name:n,city:a,address:c,emitter:o,pan:u,gst:i,active:d},secure:!0})},M=function(e){return Object(r.a)("/edit-receiverclient/".concat(e,"/"),{method:"GET",secure:!0})},L=function(e){return Object(r.a)("/receiverclients/",{method:"GET",secure:!0})},q=function(){return Object(r.a)("/client-reciever-client/",{method:"GET",secure:!0})},Y=function(e){var t=e.flow_name,n=e.flow_info,a=e.flow_type,c=e.flow_days,o=e.sender_client,u=e.receiver_client,i=e.kits,d=e.active;return Object(r.a)("/create-flow/",{method:"POST",secure:!0,data:{flow_name:t,flow_info:n,flow_type:a,flow_days:c,sender_client:o,receiver_client:u,kits:i,active:d}})},I=function(e,t){var n=t.flow_name,a=t.flow_info,c=t.flow_type,o=t.flow_days,u=t.sender_client,i=t.receiver_client,d=t.kits,s=t.active;return Object(r.a)("/edit-flow/".concat(e,"/"),{method:"PATCH",secure:!0,data:{flow_name:n,flow_info:a,flow_type:c,flow_days:o,sender_client:u,receiver_client:i,kits:d,active:s}})},R=function(e){return Object(r.a)("/edit-flow/".concat(e,"/"),{method:"GET",secure:!0})},F=function(){return Object(r.a)("/flows/",{method:"GET",secure:!0})},K=function(){return Object(r.a)("/client-flows/",{method:"GET",secure:!0})},z=function(e){var t=e.delivery_required_on,n=e.flows,a=e.client_id;return Object(r.a)("/create-mrequets/",{method:"POST",data:{delivery_required_on:t,flows:n,client_id:a},secure:!0})},B=function(e,t){var n=t.delivery_required_on,a=t.flows;return Object(r.a)("/edit-mrequets/".concat(e,"/"),{method:"PATCH",data:{delivery_required_on:n,flows:a},secure:!0})},J=function(e,t){var n=t.delivery_required_on,a=t.flows,c=t.client_id;return Object(r.a)("/admin-mredit/".concat(e,"/"),{method:"PATCH",data:{delivery_required_on:n,flows:a,client_id:c},secure:!0})},Q=function(e){return Object(r.a)("/edit-mrequets/".concat(e,"/"),{method:"GET",secure:!0})},U=function(e){return Object(r.a)("/admin-mredit/".concat(e,"/"),{method:"GET",secure:!0})},V=function(){return Object(r.a)("/mrequets/",{method:"GET",secure:!0})},X=function(e){return Object(r.a)("/edit-mrequets/".concat(e,"/"),{method:"DELETE",secure:!0})},Z=function(e){return Object(r.a)("/admin-mredit/".concat(e,"/"),{method:"DELETE",secure:!0})},$=function(e){var t=e.delivery_month,n=e.demand_flows,a=e.client_id;return Object(r.a)("/create-demand/",{method:"POST",data:{delivery_month:t,demand_flows:n,client_id:a},secure:!0})},ee=function(e,t){var n=t.delivery_month,a=t.demand_flows;return Object(r.a)("/edit-demand/".concat(e,"/"),{method:"PATCH",data:{delivery_month:n,demand_flows:a},secure:!0})},te=function(e){return Object(r.a)("/edit-demand/".concat(e,"/"),{method:"GET",secure:!0})},ne=function(){return Object(r.a)("/demands/",{method:"GET",secure:!0})},re=function(){return Object(r.a)("/client-demands/",{method:"GET",secure:!0})},ae=function(e){return Object(r.a)("/edit-demand/".concat(e,"/"),{method:"DELETE",secure:!0})},ce=function(){return Object(r.a)("/allmrequest-table/",{method:"GET",secure:!0})},oe=function(e){var t=e.transaction_no,n=e.dispatch_date,a=e.send_from_warehouse,c=e.sales_order,o=e.flows,u=e.is_delivered,i=e.model,d=e.driver_name,s=e.driver_number,l=e.lr_number,m=e.vehicle_number,f=e.freight_charges,b=e.vehicle_type,p=e.transport_by,h=e.expected_delivery,E=e.remarks;return Object(r.a)("/create-allotment/",{method:"POST",data:{transaction_no:t,dispatch_date:n,send_from_warehouse:a,sales_order:c,flows:o,is_delivered:u,model:i,driver_name:d,driver_number:s,lr_number:l,vehicle_number:m,freight_charges:f,vehicle_type:b,transport_by:p,expected_delivery:h,remarks:E},secure:"true"})},ue=function(e,t){var n=t.dispatch_date,a=t.send_from_warehouse,c=t.sales_order,o=t.flows,u=t.model,i=t.driver_name,d=t.driver_number,s=t.lr_number,l=t.vehicle_number,m=t.freight_charges,f=t.vehicle_type,b=t.transport_by,p=t.expected_delivery,h=t.remarks;return Object(r.a)("/edit-allotment/".concat(e,"/"),{method:"PATCH",data:{dispatch_date:n,send_from_warehouse:a,sales_order:c,flows:o,model:u,driver_name:i,driver_number:d,lr_number:s,vehicle_number:l,freight_charges:m,vehicle_type:f,transport_by:b,expected_delivery:p,remarks:h},secure:!0})},ie=function(e){return Object(r.a)("/allotments/",{method:"GET",secure:!0,params:{id:e}})},de=function(e){return Object(r.a)("/allotments-cal/?tno=".concat(e),{method:"GET",secure:!1})},se=function(e){return Object(r.a)("/edit-allotment/".concat(e,"/"),{method:"DELETE",secure:!0})},le=function(e){return Object(r.a)("/create-grn/",{method:"POST",secure:!0,data:e})},me=function(e,t){return Object(r.a)("/edit-grn/".concat(e,"/"),{method:"PATCH",secure:!0,data:t})},fe=function(e){return Object(r.a)("/edit-grn/".concat(e,"/"),{method:"GET",secure:!0})},be=function(e){return Object(r.a)("/create-regrn/",{method:"POST",secure:!0,data:e})},pe=function(e,t){return Object(r.a)("/edit-regrn/".concat(e,"/"),{method:"PATCH",secure:!0,data:t})},he=function(e){return Object(r.a)("/edit-regrn/".concat(e,"/"),{method:"GET",secure:!0})},Ee=function(e){return Object(r.a)("/create-delivered/",{method:"POST",data:e,secure:!0,headers:{"Content-Type":"multipart/form-data  boundary=".concat(Math.random().toString().substr(2))}})},_e=function(e,t){return Object(r.a)("/e-delivered/".concat(e,"/"),{method:"PATCH",data:t,secure:!0,headers:{"Content-Type":"multipart/form-data  boundary=".concat(Math.random().toString().substr(2))}})},ye=function(e){return Object(r.a)("/edit-delivered/".concat(e,"/"),{method:"GET",secure:!0})},Oe=function(e){return Object(r.a)("/create-inward/",{method:"POST",data:e,secure:!0,headers:{"Content-Type":"multipart/form-data  boundary=".concat(Math.random().toString().substr(2))}})},Te=function(e,t){return Object(r.a)("/e-inward/".concat(e,"/"),{method:"PATCH",data:t,secure:!0,headers:{"Content-Type":"multipart/form-data  boundary=".concat(Math.random().toString().substr(2))}})},je=function(e){return Object(r.a)("/edit-inward/".concat(e,"/"),{method:"GET",secure:!0})},ve=function(e){return Object(r.a)("/upload-scs/",{method:"POST",data:e,secure:!0,headers:{"Content-Type":"multipart/form-data  boundary=".concat(Math.random().toString().substr(2))}})},ge=function(e){return Object(r.a)("/upload-tp/",{method:"POST",data:e,secure:!0,headers:{"Content-Type":"multipart/form-data  boundary=".concat(Math.random().toString().substr(2))}})},we=function(e,t){return Object(r.a)("/reupload-tp/".concat(e,"/"),{method:"PATCH",data:t,secure:!0,headers:{"Content-Type":"multipart/form-data  boundary=".concat(Math.random().toString().substr(2))}})},ke=function(){return Object(r.a)("/tp-list/",{method:"GET",secure:!0})},Se=function(e){return Object(r.a)("/create-return/",{method:"POST",data:e,secure:"true"})},Pe=function(e,t){var n=t.transaction_no,a=t.transaction_date,c=t.transaction_type,o=t.flow,u=t.kits,i=t.driver_name,d=t.driver_number,s=t.lr_number,l=t.vehicle_number,m=t.freight_charges,f=t.vehicle_type,b=t.transport_by,p=t.warehouse,h=t.receiver_client,E=t.remarks;return Object(r.a)("/edit-return/".concat(e,"/"),{method:"PATCH",data:{transaction_no:n,transaction_date:a,transaction_type:c,flow:o,kits:u,driver_name:i,driver_number:d,lr_number:s,vehicle_number:l,freight_charges:m,vehicle_type:f,transport_by:b,warehouse:p,receiver_client:h,remarks:E},secure:"true"})},Ge=function(e){return Object(r.a)("/edit-return/".concat(e,"/"),{method:"GET",secure:!0})},Ce=function(e){return Object(r.a)("/return-received/",{method:"GET",secure:!0,params:{id:e}})},Ae=function(e){return Object(r.a)("/edit-return/".concat(e,"/"),{method:"DELETE",secure:!0})},xe=function(e){return Object(r.a)("/create-received/",{method:"POST",data:e,secure:!0,headers:{"Content-Type":"multipart/form-data  boundary=".concat(Math.random().toString().substr(2))}})},We=function(e,t){return Object(r.a)("/e-received/".concat(e,"/"),{method:"PATCH",data:t,secure:!0,headers:{"Content-Type":"multipart/form-data  boundary=".concat(Math.random().toString().substr(2))}})},De=function(e){return Object(r.a)("/edit-received/".concat(e,"/"),{method:"GET",secure:!0})},He=function(){return Object(r.a)("/delivered/",{method:"GET",secure:!0})},Ne=function(){return Object(r.a)("/inward/",{method:"GET",secure:!0})},Me=function(){return Object(r.a)("/received/",{})},Le=function(e){return Object(r.a)("/grn-barcodes/".concat(e,"/"),{method:"GET",secure:!0})},qe=function(e){var t=e.cname,n=e.to,a=e.from;return Object(r.a)("/allotment-reports/",{method:"GET",secure:!0,params:{cname:t,to:n,from:a}})},Ye=function(e){var t=e.cname,n=e.to,a=e.from;return Object(r.a)("/return-reports/",{method:"GET",secure:!0,params:{cname:t,to:n,from:a}})},Ie=function(e){return Object(r.a)("/allotments-delivered/",{method:"GET",secure:!0,params:{id:e}})},Re=function(e){return Object(r.a)("/outward-inward/",{method:"GET",secure:!0,params:{id:e}})},Fe=function(e){return Object(r.a)("/return-docket/",{method:"GET",secure:!0,params:{id:e}})},Ke=function(e){return Object(r.a)("/returns-cal/?tno=".concat(e),{method:"GET",secure:!1})},ze=function(e){return Object(r.a)("/create-leads/",{method:"POST",secure:!0,data:e})},Be=function(){return Object(r.a)("/leads/",{method:"GET",secure:!0})},Je=function(){return Object(r.a)("/cp/",{method:"GET",secure:!0})},Qe=function(){return Object(r.a)("/scs/",{method:"GET",secure:!0})},Ue=function(e,t){return Object(r.a)("/edit-leads/".concat(e,"/"),{method:"PATCH",secure:!0,data:t})},Ve=function(e){return Object(r.a)("/edit-leads/".concat(e,"/"),{method:"GET",secure:!0})},Xe=function(e){return Object(r.a)("/edit-leads/".concat(e,"/"),{method:"DELETE",secure:!0})},Ze=function(e){return Object(r.a)("dispatch-allotment/",{method:"POST",secure:!0,data:e})},$e=function(e,t){return Object(r.a)("/dispatch-allotment-upd/".concat(t,"/"),{method:"PATCH",secure:!0,data:e})},et=function(e){return Object(r.a)("dispatch-return/",{method:"POST",secure:!0,data:e})},tt=function(e){return Object(r.a)("create-pfep/",{method:"POST",secure:!0,data:e})},nt=function(e,t){return Object(r.a)("/edit-pfep/".concat(e,"/"),{method:"PATCH",secure:!0,data:t})},rt=function(e){return Object(r.a)("create-scs/",{method:"POST",secure:!0,data:e})},at=function(e){return Object(r.a)("/edit-scs/".concat(e,"/"),{method:"GET",secure:!0})},ct=function(e){return Object(r.a)("/edit-scs/".concat(e,"/"),{method:"DELETE",secure:!0})},ot=function(e,t){return Object(r.a)("/ed-scs/".concat(e,"/"),{method:"PATCH",secure:!0,data:t})},ut=function(e){return Object(r.a)("create-cp/",{method:"POST",secure:!0,data:e})},it=function(e){return Object(r.a)("/edit-cp/".concat(e,"/"),{method:"DELETE",secure:!0})},dt=function(e,t){return Object(r.a)("/edit-cp/".concat(e,"/"),{method:"PATCH",secure:!0,data:t})},st=function(e){return Object(r.a)("inv-items/",{method:"GET",secure:!0,data:e})},lt=function(e){return Object(r.a)("create-inv/",{method:"POST",secure:!0,data:e})},mt=function(e){return Object(r.a)("sc-inv-items/?id=".concat(e.id),{method:"GET",secure:!0})},ft=function(e){return Object(r.a)("sc-inv-items/",{method:"GET",secure:!0,data:e})},bt=function(e){return Object(r.a)("create-sc-inv/",{method:"POST",secure:!0,data:e})},pt=function(e){return Object(r.a)("rc-inv-items/",{method:"GET",secure:!0,data:e})},ht=function(e){return Object(r.a)("create-rc-inv/",{method:"POST",secure:!0,data:e})},Et=function(e){return Object(r.a)("create-mrstatus/",{method:"POST",secure:!0,data:e})},_t=function(e){return Object(r.a)("/create-expense/",{method:"POST",data:e,secure:!0,headers:{"Content-Type":"multipart/form-data  boundary=".concat(Math.random().toString().substr(2))}})},yt=function(){return Object(r.a)("/expenses/",{method:"GET",secure:!0})},Ot=function(e){return Object(r.a)("/edit-expense/".concat(e,"/"),{method:"DELETE",secure:!0})},Tt=function(e){return Object(r.a)("/edit-expense/".concat(e,"/"),{method:"GET",secure:!0})},jt=function(e,t){return Object(r.a)("/ed-expense/".concat(e,"/"),{method:"PATCH",data:t,secure:!0,headers:{"Content-Type":"multipart/form-data  boundary=".concat(Math.random().toString().substr(2))}})},vt=function(e){return Object(r.a)("/create-adjustments/",{method:"POST",data:e,secure:!0,headers:{"Content-Type":"multipart/form-data  boundary=".concat(Math.random().toString().substr(2))}})},gt=function(){return Object(r.a)("/adjustments/",{method:"GET",secure:!0})},wt=function(){return Object(r.a)("/clientadjust/",{method:"GET",secure:!0})},kt=function(e){return Object(r.a)("/upload-audit/",{method:"POST",data:e,secure:!0,headers:{"Content-Type":"multipart/form-data  boundary=".concat(Math.random().toString().substr(2))}})},St=function(e){return Object(r.a)("/create-clientadjust/",{method:"POST",data:e,secure:!0})},Pt=function(e){return Object(r.a)("/create-group/",{method:"POST",data:e,secure:!0})},Gt=function(){return Object(r.a)("/group/",{method:"GET",secure:!0})},Ct=function(e){return Object(r.a)("/edit-group/".concat(e,"/"),{method:"DELETE",secure:!0})},At=function(e){return Object(r.a)("/edit-group/".concat(e,"/"),{method:"GET",secure:!0})},xt=function(e,t){return Object(r.a)("/edit-group/".concat(e,"/"),{method:"PATCH",data:t,secure:!0})},Wt=function(e){return Object(r.a)("/create-sc-adjustments/",{method:"POST",data:e,secure:!0,headers:{"Content-Type":"multipart/form-data  boundary=".concat(Math.random().toString().substr(2))}})},Dt=function(){return Object(r.a)("/sc-adjustments/",{method:"GET",secure:!0})},Ht=function(e){return Object(r.a)("/create-rc-adjustments/",{method:"POST",data:e,secure:!0,headers:{"Content-Type":"multipart/form-data  boundary=".concat(Math.random().toString().substr(2))}})},Nt=function(){return Object(r.a)("/rc-adjustments/",{method:"GET",secure:!0})},Mt=function(e){return Object(r.a)("/create-relocation/",{method:"POST",data:e,secure:!0})},Lt=function(){return Object(r.a)("/relocations/",{method:"GET",secure:!0})},qt=function(e){return Object(r.a)("/edit-relocation/".concat(e,"/"),{method:"DELETE",secure:!0})},Yt=function(e){return Object(r.a)("/edit-relocation/".concat(e,"/"),{method:"GET",secure:!0})},It=function(e,t){return Object(r.a)("/edit-relocation/".concat(e,"/"),{method:"PATCH",data:t,secure:!0})},Rt=function(e){return Object(r.a)("/relocation-template/?tno=".concat(e),{method:"GET",secure:!1})},Ft=function(e){return Object(r.a)("/password-reset/",{method:"POST",data:e,secure:!1})},Kt=function(e){return Object(r.a)("/password-reset/confirm/",{method:"POST",data:e,secure:!1})}},314:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r="https://tbackend.trakkia.com/"},320:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r="ACCESS_TOKEN",a="REFRESH_TOKEN"},321:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r}));var r=function(){return window?window.storage:e.storage}}).call(this,n(57))},349:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(106);var a=n(144);function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},559:function(e,t,n){},942:function(e,t,n){"use strict";n.r(t);n(280);var r=n(281),a=n(349),c=(n(282),n(284)),o=(n(283),n(285)),u=n(46),i=n.n(u),d=n(65),s=n(103),l=(n(176),n(127)),m=n(0),f=n.n(m),b=n(932),p=n(276),h=n.n(p),E=n(311),_=(n(559),n(560),l.a.Title);t.default=function(e){var t=e.location,n=(e.match,Object(m.useState)(null)),u=Object(s.a)(n,2),l=u[0],p=u[1],y=Object(m.useState)(0),O=Object(s.a)(y,2);O[0],O[1];Object(m.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.state){e.next=7;break}if(!t.state.id){e.next=7;break}return e.next=4,Object(E.pc)(t.state.id);case 4:n=e.sent,(r=n.data)&&p(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(m.useEffect)((function(){}),[l]);return l?f.a.createElement("div",{className:"container-docket"},f.a.createElement("div",{className:"header-docket"},f.a.createElement("div",{className:"logo-docket"},f.a.createElement("img",{src:"".concat("","/home-logo.png"),alt:"Yantraksh"})),f.a.createElement("div",{className:"heading-docket"},f.a.createElement(_,{level:2,style:{fontWeight:"bold"}},"DELIVERY CHALLAN"))),f.a.createElement("hr",null),f.a.createElement(c.a,{className:"meta-docket"},f.a.createElement(o.a,{span:17,className:"left"},f.a.createElement(c.a,null,f.a.createElement(o.a,{span:22},f.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Transaction No. : "),f.a.createElement("p",{style:{display:"inline"}},l.transaction_no))),f.a.createElement(c.a,null,f.a.createElement(o.a,{span:22},f.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Transaction Date : "),f.a.createElement("p",{style:{display:"inline"}},l.transaction_date?h()(l.transaction_date).format("DD/MM/YYYY"):0))),f.a.createElement(c.a,null,f.a.createElement(o.a,{span:22},f.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Dispatch Date : "),f.a.createElement("p",{style:{display:"inline"}},l.dispatch_date?h()(l.dispatch_date).format("DD/MM/YYYY"):0))),f.a.createElement(c.a,null,f.a.createElement(o.a,{span:22},f.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Transaction Type : Outward"))),f.a.createElement(c.a,null)),f.a.createElement(o.a,{span:7,className:"right",style:{fontFamily:"Arial, Helvetica, sans-serif"}},f.a.createElement("p",null,"[ \xa0] Original for Consignee ",f.a.createElement("br",null)," [ \xa0] Duplicate for Transporter ",f.a.createElement("br",null),"[ \xa0] Triplicate for Consignor"))),f.a.createElement("div",{className:"main-data-docket"},f.a.createElement(c.a,null,f.a.createElement(o.a,{span:12},f.a.createElement(c.a,null,f.a.createElement(o.a,{span:10},f.a.createElement("p",{style:{fontWeight:"bold"}},"Sender's Name : ")),f.a.createElement(o.a,{span:12,style:{wordWrap:"break-word"}},l.owner.client_name))),f.a.createElement(o.a,{span:12},f.a.createElement(c.a,null,f.a.createElement(o.a,{span:10},f.a.createElement("p",{style:{fontWeight:"bold"}},"Receiver's Name : ")),f.a.createElement(o.a,{span:12,style:{wordWrap:"break-word"}},l.sending_location.name)))),f.a.createElement(c.a,null,f.a.createElement(o.a,{span:12},f.a.createElement(c.a,null,f.a.createElement(o.a,{span:10},f.a.createElement("p",{style:{fontWeight:"bold"}},"Sender's Address : ")),f.a.createElement(o.a,{span:12,style:{wordWrap:"break-word"}},"".concat(l.owner.client_billing_address,",").concat(l.owner.client_city,",").concat(l.owner.client_state,",\n                      ").concat(l.owner.client_pincode)))),f.a.createElement(o.a,{span:12},f.a.createElement(c.a,null,f.a.createElement(o.a,{span:10},f.a.createElement("p",{style:{fontWeight:"bold"}},"Receiver's Address : ")),f.a.createElement(o.a,{span:12,style:{wordWrap:"break-word"}},"".concat(l.sending_location.address))))),f.a.createElement(c.a,null,f.a.createElement(o.a,{span:12},f.a.createElement(c.a,null,f.a.createElement(o.a,{span:10},f.a.createElement("p",{style:{fontWeight:"bold"}},"GST : ")),f.a.createElement(o.a,{span:12,style:{wordWrap:"break-word"}},l.owner.client_gst))),f.a.createElement(o.a,{span:12},f.a.createElement(c.a,null,f.a.createElement(o.a,{span:10},f.a.createElement("p",{style:{fontWeight:"bold"}},"GST : ")),f.a.createElement(o.a,{span:12,style:{wordWrap:"break-word"}},l.sending_location.emitter.client_gst))))),f.a.createElement(c.a,{className:"table-docket"},f.a.createElement(b.a,{bordered:!0,size:"sm"},f.a.createElement("thead",null,f.a.createElement("tr",null,f.a.createElement("th",null,"Kit ID"),f.a.createElement("th",null,"Kit Name"),f.a.createElement("th",null,"Kit Quantity"),f.a.createElement("th",null,"Quantity Parts"),f.a.createElement("th",null,"Kit Info"),f.a.createElement("th",null,"Kit Type"),f.a.createElement("th",null,"Product Name"),f.a.createElement("th",null,"Product Code"),f.a.createElement("th",null,"Product Quantity"))),f.a.createElement("tbody",null,Object(a.a)(l.kits).map((function(e){return f.a.createElement("tr",null,f.a.createElement("td",null,e.kit.id),f.a.createElement("td",null,e.kit.kit_name),f.a.createElement("td",null,e.quantity_kit),f.a.createElement("td",null,e.quantity_parts),f.a.createElement("td",null,e.kit.kit_info),f.a.createElement("td",null,e.kit.kit_type),f.a.createElement("td",null,e.kit.products.map((function(e){return f.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},f.a.createElement("p",null,e.product.name))}))),f.a.createElement("td",null,e.kit.products.map((function(e){return f.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},f.a.createElement("p",null,e.product.short_code))}))),f.a.createElement("td",null,e.kit.products.map((function(t){return f.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},f.a.createElement("p",null,t.quantity*e.quantity_kit))}))))}))))),f.a.createElement(c.a,{className:"final-docket"},f.a.createElement(o.a,{span:12},f.a.createElement(c.a,null,f.a.createElement(o.a,{span:24},f.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Invoice Number : "),f.a.createElement("p",{style:{display:"inline",wordWrap:"break-word"}},l.invoice_number))),f.a.createElement(c.a,null,f.a.createElement(o.a,{span:24},f.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Transporter Name : "),f.a.createElement("p",{style:{display:"inline",wordWrap:"break-word"}},l.transporter_name))),f.a.createElement(c.a,null,f.a.createElement(o.a,{span:24},f.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Driver Name : "),f.a.createElement("p",{style:{display:"inline",wordWrap:"break-word"}},l.driver_name))),f.a.createElement(c.a,null,f.a.createElement(o.a,{span:24},f.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Driver No. : "),f.a.createElement("p",{style:{display:"inline",wordWrap:"break-word"}},l.driver_number)))),f.a.createElement(o.a,{span:12},f.a.createElement(c.a,null,f.a.createElement(o.a,{span:24},f.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Vehicle No. : "),f.a.createElement("p",{style:{display:"inline",wordWrap:"break-word"}},l.vehicle_number))))),f.a.createElement("hr",null),f.a.createElement("table",{style:{pageBreakInside:"avoid"}},f.a.createElement("div",{className:"declaration"},f.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Declaration : "),f.a.createElement("p",{style:{display:"inline"}},"The packaging products given on hire shall always remain the property of Yantraksh Logistics Private Limited and shall not be used for the purpose otherwise agreed upon. The same shall be returned at the address notified by Yantraksh Logistics Private Limited."),f.a.createElement("br",null),f.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Note : "),f.a.createElement("p",{style:{display:"inline"}}," ","No E-Way Bill is required for Empty Cargo Containers. Refer, Rule 14 of Central Goods and Services Tax (Second Amendment) Rules, 2018."),l.remarks?f.a.createElement(f.a.Fragment,null,f.a.createElement("br",null),f.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Remarks : "),f.a.createElement("p",{style:{display:"inline"}},l.remarks)):null)),f.a.createElement("hr",null),f.a.createElement("table",{style:{pageBreakInside:"avoid",width:"90vw"}},f.a.createElement("div",{className:"footer"},f.a.createElement(c.a,null,f.a.createElement(o.a,{span:1}),f.a.createElement(o.a,{span:11,style:{fontWeight:"bold"}},"For Sending Location :"),f.a.createElement(o.a,{span:6}),f.a.createElement(o.a,{span:6,style:{fontWeight:"bold"}},"For Receiving Location :")),f.a.createElement("br",null)," ",f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement(c.a,null,f.a.createElement(o.a,{span:1}),f.a.createElement(o.a,{span:11,style:{fontWeight:"bold"}},"Authorized Signature"),f.a.createElement(o.a,{span:6}),f.a.createElement(o.a,{span:6,style:{fontWeight:"bold"}},"Authorized Signature")),f.a.createElement(c.a,null,f.a.createElement(o.a,{span:1}),f.a.createElement(o.a,{span:11},"(Company Seal & Signature)"),f.a.createElement(o.a,{span:6}),f.a.createElement(o.a,{span:6},"(Company Seal & Signature)")),f.a.createElement("br",null)," ",f.a.createElement("br",null),f.a.createElement("div",{style:{display:"flex",justifyContent:"Center",alignItems:"center",flexDirection:"column",padding:"0",margin:"0"}},f.a.createElement("p",{style:{fontSize:"26px",color:"#034efc"}},"Yantraksh Logistics Private Limited"),f.a.createElement("p",null,"CIN No: U74999GJ2018PTC105552"))))):f.a.createElement(r.a,{spinning:!0,style:{position:"absolute",marginLeft:"49vw",marginTop:"49vh"}})}}}]);
//# sourceMappingURL=10.cbb4caa7.chunk.js.map