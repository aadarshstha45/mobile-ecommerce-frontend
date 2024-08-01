import{aw as a,ax as d}from"./index-_ZZwEaoi.js";const t={post:"order",get:(o,r,e,s)=>`get-orders?page=${o}&&status=${r}
  ${e?`&&date_from=${e}`:""}
  ${s?`&&date_to=${s}`:""}
  `,promo_code:"is-promocode-valid"},c=()=>a({apiEndPoint:t.post,message:"Order placed successfully"}),n=()=>a({apiEndPoint:t.promo_code}),p=(o,r,e,s)=>d(t.get(o,r,e,s));export{n as a,p as b,c as u};
