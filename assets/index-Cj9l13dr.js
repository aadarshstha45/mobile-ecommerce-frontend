const __vite__fileDeps=["assets/Sales-D0lThe-n.js","assets/index-CHqn2l2u.js","assets/index-oPW0Mxol.css","assets/index-DmjUOaPs.js","assets/ArrowForward-DRgFkeiN.js","assets/index-CoO67HqL.js","assets/index-CXYI0z4z.js","assets/GoogleIcon-mZ5X8_-P.js","assets/index.esm-CKUlnAtw.js","assets/SelectInput-DSLuIYVe.js","assets/chunk-H46NUPBZ-BU6tGVc5.js","assets/TextInput-om9h2xqn.js","assets/x-D2h_KaVa.js","assets/auth-DU7fQ92f.js","assets/zod-BnQ4q-Hn.js","assets/chunk-EC6XFFZH-D65i7NVE.js","assets/chunk-6SZ7MXCX-H2UkuL4n.js","assets/index-GiGp-AZ7.js","assets/chunk-2EW3JUUD-DeeEOlei.js","assets/chunk-YQO7BFFX-CQYSGleK.js","assets/chunk-FHHZMTWR-Bkx45aSm.js","assets/shopping-bag-B8N_x3AI.js","assets/Customer-IJ7Jjm4v.js","assets/chunk-ZPFGWTBB-BB86zPqm.js","assets/NewArrivals-BTO0P_-A.js","assets/Categories-QEHm1Sm7.js","assets/Discount-Db7y66UC.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{u as c,r as o,_ as t,j as e,F as n,B as _,I as u}from"./index-CHqn2l2u.js";import{S as m,A as p,a as x}from"./swiper-bundle-B7racxr1.js";const j={getSliders:"sliders"},E=()=>c({apiEndPoint:j.getSliders}),y=o.lazy(()=>t(()=>import("./Sales-D0lThe-n.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]))),g=o.lazy(()=>t(()=>import("./Customer-IJ7Jjm4v.js"),__vite__mapDeps([22,1,2,21,23]))),h=o.lazy(()=>t(()=>import("./NewArrivals-BTO0P_-A.js"),__vite__mapDeps([24,1,2,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]))),v=o.lazy(()=>t(()=>import("./Categories-QEHm1Sm7.js"),__vite__mapDeps([25,1,2,17,19,18,20]))),I=o.lazy(()=>t(()=>import("./Discount-Db7y66UC.js"),__vite__mapDeps([26,1,2,4,23]))),S=()=>{const[r,a]=o.useState({}),l=s=>{a(d=>({...d,[s]:!0}))},{data:i}=E();return e.jsxs(n,{maxW:"100vw",overflow:"hidden",flexDir:"column",gap:10,children:[e.jsx(m,{className:"hero-slider",slidesPerView:1,loop:!0,autoplay:{delay:3e3},speed:3e3,modules:[p],children:i==null?void 0:i.map(s=>e.jsxs(x,{className:"hero-slide",children:[!r[s.id]&&e.jsx(_,{bg:"secondary.50",w:"full",h:"full"},s.id),e.jsx(u,{src:s.image,alt:s.title,onLoad:()=>l(s.id),opacity:r[s.id]?1:0,objectFit:"cover",objectPosition:"center",transition:"opacity 0.3s ease-in-out",w:"full",aspectRatio:16/9})]},s.id))}),e.jsx(y,{}),e.jsx(v,{}),e.jsx(g,{}),e.jsx(h,{}),e.jsx(I,{})]})};export{S as default};
