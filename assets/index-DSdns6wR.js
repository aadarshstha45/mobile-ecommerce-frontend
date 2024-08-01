import{aR as R,aw as L,j as e,L as y,F as w,a4 as f,I as P,T as x,V as B,r as S,aC as A,aD as I,aE as O,aF as V,aS as k,aG as _,aT as D,a2 as h,Q as H}from"./index-B3HMm6OL.js";import{T as F,a as $,b as C,d as l,e as M,c as E,f as c}from"./chunk-MGVPL3OH-BODHdkQH.js";import"./SelectInput-DZ1FMbiG.js";import{a as T}from"./TextInput-88ZF9PPT.js";import{T as N,b as G,c as Q,d as q,e as v}from"./chunk-IAXSQ4X2-C3QwfMFU.js";import"./chunk-H46NUPBZ-ekvPuvB3.js";import"./x-Cr2WzKHY.js";const u={add:"product-review",getTo:"product-to-be-reviewed",getReviewed:"product-review"},J=()=>L({apiEndPoint:u.add,inValidateEndpoint:u.getTo,message:"Review added successfully"}),K=()=>R({apiEndPoint:u.getTo}),U=()=>R({apiEndPoint:u.getReviewed}),W=()=>{const{data:n,isPending:t}=U();return t?e.jsx(y,{}):n&&n.length>0?e.jsx(F,{children:e.jsxs($,{colorScheme:"primary",children:[e.jsxs(C,{children:[e.jsx(l,{children:"Product"}),e.jsx(l,{children:"Rating"}),e.jsx(l,{children:"Review"})]}),e.jsx(M,{children:n.map((s,i)=>{var r,o,d;return e.jsxs(E,{children:[e.jsx(c,{children:e.jsxs(w,{gap:4,as:f,to:s.subcategory?`/products/${(r=s.category)==null?void 0:r.slug}/${(o=s.subcategory)==null?void 0:o.slug}/${s.id}`:`/products/${(d=s.category)==null?void 0:d.slug}/${s.id}`,children:[e.jsx(P,{src:s.product.image,alt:s.product.name,boxSize:"100px",objectFit:"cover"}),e.jsx(x,{children:s.product.name})]})}),e.jsx(c,{children:s.rating}),e.jsx(c,{children:s.review})]},i)})})]})}):e.jsx(x,{children:"No reviews found"})},X=({onClose:n,isOpen:t,productId:s})=>{console.log(s);const{control:i,handleSubmit:r,setValue:o}=B({defaultValues:{product_id:s,rating:4,review:"Hello"}});S.useEffect(()=>{s!==null&&o("product_id",s)},[s,o]);const{mutateAsync:d,isPending:j}=J(),m=async a=>{await d(a),n()};return e.jsxs(A,{isOpen:t,onClose:n,motionPreset:"slideInTop",children:[e.jsx(I,{}),e.jsxs(O,{children:[e.jsx(V,{}),e.jsx(k,{children:"Add Review"}),e.jsx(_,{children:e.jsxs("form",{onSubmit:r(m),id:"review-form",children:[e.jsx(T,{control:i,name:"rating",label:"Rating"}),e.jsx(T,{type:"textarea",control:i,name:"review",label:"Review"})]})}),e.jsxs(D,{gap:1,children:[e.jsx(h,{size:"sm",colorScheme:"gray",variant:"outline",onClick:n,children:"Cancel"}),e.jsx(h,{size:"sm",form:"review-form",type:"submit",isLoading:j,children:"Submit"})]})]})]})},Y=()=>{const{data:n,isPending:t}=K(),[s,i]=S.useState(null),{isOpen:r,onOpen:o,onClose:d}=H(),j=a=>{console.log(a),i(a),o()},m=()=>{i(null),d()};return e.jsxs(e.Fragment,{children:[e.jsx(X,{onClose:m,isOpen:r,productId:s}),t?e.jsx(y,{}):n&&n.length>0?e.jsx(F,{children:e.jsxs($,{colorScheme:"primary",children:[e.jsxs(C,{children:[e.jsx(l,{children:"Product"}),e.jsx(l,{}),e.jsx(l,{children:"Review"})]}),e.jsx(M,{children:n.map((a,z)=>{var p,g,b;return e.jsxs(E,{children:[e.jsx(c,{children:e.jsxs(w,{gap:4,as:f,to:a.subcategory?`/products/${(p=a.category)==null?void 0:p.slug}/${(g=a.subcategory)==null?void 0:g.slug}/${a.id}`:`/products/${(b=a.category)==null?void 0:b.slug}/${a.id}`,children:[e.jsx(P,{src:a.image,alt:a.name,w:{base:"100px",md:"150px"},aspectRatio:1/1}),e.jsx(x,{fontSize:{base:"14px",md:"16px",lg:"18px"},children:a.name})]})}),e.jsx(c,{}),e.jsx(c,{children:e.jsx(h,{onClick:()=>j(a.id),variant:"outline",children:"Review"})})]},z)})})]})}):e.jsx(x,{children:"No orders left to be reviewed"})]})},Z=[{name:"To Review"},{name:"Reviewed"}],re=()=>e.jsxs(N,{isLazy:!0,position:"relative",variant:"unstyled",children:[e.jsx(G,{children:Z.map((n,t)=>e.jsx(Q,{_selected:{textColor:"white",bg:"primary.500",borderRadius:2},fontSize:{base:"sm",md:"md",xl:"lg"},children:n.name},t))}),e.jsxs(q,{mt:8,children:[e.jsx(v,{p:0,children:e.jsx(Y,{})}),e.jsx(v,{p:0,children:e.jsx(W,{})})]})]});export{re as default};
