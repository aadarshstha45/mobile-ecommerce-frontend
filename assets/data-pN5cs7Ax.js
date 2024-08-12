import{j as e,h as p,E as S,Q as y,B as P,r as h,aV as k,H as F,ah as u,an as g,W as M,S as j,aW as _,ad as A,aX as z,aY as D,aF as m,aZ as B,a8 as I,a_ as H,ab as L,aa as $,ac as E}from"./index-CU6XIhgo.js";import{i as N,j as O,A as V,e as W,f as R,M as T,h as Q,g as X,P as Y,c as Z,d as q}from"./index-DOWy0TPL.js";import{C as G}from"./chevron-right-ZZ2aeBHm.js";var c=(a,r)=>r?`${a}.${r}, ${r}`:void 0;function w(a){var r;const{bg:s,bgColor:t,backgroundColor:o,shadow:l,boxShadow:d,shadowColor:n}=a,{getArrowProps:i,getArrowInnerProps:v}=N(),f=O(),b=(r=s??t)!=null?r:o,C=l??d;return e.jsx(p.div,{...i(),className:"chakra-popover__arrow-positioner",children:e.jsx(p.div,{className:S("chakra-popover__arrow",a.className),...v(a),__css:{"--popper-arrow-shadow-color":c("colors",n),"--popper-arrow-bg":c("colors",b),"--popper-arrow-shadow":c("shadows",C),...f.arrow}})})}w.displayName="PopoverArrow";/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=y("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);function x({title:a,children:r,defaultExpanded:s}){return e.jsx(V,{allowToggle:!0,defaultIndex:s?[0]:void 0,children:e.jsx(W,{minW:"100%",children:({isExpanded:t})=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:e.jsxs(R,{w:"100%",children:[e.jsx(P,{as:"span",flex:1,textAlign:"left",children:a}),t?e.jsx(T,{fontSize:"12px"}):e.jsx(Q,{fontSize:"12px"})]})}),e.jsx(X,{display:"flex",flexDir:"column",gap:2,p:0,pb:4,children:r})]})})})}const se=()=>{var d;const[a,r]=h.useState(10),{data:s,isFetching:t}=k(a),[o,l]=h.useState(null);return(s==null?void 0:s.data.length)>0&&e.jsxs(x,{defaultExpanded:!0,title:"Categories",children:[s.data.map(n=>e.jsxs(Y,{defaultIsOpen:!0,isLazy:!0,trigger:"hover",placement:"right",children:[e.jsx(Z,{children:e.jsxs(F,{justify:"space-between",onMouseEnter:()=>{l(n.id)},_hover:{bg:"gray.100"},p:2,cursor:"pointer",children:[e.jsx(u,{fontSize:{base:"14px",md:"16px"},as:g,to:`/${n.slug}`,children:n.name}),o===n.id&&n.subcategories&&n.subcategories.length>0&&e.jsx(M,{as:G,boxSize:6})]})}),o===n.id&&n.subcategories&&n.subcategories.length>0&&e.jsxs(q,{display:{base:"none",md:"flex"},onMouseLeave:()=>{l(null)},zIndex:10,border:"1px solid",px:0,w:"fit-content",flexDir:"column",gap:2,children:[e.jsx(w,{shadow:"none"}),n.subcategories.map(i=>e.jsx(j,{gap:2,children:e.jsx(u,{fontSize:{base:"14px",md:"16px"},as:g,_hover:{bg:"gray.100"},p:2,to:`/${n.slug}/${i.slug}`,children:i.name},i.id)},i.id))]})]},n.id)),((d=s==null?void 0:s.pagination)==null?void 0:d.total_pages)>1&&(t?e.jsx(_,{size:"xs",color:"primary.500"}):e.jsx(A,{w:"fit-content",size:"xs",variant:"unstyled",onClick:()=>r(a+5),_hover:{textDecoration:"underline"},textColor:"primary.500",children:"View More"}))]})},ae=({handleSizeSelect:a,handleColorSelect:r})=>{const{data:s}=z(),{data:t}=D();return e.jsxs(j,{gap:4,children:[t&&t.length>0&&e.jsx(x,{title:"Colors",children:t.map(o=>e.jsx(m,{px:2,colorScheme:"primary",onChange:l=>r(l,o.id),value:o.id,children:o.name},o.id))}),s&&s.length>0&&e.jsx(x,{title:"Sizes",children:s.map(o=>e.jsx(m,{px:2,colorScheme:"primary",onChange:l=>a(l,o.id),value:o.id,children:o.name},o.id))})]})},re=({isOpen:a,onClose:r,children:s})=>e.jsxs(B,{isOpen:a,onClose:r,placement:"left",children:[e.jsx(I,{}),e.jsxs(H,{children:[e.jsx(L,{}),e.jsx($,{borderBottom:"1px solid #D9D9D9",children:"Filter"}),e.jsx(E,{display:"flex",gap:4,flexDir:"column",children:s})]})]}),oe=[{value:"",label:"Best Match"},{value:"newest",label:"Newest"},{value:"oldest",label:"Oldest"},{value:"price-asc",label:"Price: Low to High"},{value:"price-desc",label:"Price: High to Low"}];export{se as C,re as F,ee as S,ae as a,oe as s};
