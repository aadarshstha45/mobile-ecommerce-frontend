import{bs as Pe,b2 as ve,b3 as je,r as n,b1 as Y,m as Ce,aR as W,b8 as K,h as T,ba as Se,f as ke,aS as De,o as Fe,g as Ie,bt as Ee,j as t,bu as Re,bv as ze,bw as Oe,bx as ae,by as Te,bz as Ae,bA as Le,u as se,au as _e,V as We,aE as Ne,a6 as $e,a7 as Be,a8 as Me,a9 as Ve,aa as qe,ac as He,H as k,aF as Qe,T as A,ah as ce,an as Z,ad as J,B as N,ay as Ge,aG as Ke,q as Xe,S as le,F as G,W as ue,aW as Ye,aC as Je,I as Ue,aw as Ze}from"./index-CU6XIhgo.js";import{a as et,u as tt,b as st}from"./index-pxmlXPfI.js";import{A as rt,G as ot}from"./GoogleIcon-DXCQQI6G.js";import"./SelectInput-Bj6s3MAD.js";import{a as de}from"./TextInput-CvODIWjx.js";import{L as nt}from"./auth-DWk1MWa1.js";import{A as it,L as at}from"./chunk-EC6XFFZH-5MhQIOre.js";import{t as ct}from"./zod-CZw6tcoN.js";import{S as lt}from"./chunk-6SZ7MXCX-C4Zn4cEm.js";import{a as ut}from"./index-B1skeUra.js";import{C as dt}from"./chunk-2EW3JUUD-XPzfB5Lj.js";import{C as pt}from"./chunk-FHHZMTWR-C-PHzHYV.js";import{C as ht}from"./chunk-YQO7BFFX--YFC_KMZ.js";import{S as ft}from"./shopping-bag-pG6ZtTiA.js";function gt(e){const s=e.ownerDocument.defaultView||window,{overflow:r,overflowX:o,overflowY:a}=s.getComputedStyle(e);return/auto|scroll|overlay|hidden/.test(r+a+o)}function mt(e){return e.localName==="html"?e:e.assignedSlot||e.parentElement||e.ownerDocument.documentElement}function pe(e){return["html","body","#document"].includes(e.localName)?e.ownerDocument.body:Pe(e)&&gt(e)?e:pe(mt(e))}var xt={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},ee=e=>{var s;return((s=e.current)==null?void 0:s.ownerDocument)||document},X=e=>{var s,r;return((r=(s=e.current)==null?void 0:s.ownerDocument)==null?void 0:r.defaultView)||window};function bt(e={}){const{openDelay:s=0,closeDelay:r=0,closeOnClick:o=!0,closeOnMouseDown:a,closeOnScroll:p,closeOnPointerDown:h=a,closeOnEsc:c=!0,onOpen:d,onClose:m,placement:f,id:x,isOpen:P,defaultIsOpen:D,arrowSize:g=10,arrowShadowColor:b,arrowPadding:F,modifiers:I,isDisabled:y,gutter:v,offset:l,direction:L,...E}=e,{isOpen:u,onOpen:R,onClose:z}=ve({isOpen:P,defaultIsOpen:D,onOpen:d,onClose:m}),{referenceRef:B,getPopperProps:j,getArrowInnerProps:he,getArrowProps:fe}=je({enabled:u,placement:f,arrowPadding:F,modifiers:I,gutter:v,offset:l,direction:L}),ge=n.useId(),M=`tooltip-${x??ge}`,C=n.useRef(null),_=n.useRef(),O=n.useCallback(()=>{_.current&&(clearTimeout(_.current),_.current=void 0)},[]),V=n.useRef(),q=n.useCallback(()=>{V.current&&(clearTimeout(V.current),V.current=void 0)},[]),H=n.useCallback(()=>{q(),z()},[z,q]),re=wt(C,H),Q=n.useCallback(()=>{if(!y&&!_.current){u&&re();const i=X(C);_.current=i.setTimeout(R,s)}},[re,y,u,R,s]),w=n.useCallback(()=>{O();const i=X(C);V.current=i.setTimeout(H,r)},[r,H,O]),oe=n.useCallback(()=>{u&&o&&w()},[o,w,u]),ne=n.useCallback(()=>{u&&h&&w()},[h,w,u]),me=n.useCallback(i=>{u&&i.key==="Escape"&&w()},[u,w]);Y(()=>ee(C),"keydown",c?me:void 0),Y(()=>{if(!p)return null;const i=C.current;if(!i)return null;const S=pe(i);return S.localName==="body"?X(C):S},"scroll",()=>{u&&p&&H()},{passive:!0,capture:!0}),n.useEffect(()=>{y&&(O(),u&&z())},[y,u,z,O]),n.useEffect(()=>()=>{O(),q()},[O,q]),Y(()=>C.current,"pointerleave",w);const xe=n.useCallback((i={},S=null)=>({...i,ref:Ce(C,S,B),onPointerEnter:W(i.onPointerEnter,ye=>{ye.pointerType!=="touch"&&Q()}),onClick:W(i.onClick,oe),onPointerDown:W(i.onPointerDown,ne),onFocus:W(i.onFocus,Q),onBlur:W(i.onBlur,w),"aria-describedby":u?M:void 0}),[Q,w,ne,u,M,oe,B]),be=n.useCallback((i={},S=null)=>j({...i,style:{...i.style,[K.arrowSize.var]:g?`${g}px`:void 0,[K.arrowShadowColor.var]:b}},S),[j,g,b]),we=n.useCallback((i={},S=null)=>{const ie={...i.style,position:"relative",transformOrigin:K.transformOrigin.varRef};return{ref:S,...E,...i,id:M,role:"tooltip",style:ie}},[E,M]);return{isOpen:u,show:Q,hide:w,getTriggerProps:xe,getTooltipProps:we,getTooltipPositionerProps:be,getArrowProps:fe,getArrowInnerProps:he}}var U="chakra-ui:close-tooltip";function wt(e,s){return n.useEffect(()=>{const r=ee(e);return r.addEventListener(U,s),()=>r.removeEventListener(U,s)},[s,e]),()=>{const r=ee(e),o=X(e);r.dispatchEvent(new o.CustomEvent(U))}}function yt(e,s=[]){const r=Object.assign({},e);for(const o of s)o in r&&delete r[o];return r}function Pt(e,s){const r={};for(const o of s)o in e&&(r[o]=e[o]);return r}var vt=T(Se.div),te=ke((e,s)=>{var r,o;const a=De("Tooltip",e),p=Fe(e),h=Ie(),{children:c,label:d,shouldWrapChildren:m,"aria-label":f,hasArrow:x,bg:P,portalProps:D,background:g,backgroundColor:b,bgColor:F,motionProps:I,...y}=p,v=(o=(r=g??b)!=null?r:P)!=null?o:F;if(v){a.bg=v;const j=Ee(h,"colors",v);a[K.arrowBg.var]=j}const l=bt({...y,direction:h.direction}),L=typeof c=="string"||m;let E;if(L)E=t.jsx(T.span,{display:"inline-block",tabIndex:0,...l.getTriggerProps(),children:c});else{const j=n.Children.only(c);E=n.cloneElement(j,l.getTriggerProps(j.props,j.ref))}const u=!!f,R=l.getTooltipProps({},s),z=u?yt(R,["role","id"]):R,B=Pt(R,["role","id"]);return d?t.jsxs(t.Fragment,{children:[E,t.jsx(Re,{children:l.isOpen&&t.jsx(ze,{...D,children:t.jsx(T.div,{...l.getTooltipPositionerProps(),__css:{zIndex:a.zIndex,pointerEvents:"none"},children:t.jsxs(vt,{variants:xt,initial:"exit",animate:"enter",exit:"exit",...I,...z,__css:a,children:[d,u&&t.jsx(T.span,{srOnly:!0,...B,children:f}),x&&t.jsx(T.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper",children:t.jsx(T.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:a.bg}})})]})})})})]}):t.jsx(t.Fragment,{children:c})});te.displayName="Tooltip";var jt=class extends Oe{constructor(e,s){super(e,s)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,s){super.setOptions({...e,behavior:ae()},s)}getOptimisticResult(e){return e.behavior=ae(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,s){var g,b;const{state:r}=e,o=super.createResult(e,s),{isFetching:a,isRefetching:p,isError:h,isRefetchError:c}=o,d=(b=(g=r.fetchMeta)==null?void 0:g.fetchMore)==null?void 0:b.direction,m=h&&d==="forward",f=a&&d==="forward",x=h&&d==="backward",P=a&&d==="backward";return{...o,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:Te(s,r.data),hasPreviousPage:Ae(s,r.data),isFetchNextPageError:m,isFetchingNextPage:f,isFetchPreviousPageError:x,isFetchingPreviousPage:P,isRefetchError:c&&!m&&!x,isRefetching:p&&!f&&!P}}};function Ct(e,s){return Le(e,jt)}const $={getProducts:({page:e,sort:s,sizes:r,colors:o})=>`shop?page=${e} ${s&&`&sort=${s}`} ${r&&`&sizes=${r}`} ${o&&`&colors=${o}`}`,getFaqs:e=>`get-faqs?product_id=${e}`,getProductById:e=>`get-product-details/${e}`,getRelatedProducts:e=>`get-related-products/${e}`,getProductsByCategory:e=>`get-products-by-category/${e}`,addViewAction:"/add-view-action"},St=({sort:e,page:s,sizes:r,colors:o})=>We.get($.getProducts({sort:e,page:s,sizes:r,colors:o})),qt=(e,s,r)=>Ct({queryKey:["products",{sort:e,sizes:s,colors:r}],queryFn:async({pageParam:o=1})=>(await St({page:o,sort:e,sizes:s,colors:r})).data,initialPageParam:1,getNextPageParam:(o,a)=>{var p;return((p=o==null?void 0:o.data)==null?void 0:p.length)===0?void 0:a.length+1},refetchOnWindowFocus:!1}),Ht=e=>se({apiEndPoint:$.getProductById(e)}),Qt=e=>se({apiEndPoint:$.getRelatedProducts(e)}),kt=()=>_e({apiEndPoint:$.addViewAction}),Gt=e=>se({apiEndPoint:$.getFaqs(e)});function Dt({isOpen:e,onClose:s}){const{mutateAsync:r,isPending:o}=Ne(),{control:a,formState:{errors:p},reset:h,handleSubmit:c}=$e({defaultValues:{email:"",password:""},resolver:ct(nt)}),d=async f=>{await r(f),h({email:"",password:""}),s(),h()},m=()=>{h({email:"",password:""}),s()};return t.jsxs(Be,{isOpen:e,onClose:m,motionPreset:"slideInTop",children:[t.jsx(Me,{}),t.jsxs(Ve,{as:"form",onSubmit:c(d),children:[t.jsx(qe,{textAlign:"center",children:"Login"}),t.jsxs(He,{py:6,children:[t.jsx(de,{errors:p,label:"Email",name:"email",control:a,leftIcon:t.jsx(it,{}),isRequired:!0}),t.jsx(de,{errors:p,label:"Password",name:"password",type:"password",control:a,leftIcon:t.jsx(at,{}),isRequired:!0}),t.jsxs(k,{justifyContent:"space-between",mt:4,flexWrap:"wrap",children:[t.jsx(Qe,{colorScheme:"primary",size:{base:"sm",md:"md"},children:t.jsx(A,{fontSize:{base:"14px",sm:"16px"},children:"Remember me"})}),t.jsx(ce,{as:Z,size:"lg",to:"/reset-password",color:"primary.500",mt:2,fontSize:{base:"14px",sm:"16px"},children:"Forgot Password?"})]}),t.jsx(J,{type:"submit",colorScheme:"primary",w:"100%",mt:8,size:{base:"sm",md:"md"},isLoading:o,children:"Log In"}),t.jsx(ce,{as:Z,to:"/register",color:"primary.500",mt:4,fontSize:{base:"14px",sm:"16px"},textAlign:"center",children:"Don't have an account? Register"}),t.jsxs(N,{pos:"relative",w:"100%",my:10,children:[t.jsx(Ge,{borderColor:"black",opacity:1,w:"full"}),t.jsx(rt,{fontSize:"12px",px:4,bg:"white",children:"OR continue with"})]}),t.jsxs(k,{align:"center",justify:"center",flexWrap:"wrap",spacing:4,children:[t.jsx(J,{colorScheme:"primary",variant:"outline",size:{base:"sm",md:"md"},leftIcon:t.jsx(ot,{boxSize:6}),children:"Google"}),t.jsx(J,{colorScheme:"facebook",variant:"outline",size:{base:"sm",md:"md"},leftIcon:t.jsx(Ke,{boxSize:6}),children:"Facebook"})]})]})]})]})}const Ft="/assets/NoPicture-C_lL-0bt.png",Kt={0:1,350:2,850:3,1300:4},Xt=({data:e,colorOptions:s,discountPercent:r,imageWidth:o})=>{var b,F,I,y,v;const{isOpen:a,onOpen:p,onClose:h}=Xe(),{data:c}=et(),[d,m]=n.useState(!1),f=tt(),x=st(),P=kt(),D=async l=>{Ze.isAuthenticated()?d?await x.mutateAsync(l):await f.mutateAsync({product_id:l}):p()};n.useEffect(()=>{c!=null&&c.data&&(c==null?void 0:c.data.length)>0&&m(c.data.some(l=>l.id===e.id))},[c,e.id]);const g=async l=>{await P.mutateAsync({product_id:l})};return e?t.jsxs(t.Fragment,{children:[t.jsx(Dt,{isOpen:a,onClose:h}),e&&t.jsx(Z,{onClick:()=>g(e.id),to:e!=null&&e.subcategory?`/product/${(b=e==null?void 0:e.category)==null?void 0:b.slug}/${e==null?void 0:e.subcategory.slug}/${e.id}`:`/product/${(F=e==null?void 0:e.category)==null?void 0:F.slug}/${e.id}`,children:t.jsxs(ht,{overflow:"hidden",h:"auto",w:"full",shadow:"none",borderRadius:0,role:"group",children:[t.jsxs(dt,{pos:"relative",overflow:"hidden",border:"1px solid #D2CFCF",p:0,children:[t.jsxs(le,{opacity:{base:0,md:1},zIndex:8,gap:2,pos:"absolute",right:4,top:4,children:[t.jsx(te,{bg:"primary.500",label:"Cart",fontSize:"12px",children:t.jsx(G,{border:"1px solid #D2CFCF",borderRadius:"50%",bg:"#D9D9D9",_hover:{bg:"#C6C6C6"},justify:"center",align:"center",p:2,children:t.jsx(ue,{as:ft})})}),t.jsx(te,{bg:"primary.500",label:"WishList",fontSize:"12px",children:t.jsx(G,{border:"1px solid #D2CFCF",borderRadius:"50%",bg:"#D9D9D9",_hover:{bg:"#C6C6C6"},justify:"center",align:"center",p:2,onClick:l=>{l.preventDefault(),D(e.id)},children:f.isPending||x.isPending?t.jsx(Ye,{size:"xs"}):t.jsx(ue,{as:Je,fill:d?"red.500":"",textColor:d?"red.500":""})})})]}),e.image?t.jsx(N,{_groupHover:{transition:"0.3s",transform:"scale(1.1)",zIndex:-1},children:t.jsx(ut,{id:e.id,src:e.image,alt:e.id.toString(),w:o??"full"})}):t.jsx(G,{w:"full",h:"full",p:"20%",bg:"#D9D9D9",children:t.jsx(Ue,{w:"full",aspectRatio:1/1,src:Ft,alt:"No Picture",objectFit:"cover"})}),t.jsxs(G,{pos:"absolute",top:4,left:4,flexDir:"column",w:"fit-content",textColor:"white",gap:2,children:[(e==null?void 0:e.is_new)&&t.jsx(N,{w:"fit-content",px:2,py:.5,bg:"primary.500",fontSize:"14px",children:"New"}),r>0&&t.jsxs(N,{w:"fit-content",px:2,py:.5,bg:"red.400",fontSize:"14px",children:[r," %"]})]})]}),t.jsxs(pt,{px:0,children:[t.jsx(A,{fontSize:"12px",fontWeight:600,textColor:"#939292",children:(I=e.category)==null?void 0:I.name}),t.jsx(le,{mb:2,children:t.jsx(A,{noOfLines:1,fontSize:{base:"14px",sm:"16px",lg:"18px"},fontWeight:500,children:e.name})}),t.jsx(k,{justify:"space-between",children:t.jsxs(k,{justifySelf:s?"flex-end":"flex-start",spacing:"2px",children:[t.jsx(lt,{boxSize:3,color:"#FFC700"}),t.jsxs(A,{fontSize:"12px",fontWeight:500,textColor:"#939292",children:[(y=e.rating)==null?void 0:y.average," (",(v=e.rating)==null?void 0:v.total,")"]})]})}),t.jsxs(k,{justify:"space-between",mt:2,children:[s&&t.jsx(k,{spacing:"4px",flexWrap:"wrap",children:s==null?void 0:s.map((l,L)=>t.jsx(N,{aspectRatio:1,w:"14px",borderRadius:"50%",bg:l.color.hex_value},L))}),t.jsxs(k,{gap:2,children:[r&&t.jsxs(A,{fontSize:{base:"12px",sm:"14px",lg:"16px"},fontWeight:500,children:["Rs.",e.price*(1-r/100)]}),t.jsxs(A,{fontSize:r?{base:"10px",sm:"12px",lg:"14px"}:{base:"12px",sm:"14px",lg:"16px"},textColor:r?"#939292":"",textDecoration:r?"line-through":"none",fontWeight:r?400:500,children:["Rs. ",e.price]})]})]})]})]})})]}):null};export{Xt as I,Dt as M,te as T,Qt as a,Ht as b,Kt as c,qt as d,Gt as u};
