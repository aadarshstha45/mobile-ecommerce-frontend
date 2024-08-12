import{au as a,av as d,c0 as n}from"./index-CU6XIhgo.js";const r={post:"order",get:(t,o,e,s)=>`get-orders?page=${t}&&status=${o}
  ${e?`&&date_from=${e}`:""}
  ${s?`&&date_to=${s}`:""}
  `,promo_code:"is-promocode-valid"},c=()=>a({apiEndPoint:r.post,inValidateEndpoint:n.get,message:"Order placed successfully"}),i=()=>a({apiEndPoint:r.promo_code}),p=(t,o,e,s)=>d(r.get(t,o,e,s));export{i as a,p as b,c as u};
