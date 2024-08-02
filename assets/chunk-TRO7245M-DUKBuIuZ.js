import{ab as _,ax as V,t as I,j as f,x as C,v as P,r as m,ay as K,az as W,aA as M,aB as N,aC as $,ad as U,ac as z,H as B}from"./index-DQ2lrmGm.js";var[Y,j]=_({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[Z,H]=_({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[q,re,G,J]=V(),L=I(function(n,o){const{getButtonProps:a}=H(),i=a(n,o),s={display:"flex",alignItems:"center",width:"100%",outline:0,...j().button};return f.jsx(C.button,{...i,className:P("chakra-accordion__button",n.className),__css:s})});L.displayName="AccordionButton";function Q(e){const{onChange:n,defaultIndex:o,index:a,allowMultiple:i,allowToggle:r,...s}=e;ne(e),oe(e);const h=G(),[x,l]=m.useState(-1);m.useEffect(()=>()=>{l(-1)},[]);const[c,d]=K({value:a,defaultValue(){return i?o??[]:o??-1},onChange:n});return{index:c,setIndex:d,htmlProps:s,getAccordionItemProps:t=>{let y=!1;return t!==null&&(y=Array.isArray(c)?c.includes(t):c===t),{isOpen:y,onChange:A=>{if(t!==null)if(i&&Array.isArray(c)){const k=A?c.concat(t):c.filter(D=>D!==t);d(k)}else A?d(t):r&&d(-1)}}},focusedIndex:x,setFocusedIndex:l,descendants:h}}var[X,O]=_({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function ee(e){const{isDisabled:n,isFocusable:o,id:a,...i}=e,{getAccordionItemProps:r,setFocusedIndex:s}=O(),h=m.useRef(null),x=m.useId(),l=a??x,c=`accordion-button-${l}`,d=`accordion-panel-${l}`;se(e);const{register:g,index:t,descendants:y}=J({disabled:n&&!o}),{isOpen:p,onChange:A}=r(t===-1?null:t);te({isOpen:p,isDisabled:n});const k=()=>{A==null||A(!0)},D=()=>{A==null||A(!1)},E=m.useCallback(()=>{A==null||A(!p),s(t)},[t,s,p,A]),S=m.useCallback(w=>{const v={ArrowDown:()=>{const u=y.nextEnabled(t);u==null||u.node.focus()},ArrowUp:()=>{const u=y.prevEnabled(t);u==null||u.node.focus()},Home:()=>{const u=y.firstEnabled();u==null||u.node.focus()},End:()=>{const u=y.lastEnabled();u==null||u.node.focus()}}[w.key];v&&(w.preventDefault(),v(w))},[y,t]),F=m.useCallback(()=>{s(t)},[s,t]),T=m.useCallback(function(b={},v=null){return{...b,type:"button",ref:W(g,h,v),id:c,disabled:!!n,"aria-expanded":!!p,"aria-controls":d,onClick:M(b.onClick,E),onFocus:M(b.onFocus,F),onKeyDown:M(b.onKeyDown,S)}},[c,n,p,E,F,S,d,g]),R=m.useCallback(function(b={},v=null){return{...b,ref:v,role:"region",id:d,"aria-labelledby":c,hidden:!p}},[c,p,d]);return{isOpen:p,isDisabled:n,isFocusable:o,onOpen:k,onClose:D,getButtonProps:T,getPanelProps:R,htmlProps:i}}function ne(e){const n=e.index||e.defaultIndex,o=n!=null&&!Array.isArray(n)&&e.allowMultiple;N({condition:!!o,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof n},`})}function oe(e){N({condition:!!(e.allowMultiple&&e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}function se(e){N({condition:!!(e.isFocusable&&!e.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `})}function te(e){N({condition:e.isOpen&&!!e.isDisabled,message:"Cannot open a disabled accordion item"})}var ae=I(function(n,o){const{children:a,className:i}=n,{htmlProps:r,...s}=ee(n),x={...j().container,overflowAnchor:"none"},l=m.useMemo(()=>s,[s]);return f.jsx(Z,{value:l,children:f.jsx(C.div,{ref:o,...r,className:P("chakra-accordion__item",i),__css:x,children:typeof a=="function"?a({isExpanded:!!s.isOpen,isDisabled:!!s.isDisabled}):a})})});ae.displayName="AccordionItem";var ce=I(function(n,o){const{className:a,motionProps:i,...r}=n,{reduceMotion:s}=O(),{getPanelProps:h,isOpen:x}=H(),l=h(r,o),c=P("chakra-accordion__panel",a),d=j();s||delete l.hidden;const g=f.jsx(C.div,{...l,__css:d.panel,className:c});return s?g:f.jsx($,{in:x,...i,children:g})});ce.displayName="AccordionPanel";var le=I(function({children:n,reduceMotion:o,...a},i){const r=U("Accordion",a),s=z(a),{htmlProps:h,descendants:x,...l}=Q(s),c=m.useMemo(()=>({...l,reduceMotion:!!o}),[l,o]);return f.jsx(q,{value:x,children:f.jsx(X,{value:c,children:f.jsx(Y,{value:r,children:f.jsx(C.div,{ref:i,...h,className:P("chakra-accordion",a.className),__css:r.root,children:n})})})})});le.displayName="Accordion";var de=B({displayName:"MinusIcon",path:f.jsx("g",{fill:"currentColor",children:f.jsx("rect",{height:"4",width:"20",x:"2",y:"10"})})}),ue=B({d:"M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z",displayName:"AddIcon"});export{le as A,de as M,ae as a,L as b,ue as c,ce as d,O as e,j as f,H as u};
