import{H as V,z as ue,r,A as ie,L as se,d as u,K as j,o as i,c as pe,C as g,D as ce,f as e,e as l,w as t,i as me,B as q,m as f,j as c,l as k,k as H,x as fe,J as ve,s as _e}from"./index.4196b790.js";function M(s){return V({url:"/demo/tree/list",method:"get",params:s})}function ye(s){return V({url:"/demo/tree/"+s,method:"get"})}function he(s){return V({url:"/demo/tree",method:"post",data:s})}function be(s){return V({url:"/demo/tree",method:"put",data:s})}function ge(s){return V({url:"/demo/tree/"+s,method:"delete"})}const ke={class:"app-container"},we={class:"dialog-footer"},Ce=ue({name:"Tree"}),Ie=Object.assign(Ce,{setup(s){const{proxy:p}=_e(),A=r([]),v=r(!1),I=r(!1),_=r(!0),T=r(!0);r(!0),r(!0);const Q=r(0),S=r(""),R=r(!0),U=r(!0),$=r(void 0),w=r([]),C=r([{key:0,label:"\u7236id",visible:!1},{key:1,label:"\u90E8\u95E8id",visible:!0},{key:2,label:"\u7528\u6237id",visible:!0},{key:3,label:"\u6811\u8282\u70B9\u540D",visible:!0},{key:4,label:"\u521B\u5EFA\u65F6\u95F4",visible:!0}]),O=ie({queryParams:{treeName:null,createTime:null},form:{},rules:{treeName:[{required:!0,message:"\u6811\u8282\u70B9\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}}),{queryParams:N,form:d,rules:z}=se(O);function h(){_.value=!0,M(p.addDateRange(N.value,w.value,"CreateTime")).then(o=>{A.value=p.handleTree(o.data,"id","parentId"),Q.value=o.total,_.value=!1})}async function E(){await M().then(o=>{$.value=[];const a={id:0,treeName:"\u9876\u7EA7\u8282\u70B9",children:[]};a.children=p.handleTree(o.data,"id","parentId"),$.value.push(a)})}function J(){v.value=!1,B()}function B(){d.value={id:void 0,parentId:void 0,deptId:void 0,userId:void 0,treeName:void 0,version:void 0,createTime:void 0,createBy:void 0,updateTime:void 0,updateBy:void 0,delFlag:void 0},p.resetForm("treeRef")}function P(){h()}function G(){w.value=[],p.resetForm("queryRef"),P()}async function F(o){B(),await E(),o!=null&&o.id?d.value.parentId=o.id:d.value.parentId=0,v.value=!0,S.value="\u6DFB\u52A0\u6D4B\u8BD5\u6811\u8868"}function W(){U.value=!1,R.value=!R.value,ve(()=>{U.value=!0})}async function X(o){_.value=!0,B(),await E(),o!=null&&(d.value.parentId=o.id),ye(o.id).then(a=>{_.value=!1,d.value=a.data,v.value=!0,S.value="\u4FEE\u6539\u6D4B\u8BD5\u6811\u8868"})}function Z(){p.$refs.treeRef.validate(o=>{o&&(I.value=!0,d.value.id!=null?be(d.value).then(a=>{p.$modal.msgSuccess("\u4FEE\u6539\u6210\u529F"),v.value=!1,h()}).finally(()=>{I.value=!1}):he(d.value).then(a=>{p.$modal.msgSuccess("\u65B0\u589E\u6210\u529F"),v.value=!1,h()}).finally(()=>{I.value=!1}))})}function ee(o){p.$modal.confirm('\u662F\u5426\u786E\u8BA4\u5220\u9664\u6D4B\u8BD5\u5355\u8868\u7F16\u53F7\u4E3A"'+o.id+'"\u7684\u6570\u636E\u9879?').then(()=>(_.value=!0,ge(o.id))).then(()=>{_.value=!1,h(),p.$modal.msgSuccess("\u5220\u9664\u6210\u529F")}).finally(()=>{_.value=!1})}return h(),(o,a)=>{const x=u("el-input"),y=u("el-form-item"),le=u("el-date-picker"),m=u("el-button"),K=u("el-form"),L=u("el-col"),te=u("right-toolbar"),ae=u("el-row"),b=u("el-table-column"),ne=u("el-table"),oe=u("treeselect"),de=u("el-dialog"),D=j("hasPermi"),re=j("loading");return i(),pe("div",ke,[g(l(K,{model:e(N),ref:"queryRef",inline:!0},{default:t(()=>[l(y,{label:"\u6811\u8282\u70B9\u540D",prop:"treeName"},{default:t(()=>[l(x,{modelValue:e(N).treeName,"onUpdate:modelValue":a[0]||(a[0]=n=>e(N).treeName=n),placeholder:"\u8BF7\u8F93\u5165\u6811\u8282\u70B9\u540D",clearable:"",style:{width:"200px"},onKeyup:me(P,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),l(y,{label:"\u521B\u5EFA\u65F6\u95F4"},{default:t(()=>[l(le,{modelValue:e(w),"onUpdate:modelValue":a[1]||(a[1]=n=>q(w)?w.value=n:null),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","range-separator":"-","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date(2e3,1,1,0,0,0),new Date(2e3,1,1,23,59,59)]},null,8,["modelValue","default-time"])]),_:1}),l(y,null,{default:t(()=>[l(m,{type:"primary",icon:"search",onClick:P},{default:t(()=>[f("\u641C\u7D22")]),_:1}),l(m,{icon:"Refresh",onClick:G},{default:t(()=>[f("\u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model"]),[[ce,e(T)]]),l(ae,{gutter:10,class:"mb8"},{default:t(()=>[l(L,{span:1.5},{default:t(()=>[g((i(),c(m,{type:"primary",plain:"",icon:"Plus",onClick:F},{default:t(()=>[f("\u65B0\u589E")]),_:1})),[[D,["demo:tree:add"]]])]),_:1},8,["span"]),l(L,{span:1.5},{default:t(()=>[l(m,{type:"info",plain:"",icon:"Sort",onClick:W},{default:t(()=>[f("\u5C55\u5F00/\u6298\u53E0")]),_:1})]),_:1},8,["span"]),l(te,{showSearch:e(T),"onUpdate:showSearch":a[2]||(a[2]=n=>q(T)?T.value=n:null),onQueryTable:h},null,8,["showSearch"])]),_:1}),e(U)?g((i(),c(ne,{key:0,data:e(A),"row-key":"id","default-expand-all":e(R),"tree-props":{children:"children",hasChildren:"hasChildren"}},{default:t(()=>[e(C)[0].visible?(i(),c(b,{key:0,label:"\u7236id",prop:"parentId"})):k("",!0),e(C)[1].visible?(i(),c(b,{key:1,label:"\u90E8\u95E8id",align:"center",prop:"deptId"})):k("",!0),e(C)[2].visible?(i(),c(b,{key:2,label:"\u7528\u6237id",align:"center",prop:"userId"})):k("",!0),e(C)[3].visible?(i(),c(b,{key:3,label:"\u6811\u8282\u70B9\u540D",align:"center",prop:"treeName"})):k("",!0),e(C)[4].visible?(i(),c(b,{key:4,label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",width:"180"},{default:t(n=>[H("span",null,fe(o.parseTime(n.row.createTime,"{y}-{m}-{d}")),1)]),_:1})):k("",!0),l(b,{label:"\u64CD\u4F5C",align:"center",width:"150","class-name":"small-padding fixed-width"},{default:t(n=>[g((i(),c(m,{link:"",type:"primary",icon:"Edit",onClick:Y=>X(n.row)},{default:t(()=>[f("\u4FEE\u6539")]),_:2},1032,["onClick"])),[[D,["demo:tree:edit"]]]),g((i(),c(m,{link:"",type:"primary",icon:"Plus",onClick:Y=>F(n.row)},{default:t(()=>[f("\u65B0\u589E")]),_:2},1032,["onClick"])),[[D,["demo:tree:add"]]]),g((i(),c(m,{link:"",type:"primary",icon:"Delete",onClick:Y=>ee(n.row)},{default:t(()=>[f("\u5220\u9664")]),_:2},1032,["onClick"])),[[D,["demo:tree:remove"]]])]),_:1})]),_:1},8,["data","default-expand-all"])),[[re,e(_)]]):k("",!0),l(de,{title:e(S),modelValue:e(v),"onUpdate:modelValue":a[7]||(a[7]=n=>q(v)?v.value=n:null),width:"500px","append-to-body":""},{footer:t(()=>[H("div",we,[l(m,{loading:e(I),type:"primary",onClick:Z},{default:t(()=>[f("\u786E \u5B9A")]),_:1},8,["loading"]),l(m,{onClick:J},{default:t(()=>[f("\u53D6 \u6D88")]),_:1})])]),default:t(()=>[l(K,{ref:"treeRef",model:e(d),rules:e(z),"label-width":"80px"},{default:t(()=>[l(y,{label:"\u7236id",prop:"parentId"},{default:t(()=>[l(oe,{value:e(d).parentId,"onUpdate:value":a[3]||(a[3]=n=>e(d).parentId=n),options:e($),objMap:{value:"id",label:"true_name",children:"children"},placeholder:"\u8BF7\u9009\u62E9\u7236id"},null,8,["value","options"])]),_:1}),l(y,{label:"\u90E8\u95E8id",prop:"deptId"},{default:t(()=>[l(x,{modelValue:e(d).deptId,"onUpdate:modelValue":a[4]||(a[4]=n=>e(d).deptId=n),placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8id"},null,8,["modelValue"])]),_:1}),l(y,{label:"\u7528\u6237id",prop:"userId"},{default:t(()=>[l(x,{modelValue:e(d).userId,"onUpdate:modelValue":a[5]||(a[5]=n=>e(d).userId=n),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237id"},null,8,["modelValue"])]),_:1}),l(y,{label:"\u6811\u8282\u70B9\u540D",prop:"treeName"},{default:t(()=>[l(x,{modelValue:e(d).treeName,"onUpdate:modelValue":a[6]||(a[6]=n=>e(d).treeName=n),placeholder:"\u8BF7\u8F93\u5165\u6811\u8282\u70B9\u540D"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])])}}});export{Ie as default};
