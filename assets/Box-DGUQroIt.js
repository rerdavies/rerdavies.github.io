import{a as B,o as v}from"./chunk-IR6S3I6Y-D5lYOIaz.js";import{h as S,i as w,d as N,c as T,u as j,s as P,j as u,a as M,T as R,C as W,k as E}from"./DefaultPropsProvider-CsmlOTJo.js";import{e as $,i as O,a as A,m as D,c as F,g as I}from"./typographyClasses-7wTuvYDW.js";function U(a={}){const{themeId:e,defaultTheme:t,defaultClassName:r="MuiBox-root",generateClassName:s}=a,n=S("div",{shouldForwardProp:o=>o!=="theme"&&o!=="sx"&&o!=="as"})(w);return B.forwardRef(function(c,h){const p=N(t),{className:g,component:m="div",...l}=$(c);return v.jsx(n,{as:m,ref:h,className:T(g,s?s(r):r),theme:e&&p[e]||p,...l})})}const H={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},V=O(),_=a=>{const{align:e,gutterBottom:t,noWrap:r,paragraph:s,variant:n,classes:i}=a,o={root:["root",n,a.align!=="inherit"&&`align${u(e)}`,t&&"gutterBottom",r&&"noWrap",s&&"paragraph"]};return M(o,A,i)},k=P("span",{name:"MuiTypography",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:t}=a;return[e.root,t.variant&&e[t.variant],t.align!=="inherit"&&e[`align${u(t.align)}`],t.noWrap&&e.noWrap,t.gutterBottom&&e.gutterBottom,t.paragraph&&e.paragraph]}})(D(({theme:a})=>{var e;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(a.typography).filter(([t,r])=>t!=="inherit"&&r&&typeof r=="object").map(([t,r])=>({props:{variant:t},style:r})),...Object.entries(a.palette).filter(F()).map(([t])=>({props:{color:t},style:{color:(a.vars||a).palette[t].main}})),...Object.entries(((e=a.palette)==null?void 0:e.text)||{}).filter(([,t])=>typeof t=="string").map(([t])=>({props:{color:`text${u(t)}`},style:{color:(a.vars||a).palette.text[t]}})),{props:({ownerState:t})=>t.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:t})=>t.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:t})=>t.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:t})=>t.paragraph,style:{marginBottom:16}}]}})),d={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},L=B.forwardRef(function(e,t){const{color:r,...s}=j({props:e,name:"MuiTypography"}),n=!H[r],i=V({...s,...n&&{color:r}}),{align:o="inherit",className:c,component:h,gutterBottom:p=!1,noWrap:g=!1,paragraph:m=!1,variant:l="body1",variantMapping:y=d,...x}=i,f={...i,align:o,color:r,className:c,component:h,gutterBottom:p,noWrap:g,paragraph:m,variant:l,variantMapping:y},C=h||(m?"p":y[l]||d[l])||"span",b=_(f);return v.jsx(k,{as:C,ref:t,className:T(b.root,c),...x,ownerState:f,style:{...o!=="inherit"&&{"--Typography-textAlign":o},...x.style}})}),z=I("MuiBox",["root"]),G=E(),Q=U({themeId:R,defaultTheme:G,defaultClassName:z.root,generateClassName:W.generate});export{Q as B,L as T};
