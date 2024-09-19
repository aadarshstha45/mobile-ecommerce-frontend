import{a9 as a,aa as d,b_ as p}from"./index-DXOl-lRy.js";const r={post:"order",get:(t,o,e,s)=>`get-orders?page=${t}&&status=${o}
    ${e?`&&date_from=${e}`:""}
    ${s?`&&date_to=${s}`:""}
    `,promo_code:"is-promocode-valid"},i=()=>a({apiEndpoint:r.post,inValidateEndpoints:[p.get],message:"Order placed successfully"}),u=()=>a({apiEndpoint:r.promo_code}),c=(t,o,e,s)=>d({apiEndpoint:r.get(t,o,e,s)});export{u as a,c as b,i as u};
