import{s as T,n as b,c as h,d as j,u as O,g as S,e as E,r as L}from"../chunks/scheduler.8fdumybZ.js";import{S as k,i as H,g,h as w,j as M,x as C,f as _,k as p,a as z,y as W,r as q,s as A,u as D,c as F,v as K,z as y,d as $,t as v,w as P}from"../chunks/index.IDOYjNFL.js";const R=!0,Q=Object.freeze(Object.defineProperty({__proto__:null,prerender:R},Symbol.toStringTag,{value:"Module"}));function X(r){let t,n,i='<b class="font-bold poppins">Kompitak</b> <span class="">Fuangkosol</span>',s;return{c(){t=g("header"),n=g("h1"),n.innerHTML=i,this.h()},l(l){t=w(l,"HEADER",{class:!0});var a=M(t);n=w(a,"H1",{class:!0,"data-svelte-h":!0}),C(n)!=="svelte-1afk6dw"&&(n.innerHTML=i),a.forEach(_),this.h()},h(){p(n,"class","font-medium"),p(t,"class",s="sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid "+(r[0]>0?" py-4 bg-slate-950 border-violet-950":" py-6 bg-transparent border-transparent"))},m(l,a){z(l,t,a),W(t,n)},p(l,[a]){a&1&&s!==(s="sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid "+(l[0]>0?" py-4 bg-slate-950 border-violet-950":" py-6 bg-transparent border-transparent"))&&p(t,"class",s)},i:b,o:b,d(l){l&&_(t)}}}function Y(r,t,n){let{y:i}=t;return r.$$set=s=>{"y"in s&&n(0,i=s.y)},[i]}class B extends k{constructor(t){super(),H(this,t,Y,X,T,{y:0})}}function G(r){let t=!1,n=()=>{t=!1},i,s,l,a,c,d;h(r[5]),h(r[6]),s=new B({props:{y:r[0]}});const f=r[4].default,o=j(f,r,r[3],null);return{c(){q(s.$$.fragment),l=A(),o&&o.c()},l(e){D(s.$$.fragment,e),l=F(e),o&&o.l(e)},m(e,u){K(s,e,u),z(e,l,u),o&&o.m(e,u),a=!0,c||(d=[y(window,"scroll",()=>{t=!0,clearTimeout(i),i=setTimeout(n,100),r[5]()}),y(window,"resize",r[6])],c=!0)},p(e,[u]){u&1&&!t&&(t=!0,clearTimeout(i),scrollTo(window.pageXOffset,e[0]),i=setTimeout(n,100));const m={};u&1&&(m.y=e[0]),s.$set(m),o&&o.p&&(!a||u&8)&&O(o,f,e,e[3],a?E(f,e[3],u,null):S(e[3]),null)},i(e){a||($(s.$$.fragment,e),$(o,e),a=!0)},o(e){v(s.$$.fragment,e),v(o,e),a=!1},d(e){e&&_(l),P(s,e),o&&o.d(e),c=!1,L(d)}}}function I(r,t,n){let{$$slots:i={},$$scope:s}=t,l,a=0,c=0;function d(){n(0,l=window.pageYOffset)}function f(){n(2,c=window.innerHeight),n(1,a=window.innerWidth)}return r.$$set=o=>{"$$scope"in o&&n(3,s=o.$$scope)},[l,a,c,s,i,d,f]}class U extends k{constructor(t){super(),H(this,t,I,G,T,{})}}export{U as component,Q as universal};
