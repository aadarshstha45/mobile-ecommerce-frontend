import{j as e,g as F,F as $,L as M,I as P,T as g,r as v,Y as _,an as k,ao as H,ap as q,aq as A,aG as E,ar as O,P as V,Q as G,ab as N,V as W,aH as Y,a as T,W as D}from"./index-BYmqbv07.js";import{a as Q,b as X,c as J}from"./index-Lqvfgcdb.js";import{T as z,a as B,b as L,c as b,d as c,e as I,f as m}from"./chunk-MGVPL3OH-PH_YHHD5.js";import"./SelectInput--iFOlXvJ.js";import{a as K}from"./TextInput-K6lDEhx3.js";import{o as U,n as S,s as Z,t as ee}from"./zod-BizRYsHx.js";import{S as se}from"./chunk-6SZ7MXCX-DrcNBBeP.js";import{F as w}from"./chunk-H46NUPBZ-B5mpJdB5.js";import{R as ae,a as re}from"./chunk-RDF2AYID-HEosFQiy.js";import{T as oe,b as te,c as ne,d as ie,e as C}from"./chunk-IAXSQ4X2-CASKHltv.js";import"./x-BBophU20.js";const le=()=>{const{data:r,isPending:t}=Q();return t?e.jsx(F,{}):r&&r.length>0?e.jsx(z,{children:e.jsxs(B,{colorScheme:"primary",children:[e.jsx(L,{children:e.jsxs(b,{children:[e.jsx(c,{children:"Product"}),e.jsx(c,{children:"Rating"}),e.jsx(c,{children:"Review"})]})}),e.jsx(I,{children:r.map((s,n)=>{var o,i,d;return e.jsxs(b,{children:[e.jsx(m,{children:e.jsxs($,{gap:4,as:M,to:s.subcategory?`/products/${(o=s.category)==null?void 0:o.slug}/${(i=s.subcategory)==null?void 0:i.slug}/${s.id}`:`/products/${(d=s.category)==null?void 0:d.slug}/${s.id}`,children:[e.jsx(P,{src:s.product.image,alt:s.product.name,boxSize:"100px",objectFit:"cover"}),e.jsx(g,{children:s.product.name})]})}),e.jsx(m,{children:s.rating}),e.jsx(m,{children:s.review})]},n)})})]})}):e.jsx(g,{children:"No reviews found"})},de=U({product_id:S(),rating:S().min(1,{message:"Rating is required"}),review:Z().min(1,{message:"Review is required"})}),ce=({onClose:r,isOpen:t,productId:s})=>{const[n,o]=v.useState(-1),{control:i,handleSubmit:d,setValue:h,reset:f,formState:{errors:a}}=_({defaultValues:{product_id:s,rating:0,review:""},resolver:ee(de)});v.useEffect(()=>{s!==null&&h("product_id",s)},[s,h]);const{mutateAsync:y,isPending:j}=X(),u=async p=>{await y(p),r()},x=()=>{r(),f(),o(-1)};return e.jsxs(k,{isOpen:t,onClose:x,motionPreset:"slideInTop",children:[e.jsx(H,{}),e.jsxs(q,{children:[e.jsx(A,{}),e.jsx(E,{children:"Add Review"}),e.jsx(O,{children:e.jsxs("form",{onSubmit:d(u),id:"review-form",noValidate:!0,children:[e.jsxs(V,{mb:4,children:[e.jsx(w,{mb:2,fontSize:{sm:"14px",md:"16px"},fontWeight:450,children:"Rating"}),e.jsx(G,{name:"rating",control:i,render:({field:{onChange:p,value:R}})=>e.jsx(ae,{value:R.toString(),onChange:p,onMouseLeave:()=>o(-1),children:e.jsx(N,{gap:0,children:[...Array(5)].map((he,l)=>e.jsxs(w,{htmlFor:`rating_${l}`,onMouseEnter:()=>o(l+1),onClick:()=>p(l+1),cursor:"pointer",children:[e.jsx(se,{w:6,h:6,color:l<(n>=0?n:R)?"yellow.400":"gray.300"}),e.jsx(re,{display:"none",id:`rating_${l}`,value:(l+1).toString()})]},l))})})}),a.rating&&e.jsx(W,{color:"red.400",fontSize:{base:"14px",md:"16px"},fontStyle:"italic",children:a.rating.message})]}),e.jsx(K,{errors:a,type:"textarea",control:i,name:"review",label:"Review",isRequired:!0})]})}),e.jsxs(Y,{gap:1,children:[e.jsx(T,{size:"sm",colorScheme:"gray",variant:"outline",onClick:x,children:"Cancel"}),e.jsx(T,{size:"sm",form:"review-form",type:"submit",isLoading:j,children:"Submit"})]})]})]})},me=()=>{const{data:r,isPending:t}=J(),[s,n]=v.useState(null),{isOpen:o,onOpen:i,onClose:d}=D(),h=a=>{n(a),i()},f=()=>{n(null),d()};return e.jsxs(e.Fragment,{children:[e.jsx(ce,{onClose:f,isOpen:o,productId:s}),t?e.jsx(F,{}):r&&r.length>0?e.jsx(z,{children:e.jsxs(B,{colorScheme:"primary",children:[e.jsx(L,{children:e.jsxs(b,{children:[e.jsx(c,{children:"Product"}),e.jsx(c,{}),e.jsx(c,{children:"Review"})]})}),e.jsx(I,{children:r.map((a,y)=>{var j,u,x;return e.jsxs(b,{children:[e.jsx(m,{children:e.jsxs($,{gap:4,as:M,to:a.subcategory?`/products/${(j=a.category)==null?void 0:j.slug}/${(u=a.subcategory)==null?void 0:u.slug}/${a.id}`:`/products/${(x=a.category)==null?void 0:x.slug}/${a.id}`,children:[e.jsx(P,{src:a.image,alt:a.name,w:{base:"100px",md:"150px"},aspectRatio:1/1}),e.jsx(g,{fontSize:{base:"14px",md:"16px",lg:"18px"},children:a.name})]})}),e.jsx(m,{}),e.jsx(m,{children:e.jsx(T,{onClick:()=>h(a.id),variant:"outline",children:"Review"})})]},y)})})]})}):e.jsx(g,{children:"No orders left to be reviewed"})]})},xe=[{name:"To Review"},{name:"Reviewed"}],we=()=>e.jsxs(oe,{isLazy:!0,position:"relative",variant:"unstyled",children:[e.jsx(te,{whiteSpace:"nowrap",overflowX:"auto",overflowY:"hidden",children:xe.map((r,t)=>e.jsx(ne,{_selected:{borderBottomColor:"primary.500"},borderBottom:"4px solid",borderBottomColor:"primary.50",fontSize:{base:"sm",md:"md",xl:"lg"},children:r.name},t))}),e.jsxs(ie,{mt:8,children:[e.jsx(C,{p:0,children:e.jsx(me,{})}),e.jsx(C,{p:0,children:e.jsx(le,{})})]})]});export{we as default};
