import{ab as a,ac as i,bD as l}from"./index-Cn-ixLuw.js";const s={post:"wishlist",get:e=>`wishlist${e?`?per_page=${e}`:""}`,delete:"wishlist/:id"},o=()=>a({apiEndPoint:s.post,inValidateEndpoint:s.get(),message:"Wishlist saved successfully"}),u=({perPage:e,enabled:t})=>e?i(s.get(e),void 0,t):i(s.get(),void 0,t),d=()=>l({apiEndPoint:s.delete,inValidateEndpoint:s.get(),message:"Item removed successfully"});export{u as a,d as b,o as u};
