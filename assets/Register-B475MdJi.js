import{r as w,b as y,a as S,aO as R,V as k,j as e,F as l,C as v,I,B as m,aM as C,T as z,a2 as r,Y as F,a4 as G,aJ as L,ar as A,aN as B}from"./index-CL8XLKom.js";import{A as H,G as q}from"./GoogleIcon-B95q8FQx.js";import"./SelectInput-D4BtyVVY.js";import{a as D}from"./TextInput-vvWYu-yc.js";import{R as E}from"./auth-BogoAgaX.js";import{t as M}from"./zod-CltqZZaI.js";import{C as P}from"./chunk-YQO7BFFX-DwynXBgR.js";import{S as T,G as c}from"./chunk-ZPFGWTBB-Cil7MniN.js";import{H as N}from"./chunk-7OLJDQMT-DKMg_9ke.js";import"./chunk-H46NUPBZ-q2gi2f9t.js";import"./x-CAMzUkDM.js";const O="/assets/RegisterImage-DOIhyxFM.png",V=[{id:1,label:"Full Name",name:"name",type:"text",isRequired:!0},{id:2,label:"Email",name:"email",type:"email",isRequired:!0},{id:3,label:"Password",name:"password",type:"password"},{id:4,label:"Confirm Password",name:"confirm_password",type:"password",isRequired:!0}];function se(){var n,o;const[i,d]=w.useState(!1),[t]=y("(max-width: 340px)"),x=S(),{mutateAsync:p,isPending:b,error:a}=R(),g=(o=(n=a==null?void 0:a.response)==null?void 0:n.data)==null?void 0:o.errors,{control:u,formState:{errors:h},handleSubmit:f}=k({defaultValues:{name:"",email:"",password:"",confirm_password:""},resolver:M(E)}),j=async s=>{await p(s),x("/"),window.location.reload()};return e.jsx(l,{bg:{base:"#f2f2f2",md:""},minH:window.innerHeight,maxW:"100vw",align:"center",justify:"center",children:e.jsx(v,{maxW:{base:"98vw",lg:"90vw",xl:"85vw"},py:10,children:e.jsx(P,{shadow:"none",children:e.jsxs(T,{columns:{base:1,md:2},spacing:6,children:[e.jsx(c,{display:{base:"none",md:"block"},colSpan:1,bg:"white",justifySelf:{md:"start",xl:"center"},alignContent:"center",children:e.jsx(I,{src:O,alt:"Login Banner",fallback:e.jsx(m,{bg:"gray.100",w:"100%",h:"100%"})})}),e.jsx(c,{w:{base:"95%",sm:"90%",md:"100%",xl:"90%"},justifySelf:"center",alignSelf:"center",colSpan:1,children:e.jsx("form",{onSubmit:f(j),noValidate:!0,children:e.jsxs(l,{p:{base:4,sm:"40px 40px"},flexDir:"column",bg:"white",justify:"center",align:"center",children:[e.jsx(N,{fontSize:{base:"16px",sm:"18px",md:"20px",lg:"22px",xl:"24px"},textAlign:"center",mb:8,children:"Register"}),V.map(s=>e.jsx(D,{errors:h,label:s.label,name:s.name,control:u,type:s.type,backErrors:g,isRequired:!0},s.id)),e.jsx(C,{variant:"filled",onChange:()=>d(!i),colorScheme:"primary",alignItems:"center",mt:2,children:e.jsx(z,{fontSize:{base:"14px",sm:"16px"},children:"I agree to the terms and conditions"})}),e.jsx(r,{type:"submit",colorScheme:"primary",w:"100%",mt:8,size:{base:"sm",md:"md"},borderRadius:0,isLoading:b,isDisabled:!i,children:"Register"}),e.jsx(F,{as:G,to:"/login",color:"primary.500",mt:2,fontSize:{base:"14px",sm:"16px"},children:"Already have an account? Login"}),e.jsxs(m,{pos:"relative",w:"100%",my:10,children:[e.jsx(L,{borderColor:"black",opacity:1,w:"full"}),e.jsx(H,{px:4,bg:"white",children:"OR continue with"})]}),e.jsxs(A,{align:"center",justify:"center",flexWrap:"wrap",spacing:4,children:[e.jsx(r,{colorScheme:"primary",variant:"outline",w:t?"100%":"",size:{base:"sm",md:"md"},leftIcon:e.jsx(q,{boxSize:6}),children:"Google"}),e.jsx(r,{w:t?"100%":"",colorScheme:"facebook",variant:"outline",size:{base:"sm",md:"md"},leftIcon:e.jsx(B,{boxSize:6}),children:"Facebook"})]})]})})})]})})})})}export{se as default};
