import{bv as we,aV as je,aW as ye,r as n,aU as Y,m as Ce,aF as A,a$ as K,h as _,b1 as ve,f as Se,aG as Pe,o as ke,g as De,bw as Ie,j as s,bx as ze,by as Te,at as Ee,aj as _e,ak as Le,al as Fe,aI as Oe,an as Re,t as $,H as P,au as We,T as L,U as ie,a0 as Q,Z,B as N,ae as Ae,aw as Ne,q as $e,ab as le,bz as Be,S as ae,F as U,aq as Me,aN as Ve,ar as He,I as qe,ad as Ge}from"./index-DqMwINjK.js";import{a as Ue,u as Ke,b as Xe}from"./index-Dm-p0tYJ.js";import{A as Ye,G as Ze}from"./GoogleIcon-Bm8RntfT.js";import{I as Je,a as Qe}from"./Lock-A4c70TZM.js";import{u as es}from"./index.esm-BKhoN415.js";import"./SelectInput-CTQDdc_4.js";import{a as ce}from"./TextInput-Sb6gmVGI.js";import{L as ss}from"./auth-C9KVgX0N.js";import"./profile-ngARQAsV.js";import"./review-DOXwsJ1N.js";import{t as os}from"./zod-D--hjMPf.js";import{a as rs}from"./index-Wi1vYxL2.js";import{C as ns}from"./chunk-2EW3JUUD-CHZorT9F.js";import{C as ts}from"./chunk-FHHZMTWR-BNUgKpg7.js";import{C as is}from"./chunk-YQO7BFFX-BGZlorz9.js";function ls(e){const r=e.ownerDocument.defaultView||window,{overflow:o,overflowX:i,overflowY:u}=r.getComputedStyle(e);return/auto|scroll|overlay|hidden/.test(o+u+i)}function as(e){return e.localName==="html"?e:e.assignedSlot||e.parentElement||e.ownerDocument.documentElement}function ue(e){return["html","body","#document"].includes(e.localName)?e.ownerDocument.body:we(e)&&ls(e)?e:ue(as(e))}var cs={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},ee=e=>{var r;return((r=e.current)==null?void 0:r.ownerDocument)||document},X=e=>{var r,o;return((o=(r=e.current)==null?void 0:r.ownerDocument)==null?void 0:o.defaultView)||window};function us(e={}){const{openDelay:r=0,closeDelay:o=0,closeOnClick:i=!0,closeOnMouseDown:u,closeOnScroll:x,closeOnPointerDown:p=u,closeOnEsc:c=!0,onOpen:d,onClose:C,placement:f,id:v,isOpen:F,defaultIsOpen:O,arrowSize:h=10,arrowShadowColor:S,arrowPadding:k,modifiers:D,isDisabled:g,gutter:b,offset:l,direction:R,...I}=e,{isOpen:a,onOpen:z,onClose:T}=je({isOpen:F,defaultIsOpen:O,onOpen:d,onClose:C}),{referenceRef:B,getPopperProps:w,getArrowInnerProps:pe,getArrowProps:de}=ye({enabled:a,placement:f,arrowPadding:k,modifiers:D,gutter:b,offset:l,direction:R}),me=n.useId(),M=`tooltip-${v??me}`,j=n.useRef(null),W=n.useRef(),E=n.useCallback(()=>{W.current&&(clearTimeout(W.current),W.current=void 0)},[]),V=n.useRef(),H=n.useCallback(()=>{V.current&&(clearTimeout(V.current),V.current=void 0)},[]),q=n.useCallback(()=>{H(),T()},[T,H]),oe=ps(j,q),G=n.useCallback(()=>{if(!g&&!W.current){a&&oe();const t=X(j);W.current=t.setTimeout(z,r)}},[oe,g,a,z,r]),m=n.useCallback(()=>{E();const t=X(j);V.current=t.setTimeout(q,o)},[o,q,E]),re=n.useCallback(()=>{a&&i&&m()},[i,m,a]),ne=n.useCallback(()=>{a&&p&&m()},[p,m,a]),xe=n.useCallback(t=>{a&&t.key==="Escape"&&m()},[a,m]);Y(()=>ee(j),"keydown",c?xe:void 0),Y(()=>{if(!x)return null;const t=j.current;if(!t)return null;const y=ue(t);return y.localName==="body"?X(j):y},"scroll",()=>{a&&x&&q()},{passive:!0,capture:!0}),n.useEffect(()=>{g&&(E(),a&&T())},[g,a,T,E]),n.useEffect(()=>()=>{E(),H()},[E,H]),Y(()=>j.current,"pointerleave",m);const fe=n.useCallback((t={},y=null)=>({...t,ref:Ce(j,y,B),onPointerEnter:A(t.onPointerEnter,be=>{be.pointerType!=="touch"&&G()}),onClick:A(t.onClick,re),onPointerDown:A(t.onPointerDown,ne),onFocus:A(t.onFocus,G),onBlur:A(t.onBlur,m),"aria-describedby":a?M:void 0}),[G,m,ne,a,M,re,B]),ge=n.useCallback((t={},y=null)=>w({...t,style:{...t.style,[K.arrowSize.var]:h?`${h}px`:void 0,[K.arrowShadowColor.var]:S}},y),[w,h,S]),he=n.useCallback((t={},y=null)=>{const te={...t.style,position:"relative",transformOrigin:K.transformOrigin.varRef};return{ref:y,...I,...t,id:M,role:"tooltip",style:te}},[I,M]);return{isOpen:a,show:G,hide:m,getTriggerProps:fe,getTooltipProps:he,getTooltipPositionerProps:ge,getArrowProps:de,getArrowInnerProps:pe}}var J="chakra-ui:close-tooltip";function ps(e,r){return n.useEffect(()=>{const o=ee(e);return o.addEventListener(J,r),()=>o.removeEventListener(J,r)},[r,e]),()=>{const o=ee(e),i=X(e);o.dispatchEvent(new i.CustomEvent(J))}}function ds(e,r=[]){const o=Object.assign({},e);for(const i of r)i in o&&delete o[i];return o}function ms(e,r){const o={};for(const i of r)i in e&&(o[i]=e[i]);return o}var xs=_(ve.div),se=Se((e,r)=>{var o,i;const u=Pe("Tooltip",e),x=ke(e),p=De(),{children:c,label:d,shouldWrapChildren:C,"aria-label":f,hasArrow:v,bg:F,portalProps:O,background:h,backgroundColor:S,bgColor:k,motionProps:D,...g}=x,b=(i=(o=h??S)!=null?o:F)!=null?i:k;if(b){u.bg=b;const w=Ie(p,"colors",b);u[K.arrowBg.var]=w}const l=us({...g,direction:p.direction}),R=typeof c=="string"||C;let I;if(R)I=s.jsx(_.span,{display:"inline-block",tabIndex:0,...l.getTriggerProps(),children:c});else{const w=n.Children.only(c);I=n.cloneElement(w,l.getTriggerProps(w.props,w.ref))}const a=!!f,z=l.getTooltipProps({},r),T=a?ds(z,["role","id"]):z,B=ms(z,["role","id"]);return d?s.jsxs(s.Fragment,{children:[I,s.jsx(ze,{children:l.isOpen&&s.jsx(Te,{...O,children:s.jsx(_.div,{...l.getTooltipPositionerProps(),__css:{zIndex:u.zIndex,pointerEvents:"none"},children:s.jsxs(xs,{variants:cs,initial:"exit",animate:"enter",exit:"exit",...D,...T,__css:u,children:[d,a&&s.jsx(_.span,{srOnly:!0,...B,children:f}),v&&s.jsx(_.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper",children:s.jsx(_.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:u.bg}})})]})})})})]}):s.jsx(s.Fragment,{children:c})});se.displayName="Tooltip";function fs({isOpen:e,onClose:r}){const{mutateAsync:o,isPending:i}=Ee(),{control:u,formState:{errors:x},reset:p,handleSubmit:c}=es({defaultValues:{email:"",password:""},resolver:os(ss)}),d=async f=>{await o(f),p({email:"",password:""}),r(),p()},C=()=>{p({email:"",password:""}),r()};return s.jsxs(_e,{isOpen:e,onClose:C,motionPreset:"slideInTop",children:[s.jsx(Le,{}),s.jsxs(Fe,{as:"form",onSubmit:c(d),children:[s.jsx(Oe,{textAlign:"center",children:"Login"}),s.jsxs(Re,{py:6,children:[s.jsx(ce,{errors:x,label:"Email",name:"email",control:u,leftIcon:s.jsx($,{as:Je}),isRequired:!0}),s.jsx(ce,{errors:x,label:"Password",name:"password",type:"password",control:u,leftIcon:s.jsx($,{as:Qe}),isRequired:!0}),s.jsxs(P,{justifyContent:"space-between",mt:4,flexWrap:"wrap",children:[s.jsx(We,{colorScheme:"primary",size:{base:"sm",md:"md"},children:s.jsx(L,{fontSize:{base:"14px",sm:"16px"},children:"Remember me"})}),s.jsx(ie,{as:Q,size:"lg",to:"/reset-password",color:"primary.500",mt:2,fontSize:{base:"14px",sm:"16px"},children:"Forgot Password?"})]}),s.jsx(Z,{type:"submit",colorScheme:"primary",w:"100%",mt:8,size:{base:"sm",md:"md"},isLoading:i,children:"Log In"}),s.jsx(ie,{as:Q,to:"/register",color:"primary.500",mt:4,fontSize:{base:"14px",sm:"16px"},textAlign:"center",children:"Don't have an account? Register"}),s.jsxs(N,{pos:"relative",w:"100%",my:10,children:[s.jsx(Ae,{borderColor:"black",opacity:1,w:"full"}),s.jsx(Ye,{fontSize:"12px",px:4,bg:"white",children:"OR continue with"})]}),s.jsxs(P,{align:"center",justify:"center",flexWrap:"wrap",spacing:4,children:[s.jsx(Z,{colorScheme:"primary",variant:"outline",size:{base:"sm",md:"md"},leftIcon:s.jsx(Ze,{boxSize:6}),children:"Google"}),s.jsx(Z,{colorScheme:"facebook",variant:"outline",size:{base:"sm",md:"md"},leftIcon:s.jsx(Ne,{boxSize:6}),children:"Facebook"})]})]})]})]})}const gs="/assets/NoPicture-C_lL-0bt.png",Ls={0:1,350:2,850:3,1300:4},Fs=({data:e,colorOptions:r,discountPercent:o,imageWidth:i})=>{var S,k,D,g,b;const{isOpen:u,onOpen:x,onClose:p}=$e(),{data:c}=Ue({enabled:le.isAuthenticated()}),[d,C]=n.useState(!1),f=Ke(),v=Xe(),F=Be(),O=async l=>{le.isAuthenticated()?d?await v.mutateAsync(l):await f.mutateAsync({product_id:l}):x()};n.useEffect(()=>{c!=null&&c.data&&(c==null?void 0:c.data.length)>0&&C(c.data.some(l=>l.id===e.id))},[c,e.id]);const h=async l=>{await F.mutateAsync({product_id:l})};return e?s.jsxs(s.Fragment,{children:[s.jsx(fs,{isOpen:u,onClose:p}),e&&s.jsx(Q,{onClick:()=>h(e.id),to:e!=null&&e.subcategory?`/product/${(S=e==null?void 0:e.category)==null?void 0:S.slug}/${e==null?void 0:e.subcategory.slug}/${e.id}`:`/product/${(k=e==null?void 0:e.category)==null?void 0:k.slug}/${e.id}`,children:s.jsxs(is,{overflow:"hidden",h:"auto",w:"full",shadow:"none",borderRadius:0,role:"group",children:[s.jsxs(ns,{pos:"relative",overflow:"hidden",border:"1px solid #D2CFCF",p:0,children:[s.jsxs(ae,{opacity:{base:0,md:1},zIndex:8,gap:2,pos:"absolute",right:4,top:4,children:[s.jsx(se,{bg:"primary.500",label:"Cart",fontSize:"12px",children:s.jsx(U,{border:"1px solid #D2CFCF",borderRadius:"50%",bg:"#D9D9D9",_hover:{bg:"#C6C6C6"},justify:"center",align:"center",p:2,children:s.jsx($,{as:Me})})}),s.jsx(se,{bg:"primary.500",label:"WishList",fontSize:"12px",children:s.jsx(U,{border:"1px solid #D2CFCF",borderRadius:"50%",bg:"#D9D9D9",_hover:{bg:"#C6C6C6"},justify:"center",align:"center",p:2,onClick:l=>{l.preventDefault(),O(e.id)},children:f.isPending||v.isPending?s.jsx(Ve,{size:"xs"}):s.jsx($,{as:He,weight:d?"fill":"regular",textColor:d?"red.500":""})})})]}),e.image?s.jsx(N,{_groupHover:{transition:"0.3s",transform:"scale(1.1)",zIndex:-1},children:s.jsx(rs,{id:e.id,src:e.image,alt:e.id.toString(),w:i??"full"})}):s.jsx(U,{w:"full",h:"full",p:"20%",bg:"#D9D9D9",children:s.jsx(qe,{w:"full",aspectRatio:1/1,src:gs,alt:"No Picture",objectFit:"cover"})}),s.jsxs(U,{pos:"absolute",top:4,left:4,flexDir:"column",w:"fit-content",textColor:"white",gap:2,children:[(e==null?void 0:e.is_new)&&s.jsx(N,{w:"fit-content",px:2,py:.5,bg:"primary.500",fontSize:"14px",children:"New"}),o>0&&s.jsxs(N,{w:"fit-content",px:2,py:.5,bg:"red.400",fontSize:"14px",children:[o," %"]})]})]}),s.jsxs(ts,{px:0,children:[s.jsx(L,{fontSize:"12px",fontWeight:600,textColor:"#939292",children:(D=e.category)==null?void 0:D.name}),s.jsx(ae,{mb:2,children:s.jsx(L,{noOfLines:1,fontSize:{base:"14px",sm:"16px",lg:"18px"},fontWeight:500,children:e.name})}),s.jsx(P,{justify:"space-between",children:s.jsxs(P,{justifySelf:r?"flex-end":"flex-start",spacing:"2px",children:[s.jsx($,{as:Ge,boxSize:3,color:"#FFC700"}),s.jsxs(L,{fontSize:"12px",fontWeight:500,textColor:"#939292",children:[(g=e.rating)==null?void 0:g.average," (",(b=e.rating)==null?void 0:b.total,")"]})]})}),s.jsxs(P,{justify:"space-between",mt:2,children:[r&&s.jsx(P,{spacing:"4px",flexWrap:"wrap",children:r==null?void 0:r.map((l,R)=>s.jsx(N,{aspectRatio:1,w:"14px",borderRadius:"50%",bg:l.color.hex_value},R))}),s.jsxs(P,{gap:2,children:[o&&s.jsxs(L,{fontSize:{base:"12px",sm:"14px",lg:"16px"},fontWeight:500,children:["Rs.",e.price*(1-o/100)]}),s.jsxs(L,{fontSize:o?{base:"10px",sm:"12px",lg:"14px"}:{base:"12px",sm:"14px",lg:"16px"},textColor:o?"#939292":"",textDecoration:o?"line-through":"none",fontWeight:o?400:500,children:["Rs. ",e.price]})]})]})]})]})})]}):null};export{Fs as I,fs as M,se as T,Ls as c};
