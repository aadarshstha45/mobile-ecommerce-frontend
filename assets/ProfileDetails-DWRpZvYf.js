import{Q as L,Y as N,r as d,b2 as U,q as G,j as e,F as h,T as E,B as H,U as Y,V as M,s as X,a0 as x,H as Q}from"./index-CHqn2l2u.js";import{R as $,c as J}from"./convertDate-C1-33OAI.js";import{P as K,S as W,c as Z}from"./SelectInput-DSLuIYVe.js";import{u as ee}from"./index.esm-CKUlnAtw.js";import{a as m}from"./TextInput-om9h2xqn.js";import{P as se}from"./ProfileImage-CKq3-nWA.js";import{o as ae,s as o,u as ne,d as ie,t as re}from"./zod-BnQ4q-Hn.js";import{S as w,G as t}from"./chunk-ZPFGWTBB-BB86zPqm.js";import"./x-D2h_KaVa.js";import"./chunk-H46NUPBZ-BU6tGVc5.js";import"./index-BAghsE7X.js";import"./chunk-IAXSQ4X2-BgyAEZe0.js";/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=L("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]),te=ae({name:o().min(1,{message:"Name is required"}),email:o().email({message:"Enter a valid email address"}).min(1,{message:"Email is required"}),phone_number:o().min(1,{message:"Phone number is required"}).min(8,{message:"Phone number should be atleast 8 digits"}).max(14,{message:"Phone number should not be 14 digits"}),dob:ne([ie(),o()]).optional(),country:o().min(1,{message:"Country is required"}),city:o().min(1,{message:"City is required"}),street:o().optional(),landmark:o().optional()}),je=()=>{var f,j,S,R;const s=N(),[a,u]=d.useState(!0),{mutateAsync:D,isPending:I,error:p,isError:T}=U(),{onOpen:B,isOpen:z,onClose:V}=G(),{control:i,reset:y,handleSubmit:A,formState:{errors:r}}=ee({defaultValues:{name:"",email:"",phone_number:"",country:"",city:"",street:"",landmark:"",country_code:"",dob:""},resolver:re(te)}),[b,g]=d.useState((j=(f=s==null?void 0:s.shipping_details)==null?void 0:f[0])==null?void 0:j.country_code);if(d.useEffect(()=>{var l,c;const n=(c=(l=s==null?void 0:s.shipping_details)==null?void 0:l[0])==null?void 0:c.country_code;n&&g(n)},[s]),T){const n=(R=(S=p==null?void 0:p.response)==null?void 0:S.data)==null?void 0:R.errors;console.log(n)}d.useEffect(()=>{var n,l,c,C,_,O,P,k,q,v;s&&y({name:s.name??"",email:s.email??"",phone_number:((l=(n=s.shipping_details)==null?void 0:n[0])==null?void 0:l.phone_number)??"",dob:s.dob??"",country:((C=(c=s.shipping_details)==null?void 0:c[0])==null?void 0:C.country)??"",city:((O=(_=s.shipping_details)==null?void 0:_[0])==null?void 0:O.city)??"",street:((k=(P=s.shipping_details)==null?void 0:P[0])==null?void 0:k.street)??"",landmark:((v=(q=s.shipping_details)==null?void 0:q[0])==null?void 0:v.landmark)??""})},[s,y]);const F=async n=>{await D({...n,country_code:b,dob:J(n.dob)}),u(!0)};return e.jsxs(h,{as:"form",onSubmit:A(F),w:"full",flexDir:"column",gap:8,noValidate:!0,children:[e.jsx(se,{data:s,isOpen:z,onClose:V}),e.jsxs(h,{flexDir:"column",gap:4,children:[e.jsx(E,{fontSize:"xl",children:"Profile Details"}),e.jsxs(H,{display:{base:"flex",md:"none"},pos:"relative",w:"fit-content",borderRadius:50,children:[e.jsx(Y,{src:s!=null&&s.image?`${s==null?void 0:s.image}`:M,size:"xl",loading:"lazy"}),e.jsx(X,{colorScheme:"primary",borderRadius:50,"aria-label":"Change Profile Picture",icon:e.jsx(oe,{}),pos:"absolute",onClick:B,bottom:-2,right:-2})]}),e.jsxs(w,{w:"full",columns:{base:1,md:2},spacingX:10,spacingY:4,children:[e.jsx(t,{colSpan:1,children:e.jsx(m,{isReadOnly:a,isRequired:!a,name:"name",label:"Full Name",control:i,errors:r})}),e.jsx(t,{colSpan:1,children:e.jsx(m,{isReadOnly:!0,name:"email",label:"Email",message:" * Email cannot be changed.",control:i,errors:r})}),e.jsx(t,{colSpan:1,children:e.jsx(K,{defaultValue:b,handleChange:n=>{g(n.value)},name:"phone_number",label:"Phone Number",control:i,errors:r,isRequired:!a,isReadOnly:a})}),e.jsx(t,{colSpan:1,children:e.jsx($,{isReadOnly:a,name:"dob",label:"Birthday (Optional)",control:i,errors:r})})]})]}),e.jsxs(h,{w:"full",flexDir:"column",gap:4,children:[e.jsx(E,{fontSize:"xl",children:"Billing Address"}),e.jsxs(w,{w:"full",columns:{base:1,md:2},spacingX:10,spacingY:4,children:[e.jsx(t,{colSpan:1,children:e.jsx(W,{width:"full",label:"Country",options:Z,name:"country",isControlled:!0,isRequired:!a,placeholder:"Select Country",control:i,isReadOnly:a,errors:r})}),e.jsx(t,{colSpan:1,children:e.jsx(m,{isReadOnly:a,isRequired:!a,name:"city",label:"City",control:i,errors:r})}),e.jsx(t,{colSpan:1,children:e.jsx(m,{isReadOnly:a,name:"street",label:"Street",control:i,errors:r})}),e.jsx(t,{colSpan:1,children:e.jsx(m,{isReadOnly:a,name:"landmark",label:"Nearest Landmark",control:i,errors:r})})]})]}),a?e.jsx(x,{w:"fit-content",borderRadius:3,onClick:()=>u(!1),colorScheme:"primary",children:"Edit"}):e.jsxs(Q,{w:"full",children:[e.jsx(x,{isLoading:I,borderRadius:3,type:"submit",colorScheme:"primary",children:"Update"}),e.jsx(x,{borderRadius:3,variant:"outline",onClick:()=>u(!0),colorScheme:"primary",children:"Cancel"})]})]})};export{je as default};
