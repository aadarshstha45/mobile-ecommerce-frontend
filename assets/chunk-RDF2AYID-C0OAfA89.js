import{r as n,m as ae,bw as Q,e as se,f as X,j as _,i as G,A as te,bJ as ne,bK as le,bL as i,aM as m,aL as U,g as ie,o as re,bM as ce,bN as ue}from"./index-C0N_k8Eq.js";function de(s){return s&&Q(s)&&Q(s.target)}function pe(s={}){const{onChange:p,value:r,defaultValue:o,name:c,isDisabled:d,isFocusable:g,isNative:h,...y}=s,[P,v]=n.useState(o||""),b=typeof r<"u",C=b?r:P,f=n.useRef(null),R=n.useCallback(()=>{const a=f.current;if(!a)return;let t="input:not(:disabled):checked";const k=a.querySelector(t);if(k){k.focus();return}t="input:not(:disabled)";const u=a.querySelector(t);u==null||u.focus()},[]),l=`radio-${n.useId()}`,w=c||l,D=n.useCallback(a=>{const t=de(a)?a.target.value:a;b||v(t),p==null||p(String(t))},[p,b]),q=n.useCallback((a={},t=null)=>({...a,ref:ae(t,f),role:"radiogroup"}),[]),x=n.useCallback((a={},t=null)=>({...a,ref:t,name:w,[h?"checked":"isChecked"]:C!=null?a.value===C:void 0,onChange(u){D(u)},"data-radiogroup":!0}),[h,w,D,C]);return{getRootProps:q,getRadioProps:x,name:w,ref:f,focus:R,setValue:v,value:C,onChange:D,isDisabled:d,isFocusable:g,htmlProps:y}}var[he,Y]=se({name:"RadioGroupContext",strict:!1}),be=X((s,p)=>{const{colorScheme:r,size:o,variant:c,children:d,className:g,isDisabled:h,isFocusable:y,...P}=s,{value:v,onChange:b,getRootProps:C,name:f,htmlProps:R}=pe(P),S=n.useMemo(()=>({name:f,size:o,onChange:b,colorScheme:r,value:v,variant:c,isDisabled:h,isFocusable:y}),[f,o,b,r,v,c,h,y]);return _.jsx(he,{value:S,children:_.jsx(G.div,{...C(R,p),className:te("chakra-radio-group",g),children:d})})});be.displayName="RadioGroup";var fe={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};function ge(s={}){const{defaultChecked:p,isChecked:r,isFocusable:o,isDisabled:c,isReadOnly:d,isRequired:g,onChange:h,isInvalid:y,name:P,value:v,id:b,"data-radiogroup":C,"aria-describedby":f,...R}=s,S=`radio-${n.useId()}`,l=ne(),D=!!Y()||!!C;let x=!!l&&!D?l.id:S;x=b??x;const a=c??(l==null?void 0:l.isDisabled),t=d??(l==null?void 0:l.isReadOnly),k=g??(l==null?void 0:l.isRequired),u=y??(l==null?void 0:l.isInvalid),[A,L]=n.useState(!1),[M,E]=n.useState(!1),[j,K]=n.useState(!1),[O,N]=n.useState(!1),[Z,ee]=n.useState(!!p),B=typeof r<"u",F=B?r:Z;n.useEffect(()=>le(L),[]);const H=n.useCallback(e=>{if(t||a){e.preventDefault();return}B||ee(e.target.checked),h==null||h(e)},[B,a,t,h]),V=n.useCallback(e=>{e.key===" "&&N(!0)},[N]),W=n.useCallback(e=>{e.key===" "&&N(!1)},[N]),$=n.useCallback((e={},I=null)=>({...e,ref:I,"data-active":i(O),"data-hover":i(j),"data-disabled":i(a),"data-invalid":i(u),"data-checked":i(F),"data-focus":i(M),"data-focus-visible":i(M&&A),"data-readonly":i(t),"aria-hidden":!0,onMouseDown:m(e.onMouseDown,()=>N(!0)),onMouseUp:m(e.onMouseUp,()=>N(!1)),onMouseEnter:m(e.onMouseEnter,()=>K(!0)),onMouseLeave:m(e.onMouseLeave,()=>K(!1))}),[O,j,a,u,F,M,t,A]),{onFocus:z,onBlur:J}=l??{},oe=n.useCallback((e={},I=null)=>{const T=a&&!o;return{...e,id:x,ref:I,type:"radio",name:P,value:v,onChange:m(e.onChange,H),onBlur:m(J,e.onBlur,()=>E(!1)),onFocus:m(z,e.onFocus,()=>E(!0)),onKeyDown:m(e.onKeyDown,V),onKeyUp:m(e.onKeyUp,W),checked:F,disabled:T,readOnly:t,required:k,"aria-invalid":U(u),"aria-disabled":U(T),"aria-required":U(k),"data-readonly":i(t),"aria-describedby":f,style:fe}},[a,o,x,P,v,H,J,z,V,W,F,t,k,u,f]);return{state:{isInvalid:u,isFocused:M,isChecked:F,isActive:O,isHovered:j,isDisabled:a,isReadOnly:t,isRequired:k},getCheckboxProps:$,getRadioProps:$,getInputProps:oe,getLabelProps:(e={},I=null)=>({...e,ref:I,onMouseDown:m(e.onMouseDown,ve),"data-disabled":i(a),"data-checked":i(F),"data-invalid":i(u)}),getRootProps:(e,I=null)=>({...e,ref:I,"data-disabled":i(a),"data-checked":i(F),"data-invalid":i(u)}),htmlProps:R}}function ve(s){s.preventDefault(),s.stopPropagation()}function Ce(s,p){const r={},o={};for(const[c,d]of Object.entries(s))p.includes(c)?r[c]=d:o[c]=d;return[r,o]}var ke=X((s,p)=>{var r;const o=Y(),{onChange:c,value:d}=s,g=ie("Radio",{...o,...s}),h=re(s),{spacing:y="0.5rem",children:P,isDisabled:v=o==null?void 0:o.isDisabled,isFocusable:b=o==null?void 0:o.isFocusable,inputProps:C,...f}=h;let R=s.isChecked;(o==null?void 0:o.value)!=null&&d!=null&&(R=o.value===d);let S=c;o!=null&&o.onChange&&d!=null&&(S=ce(o.onChange,c));const l=(r=s==null?void 0:s.name)!=null?r:o==null?void 0:o.name,{getInputProps:w,getCheckboxProps:D,getLabelProps:q,getRootProps:x,htmlProps:a}=ge({...f,isChecked:R,isFocusable:b,isDisabled:v,onChange:S,name:l}),[t,k]=Ce(a,ue),u=D(k),A=w(C,p),L=q(),M=Object.assign({},t,x()),E={display:"inline-flex",alignItems:"center",verticalAlign:"top",cursor:"pointer",position:"relative",...g.container},j={display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,...g.control},K={userSelect:"none",marginStart:y,...g.label};return _.jsxs(G.label,{className:"chakra-radio",...M,__css:E,children:[_.jsx("input",{className:"chakra-radio__input",...A}),_.jsx(G.span,{className:"chakra-radio__control",...u,__css:j}),P&&_.jsx(G.span,{className:"chakra-radio__label",...L,__css:K,children:P})]})});ke.displayName="Radio";export{be as R,ke as a};
