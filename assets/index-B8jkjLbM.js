const __vite__fileDeps=["assets/index-BVYkO8DQ.js","assets/index-BwlWQgOS.js","assets/index-J2e7gpaC.css","assets/orderStore-C_C_5MjG.js","assets/SelectInput-CuR1JDnw.js","assets/chunk-H46NUPBZ-Bv1XA0pZ.js","assets/TextInput-oDPru7sZ.js","assets/x-CEy9H__N.js","assets/Checkbox-DzrNf94Q.js","assets/ModalForm-DtJhl9Qe.js","assets/circle-plus-cFvnuTTd.js","assets/chunk-RDF2AYID-DgqkGg6U.js","assets/PaymentOption-DfO5G3rH.js","assets/index-B08GX8gf.js","assets/credit-card-3t7HtXnx.js","assets/chunk-ZPFGWTBB-DUk_09Fd.js","assets/chunk-7OLJDQMT-BtMPr5VH.js","assets/ShoppingBag-3A9nKb89.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as a,_ as o,J as m,j as e,C as r,F as x,w as _,G as h,B as d,x as S,y as v,z as g}from"./index-BwlWQgOS.js";const j=a.lazy(()=>o(()=>import("./index-BVYkO8DQ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]))),y=a.lazy(()=>o(()=>import("./PaymentOption-DfO5G3rH.js"),__vite__mapDeps([12,1,2,13,11,5,3,14,15,16]))),u=a.lazy(()=>o(()=>import("./ShoppingBag-3A9nKb89.js"),__vite__mapDeps([17,1,2,13,6,7,5,3,15]))),w=()=>{const{nextStep:t,prevStep:s,activeStep:n}=m({initialStep:0}),c=[{label:"ShoppingBag",component:e.jsx(u,{stepProps:{nextStep:t,prevStep:s}}),icon:S},{label:"Shipping Details",component:e.jsx(j,{stepProps:{nextStep:t,prevStep:s}}),icon:v},{label:"Payment Option",component:e.jsx(y,{stepProps:{nextStep:t,prevStep:s}}),icon:g}];return e.jsx(r,{maxW:{base:"99vw",md:"95vw"},py:10,children:e.jsx(x,{flexDir:"column",gap:"20",width:"100%",userSelect:"none",children:e.jsx(_,{variant:"circles-alt",colorScheme:"primary",cursor:"pointer",expandVerticalSteps:!1,trackColor:"primary.100",activeStep:n,children:c.map(({label:p,icon:i,component:l})=>e.jsx(h,{checkIcon:i,label:p,icon:i,children:e.jsx(r,{maxW:{base:"100vw",sm:"95vw",md:"90vw",lg:"85vw"},children:e.jsx(d,{p:{sm:4},children:l})})},p))})})})};export{w as default};
