import{ab as a,ac as d,c0 as n}from"./index-B-OoyzKg.js";const r={post:"order",get:(t,o,e,s)=>`get-orders?page=${t}&&status=${o}
  ${e?`&&date_from=${e}`:""}
  ${s?`&&date_to=${s}`:""}
  `,promo_code:"is-promocode-valid"},i=()=>a({apiEndPoint:r.post,inValidateEndpoint:n.get,message:"Order placed successfully"}),p=()=>a({apiEndPoint:r.promo_code}),u=(t,o,e,s)=>d(r.get(t,o,e,s));export{p as a,u as b,i as u};
