import{r as p,q as W,j as s,F as t,T as r,L as z,a2 as P,H as g,I as k,ag as I,S as h,a0 as u,R as j,be as L,aK as R,bj as F}from"./index-CHqn2l2u.js";import{a as $,b as v}from"./index-CXYI0z4z.js";import{C as A}from"./chunk-YQO7BFFX-CQYSGleK.js";import{C as H}from"./chunk-FHHZMTWR-Bkx45aSm.js";import{C as N}from"./circle-plus-DR6TvVv5.js";const q=()=>{var d;const[n,f]=p.useState(5),{data:a,isPending:y,isFetching:b}=$({perPage:n}),[i,o]=p.useState(null),{isOpen:m,onOpen:w,onClose:l}=W(),c=v(),S=e=>{o(e),w()},D=async()=>{i&&(await c.mutateAsync(i),o(null),l())};return s.jsxs(t,{flexDir:"column",gap:4,children:[s.jsx(r,{fontSize:"xl",children:"My WishList"}),y?s.jsx(z,{height:window.innerHeight/2}):a.data&&a.data.length>0?s.jsx(t,{justify:"start",align:"start",flexDir:"column",gap:4,children:a.data.map(e=>{var x;return s.jsx(A,{w:{base:"full",lg:"60%"},border:"1px solid",borderRadius:0,p:0,shadow:"none",children:s.jsx(P,{to:e!=null&&e.subcategory?`/product/${e.category.slug}/${e.subcategory.slug}/${e.id}`:`/product/${e.category.slug}/${e.id}`,children:s.jsxs(H,{flexWrap:"wrap",p:4,gap:4,as:t,justify:{base:"end",md:"space-between"},align:"center",children:[s.jsxs(g,{align:"start",spacing:4,w:{base:"full",md:"60%"},children:[s.jsx(k,{src:e.image??I,alt:"No Image",w:"100px",objectFit:"cover",objectPosition:"center",aspectRatio:1/1}),s.jsxs(h,{gap:0,children:[s.jsx(r,{fontSize:{base:"14px",md:"20px"},children:e.name}),s.jsx(r,{textColor:"gray.500",fontSize:{base:"12px",md:"16px"},children:(x=e.category)==null?void 0:x.name})]})]}),s.jsxs(r,{size:"md",children:["Rs. ",e==null?void 0:e.price]}),s.jsx(g,{children:s.jsx(u,{onClick:C=>{C.preventDefault(),S(e.id)},colorScheme:"red",borderRadius:2,size:"xs",children:s.jsx(j,{as:L,cursor:"pointer"})})})]})})},e.id)})}):s.jsx(r,{textAlign:"center",fontSize:{base:"sm",md:"md",lg:"lg",xl:"xl"},fontWeight:500,children:"No items in your wishlist"}),((d=a==null?void 0:a.pagination)==null?void 0:d.total_pages)>1&&s.jsx(h,{w:{base:"full",lg:"60%"},align:"center",mr:10,justify:"center",children:b?s.jsx(R,{thickness:"4px",color:"primary.500"}):s.jsx(u,{variant:"unstyled",w:"fit-content",colorScheme:"primary",onClick:()=>f(n+5),children:s.jsx(j,{_hover:{color:"primary.600"},color:"primary.500",as:N,boxSize:6})})}),s.jsx(F,{isOpen:m,onClose:l,heading:"Delete Wishlist?",message:"Are you sure you want to delete this wishlist?",onDelete:D,isDeleting:c.isPending})]})};export{q as default};
