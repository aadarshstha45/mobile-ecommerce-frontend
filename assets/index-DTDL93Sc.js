import{aa as a,ab as d,bY as n}from"./index-X4wyQiIj.js";const r={post:"order",get:(t,o,e,s)=>`get-orders?page=${t}&&status=${o}
  ${e?`&&date_from=${e}`:""}
  ${s?`&&date_to=${s}`:""}
  `,promo_code:"is-promocode-valid"},p=()=>a({apiEndPoint:r.post,inValidateEndpoint:n.get,message:"Order placed successfully"}),u=()=>a({apiEndPoint:r.promo_code}),c=(t,o,e,s)=>d(r.get(t,o,e,s));export{u as a,c as b,p as u};
