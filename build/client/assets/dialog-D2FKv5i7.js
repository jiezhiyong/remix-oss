import{r,j as o}from"./jsx-runtime-BMlD0yL_.js";import{c as B,a as N,T as X,O as g,W as J,C as m,b as K,d as u,D,e as x,f as v,R as b,X as Q}from"./x-X8OSiik2.js";import{u as j,S as U,b as w}from"./button-B_xz3V2G.js";import{c as i}from"./cn-B8mTpEaj.js";import"./api.agreement._agreementId_.pdf_-CYRM_IyK.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="fb158c07-8dce-4b58-b928-be3b67b694a2",e._sentryDebugIdIdentifier="sentry-dbid-fb158c07-8dce-4b58-b928-be3b67b694a2")}catch{}})();var h="AlertDialog",[Z,Ee]=B(h,[N]),n=N(),R=e=>{const{__scopeAlertDialog:a,...t}=e,s=n(a);return o.jsx(b,{...s,...t,modal:!0})};R.displayName=h;var ee="AlertDialogTrigger",_=r.forwardRef((e,a)=>{const{__scopeAlertDialog:t,...s}=e,l=n(t);return o.jsx(X,{...l,...s,ref:a})});_.displayName=ee;var ae="AlertDialogPortal",C=e=>{const{__scopeAlertDialog:a,...t}=e,s=n(a);return o.jsx(v,{...s,...t})};C.displayName=ae;var te="AlertDialogOverlay",E=r.forwardRef((e,a)=>{const{__scopeAlertDialog:t,...s}=e,l=n(t);return o.jsx(g,{...l,...s,ref:a})});E.displayName=te;var d="AlertDialogContent",[oe,se]=Z(d),T=r.forwardRef((e,a)=>{const{__scopeAlertDialog:t,children:s,...l}=e,f=n(t),p=r.useRef(null),q=j(a,p),y=r.useRef(null);return o.jsx(J,{contentName:d,titleName:P,docsSlug:"alert-dialog",children:o.jsx(oe,{scope:t,cancelRef:y,children:o.jsxs(m,{role:"alertdialog",...f,...l,ref:q,onOpenAutoFocus:K(l.onOpenAutoFocus,c=>{var A;c.preventDefault(),(A=y.current)==null||A.focus({preventScroll:!0})}),onPointerDownOutside:c=>c.preventDefault(),onInteractOutside:c=>c.preventDefault(),children:[o.jsx(U,{children:s}),o.jsx(le,{contentRef:p})]})})})});T.displayName=d;var P="AlertDialogTitle",S=r.forwardRef((e,a)=>{const{__scopeAlertDialog:t,...s}=e,l=n(t);return o.jsx(u,{...l,...s,ref:a})});S.displayName=P;var O="AlertDialogDescription",I=r.forwardRef((e,a)=>{const{__scopeAlertDialog:t,...s}=e,l=n(t);return o.jsx(D,{...l,...s,ref:a})});I.displayName=O;var re="AlertDialogAction",$=r.forwardRef((e,a)=>{const{__scopeAlertDialog:t,...s}=e,l=n(t);return o.jsx(x,{...l,...s,ref:a})});$.displayName=re;var k="AlertDialogCancel",M=r.forwardRef((e,a)=>{const{__scopeAlertDialog:t,...s}=e,{cancelRef:l}=se(k,t),f=n(t),p=j(a,l);return o.jsx(x,{...f,...s,ref:p})});M.displayName=k;var le=({contentRef:e})=>{const a=`\`${d}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${d}\` by passing a \`${O}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${d}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return r.useEffect(()=>{var s;document.getElementById((s=e.current)==null?void 0:s.getAttribute("aria-describedby"))||console.warn(a)},[a,e]),null},ie=R,ne=_,de=C,z=E,F=T,H=$,L=M,G=S,W=I;const Te=ie,Pe=ne,ce=de,V=r.forwardRef(({className:e,...a},t)=>o.jsx(z,{className:i("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...a,ref:t}));V.displayName=z.displayName;const pe=r.forwardRef(({className:e,...a},t)=>o.jsxs(ce,{children:[o.jsx(V,{}),o.jsx(F,{ref:t,className:i("fixed left-[50%] top-[5%] z-50 grid w-full max-w-[50%] translate-x-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:border-white/20 dark:bg-slate-950 sm:rounded-lg",e),...a})]}));pe.displayName=F.displayName;const fe=({className:e,...a})=>o.jsx("div",{className:i("flex flex-col space-y-2 text-center sm:text-left",e),...a});fe.displayName="AlertDialogHeader";const ge=({className:e,...a})=>o.jsx("div",{className:i("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...a});ge.displayName="AlertDialogFooter";const me=r.forwardRef(({className:e,...a},t)=>o.jsx(G,{ref:t,className:i("text-lg font-semibold",e),...a}));me.displayName=G.displayName;const ue=r.forwardRef(({className:e,...a},t)=>o.jsx(W,{ref:t,className:i("whitespace-pre font-[monospace] text-sm text-muted-foreground",e),...a}));ue.displayName=W.displayName;const De=r.forwardRef(({className:e,variant:a="default",size:t="default",...s},l)=>o.jsx(H,{ref:l,className:i(w({variant:a,size:t}),e),...s}));De.displayName=H.displayName;const xe=r.forwardRef(({className:e,variant:a="outline",size:t="default",...s},l)=>o.jsx(L,{ref:l,className:i(w({variant:a,size:t}),"mt-2 sm:mt-0",e),...s}));xe.displayName=L.displayName;const Se=b,ye=v,Y=r.forwardRef(({className:e,...a},t)=>o.jsx(g,{ref:t,className:i("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...a}));Y.displayName=g.displayName;const Ae=r.forwardRef(({className:e,children:a,...t},s)=>o.jsxs(ye,{children:[o.jsx(Y,{}),o.jsxs(m,{ref:s,className:i("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...t,children:[a,o.jsxs(x,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[o.jsx(Q,{className:"h-4 w-4"}),o.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));Ae.displayName=m.displayName;const Ne=({className:e,...a})=>o.jsx("div",{className:i("flex flex-col space-y-1.5 text-center sm:text-left",e),...a});Ne.displayName="DialogHeader";const ve=({className:e,...a})=>o.jsx("div",{className:i("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...a});ve.displayName="DialogFooter";const be=r.forwardRef(({className:e,...a},t)=>o.jsx(u,{ref:t,className:i("text-lg font-semibold leading-none tracking-tight",e),...a}));be.displayName=u.displayName;const je=r.forwardRef(({className:e,...a},t)=>o.jsx(D,{ref:t,className:i("whitespace-pre font-[monospace] text-sm text-muted-foreground",e),...a}));je.displayName=D.displayName;export{Te as A,Se as D,Ae as a,Ne as b,be as c,je as d,ve as e,pe as f,fe as g,me as h,ue as i,ge as j,xe as k,De as l,Pe as m};
//# sourceMappingURL=dialog-D2FKv5i7.js.map
