import{r as o,b1 as m,j as e,C as p,F as c,H as g,B as n,T as i,M as u,t as f,a8 as h,I as j,S as v,b2 as b,ac as C}from"./index-Cpei8luH.js";import{a as w}from"./index-Cc3eygxY.js";import{C as H}from"./chunk-YQO7BFFX-DVVwanA3.js";import{C as S}from"./chunk-2EW3JUUD-CMromys5.js";import{C as k}from"./chunk-FHHZMTWR-DvjgbQP1.js";const L=()=>{var t;const l=o.useRef(null),[r,d]=o.useState(8),{data:s,isFetching:x}=m(r);return e.jsx(p,{as:"section",id:"customer",maxW:{base:"98vw",sm:"95vw",md:"90vw",lg:"85vw"},ref:l,children:s&&s.data&&s.data.length>0&&e.jsxs(c,{flexDir:"column",gap:4,children:[e.jsxs(g,{align:"center",children:[e.jsx(n,{bg:"linear-gradient(180deg, rgba(156,200,252,1) 25%, rgba(0,62,221,1) 100%);",h:"40px",w:1}),e.jsx(i,{fontSize:{base:"lg",sm:"xl",md:"2xl"},fontWeight:"bold",children:"Categories"})]}),e.jsx(u,{columnsCountBreakPoints:{0:1,300:2,550:4,950:6,1350:8},children:e.jsx(f,{gutter:"10px",children:s.data.map(a=>e.jsxs(H,{as:h,to:a.slug,overflow:"hidden",borderRadius:20,pos:"relative",role:"group",children:[e.jsx(S,{p:0,children:a.image?e.jsx(n,{children:e.jsx(w,{id:a.id,src:a.image,alt:a.name,w:"full",_groupHover:{transform:"scale(1.1)"}})}):e.jsx(j,{loading:"lazy",w:"full",_groupHover:{transform:"scale(1.1)"},src:"https://via.placeholder.com/150",alt:a.name})}),e.jsx(k,{bg:"white",bottom:0,left:0,w:"full",transition:"all 0.3s",_groupHover:{transform:"translateY(0px)"},pos:"absolute",borderTopRadius:20,p:2,children:e.jsx(i,{noOfLines:1,textAlign:"center",fontSize:{base:"14px",sm:"16px",lg:"18px"},color:"gray.500",_groupHover:{fontWeight:500},children:a.name})})]},a.id))})}),((t=s==null?void 0:s.pagination)==null?void 0:t.total_pages)>1&&e.jsx(v,{align:"center",mr:10,justify:"center",children:x?e.jsx(b,{thickness:"4px",color:"primary.500"}):e.jsx(C,{w:"fit-content",size:"xs",variant:"unstyled",onClick:()=>d(r+8),_hover:{textDecoration:"underline"},textColor:"primary.500",children:"View More"})})]})})};export{L as default};
