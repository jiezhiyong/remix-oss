import{j as r}from"./jsx-runtime-BMlD0yL_.js";import"./api.agreement._agreementId_.pdf_-CYRM_IyK.js";import{a as o,b as s}from"./components-CuaJT0t0.js";import"./index-DD1qRzJI.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="3e04690f-80a4-4238-87a7-2888bcfebe9d",t._sentryDebugIdIdentifier="sentry-dbid-3e04690f-80a4-4238-87a7-2888bcfebe9d")}catch{}})();const f=({data:t})=>[{title:(t==null?void 0:t.title)||"Not Found"}];function m(){const t=o(),e=s();return r.jsx("div",{className:"m-4 rounded border p-3 shadow-md",children:r.jsx("div",{className:"min-h-[30vh] border px-4 py-2 text-xl",autoFocus:!0,onBlur:n=>{String(n.currentTarget.textContent).trim()!==t.title.trim()&&e.submit({title:String(n.target.textContent)},{action:`/issues/${t.id}/update`,method:"post"})},contentEditable:!0,dangerouslySetInnerHTML:{__html:e.submission?e.submission.formData.get("title"):t.title}})})}export{m as default,f as meta};
//# sourceMappingURL=issues_._id-ambqiKFu.js.map
