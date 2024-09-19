import{n as N,r as l,l as k,j as e,F as m,B as _,I as A,ai as M,T as c,S as G,H as S,Z as I,ac as v}from"./index-DqMwINjK.js";import{a as H}from"./index-zaTrdD8-.js";import{a as J}from"./TextInput-Sb6gmVGI.js";import{u as V}from"./orderStore-EHekeXz8.js";import{u as Q}from"./index.esm-BKhoN415.js";import{S as X,G as C}from"./chunk-ZPFGWTBB-BSnAZ4I_.js";import"./X-CpqrLOaj.js";import"./chunk-H46NUPBZ-CLw7Qts3.js";const so=({stepProps:q})=>{const P=N(),n=P.state,[d,j]=l.useState([]),[f]=k("(max-width: 469px)"),[p,y]=l.useState(0),[a,b]=l.useState(0),[E,u]=l.useState(0),[g,x]=l.useState(0),[w,D]=l.useState(""),[W,B]=l.useState(""),{control:F,handleSubmit:L}=Q({defaultValues:{total_amount:"",promo_code:""}}),z=H(),{setStepData:O}=V();l.useEffect(()=>{if(n){if(n!=null&&n.fromCart){const o=sessionStorage.getItem("cartItems");if(o){const s=JSON.parse(o);j(s);let i=0;s.forEach(t=>{i+=t.totalPrice*t.quantity});let r=0;s.forEach(t=>{r+=t.discountedPrice>0?t.discountedPrice*t.quantity:t.totalPrice*t.quantity}),y(i),b(r),u(r)}}else if(n!=null&&n.fromProduct){const o=sessionStorage.getItem("buyItems");if(o){const s=JSON.parse(o);j(s);let i=0;s.forEach(t=>{i+=t.totalPrice*t.quantity});let r=0;s.forEach(t=>{r+=t.discountedPrice>0?t.discountedPrice*t.quantity:t.totalPrice*t.quantity}),y(i),b(r),u(r)}}}else j([])},[P.pathname,n==null?void 0:n.data]);const R=async o=>{try{const s=await z.mutateAsync({...o,total_amount:a>0?a:p});if(s.data.valid){D(o.promo_code);const i=s.data.type,r=parseFloat(s.data.rate),t=parseFloat(s.data.max_discount);if(i==="percentage"){const h=a>0?a*r/100:p*r/100;if(h>=t){x(t),u(a>0?a-t:p-t);return}else{x(h),u(a>0?a-h:p-h);return}}else{x(r),u(a>0?a-r:p-g);return}}else B(s.data.error),x(0)}catch(s){console.error("Error applying promo code:",s),x(0)}},T=()=>{d&&d.length>0?(O({order_items:d.map(o=>{var s,i,r;return{cart_id:(o==null?void 0:o.id)??null,product_id:(s=o==null?void 0:o.product)==null?void 0:s.id,quantity:o==null?void 0:o.quantity,discount:o.discountedPrice?o.totalPrice-o.discountedPrice:0,price:o.size?o.size.price:o.product.price,size_id:(i=o==null?void 0:o.size)==null?void 0:i.id,color_id:(r=o==null?void 0:o.color)==null?void 0:r.id,total:o.discountedPrice??o.totalPrice}}),promo_discount:g,total_amount:a??p,promo_code:w??null,from:n!=null&&n.fromCart?"cart":"product"}),q.nextStep()):v.error("No items in the cart")};return e.jsxs(X,{columns:{base:1,md:2},gap:6,alignItems:"start",children:[e.jsx(C,{colSpan:1,children:e.jsx(m,{flexDir:"column",gap:4,children:d&&d.map(o=>e.jsx(_,{borderBottom:"1px solid #939292",py:6,children:e.jsxs(m,{gap:8,flexDir:f?"column":"row",align:f?"start":"center",children:[e.jsx(A,{src:o.product.image??M,alt:o.product.name,objectFit:o.product.image?"cover":"contain",objectPosition:"center",w:{base:"100px",md:"150px"},aspectRatio:1/1}),e.jsxs(m,{flexDir:"column",gap:3,minW:f?"100%":"50%",w:f?"100%":"50%",children:[e.jsx(c,{fontWeight:600,noOfLines:2,fontSize:"md",children:o.product.name}),o.size&&e.jsxs(c,{fontSize:"md",children:["Size: ",o.size.name]}),o.color&&e.jsxs(c,{fontSize:"md",children:["Color: ",o.color.name]})]}),e.jsxs(G,{gap:0,children:[e.jsxs(c,{fontWeight:600,fontSize:{base:"12px",md:"14px",xl:"16px"},children:["Rs.",o.discountedPrice>0?o.discountedPrice:o.totalPrice]}),e.jsxs(c,{alignSelf:"end",fontSize:{base:"12px",md:"14px"},children:["X ",o.quantity]})]})]},o.id)},o.id))})}),e.jsxs(C,{as:m,gap:2,flexDir:"column",colSpan:1,w:{md:"70%"},justifySelf:{md:"end"},children:[e.jsx("form",{onSubmit:L(R),children:e.jsxs(S,{py:2,align:"start",children:[e.jsx(J,{name:"promo_code",control:F,placeholder:"Enter Promo Code",errorMessage:W}),e.jsx(I,{type:"submit",isLoading:z.isPending,fontSize:{sm:"14px",md:"16px"},fontWeight:400,children:"Apply"})]})}),d&&(d==null?void 0:d.map(o=>e.jsxs(S,{justify:"space-between",py:2,children:[e.jsx(c,{noOfLines:2,fontWeight:500,fontSize:{base:"14px",md:"16px",xl:"18px"},children:o.product.name}),e.jsxs(c,{textColor:"primary.500",fontSize:{base:"12px",md:"14px",xl:"16px"},children:["Rs."," ",o.discountedPrice>0?o.discountedPrice*o.quantity:o.totalPrice*o.quantity]})]},o.id))),e.jsxs(S,{justify:"space-between",py:2,children:[e.jsx(c,{noOfLines:2,fontWeight:500,fontSize:{base:"14px",md:"16px",xl:"18px"},children:"Discount"}),e.jsxs(c,{textColor:"primary.500",fontSize:{base:"12px",md:"14px",xl:"16px"},children:["- Rs. ",g]})]}),e.jsx(_,{w:"full",h:"1px",bg:"#939292"}),e.jsxs(S,{justify:"space-between",py:2,children:[e.jsx(c,{fontWeight:500,fontSize:{base:"14px",md:"16px",xl:"18px"},children:"Subtotal"}),e.jsxs(c,{textColor:"primary.500",fontSize:{base:"12px",md:"14px",xl:"16px"},children:["Rs. ",E]})]}),e.jsx(I,{onClick:T,colorScheme:"primary",mt:4,children:"Checkout"})]})]})};export{so as default};
