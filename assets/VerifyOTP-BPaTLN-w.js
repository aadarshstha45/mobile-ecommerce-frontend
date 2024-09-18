import{aB as Q,d as Z,r as c,b as J,aC as Y,aD as v,m as ee,aE as ne,o as te,aF as se,j as e,f as ae,h as oe,E as ie,F as w,C as re,I as le,B as ce,T as ue,H as de,a0 as pe}from"./index-CHqn2l2u.js";import{u as fe,C as me}from"./index.esm-CKUlnAtw.js";import{C as xe}from"./chunk-YQO7BFFX-CQYSGleK.js";import{S as he,G as z}from"./chunk-ZPFGWTBB-BB86zPqm.js";import{H as ge}from"./chunk-7OLJDQMT-BLFIzXTc.js";var[Ce,Re,je,be]=Q(),[Pe,ye]=Z({name:"PinInputContext",errorMessage:"usePinInputContext: `context` is undefined. Seems you forgot to all pin input fields within `<PinInput />`"}),$=s=>s==null?void 0:s.split("");function O(s,i){return(i==="alphanumeric"?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(s)}function Ie(s={}){const{autoFocus:i,value:r,defaultValue:l,onChange:d,onComplete:u,placeholder:b="○",manageFocus:h=!0,otp:k=!1,id:V,isDisabled:B,isInvalid:D,type:C="number",mask:R}=s,X=c.useId(),E=V??`pin-input-${X}`,a=je(),[_,F]=c.useState(!0),[N,T]=c.useState(-1),[g,p]=J({defaultValue:$(l)||[],value:$(r),onChange:t=>d==null?void 0:d(t.join(""))});c.useEffect(()=>{if(i){const t=a.first();t&&requestAnimationFrame(()=>{t.node.focus()})}},[a]);const H=c.useCallback(t=>{if(!_||!h)return;const n=a.next(t,!1);n&&requestAnimationFrame(()=>{n.node.focus()})},[a,_,h]),j=c.useCallback((t,n,o=!0)=>{const f=[...g];f[n]=t,p(f),t!==""&&f.length===a.count()&&f.every(P=>P!=null&&P!=="")?u==null||u(f.join("")):o&&H(n)},[g,p,H,u,a]),q=c.useCallback(()=>{var t;const n=Array(a.count()).fill("");p(n);const o=a.first();(t=o==null?void 0:o.node)==null||t.focus()},[a,p]),G=c.useCallback((t,n)=>{let o=n;return(t==null?void 0:t.length)>0&&(t[0]===n.charAt(0)?o=n.charAt(1):t[0]===n.charAt(1)&&(o=n.charAt(0))),o},[]);return{getInputProps:c.useCallback(t=>{const{index:n,...o}=t,f=y=>{const m=y.target.value,I=g[n],S=G(I,m);if(S===""){j("",n);return}if(m.length>2){if(O(m,C)){const A=m.split("").filter((Ae,W)=>W<a.count());p(A),A.length===a.count()&&(u==null||u(A.join("")))}}else O(S,C)&&j(S,n),F(!0)},M=y=>{var m;if(y.key==="Backspace"&&h)if(y.target.value===""){const I=a.prev(n,!1);I&&(j("",n-1,!1),(m=I.node)==null||m.focus(),F(!0))}else F(!1)},P=()=>{T(n)},K=()=>{T(-1)},L=N===n;return{"aria-label":"Please enter your pin code",inputMode:C==="number"?"numeric":"text",type:R?"password":C==="number"?"tel":"text",...o,id:`${E}-${n}`,disabled:B,"aria-invalid":Y(D),onChange:v(o.onChange,f),onKeyDown:v(o.onKeyDown,M),onFocus:v(o.onFocus,P),onBlur:v(o.onBlur,K),value:g[n]||"",autoComplete:k?"one-time-code":"off",placeholder:L?"":b}},[a,N,G,E,B,R,D,h,u,k,b,j,p,C,g]),id:E,descendants:a,values:g,setValue:j,setValues:p,clear:q}}function ve(s={},i=null){const{getInputProps:r}=ye(),{index:l,register:d}=be();return r({...s,ref:ee(d,i),index:l})}function U(s){const i=ne("PinInput",s),{children:r,...l}=te(s),{descendants:d,...u}=Ie(l),b=se(r).map(h=>c.cloneElement(h,{__css:i}));return e.jsx(Ce,{value:d,children:e.jsx(Pe,{value:u,children:b})})}U.displayName="PinInput";var x=ae(function(i,r){const l=ve(i,r);return e.jsx(oe.input,{...l,className:ie("chakra-pin-input",i.className)})});x.displayName="PinInputField";const Ee="/assets/PinBanner-ClhqQb1s.png";function _e(){const{control:s,handleSubmit:i}=fe({defaultValues:{otp:""}});return e.jsx(w,{bg:{base:"#f2f2f2",md:""},minH:"100vh",maxW:"100vw",align:"center",justify:"center",children:e.jsx(re,{maxW:{base:"98vw",lg:"90vw",xl:"85vw"},py:10,children:e.jsx(xe,{shadow:"none",children:e.jsxs(he,{columns:{base:1,md:2},spacing:6,children:[e.jsx(z,{display:{base:"none",md:"block"},colSpan:1,bg:"white",justifySelf:{md:"start",xl:"center"},alignContent:"center",py:10,children:e.jsx(le,{src:Ee,alt:"Login Banner",fallback:e.jsx(ce,{bg:"gray.100",w:"100%",h:"100%"})})}),e.jsx(z,{w:{base:"90%",lg:"80%"},justifySelf:"center",alignSelf:"center",colSpan:1,children:e.jsx("form",{onSubmit:i(r=>console.log(r)),noValidate:!0,children:e.jsxs(w,{p:{base:4,sm:"40px 10px"},flexDir:"column",justify:"center",align:"center",children:[e.jsx(ge,{fontSize:{base:"16px",sm:"18px",md:"20px",lg:"22px",xl:"24px"},textAlign:"center",mb:4,children:"Verify OTP"}),e.jsx(ue,{fontSize:{base:"12px",sm:"14px",md:"16px"},mb:8,children:"Enter the OTP sent to your email"}),e.jsxs(w,{flexDir:"column",justify:"center",align:"center",children:[e.jsx(me,{name:"otp",control:s,defaultValue:"",render:({field:{value:r,onChange:l}})=>e.jsx(de,{spacing:2,children:e.jsxs(U,{orientation:"horizontal",onChange:l,value:r,size:{base:"sm",sm:"md"},children:[e.jsx(x,{}),e.jsx(x,{}),e.jsx(x,{}),e.jsx(x,{}),e.jsx(x,{}),e.jsx(x,{})]})})}),e.jsx(pe,{type:"submit",colorScheme:"primary",w:"100%",mt:8,borderRadius:0,size:{base:"sm",sm:"md"},children:"Verify OTP"})]})]})})})]})})})})}export{_e as default};
