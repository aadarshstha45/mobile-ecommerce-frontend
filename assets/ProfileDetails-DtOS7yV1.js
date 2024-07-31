import{$ as V,r as m,aT as B,V as G,j as e,F as h,T,a2 as y,as as U}from"./index-BTNegxn6.js";import{R as z,c as A}from"./convertDate-CX4RCL_T.js";import{P as L,S as X,c as Y}from"./SelectInput-D7O88_D5.js";import{T as c}from"./TextInput-DnqPEWIU.js";import{o as H,s as t,u as M,d as $,t as J}from"./zod-CKXNkm52.js";import{S as w,G as l}from"./chunk-ZPFGWTBB-Cftd1d-H.js";import"./x-Ca4hW-PW.js";import"./chunk-H46NUPBZ-S_4FQTts.js";const K=H({name:t().min(1,{message:"Name is required"}),email:t().email({message:"Enter a valid email address"}).min(1,{message:"Email is required"}),phone_number:t().min(1,{message:"Phone number is required"}).min(8,{message:"Phone number should be atleast 8 digits"}).max(14,{message:"Phone number should not be 14 digits"}),dob:M([$(),t()]).optional(),country:t().min(1,{message:"Country is required"}),city:t().min(1,{message:"City is required"}),street:t().optional(),landmark:t().optional()}),re=()=>{var g,j,S,R;const s=V(),[n,u]=m.useState(!0),{mutateAsync:D,isPending:v,error:p,isError:F}=B(),{control:i,reset:x,handleSubmit:I,formState:{errors:r}}=G({defaultValues:{name:"",email:"",phone_number:"",country:"",city:"",street:"",landmark:"",country_code:"",dob:""},resolver:J(K)}),[b,f]=m.useState((j=(g=s==null?void 0:s.shipping_details)==null?void 0:g[0])==null?void 0:j.country_code);if(m.useEffect(()=>{var o,d;const a=(d=(o=s==null?void 0:s.shipping_details)==null?void 0:o[0])==null?void 0:d.country_code;a&&f(a)},[s]),F){const a=(R=(S=p==null?void 0:p.response)==null?void 0:S.data)==null?void 0:R.errors;console.log(a)}m.useEffect(()=>{var a,o,d,_,C,O,P,k,E,q;s&&x({name:s.name??"",email:s.email??"",phone_number:((o=(a=s.shipping_details)==null?void 0:a[0])==null?void 0:o.phone_number)??"",dob:s.dob??"",country:((_=(d=s.shipping_details)==null?void 0:d[0])==null?void 0:_.country)??"",city:((O=(C=s.shipping_details)==null?void 0:C[0])==null?void 0:O.city)??"",street:((k=(P=s.shipping_details)==null?void 0:P[0])==null?void 0:k.street)??"",landmark:((q=(E=s.shipping_details)==null?void 0:E[0])==null?void 0:q.landmark)??""})},[s,x]);const N=async a=>{await D({...a,country_code:b,dob:A(a.dob)}),u(!0)};return e.jsxs(h,{as:"form",onSubmit:I(N),w:"full",flexDir:"column",gap:8,noValidate:!0,children:[e.jsxs(h,{flexDir:"column",gap:4,children:[e.jsx(T,{fontSize:"xl",children:"Profile Details"}),e.jsxs(w,{w:"full",columns:{base:1,md:2},spacingX:10,spacingY:4,children:[e.jsx(l,{colSpan:1,children:e.jsx(c,{isReadOnly:n,isRequired:!n,name:"name",label:"Full Name",control:i,errors:r})}),e.jsx(l,{colSpan:1,children:e.jsx(c,{isReadOnly:!0,name:"email",label:"Email",message:" * Email cannot be changed.",control:i,errors:r})}),e.jsx(l,{colSpan:1,children:e.jsx(L,{defaultValue:b,handleChange:a=>{f(a.value)},name:"phone_number",label:"Phone Number",control:i,errors:r,isRequired:!n,isReadOnly:n})}),e.jsx(l,{colSpan:1,children:e.jsx(z,{isReadOnly:n,name:"dob",label:"Birthday (Optional)",control:i,errors:r})})]})]}),e.jsxs(h,{w:"full",flexDir:"column",gap:4,children:[e.jsx(T,{fontSize:"xl",children:"Billing Address"}),e.jsxs(w,{w:"full",columns:{base:1,md:2},spacingX:10,spacingY:4,children:[e.jsx(l,{colSpan:1,children:e.jsx(X,{width:"full",label:"Country",options:Y,name:"country",isControlled:!0,isRequired:!n,placeholder:"Select Country",control:i,isReadOnly:n,errors:r})}),e.jsx(l,{colSpan:1,children:e.jsx(c,{isReadOnly:n,isRequired:!n,name:"city",label:"City",control:i,errors:r})}),e.jsx(l,{colSpan:1,children:e.jsx(c,{isReadOnly:n,name:"street",label:"Street",control:i,errors:r})}),e.jsx(l,{colSpan:1,children:e.jsx(c,{isReadOnly:n,name:"landmark",label:"Nearest Landmark",control:i,errors:r})})]})]}),n?e.jsx(y,{w:"fit-content",borderRadius:3,onClick:()=>u(!1),colorScheme:"primary",children:"Edit"}):e.jsxs(U,{w:"full",children:[e.jsx(y,{isLoading:v,borderRadius:3,type:"submit",colorScheme:"primary",children:"Update"}),e.jsx(y,{borderRadius:3,variant:"outline",onClick:()=>u(!0),colorScheme:"primary",children:"Cancel"})]})]})};export{re as default};
