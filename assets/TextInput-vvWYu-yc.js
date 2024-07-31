import{o as H,l as b,j as e,m as I,am as O,ae as ee,bq as re,O as te,w as A,r as c,H as oe,K as ae,b7 as E,b8 as se,P as h,bx as ne,by as le}from"./index-CL8XLKom.js";import{u as ie,I as w,b as g,a as j,X as ce}from"./x-CAMzUkDM.js";import{F as de}from"./chunk-H46NUPBZ-q2gi2f9t.js";var ue={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},xe=H("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),_=b(function(o,r){var a;const{placement:x="left",...n}=o,i=(a=ue[x])!=null?a:{},u=ie();return e.jsx(xe,{ref:r,...n,__css:{...u.addon,...i}})});_.displayName="InputAddon";var k=b(function(o,r){return e.jsx(_,{ref:r,placement:"left",...o,className:I("chakra-input__left-addon",o.className)})});k.displayName="InputLeftAddon";k.id="InputLeftAddon";var W=b(function(o,r){return e.jsx(_,{ref:r,placement:"right",...o,className:I("chakra-input__right-addon",o.className)})});W.displayName="InputRightAddon";W.id="InputRightAddon";function pe(t,o=[]){const r=Object.assign({},t);for(const a of o)a in r&&delete r[a];return r}var he=["h","minH","height","minHeight"],$=b((t,o)=>{const r=O("Textarea",t),{className:a,rows:x,...n}=ee(t),i=re(n),u=x?pe(r,he):r;return e.jsx(H.textarea,{ref:o,rows:x,...i,className:I("chakra-textarea",a),__css:u})});$.displayName="Textarea";function me(t){return e.jsx(te,{"aria-label":t.label,colorScheme:t.colorScheme,size:"xs",onClick:t.onClick,icon:t.icon,...t})}var fe=A({displayName:"ViewOffIcon",path:e.jsxs("g",{fill:"currentColor",children:[e.jsx("path",{d:"M23.2,10.549a20.954,20.954,0,0,0-4.3-3.6l4-3.995a1,1,0,1,0-1.414-1.414l-.018.018a.737.737,0,0,1-.173.291l-19.5,19.5c-.008.007-.018.009-.026.017a1,1,0,0,0,1.631,1.088l4.146-4.146a11.26,11.26,0,0,0,4.31.939h.3c4.256,0,8.489-2.984,11.051-5.8A2.171,2.171,0,0,0,23.2,10.549ZM16.313,13.27a4.581,4.581,0,0,1-3,3.028,4.3,4.3,0,0,1-3.1-.19.253.253,0,0,1-.068-.407l5.56-5.559a.252.252,0,0,1,.407.067A4.3,4.3,0,0,1,16.313,13.27Z"}),e.jsx("path",{d:"M7.615,13.4a.244.244,0,0,0,.061-.24A4.315,4.315,0,0,1,7.5,12,4.5,4.5,0,0,1,12,7.5a4.276,4.276,0,0,1,1.16.173.244.244,0,0,0,.24-.062l1.941-1.942a.254.254,0,0,0-.1-.421A10.413,10.413,0,0,0,12,4.75C7.7,4.692,3.4,7.7.813,10.549a2.15,2.15,0,0,0-.007,2.9,21.209,21.209,0,0,0,3.438,3.03.256.256,0,0,0,.326-.029Z"})]})}),ge=A({displayName:"ViewIcon",path:e.jsxs("g",{fill:"currentColor",children:[e.jsx("path",{d:"M23.432,10.524C20.787,7.614,16.4,4.538,12,4.6,7.6,4.537,3.213,7.615.568,10.524a2.211,2.211,0,0,0,0,2.948C3.182,16.351,7.507,19.4,11.839,19.4h.308c4.347,0,8.671-3.049,11.288-5.929A2.21,2.21,0,0,0,23.432,10.524ZM7.4,12A4.6,4.6,0,1,1,12,16.6,4.6,4.6,0,0,1,7.4,12Z"}),e.jsx("circle",{cx:"12",cy:"12",r:"2"})]})}),je=A({viewBox:"0 0 14 14",path:e.jsx("g",{fill:"currentColor",children:e.jsx("polygon",{points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})})});const be=(t,o)=>{let r;return(...a)=>{clearTimeout(r),r=setTimeout(()=>t(...a),o)}},Ee=({label:t,control:o,name:r,type:a,isRequired:x,errors:n,leftIcon:i,rightIcon:u,placeholder:m,leftAddon:B,message:N,errorMessage:T,pointerEvents:q,backErrors:f,isReadOnly:s,singleDate:Ce,...G})=>{const[C,K]=c.useState(!1),[z,L]=c.useState(null),[P,F]=c.useState(void 0);c.useEffect(()=>{L(f)},[f]),c.useEffect(()=>{F(T)},[T]);const M=l=>(L(null),F(void 0),l),[V,S]=c.useState(null),[U,y]=c.useState(!1),[Z,v]=c.useState(!1),[X,D]=c.useState(!1),J=async l=>{v(!0),D(!0);try{const d=await ne.get(`${le}/check-unique-email?email=${l}`);(d==null?void 0:d.data)===!0?(y(!0),S("Email already exists")):(y(!1),S(null))}catch{S("Something went wrong")}finally{v(!1)}},Q=c.useCallback(be(J,1e3),[]),R=l=>(v(!0),y(null),D(!1),Q(l),l),Y=()=>{K(!C)};return e.jsxs(oe,{isReadOnly:s,mb:4,isRequired:x,...G,children:[t&&e.jsx(de,{mb:2,fontSize:{sm:"14px",md:"16px"},fontWeight:450,children:t}),e.jsx(ae,{name:r,control:o,render:({field:{onChange:l,value:d}})=>a==="password"?e.jsxs(w,{children:[i&&e.jsx(g,{pointerEvents:q??"none",children:i}),B&&e.jsx(k,{children:B}),e.jsx(E,{type:C?"text":"password",focusBorderColor:s?"gray.300":"primary.500",_hover:{borderColor:s?"gray.300":"#000"},borderRadius:"2px",errorBorderColor:"red.500",border:"1px solid",borderColor:s?"gray.300":n&&n[r]||f&&f[r]?"red.500":"#000",placeholder:m,onChange:p=>l(M(p.target.value)),value:d,autoComplete:"off",required:x}),e.jsx(j,{px:2,bg:"transparent",children:e.jsx(me,{_hover:{bg:"transparent"},bg:"transparent",onClick:Y,"aria-label":"Show Password",color:"#000",icon:C?e.jsx(fe,{}):e.jsx(ge,{})})})]}):a==="email"?e.jsxs(e.Fragment,{children:[e.jsxs(w,{children:[i&&e.jsx(g,{pointerEvents:"none",children:i,color:"#000"}),e.jsx(E,{focusBorderColor:s?"gray.300":"primary.500",_hover:{borderColor:s?"gray.300":"#000"},borderRadius:"2px",errorBorderColor:"red.500",border:"1px solid #000",value:d,placeholder:m,type:"email",onChange:p=>l(R(p.target.value))}),u&&e.jsx(j,{pointerEvents:"none",children:u,color:"#000"}),Z&&e.jsx(j,{pointerEvents:"none",children:e.jsx(se,{thickness:"3px",speed:"0.65s",color:"primary.500"}),color:"#000"}),e.jsx(j,{opacity:!Z&&X?1:0,pointerEvents:"none",children:U?e.jsx(ce,{color:"red"}):e.jsx(je,{color:"green.500"}),color:"#000"})]}),V&&e.jsx(h,{color:"red.400",fontSize:{base:"14px",md:"16px"},fontStyle:"italic",fontWeight:400,children:V})]}):a==="textarea"?e.jsx($,{focusBorderColor:s?"gray.300":"primary.500",_hover:{borderColor:s?"gray.300":"#000"},borderRadius:"2px",errorBorderColor:"red",border:"1px solid #000",value:d,cursor:s?"default":"auto",borderColor:s?"gray.300":n&&n[r]?"red.500":"#000",placeholder:m,onChange:l}):e.jsxs(w,{children:[i&&e.jsx(g,{pointerEvents:"none",children:i,color:"#000"}),e.jsx(E,{focusBorderColor:s?"gray.300":"primary.500",_hover:{borderColor:s?"gray.300":"#000"},borderRadius:"2px",errorBorderColor:"red",border:"1px solid #000",value:d,cursor:s?"default":"auto",borderColor:s?"gray.300":n&&n[r]?"red.500":"#000",placeholder:m,type:a,onChange:p=>l(M(p.target.value))}),u&&e.jsx(g,{pointerEvents:"none",children:u,color:"#000"})]})}),N&&e.jsx(h,{color:"gray.800",fontSize:"xs",fontStyle:"italic",children:N}),P&&e.jsx(h,{color:"red.400",fontSize:"xs",fontStyle:"italic",children:P}),n&&n[r]&&e.jsx(h,{color:"red.400",fontSize:{base:"14px",md:"16px"},fontStyle:"italic",fontWeight:400,children:n[r].message}),z&&e.jsx(h,{color:"red.400",fontSize:{base:"14px",md:"16px"},fontStyle:"italic",fontWeight:400,children:z[r]})]})};export{$ as T,Ee as a};
