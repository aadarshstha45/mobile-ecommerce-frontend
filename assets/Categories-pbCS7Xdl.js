import{r as n,u as p,j as e,C as g,F as i,l as u,ae as h,B as l,T as o,M as f,m as j,a4 as C,I as b,i as w,S as v,b as S}from"./index-DQ2lrmGm.js";import{a as k}from"./index-iVE4t_pu.js";import{C as R}from"./chunk-YQO7BFFX-C-Y5cD9s.js";import{C as z}from"./chunk-2EW3JUUD-DYLPTi_b.js";import{C as B}from"./chunk-FHHZMTWR-CwOkj_tn.js";const H=()=>{var t;const d=n.useRef(null),[r,x]=n.useState(8),{data:a,isPending:c,isFetching:m}=p(r);return e.jsx(g,{as:"section",id:"customer",maxW:{base:"98vw",sm:"95vw",md:"90vw",lg:"85vw"},ref:d,children:c?e.jsx(i,{justify:"center",align:"center",w:"full",h:"full",children:e.jsx(u,{height:"full"})}):a.data&&a.data.length>0&&e.jsxs(i,{flexDir:"column",gap:4,children:[e.jsxs(h,{align:"center",children:[e.jsx(l,{bg:"linear-gradient(180deg, rgba(156,200,252,1) 25%, rgba(0,62,221,1) 100%);",h:"40px",w:1}),e.jsx(o,{fontSize:{base:"lg",sm:"xl",md:"2xl"},fontWeight:"bold",children:"Categories"})]}),e.jsx(f,{columnsCountBreakPoints:{0:1,300:2,550:4,950:6,1350:8},children:e.jsx(j,{gutter:"10px",children:a.data.map(s=>e.jsxs(R,{as:C,to:s.slug,overflow:"hidden",borderRadius:20,pos:"relative",role:"group",children:[e.jsx(z,{p:0,children:s.image?e.jsx(l,{children:e.jsx(k,{id:s.id,src:s.image,alt:s.name,w:"full"})}):e.jsx(b,{loading:"lazy",w:"full",src:"https://via.placeholder.com/150",alt:s.name})}),e.jsx(B,{bg:"white",bottom:0,left:0,w:"full",transition:"all 0.3s",_groupHover:{transform:"translateY(0px)"},pos:"absolute",borderTopRadius:20,p:2,children:e.jsx(o,{noOfLines:1,textAlign:"center",fontSize:{base:"14px",sm:"16px",lg:"18px"},color:"gray.500",children:s.name})})]},s.id))})}),((t=a==null?void 0:a.pagination)==null?void 0:t.total_pages)>1&&e.jsx(w,{align:"center",mr:10,justify:"center",children:m?e.jsx(v,{thickness:"4px",color:"primary.500"}):e.jsx(S,{w:"fit-content",size:"xs",variant:"unstyled",onClick:()=>x(r+8),_hover:{textDecoration:"underline"},textColor:"primary.500",children:"View More"})})]})})};export{H as default};
