import{r as n,l as u,bu as g,j as e,C as h,F as o,L as f,H as c,B as j,T as p,a0 as w,t as v,M as y,v as b,S,aN as k,Z as C}from"./index-DqMwINjK.js";import{c as M,I as P}from"./index-B4M-u2bE.js";import{d as B}from"./ArrowRight-CjKsbB2n.js";import"./index-Dm-p0tYJ.js";import"./GoogleIcon-Bm8RntfT.js";import"./Lock-A4c70TZM.js";import"./index.esm-BKhoN415.js";import"./SelectInput-CTQDdc_4.js";import"./chunk-H46NUPBZ-CLw7Qts3.js";import"./TextInput-Sb6gmVGI.js";import"./X-CpqrLOaj.js";import"./auth-C9KVgX0N.js";import"./zod-D--hjMPf.js";import"./profile-ngARQAsV.js";import"./review-DOXwsJ1N.js";import"./index-Wi1vYxL2.js";import"./chunk-2EW3JUUD-CHZorT9F.js";import"./chunk-YQO7BFFX-BGZlorz9.js";import"./chunk-FHHZMTWR-BNUgKpg7.js";function K(){var l;const m=n.useRef(null),[a,i]=n.useState(8),[t]=u("(max-width: 768px)"),{data:r,isPending:x,isFetching:d}=g(a);return n.useEffect(()=>{i(t?4:8)},[t]),e.jsx(h,{as:"section",id:"new_arrivals",maxW:{base:"98vw",sm:"95vw",md:"90vw",lg:"85vw"},ref:m,children:x?e.jsx(o,{justify:"center",align:"center",w:"full",h:"full",children:e.jsx(f,{height:"full"})}):r.data&&r.data.length>0&&e.jsxs(o,{flexDir:"column",gap:10,children:[e.jsxs(o,{justify:"space-between",align:"center",children:[e.jsxs(c,{align:"center",children:[e.jsx(j,{bg:"linear-gradient(180deg, rgba(156,200,252,1) 25%, rgba(0,62,221,1) 100%);",h:"40px",w:1}),e.jsx(p,{fontSize:{base:"lg",sm:"xl",md:"2xl"},fontWeight:"bold",children:"New Arrivals"})]}),e.jsx(w,{to:"/new-arrivals",children:e.jsxs(c,{align:"center",gap:1,children:[e.jsx(p,{fontWeight:600,textColor:"primary.500",fontSize:{base:"sm",md:"md"},children:"See More"}),e.jsx(v,{color:"primary.500",as:B,w:6,h:6})]})})]}),e.jsx(y,{columnsCountBreakPoints:M,children:e.jsx(b,{gutter:t?"10px":"30px",children:r.data.map(s=>e.jsx(P,{data:s,discountPercent:s==null?void 0:s.discount},s.id))})}),((l=r==null?void 0:r.pagination)==null?void 0:l.per_page)<8&&e.jsx(S,{align:"center",mr:10,justify:"center",children:d?e.jsx(k,{thickness:"4px",color:"primary.500"}):e.jsx(C,{variant:"unstyled",w:"fit-content",onClick:()=>i(a+4),textColor:"primary.500",_hover:{textDecoration:"underline"},children:"View More"})})]})})}export{K as default};
