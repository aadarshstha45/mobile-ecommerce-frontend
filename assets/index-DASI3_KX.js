const __vite__fileDeps=["assets/Sales-pI7mbXg5.js","assets/index--ZeW-1SI.js","assets/index-CShizRo1.css","assets/index-DR0OW3dd.js","assets/ArrowForward-NgH6KPqS.js","assets/index-DA52rhom.js","assets/index-BR7D5q_Y.js","assets/index-C76BBuD7.js","assets/chunk-2EW3JUUD-BwlU0vii.js","assets/chunk-YQO7BFFX-D0b2JdOv.js","assets/chunk-FHHZMTWR-BgpogAEP.js","assets/shopping-bag-_hUQND5B.js","assets/circle-plus-NTsZb8AV.js","assets/Customer-DoTVGM4i.js","assets/chunk-ZPFGWTBB-DKeb5TCQ.js","assets/NewArrivals-BlDCoER5.js","assets/Categories-DPzBX4SX.js","assets/Discount-4wCp2VHZ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as o,_ as t,j as e,F as n,B as _,I as p}from"./index--ZeW-1SI.js";import{S as u,A as I,a as g}from"./swiper-bundle-DRHxUFHm.js";const i="/assets/Image1-DB3VIjFT.png",l="/assets/Image2-DgtTZVAH.png",x=o.lazy(()=>t(()=>import("./Sales-pI7mbXg5.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]))),j=o.lazy(()=>t(()=>import("./Customer-DoTVGM4i.js"),__vite__mapDeps([13,1,2,11,14]))),E=o.lazy(()=>t(()=>import("./NewArrivals-BlDCoER5.js"),__vite__mapDeps([15,1,2,5,6,7,8,9,10,11,12]))),y=o.lazy(()=>t(()=>import("./Categories-DPzBX4SX.js"),__vite__mapDeps([16,1,2,7,12,9,8,10]))),v=o.lazy(()=>t(()=>import("./Discount-4wCp2VHZ.js"),__vite__mapDeps([17,1,2,4,14]))),a=[{id:1,src:i,alt:"Image1"},{id:2,src:l,alt:"Image2"},{id:3,src:i,alt:"Image3"},{id:4,src:l,alt:"Image4"}],h=()=>{const[r,c]=o.useState({}),m=s=>{c(d=>({...d,[s]:!0}))};return e.jsxs(n,{maxW:"100vw",overflow:"hidden",flexDir:"column",gap:10,children:[e.jsx(u,{className:"hero-slider",slidesPerView:1,loop:!0,autoplay:{delay:3e3},speed:3e3,modules:[I],children:a==null?void 0:a.map(s=>e.jsxs(g,{className:"hero-slide",children:[!r[s.id]&&e.jsx(_,{bg:"secondary.50",w:"full",h:"full"},s.id),e.jsx(p,{src:s.src,alt:s.alt,onLoad:()=>m(s.id),opacity:r[s.id]?1:0,objectFit:"cover",objectPosition:"center",transition:"opacity 0.3s ease-in-out",w:"full",aspectRatio:4/3})]},s.id))}),e.jsx(x,{}),e.jsx(y,{}),e.jsx(j,{}),e.jsx(E,{}),e.jsx(v,{})]})};export{h as default};
