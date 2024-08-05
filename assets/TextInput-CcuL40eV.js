import{s as W,o as C,j as e,p as A,aK as O,a9 as ee,bG as re,U as te,z as _,r as c,P as oe,Q as ae,b8 as w,aP as se,V as h,aC as ne,aD as le}from"./index-Cz7Rk_E5.js";import{u as ie,I,b as j,a as y,X as ce}from"./x-BJ0XnEhO.js";import{F as de}from"./chunk-H46NUPBZ-rhq8btBV.js";var ue={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},xe=W("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),k=C(function(o,r){var a;const{placement:x="left",...s}=o,i=(a=ue[x])!=null?a:{},u=ie();return e.jsx(xe,{ref:r,...s,__css:{...u.addon,...i}})});k.displayName="InputAddon";var B=C(function(o,r){return e.jsx(k,{ref:r,placement:"left",...o,className:A("chakra-input__left-addon",o.className)})});B.displayName="InputLeftAddon";B.id="InputLeftAddon";var G=C(function(o,r){return e.jsx(k,{ref:r,placement:"right",...o,className:A("chakra-input__right-addon",o.className)})});G.displayName="InputRightAddon";G.id="InputRightAddon";function pe(t,o=[]){const r=Object.assign({},t);for(const a of o)a in r&&delete r[a];return r}var he=["h","minH","height","minHeight"],H=C((t,o)=>{const r=O("Textarea",t),{className:a,rows:x,...s}=ee(t),i=re(s),u=x?pe(r,he):r;return e.jsx(W.textarea,{ref:o,rows:x,...i,className:A("chakra-textarea",a),__css:u})});H.displayName="Textarea";function me(t){return e.jsx(te,{"aria-label":t.label,colorScheme:t.colorScheme,size:"xs",onClick:t.onClick,icon:t.icon,...t})}var fe=_({displayName:"ViewOffIcon",path:e.jsxs("g",{fill:"currentColor",children:[e.jsx("path",{d:"M23.2,10.549a20.954,20.954,0,0,0-4.3-3.6l4-3.995a1,1,0,1,0-1.414-1.414l-.018.018a.737.737,0,0,1-.173.291l-19.5,19.5c-.008.007-.018.009-.026.017a1,1,0,0,0,1.631,1.088l4.146-4.146a11.26,11.26,0,0,0,4.31.939h.3c4.256,0,8.489-2.984,11.051-5.8A2.171,2.171,0,0,0,23.2,10.549ZM16.313,13.27a4.581,4.581,0,0,1-3,3.028,4.3,4.3,0,0,1-3.1-.19.253.253,0,0,1-.068-.407l5.56-5.559a.252.252,0,0,1,.407.067A4.3,4.3,0,0,1,16.313,13.27Z"}),e.jsx("path",{d:"M7.615,13.4a.244.244,0,0,0,.061-.24A4.315,4.315,0,0,1,7.5,12,4.5,4.5,0,0,1,12,7.5a4.276,4.276,0,0,1,1.16.173.244.244,0,0,0,.24-.062l1.941-1.942a.254.254,0,0,0-.1-.421A10.413,10.413,0,0,0,12,4.75C7.7,4.692,3.4,7.7.813,10.549a2.15,2.15,0,0,0-.007,2.9,21.209,21.209,0,0,0,3.438,3.03.256.256,0,0,0,.326-.029Z"})]})}),ge=_({displayName:"ViewIcon",path:e.jsxs("g",{fill:"currentColor",children:[e.jsx("path",{d:"M23.432,10.524C20.787,7.614,16.4,4.538,12,4.6,7.6,4.537,3.213,7.615.568,10.524a2.211,2.211,0,0,0,0,2.948C3.182,16.351,7.507,19.4,11.839,19.4h.308c4.347,0,8.671-3.049,11.288-5.929A2.21,2.21,0,0,0,23.432,10.524ZM7.4,12A4.6,4.6,0,1,1,12,16.6,4.6,4.6,0,0,1,7.4,12Z"}),e.jsx("circle",{cx:"12",cy:"12",r:"2"})]})}),je=_({viewBox:"0 0 14 14",path:e.jsx("g",{fill:"currentColor",children:e.jsx("polygon",{points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})})});const ye=(t,o)=>{let r;return(...a)=>{clearTimeout(r),r=setTimeout(()=>t(...a),o)}},Ee=({label:t,control:o,name:r,type:a,isRequired:x,errors:s,leftIcon:i,rightIcon:u,placeholder:m,leftAddon:N,message:T,errorMessage:P,pointerEvents:$,backErrors:f,isReadOnly:n,singleDate:Ce,...U})=>{const[b,q]=c.useState(!1),[g,z]=c.useState(null),[L,F]=c.useState(void 0);c.useEffect(()=>{z(f)},[f]),c.useEffect(()=>{F(P)},[P]);const M=l=>(z(null),F(void 0),l),[V,S]=c.useState(null),[K,v]=c.useState(!1),[D,E]=c.useState(!1),[Q,Z]=c.useState(!1),X=async l=>{E(!0),Z(!0);try{const d=await ne.get(`${le}check-unique-email?email=${l}`);(d==null?void 0:d.data)===!0?(v(!0),S("Email already exists")):(v(!1),S(null))}catch{S("Something went wrong")}finally{E(!1)}},J=c.useCallback(ye(X,1e3),[]),Y=l=>(E(!0),v(null),Z(!1),J(l),l),R=()=>{q(!b)};return e.jsxs(oe,{isReadOnly:n,mb:4,isRequired:x,...U,children:[t&&e.jsx(de,{mb:2,fontSize:{sm:"14px",md:"16px"},fontWeight:450,children:t}),e.jsx(ae,{name:r,control:o,render:({field:{onChange:l,value:d}})=>a==="password"?e.jsxs(I,{children:[i&&e.jsx(j,{pointerEvents:$??"none",children:i}),N&&e.jsx(B,{children:N}),e.jsx(w,{type:b?"text":"password",focusBorderColor:n?"gray.300":"primary.500",_hover:{borderColor:"gray.400"},errorBorderColor:"red.500",border:"1px solid",borderColor:n?"gray.300":s&&s[r]||f&&f[r]?"red.500":"gray.300",placeholder:m,onChange:p=>l(M(p.target.value)),value:d,autoComplete:"off",required:x}),e.jsx(y,{px:2,bg:"transparent",children:e.jsx(me,{_hover:{bg:"transparent"},bg:"transparent",onClick:R,"aria-label":"Show Password",color:"#000",icon:b?e.jsx(fe,{}):e.jsx(ge,{})})})]}):a==="email"?e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:[i&&e.jsx(j,{pointerEvents:"none",children:i,color:"#000"}),e.jsx(w,{borderColor:n?"gray.300":g&&g[r]?"red.500":"gray.300",focusBorderColor:n?"gray.300":"primary.500",_hover:{borderColor:"gray.400"},errorBorderColor:"red.500",value:d,placeholder:m,type:"email",onChange:p=>l(Y(p.target.value))}),u&&e.jsx(y,{pointerEvents:"none",children:u,color:"#000"}),D&&e.jsx(y,{pointerEvents:"none",children:e.jsx(se,{thickness:"3px",speed:"0.65s",color:"primary.500"}),color:"#000"}),e.jsx(y,{opacity:!D&&Q?1:0,pointerEvents:"none",children:K?e.jsx(ce,{color:"red"}):e.jsx(je,{color:"green.500"}),color:"#000"})]}),V&&e.jsx(h,{color:"red.400",fontSize:{base:"14px",md:"16px"},fontStyle:"italic",fontWeight:400,children:V})]}):a==="textarea"?e.jsx(H,{focusBorderColor:n?"gray.300":"primary.500",_hover:{borderColor:n?"gray.300":"#000"},borderRadius:"2px",errorBorderColor:"red",border:"1px solid #000",value:d,cursor:n?"default":"auto",borderColor:n?"gray.300":s&&s[r]?"red.500":"#000",placeholder:m,onChange:l}):e.jsxs(I,{children:[i&&e.jsx(j,{pointerEvents:"none",children:i,color:"#000"}),e.jsx(w,{focusBorderColor:n?"gray.300":"primary.500",_hover:{borderColor:"gray.400"},errorBorderColor:"red",value:d,cursor:n?"default":"auto",borderColor:n?"gray.300":s&&s[r]?"red.500":"gray.300",placeholder:m,type:a,onChange:p=>l(M(p.target.value))}),u&&e.jsx(j,{pointerEvents:"none",children:u,color:"#000"})]})}),T&&e.jsx(h,{color:"gray.800",fontSize:"xs",fontStyle:"italic",children:T}),L&&e.jsx(h,{color:"red.400",fontStyle:"italic",children:L}),s&&s[r]&&e.jsx(h,{color:"red.400",fontSize:{base:"14px",md:"16px"},fontStyle:"italic",fontWeight:400,children:s[r].message}),g&&e.jsx(h,{color:"red.400",fontSize:{base:"14px",md:"16px"},fontStyle:"italic",fontWeight:400,children:g[r]})]})};export{H as T,Ee as a};
