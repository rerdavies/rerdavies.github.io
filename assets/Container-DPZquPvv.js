import{l as h,r as W,d as v,c as k,j as c,a as P,e as R,g as G,s as T,u as $}from"./DefaultPropsProvider-CsmlOTJo.js";import{a as S,o as M}from"./chunk-IR6S3I6Y-D5lYOIaz.js";const j=h();function y(o){const{theme:t,name:s,props:n}=o;return!t||!t.components||!t.components[s]||!t.components[s].defaultProps?n:W(t.components[s].defaultProps,n)}function L({props:o,name:t,defaultTheme:s,themeId:n}){let i=v(s);return n&&(i=i[n]||i),y({theme:i,name:t,props:o})}const N=R(),U=j("div",{name:"MuiContainer",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,t[`maxWidth${c(String(s.maxWidth))}`],s.fixed&&t.fixed,s.disableGutters&&t.disableGutters]}}),z=o=>L({props:o,name:"MuiContainer",defaultTheme:N}),D=(o,t)=>{const s=r=>G(t,r),{classes:n,fixed:i,disableGutters:l,maxWidth:e}=o,a={root:["root",e&&`maxWidth${c(String(e))}`,i&&"fixed",l&&"disableGutters"]};return P(a,s,n)};function E(o={}){const{createStyledComponent:t=U,useThemeProps:s=z,componentName:n="MuiContainer"}=o,i=t(({theme:e,ownerState:a})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!a.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}}),({theme:e,ownerState:a})=>a.fixed&&Object.keys(e.breakpoints.values).reduce((r,p)=>{const u=p,d=e.breakpoints.values[u];return d!==0&&(r[e.breakpoints.up(u)]={maxWidth:`${d}${e.breakpoints.unit}`}),r},{}),({theme:e,ownerState:a})=>({...a.maxWidth==="xs"&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},...a.maxWidth&&a.maxWidth!=="xs"&&{[e.breakpoints.up(a.maxWidth)]:{maxWidth:`${e.breakpoints.values[a.maxWidth]}${e.breakpoints.unit}`}}}));return S.forwardRef(function(a,r){const p=s(a),{className:u,component:d="div",disableGutters:x=!1,fixed:f=!1,maxWidth:b="lg",classes:w,...g}=p,m={...p,component:d,disableGutters:x,fixed:f,maxWidth:b},C=D(m,n);return M.jsx(i,{as:d,ownerState:m,className:k(C.root,u),ref:r,...g})})}const A=E({createStyledComponent:T("div",{name:"MuiContainer",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,t[`maxWidth${c(String(s.maxWidth))}`],s.fixed&&t.fixed,s.disableGutters&&t.disableGutters]}}),useThemeProps:o=>$({props:o,name:"MuiContainer"})});export{A as C,j as s,L as u};
