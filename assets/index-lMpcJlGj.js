const __vite__fileDeps=["assets/index-zfPq_3dg.js","assets/index-BTNegxn6.js","assets/index-CShizRo1.css","assets/index-BAyrqPH7.js","assets/PaginationButton-D3EFKaYh.js","assets/chevron-right-r3J6xi-7.js","assets/chunk-MGVPL3OH-oUuQI5MR.js","assets/chunk-YQO7BFFX-DEskQydj.js","assets/chunk-2EW3JUUD-eV4TN0fb.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as o,_ as u,V as f,j as e,F as x,T as D}from"./index-BTNegxn6.js";import{R as g,c as s}from"./convertDate-CX4RCL_T.js";import"./SelectInput-D7O88_D5.js";import{T as b,a as T,b as r,c as S,d as P,e as n}from"./chunk-IAXSQ4X2-DHvuSxa5.js";import"./x-Ca4hW-PW.js";import"./chunk-H46NUPBZ-S_4FQTts.js";const i=o.lazy(()=>u(()=>import("./index-zfPq_3dg.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),C=()=>{const[t,d]=o.useState(""),[a,l]=o.useState(""),{control:m}=f({defaultValues:{date:[t,a]}}),p=c=>{console.log(c);const[h,j]=c;d(h),l(j)};return e.jsxs(x,{w:"full",flexDir:"column",gap:4,children:[e.jsxs(x,{justify:"space-between",align:"center",children:[e.jsx(D,{fontSize:"xl",children:"My Orders"}),e.jsx(e.Fragment,{children:e.jsx(g,{width:"fit-content",handleChange:p,startDate:t,endDate:a,ranged:!0,name:"date",isClearable:t!==""||a!=="",onClear:()=>{d(""),l("")},control:m})})]}),e.jsxs(b,{isLazy:!0,position:"relative",variant:"unstyled",children:[e.jsxs(T,{children:[e.jsx(r,{fontSize:{base:"sm",md:"md",xl:"lg"},children:"Pending"}),e.jsx(r,{fontSize:{base:"sm",md:"md",xl:"lg"},children:"In Process"}),e.jsx(r,{fontSize:{base:"sm",md:"md",xl:"lg"},children:"Shipped"}),e.jsx(r,{fontSize:{base:"sm",md:"md",xl:"lg"},children:"Delivered"})]}),e.jsx(S,{mt:"-1.5px",height:"4px",bg:"primary.500",borderRadius:"1px"}),e.jsxs(P,{mt:8,children:[e.jsx(n,{p:0,children:e.jsx(i,{status:"pending",toDate:s(a),fromDate:s(t)})}),e.jsx(n,{p:0,children:e.jsx(i,{status:"processing",toDate:s(a),fromDate:s(t)})}),e.jsx(n,{p:0,children:e.jsx(i,{status:"shipped",toDate:s(a),fromDate:s(t)})}),e.jsx(n,{p:0,children:e.jsx(i,{status:"delivered",toDate:s(a),fromDate:s(t)})})]})]})]})};export{C as default};
