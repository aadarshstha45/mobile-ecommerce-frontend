import{q as S,r as f,j as s,L as O,F as b,S as C,T as h,aj as T,ak as y,al as P,C as w,am as _,aI as R,an as F,U as I,a0 as L,n as M}from"./index-DqMwINjK.js";import{b as $}from"./index-zaTrdD8-.js";import"./SelectInput-CTQDdc_4.js";import{P as k}from"./PaginationButton-D1WqlBoU.js";import{C as z}from"./chunk-YQO7BFFX-BGZlorz9.js";import{C as D}from"./chunk-2EW3JUUD-CHZorT9F.js";import{T as H,a as N,b as B,c as p,d as t,e as E,f as n}from"./chunk-MGVPL3OH-CIjSFzMx.js";import{T as U}from"./chunk-B5H2YLEF-CIsZQg7h.js";import"./index.esm-BKhoN415.js";import"./chunk-H46NUPBZ-CLw7Qts3.js";import"./CaretRight-CadJDqK9.js";const W=({data:d,isPending:j})=>{const{isOpen:u,onOpen:g,onClose:m}=S(),[a,o]=f.useState(null),l=e=>{g(),o(e)},r=()=>{o(null),m()};return s.jsxs(s.Fragment,{children:[j?s.jsx(O,{height:window.innerHeight/2}):d.data.length>0?d.data.map(e=>s.jsx(z,{cursor:"pointer",zIndex:0,shadow:"none",borderRadius:0,p:0,border:"1px solid",borderColor:"#939292",mb:4,onClick:()=>l(e),children:s.jsxs(D,{as:b,justify:"space-between",align:"center",flexWrap:"wrap",gap:6,children:[s.jsxs(C,{children:[s.jsxs(h,{fontSize:{base:"sm",md:"md"},children:["Order Id: #",e.order_number]}),s.jsxs(h,{fontSize:{base:"14px",md:"16px",lg:"18px"},color:"#939292",children:["Placed On: ",e.order_date]})]}),s.jsx(C,{align:"center",gap:2,children:s.jsxs(h,{fontSize:{base:"16px",md:"18px",lg:"20px"},children:["Rs. ",e.total_amount]})})]})},e.id)):s.jsx(b,{justifyContent:"center",alignItems:"center",height:window.innerHeight/4,children:s.jsx(h,{fontSize:"lg",children:"No Orders Found"})}),a&&s.jsxs(T,{isOpen:u,onClose:r,motionPreset:"slideInTop",children:[s.jsx(y,{}),s.jsxs(P,{px:1,as:w,maxW:{base:"98vw",lg:"fit-content"},children:[s.jsx(_,{}),s.jsxs(R,{children:["Order Id: #",a.order_number]}),s.jsx(F,{children:s.jsx(H,{children:s.jsxs(N,{children:[s.jsx(B,{children:s.jsxs(p,{bg:"gray.50",children:[s.jsx(t,{children:"S.N."}),s.jsx(t,{children:"Product Name"}),s.jsx(t,{children:"Quantity"}),s.jsx(t,{children:"Price"}),s.jsx(t,{children:"Discount"}),s.jsx(t,{children:"Amount"})]})}),s.jsx(E,{children:a.order_items.map((e,x)=>{var i,c;return s.jsxs(p,{children:[s.jsx(n,{children:x+1}),s.jsx(n,{children:s.jsx(I,{as:L,to:e.product.subcategory?`/product/${(i=e.product.category)==null?void 0:i.slug}/${e.product.subcategory.slug}/${e.product.id}`:`/product/${(c=e.product.category)==null?void 0:c.slug}/${e.product.id}`,children:e.product.name})}),s.jsx(n,{children:e.quantity}),s.jsxs(n,{children:["Rs. ",e.price]}),s.jsxs(n,{children:["Rs. ",e.discount??0]}),s.jsxs(n,{children:["Rs. ",e.total]})]},x)})}),s.jsxs(U,{children:[s.jsxs(p,{children:[s.jsx(n,{colSpan:3}),s.jsx(n,{children:"Discount"}),s.jsxs(n,{children:["Rs. ",a.discount_amount??0]}),s.jsx(n,{})]}),s.jsxs(p,{children:[s.jsx(n,{colSpan:3}),s.jsx(n,{children:"Grand Total"}),s.jsx(n,{}),s.jsxs(n,{children:["Rs. ",a.total_amount]})]})]})]})})})]})]})]})},ss=({fromDate:d,toDate:j,status:u})=>{var i,c;const g=M(),m=new URLSearchParams(g.search),a=Number(m.get("page"))||1,[o,l]=f.useState(1),{data:r,isPending:e,isFetching:x}=$(o,u,d,j);return f.useEffect(()=>{l(a)},[a]),s.jsxs(b,{flexDir:"column",gap:4,children:[s.jsx(C,{gap:4}),x?s.jsx(O,{height:window.innerWidth/4}):s.jsx(W,{data:r??{data:[],message:""},isPending:e}),(r==null?void 0:r.pagination)&&r.pagination.total_pages>1&&s.jsx(k,{currentPage:((i=r==null?void 0:r.pagination)==null?void 0:i.current_page)??o,setCurrentPage:l,totalPages:((c=r==null?void 0:r.pagination)==null?void 0:c.total_pages)??10})]})};export{ss as default};
