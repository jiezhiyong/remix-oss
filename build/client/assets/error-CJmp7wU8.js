import{r as n,j as r}from"./jsx-runtime-D2HyDbKh.js";import{P as c,a as d}from"./x-COaCJshP.js";import{c as f}from"./cn-CytzSlOG.js";import{L as i}from"./components-2w3IXkXI.js";var m="Label",o=n.forwardRef((e,t)=>r.jsx(c.label,{...e,ref:t,onMouseDown:a=>{var s;a.target.closest("button, input, select, textarea")||((s=e.onMouseDown)==null||s.call(e,a),!a.defaultPrevented&&a.detail>1&&a.preventDefault())}}));o.displayName=m;var l=o;const u=d("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),x=n.forwardRef(({className:e,...t},a)=>r.jsx(l,{ref:a,className:f(u(),e),...t}));x.displayName=l.displayName;function p(){return r.jsxs("div",{className:"text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary",children:["By clicking continue, you agree to our ",r.jsx(i,{to:"#",children:"Terms of Service"})," and ",r.jsx(i,{to:"#",children:"Privacy Policy"}),"."]})}function P({error:e}){if(!e)return null;let t="";return typeof e=="string"?t=e:e instanceof Error&&(t=e.message),r.jsx("p",{className:"text-sm text-destructive",children:t})}export{P as E,x as L,p as P};