const __vite__fileDeps=["assets/index-BAc9MyLU.js","assets/index-X4wyQiIj.js","assets/index-oPW0Mxol.css","assets/index-DTDL93Sc.js","assets/PaginationButton-sWdfIbl_.js","assets/chevron-right-Dtiw4FcS.js","assets/chunk-YQO7BFFX-FKfz1S6k.js","assets/chunk-2EW3JUUD-DYlWomKM.js","assets/chunk-MGVPL3OH-DqFrbO7b.js","assets/chunk-B5H2YLEF-fzAfMPOh.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as d,_ as h,j as e,F as m,T as j}from"./index-X4wyQiIj.js";import{R as f,c as t}from"./convertDate-DEOtSwyN.js";import"./SelectInput-DHTo4EtE.js";import{u as D}from"./index.esm-CRSS7Gff.js";import{T as b,a as g,b as w,c as S,d as r}from"./chunk-IAXSQ4X2-8-PwbLBv.js";import"./x-tDK38bKs.js";import"./chunk-H46NUPBZ-Ckkz5Lnd.js";const o=d.lazy(()=>h(()=>import("./index-BAc9MyLU.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))),T=[{name:"Pending",status:"pending"},{name:"In Process",status:"processing"},{name:"Shipped",status:"shipped"},{name:"Delivered",status:"delivered"}],z=()=>{const[a,l]=d.useState(""),[s,c]=d.useState(""),{control:p}=D({defaultValues:{date:[a,s]}}),x=n=>{const[i,u]=n;l(i),c(u)};return e.jsxs(m,{w:"full",flexDir:"column",gap:4,children:[e.jsxs(m,{flexWrap:"wrap",justify:"space-between",align:"center",children:[e.jsx(j,{fontSize:"xl",children:"My Orders"}),e.jsx(e.Fragment,{children:e.jsx(f,{width:"fit-content",handleChange:x,startDate:a,endDate:s,ranged:!0,name:"date",placeholder:"Select Date Range ...",isClearable:a!==""||s!=="",onClear:()=>{l(""),c("")},control:p})})]}),e.jsxs(b,{isLazy:!0,colorScheme:"primary",variant:"unstyled",children:[e.jsx(g,{whiteSpace:"nowrap",overflowX:"auto",overflowY:"hidden",children:T.map((n,i)=>e.jsx(w,{_selected:{borderBottomColor:"primary.500"},borderBottom:"6px solid",borderBottomColor:"primary.50",fontSize:{base:"sm",md:"md",xl:"lg"},whiteSpace:"nowrap",children:n.name},i))}),e.jsxs(S,{mt:8,children:[e.jsx(r,{p:0,children:e.jsx(o,{status:"pending",toDate:t(s),fromDate:t(a)})}),e.jsx(r,{p:0,children:e.jsx(o,{status:"processing",toDate:t(s),fromDate:t(a)})}),e.jsx(r,{p:0,children:e.jsx(o,{status:"shipped",toDate:t(s),fromDate:t(a)})}),e.jsx(r,{p:0,children:e.jsx(o,{status:"delivered",toDate:t(s),fromDate:t(a)})})]})]})]})};export{z as default};
