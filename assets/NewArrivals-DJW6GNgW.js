import{r as n,l as g,bt as h,j as e,C as u,F as o,L as f,H as c,B as j,T as p,a0 as w,t as v,M as y,v as b,S,aM as k,Z as M}from"./index-CkiCkVzJ.js";import{c as C,I as P}from"./index-DDX6UQql.js";import{d as B}from"./ArrowRight-CRhHRyVj.js";import"./index-DFZc1jet.js";import"./GoogleIcon-Bd6cZ3ux.js";import"./Lock-DBLbrESX.js";import"./index.esm-CeDGwYn6.js";import"./SelectInput-Cp7MsvuN.js";import"./chunk-H46NUPBZ-GRMvZQK7.js";import"./TextInput-BLwJ8rby.js";import"./X-BNpK52mh.js";import"./auth-CvLxuKRB.js";import"./zod-CPbSKUVH.js";import"./profile-B_ZtDsEm.js";import"./review-DgHCnSm3.js";import"./index-CvoN93Gi.js";import"./chunk-2EW3JUUD-DjtfUbRs.js";import"./chunk-YQO7BFFX-BXTouEWa.js";import"./chunk-FHHZMTWR-Bab8_tnk.js";function K(){var l;const m=n.useRef(null),[a,t]=n.useState(8),[i]=g("(max-width: 768px)"),{data:r,isPending:x,isFetching:d}=h(a);return n.useEffect(()=>{t(i?4:8)},[i]),e.jsx(u,{as:"section",id:"new_arrivals",maxW:{base:"98vw",sm:"95vw",md:"90vw",lg:"85vw"},ref:m,children:x?e.jsx(o,{justify:"center",align:"center",w:"full",h:"full",children:e.jsx(f,{height:"full"})}):r.data&&r.data.length>0&&e.jsxs(o,{flexDir:"column",gap:10,children:[e.jsxs(o,{justify:"space-between",align:"center",children:[e.jsxs(c,{align:"center",children:[e.jsx(j,{bg:"linear-gradient(180deg, rgba(156,200,252,1) 25%, rgba(0,62,221,1) 100%);",h:"40px",w:1}),e.jsx(p,{fontSize:{base:"lg",sm:"xl",md:"2xl"},fontWeight:"bold",children:"New Arrivals"})]}),e.jsx(w,{to:"/new-arrivals",children:e.jsxs(c,{align:"center",gap:1,children:[e.jsx(p,{fontWeight:600,textColor:"primary.500",fontSize:{base:"sm",md:"md"},children:"See More"}),e.jsx(v,{color:"primary.500",as:B,w:6,h:6})]})})]}),e.jsx(y,{columnsCountBreakPoints:C,children:e.jsx(b,{gutter:i?"10px":"30px",children:r.data.map(s=>e.jsx(P,{data:s,discountPercent:s==null?void 0:s.discount},s.id))})}),((l=r==null?void 0:r.pagination)==null?void 0:l.per_page)<8&&e.jsx(S,{align:"center",mr:10,justify:"center",children:d?e.jsx(k,{thickness:"4px",color:"primary.500"}):e.jsx(M,{variant:"unstyled",w:"fit-content",onClick:()=>t(a+4),textColor:"primary.500",_hover:{textDecoration:"underline"},children:"View More"})})]})})}export{K as default};
