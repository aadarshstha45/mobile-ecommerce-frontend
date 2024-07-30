import{aD as t,aE as a}from"./index--ZeW-1SI.js";const r={post:"/order",get:(s,e,o)=>`/get-orders?page=${s}
  ${e?`&&date_from=${e}`:""}
  ${o?`&&date_to=${o}`:""}
  `,promo_code:"is-promocode-valid"},c=()=>t({apiEndPoint:r.post,message:"Order placed successfully"}),n=()=>t({apiEndPoint:r.promo_code}),p=(s,e,o)=>a(r.get(s,e,o));export{n as a,p as b,c as u};
