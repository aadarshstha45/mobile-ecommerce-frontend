import{a6 as x,aX as h,j as s,F as f,T as t,ap as b,a as g}from"./index-C0N_k8Eq.js";import"./SelectInput-BmWUshCC.js";import{a as n}from"./TextInput-DIB34e3t.js";import{C as j}from"./auth-DksFVB7y.js";import{t as S}from"./zod-Dm6AzEC-.js";import"./chunk-H46NUPBZ-CJC0ARm3.js";import"./x-BcTW1l-F.js";const k=()=>{var i,d;const{control:r,handleSubmit:m,formState:{errors:e},reset:c}=x({defaultValues:{current_password:"",new_password:"",c_new_password:""},resolver:S(j)}),{mutateAsync:l,isPending:p,error:o}=h(),a=(d=(i=o==null?void 0:o.response)==null?void 0:i.data)==null?void 0:d.errors,u=async w=>{await l(w),c()};return s.jsxs(f,{w:"fit-content",flexDir:"column",gap:4,children:[s.jsx(t,{fontSize:"xl",children:"Account Settings"}),s.jsx(t,{fontSize:"xl",fontWeight:500,children:"Change Password"}),s.jsx(t,{children:"Fill the below form to update your password."}),s.jsx(b,{my:2}),s.jsxs("form",{onSubmit:m(u),noValidate:!0,children:[s.jsx(n,{name:"current_password",label:"Old Password",type:"password",isRequired:!0,errors:e,backErrors:a,control:r}),s.jsx(n,{name:"new_password",label:"New Password",type:"password",backErrors:a,errors:e,isRequired:!0,control:r}),s.jsx(n,{name:"c_new_password",label:"Confirm Password",type:"password",backErrors:a,errors:e,isRequired:!0,control:r}),s.jsx(g,{isLoading:p,size:"sm",type:"submit",colorScheme:"primary",borderRadius:3,mt:4,children:"Change Password"})]})]})};export{k as default};
