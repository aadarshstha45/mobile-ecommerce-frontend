import{f as p,j as c,i as G,h,bu as g,bP as y,bO as T}from"./index-C0N_k8Eq.js";var f=p(function(r,o){const{templateAreas:n,gap:s,rowGap:i,columnGap:e,column:a,row:m,autoFlow:u,autoRows:d,templateRows:l,autoColumns:C,templateColumns:R,...x}=r,S={display:"grid",gridTemplateAreas:n,gridGap:s,gridRowGap:i,gridColumnGap:e,gridAutoColumns:C,gridColumn:a,gridRow:m,gridAutoFlow:u,gridAutoRows:d,gridTemplateRows:l,gridTemplateColumns:R};return c.jsx(G.div,{ref:o,__css:S,...x})});f.displayName="Grid";var A=p(function(r,o){const{columns:n,spacingX:s,spacingY:i,spacing:e,minChildWidth:a,...m}=r,u=h(),d=a?E(a,u):_(n);return c.jsx(f,{ref:o,gap:e,columnGap:s,rowGap:i,templateColumns:d,...m})});A.displayName="SimpleGrid";function j(t){return typeof t=="number"?`${t}px`:t}function E(t,r){return g(t,o=>{const n=y("sizes",o,j(o))(r);return o===null?null:`repeat(auto-fit, minmax(${n}, 1fr))`})}function _(t){return g(t,r=>r===null?null:`repeat(${r}, minmax(0, 1fr))`)}function w(t){return g(t,r=>r==="auto"?"auto":`span ${r}/span ${r}`)}var $=p(function(r,o){const{area:n,colSpan:s,colStart:i,colEnd:e,rowEnd:a,rowSpan:m,rowStart:u,...d}=r,l=T({gridArea:n,gridColumn:w(s),gridRow:w(m),gridColumnStart:i,gridColumnEnd:e,gridRowStart:u,gridRowEnd:a});return c.jsx(G.div,{ref:o,__css:l,...d})});$.displayName="GridItem";export{$ as G,A as S};
