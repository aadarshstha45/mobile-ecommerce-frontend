import{o as p,j as e,s as m,y as u,e as f,F as t,T as o,C as y,A as b,ab as T,a as l,L as d}from"./index-BYmqbv07.js";import{u as g,T as w,a as S,b as k,c,d as a,e as C,f as s}from"./chunk-MGVPL3OH-PH_YHHD5.js";import{T as R}from"./chunk-B5H2YLEF-DjkOq_PW.js";var x=p((n,r)=>{const{placement:i="bottom",...h}=n,j=g();return e.jsx(m.caption,{...h,ref:r,__css:{...j.caption,captionSide:i}})});x.displayName="TableCaption";/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=u("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]),N=()=>{const n=f().state;return console.log(n),n?e.jsx(y,{maxW:{base:"98vw",md:"90vw",xl:"80vw"},py:10,children:e.jsx(t,{justify:"center",align:"center",minH:window.innerHeight/1.5,children:e.jsxs(t,{flexDir:"column",gap:2,align:"center",w:"full",children:[e.jsx(t,{w:12,h:12,bg:"primary.200",rounded:"full",justify:"center",align:"center",children:e.jsx(b,{as:z,w:10,h:10,color:"white"})}),e.jsx(o,{fontSize:{base:"20px",md:"22px",xl:"24px"},fontWeight:600,children:"Thank you for your purchase!"}),e.jsx(o,{fontSize:{base:"16px",md:"18px",xl:"20px"},children:"Your order details:"}),e.jsx(w,{mt:-2,children:e.jsxs(S,{children:[e.jsxs(x,{fontSize:{base:"16px",md:"18px",xl:"20px"},textAlign:"left",placement:"top",px:0,color:"#000",children:["Order Number: #",n.data.order_number]}),e.jsx(k,{children:e.jsxs(c,{bg:"gray.50",children:[e.jsx(a,{children:"S.N."}),e.jsx(a,{children:"Product Name"}),e.jsx(a,{children:"Quantity"}),e.jsx(a,{children:"Price"}),e.jsx(a,{children:"Discount"}),e.jsx(a,{children:"Amount"})]})}),e.jsx(C,{children:n.products.map((r,i)=>e.jsxs(c,{children:[e.jsx(s,{children:i+1}),e.jsx(s,{children:r.product_name}),e.jsx(s,{children:r.quantity}),e.jsxs(s,{children:["Rs. ",r.price]}),e.jsxs(s,{children:["Rs. ",r.discount??0]}),e.jsxs(s,{children:["Rs. ",r.total]})]},i))}),e.jsxs(R,{children:[e.jsxs(c,{children:[e.jsx(s,{colSpan:3}),e.jsx(s,{children:"Discount"}),e.jsxs(s,{children:["Rs. ",n.data.discount_amount??0]}),e.jsx(s,{})]}),e.jsxs(c,{children:[e.jsx(s,{colSpan:3}),e.jsx(s,{children:"Grand Total"}),e.jsx(s,{}),e.jsxs(s,{children:["Rs. ",n.data.total_amount]})]})]})]})}),e.jsxs(T,{mt:4,children:[e.jsx(l,{as:d,to:"/shop",size:"sm",colorScheme:"primary",children:"Shop More"}),e.jsx(l,{as:d,to:"/profile/my-orders",size:"sm",colorScheme:"primary",children:"View Order"})]})]})})}):e.jsx(t,{justify:"center",align:"center",minH:window.innerHeight/1.5,children:e.jsx(o,{fontSize:{base:"20px",md:"22px",xl:"24px"},children:"No order found!"})})};export{N as default};
