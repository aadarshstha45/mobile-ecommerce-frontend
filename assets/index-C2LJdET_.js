import{j as e,L as M,F as R,a2 as $,I as z,T as h,r as v,ak as _,al as k,am as H,an as q,aK as A,ao as E,a5 as O,H as V,aL as D,aM as N,a0 as w,q as G}from"./index-DBpBJgBg.js";import{a as K,b as W,c as X}from"./index-Hp0631Fm.js";import{T as L,a as P,b as B,c as b,d,e as I,f as m}from"./chunk-MGVPL3OH-DAbw1rQN.js";import{u as Y,C as J}from"./index.esm-CUKyRdNH.js";import"./SelectInput-BBhmW8Wo.js";import{a as Q}from"./TextInput-DTWfQ68C.js";import{o as U,n as T,s as Z,t as ee}from"./zod-Bo22Eriy.js";import{S as se}from"./chunk-6SZ7MXCX-CgAdxtCa.js";import{F as C}from"./chunk-H46NUPBZ-Dqz4aTw6.js";import{R as ae,a as re}from"./chunk-RDF2AYID-CYannJs9.js";import{T as oe,a as te,b as ne,c as ie,d as F}from"./chunk-IAXSQ4X2-CUNXezjC.js";import"./x-DppQxKWf.js";const le=()=>{const{data:r,isPending:t}=K();return t?e.jsx(M,{}):r&&r.length>0?e.jsx(L,{children:e.jsxs(P,{colorScheme:"primary",children:[e.jsx(B,{children:e.jsxs(b,{children:[e.jsx(d,{children:"Product"}),e.jsx(d,{children:"Rating"}),e.jsx(d,{children:"Review"})]})}),e.jsx(I,{children:r.map((s,n)=>{var o,i,c;return e.jsxs(b,{children:[e.jsx(m,{children:e.jsxs(R,{gap:4,as:$,to:s.subcategory?`/products/${(o=s.category)==null?void 0:o.slug}/${(i=s.subcategory)==null?void 0:i.slug}/${s.id}`:`/products/${(c=s.category)==null?void 0:c.slug}/${s.id}`,children:[e.jsx(z,{src:s.product.image,alt:s.product.name,boxSize:"100px",objectFit:"cover"}),e.jsx(h,{children:s.product.name})]})}),e.jsx(m,{children:s.rating}),e.jsx(m,{children:s.review})]},n)})})]})}):e.jsx(h,{children:"No reviews found"})},ce=U({product_id:T(),rating:T().min(1,{message:"Rating is required"}),review:Z().min(1,{message:"Review is required"})}),de=({onClose:r,isOpen:t,productId:s})=>{const[n,o]=v.useState(-1),{control:i,handleSubmit:c,setValue:u,reset:f,formState:{errors:a}}=Y({defaultValues:{product_id:s,rating:0,review:""},resolver:ee(ce)});v.useEffect(()=>{s!==null&&u("product_id",s)},[s,u]);const{mutateAsync:y,isPending:j}=W(),p=async g=>{await y(g),r()},x=()=>{r(),f(),o(-1)};return e.jsxs(_,{isOpen:t,onClose:x,motionPreset:"slideInTop",children:[e.jsx(k,{}),e.jsxs(H,{children:[e.jsx(q,{}),e.jsx(A,{children:"Add Review"}),e.jsx(E,{children:e.jsxs("form",{onSubmit:c(p),id:"review-form",noValidate:!0,children:[e.jsxs(O,{mb:4,children:[e.jsx(C,{mb:2,fontSize:{sm:"14px",md:"16px"},fontWeight:450,children:"Rating"}),e.jsx(J,{name:"rating",control:i,render:({field:{onChange:g,value:S}})=>e.jsx(ae,{value:S.toString(),onChange:g,onMouseLeave:()=>o(-1),children:e.jsx(V,{gap:0,children:[...Array(5)].map((he,l)=>e.jsxs(C,{htmlFor:`rating_${l}`,onMouseEnter:()=>o(l+1),onClick:()=>g(l+1),cursor:"pointer",children:[e.jsx(se,{w:6,h:6,color:l<(n>=0?n:S)?"yellow.400":"gray.300"}),e.jsx(re,{display:"none",id:`rating_${l}`,value:(l+1).toString()})]},l))})})}),a.rating&&e.jsx(D,{color:"red.400",fontSize:{base:"14px",md:"16px"},fontStyle:"italic",children:a.rating.message})]}),e.jsx(Q,{errors:a,type:"textarea",control:i,name:"review",label:"Review",isRequired:!0})]})}),e.jsxs(N,{gap:1,children:[e.jsx(w,{size:"sm",colorScheme:"gray",variant:"outline",onClick:x,children:"Cancel"}),e.jsx(w,{size:"sm",form:"review-form",type:"submit",isLoading:j,children:"Submit"})]})]})]})},me=()=>{const{data:r,isPending:t}=X(),[s,n]=v.useState(null),{isOpen:o,onOpen:i,onClose:c}=G(),u=a=>{n(a),i()},f=()=>{n(null),c()};return e.jsxs(e.Fragment,{children:[e.jsx(de,{onClose:f,isOpen:o,productId:s}),t?e.jsx(M,{}):r&&r.length>0?e.jsx(L,{children:e.jsxs(P,{colorScheme:"primary",children:[e.jsx(B,{children:e.jsxs(b,{children:[e.jsx(d,{children:"Product"}),e.jsx(d,{}),e.jsx(d,{children:"Review"})]})}),e.jsx(I,{children:r.map((a,y)=>{var j,p,x;return e.jsxs(b,{children:[e.jsx(m,{children:e.jsxs(R,{gap:4,as:$,to:a.subcategory?`/products/${(j=a.category)==null?void 0:j.slug}/${(p=a.subcategory)==null?void 0:p.slug}/${a.id}`:`/products/${(x=a.category)==null?void 0:x.slug}/${a.id}`,children:[e.jsx(z,{src:a.image,alt:a.name,w:{base:"100px",md:"150px"},aspectRatio:1/1}),e.jsx(h,{fontSize:{base:"14px",md:"16px",lg:"18px"},children:a.name})]})}),e.jsx(m,{}),e.jsx(m,{children:e.jsx(w,{onClick:()=>u(a.id),variant:"outline",children:"Review"})})]},y)})})]})}):e.jsx(h,{children:"No orders left to be reviewed"})]})},xe=[{name:"To Review"},{name:"Reviewed"}],Ce=()=>e.jsxs(R,{w:"full",flexDir:"column",gap:4,children:[e.jsx(h,{fontSize:"xl",children:"My Reviews"}),e.jsxs(oe,{isLazy:!0,position:"relative",variant:"unstyled",children:[e.jsx(te,{whiteSpace:"nowrap",overflowX:"auto",overflowY:"hidden",children:xe.map((r,t)=>e.jsx(ne,{_selected:{borderBottomColor:"primary.500"},borderBottom:"6px solid",borderBottomColor:"primary.50",fontSize:{base:"sm",md:"md",xl:"lg"},whiteSpace:"nowrap",transition:"border-bottom 0.2s ease-in-out",children:r.name},t))}),e.jsxs(ie,{mt:8,children:[e.jsx(F,{p:0,children:e.jsx(me,{})}),e.jsx(F,{p:0,children:e.jsx(le,{})})]})]})]});export{Ce as default};
