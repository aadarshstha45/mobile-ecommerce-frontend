import{r as w,l as y,k as S,aH as R,a6 as k,j as e,F as l,C as v,I,B as m,aF as C,T as z,ad as r,ah as F,an as G,ay as H,H as L,aG as A}from"./index-CU6XIhgo.js";import{A as B,G as q}from"./GoogleIcon-DXCQQI6G.js";import"./SelectInput-Bj6s3MAD.js";import{a as D}from"./TextInput-CvODIWjx.js";import{R as E}from"./auth-DWk1MWa1.js";import{t as P}from"./zod-CZw6tcoN.js";import{C as T}from"./chunk-YQO7BFFX--YFC_KMZ.js";import{S as M,G as c}from"./chunk-ZPFGWTBB-uGelo4u8.js";import{H as W}from"./chunk-7OLJDQMT-2Z-sJqeb.js";import"./chunk-H46NUPBZ-C060BS45.js";import"./x-D2BCFCo-.js";const N="/assets/RegisterImage-DOIhyxFM.png",O=[{id:1,label:"Full Name",name:"name",type:"text",isRequired:!0},{id:2,label:"Email",name:"email",type:"email",isRequired:!0},{id:3,label:"Password",name:"password",type:"password"},{id:4,label:"Confirm Password",name:"confirm_password",type:"password",isRequired:!0}];function se(){var n,o;const[i,d]=w.useState(!1),[t]=y("(max-width: 340px)"),x=S(),{mutateAsync:p,isPending:g,error:a}=R(),b=(o=(n=a==null?void 0:a.response)==null?void 0:n.data)==null?void 0:o.errors,{control:h,formState:{errors:u},handleSubmit:f}=k({defaultValues:{name:"",email:"",password:"",confirm_password:""},resolver:P(E)}),j=async s=>{await p(s),x("/"),window.location.reload()};return e.jsx(l,{bg:{base:"#f2f2f2",md:""},minH:window.innerHeight,maxW:"100vw",align:"center",justify:"center",children:e.jsx(v,{maxW:{base:"98vw",lg:"90vw",xl:"85vw"},py:10,children:e.jsx(T,{shadow:"none",children:e.jsxs(M,{columns:{base:1,md:2},spacing:6,children:[e.jsx(c,{display:{base:"none",md:"block"},colSpan:1,bg:"white",justifySelf:{md:"start",xl:"center"},alignContent:"center",children:e.jsx(I,{src:N,alt:"Login Banner",fallback:e.jsx(m,{bg:"gray.100",w:"100%",h:"100%"})})}),e.jsx(c,{w:{base:"95%",sm:"90%",md:"100%",xl:"90%"},justifySelf:"center",alignSelf:"center",colSpan:1,children:e.jsx("form",{onSubmit:f(j),noValidate:!0,children:e.jsxs(l,{p:{base:4,sm:"40px 40px"},flexDir:"column",bg:"white",justify:"center",align:"center",children:[e.jsx(W,{fontSize:{base:"16px",sm:"18px",md:"20px",lg:"22px",xl:"24px"},textAlign:"center",mb:8,children:"Register"}),O.map(s=>e.jsx(D,{errors:u,label:s.label,name:s.name,control:h,type:s.type,backErrors:b,isRequired:!0},s.id)),e.jsx(C,{variant:"filled",onChange:()=>d(!i),colorScheme:"primary",alignItems:"center",mt:2,children:e.jsx(z,{fontSize:{base:"14px",sm:"16px"},children:"I agree to the terms and conditions"})}),e.jsx(r,{type:"submit",colorScheme:"primary",w:"100%",mt:8,size:{base:"sm",md:"md"},borderRadius:0,isLoading:g,isDisabled:!i,children:"Register"}),e.jsx(F,{as:G,to:"/login",color:"primary.500",mt:2,fontSize:{base:"14px",sm:"16px"},children:"Already have an account? Login"}),e.jsxs(m,{pos:"relative",w:"100%",my:10,children:[e.jsx(H,{borderColor:"black",opacity:1,w:"full"}),e.jsx(B,{px:4,bg:"white",children:"OR continue with"})]}),e.jsxs(L,{align:"center",justify:"center",flexWrap:"wrap",spacing:4,children:[e.jsx(r,{colorScheme:"primary",variant:"outline",w:t?"100%":"",size:{base:"sm",md:"md"},leftIcon:e.jsx(q,{boxSize:6}),children:"Google"}),e.jsx(r,{w:t?"100%":"",colorScheme:"facebook",variant:"outline",size:{base:"sm",md:"md"},leftIcon:e.jsx(A,{boxSize:6}),children:"Facebook"})]})]})})})]})})})})}export{se as default};
