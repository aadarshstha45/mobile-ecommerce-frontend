import{W as x,aQ as h,j as s,F as f,T as t,aB as b,a3 as g}from"./index-oY60Rmkm.js";import"./PhoneInput-DTIJ2N6G.js";import"./SelectInput-C7-yvhEb.js";import{T as n}from"./TextInput-CQ6IDhcL.js";import{C as j}from"./auth-Ck00OhzZ.js";import{t as S}from"./zod-BkLXAtX7.js";import"./chunk-H46NUPBZ-B15ETrvH.js";import"./chunk-2ZHRCML3-DPwAscup.js";const k=()=>{var i,d;const{control:r,handleSubmit:m,formState:{errors:e},reset:c}=x({defaultValues:{current_password:"",new_password:"",c_new_password:""},resolver:S(j)}),{mutateAsync:l,isPending:p,error:o}=h(),a=(d=(i=o==null?void 0:o.response)==null?void 0:i.data)==null?void 0:d.errors,u=async w=>{await l(w),c()};return s.jsxs(f,{w:"fit-content",flexDir:"column",gap:4,children:[s.jsx(t,{fontSize:"xl",children:"Account Settings"}),s.jsx(t,{fontSize:"xl",fontWeight:500,children:"Change Password"}),s.jsx(t,{children:"Fill the below form to update your password."}),s.jsx(b,{my:2}),s.jsxs("form",{onSubmit:m(u),noValidate:!0,children:[s.jsx(n,{name:"current_password",label:"Old Password",type:"password",isRequired:!0,errors:e,backErrors:a,control:r}),s.jsx(n,{name:"new_password",label:"New Password",type:"password",backErrors:a,errors:e,isRequired:!0,control:r}),s.jsx(n,{name:"c_new_password",label:"Confirm Password",type:"password",backErrors:a,errors:e,isRequired:!0,control:r}),s.jsx(g,{isLoading:p,size:"sm",type:"submit",colorScheme:"primary",borderRadius:3,mt:4,children:"Change Password"})]})]})};export{k as default};
