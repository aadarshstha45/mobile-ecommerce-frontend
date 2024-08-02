import{a7 as _,ay as q,l as v,j as r,o as g,m as I,r as b,az as G,aC as J,aB as S,aM as k,aN as Q,a9 as R,a8 as z,aE as V,w as $,c as X,a4 as O}from"./index-C3jGOrgU.js";import{C as ee}from"./chevron-right-CdazZhIJ.js";var[ne,E]=_({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[se,W]=_({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[oe,Ae,te,ae]=q(),re=v(function(e,o){const{getButtonProps:t}=W(),n=t(e,o),a={display:"flex",alignItems:"center",width:"100%",outline:0,...E().button};return r.jsx(g.button,{...n,className:I("chakra-accordion__button",e.className),__css:a})});re.displayName="AccordionButton";function ce(s){const{onChange:e,defaultIndex:o,index:t,allowMultiple:n,allowToggle:c,...a}=s;de(s),ue(s);const f=te(),[m,i]=b.useState(-1);b.useEffect(()=>()=>{i(-1)},[]);const[d,p]=G({value:t,defaultValue(){return n?o??[]:o??-1},onChange:e});return{index:d,setIndex:p,htmlProps:a,getAccordionItemProps:l=>{let x=!1;return l!==null&&(x=Array.isArray(d)?d.includes(l):d===l),{isOpen:x,onChange:h=>{if(l!==null)if(n&&Array.isArray(d)){const j=h?d.concat(l):d.filter(B=>B!==l);p(j)}else h?p(l):c&&p(-1)}}},focusedIndex:m,setFocusedIndex:i,descendants:f}}var[le,K]=_({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function ie(s){const{isDisabled:e,isFocusable:o,id:t,...n}=s,{getAccordionItemProps:c,setFocusedIndex:a}=K(),f=b.useRef(null),m=b.useId(),i=t??m,d=`accordion-button-${i}`,p=`accordion-panel-${i}`;me(s);const{register:A,index:l,descendants:x}=ae({disabled:e&&!o}),{isOpen:u,onChange:h}=c(l===-1?null:l);pe({isOpen:u,isDisabled:e});const j=()=>{h==null||h(!0)},B=()=>{h==null||h(!1)},L=b.useCallback(()=>{h==null||h(!u),a(l)},[l,a,u,h]),T=b.useCallback(w=>{const N={ArrowDown:()=>{const y=x.nextEnabled(l);y==null||y.node.focus()},ArrowUp:()=>{const y=x.prevEnabled(l);y==null||y.node.focus()},Home:()=>{const y=x.firstEnabled();y==null||y.node.focus()},End:()=>{const y=x.lastEnabled();y==null||y.node.focus()}}[w.key];N&&(w.preventDefault(),N(w))},[x,l]),H=b.useCallback(()=>{a(l)},[a,l]),Y=b.useCallback(function(C={},N=null){return{...C,type:"button",ref:J(A,f,N),id:d,disabled:!!e,"aria-expanded":!!u,"aria-controls":p,onClick:S(C.onClick,L),onFocus:S(C.onFocus,H),onKeyDown:S(C.onKeyDown,T)}},[d,e,u,L,H,T,p,A]),Z=b.useCallback(function(C={},N=null){return{...C,ref:N,role:"region",id:p,"aria-labelledby":d,hidden:!u}},[d,u,p]);return{isOpen:u,isDisabled:e,isFocusable:o,onOpen:j,onClose:B,getButtonProps:Y,getPanelProps:Z,htmlProps:n}}function de(s){const e=s.index||s.defaultIndex,o=e!=null&&!Array.isArray(e)&&s.allowMultiple;k({condition:!!o,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof e},`})}function ue(s){k({condition:!!(s.allowMultiple&&s.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}function me(s){k({condition:!!(s.isFocusable&&!s.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `})}function pe(s){k({condition:s.isOpen&&!!s.isDisabled,message:"Cannot open a disabled accordion item"})}var fe=v(function(e,o){const{children:t,className:n}=e,{htmlProps:c,...a}=ie(e),m={...E().container,overflowAnchor:"none"},i=b.useMemo(()=>a,[a]);return r.jsx(se,{value:i,children:r.jsx(g.div,{ref:o,...c,className:I("chakra-accordion__item",n),__css:m,children:typeof t=="function"?t({isExpanded:!!a.isOpen,isDisabled:!!a.isDisabled}):t})})});fe.displayName="AccordionItem";var be=v(function(e,o){const{className:t,motionProps:n,...c}=e,{reduceMotion:a}=K(),{getPanelProps:f,isOpen:m}=W(),i=f(c,o),d=I("chakra-accordion__panel",t),p=E();a||delete i.hidden;const A=r.jsx(g.div,{...i,__css:p.panel,className:d});return a?A:r.jsx(Q,{in:m,...n,children:A})});be.displayName="AccordionPanel";var xe=v(function({children:e,reduceMotion:o,...t},n){const c=R("Accordion",t),a=z(t),{htmlProps:f,descendants:m,...i}=ce(a),d=b.useMemo(()=>({...i,reduceMotion:!!o}),[i,o]);return r.jsx(oe,{value:m,children:r.jsx(le,{value:d,children:r.jsx(ne,{value:c,children:r.jsx(g.div,{ref:n,...f,className:I("chakra-accordion",t.className),__css:c.root,children:e})})})})});xe.displayName="Accordion";var[he,F]=_({name:"BreadcrumbStylesContext",errorMessage:`useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `}),P=v(function(e,o){const{isCurrentPage:t,as:n,className:c,href:a,...f}=e,m=F(),i={ref:o,as:n,className:I("chakra-breadcrumb__link",c),...f};return t?r.jsx(g.span,{"aria-current":"page",__css:m.link,...i}):r.jsx(g.a,{__css:m.link,href:a,...i})});P.displayName="BreadcrumbLink";var M=v(function(e,o){const{spacing:t,...n}=e,c=F(),a={mx:t,...c.separator};return r.jsx(g.span,{ref:o,role:"presentation",...n,__css:a})});M.displayName="BreadcrumbSeparator";var D=v(function(e,o){const{isCurrentPage:t,separator:n,isLastChild:c,spacing:a,children:f,className:m,...i}=e,p=V(f).map(u=>u.type===P?b.cloneElement(u,{isCurrentPage:t}):u.type===M?b.cloneElement(u,{spacing:a,children:u.props.children||n}):u),l={display:"inline-flex",alignItems:"center",...F().item},x=I("chakra-breadcrumb__list-item",m);return r.jsxs(g.li,{ref:o,className:x,...i,__css:l,children:[p,!c&&r.jsx(M,{spacing:a,children:n})]})});D.displayName="BreadcrumbItem";var U=v(function(e,o){const t=R("Breadcrumb",e),n=z(e),{children:c,spacing:a="0.5rem",separator:f="/",className:m,listProps:i,...d}=n,p=V(c),A=p.length,l=p.map((u,h)=>b.cloneElement(u,{separator:f,spacing:a,isLastChild:A===h+1})),x=I("chakra-breadcrumb",m);return r.jsx(g.nav,{ref:o,"aria-label":"breadcrumb",className:x,__css:t.container,...d,children:r.jsx(he,{value:t,children:r.jsx(g.ol,{className:"chakra-breadcrumb__list",...i,__css:{display:"flex",alignItems:"center",...t.list},children:l})})})});U.displayName="Breadcrumb";var ve=$({displayName:"MinusIcon",path:r.jsx("g",{fill:"currentColor",children:r.jsx("rect",{height:"4",width:"20",x:"2",y:"10"})})}),Ce=$({d:"M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z",displayName:"AddIcon"});const Ie=({bg:s})=>{const e=X();let o="";const t=e.pathname.split("/").filter(n=>n!==""&&n!=="product"&&!/^\d+$/.test(n)).map(n=>{o+=`/${n}`;const c=n.replace(/-/g," ");return r.jsx(P,{textTransform:"capitalize",as:O,to:o,fontSize:{base:"14px",md:"16px",xl:"18px"},children:c},n)});return r.jsxs(U,{bg:s,separator:r.jsx(ee,{size:20}),children:[r.jsx(D,{children:r.jsx(P,{fontSize:{base:"14px",md:"16px",xl:"18px"},as:O,to:"/",children:"Home"})}),t.map((n,c)=>r.jsx(D,{children:n},c))]})};export{xe as A,Ie as B,ve as M,K as a,E as b,fe as c,re as d,be as e,Ce as f,W as u};
